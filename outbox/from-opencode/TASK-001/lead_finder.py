#!/usr/bin/env python3
"""Kit lead-list generator v1.

Finds local service businesses in a US city + niche, scores them as
prospects for a $350 one-page website ("Kit" lane), and writes leads.csv.

Data sources (all free, keyless):
  - Nominatim (OpenStreetMap geocoder) — resolves the city to a bounding box.
  - Overpass API (OpenStreetMap data) — finds businesses by trade/craft tags
    and case-insensitive name match inside that bounding box.
  - Direct HTTP checks (HEAD, fallback GET) — verifies whether a business's
    listed website actually loads.

Usage:
    python3 lead_finder.py --city "Austin, TX" --niche "plumbers" --limit 20

Output: leads.csv with columns
    business_name, address, phone, website_url, rating, score, notes

Scoring (0-100, higher = better Kit prospect):
    no findable website ............ 85-100 (best prospects)
    website listed but dead ........ 70-84  (site exists but broken)
    live website, weak signals ..... 40-69  (http-only, bare domain, etc.)
    live solid website ............. 10-39  (weakest prospects)
Small adjustments (+/-5) for tag completeness (has phone, full address).
"""

import argparse
import csv
import re
import sys
import time
import urllib.parse

import requests

USER_AGENT = "KitLeadFinder/1.0 (local-sales-research; contact: builder via agent-bus)"
NOMINATIM_URL = "https://nominatim.openstreetmap.org/search"
OVERPASS_URLS = [
    # private.coffee first: verified working 2026-09-10; the others are
    # fallbacks (de rate-limits, kumi was timing out at test time).
    "https://overpass.private.coffee/api/interpreter",
    "https://overpass-api.de/api/interpreter",
    "https://overpass.kumi.systems/api/interpreter",
]
REQUEST_TIMEOUT = 15

# niche keyword -> OSM craft/trade tag values commonly used for it.
NICHE_TAGS = {
    "plumber": ["plumber"],
    "plumbers": ["plumber"],
    "electrician": ["electrician"],
    "electricians": ["electrician"],
    "hvac": ["hvac"],
    "roofer": ["roofer"],
    "roofers": ["roofer", "roofing"],
    "painter": ["painter"],
    "painters": ["painter"],
    "landscaper": ["gardener", "landscaper"],
    "landscapers": ["gardener", "landscaper"],
    "mechanic": ["car_repair", "motorcycle_repair"],
    "mechanics": ["car_repair", "motorcycle_repair"],
    "barber": ["barber"],
    "barbers": ["barber"],
    "salon": ["hairdresser", "beauty"],
    "salons": ["hairdresser", "beauty"],
    "dentist": ["dentist"],
    "dentists": ["dentist"],
    "lawyer": ["lawyer"],
    "lawyers": ["lawyer"],
    "restaurant": ["restaurant"],
    "restaurants": ["restaurant"],
    "cafe": ["cafe"],
    "cafes": ["cafe"],
    "bakery": ["bakery", "confectionery"],
    "bakeries": ["bakery", "confectionery"],
    "gym": ["gym", "fitness_centre"],
    "gyms": ["gym", "fitness_centre"],
    "locksmith": ["locksmith"],
    "locksmiths": ["locksmith"],
    "cleaner": ["cleaning"],
    "cleaners": ["cleaning"],
}


def niche_values(niche):
    """Return exact OSM tag values to look up for a niche string.

    Mapped niches use known craft/trade values; unmapped ones fall back
    to the raw words (exact match, low recall — documented in README).
    """
    key = niche.strip().lower()
    tags = list(NICHE_TAGS.get(key, []))
    words = re.findall(r"[a-z]+", key)
    variants = set()
    for w in words:
        if len(w) < 3:
            continue
        variants.add(w)
        if w.endswith("s") and len(w) > 3:
            variants.add(w[:-1])  # plumbers -> plumber
        else:
            variants.add(w + "s")
    # mapped values first (best recall), then raw-word guesses
    values = tags + [v for v in sorted(variants) if v not in tags]
    if not values:
        raise SystemExit("Could not parse niche: %r" % niche)
    return values


def geocode_city(city):
    """Resolve a city to (display_name, south, north, west, east)."""
    resp = requests.get(
        NOMINATIM_URL,
        params={"q": city, "format": "json", "limit": 1, "countrycodes": "us"},
        headers={"User-Agent": USER_AGENT},
        timeout=REQUEST_TIMEOUT,
    )
    resp.raise_for_status()
    results = resp.json()
    if not results:
        raise SystemExit("City not found: %r" % city)
    r = results[0]
    south, north, west, east = (float(x) for x in r["boundingbox"])
    return (r["display_name"], south, north, west, east,
            float(r["lat"]), float(r["lon"]))


# Search radii (m). The script tries the tight radius first and widens
# once if it comes up short — noted in the CSV notes column.
RADII_M = (30000, 45000)
OVERPASS_CLIENT_TIMEOUT = 185

# OSM keys that carry a business-trade value.
TRADE_KEYS = ("craft", "trade", "shop", "office")


def build_overpass_query(values, lat, lon, radius_m, want):
    """Build an Overpass QL query: EXACT tag matches only.

    Deliberately no regex — neither on names (scans every named object in
    the radius) nor on values (the public mirrors 504 on it). Exact
    key=value lookups are index-served and complete, at the cost of
    missing mistagged businesses. See README "known limits".
    """
    area = "around:%d,%f,%f" % (radius_m, lat, lon)
    clauses = []
    for v in values:
        for key in TRADE_KEYS:
            clauses.append('nwr["%s"="%s"](%s);' % (key, v, area))
    return "[out:json][timeout:150];(%s);out center tags %d;" % (
        "".join(clauses),
        want,
    )


def query_overpass(query):
    last_err = None
    for url in OVERPASS_URLS:
        try:
            resp = requests.post(
                url,
                data={"data": query},
                headers={"User-Agent": USER_AGENT},
                timeout=OVERPASS_CLIENT_TIMEOUT,
            )
            resp.raise_for_status()
            return resp.json().get("elements", [])
        except Exception as exc:  # try next mirror
            last_err = exc
            time.sleep(2)
    raise SystemExit("Overpass query failed on all mirrors: %s" % last_err)


def norm_url(raw):
    if not raw:
        return ""
    raw = raw.strip().split(";")[0].strip()  # first if multi-valued
    if not raw:
        return ""
    if not re.match(r"^https?://", raw, re.I):
        raw = "http://" + raw
    return raw


DDG_URL = "https://html.duckduckgo.com/html/"
DDG_UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
          "(KHTML, like Gecko) Chrome/126.0 Safari/537.36")

# Domains that are directories/social pages, never a business's own site.
DIRECTORY_DOMAINS = (
    "yelp.com", "facebook.com", "instagram.com", "angi.com",
    "homeadvisor.com", "thumbtack.com", "yellowpages.com", "bbb.org",
    "chamberofcommerce.com", "mapquest.com", "yahoo.com", "nextdoor.com",
    "manta.com", "superpages.com", "houzz.com", "porch.com", "duckduckgo.com",
)

# Generic words ignored when matching a business name against a domain.
NAME_STOPWORDS = {
    "plumbing", "plumber", "services", "service", "llc", "inc", "co",
    "company", "group", "pros", "pro", "experts", "expert", "team",
    "contracting", "contractor", "construction", "supply", "supplies",
    "water", "septic", "drain", "rooter", "heating", "cooling", "air",
    "electric", "electrical", "roofing", "roofer", "painting", "painter",
    "cleaning", "landscaping", "lawn", "the", "and", "of", "a", "tx", "texas",
}


def ddg_candidate_sites(name, city, max_results=8):
    """Search DuckDuckGo for the business; return candidate site URLs.

    Returns (urls, error). urls are decoded outbounds minus ads; error is
    None on success. Keyless HTML endpoint, 1 query per business.
    """
    try:
        resp = requests.get(
            DDG_URL,
            params={"q": "%s %s" % (name, city)},
            headers={"User-Agent": DDG_UA},
            timeout=REQUEST_TIMEOUT,
        )
        if resp.status_code == 202:
            # rate-limit screen: wait once and retry
            time.sleep(15)
            resp = requests.get(
                DDG_URL,
                params={"q": "%s %s" % (name, city)},
                headers={"User-Agent": DDG_UA},
                timeout=REQUEST_TIMEOUT,
            )
        if resp.status_code != 200:
            return [], "DDG HTTP %d" % resp.status_code
        raw_links = re.findall(r'class="result__a"[^>]*href="([^"]+)',
                               resp.text)
        urls = []
        for link in raw_links:
            m = re.search(r"uddg=([^&]+)", link)
            if not m:
                continue
            target = urllib.parse.unquote(m.group(1))
            if "y.js" in target or "ad_domain" in target:
                continue  # ad
            if target.startswith("http"):
                urls.append(target)
        return urls[:max_results], None
    except Exception as exc:
        return [], "DDG unreachable (%s)" % type(exc).__name__


def looks_like_own_site(url, name):
    """Heuristic: does this URL look like the business's own website?"""
    host = urllib.parse.urlparse(url).netloc.lower()
    if host.startswith("www."):
        host = host[4:]
    if any(host == d or host.endswith("." + d) for d in DIRECTORY_DOMAINS):
        return False
    tokens = [w for w in re.findall(r"[a-z]+", name.lower())
              if w not in NAME_STOPWORDS]
    squished = host.split(":")[0].replace("-", "").replace(".", " ")
    squished = squished.rsplit(" ", 1)[0] if " " in squished else squished
    for tok in tokens:
        if len(tok) >= 5 and tok in squished:
            return True
    return False


def check_website_alive(url):
    """Return (alive_bool, detail). HEAD first, fall back to GET."""
    try:
        r = requests.head(
            url,
            headers={"User-Agent": USER_AGENT},
            timeout=REQUEST_TIMEOUT,
            allow_redirects=True,
        )
        if r.status_code < 400:
            return True, "HTTP %d" % r.status_code
        if r.status_code in (403, 405):
            g = requests.get(
                url,
                headers={"User-Agent": USER_AGENT},
                timeout=REQUEST_TIMEOUT,
                allow_redirects=True,
                stream=True,
            )
            g.close()
            if g.status_code < 400:
                return True, "HTTP %d" % g.status_code
        return False, "HTTP %d" % r.status_code
    except Exception as exc:
        return False, "unreachable (%s)" % type(exc).__name__


def format_address(tags, center):
    parts = []
    hn = tags.get("addr:housenumber", "")
    st = tags.get("addr:street", "")
    if hn or st:
        parts.append(("%s %s" % (hn, st)).strip())
    for key in ("addr:city", "addr:state", "addr:postcode"):
        if tags.get(key):
            parts.append(tags[key])
    if parts:
        return ", ".join(parts)
    if center:
        return "approx %.5f, %.5f (no street address in OSM)" % (
            center[0],
            center[1],
        )
    return ""


def score_lead(has_site, alive, detail, url, tags):
    notes = []
    adj = 0
    if tags.get("phone") or tags.get("contact:phone"):
        adj += 2
    if tags.get("addr:street") and tags.get("addr:housenumber"):
        adj += 3
    if not has_site:
        score = 90 + min(adj, 10)
        notes.append("no website listed in OSM")
        return min(score, 100), "; ".join(notes)
    if not alive:
        if "HTTP 403" in detail:
            # 403 usually means bot-blocking, not a dead site. Don't
            # score it as a broken website; flag for manual verification.
            score = 60 + min(adj, 9)
            notes.append("listed website blocked automated check: %s %s "
                         "- verify manually, may be live" % (url, detail))
            return min(score, 69), "; ".join(notes)
        score = 75 + min(adj, 9)
        notes.append("listed website appears dead: %s %s" % (url, detail))
        return min(score, 84), "; ".join(notes)
    # live site — look for weakness signals
    weak = []
    parsed = urllib.parse.urlparse(url)
    if parsed.scheme == "http":
        weak.append("not https")
    host = parsed.netloc.lower()
    if host.startswith("www.facebook.com") or "facebook.com" in host:
        weak.append("facebook page instead of website")
    if host.endswith(
        ("yelp.com", "thumbtack.com", "angi.com", "homeadvisor.com",
         "yellowpages.com", "bbb.org")
    ):
        weak.append("directory listing instead of own website")
    if weak:
        score = 55 + min(adj, 10)
        notes.append("live but weak web presence (%s): %s" % (", ".join(weak), url))
        return min(score, 69), "; ".join(notes)
    score = 25 + min(adj, 10)
    notes.append("has working website: %s" % url)
    return min(score, 39), "; ".join(notes)


def find_leads(city, niche, limit):
    display, s, n, w, e, lat, lon = geocode_city(city)
    values = niche_values(niche)

    # de-dupe by normalised name; keep richest tags
    by_name = {}
    widened = False
    for radius_m in RADII_M:
        query = build_overpass_query(values, lat, lon, radius_m, limit * 6)
        for el in query_overpass(query):
            t = el.get("tags", {})
            name = (t.get("name") or "").strip()
            if not name:
                continue
            key = re.sub(r"\s+", " ", name).lower()
            if key not in by_name or len(t) > len(by_name[key]["tags"]):
                center = None
                if "lat" in el and "lon" in el:
                    center = (el["lat"], el["lon"])
                elif isinstance(el.get("center"), dict):
                    center = (el["center"].get("lat"), el["center"].get("lon"))
                by_name[key] = {"name": name, "tags": t, "center": center}
        if len(by_name) >= limit or radius_m == RADII_M[-1]:
            break
        widened = True  # try the wider radius
        time.sleep(1)

    leads = []
    for item in list(by_name.values())[:limit]:
        t = item["tags"]
        url = norm_url(t.get("website") or t.get("contact:website") or "")
        found_via_search = ""
        if not url:
            # OSM has no website tag — cross-check the web before
            # claiming the business has no site (OSM tags are often
            # simply missing; see README).
            candidates, ddg_err = ddg_candidate_sites(item["name"], city)
            time.sleep(2)  # be polite to DDG (rate-limits fast queries)
            for cand in candidates:
                if looks_like_own_site(cand, item["name"]):
                    url = cand
                    found_via_search = (
                        "website not in OSM, found via web search "
                        "(heuristic match - verify before outreach)")
                    break
            if not url:
                if ddg_err:
                    found_via_search = "web cross-check unavailable (%s)" % ddg_err
                else:
                    found_via_search = "web cross-check found no own site"
        if url:
            alive, detail = check_website_alive(url)
            time.sleep(0.3)  # be polite to small business servers
        else:
            alive, detail = False, "none listed"
        score, notes = score_lead(bool(url), alive, detail, url, t)
        if found_via_search:
            notes = found_via_search + "; " + notes
        if widened:
            notes += "; search widened to %dkm for coverage" % (RADII_M[-1] // 1000)
        phone = t.get("phone") or t.get("contact:phone") or ""
        leads.append(
            {
                "business_name": item["name"],
                "address": format_address(t, item["center"]),
                "phone": phone,
                "website_url": url,
                "rating": "",  # OSM carries no ratings; see README
                "score": score,
                "notes": notes,
            }
        )
    leads.sort(key=lambda r: r["score"], reverse=True)
    return display, leads


def main(argv=None):
    ap = argparse.ArgumentParser(description="Kit lead-list generator v1")
    ap.add_argument("--city", required=True, help='e.g. "Austin, TX"')
    ap.add_argument("--niche", required=True, help='e.g. "plumbers"')
    ap.add_argument("--limit", type=int, default=20)
    ap.add_argument("--out", default="leads.csv")
    args = ap.parse_args(argv)

    display, leads = find_leads(args.city, args.niche, args.limit)
    with open(args.out, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(
            f,
            fieldnames=["business_name", "address", "phone",
                        "website_url", "rating", "score", "notes"],
        )
        w.writeheader()
        w.writerows(leads)
    print("City resolved: %s" % display)
    print("Wrote %d leads to %s" % (len(leads), args.out))
    return 0


if __name__ == "__main__":
    sys.exit(main())
