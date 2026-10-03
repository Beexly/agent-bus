# arxiv-program/research/2026-09-21/arxiv-deep/1588-cnn-ensemble-postprocessing-tropical-cyclone-precipitation.md
## What it is (1-2 sentences)
Paper (arXiv:2409.09607): a CNN post-processor trained on only 15 six-hourly reports of a single typhoon (Soudelor, Taiwan 2015) beats the raw 20-member ensemble and an FCN on 24-h precipitation, via three transferable tricks: temporal-interpolation data augmentation, dynamic storm-relative features, and recency-weighted CRPS loss (1:2:4 weights on the three most recent reports).
## Key metrics/methods (formulas where given, else "not specified")
- CNN-all: 25 predictor layers over 84×70 grids → 2×2 conv → 32 feature maps → grid-specific μ̂, σ̂; Gaussian assumption with closed-form CRPS: CRPS = σ·{z·(2Φ(z)−1) + 2φ(z) − 1/√π}, z = (y−μ)/σ; softplus, Kaiming init, 100 epochs, lr 0.001, PyTorch 1.12.
- Augmentation: linear interpolation between consecutive reports (N−1 new) + noise injection → 2×(2N−1) total reports.
- Features: 20 WEPS members + lon/lat/altitude + dynamic (TC center lon/lat, grid–TC distance, TC-passed indicator); recency weights 1:2:4 (three reports) / 1:1:2:2:4:4 (with augmented).
- CRPSS vs Gaussian(ensemble mean, ensemble variance) reference; within-storm sequential training (only reports < k).
## Data sources named
20 WEPS (WRF Ensemble Prediction System, CWA Taiwan) members, 6-hourly, 24-h accumulations; truth = radar QPE (QPESUMS); Taiwan grid 21.375–25.525°N × 119.55–123°E, 5,880 grids (1,294 land: 623 plain, 671 mountain); 15 reports Aug 5–9 2015; reports 6–11 (landfall) = heavy-rain evaluation. Data not shareable (CWA permission withheld); no code link.
## Findings (numbers and facts, not vibes)
- CNN-all best of five on CRPSS across reports 6–11 (plain grids); all four CNNs mostly positive CRPSS vs raw ensemble.
- Reliability: CNN-all closest to observed frequency for P(precip > 200 mm) in reports 7–10 (325/457/475/318 grids > 200 mm); ensemble members and FCN over-predict.
- Ablation: CNN-dyn and CNN-aug each beat plain CNN; CNN-all best overall.
- Failure modes: FCN beats all CNNs on mountain grids in some reports (Report 9 landfall in Hualian — terrain-locking; CNN kernels smooth it out); Gaussian reference beats post-processing for light/very light rain (gains only in >80 mm regime); 24-h accumulation design arrives a day late — not real-time deployable as designed.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: temporal-interpolation augmentation directly addresses GSE's small-sample problem (~1 hurricane-type game per stadium per decade) — interpolate between consecutive forecast issuance times at archived extreme-weather games, noise-inject, multiply rare-event training examples for totals tails.
- OTHER: recency-weighted CRPS (1:2:4) fixes the equal-weighting flaw acknowledged in sibling weather papers — weight recent issuance times more when post-processing game-day forecasts.
- OTHER: dynamic storm-relative distance features map to front-relative features (distance to cold-front boundary) for temperature/wind downscaling.
## Engine-actionable? (yes/no + one-line what)
Yes — build `weather/extreme_augment.py` (temporal interpolation + noise + recency-weighted CRPS) feeding the extreme-weather post-processor; gate: ≥5% Brier improvement at tail thresholds (>10 mm precip, >15 m/s wind) on hold-out extreme games.
