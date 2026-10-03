#!/usr/bin/env python3
"""Wave 3: theory, methods, sports ML, databases, APIs, engines, data infra.
Merges into master.jsonl (dedup by arXiv id)."""
import json, os, urllib.parse, urllib.request, xml.etree.ElementTree as ET
from datetime import datetime, timezone

OUT = os.path.expanduser("~/workspace/arxiv-sweep")
NS = {"a": "http://www.w3.org/2005/Atom"}

QUERIES = [
    # ---- theory ----
    ("prob_theory_pred", 'all:"probability theory" AND all:forecasting'),
    ("prediction_theory", 'ti:"prediction theory"'),
    ("stat_decision", 'all:"statistical decision theory" AND all:prediction'),
    ("info_theory_forecast", 'all:"information theory" AND all:prediction AND all:sports'),
    ("game_theory_sports", 'all:"game theory" AND all:sports AND all:strategy'),
    ("bayes_theory", 'all:Bayesian AND all:"sports prediction"'),
    # ---- methods ----
    ("uncertainty_quant", 'all:"uncertainty quantification" AND all:sports'),
    ("bayesian_sports", 'all:Bayesian AND all:sports AND all:modeling'),
    ("feature_eng", 'all:"feature engineering" AND all:sports'),
    ("ensemble_sports", 'all:ensemble AND all:"sports prediction"'),
    ("survival_sports", 'all:"survival analysis" AND all:sports'),
    ("hawkes_sports", 'all:Hawkes AND all:sports'),
    ("diffusion_sports", 'all:"diffusion model" AND all:sports'),
    ("optimal_transport", 'all:"optimal transport" AND all:sports'),
    ("tda_sports", 'all:"topological data analysis" AND all:sports'),
    ("bandit_sports", 'all:bandit AND all:sports AND all:prediction'),
    ("state_space", 'all:"state space model" AND all:sports'),
    # ---- sports ML ----
    ("sports_ml_survey", 'all:"sports analytics" AND all:"machine learning" AND all:survey'),
    ("player_tracking_ml", 'all:"player tracking" AND all:"machine learning" AND all:football'),
    ("computer_vision_sports", 'all:"computer vision" AND all:sports AND all:analytics'),
    ("sports_ranking", 'all:sports AND all:ranking AND all:algorithm'),
    # ---- databases / data infra ----
    ("sports_database", 'all:"sports data" AND all:database'),
    ("data_pipeline", 'all:"data pipeline" AND all:sports'),
    ("streaming_sports", 'all:"real-time" AND all:"sports data" AND all:streaming'),
    ("time_series_db", 'all:"time series database" AND all:sports'),
    ("etl_sports", 'all:ETL AND all:sports AND all:data'),
    ("data_warehouse_sports", 'all:"data warehouse" AND all:sports'),
    ("big_data_sports", 'all:"big data" AND all:"sports analytics"'),
    # ---- APIs ----
    ("api_design", 'all:"API design" AND all:"real-time" AND all:data'),
    ("sports_api", 'all:"sports" AND all:"API" AND all:"odds"'),
    ("rate_limit_api", 'all:"rate limiting" AND all:API'),
    ("websocket_streaming", 'all:WebSocket AND all:"real-time data"'),
    ("rest_api_perf", 'all:"REST API" AND all:performance AND all:optimization'),
    # ---- engines ----
    ("simulation_engine", 'all:"simulation engine" AND all:sports'),
    ("game_engine_sports", 'all:"game engine" AND all:sports AND all:simulation'),
    ("prediction_engine", 'all:"prediction engine" AND all:sports'),
    ("betting_engine", 'all:"betting" AND all:"engine" AND all:software'),
    ("realtime_engine", 'all:"real-time" AND all:"prediction engine"'),
    ("monte_carlo_engine", 'all:"Monte Carlo" AND all:engine AND all:sports'),
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
            "url": f"https://arxiv.org/abs/{pid}",
        })
    return out

def main():
    mp = os.path.join(OUT, "master.jsonl")
    seen = set()
    if os.path.exists(mp):
        for line in open(mp):
            line = line.strip()
            if line:
                seen.add(json.loads(line)["id"])
    new = 0
    with open(mp, "a") as f:
        for name, q in QUERIES:
            try:
                papers = parse(fetch(q))
                kept = 0
                for p in papers:
                    if p["id"] not in seen:
                        seen.add(p["id"])
                        p["wave"] = 3
                        p["query"] = name
                        f.write(json.dumps(p) + "\n")
                        kept += 1
                new += kept
                print(f"{name}: {len(papers)} fetched, {kept} new", flush=True)
            except Exception as ex:
                print(f"{name}: ERROR {ex}", flush=True)
    print(f"WAVE3 new: {new} | master unique now: {len(seen)}")

if __name__ == "__main__":
    main()
