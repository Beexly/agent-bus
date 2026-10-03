# arxiv-program/research/2026-09-21/arxiv-deep/0725-quantile-regression-gefcom2017-load-forecasting.md
## What it is (1-2 sentences)
Deep-read ledger of Ziel (2018) "Quantile Regression for Qualifying Match of GEFCom2017 Probabilistic Load Forecasting" — a competition-winning (2nd of ~100 teams, open track) probabilistic forecasting framework: log decomposition into long-term trend + periodic remainder, 24 hourly quantile regressions on a deterministic seasonal basis, evaluated by pinball loss. Verdict: ADAPT as the architecture for GSE's point-total and score-differential probabilistic forecasting.

## Key metrics/methods (formulas where given, else "not specified")
- Pinball score: S_τ(y,q) = (y−q)(τ − 𝟙{y−q<0}) (Eq. 1).
- Decomposition: L_t = trend_t + Y_t (Eq. 2); log-load for near-periodic stationarity.
- Trend regression (Eqs. 3–4): hour-of-week dummies, Fourier-2 annual basis, periodic B-splines BS12, cubic temperature polynomials; trend = annual smoothing moving average (K=8736 hours) of OLS residuals; trend uncertainty via sample quantiles of Δ_H trend̂.
- Remainder (Eq. 5): 24 hourly quantile regressions, 46 parameters each — 7 day-of-week dummies + 28 annual Fourier-2 × day-of-week interactions + 11 annual B-spline BS12; no autoregression, no temperature, holidays ignored.
- Final quantiles: q̂_τ(L) = q̂_τ(Y) + q̂_τ(trend); q̂_τ(ℓ) = exp(q̂_τ(L)); estimator β̂ = argmin Σ S_τ(Y, β′X) (Eq. 6); fit via R quantreg (asymmetric-Laplace MLE equivalence).

## Data sources named
GEFCom2017 competition data (public): hourly electricity load for 10 ISO New England zones (TOTAL + ME, NH, VT, CT, RI, MA, MA.SE, MA.WC, MA.NE) + dry-bulb/dew-point temperature, ~10.25 years in-sample per task; 6 tasks, 1-month-ahead windows Jan–Apr 2017; quantiles Q={0.1,...,0.9}; ~100 teams.

## Findings (numbers and facts, not vibes)
- 2nd place open-data track, 4th place defined-data track (of ~100 teams); beats Vanilla benchmark in 90% of zone×task cases.
- Task 1 TOTAL: pinball 358.44 MW vs benchmark 402.68 MW (+10.99%); ME +36.87%. Task 6 TOTAL +11.19%, ME +46.89%.
- In-sample 10–90% quantile range ≈0.1 (log scale) vs trend-component range <0.008 — uncertainty driven by the quantile-regression component.
- Model has 24×9×10 = 2,160 quantile regressions, 46 parameters each.
- Paper's admitted weaknesses: ignored holidays, non-linear effects, structural changes (Massachusetts solar boom — time-varying components needed); quantile summation only valid under comonotonicity.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: totals/score-differential forecasting — NFL totals have the same structure the paper exploits: slow-moving trend (season scoring environment, rule changes) + stationary remainder (weekly matchup effects, rest, weather bands). Port as log(total) = trend_t + Y_t with quantile regressions on week-of-season B-splines, rest-differential dummies, weather-band interactions, divisional flags; evaluate by pinball loss.
- OTHER: pairs with 0723/0724 (probability calibration) — this gives the full predictive distributions to calibrate; feeds Kelly-staked totals picks and the abstention gates (0714–0720).

## Engine-actionable? (yes/no + one-line what)
Yes — prototype the decomposition-quantile model on NFL game totals (2018–22 fit, 2023–24 backtest) and adopt if it beats GSE's current totals approach on pinball loss with positive Kelly-staked backtest ROI; planned improvement: quantile-lasso on expanded features + structural-break detection in the trend component.
