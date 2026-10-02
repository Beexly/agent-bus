# docs/arxiv-program/research/2026-09-21/arxiv-deep/0914-fantasy-team-selection-integer-programming.md
## What it is (1-2 sentences)
Full-read deep ledger of Ramezani (arXiv:2505.02170v3, 2025): integer-programming team selection for Fantasy Premier League with a bake-off of expected-points estimators (averages, Holt-Winters, ARIMA, bootstrap, Monte Carlo, hybrid Ridge) plus a robust min-max variant. Verdict ADAPT — ports directly to NFL DFS (DraftKings/FanDuel) for GSE's weekly-DFS-packet lane.
## Key metrics/methods (formulas where given, else "not specified")
- IP: max Z = Σⱼ cⱼxⱼ + Σⱼ cⱼyⱼ (captain doubles); constraints: Σx = 11, Σvⱼxⱼ ≤ 83.5 (budget net of reserves), Σy = 1, y ≤ x, position min/max, ≤3 players per real team.
- Robust: box uncertainty U = {cⱼ ∈ [c̄ⱼ−dⱼ, c̄ⱼ+dⱼ]}; max_{x,y} min_{c∈U} Σ cⱼ(xⱼ+yⱼ) (eq. 9–10).
- Estimators: simple average; linear-weighted average (wᵢ = i/Σj); Holt-Winters additive trend (eq. 15–18); empirical bootstrap; Monte Carlo; ARIMA(p,d,q) (eq. 19–21); linear trend regression (eq. 22–23); hybrid (Ridge on non-scoring features via SHAP, blended 2:1 actual:predicted) (eq. 24–26); alternative objectives ICT index, EGI − EGC (eq. 27–28).
## Data sources named
- FPL 2023/24 season, all 38 gameweeks (vaastav/FPL GitHub dataset). Per player per gameweek: total points, value (price), position, team, BPS, ICT index, starts, cards. Train GW1–26, evaluate GW27–38.
## Findings (numbers and facts, not vibes)
- Hybrid scored single best week: 83 pts (GW27); Monte Carlo 82 (GW27), best in GW30, GW33. Weighted average most consistent — top score in 5 gameweeks, more than any other method.
- Robust versions did NOT beat deterministic (except robust ICT, roughly tied) — box robustness added nothing.
- ICT objective ≫ EGI−EGC; ARIMA(0,1,1) most stable of ARIMAs; linear regression and ARIMA weakest overall.
- Emergent behavior: all strong methods chose 3-5-2; Ollie Watkins in every team; keepers picked from weak defenses (save volume); expensive chalk (Salah, Haaland) mostly excluded on value.
- Evaluation flaw per file: weeks with any missing player data dropped entirely — selection bias in reported scores. No covariance/stacking (each player estimated independently).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Weighted-average projection smoother most consistent of 8 estimators (TRUST-SIGNAL)
- Box-robust min-max adds nothing in max-points games — worst-case thinking over-penalizes upside (OTHER)
- Stacking/covariance omitted — paper flags the actual tournament edge as missing (OTHER)
- Captain-doubling slot maps to DK Showdown 1.5× captain (OTHER)
## Engine-actionable? (yes/no + one-line what)
yes — Port IP optimizer for DK Classic (50k salary, QB/RB×2/WR×3/TE/FLEX/DST) + Showdown captain slot; replicate estimator bake-off on NFL weekly fantasy points 2020–2025; ADOPT into weekly packet iff it beats greedy baseline in ≥60% of 2022–2025 slates with the smoother winner showing ≥3% mean-score edge.
