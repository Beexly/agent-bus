#!/usr/bin/env python3
"""Wave 2: broader queries to push the corpus past 500 unique papers. Merges into master.jsonl."""
import json, os, time, urllib.parse, urllib.request, xml.etree.ElementTree as ET
from datetime import datetime, timezone

OUT = os.path.expanduser("~/workspace/arxiv-sweep")
NS = {"a": "http://www.w3.org/2005/Atom"}

QUERIES = [
    ("football_prediction", 'all:"football prediction"'),
    ("basketball_prediction", 'all:"basketball prediction"'),
    ("tennis_prediction", 'all:tennis AND all:"prediction model"'),
    ("hockey_prediction", 'all:hockey AND all:prediction'),
    ("baseball_sabermetrics", 'all:baseball AND all:prediction AND all:model'),
    ("cricket_prediction", 'all:cricket AND all:"prediction model"'),
    ("expected_points", 'all:"expected points" AND all:sports'),
    ("betting_odds_pred", 'abs:"betting odds" AND abs:prediction'),
    ("kelly_criterion", 'all:"Kelly criterion" AND all:sports'),
    ("market_making", 'all:"market making" AND all:betting'),
    ("player_performance", 'all:"player performance prediction"'),
    ("injury_prediction", 'all:"injury prediction" AND all:sports'),
    ("draft_ml", 'all:draft AND all:"machine learning" AND all:sports'),
    ("monte_carlo_sports", 'all:"Monte Carlo" AND all:simulation AND all:sports'),
    ("timeseries_forecast", 'all:"time series" AND all:"sports forecasting"'),
    ("deep_learning_analytics", 'all:"deep learning" AND all:"sports analytics"'),
    ("xg_football", 'all:xG AND all:football'),
    ("plus_minus", 'all:"plus-minus" AND all:sports AND all:rating'),
    ("glicko", 'all:Glicko'),
    ("poisson_simple", 'all:Poisson AND all:football'),
    ("transformer_simple", 'all:transformer AND all:sports'),
    ("epa_simple", 'all:"expected points added"'),
    ("conformal_sports", 'all:"conformal prediction" AND all:sports'),
    ("causal_sports", 'all:"causal inference" AND all:sports'),
]

def fetch(query, max_results=60):
    params = urllib.parse.urlencode({
        "search_query": query, "start": 0, "max_results": max_results,
        "sortBy": "submittedDate", "sortOrder": "descending",
    })
    url = f"https://export.arxiv.org/api/query?{params}"
    req = urllib.request.Request(url, headers={"User-Agent": "GSE-research-sweep/1.0 (mailto:research@local)"})
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read()

def parse(atom_xml):
    root = ET.fromstring(atom_xml)
    out = []
    for e in root.findall("a:entry", NS):
        pid = e.find("a:id", NS).text.rsplit("/abs/", 1)[-1]
        out.append({
            "id": pid,
            "title": " ".join(e.find("a:title", NS).text.split()),
            "authors": [a.find("a:name", NS).text for a in e.findall("a:author", NS)],
            "abstract": " ".join(e.find("a:summary", NS).text.split()),
            "published": e.find("a:published", NS).text,
            "categories": [c.attrib.get("term") for c in e.findall("a:category", NS)],
            "url": f"https://arxiv.org/abs/{pid}",
            "doi": (lambda d: d.text if d is not None else None)(e.find("a:doi", NS)),
        })
    return out

def main():
    with open(f"{OUT}/master.jsonl") as f:
        seen = {json.loads(line)["id"]: json.loads(line) for line in f}
    # re-read properly to keep queries lists
    seen = {}
    with open(f"{OUT}/master.jsonl") as f:
        for line in f:
            p = json.loads(line)
            seen[p["id"]] = p
    with open(f"{OUT}/manifest.json") as f:
        manifest = json.load(f)
    new_total = 0
    for name, q in QUERIES:
        try:
            papers = parse(fetch(q))
        except Exception as ex:
            print(f"QUERY {name} FAILED: {ex}")
            time.sleep(4)
            continue
        added = 0
        for p in papers:
            if p["id"] not in seen:
                p["queries"] = [name]
                seen[p["id"]] = p
                added += 1
            elif name not in seen[p["id"]]["queries"]:
                seen[p["id"]]["queries"].append(name)
        new_total += added
        print(f"{name}: {len(papers)} fetched, {added} new")
        time.sleep(4)
    master = sorted(seen.values(), key=lambda p: p["published"], reverse=True)
    with open(f"{OUT}/master.jsonl", "w") as f:
        for p in master:
            f.write(json.dumps(p) + "\n")
    manifest["unique_papers"] = len(master)
    manifest["wave2_new"] = new_total
    with open(f"{OUT}/manifest.json", "w") as f:
        json.dump(manifest, f, indent=1)
    print(f"UNIQUE TOTAL: {len(master)} (+{new_total} wave 2)")

if __name__ == "__main__":
    main()
