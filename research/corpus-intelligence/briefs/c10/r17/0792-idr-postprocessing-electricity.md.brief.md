# arxiv-program/research/2026-09-21/arxiv-deep/0792-idr-postprocessing-electricity.md
## What it is (1-2 sentences)
A published Energy Economics paper (Lipiecki, Uniejewski, Weron, arXiv 2404.02270v2) comparing three postprocessing schemes — Quantile Regression Averaging (QRA), Conformal Prediction (CP), Isotonic Distributional Regression (IDR) — for converting point forecasts into probabilistic forecasts on German/Spanish day-ahead electricity prices, including a Shapley decomposition of the winning ensemble. Verdict: ADAPT — the point-prediction → calibrated-distribution recipe the GSE engine's uncertainty lane needs.
## Key metrics/methods (formulas where given, else "not specified")
- QRA: q̂(α|p̂) = [1, p̂^ave]·β_α, β from pinball-loss minimization (most compute-intensive).
- CP: symmetric prediction intervals from absolute-error nonconformity scores in rolling calibration windows.
- IDR (Henzi et al. 2021): (F̂₁(z),…,F̂_m(z)) = argmin Σ(ηᵢ − 1{p_{i,h} ≤ z})² s.t. η₁ ≥ … ≥ η_m, ηᵢ ∈ [0,1]; abridged pool-adjacent-violators algorithm; linear interpolation between sorted point forecasts; extrapolation clamps to endpoints.
- Ensemble LEAR-Ave: vertical averaging of the three predictive distributions over calibration windows m ∈ {28, 56, 91, 182}.
- Evaluation: CRPS (99 percentiles), skill score SS = 1 − ΣCRPS^model/ΣCRPS^{LEAR-N} over rolling 182-day windows, APS₂₀ (extreme 20 percentiles), CPA test (Giacomini–White 2006) with Δ_d = φ′X_{d−1} + ε_d.
- Benchmarks: Naive-1N, Naive-N, LEAR-N (Gaussian errors), DDNN-JSU (Johnson's SU distributional neural nets).
## Data sources named
ENTSO-E Transparency (day-ahead load + wind/solar forecasts), Investing.com (EUA carbon, TTF gas, Brent crude, API2 coal closes); German (BZN|DE-LU) and Spanish (BZN|ES) day-ahead prices 2015-01-01 to 2023-12-31; 4.5-year out-of-sample test 2019-06-27 to 2023-12-31 covering COVID and the Ukraine-war energy crisis. PostForecasts.jl (Julia, github.com/lipiecki/PostForecasts.jl); DDNN: github.com/gmarcjasz/distributionalnn.
## Findings (numbers and facts, not vibes)
- LEAR-Ave achieved the lowest CRPS in both markets and all four subperiods: Germany CRPS 1.310 / 3.970 / 10.199 / 4.215 (2020†/2021/2022/2023); Spain 0.938 / 3.832 / 6.983 / 4.369. CPA test: LEAR-Ave significantly outperforms ALL models in both markets.
- Shapley values: IDR contributed the most to LEAR-Ave — its 2023 contribution exceeds 75% in both markets; CP contributed least. IDR was the most volatile component but the most valuable diversifier.
- All LEAR-based models, even Gaussian-error LEAR-N, significantly outperformed the much more complex DDNN-JSU, which collapsed during the energy crisis (Germany 2022: 13.375 vs LEAR-Ave 10.199; Spain 2022: 8.299 vs 6.983).
- Tails (APS₂₀): LEAR-Ave best in all subperiods except first German subperiod (DDNN-JSU insignificantly better) and Spain 2023 (LEAR-IDR best).
- Compute: LEAR+postprocessing pipeline ≈ 2:45–3:15 h on 64-core server vs DDNN-JSU 6:00–6:30 h; DDNN hyperparameter optimization would take weeks. IDR itself takes 15–20 s.
- Regime dependence: IDR poor for 182-day windows ending Dec 2019–Apr 2021, Dec 2021–Apr 2022, Aug 2022–Apr 2023 (Germany); excels in calm periods following volatile ones.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- IDR postprocessing converts GSE's point predictions into calibrated distributions using only recent (forecast, realization) pairs — no neural net, retrainable daily (OTHER)
- The most volatile component (IDR) was the most valuable diversifier (Shapley >75%) — design principle: build the uncertainty stack as an ensemble, not a single method (OTHER)
- Tails (APS₂₀) are where IDR's evidence is weakest; for GSE, tail calibration (extreme spreads/totals) is the high-value case (TRUST-SIGNAL)
## Engine-actionable? (yes/no + one-line what)
Yes — postprocess each pick probability with IDR on rolling m-day windows of (engine prob, outcome) pairs, vertically averaged with QRA + CP; gate with CPA test vs Gaussian benchmark and IDR Shapley share > 40% on GSE's 3,411 `picks` records.
