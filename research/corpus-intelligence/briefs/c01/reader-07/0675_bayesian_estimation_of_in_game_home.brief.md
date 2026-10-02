# arxiv-program/research/2026-09-21/arxiv-deep/0675-bayesian-estimation-of-in-game-home.md
## What it is (1-2 sentences)
Deep-ledger read of Maddox, Sides & Harvill (arXiv:2207.13747, 2022) on Bayesian in-game home-team win probability for Division-I FBS college football. It replaces raw time-and-score with expected possessions remaining and expected score differential as predictors, beating the standard random-forest approach on Brier score; verdict ADAPT for a GSE live NFL in-game win-probability model.

## Key metrics/methods (formulas where given, else "not specified")
- Three-stage pipeline: (1) team pace recursion ξ_{k,m} = μm + ε_{k,m}, ε_{k,m} = (x_{k,m}−ψ_{k,m})/w_k, iterated to max|ξ_{k,m}−ξ_{k,m−1}| ≤ 0.0001 (Pomeroy-style); expected possessions remaining τ = ((3600−t)/3600)·((ξ1+ξ2)/2).
- (2) Expected score ω from XGBoost point-value model for current + succeeding possession (next drive matters because a punt pins the opponent).
- (3) Win probability via dynamic Bayesian estimator on (τ,ω) cells: n_{τ,ω} ~ Binomial(N_{τ,ω}, p_{τ,ω}); beta(1,1) diffuse prior + beta prior imputed from 14 field experts' probability tables; binning windows around (τ,ω) for sparse cells.
- Adjusted version blends with pregame win probability via weight function D2 (linear in time & score).

## Data sources named
ESPN play-by-play scraped via R/rvest from ESPN's back-end, 2004–2021 seasons (2020 COVID season excluded; early 2004 games partly missing). Point-value model fit on half of 2004–2015; win-probability model built on other half; evaluated on every play of every game 2017–2021. Pregame probabilities from TeamRankings. No published code.

## Findings (numbers and facts, not vibes)
- Holdout Brier (2017–2021, per play): Dynamic Bayes 0.1453, Adjusted dynamic Bayes 0.1250, Random forest 0.1705.
- Blend D2 (linear time & score) best: 0.1250 vs D1 linear-time 0.1272 vs D3 quadratic 0.1265.
- Point-value MAE: XGBoost 2.6802 vs linear 3.0805, linear+interactions 3.0614, RF 2.9751 — XGBoost wins by ≥0.2949 points.
- RF criticized: jumps too fast to 0/1 early in games.
- 2021 extremes: Oklahoma State pace 30.11 (fastest), Kansas State 22.42 (slowest).
- Application trace: 2021 Big 12 Championship — adjusted model starts OSU >50%, flips to Baylor at 21-6 halftime, OSU crosses back over 50% at late goal-line stands before Baylor holds.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: live in-game win-probability methodology — a new lane for GSE (corpus has no in-game NFL win-probability treatment); the expected-possessions-remaining concept is the portable innovation.
- COACHING: team pace estimates (opponent-adjusted possessions) are directly usable coaching-tendency signals; XGBoost expected-points-from-down/distance/field-position model is reusable game-state infrastructure.
- TRUST-SIGNAL: per-play Brier and calibration slope acceptance gates; the model prices live spreads better than closing line is an explicit CLV test proposed in the improvement experiment.

## Engine-actionable? (yes/no + one-line what)
Yes — build GSE live win-probability v1: NFL team pace estimates from nflverse (Pomeroy-style recursion), XGBoost expected-points model for current+next drive, Bayesian (τ,ω) cell estimator with empirical-Bayes prior from GSE pregame model, linear time-and-score pregame blend tuned on 2022–2023 Brier; ship if 2023–2024 holdout Brier beats nflfastR wp on ≥60% of games with calibration slope in [0.9, 1.1].
