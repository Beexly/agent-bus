# docs/arxiv-program/research/2026-09-21/arxiv-deep/0794-isotonic-quantile-regression-averaging.md

## What it is (1-2 sentences)
Isotonic Quantile Regression Averaging (iQRA) turns a sorted point-forecast ensemble into predictive quantiles by imposing nonnegativity on the quantile-regression slope coefficients (stochastic-order regularization), a hyperparameter-free alternative to Lasso-QRA with statistically indistinguishable accuracy at 30× the speed. The deep-read ledger verdict is ADAPT: the cheapest high-quality postprocessor for turning GSE point forecasts into calibrated distributions.

## Key metrics/methods (formulas where given, else "not specified")
- iQRA: linear quantile regression on the sorted ensemble, Q̂(τ) = β₀ + βᵀp̂, β fitted by pinball-loss LP with all slope coefficients constrained ≥ 0 (βᵢ = βᵢ⁺ − βᵢ⁻; drop all βᵢ⁻ from the LP). LP complexity falls from Õ(2MT + T^2.5) to Õ(MT + T^2.5) — isotonicity reduces the search space, no penalty term, no λ tuning.
- Pinball loss: (1[P < P̂^τ] − τ)(P̂^τ − P); PIPS(α) = ½PS(α/2) + ½PS(1−α/2); CRPS ≈ average PS over 99 percentiles.
- Reliability: ACE(α) = empirical coverage − nominal coverage; TB = right-tail miss rate − left-tail miss rate.
- Benchmarks: QRA (unconstrained), LQRA (Lasso; λ grid of 20 values log-spaced 10⁻²–10¹, BIC selection), QRM (committee machine), IDR (linear pool of 25 individual IDRs), CP, Historical Simulation.
- Code in open-source Julia package PostForecasts.jl (github.com/lipiecki/PostForecasts.jl).

## Data sources named
- German day-ahead electricity prices (BZN|DE-LU), 8 Jan 2015 – 31 Dec 2024 (ENTSO-E + Investing.com, public).
- 25 NARX neural networks (5-hidden-neuron, tanh, Levenberg-Marquardt, Box-Cox λ=0.5 VST) as the point-forecast ensemble; 1456-day rolling training window; 364-day calibration window; 1833-day (5-year) out-of-sample test from 1 Jan 2020 covering COVID and the Ukraine invasion.

## Findings (numbers and facts, not vibes)
- PIPS (lower better): iQRA best at 98% (0.781 vs LQRA 0.788); LQRA slightly better at 96/90/80% (1.266/2.416/3.853 vs iQRA 1.273/2.427/3.864) — iQRA–LQRA differences insignificant per CPA (Giacomini–White); iQRA significantly beats QRA, QRM, CP, HS, IDR at all levels (IDR worst at 98%: 1.180). **[OTHER]**
- CRPS by year: iQRA and LQRA lowest or near-lowest every year (2024: iQRA 7.482 vs LQRA 7.492 — iQRA significantly better; 2020: both 1.521); iQRA significantly beats HS, CP, QRA, QRM in most years. **[OTHER]**
- Compute per forecast day (Julia, single thread, Apple M2 Pro): CP 1 ms, HS 1 ms, IDR 100 ms, QRM 10 s, iQRA 20 s, QRA 30 s, LQRA 600 s — iQRA is 30× faster than Lasso-QRA with statistically indistinguishable accuracy. **[OTHER]**
- Reliability: iQRA sits closest to top-center (low coverage error + minimal tail bias) at all confidence levels; CP/HS cover well but have large tail bias; IDR poor on both. **[TRUST-SIGNAL — ACE/TB reliability plots as the evaluation standard for calibrated intervals]**
- Variable selection: iQRA selects 14.2% of regressors vs 12.3% for LQRA; ensemble extremes (min for low quantiles, max for high quantiles) are selected far more often than middle members — tail quantiles are driven by extreme ensemble members. **[OTHER]**

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- The ensembles/calibration lane application: replace any Lasso-tuned quantile postprocessing on GSE point forecasts with nonnegative-constrained quantile regression on a sorted ensemble of engine predictions — **OTHER**.
- Variable-selection transfer: feed sorted point predictions (multiple model seeds or window variants) and let iQRA pick the extremes for the tails, since tail quantiles drive bet-sizing/limit decisions — **OTHER**.
- ACE/TB reliability plots as the interval-evaluation discipline; CPA (Giacomini–White) significance testing for postprocessor comparisons — **TRUST-SIGNAL**.
- Improvement experiment noted in the file: combine iQRA with 0792's IDR via vertical averaging — IDR is the best diversifier, iQRA the best single postprocessor — **OTHER**.

## Engine-actionable? (yes/no + one-line what)
Yes — drop-in replacement for any Lasso-tuned quantile postprocessing on GSE's engine point forecasts: same CRPS as Lasso, 30× faster, hyperparameter-free, with automatic selection of tail-relevant extreme ensemble members; gate on iQRA significantly beating unconstrained QRA on CRPS at 1% and ACE at 90% within ±1pp of nominal.
