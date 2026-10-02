# arxiv-program/research/2026-09-21/arxiv-deep/1983-autogluon-timeseries-probabilistic-time-series-forecasting.md
## What it is (1-2 sentences)
Full-text read of arXiv:2308.05566 (Shchur et al., 2023): AutoGluon-TimeSeries, an open-source AutoML system for probabilistic time-series forecasting — diverse model zoo (statistical + deep learning + tabular families) with greedy forward-selection ensembling under a time budget, outputting point and quantile forecasts in 3 lines of code. Ledger verdict: ADOPT for GSE's team-strength / points-scored-allowed trajectory forecasting with quantile outputs feeding the engine's interval forecasts.
## Key metrics/methods (formulas where given, else "not specified")
- Metrics: mean weighted quantile loss (wQL) for probabilistic accuracy; MASE for point accuracy vs naive baseline.
- Model zoo: statistical (AutoETS, AutoARIMA, AutoTheta); deep (DeepAR, PatchTST, Temporal Fusion Transformer); tabular (DirectTabular / RecursiveTabular — TS converted to tabular regression around AutoGluon-Tabular); plus Naive/SeasonalNaive baselines.
- Validation: time-series cross-validation generating out-of-fold predictions; ensemble = greedy forward selection, weights tuned to wQL/MASE on OOF; optional HPO; user-declared known-future vs past-only covariates; predicts mean + arbitrary quantiles (e.g., 0.1/0.5/0.9).
- No equations stated.
## Data sources named
29 benchmark datasets from the Monash Forecasting Repository via GluonTS (M1, M3, M4, Electricity, Pedestrian Counts, etc.); filtered to >1 time series and <15M total time steps. Code: https://github.com/autogluon/autogluon (TimeSeries module).
## Findings (numbers and facts, not vibes)
- Point (MASE): AutoGluon champion on 19/29 datasets; avg rank 2.08; avg rescaled error 0.073; win rate vs Seasonal Naive 100.0%; 0 failures. StatEnsemble avg rank 3.12 / 0.238 (3 failures); AutoPyTorch 4.12 / 0.257; DeepAR 5.08 / 0.434; TFT 6.12 / 0.635 (worst of the deep methods).
- Probabilistic (wQL): AutoGluon champion 19/29; avg rank 1.80; avg rescaled error 0.086; 100.0% win rate; 0 failures. StatEnsemble 3.36 / 0.330; DeepAR 4.08 / 0.455; TFT 4.24 / 0.487.
- Claimed to "often even improv[e] upon the best-in-hindsight combination of prior methods."
- All methods ≤4h training (benchmark time_limit=14400s); per-dataset errors rescaled to [0,1] for averaging.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: automated probabilistic forecaster selection/ensembling for team-strength trajectories (weekly offensive/defensive EPA, success rate, market-implied ratings) — feeds margin/total models; quantile outputs bridge into CQR/isotonic calibration.
- QB-BEHAVIOR (INFERENCE): per-QB rolling performance trajectories (EPA/play, success rate) are exactly the panel-series shape this system forecasts; INFERENCE — unverified on short 17-game NFL series where tabular members likely dominate deep ones.
- TRUST-SIGNAL: adoption gate explicitly rejects if quantile coverage deviates >3pp from nominal after recalibration — miscalibrated probabilistic output is worse than useless for Kelly sizing.
## Engine-actionable? (yes/no + one-line what)
Yes — build `TimeSeriesPredictor(prediction_length=1..4)` on a 32-team weekly panel (known covariates: is_home, rest_days, spread; past-only: injuries, EPA lags), run best_quality offseason / reduced preset in-season (30-min Tuesday-morning batch), recalibrate quantiles via CQR/isotonic, and adopt iff wQL on 2023–2025 is ≥5% relatively better than the best single-family baseline at ≤100 CPU-hours; extension: add a market-implied-strength covariate member and require ≥3% wQL gain to keep it.
