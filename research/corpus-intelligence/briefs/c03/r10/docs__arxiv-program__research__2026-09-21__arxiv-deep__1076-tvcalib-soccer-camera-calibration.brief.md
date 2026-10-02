# docs/arxiv-program/research/2026-09-21/arxiv-deep/1076-tvcalib-soccer-camera-calibration.md
## What it is (1-2 sentences)
A deep-read ledger entry for arXiv:2207.11709 (Theiner & Ewerth 2022, "TVCalib"): computer-vision camera calibration for broadcast soccer field registration. Verdict: REJECT — domain-disjoint from GSE (GSE consumes tracking as finished product, never raw broadcast pixels).
## Key metrics/methods (formulas where given, else "not specified")
- Segment reprojection loss (Eq. 2): L = (1/|S|) Σ_c d_mean(undistort_ψ(x^(c)), π_φ(s^(c))) — mean point↔line / point↔point-cloud distance per segment, NDC-normalized.
- Point-line distance (Eq. 1): d(p,ŝ_line) = |det((π_φ(X_1)−π_φ(X_0));(π_φ(X_0)−p))| / |π_φ(X_1)−π_φ(X_0)|.
- Composite score CS = (1−e^{−4CR})·Σ_t w·AC@t, w=[0.5,0.35,0.15], t∈{5,10,20}px; AC@t=TP/(TP+FN+FP).
- Optimizer: AdamW lr 0.05, weight decay 0.01, 2000 steps, one-cycle; multi-init argmin over camera types; self-verification reject at loss > τ=0.019 (tuned on SN-Calib-valid-center).
- Pinhole model P=K·R·[I|−t], square pixels, zero skew, centered principal point; params φ=(FoV,t,pan,tilt,roll), optional radial distortion ψ={k1,k2}.
## Data sources named
SN-Calib (SoccerNetV3-Calibration): 20,028 images from 500 SoccerNet matches, 540p; train 14,513 / valid 2,796 / test 2,719. WC14 (World Cup 2014): 209 train/valid + 186 test images, 720p. DeepLabV3-ResNet101 instance segmentation trained on SN-Calib-train.
## Findings (numbers and facts, not vibes)
- SN-Calib-test-center GT segmentation: TVCalib(τ) AC@5/10/20 = 68.7/88.0/96.1, CR 92.8, CS 76.9 — best vs HDecomp baselines (53.7/77.5/88.4, CS 65.1).
- Predicted segmentation (the bottleneck): TVCalib(τ) AC@5 drops 68.7→57.6, CS 72.6; HDecomp+DLT Lines 40.6/63.2/80.4, CS 55.9.
- WC14-test GT: TVCalib 64.4/86.7/96.0, CR 100.0, CS 86.4; homography IoU_part mean 96.1 (Chen & Little 2019: 95.2/97.3 — SOTA-adjacent).
- Lens-distortion joint learning improves WC14 AC@5 64.4→68.4 but causes trivial FoV-explosion local minima on low-FoV SN-Calib samples (CR 92.3→78.3).
- Only transferable tricks noted: loss-threshold self-verification, multi-init argmin — generic optimization hygiene.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Self-verification τ and multi-init argmin as loss-hygiene tricks: OTHER (general optimization).
- Segmentation quality is the bottleneck, not the calibration optimizer: TRUST-SIGNAL (a CV-model-reliability observation, no sports-betting use).
## Engine-actionable? (yes/no + one-line what)
No — REJECT verdict; domain-disjoint from every GSE lane; nothing transfers to probability calibration, ratings, markets, or sizing.
