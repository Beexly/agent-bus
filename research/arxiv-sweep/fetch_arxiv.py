#!/usr/bin/env python3
"""Fetch arXiv metadata across many sports-prediction queries. Respects arXiv rate limits (3s+ between calls)."""
import json, os, time, urllib.parse, urllib.request, xml.etree.ElementTree as ET
from datetime import datetime, timezone

OUT = os.path.expanduser("~/workspace/arxiv-sweep")
NS = {"a": "http://www.w3.org/2005/Atom"}

QUERIES = [
    ("sports_prediction", 'all:"sports prediction"'),
    ("sports_betting_ml", 'all:"sports betting" AND all:"machine learning"'),
    ("sports_forecasting", 'abs:"sports forecasting"'),
    ("expected_goals", 'all:"expected goals"'),
    ("player_tracking", 'all:"player tracking" AND all:sports'),
    ("elo_rating", 'all:"Elo rating" AND all:sports'),
    ("win_probability", 'all:"win probability" AND all:sports'),
    ("point_spread", 'all:"point spread" AND all:prediction'),
    ("fantasy_sports", 'all:"fantasy sports" AND all:prediction'),
    ("match_prediction", 'all:"match prediction" AND all:football'),
    ("odds_modeling", 'all:odds AND all:"machine learning" AND all:sports'),
    ("bradley_terry", 'all:"Bradley-Terry"'),
    ("poisson_football", 'all:Poisson AND all:"football prediction"'),
    ("rl_sports", 'all:"reinforcement learning" AND all:"sports analytics"'),
    ("gnn_sports", 'all:"graph neural network" AND all:sports'),
    ("transformer_sports_pred", 'all:transformer AND all:"sports prediction"'),
    ("nfl_model", 'all:NFL AND all:"prediction model"'),
    ("cpoe_epa", 'all:"expected points added" OR all:"completion percentage over expected"'),
    ("calibration_sports", 'all:calibration AND all:prediction AND all:sports'),
    ("market_efficiency", 'all:"betting market" AND all:efficiency AND all:sports'),
]

def fetch(query, max_results=60, sort_by="submittedDate"):
    params = urllib.parse.urlencode({
        "search_query": query,
        "start": 0, "max_results": max_results,
        "sortBy": sort_by, "sortOrder": "descending",
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
        title = " ".join(e.find("a:title", NS).text.split())
        abstract = " ".join(e.find("a:summary", NS).text.split())
        authors = [a.find("a:name", NS).text for a in e.findall("a:author", NS)]
        published = e.find("a:published", NS).text
        cats = [c.attrib.get("term") for c in e.findall("a:category", NS)]
        doi_el = e.find("a:doi", NS)
        out.append({
            "id": pid,
            "title": title,
            "authors": authors,
            "abstract": abstract,
            "published": published,
            "categories": cats,
            "doi": doi_el.text if doi_el is not None else None,
            "url": f"https://arxiv.org/abs/{pid}",
        })
    return out

def main():
    seen = {}
    per_query_counts = {}
    ts = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
    for name, q in QUERIES:
        try:
            papers = parse(fetch(q))
        except Exception as ex:
            print(f"QUERY {name} FAILED: {ex}")
            per_query_counts[name] = 0
            time.sleep(4)
            continue
        per_query_counts[name] = len(papers)
        with open(f"{OUT}/raw_{name}.json", "w") as f:
            json.dump({"query": q, "fetched_at": ts, "papers": papers}, f, indent=1)
        for p in papers:
            if p["id"] not in seen:
                p["queries"] = [name]
                seen[p["id"]] = p
            elif name not in seen[p["id"]]["queries"]:
                seen[p["id"]]["queries"].append(name)
        print(f"{name}: {len(papers)} papers")
        time.sleep(4)
    master = sorted(seen.values(), key=lambda p: p["published"], reverse=True)
    with open(f"{OUT}/master.jsonl", "w") as f:
        for p in master:
            f.write(json.dumps(p) + "\n")
    with open(f"{OUT}/manifest.json", "w") as f:
        json.dump({"fetched_at": ts, "per_query_counts": per_query_counts,
                   "unique_papers": len(master)}, f, indent=1)
    print(f"UNIQUE: {len(master)}")

if __name__ == "__main__":
    main()
