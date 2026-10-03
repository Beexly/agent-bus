# docs/arxiv-program/research/2026-09-21/arxiv-deep/0432-adaptive-feature-processing-for-robust-human.md
## What it is (1-2 sentences)
Deep read (arXiv:1901.02858v1) of indoor human activity recognition for autonomous-vehicle scenarios: the LboroHAR multimodal dataset (RGB-D, LiDAR, 360° camera, 16 participants × 9 indoor activities) and the DAEFE preprocessing pipeline, benchmarked across classifiers. Verdict: REJECT for GSE — no transfer path to NFL prediction.

## Key metrics/methods (formulas where given, else "not specified")
- DAEFE: select joints/parameters (coordinates/velocity/acceleration) → torso-relative normalization f_i = |d_i| → posture feature vectors per frame → matrix M + label vector C; 60/20/20 split, 5-fold CV; 22 algorithms pre-screened, top 6 compared; PCA at 95% variance; joint subsets (9/18/28), 3D vs 2D. No loss functions or probabilistic equations stated.

## Data sources named
LboroHAR (LboroLdnHAR), collected 17–18 June 2018 at Loughborough University London; 16 participants; 9 activities (sitting, texting, standing, lying, walking, walking+texting, carrying, pulling, running); 51/50/49 frames per activity for coordinates/velocity/acceleration. No code link or data URL stated.

## Findings (numbers and facts, not vibes)
- Best accuracy: DNN 96.5% (28-joint 3D) / 96.8% headline; cubic SVM 91.6%; fine k-NN 94.4%; bagged trees 92.5% (coordinate features).
- Coordinates dominate: DNN 95.1% on coordinates vs 29.0% velocity / 10.8% acceleration.
- PCA (95% variance) collapses accuracy: results "≪ 75.0%" under realistic conditions per the authors — non-PCA results are overfit to the dataset.
- 3D beats 2D; beyond ~28 joints no gain (curse of dimensionality); running confused with walking, walking with walking+texting/carrying (no object context).
- Authors' own admissions: no leave-one-subject-out evaluation (subject leakage likely); stationary testbed, optimal lighting, standardized T-poses — real-world accuracy far lower; black sweatpants broke RGB-D silhouette recognition.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- None — wrong domain (indoor AV safety), wrong data type (RGB-D/LiDAR pose classification), wrong target (9 indoor activities). No repo work on pose/CV exists and nothing here supplies a prediction mechanism.

## Engine-actionable? (yes/no + one-line what)
No — REJECT: no method, data, or result transfers to NFL game, spread, total, or prop modeling.
