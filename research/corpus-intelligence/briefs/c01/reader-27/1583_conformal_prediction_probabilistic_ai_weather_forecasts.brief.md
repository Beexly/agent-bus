# arxiv-program/research/2026-09-21/arxiv-deep/1583-conformal-prediction-probabilistic-ai-weather-forecasts.md
## What it is (1-2 sentences)
Deep-read ledger for arXiv:2606.19642 (Asch, Rossellini, Hassanzadeh, Willett, 2026): online adaptive conformal prediction as a distribution-free calibration layer for probabilistic AI weather forecasts (GenCast, AIFS-ENS, NeuralGCM). Verdict: ADOPT — a one-scalar online update that converges to target coverage within days, beats EMOS on reliability with no CRPS loss, and slots as the final calibration layer on GSE's game-day weather post-processing stack.
## Key metrics/methods (formulas where given, else "not specified")
- Interval: Ĉ_t(X_t) = [q̂_lo(X_t) − c_t, q̂_hi(X_t) + c_t] (Eq. 2).
- err_t = 𝟙{Y_{t+τ} ∉ Ĉ_t(X_t)} (Eq. 3); c_{t+τ} = c_{t+τ−1} + η(err_t − α) (Eq. 4), with η = 0.01, per grid point × lead time × variable × quantile pair, using most recent available verification (operational delay t+τ).
- Miss: c grows by η(1−α); hit: c shrinks by ηα (at α=0.1, one miss = nine hits).
- Coverage guarantee: (1/T)Σ err_t = α + (c_{T+τ} − c_τ)/(ηT) → α as T→∞ (bounded Y ⇒ bounded c).
- ppi_i = |raw coverage_i − 0.9| − |conformalized coverage_i − 0.9| (Eq. 7), area-weighted.
- Quantile-space adaptation (Angelopoulos et al. 2023 / ref 17 mirror): dimensionless step size, climatology-neutral, trivially parallel per location.
- No feature engineering — pure post-processing of forecast quantiles. Assumptions: bounded Y; per-location/lead/variable/quantile fits (breaks spatial covariance — the cost of the guarantee); exchangeability not needed (online/asymptotic form).
## Data sources named
GenCast (diffusion; 52/56 members), AIFS-ENS (transformer, CRPS-trained, fine-tuned on IFS; 25 members), NeuralGCM (dynamical core + learned closures; 51 members, precip from IMERG). Variables: near-surface temperature + 12 h total precipitation; lead times 1–15 days (5 d primary); test 2022–2024 (2021 = calibration); ERA5 ground truth (IMERG for NeuralGCM precip). Extremes: truth above the 95th percentile of location+calendar-date climatology (ERA5 1979–2018; IMERG 2000–2018). Baseline: EMOS (Gaussian for temperature; left-censored GEV for precipitation). ERA5 via Copernicus CDS; AIFS-ENS on HuggingFace (ecmwf/aifs-ens-1.0); GenCast via WeatherNext Gen. Code "upon acceptance" (not yet public).
## Findings (numbers and facts, not vibes)
- Raw AI ensembles systematically undercover (intervals too narrow); worse on extremes (95th-percentile conditional coverage uniformly worse than unconditional).
- Conformalized forecasts achieve near-exact marginal coverage at all target levels and lead times 1–15 d; reliability diagrams hug the perfect model; EMOS also improves but conformal is near-perfect and has the guarantee.
- ppi maps show improvement at the vast majority of grid points (e.g., GenCast 2m temp over Andes/India, AIFS-ENS over central Africa, NeuralGCM precip over Sahara).
- CRPS essentially unchanged after conformalization; SSR generally improves (closer to 1). No skill penalty.
- Extremes: coverage improves for extreme temperature but not perfected; extreme precipitation improvement is marginal.
- Residual over-coverage where truth and both quantiles are identically 0 (e.g., NeuralGCM precip over Antarctica) — authors refuse empty intervals.
- Bigger ensemble size M doesn't fix undercoverage: as M→∞ the empirical distribution still differs structurally from truth.
- Empirical: within 0.01 of target coverage in days, 0.001 after a month.
- Limitation: corrects only spread, not bias — pairs with a bias-correction step (1581's LGBM, EMOS), not a replacement; needs days–weeks of burn-in per stadium/game slot.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Weather lane (totals picks). This is the missing production calibration layer on top of GSE's weather post-processing stack — an online conformal wrapper (per stadium × lead time × variable, α=0.1/0.2, η=0.01, trailing-365-day calibration window) over the 1580 ANET2 flow quantiles, paired with the 1581 LGBM bias correction (bias first, conformal spread second).
- OTHER: Directly targets the 2026-09-20 Drive-deep finding: the conformal audit of GSE's own cqr.ts caught a live bug (clamping rank to n−1, falsely certifying 90% coverage at 83.33%) — this paper supplies the adaptive wrapper on top of the fixed interval construction.
- OTHER: Improvement experiment extends to wind speed and precipitation (the two variables where extreme games move totals) with separate upper/lower corrections (ref 44's idea, untested in paper) for top-5% wind/precip games, scored with the EECRPS metric (1582).
## Engine-actionable? (yes/no + one-line what)
Yes — implement `weather/conformal.py` with exactly Eq. 2–4 (quantile-space variant, η=0.01) as the final coverage-guarantee layer over GSE's stadium weather quantile forecasts; gate ADOPT on 90% empirical coverage within ±0.02 of nominal within 30 days of simulated burn-in across ≥25/30 stadiums with CRPS no worse than raw.
