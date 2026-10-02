# arxiv-program/research/2026-09-21/arxiv-deep/0675-bayesian-estimation-of-in-game-home.md
## What it is (1-2 sentences)
Deep read of Maddox, Sides & Harvill (2022), arXiv:2207.13747 — a Bayesian in-game home-team win-probability model for Division-I FBS college football that replaces raw time/score inputs with expected possessions remaining (τ) and model-based expected score differential (ω), benchmarked against the Lock & Nettleton (2014) random-forest baseline. Ledger verdict: ADAPT — the τ+ω framing beats RF on out-of-sample Brier and should be ported to a GSE live NFL win-probability model.

## Key metrics/methods (formulas where given, else "not specified")
- Pace recursion (Pomeroy-style): μ_m = (1/n)Σξ_{k,m−1}; ψ_{k,m} = Σ_{j∈κ_k}ξ_{j,m−1}; ε_{k,m} = (x_{k,m}−ψ_{k,m})/w_k; ξ_{k,m} = μ_m + ε_{k,m}; iterate to max|Δξ| ≤ 0.0001 (δ=0.0001 convergence). ξ_k = expected possessions of team k vs an average-tempo opponent.
- Expected possessions remaining: τ = ((3600−t)/3600)·((ξ1+ξ2)/2), with t = elapsed seconds.
- Expected score ω: expected lead after current + succeeding possession, from an XGBoost point-value model on down/distance/field position (MAE 2.6802; linear 3.0805, linear+interactions 3.0614, RF 2.9751). Models the next drive too because a punt pins the opponent (drive-dependency).
- Bayesian estimator: n_{τ,ω} ~ Binomial(N_{τ,ω}, p_{τ,ω}) with beta prior imputed from 14 field experts' probability tables; binning windows around sparse (τ,ω) cells.
- Adjusted model: blends pregame TeamRankings win prob with dynamic Bayes via weight function D2 (linear in time and score), weights fit by holdout Brier minimization; final p*_{t,ℓ,τ,ω,j}.

## Data sources named
ESPN play-by-play scraped via R/rvest from ESPN's back-end (2004–2021 seasons, excluding COVID 2020; some early-2004 games missing). Point-value model fit on half of 2004–2015; WP model built on the other half; evaluated per-play on all 2017–2021 games (excl. 2020). TeamRankings pregame win probabilities. Application trace: 2021 Big 12 Championship (Baylor vs Oklahoma State).

## Findings (numbers and facts, not vibes)
- Out-of-sample per-play Brier (2017–2021): Dynamic Bayes 0.1453; Adjusted dynamic Bayes **0.1250**; Random Forest 0.1705 — the adjusted model wins by 0.0455 Brier points over RF.
- Blend-weight horse race: D2 (linear in time & score) 0.1250 beats D1 (linear in time only) 0.1272 and D3 (quadratic) 0.1265.
- RF criticized on mechanism: jumps too fast to 0/1 early in games.
- Pace extremes 2021: Oklahoma State fastest 30.11, Kansas State slowest 22.42.
- Big 12 title trace: adjusted model opens OSU >50%, flips to Baylor at 21–6 halftime, OSU recrosses 50% on late goal-line stands, Baylor holds.
- No log-loss or calibration curves reported — Brier only. College football only. Pace recursion is not strictly in-season causal (uses full-season possessions).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — Live in-game win-probability methodology. Expected possessions remaining (τ) is a portable, engine-grade state variable for live WP and live-spread pricing.
- COACHING — Pace estimates (ξ, Pomeroy-style opponent-adjusted tempo) are directly usable as a coaching/staff tempo-tendency input for tempo-adjusted projections and totals.
- OTHER — Expert-imputed beta priors as a formal mechanism for injecting subjective/sharp opinion into calibrated probability tables (template for blending GSE pregame model prob as prior instead).

## Engine-actionable? (yes/no + one-line what)
Yes — spec included: build GSE live WP v1 with nflverse pace recursion + XGBoost current+next-drive expected points + Bayesian (τ,ω) tables with GSE pregame prior, blend tuned on 2022–23 Brier; gate: beat nflfastR wp Brier on ≥60% of 2023–24 games with calibration slope ∈ [0.9, 1.1].
