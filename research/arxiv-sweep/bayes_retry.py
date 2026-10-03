#!/usr/bin/env python3
"""Retry the failed arXiv queries with backoff; append deduped candidates."""
import json, re, time, urllib.request, urllib.parse, xml.etree.ElementTree as ET
from pathlib import Path

BASE = Path.home() / "workspace" / "arxiv-sweep"
OUT = BASE / "phase2-candidates-bayes.jsonl"

excluded = set()
with open(BASE / "phase2-excluded-ids.txt") as f:
    for line in f:
        x = line.strip()
        if x:
            excluded.add(re.sub(r"v\d+$", "", x))

# Already-have base IDs from current candidate file
have = set()
if OUT.exists():
    for line in OUT.read_text().splitlines():
        try:
            r = json.loads(line)
            have.add(re.sub(r"v\d+$", "", r["id"]))
        except Exception:
            pass
print(f"excluded={len(excluded)} already_have={len(have)}")

FAILED = [
    "Gaussian process sports prediction team strength",
    "dynamic linear model regime switching sports",
    "state space model team ratings time-varying",
    "player performance prediction hierarchical shrinkage",
    "contest theory DFS stacking",
    "matchup effects modeling sports",
    "Kalman filter player tracking sports analytics",
    "particle filter sports movement prediction",
]

NS = {"a": "http://www.w3.org/2005/Atom"}

def fetch(q, tries=6):
    params = urllib.parse.urlencode({
        "search_query": f"all:{q}", "start": 0, "max_results": 200,
        "sortBy": "relevance", "sortOrder": "descending"})
    url = f"http://export.arxiv.org/api/query?{params}"
    for t in range(tries):
        try:
            req = urllib.request.Request(url,
                headers={"User-Agent": "Motif-arXiv-sweep/1.0 (mailto:research@example.com)"})
            with urllib.request.urlopen(req, timeout=60) as r:
                return r.read()
        except Exception as ex:
            wait = 5 * (2 ** t)
            print(f"  attempt {t+1} failed: {ex}; sleeping {wait}s")
            time.sleep(wait)
    raise RuntimeError(f"all retries failed for {q}")

def parse(data, query):
    root = ET.fromstring(data)
    out = []
    for e in root.findall("a:entry", NS):
        idurl = e.find("a:id", NS).text.strip()
        bid = re.sub(r"v\d+$", "", idurl.rsplit("/", 1)[-1])
        out.append({
            "base_id": bid,
            "id": idurl.rsplit("/", 1)[-1],
            "title": " ".join(e.find("a:title", NS).text.split()),
            "authors": [a.find("a:name", NS).text for a in e.findall("a:author", NS)],
            "abstract": " ".join(e.find("a:summary", NS).text.split()),
            "published": e.find("a:published", NS).text[:10],
            "categories": ",".join(c.get("term") for c in e.findall("a:category", NS)),
            "url": idurl.replace("http://", "https://"),
            "query": query,
        })
    return out

new = []
for q in FAILED:
    time.sleep(4)
    try:
        data = fetch(q)
    except Exception as ex:
        print(f"GAVE UP {q!r}: {ex}")
        continue
    ents = parse(data, q)
    kept = 0
    for e in ents:
        if e["base_id"] in excluded or e["base_id"] in have:
            continue
        have.add(e["base_id"])
        kept += 1
        new.append(e)
    print(f"{q[:55]:60s} raw={len(ents):3d} kept={kept:3d}")
    time.sleep(3)

with open(OUT, "a") as f:
    for r in new:
        rec = {k: r[k] for k in ("id", "title", "authors", "abstract", "published", "categories", "url", "query")}
        f.write(json.dumps(rec) + "\n")
print(f"appended {len(new)} new candidates")
