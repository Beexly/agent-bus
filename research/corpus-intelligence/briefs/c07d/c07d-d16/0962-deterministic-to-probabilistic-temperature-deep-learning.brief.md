# arxiv-deep/0962-deterministic-to-probabilistic-temperature-deep-learning.md
## What it is (1-2 sentences)
Deterministic-to-probabilistic weather-forecast postprocessing (Landry, Charantonis & Monteleoni 2024, arXiv:2406.02141): a Bernstein Quantile Network (BQN) turns a single deterministic NWP forecast into a calibrated probabilistic one (no ensemble needed), with joint multi-lead-time training plus lead-time embeddings; code at https://github.com/davidlandry93/pp2023/.

## Key metrics/methods (formulas where given, else "not specified")
- (1) Y_obs ∼ N(θ₁x_nwp + θ₂, exp(θ₃ log σ̂ + θ₄)); σ̂ = error SD when no ensemble (EMOS/DRN parametric form).
- (2) Q(τ) = Σ_{j=0}^{d} θ_j C(d,j) τ^j (1−τ)^{d−j} (Bernstein quantile function, d = 16; sorted θ ⇒ monotone Q).
- (3) CRPS_norm = σ[(y−μ)/σ·(2F((y−μ)/σ)−1) + 2f((y−μ)/σ) − 1/√π].
- (4) CRPS_ens = (1/n)Σ|e_i − y| − (1/2n²)ΣΣ|e_i − e_j|.
- (5) CRPSS = 1 − CRPS_model/CRPS_baseline; (6) cosine similarity of lead-time embedding vectors.
- Uncertainty representations compared: deterministic (RMSE loss); EMOS/DRN (Normal via eq. 1, CRPS loss); LQR/QRN (quantile regression, quantile loss, n quantiles at τ = i/(n+1)); LBQ/BQN (Bernstein polynomial quantile function eq. 2, degree 16, coefficient sorting for monotonicity, sampled at 98 τ values, quantile loss).
- Models: linear MOS-style (per station/init/lead-time coefficients) and MLP (4×256, SiLU, batch norm; station + lead-time embeddings added after the first linear layer = one-hot-equivalent with small memory footprint). NNs trained 5× and parameter-averaged (Vincentization for quantiles).
- Training: PyTorch, Adam, 100 epochs, OneCycleLR (LR 1e-3 linear / 5e-4 NN), weight decay 1e-5.
- Validation: train on days 1–25 of each month (2019–2020), validate on remaining days; test Jan–Nov 2021. Metrics: CRPS (closed form or ensemble form), CRPSS vs naive, RMSE, 5%/95% quantile loss, composite 80% spread, rank histograms (calibration); paired bootstrap (Hamill 1999, 100 resamples) for CI; extremes stratified by NWP-forecast percentile bins.
- Numeric gate in ledger: ADOPT if BQN achieves ≥10% relative CRPS improvement over the naive probabilistic baseline on a holdout season AND rank histograms are flatter (central-bin deviation from uniformity reduced by ≥30%); otherwise fall back to EMOS.

## Data sources named
- GDPS (Global Deterministic Prediction System, Environment Canada) deterministic surface-temperature forecasts, 00/12 UTC init, up to 10-day lead; targeting 1,066 METAR stations across Canada and the US.
- 18 NWP-dependent predictors (albedo, 2-m dew point, geopotential 1000/850/500, MSLP, precip rate, 2-m RH, specific humidity 850/500, temperature 2-m/850/500, U/V wind 10-m/500, wind speed 10-m) + 7 NWP-independent (lead time, day-of-year sin/cos, time of day, lat, lon, elevation) = 25 predictors.
- Train 2019–2020 (GDPS 25→15 km upgrade July 2019 retained in data); test Jan–Nov 2021 (includes Feb 2021 Texas cold wave, June–July 2021 western heat wave — outside training distribution).
- ENS10 (10-member ECMWF IFS reforecast, 1998–2017) for the ensemble-member ablation.
- GDPS via Meteorological Service of Canada open data; METAR via Iowa State IEM (public); ENS10 public. Code: https://github.com/davidlandry93/pp2023/ (PyTorch).

## Findings (numbers and facts, not vibes)
- CRPS (all stations × lead times): raw 2.925 → naive 1.921 → MOS 2.467 → EMOS 1.700 → DNN 2.315 → DRN 1.633, BQN 1.622 (best), QRN 1.635.
- CRPSS vs naive: EMOS 0.115, DRN 0.150, BQN 0.156, QRN 0.149. NN BQN ≈ 15–16% CRPS reduction vs naive probabilistic.
- NN gains over EMOS significant at early leads, shrinking to ~2.5% at late leads. Bias < 0.3 K at long leads.
- Lead-time conditioning (Table 4): joint training with Pred+Emb beats per-lead-time partitioning (DRN: 1.655 → 1.634; BQN: 1.641 → 1.622); embedding alone ≈ predictor alone; joint best in central lead times.
- ENS10 ablation: adding the 2nd ensemble member gives a sharp CRPSS jump even with postprocessing; diminishing returns after; member impact grows with lead time.
- Calibration: all models flatten central rank histograms vs naive; BQN's Bernstein edges show slight artifacts.
- Extremes: all models degrade at forecast tails; Feb 2021 Texas cold event was out-of-distribution (CRPSS collapse in low winter percentiles) — the model cannot invent tails it hasn't seen; no extreme-value machinery.
- Baseline definition: naive probabilistic = station/init-hour/lead-time/month-debiased NWP + Normal(0, error SD).
- Leakage caveat: train/validation split not fully independent (late leads of training days overlap early leads of validation days).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (weather lane — the direct port): the deterministic-to-probabilistic recipe lands on GSE's stadium weather pipeline: train one BQN (d=16) with stadium + lead-time embeddings on all kickoff lead times jointly over deterministic high-res grids (HRRR/NAM) at 30 NFL stadiums + ASOS/METAR obs (2022–2024), output per-stadium calibrated quantile functions for wind/gust/temp/precip, and pipe them into the totals/spread weather adjustment model. Effort ~1 week repurposing the published repo. The ≥10% CRPS gate + rank-histogram gate decide BQN vs fallback EMOS.
- OTHER (calibration lane): BQN vs QRN vs DRN on CRPS is a worked example of choosing a full-distribution representation for calibrated probabilistic outputs; the quantile-loss-at-98-τ plus coefficient-sorting monotonicity trick is a portable method anywhere GSE needs calibrated predictive distributions (e.g., player-prop distributions, margin distributions).
- OTHER (architecture lesson): joint multi-lead-time training with lead-time embeddings (DRN 1.655→1.634; BQN 1.641→1.622) beats per-lead-time partitioning — the mechanism is shared structure across lead times via embeddings; applies wherever GSE predicts at multiple horizons (game-week-by-week, futures).
- SCHEME: UNCERTAIN — wind-distribution tails feed the totals model's pass-vs-run adjustment; the Feb-2021-style tail collapse (CRPSS collapse in low winter percentiles, bias <0.3K only in-sample) is the failure mode to stress-test: extreme cold/wind games are exactly the high-leverage weather games, and the model degrades precisely there. Improvement path named: add GEFS ensemble members (2nd member is the high-value one) and an EVT tail model for extreme cold/heat games.
- Cross-file: complements ledger 0960 (1805.09091, NN post-processing of ensembles) — deterministic-input + distribution-free Bernstein representation + lead-time embedding study vs ensemble-input; not duplicative. Also connects to 0930's heavy-tailed-luck improvement experiment: extreme weather tails are a concrete instance of the rare-shock component.

## Engine-actionable? (yes/no + one-line what)
Yes — build the BQN stadium-weather pipeline (HRRR/NAM deterministic → per-stadium calibrated quantile functions for kickoff conditions, joint lead-time training with embeddings, ~1 week), gated on ≥10% CRPS improvement over naive + rank-histogram flattening, with EVT tail-model follow-up for extreme cold/wind games.
