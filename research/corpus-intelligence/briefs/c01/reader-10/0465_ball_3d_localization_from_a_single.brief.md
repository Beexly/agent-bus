# arxiv-program/research/2026-09-21/arxiv-deep/0465-ball-3d-localization-from-a-single.md
## What it is (1-2 sentences)
Paper by Van Zandycke & De Vleeschouwer (arXiv:2204.00003v3) estimating 3D ball position from a single calibrated monocular image: a BallSeg detector feeds 64×64 crops to a VGG16 CNN that regresses ball diameter in pixels (jointly with ball/non-ball classification), converted to depth via known real ball diameter and camera matrix. Program verdict: REJECT — ~2 m 3D error, annotation-by-motion-model circularity, basketball-only, and GSE consumes tracking data rather than extracting it from video.
## Key metrics/methods (formulas where given, else "not specified")
- Combined loss L = BCE (ball presence) + α·Huber(δ=1.0) for diameter, α=0.5 (paper Eqs. 1–3)
- Geometry: projection with calibration matrix K (Eq. 4), ray back-projection from ball center (Eqs. 5–6), 3D position from apparent diameter d and known real diameter D (Eq. 7); annotation via frictionless-free-fall ballistic model (Eq. 8) + least-squares trajectory fit (Eq. 9); candidate selection argmax of presence score (Eq. 10)
- Training: batch 16 (4 images × k=4 candidates), 100 epochs, Adam starting lr 1e-4 halved every 2 epochs from epoch 50; 8 repetitions; mean ± std reported
- Baseline: Hough Circle Transform (ρ=37, τ_l=10, τ_h=20) diameter estimator + same geometry; "Oracle" detector variant (perfect candidates)
## Data sources named
- DeepSport: 314 panoramic basketball images, 15 scenes, ball 14–37 px, 2–5 Mpx; 3D ground truth via motion-model fit on ballistic sequences
- Extended DeepSport: 1,514 images, 49 scenes, 14–45 px (under NDA — not public)
- High-quality eval set: 233 images from 35 ballistic trajectories, 2 scenes, 19–40 px, 2336×1752
- APIDIS: 4,019 images, 1 scene, 5–27 px, 800×600 (cross-dataset generalization)
- Code stated: github.com/gabriel-vanzandycke/deepsport; raw sequences stated on Kaggle (links not fetch-verified)
## Findings (numbers and facts, not vibes)
- Table 2 headline (mean ± std over 8 runs): CNN cuts diameter MAE from ~4.9 px (HCT) to 1.6 px, projecting to ~1.7–2.3 m 3D error / ~10% relative error
- Eval set, BallSeg+HCT: TP 83±2, MAE 4.6±0.5 px, 5.1±0.5 m, 24±4%; Eval set, BallSeg+CNN: TP 83±2, MAE 1.6±0.2 px, 1.8±0.2 m, 10±0.7%
- DeepSport, BallSeg+CNN: TP 47±7, MAE 1.6±0.1 px, 2.3±0.2 m, 10±0.9% (detector misses most balls in the wild before regression runs)
- Oracle+CNN eval set: MAE 1.5±0.1 px, 1.7±0.1 m, 10±0.5% — detector is the bottleneck, not the regressor
- Ground-truth 3D positions are produced by fitting the same frictionless-free-fall physics the method claims not to need at inference (annotation circularity; drag/spin baked into "truth")
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- None in the target lanes — single-frame ball-depth CV for basketball. OTHER: nearest GSE-adjacent note is that prolate-spheroid footballs break the spherical-ball geometric assumption (orientation-dependent apparent diameter), and broadcast zoom/pan cameras break the per-image calibration requirement — a reminder that video-derived ball-tracking features for NFL would need an orientation-aware model plus per-frame calibration, not a drop-in.
## Engine-actionable? (yes/no + one-line what)
No — rejected paper; even the best-case 1.8 m error is ~4× the 0.5 m gate for any first-down-line feature, and American-football geometry invalidates the core spherical-ball assumption; file only as reference for a hypothetical future broadcast-video lane.
