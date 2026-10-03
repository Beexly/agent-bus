# docs/arxiv-program/research/2026-09-21/arxiv-deep/1076-tvcalib-soccer-camera-calibration.md

## What it is (1-2 sentences)
Replacement deep-read (arXiv:2207.11709v2, Theiner & Ewerth 2022) of TVCalib, a method that reframes soccer broadcast-frame field registration as direct camera calibration: it estimates pinhole-camera parameters (position, pan/tilt/roll, FoV) in one gradient-based optimization from field-segment correspondences instead of keypoint-based homography estimation. Verdict at source: REJECT for GSE — pure computer-vision broadcast-pixels pipeline, domain-disjoint from every GSE lane (GSE consumes tracking as finished product from NGS/nflverse, never raw broadcast frames).

## Key metrics/methods (formulas where given, else "not specified")
- Segment reprojection loss: L = (1/|S|) Σ_{c∈S} d_mean(undistort_ψ(x^(c)), π_φ(s^(c))) (Eq. 2); point–line distance d(p,ŝ_line)=|det((π_φ(X_1)−π_φ(X_0));(π_φ(X_0)−p))|/|π_φ(X_1)−π_φ(X_0)| (Eq. 1).
- Camera model: pinhole P=K·R·[I|−t]; square pixels, zero skew, principal point at image center; R=R_z(roll)R_x(tilt)R_z(pan); intrinsics reduced to FoV; optional radial distortion ψ={k1,k2} (kornia), differentiable undistort enabling joint optimization.
- Optimization: AdamW, lr 0.05, weight decay 0.01, 2000 steps, one-cycle schedule (pct_start=0.5); params standardized (zero mean, 95%-CI-scaled std) from uniform camera-range priors; multiple initializations (center/left/right) with argmin-loss selection; self-verification reject if loss > τ (τ=0.019 tuned on SN-Calib-valid-center over [0.013,0.025]).
- Metrics: AC@t=TP/(TP+FN+FP) for t∈{5,10,20}px; CR=completeness ratio; CS=(1−e^{−4CR})·Σ w·AC@t with w=[0.5,0.35,0.15] (Eq. 3); IoU_part/IoU_whole.
- HDecomp baseline (Appendix B): focal length from homography constraints (Hartley–Zisserman Alg. 8.2), R/t from K⁻¹H columns with SVD orthogonalization, LM refinement (cv2.solvePnPRefineLM), rejecting points with >100px reprojection error.

## Data sources named
SN-Calib (SoccerNetV3-Calibration): 20,028 images from 500 SoccerNet matches; 540p; train 14,513 / valid 2,796 / test 2,719 (no stadium overlap); test camera-type mix Center 53.5%, Left 8.5%, Right 9.5%, Other 28.5%. WC14 (World Cup 2014): 209 train/valid + 186 test images at 720p. DeepLabV3-ResNet101 segmentation (SGD, momentum 0.9, weight decay 1e-4, lr 0.01, 30 epochs, batch 8, ImageNet1k init). Project page https://mm4spa.github.io/tvcalib.

## Findings (numbers and facts, not vibes)
- SN-Calib-test-center, GT segmentation (1,454 images): TVCalib(τ): AC@5 68.7 / AC@10 88.0 / AC@20 96.1, CR 92.8, CS 76.9; TVCalib no-τ: 65.3/84.2/92.6, CR 100.0, CS 75.5; HDecomp+Chen&Little 2019: 53.7/77.5/88.4, CR 80.3, CS 65.1; HDecomp+DLT Lines: 48.1/68.5/84.6, CR 79.8, CS 60.2.
- Predicted segmentation: TVCalib(τ): 57.6/81.7/93.2, CR 93.7, CS 72.6 vs HDecomp+DLT Lines 40.6/63.2/80.4, CR 79.6, CS 55.9 — segmentation quality is the bottleneck (GT→Pred drops AC@5 from 68.7 to 57.6).
- WC14-test, GT seg: TVCalib 64.4/86.7/96.0, CR 100.0, CS 86.4; HDecomp+[6] 52.8/78.8/91.3, CR 90.9, CS 79.0.
- Homography IoU: TVCalib GT IoU_part mean 96.1 / med 97.1; Chen & Little 2019 GT 95.2/97.3; Shi et al. 2022 (as cited) 96.6/97.8.
- Ablations: 3-init argmin beats single center init; argmin slightly beats stacked (known camera type); joint lens-distortion learning improves WC14 GT AC@5 (64.4→68.4) but causes trivial local minima (FoV explosion) on low-FoV SN-Calib samples (CR 92.3→78.3).
- Numerical gate: 68.7 — TVCalib's AC@5 vs 53.7 for best baseline; decisive in-domain, irrelevant to GSE.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] TVCalib decisively beats homography-decomposition baselines on soccer broadcast calibration (AC@5 68.7 vs 53.7) — relevant only if GSE ever builds video analytics (offside detection, virtual stadiums), which is outside Garrett's content lane.
- [OTHER] Segmentation quality is the pipeline bottleneck (AC@5 68.7→57.6 GT→predicted) — INFERENCE: any future GSE computer-vision effort should budget more on the segmentation/front-end than the calibration math.
- [OTHER] Generic optimization hygiene only: loss-threshold self-verification (τ=0.019) and multi-init argmin selection — broadly applicable but not a GSE capability.
- [TRUST-SIGNAL] The authors' stated limitation (no outlier-regularization term; gradient optimization prone to local minima, some GT-annotated samples rejected) is an honest failure-mode disclosure — evidence-grade reporting habit.

## Engine-actionable? (yes/no + one-line what)
No — broadcast-video camera calibration is domain-disjoint from GSE's prediction/fantasy scope; only the multi-init argmin + loss-threshold self-verification pattern is worth noting as generic optimization hygiene.
