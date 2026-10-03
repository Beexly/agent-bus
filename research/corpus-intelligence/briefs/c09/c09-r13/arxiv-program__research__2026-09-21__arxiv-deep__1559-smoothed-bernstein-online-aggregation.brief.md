# arxiv-program/research/2026-09-21/arxiv-deep/1559-smoothed-bernstein-online-aggregation.md
## What it is (1-2 sentences)
Deep read of arXiv:2107.06268 (Ziel): a competition-winning (3rd place, IEEE DataPort Post-COVID day-ahead load forecasting) recipe for post-structural-break demand forecasting — Bernstein Online Aggregation with P-spline smoothing of combiner weights across forecast horizons, fronted by a novel holiday-adjustment procedure that strips structural shocks before the combiners see them. Ledger verdict: ADAPT.

## Key metrics/methods (formulas where given, else "not specified")
- Pipeline: data cleaning (tsrobprep) → holiday adjustment → expert training → smoothed BOA.
- Holiday adjustment: high-dim lasso on log-load with (i) lagged log-loads ±168…510h, (ii) p-quantile ReLU-transformed weather, (iii) all weather interactions ("manual kernel trick"), (iv) daily/weekly standard + cumulative dummies, (v) annual periodic cubic B-splines, (vi) impact-adjusted holiday dummies scaled by (Q90−Q37 rolling quantile gap) to handle the COVID level shift; fit by lasso (BIC-tuned), then zero the holiday coefficients → holiday-adjusted series. ~30s on one core (glmnet, sparse matrices).
- Expert pool: STL+ETS, AR(p) (AIC, pmax=528), 2 GAM designs (mgcv; non-linear AR + weather smooths, tensor weekly profiles), lasso high-dim regressions — each trained on 8 calibration windows C ∈ {28,…,1123} days (short windows adapt, long windows learn annual effects); horizons h=17…40 modeled per-horizon. GBM/neural nets tested and dropped (linear effects dominate).
- Smoothed BOA: fully adaptive BOA with gradient trick on absolute deviation loss; combiner L̃_{d,h} = Σ_k w_{d,h,k} L̂_{d,h,k}; updates: r, E, η (min(E/2, √(log K/Σr²))), R (second-order + indicator correction), w (w₀=1/K). Horizon smoothing: ŵ = B(B′B+λD′D)⁻¹B′w (P-splines), λ tuned by exponentially-discounted (ρ=0.01, ~100-day effective) past MAE on a grid; forward stepwise expert selection (30-day burn-in, 60-day calibration) picked 5 of 40 candidates.
- GSE transfer: (1) event-adjustment front-end — regress historical margins on schedule-event dummies (Thanksgiving/Christmas/short-rest/byes) with team-strength controls; (2) window-diverse experts — copies of GSE's core models on short (8wk), medium (1 season), long (3 season) windows; (3) smoothed BOA with weights smoothed across the market dimension (spread/total) or lookahead weeks via P-splines; λ by discounted past log-loss/MAE. profoc is R — port the 5 update equations to Python (~1 day).

## Data sources named
IEEE DataPort Competition "Day-Ahead Electricity Demand Forecasting: Post-COVID Paradigm" (real data, undisclosed city; dx.doi.org/10.21227/67vy-bs34): hourly load 2017-03-18 → 2021-01-17; weather actuals + day-ahead forecasts (humidity, pressure, cloud cover, temperature, wind speed/direction; wind direction → NS/EW components; + rolling daily means). Test: rolling 30 days from 2021-01-18 (24 hourly values, 17–40h ahead). Metric: MAE. Clear structural break at March 2020 lockdown. R package profoc (Berrisch & Ziel): https://profoc.berrisch.biz/, https://github.com/BerriJ/profoc.

## Findings (numbers and facts, not vibes)
- Competition: 3rd place (top 3 not significantly different per organizers).
- Expert selection: 5-model BOA combination ≈ 10% lower validation MAE than the best individual model (~11.4 vs ~12.4). Selected 5 diverse: 3 lasso (two ≈3yr windows, one ≈3mo window), 1 GAM (7mo window), 1 STL+ETS — mixing short and long calibration windows.
- Smoothing: selected λ varies over time; burn-in favors high λ (conservative, low estimation risk); short-window models (lasso D=76, GAM D=209) get more weight at far horizons (h=40).
- GAM tends to underestimate, STL+ETS to overestimate — they act as bias correctors inside the mixture.
- Only 5 of 40 experts survived selection — most expert engineering was discarded; window-diversity in a few linear models beat model-class diversity.
- Ad hoc tuning: forgetting ρ=0.01, 60-day validation, 30-day burn-in all hand-chosen; 30-day test is short for an adaptivity claim; no comparison against plain (unsmoothed) BOA in the paper — smoothing gain asserted via λ-selection curve, not isolated in a table. MAE/median objective — transfers to spread/total point forecasts, not probability calibration. Same BOA family as ledger 1555 (aggregation core not new; novelty is horizon-smoothing, holiday front-end, competition proof).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: combiner architecture — horizon/market-smoothed BOA over calibration-window-diverse sub-models for the engine's model-blending stage; structural-shock front-end (known-advance schedule events: Thanksgiving, Christmas, byes, short rest, international games) so the combiner trains on event-adjusted outcomes; tensor-product two-dimensional smoothing (markets × time) proposed as improvement experiment.

## Engine-actionable? (yes/no + one-line what)
Yes — build the event-adjustment front-end (schedule-event dummies on historical margins, then add effect back at forecast time) + horizon/market-smoothed BOA over window-diverse sub-model copies; acceptance gate: smoothed BOA beats plain BOA by ≥1% margin MAE or the front-end improves holiday/short-rest-week MAE by ≥5% without hurting normal weeks.
