# docs/arxiv-program/research/2026-09-21/arxiv-deep/1467-sparse-bayesian-state-space-time-varying.md
## What it is (1-2 sentences)
A 2022 econometrics book chapter (Frühwirth-Schnatter & Knaus, arXiv:2207.12147v1) reviewing sparse Bayesian time-varying-parameter models; R package `shrinkTVP`. Ledger verdict: ADAPT — the non-centered parameterization plus shrinkage priors let a model decide per coefficient whether it is zero, constant, or genuinely time-varying.
## Key metrics/methods (formulas where given, else "not specified")
- State-space TVP: y_t = x_t′β_t + ε_t; β_t = β_{t-1} + w_t, w_t ~ N(0, diag(θ)).
- Non-centered parameterization: β_jt = β_j + √θ_j · β̃_jt, β̃_jt = β̃_{j,t-1} + ũ_jt, ũ_jt ~ N(0,1) — converts variance selection (θ_j = 0?) into coefficient selection (√θ_j = 0?), amenable to shrinkage priors.
- Priors on √θ_j: ridge/gamma, Bayesian Lasso, normal-gamma, double gamma, triple gamma, horseshoe (a_ξ = c_ξ = 0.5 special case), discrete spike-and-slab with hierarchical Student-t/Gaussian/fractional slabs.
- MCMC: FFBS (forward-filtering backward-sampling) / AWOL for states; ASIS (ancillarity-sufficiency interweaving) between centered and non-centered parameterizations for mixing.
- Per-coefficient posterior classification P(zero) / P(fixed) / P(dynamic) from MCMC indicators (δ_j, γ_j); continuous-shrinkage include rule: (1−ρ_j) > 0.5 with hyperprior on global shrinkage φ_ξ inducing uniform prior on model dimension.
## Data sources named
US inflation application: quarterly 1964:Q1–2015:Q4, 18 predictors + 3 inflation lags, stochastic-volatility observation error (public FRED-style macro series). Simulation studies with known sparse/static/dynamic truth. MCMC: 100,000 iterations after 10,000 burn-in; predictive comparison on last 100 quarters (cumulative log predictive density scores, LPDS).
## Findings (numbers and facts, not vibes)
- MCMC mixing: hierarchical Student-t slab ≈20% move acceptance between fixed/dynamic states; Gaussian and fractional slabs <5% fixed↔dynamic acceptance with visible chain dependence — slab choice materially affects inference, not just fit. (TRUST-SIGNAL: prior/slab choice is load-bearing, must be validated)
- Classification (Table 2, discrete spike-and-slab): treasury-bill coefficient clearly dynamic (P(dynamic|y) = 0.86); commodity-price index positive fixed (P(fixed|y) = 0.78); Dow Jones clearly insignificant (P(zero|y) = 0.61). (OTHER)
- Lasso prior classified EVERY coefficient as zero (over-shrinkage failure); triple-gamma thresholding likewise returned all-zero on this dataset while discrete spike-and-slab discriminated — "best prior" is dataset-dependent. (TRUST-SIGNAL: do not trust a default prior; validate classification)
- Cumulative LPDS (last 100 quarters, Fig. 7): horseshoe, double gamma, triple gamma all comparable; Lasso lags early then gains during the 2007–2009 crisis. (OTHER)
- Limitations named: random-walk evolution is a weak fit for abrupt regime changes (coaching changes, QB injuries — COACHING, QB-BEHAVIOR — better modeled with breaks); diagonal process covariance ignores correlated drift (e.g., all offensive coefficients shifting after a scheme change — SCHEME); 100k-iteration MCMC is heavy for weekly refits.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Zero/fixed/dynamic per-coefficient classification: OTHER — new capability for GSE ratings lane (currently fixed-form Elo/Glicko/TrueSkill update rules with no per-coefficient drift selection); high-P(dynamic) teams get time-varying ratings, others static.
- Regime-change limitation: COACHING, QB-BEHAVIOR — improvement experiment adds Markov-switching break component for coaching/QB-change weeks.
- Correlated-drift limitation: SCHEME — scheme changes shift all offensive coefficients together; diagonal process covariance misses this.
- Slab-choice sensitivity (~20% vs <5% acceptance): TRUST-SIGNAL — validate the classification, never trust a default prior.
## Engine-actionable? (yes/no + one-line what)
yes — Build non-centered TVP regression of margin on team dummies + situational features on weekly nflverse efficiency data (2015–2025), horseshoe/triple-gamma prior on √θ_j, read off P(dynamic) per team; gate: ADOPT iff rolling 2022–2024 RMSE beats Elo baseline by ≥3% AND ≥20% of team coefficients classify dynamic (else reject: static model suffices).
