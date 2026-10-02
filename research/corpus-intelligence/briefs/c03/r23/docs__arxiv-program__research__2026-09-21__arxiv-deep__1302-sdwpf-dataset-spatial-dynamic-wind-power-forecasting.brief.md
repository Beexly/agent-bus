# docs/arxiv-program/research/2026-09-21/arxiv-deep/1302-sdwpf-dataset-spatial-dynamic-wind-power-forecasting.md
## What it is (1-2 sentences)
Deep-read ledger (ADAPT) of arXiv:2208.04360v2 (Zhou et al., 2025): the SDWPF dataset paper — a large public spatiotemporal wind-power forecasting benchmark (4.7M 10-minute records, 134 turbines, 245 days, 48-hour forecasting task) released for the Baidu KDD Cup 2022 challenge. Ledger verdict ADAPT: it is the training/benchmark substrate GSE's wind-forecasting lane needs (Gap 8: weather physics for totals); replacement for REJECT 1096.

## Key metrics/methods (formulas where given, else "not specified")
- Task: given historical 10-minute turbine/atmospheric records, forecast the next 288 steps (48 hours) of wind power per turbine.
- Baseline results (paper's own baseline + Autoformer/Informer references): RMSE 47.081286, MAE 37.558233, combined score 42.319760 over K=195 test predictions; evaluation time ~1129.7s.
- Evaluation metric: combined score from RMSE and MAE over K=195 predictions.
- Competition protocol: fixed public training window, held-back private months for scoring.
- Assumptions: nacelle anemometer wind speed proxies inflow; turbine status flags explain zero-power intervals; spatial adjacency between turbines carries predictive information.

## Data sources named
SDWPF dataset: 245 days of 10-minute records from 134 wind turbines → 4,727,520 records × 13 columns (wind speed Wspd in m/s, environmental temperature Etmp °C, turbine internal temperature, nacelle direction, blade pitch angles, turbine status/operating flags, spatial coordinates of each turbine). Largest public spatial wind-power forecasting dataset at release. Documented caveats: missing values, abnormal readings, turbine downtime/status changes. Publicly released via KDD Cup 2022 (extra months held back for evaluation); code not stated in paper.

## Findings (numbers and facts, not vibes)
- Scale: 4,727,520 records, 134 turbines, 245 days at 10-minute resolution.
- Baseline: RMSE 47.08, MAE 37.56, combined score 42.32 (K=195).
- Long-horizon transformer baselines (Autoformer, Informer) set the reference performance for 48-hour spatiotemporal forecasting.
- Limitations: single wind-farm region; nacelle measurements (not met-mast); missing/abnormal values need the documented cleaning steps; 48-hour horizon longer than game-day needs but useful for stress testing.
- GSE overlap: repo had a barometric-pressure benchmark and "wind/weather" inventoried but no spatiotemporal wind-forecasting benchmark data or method — this fills the data-substrate gap, no duplicate.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Weather-physics-for-totals lane: port the winning architecture to a stadium-wind network — replace turbines with stadium locations, power with wind speed/gusts, retrain on public mesonet data; shorten horizon to 6–24 hours (game-day relevant) (OTHER — weather/total-model substrate).
- Adopt the paper's data-caveat checklist (missing values, status flags, abnormal readings) as the QA spec for any real wind-data pipeline feeding totals (OTHER — weather data QA).
- Graph-based variant (see ledger 1305) and EMOS-style (see ledger 1301) to be tested on the same 48-hour task; SDWPF-trained encoder as pretrained backbone for stadium gust prediction with limited local data (OTHER — model transfer).

## Engine-actionable? (yes/no + one-line what)
Yes — download SDWPF, reproduce the RMSE≈47.1/MAE≈37.6 baseline as the wind-forecasting lane's reference, then re-benchmark graph-based and EMOS approaches on the 48-hour task before porting the winner to a stadium-wind gust network for totals.
