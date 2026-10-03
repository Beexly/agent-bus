# docs/arxiv-program/research/2026-09-21/arxiv-deep/0020-prior-information-informed-flying-trajectory-prediction.md
## What it is (1-2 sentences)
A full-paper deep-read of Huang et al. (2026, arXiv:2603.06863), a tennis ball landing-point prediction pipeline using a single industrial camera with Hough-line court-boundary priors fused into a Dual-Transformer-Cascaded (PIDTC) classify-then-regress architecture. The verdict is REJECT: GSE does not predict ball trajectories, and every portable piece is standard CV, not a GSE capability gap.
## Key metrics/methods (formulas where given, else "not specified")
- PIDTC (5.53M parameters): prior extraction (Gaussian filter, Canny, Hough lines to court-corner priors B_prior), then Transformer classify-then-regress cascade: BCE for in/out-of-court classification, MSE for landing-point regression, standard sinusoidal positional encoding, dot-product attention softmax(QK^T/sqrt(d_k))V.
- Hyperparameters (Table II): RTX 3080, Adam, lr 1e-4, batch 10, 4:1 train/test; classification 500 epochs (d_model 64, 1 layer, 2 heads); prediction 1000 epochs (d_model 512).
## Data sources named
Private, author-collected: 350 curated trajectories from >2,000 machine-launched recordings (Jbotsports JW-05 launcher, Basler acA1920-155um at 164 fps, 1280x650 px, clear/calm weather only), 25 pre-bounce 2D points + landing label per sequence; YOLOv10 detection (>98% under lab lighting). No public URL.
## Findings (numbers and facts, not vibes)
- Classification: with priors 85.71% accuracy / 81.40% precision / 94.59% recall; without priors 52.86% accuracy with 100% recall (INFERENCE: predicts nearly everything as one class — effectively fails to converge).
- Prediction ablation: PMC (label-fed) MSE 372.39 vs PMN (no prior) 1183.39 — paper claims 68.53% MSE, 43.90% RMSE, 42.11% bias reduction; PhyBias 17.07 cm vs 29.58 cm.
- Cross-model: PIDTC MSE 372.39 beats RNN 1064.99, LSTM 866.72, vanilla Transformer 1170.42, GRU 3417.77 — though baselines get no priors, so the comparison confounds architecture with information.
- Training-set sweep (20/40/60/80% of 350): MSE 499.41/547.52/542.15/372.39 — noisy non-monotonicity at tiny N; no confidence intervals reported.
- Limitations flagged in the file: machine-launched, no players, no spin/racket variation, no wind; priors fit to one camera setup; baselines possibly under-tuned; zero NFL transfer.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: the only portable pattern is classify-then-regress (coarse in/out gate feeding precise regression), which is generic ML, not a GSE gap; geometric field priors via Hough lines would only matter if GSE ever built a broadcast ball-tracking lane (none exists).
## Engine-actionable? (yes/no + one-line what)
No — tennis landing-point prediction with a fixed industrial camera has no path into the picks/props/fantasy/calibration product surface.
