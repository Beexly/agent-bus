# docs/arxiv-program/research/2026-09-21/arxiv-deep/1584-cnn-surface-temperature-ensemble-nwp.md
## What it is (1-2 sentences)
A published Mon. Wea. Rev. paper (Inoue & Kawabata; arXiv:2507.18937) showing that member-wise CNN correction of coarse (40 km) ensemble surface-temperature forecasts beats Kalman-filter baselines and operational 5 km models while preserving ensemble information content rather than smoothing it away. Ledger verdict: ADAPT — a validated bias-correction + downscaling recipe for temperature forecasts at stadium scale.
## Key metrics/methods (formulas where given, else "not specified")
- Model: encoder–decoder CNN (Kudo 2022 / Inoue et al. 2024 design: conv/pool/FC, ReLU, batch norm, sigmoid output head) on 7 NWP inputs (surface temp, T@975/925/850 hPa, MSLP, U/V surface wind), per-sample min–max normalization with ±3 K extension for temperature; land–sea mask restricts loss to land grid points.
- Two-phase framework: train CNN mapping 40 km control-member (CF) fields → 5 km ground truth; apply member-wise to all 51 ensemble members. Key tested assumption: CF and perturbation members (PFs) share model config except initial conditions, so learned error characteristics transfer.
- Equations: ensemble mean f̄(t) = (1/M)Σfᵢ(t) (Eq. 1); RMSE (Eq. 2); CRPS ensemble form (Hersbach 2000); spread S(t) = √[Σ(fᵢ−f̄)²/(M−1)] (Eq. 3); SSR = spread/RMSE(mean); Energy Score and Variogram Score (p=1, w=1); FSS (Roberts & Lean 2008); rank histograms (elevation-stratified); FI–NE–ACC decomposition: ACC = p/(SDAF·SDAV), FI = p/SDAF², NE = SDAF√(1−ACC²), IE = |1−FI|·SDAV.
## Data sources named
JMA GEPS 51-member ensemble (CF + 50 PFs, 40 km), GSM 20 km, MSM 5 km; ground truth = 1.5-m EST (JMA gridded, 1 km → aggregated to 5 km, 900+ stations; bias ~0.01, RMSE ~1.19 K). Central Japan domain, lead times to 132 h (5.5 d); train 2017–2020, validation 2021, test 2022 (all 12-h cycles). Baselines: raw CF/GSM/MSM, KF post-processing (GSM–KF, MSM–KF), elevation lapse-rate correction (CF–Hcorr, −6 K/km).
## Findings (numbers and facts, not vibes)
- Deterministic: CF–CNN −1.2 K RMSE (46%) vs raw CF; ME within ±0.05 K (vs KF's residual positive bias); GSM–CNN −0.99 K (39%); KF correction (GSM–KF) only −0.76 K (29%); CNN beats all operational deterministic NWP + KF references at all lead times. [OTHER]
- Probabilistic: CRPS reduced ~0.8 K (47%) vs original GEPS; SSR approaches 1.0 via RMSE reduction (spread only reduced 0.1–0.2 K); rank histograms flattened in both elevation strata; topography-dependent conditional biases (negative in mountains, positive in plains) mitigated. [OTHER]
- Multivariate: Energy Score reduced >50%; Variogram Score reduced ~75%. [OTHER]
- Q2 result: training on CF vs PF10 vs GEPS ensemble mean — no statistically significant differences; train on CF only (halves training cost). [OTHER]
- Q3 result: CNN reduces noise error (NE) while maintaining/increasing forecast-information (FI); ensemble averaging reduces both — CNN error reduction is genuine, not smoothing. [OTHER]
- Extremes: 30 Jun 2022 heatwave (>39°C observed) — CRPS 3.19→2.62 K but max intensity underestimated; limited by low-resolution input information; Q–Q plot shows residual warm-tail bias. [OTHER]
- Code available upon request subject to collaborative agreement with MRI; JMA NWP outputs via JMBSC. [OTHER]
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Temperature leg of GSE's weather stack feeding the totals model; member-wise correction preserves ensemble information (matters when small errors near freezing flip rain→snow — the paper's South-Coast Cyclone case): OTHER (weather/totals modeling)
- FI/NE framework as the intellectual bridge proving correction adds real information vs smoothing: OTHER (model-validation methodology)
- Train-on-control-only Q2 finding cuts training cost: OTHER (cost/compute efficiency)
- Near-freezing threshold sensitivity (rain→snow flips): OTHER (game-conditions edge)
## Engine-actionable? (yes/no + one-line what)
Yes — build member-wise CNN bias-correction+downscaling of GEFS 0.25° (or HRRR) against NOAA RTMA ~2.5 km for temperature at NFL stadium neighborhoods, training on the control member only, with the 1583 conformal layer for coverage (accept if ≥20% RMSE gain over lapse-rate baseline on 2023 data with FI maintained).
