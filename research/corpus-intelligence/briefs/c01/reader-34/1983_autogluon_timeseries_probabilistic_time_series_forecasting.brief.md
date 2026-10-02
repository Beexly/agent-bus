# arxiv-program/research/2026-09-21/arxiv-deep/1983-autogluon-timeseries-probabilistic-time-series-forecasting.md

## What it is (1-2 sentences)
Full-paper research ledger (verdict: ADOPT) on arXiv:2308.05566 (AutoGluon-TimeSeries, Shchur et al., Amazon 2023) — AutoML for probabilistic time-series forecasting (diverse model zoo + greedy forward-selection ensemble outputting point and quantile forecasts), specified as GSE's automated team-strength/EPA trajectory forecaster feeding the margin/total models.

## Key metrics/methods (formulas where given, else "not specified")
- `TimeSeriesPredictor` (best_quality preset, presets fixed a priori, not tuned on benchmark; `time_limit` controls fit budget — 4h in benchmarks).
- Model zoo, 3 families: (a) statistical — AutoETS, AutoARIMA, AutoTheta (StatsForecast); (b) deep learning — DeepAR, PatchTST, Temporal Fusion Transformer (GluonTS/PyTorch); (c) tabular — DirectTabular / RecursiveTabular (TS task converted to tabular regression around AutoGluon-Tabular + MLForecast); plus Naive/SeasonalNaive baselines.
- Validation: time-series cross-validation (Hyndman & Athanasopoulos) generating out-of-fold predictions; ensemble via greedy forward selection, weights tuned to optimize the chosen eval metric (wQL or MASE) on OOF predictions; sparse final ensemble; optional HPO on selected models; known-future vs past-only covariate declarations; predicts mean + arbitrary quantile levels (e.g., 0.1/0.5/0.9) for `prediction_length` steps ahead.
- Metrics: mean weighted quantile loss (wQL, probabilistic), MASE (point vs naive). Per-dataset errors rescaled to [0,1] for averaging; win rate vs Seasonal Naive.
- GSE spec: panel of 32 teams × weekly offensive/defensive EPA, success rate, market-implied ratings; target next-week team EPA distributions (quantiles 0.1/0.5/0.9); offseason best_quality with time_limit=14400; in-season reduced preset (statistical + tabular only) on a 30-min budget; AG-TS quantiles recalibrated via GSE's existing CQR/isotonic code on rolling-origin OOF outputs; weekly batch job Tuesday mornings into the engine feature store.

## Data sources named
- 29 benchmark datasets from the Monash Forecasting Repository via GluonTS (includes M1, M3, M4 competition data, Electricity, Pedestrian Counts); filtered to >1 series and <15M total timesteps; dataset statistics in paper Table 8. Code: https://github.com/autogluon/autogluon (TimeSeries module).

## Findings (numbers and facts, not vibes)
- Point accuracy (MASE, Table 3): AutoGluon champion on 19/29 datasets; avg rank 2.08; avg rescaled error 0.073; win rate vs Seasonal Naive 100.0%; 0 failures. Next: StatEnsemble avg rank 3.12 / 0.238 (3 failures); AutoPyTorch avg rank 4.12 / 0.257; DeepAR avg rank 5.08 / 0.434; TFT avg rank 6.12 / 0.635 (worst of the deep methods).
- Probabilistic (wQL, Table 4): AutoGluon champion 19/29; avg rank 1.80; avg rescaled error 0.086; win rate vs baseline 100.0%; 0 failures. StatEnsemble avg rank 3.36 / 0.330; DeepAR 4.08 / 0.455; TFT 4.24 / 0.487.
- Paper claims it "often even improv[es] upon the best-in-hindsight combination of prior methods" (beats the oracle combination of baselines on some datasets).
- Limitations (ledger): NFL team-week series are SHORT (17–18 games/season, few stable-regime seasons) — likely favors the tabular family over DL; no sports data in benchmarks (untested on rule-change/QB-injury regime shifts); ensemble quantiles can still be miscalibrated without CQR/isotonic recalibration; 4h fits too heavy for weekly in-season refresh; same Amazon team evaluating their own system (auditable via open code).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — New capability with no corpus overlap: automated probabilistic forecaster selection/ensembling for team-strength/EPA trajectories; quantile outputs feed the CQR/isotonic calibration lane; DirectTabular member connects to ledger 1982's stacking recipe.
- OTHER — Improvement experiment: add a market-aware ensemble member with de-vigged spread/total-implied team strength as known-future covariates (market encodes injuries/sharp action); success = ensemble wQL improves ≥3% relative vs the no-market variant on held-out window.

## Engine-actionable? (yes/no + one-line what)
Yes — AutoGluon-TimeSeries on nflverse weekly team EPA (2009–2025) with a rolling-origin protocol, ADOPT iff AG-TS wQL on 2023–2025 is ≥5% lower relative than the best single-family baseline, costs ≤100 CPU-hours, and post-recalibration quantile coverage deviates ≤3pp from nominal.
