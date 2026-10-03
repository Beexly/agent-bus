# arxiv-program/research/2026-09-21/arxiv-deep/1589-snow-depth-short-long-term-forecasts.md
## What it is (1-2 sentences)
Hammer (2019), arXiv:1901.04695: physics-guided statistical models for short-term (5-day) and long-term (3-week) probabilistic forecasts of snow depth at three Norwegian locations, built on a zero-inflated gamma regression with physically structured snowfall/melting terms. The brief recommends ADAPT as the engine's snow-depth-on-the-field model for cold-weather (Buffalo/Green Bay/Foxboro) totals.

## Key metrics/methods (formulas where given, else "not specified")
- Zero-inflated gamma: snowfall term R_t·β₀·logit⁻¹(β₁ + β₂T_t) (inverse-logit snow/rain partition around 0 °C; β₀ = estimated snow-water ratio, not fixed at 10).
- Melting/aging: D_{t−1}·logit⁻¹(β₃ + (β₄ + β₅R_t)T_t) (temperature–rain index interaction embedded in logit to guarantee nonnegativity).
- Expectation: E(D_t | D_t > 0) = e^μ + snowfall + melting/aging; identity link to gamma.
- Variance model that REJECTS the standard gamma assumption: Var(D_t|D_t>0) = σ₁² + σ₂²·(E(D_t|D_t>0) − D_{t−1})² — uncertainty scales with expected CHANGE, not level; standard constant-CV fit was "very poor".
- P(D_t = 0) via logistic regression on E(D_t|D_t>0) alone (single covariate).
- Estimation: custom steepest-descent MLE (no R package fits the coupled nonlinear model).
- Long-term: Model 1 — time-series models for T and R (seasonal m/q/s + AR structure, AIC forward stepwise) feeding realizations into the short-term model; Model 2 — time-series on D directly; blending = first δ reliable-forecast days Monte-Carlo-tracked, then time-series.
- Rejected extensions (AIC did not improve): quadratic temperature in snowfall term; D_{t−1} inside melting logit; AR(2) lag D_{t−2}.
- Evaluation: leave-one-year-out CV on Dec–Feb, metric = mean absolute forecast error; PIT goodness-of-fit histograms via F_X(X) ~ U[0,1].

## Data sources named
Three Norwegian locations (Oslo, Geilo, Tromsø), daily D_t (snow depth), R_t (24-h precipitation), T_t (24-h mean temperature); sources seklima.met.no plus NRK/yr.no scraping 2012–2018 with missing values imputed from seklima. No code link.

## Findings (numbers and facts, not vibes)
- 5-day-ahead with reliable T/R forecasts: mean absolute error 3–7 cm across the three locations.
- 3-week-ahead with 5 days of reliable forecasts: error 7–16 cm — "a little over half" of the seasonal-trend-only baseline error (snowpack memory makes it predictable even though weather forecasts are season-dominated after a few days).
- Reliable forecasts roughly HALVE the error vs no forecasts.
- Model 2 beats Model 1 on MAE, but Model 1 additionally yields simultaneous long-term scenarios of temperature + precipitation + snow depth jointly.
- PIT histograms approximately uniform (well-calibrated).
- Relative to mean snow depth, errors largest at Oslo (shallow, intermittent pack) — the regime most relevant to NFL stadiums (Chicago, Baltimore), per the brief's INFERENCE.
- Estimated snow-water ratio β₀ ≈ 0.96 (Oslo), 0.72 (Geilo), 0.89 (Tromsø) — notably NOT the canonical 10:1, suggesting the fitted ratio absorbs other effects.
- Limitations: "perfect" weather forecasts assumed in short-term evaluation; conditional-independence assumption ignores residual autocorrelation; AIC-rejected extensions show the model is near its complexity ceiling on these data; CV window 2012–2018 only, no out-of-climate generalization test; per-location fits.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (weather × totals engine): fills a genuine hole — no engine component models snow depth on the field; current benchmarks cover barometric pressure but nothing about snow physics × totals/passing. Snow games (Buffalo, Green Bay, Foxboro, Chicago, Baltimore) are exactly where public totals/props misprice since market weather adjustment is qualitative ("snow game"). A calibrated probabilistic snow-depth model at kickoff gives quantitative snow-game edges. Serves the totals lane and trust-target intake (weather-adjusted game quality).
- OTHER (general modeling technique, transferable): the change-scaled variance trick Var ∝ (E − D_{t−1})² is worth stealing for any stateful variable (e.g., field-condition indices) — uncertainty scales with expected change, not level. Serves the calibration/sizing lane.
- OTHER (spatio-temporal extension): author explicitly suggests a spatio-temporal extension as future work — connects directly to 1587's GNN; the brief proposes a multi-stadium joint GraphSAGE fit as the improvement experiment. Serves the engine's weather-modeling architecture.
- COACHING (weaker): wind added to the melt/aging term (sublimation/packing) is relevant to Buffalo's lake-effect regime and could inform sideline/stadium-ops adjustments — flagged as improvement-experiment territory, not a finding.

## Engine-actionable? (yes/no + one-line what)
Yes — build weather/snow_depth.py fitting the zero-inflated gamma (Eqs. 1–9) per cold-weather stadium from NOAA T/R/D climatology, Monte-Carlo-tracked over 5-day HRRR/GEFS T/R forecasts to kickoff, outputting P(depth > 0/2/5/10 cm); ADOPT if it beats the 10:1-rule heuristic on Brier at >0 cm by ≥ 10% across Orchard Park/Green Bay/Foxboro leave-one-season-out 2000–2024.
