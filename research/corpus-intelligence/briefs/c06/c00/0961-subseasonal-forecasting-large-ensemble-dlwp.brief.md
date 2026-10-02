# arxiv-program/research/2026-09-21/arxiv-deep/0961-subseasonal-forecasting-large-ensemble-dlwp.md
## What it is (1-2 sentences)
Deep read of Weyn et al. (2021, arXiv:2102.05107): subseasonal-to-seasonal weather forecasting with a large ensemble of deep-learning weather prediction models — the transferable result is the ensemble-construction comparison: ensembles built by retraining with perturbed model weights ("stochastically perturbed", SP) beat initial-condition-perturbation ensembles on spread and RMSE. Verdict in file: ADAPT — GSE should prefer retrain-seed ensembles over pure data-bootstrap ensembles for NFL prediction; the S2S weather application itself is only weather-lane-adjacent.
## Key metrics/methods (formulas where given, else "not specified")
- SP ensemble: 32 models from 8 training cycles with different random seeds; 4 checkpoints each (every 10 epochs after epoch 100) selected by 4-week T850 ACC; grand ensemble = 32 SP × 10 ERA5 ICs = 320 members.
- Metrics: RMSE, anomaly correlation (ACC), CRPS, ranked probability skill score RPSS = 1 − ⟨RPS⟩/(⟨RPS_C⟩ + D₀/M), D₀ = (K²−1)/(6K); ensemble-size debiasing; 10,000-sample bootstrap CIs.
- Ideal-ensemble assumption: spread should match ensemble-mean RMSE.
## Data sources named
ERA5 reanalysis training; ERA5's 10 perturbed 4DVAR members as ICs; bias-correction window 1991–2015; test twice-weekly 2017–2018 (208 cases) verified against ERA5. No code link in arXiv text.
## Findings (numbers and facts, not vibes)
- Compute: 320-member 6-week ensemble in ~3 min on one GPU; one-week forecast ~0.1 s on V100.
- SP >> IC: IC ensemble under-dispersive (spread << RMSE, shrinking first 36 h); SP spread ≈ 80% of RMSE at 8 d, 95% at 14 d; SP ensemble-mean RMSE stays below climatology through 14 d vs 7–8 d for IC.
- S2S skill: at weeks 5–6 the DLWP T850 ACC is in statistical tie with the full ECMWF S2S ensemble (overlapping 95% CIs); RPSS (T2, days 12–18): ECMWF 0.247 vs DLWP 0.121; bias-corrected weeks 5–6: 0.155 DLWP vs 0.287 ECMWF (land-only close).
- Checkpoint diversity ≈ independent-retraining diversity (spread between checkpoints of one cycle ≈ spread between cycles) — snapshot ensembling is a cheap substitute.
- Limitations: no ocean coupling (weak SST regions, missed 2018 El Niño onset); no precipitation; 1.4° resolution; test only 2 years.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: pure ensemble-construction methodology for the GSE engine — when building prediction ensembles (spread/total/prop models), generate members by retraining with different seeds/checkpoint snapshots (SP-style) in addition to data-level perturbations, and validate the spread–RMSE relationship on holdout.
## Engine-actionable? (yes/no + one-line what)
yes — build 32-member SP-retrain vs bootstrap-resampled ensembles on GSE spread/total training data; adopt SP if it improves holdout CRPS by ≥2% AND its spread–RMSE ratio is closer to 1.0 (within ±0.15) than the bootstrap ensemble's.
