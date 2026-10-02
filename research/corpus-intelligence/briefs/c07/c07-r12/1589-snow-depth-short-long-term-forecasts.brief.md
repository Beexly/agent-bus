# arxiv-program/research/2026-09-21/arxiv-deep/1589-snow-depth-short-long-term-forecasts.md
## What it is (1-2 sentences)
Statistical models for short and long term forecasts of snow depth (arXiv:1901.04695, Hammer 2019). Builds a physics-structured zero-inflated gamma regression for snow depth — snowfall via inverse-logit snow/rain partition, melt/aging via temperature–rain index interaction, and a variance model that scales with expected CHANGE not level — evaluated by leave-one-year-out CV on three Norwegian locations.
## Key metrics/methods (formulas where given, else "not specified")
- E(D_t|D_t>0)=e^μ + R_t·β₀·logit⁻¹(β₁+β₂T_t) + D_{t−1}·logit⁻¹(β₃+(β₄+β₅R_t)T_t); Var=σ₁²+σ₂²(E−D_{t−1})² (rejected standard constant-CV gamma as "very poor"); P(D_t=0)=logit⁻¹(β₆+β₇·E); custom steepest-descent MLE.
- 5-day-ahead MAE 3–7 cm (given reliable T/R forecasts); 3-week-ahead 7–16 cm — ~half the seasonal-trend-only baseline error; reliable forecasts roughly HALVE error vs none; β₀ snow-water ratio fitted ≈0.96/0.72/0.89 (not the canonical 10); PIT histograms ~uniform. Oslo (shallow intermittent pack) had largest relative errors — the NFL-stadium-like regime.
## Data sources named
seklima.met.no + NRK/yr.no scraping (2012–2018), three Norwegian locations (Oslo, Geilo, Tromsø).
## Findings (numbers and facts, not vibes)
- Snowpack has memory: snow depth stays predictable 3 weeks out even though weather forecasts are season-dominated after a few days — a little over half the baseline error.
- Model 2 (direct D time series) beats Model 1 (T/R series fed into short-term model) on MAE; Model 1 additionally yields joint scenarios of T+R+D.
- Rejected extensions (quadratic T, D_{t−1} inside melt logit, AR(2) lag) did not improve AIC — near complexity ceiling.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: probabilistic snow-depth-on-the-field model for snow-game totals (Buffalo/Green Bay/Foxboro/Chicago/Baltimore) — fills a named gap; the change-scaled variance trick transfers to any stateful variable (e.g. field-condition indices).
- COACHING: (INFERENCE) kickoff-time snow-depth distributions inform go/no-go on FG range and game-plan adjustments, though the file does not make this claim.
## Engine-actionable? (yes/no + one-line what)
Yes — fit zero-inflated gamma per cold-weather stadium from NOAA T/R/D climatology + Monte-Carlo tracking over 5-day HRRR/GEFS to kickoff; ADOPT if it beats the 10:1-rule heuristic on >0 cm Brier by ≥10% across test stadiums.
