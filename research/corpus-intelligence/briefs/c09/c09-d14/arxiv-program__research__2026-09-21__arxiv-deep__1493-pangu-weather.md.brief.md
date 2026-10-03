# arxiv-program/research/2026-09-21/arxiv-deep/1493-pangu-weather.md
## What it is (1-2 sentences)
Ledger for Bi et al. (Huawei Cloud, 2022; arXiv:2211.02556v1) on Pangu-Weather, a 3D Earth-Specific Transformer (~256M params) that beat operational NWP on global medium-range forecasts via hierarchical temporal aggregation (separate 1h/3h/6h/24h models greedily composed to minimize iteration count). Verdict: ADAPT — the 3DEST model itself does not transfer (GSE doesn't run NWP); adapt the forecast-chaining pattern and the RQE tail-calibration metric.
## Key metrics/methods (formulas where given, else "not specified")
Attention(Q,K,V) = SoftMax(QKᵀ/√D + B_ESP)V with Earth-specific positional bias B_ESP keyed on absolute (height, latitude); latitude-weighted RMSE with weights L(i) ∝ cos(latitude_i); latitude-weighted ACC vs 39-year climatology; Relative Quantile Error RQE = Σ_d (Q̂_d − Q_d)/Q_d over D=50 log-spaced percentiles 90%→99.99% (RQE<0 = underestimates extremes); greedy lead-time composition (e.g. 23h = 3×6h + 1×3h + 2×1h).
## Data sources named
ERA5 (ECMWF reanalysis, 43 years hourly 1979–2021; train 1979–2017, validate 2019, test 2018/2020/2021); IBTrACS TC2018 (88 named tropical cyclones, 2018); operational ECMWF IFS via TIGGE archive; FourCastNet (values digitized from plots).
## Findings (numbers and facts, not vibes)
- First AI system to beat operational IFS on all variables, all lead times 1h–7d: Z500 5-day RMSE 296.7 (Pangu) vs 333.7 (IFS) vs 462.5 (FourCastNet) m²/s²; T2M 5-day 1.53 vs 1.75 K; "forecast time gain" >12h on all variables, >24h for specific humidity.
- Inference 1,400ms on a single Tesla-V100 for a 24h forecast — >10,000× faster than IFS; training cost 100 epochs × ~16 days on 192 Tesla-V100 per model.
- Tropical cyclones: 3-day mean position error 120.29 km (Pangu) vs 162.28 km (ECMWF-HRES); 5-day 195.65 vs 272.10 km; cyclone intensity heavily underestimated (ERA5 training-data limitation; min pressure often 50 hPa too high).
- 100-member Perlin ensemble: slightly worse than deterministic at 1 day, significantly better beyond 5 days (7-day Z500 RMSE 500.3→450.6).
- Two transferable ideas for GSE: (1) hierarchical temporal aggregation — train direct multi-lead-time projection heads and greedily compose them rather than iterating a single short-step model (Pangu's 7× chaining of 24h models recovered >30% RMSE vs FourCastNet's 28× chaining of 6h); GSE analogue: direct 1/2/4/8-week projection heads instead of iterating a 1-week model; (2) RQE tail metric — all methods underestimate extremes increasingly with lead time; audit GSE's wind adjustments against RQE of realized game-time conditions and use tail-aware loss in the totals head.
- Acceptance gate in file: greedy multi-week composition must cut horizon-8 cumulative RMSE by a weather-comparable margin on five seasons of nflverse backtests; RQE audit must document wind underestimation then re-fit totals weather adjustment with tail-weighted loss.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
OTHER: weather input calibration for totals/spread modeling; multi-horizon projection-chaining architecture; tail-risk calibration methodology.
## Engine-actionable? (yes/no + one-line what)
Yes — (1) test direct multi-week-ahead projection heads vs iterated 1-week chaining on nflverse backtests, and (2) run an RQE audit of game-time wind forecasts vs realized conditions and apply tail-weighted loss to the totals weather adjustment.
