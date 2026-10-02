# docs/arxiv-program/research/2026-09-21/arxiv-deep/1585-dual-resolution-wind-speed-ensemble-postprocessing.md

## What it is (1-2 sentences)
Tests whether operational dual-resolution ECMWF wind-speed ensembles (50-member 9 km + 100-member 36 km, and mixtures) beat single-resolution ones, before and after statistical post-processing with truncated-normal EMOS. Corpus verdict ADAPT — truncated-normal EMOS is the cheapest proven wind-speed forecaster, and it makes dual-resolution mixtures nearly redundant: calibrate one good wind ensemble rather than paying for two.

## Key metrics/methods (formulas where given, else "not specified")
- Truncated-normal EMOS (Thorarinsdottir & Gneiting 2010): predictive law N₀^∞(μ, σ²); dual-resolution location/scale link functions μ = a + b_H²f̄_H + b_L²f̄_L, σ² = c² + d²S² (Eq. 3.1), where f̄_H, f̄_L are ensemble group means and S² is combined-ensemble variance; squared coefficients enforce nonnegativity of weights; single-resolution by zeroing the other coefficient.
- Parameters estimated by minimum-mean-CRPS over training window (closed-form CRPS for truncated normal, Jordan et al. 2019); each lead time modeled independently.
- Spatial training strategies: regional (one parameter set), local (per station), semi-local (k-means, Lerch & Baran 2017 features: 12 climatology CDF quantiles + 12 ensemble-mean-error CDF quantiles; final config 90 clusters, 60-day window, chosen on 13 Oct 2023 – 31 May 2024 validation).
- Metrics: CRPS/CRPSS, QS/QSS at percentiles, Brier/BSS at 5/10/15 m/s, MAE/MAES, RMSE/RMSES; significance via 95% CIs from 2,000 stationary-bootstrap block samples; skill score S = (S̄_ref − S̄_F)/(S̄_ref − S̄_perf) (Murphy 1973, positively oriented); reference always the pure high-resolution (0,50) forecast.
- Assumptions: truncated normal adequate (fails at high-wind thresholds — heavier tails needed); SYNOP obs error ignored; exchangeability within resolution group; lead times independent.

## Data sources named
ECMWF operational: 50-member medium-range at T_CO1279 (~9 km) + 100-member extended-range at T_CO319 (~36 km), 10-m wind speed, 8,726 SYNOP stations, 1 Jul 2023 – 31 May 2024, 00 UTC init, lead times 0–15 d. Mixtures studied: (100,0), (0,50), (100,50), and (50, m_H) with m_H = 1, 2, 4, 8, 16, 32. Verification: 3 Sep 2023 – 31 May 2024 (262 days). No code link in paper; ECMWF archive data.

## Findings (numbers and facts, not vibes)
- All EMOS post-processing beats raw on CRPS, QS, MAE, RMSE at nearly all lead days; local EMOS best for days 1–6, converging with semi-local thereafter; regional weakest but cheapest.
- Post-processing "considerably reduces the differences between the various configurations" (replicating Baran et al. 2019 on operational data) — i.e., EMOS near-erases the gap between 9 km and 36 km models.
- Resolution beats size: raw (100,0) far worst; adding high-res members to 50 low-res gives monotonic gains — (50,32) reaches ~10% CRPSS at day 1, (50,16) ~7%, (50,8) ~5%, even (50,1)/(50,2) slightly help; gains decay with lead time but stay significant.
- Raw dual-resolution (100,50) never beats pure high-res (0,50) significantly (MAES significantly negative at all horizons); post-processed dual-resolution only helps for days 1–2 at upper quantiles.
- High-wind Brier scores: EMOS advantage vanishes at 10/15 m/s thresholds — truncated normal lacks tail weight; log-normal or truncated GEV suggested.
- After day 7, the post-processed pure low-resolution forecast catches up to and then outperforms the dual-resolution mixture at low thresholds.
- Limitations named: no ML/DRN comparison despite acknowledging it usually wins (deliberate "simple but powerful" scope); station-only verification, 15-day lead cap; single operational model (ECMWF IFS).

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Truncated-normal EMOS with affine links on ensemble mean/spread is the cheapest proven wind-speed forecaster (local EMOS best days 1–6; gains concentrate at 0–3 d leads for kickoff decisions) → OTHER (weather/forecast leg of the totals lane; wind × stadium geometry is gap #8).
- EMOS advantage vanishes at 10/15 m/s thresholds — truncated normal underweights tails; fix is log-normal/truncated-GEV or EECRPS estimation → TRUST-SIGNAL (calibration-state honesty: raw/normal forecasts are miscalibrated exactly in the storm-game regime that moves totals).
- Post-processing erases most of the 9 km vs 36 km gap; dual-resolution mixtures nearly redundant after calibration → OTHER (cost discipline: don't pay for two resolutions — calibrate one resolution well).

## Engine-actionable? (yes/no + one-line what)
Yes — build `weather/emos_wind.py`: truncated-normal EMOS with affine mean/spread links fit per stadium on trailing 60-day windows (local fits; semi-local k-means pooling where records are thin), run on GEFS/HRRR ensemble wind at stadium coordinates 0–3 day leads only, with a spliced log-normal/TGEV tail variant for high-wind games; acceptance gate: local/semi-local EMOS beats raw by ≥5% CRPSS on wind speed at 0–3 d on 2023–2024 holdout at 30 NFL stadiums (GEFS reforecast + METAR), else fall back to the ANET2 flow (1580).
