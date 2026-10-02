# Phase 2 Bayes Cluster Search Notes

Cluster: BAYESIAN / STATE-SPACE + PLAYER PROPS / FANTASY + TRACKING
Date: 2026-09-21. Search agent: subagent session 9ebca133 (bayes cluster).

## Method

arXiv API (`export.arxiv.org/api/query`), `all:` free-text queries, `sortBy=relevance`,
`max_results=200` per query, 3–4 s polite sleep between requests (one mid-run
rate-limit hit; retries with exponential backoff recovered it).
Exclusion list: `phase2-excluded-ids.txt` (1,729 lines → 865 unique base IDs after
stripping `vN` suffixes). Candidates deduped by base ID within this file.

## Queries run (18) — raw hits / kept after exclusion+dedup

| # | Query | Raw | Kept |
|---|-------|----:|-----:|
| 1 | Gaussian process sports prediction team strength | 200 | 135 |
| 2 | hierarchical Bayesian sports modeling player performance | 200 | 200 |
| 3 | dynamic linear model regime switching sports | 200 | 166 |
| 4 | state space model team ratings time-varying | 200 | 168 |
| 5 | player performance prediction hierarchical shrinkage | 200 | 142 |
| 6 | fantasy sports lineup optimization ownership projections | 200 | 180 |
| 7 | contest theory DFS stacking | 200 | 197 |
| 8 | trajectory prediction sports player tracking | 200 | 159 |
| 9 | role formation detection sports tracking data | 200 | 119 |
| 10 | spatial control pitch control models sports | 200 | 199 |
| 11 | event detection tracking data sports | 200 | 72 |
| 12 | matchup effects modeling sports | 200 | 79 |
| 13 | Kalman filter player tracking sports analytics | 200 | 140 |
| 14 | particle filter sports movement prediction | 200 | 133 |
| 15 | Bayesian Elo TrueSkill rating systems | 200 | 141 |
| 16 | expected value Poisson goals football prediction | 200 | 191 |
| 17 | player prop prediction Bayesian sports betting | 200 | 63 |
| 18 | sports betting market calibration uncertainty | 200 | 151 |

Queries 1, 3, 4, 5, 7, 12, 13, 14 failed on first pass (arXiv closed connection);
all recovered on retry except #1's first attempt (succeeded on retry).

Raw pool after exclusion/dedup: **2,502 unique candidates** (133 raw hits were
excluded-list matches — caught in a post-hoc verification pass after a regex bug
in the first harvest script failed to strip `vN` suffixes before comparing; the
second script's filter was correct. The final set was rebuilt from the clean
pool and asserts 0 exclusion leaks, 0 duplicate base IDs).

## Quality filtering

arXiv relevance search drifts badly on these queries (robotics control, epidemic
models, RISC-V MatMul, depth-first-search graph algorithms for "DFS", LLM sports
benchmarks). Applied a strict scorer:

- Sports signal required (title + abstract keyword sets: sports, leagues, teams,
  betting/odds, fantasy, Elo/TrueSkill/xG/pitch control, tracking data, etc.)
- Method bonus (Bayesian, hierarchical, Kalman, GP, state-space, shrinkage,
  regime-switching, Poisson, Hawkes, copula, trajectory, Kelly, conformal, ...)
- Penalties for junk domains (robotics, UAV, epidemic, power grid, quantum, ...)
  and pure-theory papers with no experiments/applications
- Dropped: withdrawn papers, non-English

Result: **170** top-scoring candidates (score cutoff 6.5) + 1 manual rescue =
**171 final candidates** in `phase2-candidates-bayes.jsonl`. Three weak tail
entries (sports-politics fan-base analysis, spoken-XR player ID, VLM spatial
benchmark) were swapped for stronger on-cluster papers: `1305.1998v1` (Markov
random field team strengths), `1508.02171v1` (soccer passing strategies),
`1612.06454v1` (long-term multi-object tracking in sports video).

Manual rescue: `1912.10417v1` — "Modelling basketball players' performance and
interactions between teammates with a regime switching approach" (scorer missed
it due to abstract truncation of key terms; exactly on-cluster).

Deliberately excluded false positives: graph-algorithm "DFS" papers (query 7
returned depth-first-search results, not daily fantasy), LLM sports-QA
benchmarks, SportsPose/SportsXR datasets with no methodology.

## Cluster coverage in the final 171

- Expected-value / Poisson goal & match modeling (44)
- Trajectory prediction & player tracking (28)
- Hierarchical Bayesian player-performance modeling (27)
- Fantasy lineup optimization & ownership (24)
- Player props / betting-line prediction (21)
- Elo / TrueSkill / rating systems (7)
- Role & formation detection from tracking (5)
- Gaussian processes for team strength (4)
- Betting-market calibration & uncertainty (4)
- Tracking event detection (3), shrinkage (2), matchup effects (1)

Note: queries 4/10/14 ("state space team ratings", "spatial/pitch control",
"particle filter") returned zero sports-titled raw hits — drifted entirely to
non-sports papers — so their concepts are covered only via overlap in the
hierarchical-Bayesian, GP, and tracking queries. The earlier-wave tracking
coverage was respected: heavy overlap on `event detection tracking data`
(72/200 raw excluded) went to the exclusion list.

## Files

- `phase2-candidates-bayes.jsonl` — 171 final candidates (JSONL schema:
  id, title, authors, abstract, published, categories, url, query)
- `phase2-candidates-bayes-raw-backup.jsonl` — 2,633 unfiltered candidates
- `phase2-search-stats-bayes.json` — first-pass per-query stats
- `bayes_search.py`, `bayes_retry.py`, `bayes_filter.py` — scripts used
