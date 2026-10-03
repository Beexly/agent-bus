# arxiv-program/research/2026-09-21/arxiv-deep/1969-multidata-causal-feature-selection.md
## What it is (1-2 sentences)
Deep read of Ganesh et al. (2023), arXiv:2304.05294 — multidata causal discovery: run PC₁/PCMCI in multidata mode over an ensemble of time series (260 tropical-cyclone cases as ensemble members) to find a single sparse causal-driver set, which then feeds simple MLR/RF models that generalize better than correlation- or XAI-selected features. Ledger verdict: ADAPT — ensemble = team-seasons, causal drivers replace GSE's hand-built feature stack.
## Key metrics/methods (formulas where given, else "not specified")
- M-PC₁ / M-PCMCI (tigramite) in multidata mode: samples pooled across ensemble via sliding windows; only time-lagged predictors considered; α_PC significance threshold as the sparsity knob (more stringent α → fewer, more reliable features).
- Metric: R² (1 perfect, 0 one-std-dev error).
- Assumptions: common causal structure across the ensemble; within-series stationarity.
## Data sources named
260 Western Pacific tropical cyclones 2001–2020 (lifetime >6 days to landfall); ERA5 reanalysis (25km, 3-hourly) + IBTrACS best tracks; split 150 train / 55 val / 55 test (test = recent years 2017–2020); code: tigramite multidata (Zenodo doi:10.5281/zenodo.7747255).
## Findings (numbers and facts, not vibes)
- Test R²: causal-MLR wind 0.80 (31 features), Pmin 0.89 (17f), precip 0.62 (90f); causal-RF wind 0.78 (17f), Pmin 0.88 (26f), precip 0.62 (123f).
- Non-causal RF on all 3978 features: train 0.93/0.88/0.75 but val 0.77/0.74/0.65, test 0.89/0.79/0.58 — overfits; causal models match/beat it with 17–123 features.
- Lagged-correlation MLR: train up to 0.96, val 0.85/0.81/0.69 — "selects sets of predictors that perform very poorly."
- Causal MLR systematically beats the tuned LSTM (PyTorch, Optuna) on all targets; M-PC₁ slightly beats XAI selection, edge largest for <50-feature models.
- M-PCMCI ≈ M-PC₁ at 6h min-lag but "drastically deteriorates" at 1-day min lag.
- Absolute test gains modest (wind: causal-MLR 0.80 vs non-causal-RF 0.79) — the win is sparsity + validation robustness, not a blowout.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Causal driver sets as the principled replacement for GSE's hand-built feature stack — TRUST-SIGNAL (causal, interpretable features).
- Stratified multidata discovery within scheme clusters (pass-heavy vs run-heavy) recovering scheme-specific drivers — SCHEME.
- Common-causal-structure assumption across teams is the load-bearing risk (NFL teams more heterogeneous than cyclones) — OTHER.
## Engine-actionable? (yes/no + one-line what)
Yes — run tigramite M-PC₁ on the nflverse team-week panel (team-seasons 2015–2023 as ensemble), sweep α_PC ∈ {0.01, 0.001}, train the outcome model on drivers only, refresh quarterly; gate: driver-model Brier on 2023–2025 ≤ all-features Brier using ≤50% of features, val Brier strictly better than lagged-correlation at matched feature count, odd/even-season driver Jaccard ≥0.5.
