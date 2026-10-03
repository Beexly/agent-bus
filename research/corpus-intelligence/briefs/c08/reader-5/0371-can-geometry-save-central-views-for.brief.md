# docs/arxiv-program/research/2026-09-21/arxiv-deep/0371-can-geometry-save-central-views-for.md
## What it is (1-2 sentences)
Deep read (arXiv:2504.20052v1) of a projective-geometry method that derives 8 exact point correspondences from a single detected circle (pole-polar construction) to rescue sports field registration on "central views" (zoomed-in shots where learned keypoint detectors fail), evaluated on SoccerNet central-view images.

## Key metrics/methods (formulas where given, else "not specified")
- Core equations: l_vanishing = E c (Eq. 4); Case 1: v = l_1 × l_vanishing (Eq. 5), l_2 = v × c (Eq. 6), l_3 = E v (Eq. 7); Case 2: l_1 = x × c (Eq. 8), v = E l_1 (Eq. 9), l_2 = v × c (Eq. 10); Case 3: center c is an eigenvector of E_2^{−1} E_1.
- Metrics: JaC_5 (Jaccard at 5 px), MRE = (1/N) Σ_i ‖H x_i − Ĥ x_i‖_2, CR (completeness rate).
- Synthetic protocol: 100 random cameras, Gaussian noise σ ∈ [0,25] px on ellipse points.

## Data sources named
SoccerNet calibration subsets (8,565 central-view images); a new 300-image OOD set (empty smaller stadiums, no ground truth); synthetic 1080p projections from 100 random camera poses. Detectors front-loaded: PnLCalib, TVCalib (segmentation), Fitzgibbon ellipse fitting.

## Findings (numbers and facts, not vibes)
- Table 1 (SoccerNet central views, full-HD): TVCalib JaC_5 10.2% / MRE 28.8 px / CR 100%; PnLCalib JaC_5 22.4% / MRE 12.8 px / CR 79.5%; PnLCalib* with geometric keypoints JaC_5 22.4% / MRE 12.9 px / CR 79.5% — "no significant change" in-domain.
- OOD (300 images): learned detector shows "significant number of unbounded errors" vs bounded on SoccerNet; geometric method guarantees center-collinear pairs by construction.
- Synthetic: MRE "linearly follows" ellipse noise (σ to 25 px); reprojection error "rises rapidly" with center noise — center estimation is the binding constraint.
- Honest negative result: Case 3 (unknown center) fails on real data — retrieved centers "too noisy to be used"; partial-arc-only views remain unsolved.
- Flagged error in existing tools: Roboflow/FootyVision use ellipse great-axis center as circle center — the paper shows this is wrong (Fig. 3).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — broadcast-frame-to-field registration (video lane only; no prediction signal).

## Engine-actionable? (yes/no + one-line what)
No for the prediction engine — it consumes stats/charting, not broadcast video; bank the pole-polar correspondence trick only if a telestrated-video lane ever revives.
