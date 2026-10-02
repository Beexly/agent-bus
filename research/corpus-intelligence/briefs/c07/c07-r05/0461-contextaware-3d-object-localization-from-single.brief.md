# arxiv-program/research/2026-09-21/arxiv-deep/0461-contextaware-3d-object-localization-from-single.md

Source paper: Caio, Van Zandycke & De Vleeschouwer (2023), arXiv:2309.03640v1. Ledger verdict: REJECT.

## What it is (1-2 sentences)
A CNN that predicts the pixel displacement from a basketball's center to its vertical ground projection from a ball-centered crop, lifting it to 3D via calibrated camera geometry — tested against the standard diameter-based depth baseline. Rejected for GSE: meter-scale errors and static broadcast-camera assumptions have no transfer path to the NFL probability engine, which consumes tracking data rather than producing it from video.

## Key metrics/methods (formulas where given, else "not specified")
- Model regresses displacement Δ = (Δx, Δy) in pixels from ball center to ground projection; calibrated camera geometry back-projects the ground point, intersects the known court plane, and lifts by the displacement direction.
- CNN with ImageNet-pretrained backbone + 3-layer regression head; 100 epochs, Adam lr 1e-4, Huber loss (δ=1.0); 8 random head initializations; means ± std reported.
- Metrics: MAE [px], MAPE [m], Median APE [m], MA3DE [m], Median A3DE [m].
- Ablations: crop size (64–800 px), image downscaling (1×–1/8), balancing training samples above/below 2 m.

## Data sources named
DeepSport: 364 panoramic professional-basketball images, 15 arenas, ~4500×1500 px, public via Kaggle; arena-exclusive cross-validation folds, fold A held out. Ballistic test set: 233 images (2336×1756), 2 arenas, free-flight balls with ground truth via motion-model fitting (authors' own). Code: https://github.com/gabriel-vanzandycke/deepsport.

## Findings (numbers and facts, not vibes)
- DeepSport test (proposed vs diameter baseline): MAE 34±3 px vs N/A; MAPE 1.25±0.11 m vs 2.88±0.22; Median APE 0.92±0.15 vs 2.10±0.38; MA3DE 1.29±0.10 vs 2.97±0.23; Median A3DE 0.95±0.16 vs 2.18±0.40.
- Crop-size ablation (MAPE): best at 256 px (1.04±0.11); degrades at 64 px (1.71±0.17) and large crops.
- Ballistic set: MAPE 2.68±0.12, improving to 2.21±0.27 after balancing above/below-2m training samples — severe height-distribution shift (102/233 ballistic balls above 3 m vs 60/801 DeepSport training samples).
- Ledger: in-distribution ~1.25 m error already fails the ≤0.5 m median gate for NFL catch-point/first-down use; broadcast NFL feeds have moving/zooming cameras with unknown per-frame intrinsics; no temporal modeling; football-specific occlusion/lighting untested.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: none for the engine — noted only as a far-future reference if GSE ever builds its own broadcast-video tracking extraction lane (the NGS replacement spec deliberately avoids video pipelines).

## Engine-actionable? (yes/no + one-line what)
No — rejected; adopt into a future video-tracking lane only if a replication on NFL broadcast frames achieves ≤0.5 m median catch-point 3D error on a held-out game.
