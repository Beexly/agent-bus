# docs/arxiv-program/research/2026-09-21/arxiv-deep/0914-fantasy-team-selection-integer-programming.md
## What it is (1-2 sentences)
Full-read ledger of Ramezani (2025), arXiv:2505.02170v3: "Data-Driven Team Selection in Fantasy Premier League Using Integer Programming and Predictive Modeling Approach" — a deterministic/robust integer program for salary-cap fantasy lineup selection with a bake-off of 8 cost-vector (expected points) estimators. Verdict in file: ADAPT — direct blueprint for a GSE NFL DFS (DraftKings/FanDuel) optimizer with captain-slot support.
## Key metrics/methods (formulas where given, else "not specified")
- IP: max Z = Σⱼ cⱼxⱼ + Σⱼ cⱼyⱼ (captain doubles); constraints: Σx = 11, Σvⱼxⱼ ≤ 83.5 (budget net of reserves), Σy = 1, y ≤ x, position min/max, ≤3 players per real team.
- Robust: box uncertainty U = {cⱼ ∈ [c̄ⱼ−dⱼ, c̄ⱼ+dⱼ]}; max_{x,y} min_{c∈U} Σ cⱼ(xⱼ+yⱼ).
- Cost estimators compared: simple average; linear-weighted average (wᵢ = i/Σj); Holt-Winters additive trend; empirical bootstrap; Monte Carlo; ARIMA(p,d,q); linear trend regression; hybrid (Ridge on non-scoring features via SHAP, blended 2:1 actual:predicted); alternative objectives (ICT index, EGI − EGC).
- Assumption: expected points suffice as cost vector (no covariance/stacking).
## Data sources named
- Fantasy Premier League 2023/24 season, all 38 gameweeks — vaastav/FPL GitHub dataset (public). Per player per gameweek: total points, value (price), position, team, plus underlying features (BPS, ICT index, starts, cards).
- Train GW1–26, evaluate GW27–38.
- No code published.
## Findings (numbers and facts, not vibes)
- Hybrid estimator scored the single best week: 83 pts (GW27); Monte Carlo 82 (GW27) and best in GW30, GW33.
- Linear-weighted average most consistent — top score in 5 gameweeks, more than any other method.
- Robust versions did NOT beat deterministic (except robust ICT, roughly tied) — box robustness added nothing empirically.
- ICT objective ≫ EGI−EGC; ARIMA(0,1,1) most stable of ARIMAs; linear regression and ARIMA weakest overall.
- Emergent behavior: all strong methods chose 3-5-2; Ollie Watkins in every team; keepers picked from weak defenses (save volume); expensive chalk (Salah, Haaland) mostly excluded on value.
- Evaluation flaw: weeks with any missing player data dropped entirely — selection bias (flagged leakage).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Weighted average (linearly-weighted recency) was the most consistent estimator — recency-weighting lesson for projection smoothing in DFS lane — OTHER.
- Robust min-max formulation empirically added nothing in a max-points game — caution against worst-case-robust DFS lineups; tournament upside beats floor — OTHER (INFERENCE: file states "worst-case thinking over-penalized upside").
- Captain-doubling constraint (y ≤ x, Σy = 1) maps directly to DK Showdown 1.5× captain slot — OTHER.
## Engine-actionable? (yes/no + one-line what)
yes — Port the IP as the DK/FD Classic optimizer (max Σ projⱼxⱼ, salary/roster constraints, Showdown captain slot), replicate the estimator bake-off (weighted average vs Holt-Winters vs Monte Carlo vs hybrid) on NFL weekly fantasy points 2020–2025, and add the paper's missing piece: stack constraints (QB+WR correlation bonus linearized with auxiliary binaries); numeric gate is beating a greedy baseline in ≥60% of 2022–2025 slates.
