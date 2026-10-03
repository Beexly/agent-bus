# docs/arxiv-program/research/2026-09-21/arxiv-deep/1096-assessing-the-utility-of-weather-data.md
## What it is (1-2 sentences)
A deep-read ledger entry for arXiv:1802.03913v1 (Zafarani, Eftekharnejad, Patel 2018): a small solar-power regression study asking whether weather data improves photovoltaic power prediction. Verdict: REJECT — methodologically weak (random splits on time series, no weather-value ablation, unclear units), domain-disjoint from sports.
## Key metrics/methods (formulas where given, else "not specified")
- LASSO and OLS; LASSO α=0.1722 via 10-fold CV (also tried α=0.001). Standard LASSO/OLS, no novel equations.
- Random 60/40 split on time-ordered data (invalid for forecasting); top-25-feature model tried.
## Data sources named
One Syracuse solar-panel installation, 2016-06-29 through 2017-02-25, 100+ parameters (weather, meter/PV, solar radiation, 5-day-ahead predicted weather). Units/scaling of target unclear; sample counts loosely specified.
## Findings (numbers and facts, not vibes)
- LASSO MSE: default 5.5436; 60%-train 5.5045; α=0.001 → 5.4459. OLS MSE: full-data 5.4248; 60/40 split 5.4147. Top-25-feature model MSE 5.4968. Units unstated; model differences tiny and likely noise.
- Claimed: ~6 features suffice; ~5,000 samples (~2 months) stabilize error; instantaneous solar irradiance dominates feature importance.
- Never ran the ablation its title promises (no with/without-weather comparison); random splits on autocorrelated time series = train/test leakage.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- No GSE data-leakage or trust-signal transfer; the weather-for-totals lane cares about wind/precipitation effects on scoring — a solar-irradiance regression offers no transferable method: OTHER (none).
## Engine-actionable? (yes/no + one-line what)
No — REJECT; replaced by ledger 1302; nothing in the method or findings applies to sports prediction.
