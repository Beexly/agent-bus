# arxiv-program/research/2026-09-21/arxiv-deep/1526-conformal-prediction-time-series-benchmarking.md
## What it is (1-2 sentences)
A 2026 arXiv benchmark comparing five conformal prediction (CP) interval wrappers for multi-horizon time series forecasting on >3,000 monthly sales series (AutoARIMA base, horizon 12). Verdict ADAPT: horizon-specific split CP (MSCP) won on efficiency (tightest valid intervals), confirming it as the interval-layer design for engine point forecasts.
## Key metrics/methods (formulas where given, else "not specified")
- Split CP interval: Γ_α(x_new) = [ŷ_new − q_{1−α}, ŷ_new + q_{1−α}], q = ⌈(1−α)(n_cal+1)⌉-th order statistic (finite-sample correction). Coverage guarantee P(Y ∈ Γ) ≥ 1−α.
- Winkler interval score: WIS_i = (u−ℓ) + 2/α·(miss distance); lower is better.
- Methods: MSCP (horizon-specific rolling residual matrix S ∈ R^{T×H}, per-horizon quantile); EnbPI (ensemble bootstrap LOO residuals); SPCI (quantile regression on lagged residuals); Global-CP (Bonferroni α/H); ACI (α_{t+1} = α_t + γ(α − err_t)); AcMCP (MA(h−1) nonconformity update).
## Data sources named
Monthly sales data (>3,000 series, multiple countries/industries). Implementations from statsforecast (Nixtla), forecast (R), conformalForecast R package v0.1.1, SPCI-code, EnbPI repos.
## Findings (numbers and facts, not vibes)
- Valid at 90%: Global-CP, AcMCP, MSCP, ACI, Parametric-PI. Under-cover: Nixtla-CP, EnbPI, SPCI (SPCI worst).
- Winkler CD ranking: MSCP #1, then Parametric-PI, then ACI; MSCP statistically separated on the larger corpus.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- MSCP best valid interval method → OTHER (engine calibration: adopt horizon-specific rolling-residual intervals for multi-week-ahead forecasts; ACI as coverage-drift fallback).
## Engine-actionable? (yes/no + one-line what)
yes — adopt MSCP as the engine's default multi-horizon interval wrapper with the finite-sample correction, ACI as fallback under drift.
