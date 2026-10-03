# docs/arxiv-program/research/2026-09-21/arxiv-deep/1301-parametric-post-processing-dual-resolution-precipitation.md
## What it is (1-2 sentences)
Szabó, Gascón & Baran (arXiv:2212.12504v1, stat.AP, 2022): parametric statistical post-processing of dual-resolution precipitation forecasts (one 9 km deterministic run + a 51-member 18 km ensemble from the ECMWF IFS) into calibrated probabilistic forecasts, showing clustering-based semi-local training matches state-of-the-art quantile mapping without extra historical data. Ledger verdict: ADAPT (replacement for REJECT 1095).
## Key metrics/methods (formulas where given, else "not specified")
- Censored shifted gamma (CSG) EMOS: ensemble statistics linked to a gamma distribution shifted and left-censored at zero (handles the point mass at zero precipitation); parameters estimated by minimizing mean CRPS over a rolling training window.
- CRPS: `CRPS(F, x) = ∫(F(y) − 1{y≥x})² dy`.
- Three spatial training strategies compared: local (per station), regional (pooled), semi-local (stations clustered by climatological/ensemble characteristics, coefficients per cluster).
- Scoring: CRPS, CRPSS (skill vs raw ensemble), Brier scores.
## Data sources named
ECMWF Integrated Forecast System precipitation forecasts: a single 9 km deterministic forecast plus a 51-member 18 km ensemble (TCo639), verified against station precipitation observations; European-domain verification.
## Findings (numbers and facts, not vibes)
- Post-processing yields significant skill improvement over raw dual-resolution ensembles; differences between dual-resolution combinations shrink to non-significant levels after post-processing. (OTHER — weather-for-totals calibration lane)
- Semi-locally trained CSG EMOS fully catches up with state-of-the-art quantile mapping, without requiring the additional historical data that quantile mapping needs; quantile mapping remains the skill ceiling. (OTHER — data-efficient calibration)
- No exact CRPS/CRPSS tables quoted in the ledger; limitations: CSG distribution is precipitation-specific, ECMWF-specific configuration, European domain only. (OTHER — caveat)
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Fills corpus Gap 8 (weather physics for totals): the calibration half of a weather-for-totals pipeline; repo calibration stack (CQR, temperature scaling, LRD, ECE-by-slice) has no EMOS/CRPS-fitted parametric post-processing or censored-distribution treatment of zero-inflated outcomes. (OTHER)
- No QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, or SCHEME content in this file.
## Engine-actionable? (yes/no + one-line what)
yes — Fit CSG EMOS (or censored Gaussian/logistic for wind) on raw stadium precipitation/wind ensembles with CRPS-minimizing rolling windows and semi-local clustering across NFL stadiums by climate regime, and feed calibrated predictive distributions into the totals model with CRPSS tracked per stadium (per ledger §11–14).
