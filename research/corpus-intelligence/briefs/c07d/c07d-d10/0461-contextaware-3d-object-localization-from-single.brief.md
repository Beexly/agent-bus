# research/2026-09-21/arxiv-deep/0461-contextaware-3d-object-localization-from-single.md
## What it is (1-2 sentences)
Deep-read ledger for Caio, Van Zandycke & De Vleeschouwer (2023), arXiv:2309.03640v1 — a CNN that localizes a basketball in 3D from a single calibrated image by regressing the pixel displacement from the ball center to its vertical ground projection, outperforming the diameter-based depth baseline. The intake verdict is **REJECT**: ~1.25 m in-distribution error is too coarse for NFL probability features, and GSE consumes tracking data rather than extracting it from video.

## Key metrics/methods (formulas where given, else "not specified")
- Target quantity: pixel displacement vector Δ = (Δx, Δy) from ball center to its vertical ground projection; camera calibration then lifts the projection to 3D via back-projection onto the known court plane.
- Model: ImageNet-pretrained CNN backbone + 3-layer regression head; input is a ball-centered image crop (RGB).
- Training loss: Huber loss with δ = 1.0 on displacement error; optimizer Adam, learning rate 1e-4, 100 epochs; 8 random head initializations; means ± std reported over runs.
- Metrics reported: MAE [px], MAPE [m], median APE [m], MA3DE [m] (mean absolute 3D error), median A3DE [m].

## Data sources named
- **DeepSport** dataset: 364 panoramic professional-basketball images, 15 arenas, ~4500×1500 px; ball annotated by center + vertical ground projection; arena-exclusive cross-validation folds; fold A held out as test. Public via Kaggle.
- **Ballistic test set** (authors-constructed): 233 images (2336×1756), 2 arenas, balls on free-flight trajectories, ground truth via motion-model fitting. Deliberate height shift: 102/233 ballistic balls above 3 m vs only 60/801 DeepSport training samples above 3 m.
- Code: https://github.com/gabriel-vanzandycke/deepsport (stated).

## Findings (numbers and facts, not vibes)
- DeepSport test, proposed vs diameter baseline (Table 1, exact): MAE [px] 34±3 (proposed) vs N/A (baseline); MAPE [m] 1.25±0.11 vs 2.88±0.22; median APE [m] 0.92±0.15 vs 2.10±0.38; MA3DE [m] 1.29±0.10 vs 2.97±0.23; median A3DE [m] 0.95±0.16 vs 2.18±0.40. Proposed method beats baseline by ~1.7–1.8× on all error metrics.
- Crop-size ablation (MAPE / MA3DE, exact): 64 px → 1.71±0.17 / 1.75±0.17; 96 → 1.52±0.13 / 1.56±0.13; 128 → 1.46±0.06 / 1.50±0.06; 256 → 1.04±0.11 / 1.07±0.12; 320 → 1.17±0.09 / 1.20±0.10; 480 → 1.18±0.07 / 1.21±0.07; 512 → 1.25±0.11 / 1.22±0.11; 640 → 1.16±0.07 / 1.20±0.08; 800 → 1.08±0.06 / 1.11±0.06. Best at 256 px; no monotonic gain beyond ~256–320 px.
- Image downscaling MAPE: 1× → 1.25±0.11; 1/2 → 1.33±0.11; 1/4 → 1.32±0.08; 1/8 → 1.22±0.07 — resolution reduction does not materially hurt.
- Ballistic set: MAPE 2.68±0.12 without balancing; 2.21±0.27 after balancing above/below-2 m training samples — a ~0.47 m gain from height-balancing, but still ~1 m worse than in-distribution.
- Training setup: 100 epochs, Adam lr 1e-4, Huber δ=1.0, 8 head initializations.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: No engine-program connection. This is a broadcast-video perception paper; GSE's tracking/NGS lane is a *consumer* taxonomy (27 metric families inventoried 2026-09-21) that explicitly avoids depending on fragile video pipelines. The meter-scale error and calibration dependence (static panoramic cameras vs moving/zooming NFL broadcast cameras with unknown per-frame intrinsics) rule out any near-term transfer. The only conceivable future connection is the far-future broadcast-video tracking lane, for which the acceptance gate is explicit: catch-point 3D error ≤ 0.5 m median on a held-out NFL game — the paper's own ~1.25 m in-distribution error already fails that gate, so the lane stays closed.
- OTHER (UNCERTAIN): The proposed improvement experiment — physics-informed augmentation re-rendering training balls at sampled heights 2–8 m — is the only portable methodological idea, and it is relevant only if GSE ever builds its own video-tracking extraction, which it has not greenlit.

## Engine-actionable? (yes/no + one-line what)
No — rejected for the probability engine; at most a reference note for a hypothetical future broadcast-video tracking lane gated on ≤0.5 m median catch-point error.
