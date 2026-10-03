# arxiv-program/research/2026-09-21/arxiv-deep/0745-conformal-predictive-systems-covariate-shift.md
## What it is (1-2 sentences)
Weighted conformal predictive systems (WSCPS) that restore coverage under covariate shift by weighting calibration conformity scores with the estimated test-vs-calibration covariate likelihood ratio ŵ(x) = dP_test/dP_cal (Jonkers, Van Wallendael, Duchateau, Van Hoecke, 2024, arXiv:2404.15018). Ledger verdict: ADAPT — directly applicable to GSE's regime-drift problem (injuries, QB/coaching changes, weather regimes); one flagged caveat: the probabilistic validity claim is still a CONJECTURE (3.5), empirically supported but unproved.
## Key metrics/methods (formulas where given, else "not specified")
- WSCPS predictive distribution: Q̂(y|x_{n+1}) = Σ_i p_i^w(x_{n+1})·1{C_i ≤ C(x_{n+1},y)} + ..., with normalized weights p_i^w ∝ ŵ(x_i).
- Likelihood ratio estimated via a probabilistic classifier (test-vs-calibration discriminator).
- Metrics: empirical coverage at nominal 80%, CRPS of the predictive distributions, interval width.
- Comparators: unweighted CPS (coverage breaks under shift), oracle weights.
- Assumptions: covariate shift only — P(Y|X) invariant, only P(X) changes; likelihood ratio estimable (needs overlap/support); Conjecture 3.5 (unproved): WSCPS output asymptotically uniformly distributed (probabilistically valid) under consistent ŵ estimation.
## Data sources named
(1) Airfoil self-noise (UCI): N=1,503, 5 covariates; splits 25/25/50 train/calibration/test; synthetic shift induced by exponential tilting w(x)=exp(xᵀβ) with β=(−1,0,0,0,1). (2) Synthetic Kang–Schafer-style setup: 1,000 Monte Carlo trials, fresh 25/25/50 splits each trial, shift strength fixed. Code: https://github.com/predict-idlab/crepes-weighted (Python, extends the `crepes` conformal package). Only 80% nominal level tested.
## Findings (numbers and facts, not vibes)
- Airfoil under shift: unweighted CPS coverage collapses below nominal; WSCPS restores average coverage to the desired 80% and slightly improves (lowers) CRPS vs. unweighted CPS.
- Kang–Schafer: same pattern — coverage restored, CRPS competitive-to-better.
- Headline is restoration-to-nominal rather than a percentage improvement; interval widths remain reasonable (no blowup reported).
- Limitations from the ledger: weight estimation is the whole game — a bad discriminator gives bad weights and no validity; assumes P(Y|X) invariance (a QB change may change P(Y|X) itself = concept drift, which WSCPS does not handle); small N=1,503 — weight-estimation variance at GSE scale is a concern; Conjecture 3.5 unproved.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Regime discriminator (current-regime games vs calibration window) on QB identity, injury counts, weather, line movement → likelihood-ratio-weighted conformal intervals for totals/spreads: TRUST-SIGNAL
- QB-change weeks as concept-drift detection (when WSCPS stays miscalibrated, P(Y|X) drift dominates): QB-BEHAVIOR
- Coverage validity during shift episodes (starting-QB changes, coach firings): TRUST-SIGNAL
- Doubly-robust CPS (weighting + Mondrian regime stratification) experiment: OTHER
## Engine-actionable? (yes/no + one-line what)
Yes — build a logistic-regime discriminator (last-4-weeks vs trailing-2-seasons on QB flags, injury counts, weather, line movement), feed its predicted odds as ŵ(x) into a weighted conformal interval layer for totals/spreads, and backtest 2023–2025; ADOPT if episode-conditional coverage lands within 3pp of nominal without >10% width inflation, REJECT on weight collapse (effective calibration sample <30%) or concept-drift dominance (~1 week effort).
