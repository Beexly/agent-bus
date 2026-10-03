#!/usr/bin/env python3
"""GSE 500-paper program — lane-balanced manifest builder (v2).
Builds manifest-500.jsonl, reserve-100.jsonl, skip-report.json, ledger-tracker.jsonl.

- Dedups by bare arXiv ID; skips 64 already-covered IDs + 10 pilot IDs + score-0s.
- Assigns each candidate a lane (query-first, keyword fallback), quotas 50/lane.
- Selection within lane: score desc, published desc. Written order: lane order,
  then published desc, then score desc.
"""
import json, os, re, collections

SWEEP = os.path.expanduser("~/workspace/arxiv-sweep")

LANES = ["team_ratings", "win_spread_total", "calibration_uncertainty",
         "props_player", "tracking_ngs", "dfs", "odds_market", "causal",
         "data_api_infra", "experimental"]

QUERY_LANE = {
    "bayesian_sports": "team_ratings", "sports_ranking": "team_ratings",
    "bradley_terry": "team_ratings", "elo_rating": "team_ratings",
    "glicko": "team_ratings",
    "point_spread": "win_spread_total", "win_probability": "win_spread_total",
    "football_prediction": "win_spread_total", "match_prediction": "win_spread_total",
    "tennis_prediction": "win_spread_total", "basketball_prediction": "win_spread_total",
    "hockey_prediction": "win_spread_total", "baseball_sabermetrics": "win_spread_total",
    "calibration_sports": "calibration_uncertainty", "prob_theory_pred": "calibration_uncertainty",
    "stat_decision": "calibration_uncertainty", "prediction_theory": "calibration_uncertainty",
    "conformal_sports": "calibration_uncertainty",
    "draft_ml": "props_player", "expected_points": "props_player",
    "expected_goals": "props_player", "xg_football": "props_player",
    "computer_vision_sports": "tracking_ngs", "player_tracking": "tracking_ngs",
    "diffusion_sports": "tracking_ngs", "gnn_sports": "tracking_ngs",
    "player_tracking_ml": "tracking_ngs", "optimal_transport": "tracking_ngs",
    "fantasy_sports": "dfs", "rl_sports": "dfs",
    "sports_betting_ml": "odds_market", "odds_modeling": "odds_market",
    "betting_engine": "odds_market", "betting_odds_pred": "odds_market",
    "kelly_criterion": "odds_market",
    "causal_sports": "causal",
    "rate_limit_api": "data_api_infra", "rest_api_perf": "data_api_infra",
    "websocket_streaming": "data_api_infra", "sports_database": "data_api_infra",
    "data_warehouse_sports": "data_api_infra", "big_data_sports": "data_api_infra",
    "data_pipeline": "data_api_infra",
    "simulation_engine": "experimental", "prediction_engine": "experimental",
    "monte_carlo_sports": "experimental", "state_space": "experimental",
    "hawkes_sports": "experimental", "transformer_simple": "experimental",
    "deep_learning_analytics": "experimental", "game_theory_sports": "experimental",
    "feature_eng": "experimental", "sports_ml_survey": "experimental",
    "poisson_simple": "experimental", "survival_sports": "experimental",
    "tda_sports": "experimental", "sports_prediction": "win_spread_total",
    "nfl_model": "win_spread_total",
}

KW_LANES = [
    ("dfs", ["fantasy sport", "daily fantasy", "dfs lineup", "fantasy lineup", "salary cap", "ownership projection", "fantasy point"]),
    ("odds_market", ["closing line", "market efficienc", "market microstruct", "overround", "vig", "steam", "line movement", "beat the close", "clv ", "kalshi", "polymarket", "betting market", "sports betting", "odds ", "bookmaker", "bet sizing", "parlay", "wager"]),
    ("calibration_uncertainty", ["calibrat", "conformal", "quantile regression", "reliability diagram", "uncertainty quantif", "credible interval", "prediction interval", "coverage guarantee", "ece", "expected calibration"]),
    ("props_player", ["player prop", "player performance", "player rating", "quarterback", "passer rating", "receiving yard", "rushing yard", "touchdown", "expected points added", " epa", "cpoe", "fantasy point"]),
    ("team_ratings", [" elo", "elo rating", "bradley-terry", "bradley terry", "ranking", "power rating", "team strength", "rating system", "trueskill", "glicko", "paired comparison", "rank aggregation", "plackett-luce"]),
    ("win_spread_total", ["win probability", "point spread", "spread ", "total ", "over/under", "scoreline", "score prediction", "match outcome", "game outcome", "result prediction", "forecasting"]),
    ("tracking_ngs", ["tracking", "trajectory", "multi-object", "pose estimation", "computer vision", "video", "camera", "optical", "diffusion model", "motion", "ball track", "player track", "ngs", "next gen"]),
    ("causal", ["causal inference", "counterfactual", "treatment effect", "instrumental variable", "causal", "do-calculus", "propensity"]),
    ("data_api_infra", ["api", "database", "data pipeline", "streaming", "websocket", "rest ", "graphql", "rate limit", "etl", "data warehouse", "data infrastructure"]),
]

def bare(pid):
    return re.sub(r"v\d+$", "", pid)

COVERED = {bare(c) for c in
    "1802.00998 2409.04889 2309.00756 2305.10262 2210.16315 1211.4000 2408.10867 "
    "1605.08753 1607.00379 1607.01756 1701.05976 1704.00197 1704.00823 1707.01855 "
    "1710.02824 1801.02954 1902.08081 1906.05029 1909.08034 1910.07410 1911.01815 "
    "1911.04541 1911.08791 2001.00878 2005.12853 2008.01485 2011.11178 2012.04378 "
    "2105.09881 2110.14017 2202.08500 2206.09083 2206.13246 2207.13770 2207.14124 "
    "2208.08598 2301.04001 2301.13052 2303.01318 2307.06754 2310.03417 2311.03490 "
    "2402.12400 2404.12499 2405.10247 2406.19563 2408.08331 2409.17129 2411.02000 "
    "2412.19363 2501.02505 2501.17711 2502.07491 2503.18589 2503.21713 2503.23911 "
    "2505.21543 2508.02725 2602.08083 2604.02447 2606.09327 2608.09824 2608.21530".split()}

PILOT = {"2609.06739", "2607.14430", "1706.02447", "1701.08055", "2511.03732",
         "1906.11373", "2602.07030", "2506.03335", "2402.06815", "2309.15253"}

def lane_of(p):
    q = p.get("query") or ""
    parts = [x.strip() for x in q.split(";") if x.strip()]
    votes = collections.Counter()
    for part in parts:
        l = QUERY_LANE.get(part)
        if l:
            votes[l] += 1
    if votes:
        return votes.most_common(1)[0][0]
    text = ((p.get("title") or "") + " " + (p.get("rationale") or "")).lower()
    for lane, kws in KW_LANES:
        if any(k in text for k in kws):
            return lane
    return "experimental"

def pubkey(p):
    return p.get("published") or ""

def main():
    all_p = []
    for n in range(1, 6):
        p = os.path.join(SWEEP, f"scored_batch_{n}.jsonl")
        for line in open(p):
            line = line.strip()
            if line:
                all_p.append(json.loads(line))
    print(f"loaded {len(all_p)}")

    seen, uniq, dups = set(), [], []
    for p in all_p:
        b = bare(p["id"])
        if b in seen:
            dups.append(p)
        else:
            seen.add(b); uniq.append(p)
    print(f"unique: {len(uniq)}, intra-corpus dups: {len(dups)}")

    skip, cand = [], []
    for p in uniq:
        b = bare(p["id"])
        if b in PILOT:
            skip.append({"id": p["id"], "title": p["title"], "score": p["score"], "reason": "pilot-ledger-already-written"})
        elif b in COVERED:
            skip.append({"id": p["id"], "title": p["title"], "score": p["score"], "reason": "already-covered-in-existing-research"})
        elif p["score"] == 0:
            skip.append({"id": p["id"], "title": p["title"], "score": p["score"], "reason": "score-0-no-sports-transfer"})
        else:
            cand.append(p)
    print(f"skipped: {len(skip)} | candidates: {len(cand)}")

    for p in cand:
        p["_lane"] = lane_of(p)

    lane_counts = collections.Counter(p["_lane"] for p in cand)
    print("candidate lane counts:", dict(lane_counts))

    QUOTA = 50
    selected, overflow = [], []
    # All score-3 candidates go in, regardless of lane quota.
    s3 = [p for p in cand if p["score"] == 3]
    for lane in LANES:
        pool = sorted([p for p in cand if p["_lane"] == lane and p["score"] < 3],
                      key=lambda p: (p["score"], pubkey(p)), reverse=True)
        pool.sort(key=lambda p: (p["score"], pubkey(p)), reverse=True)
        sel3 = [p for p in s3 if p["_lane"] == lane]
        selected.extend(sel3 + pool[:QUOTA])
        overflow.extend(pool[QUOTA:])
    print(f"lane-selected: {len(selected)}")

    # backfill lanes short of quota from best overflow
    need = 500 - len(selected)
    if need > 0:
        overflow.sort(key=lambda p: (p["score"], pubkey(p)), reverse=True)
        selected.extend(overflow[:need])
        overflow = overflow[need:]
    print(f"selected after backfill: {len(selected)}")

    overflow.sort(key=lambda p: (p["score"], pubkey(p)), reverse=True)
    reserve = overflow[:100]
    for p in reserve:
        skip.append({"id": p["id"], "title": p["title"], "score": p["score"],
                     "reason": "reserve-pool-replacement-stock"})

    # written order: lane order, then published desc, then score desc
    sel_sorted = sorted(selected,
                        key=lambda p: (LANES.index(p["_lane"]), pubkey(p), p["score"]),
                        reverse=False)
    sel_sorted.sort(key=lambda p: (LANES.index(p["_lane"]),), reverse=False)
    sel_sorted = sorted(sel_sorted, key=lambda p: (LANES.index(p["_lane"]), pubkey(p), p["score"]), reverse=True)

    lane_final = collections.Counter(p["_lane"] for p in selected)
    print("final lane counts:", dict(lane_final))
    sdist = collections.Counter(p["score"] for p in selected)
    print("selected score dist:", dict(sdist))

    manifest = []
    for i, p in enumerate(sel_sorted, 1):
        manifest.append({
            "manifest_index": i, "file_index": i + 10,
            "id": p["id"], "title": p["title"], "url": p["url"],
            "published": pubkey(p), "score": p["score"], "lane": p["_lane"],
            "query": p.get("query"), "rationale": p.get("rationale", ""),
            "status": "pending"})
    with open(os.path.join(SWEEP, "manifest-500.jsonl"), "w") as f:
        for m in manifest:
            f.write(json.dumps(m) + "\n")

    with open(os.path.join(SWEEP, "reserve-100.jsonl"), "w") as f:
        for j, p in enumerate(reserve, 1):
            f.write(json.dumps({"reserve_index": j, "id": p["id"], "title": p["title"],
                                "url": p["url"], "score": p["score"], "lane": p["_lane"],
                                "published": pubkey(p),
                                "rationale": p.get("rationale", "")}) + "\n")

    with open(os.path.join(SWEEP, "skip-report.json"), "w") as f:
        json.dump(skip, f, indent=1)

    with open(os.path.join(SWEEP, "ledger-tracker.jsonl"), "w") as f:
        for m in manifest:
            f.write(json.dumps({"manifest_index": m["manifest_index"],
                                "file_index": m["file_index"],
                                "id": m["id"], "lane": m["lane"], "score": m["score"],
                                "status": "pending", "verdict": None,
                                "ledger_path": None}) + "\n")
        for j, r in enumerate(reserve, 1):
            f.write(json.dumps({"reserve_index": j,
                                "id": r["id"], "lane": r["_lane"], "score": r["score"],
                                "status": "reserve", "verdict": None,
                                "ledger_path": None}) + "\n")

    print(f"WROTE manifest: {len(manifest)}, reserve: {len(reserve)}, skip: {len(skip)}")

if __name__ == "__main__":
    main()
