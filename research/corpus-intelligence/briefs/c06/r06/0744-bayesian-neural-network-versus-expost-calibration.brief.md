# arxiv-program/research/2026-09-21/arxiv-deep/0744-bayesian-neural-network-versus-expost-calibration.brief.md
## What it is (1-2 sentences)
Borgohain, Ackermann & Loaiza-Maya (2022) horse-race a variational BNN against a standard NN plus ex-post calibration (beta, isotonic, logistic/Platt) on 20 UCI binary tabular datasets — the BNN ranks best on average, but the paper's own statistics show the edge is NOT significant against beta/logistic/uncalibrated, only against isotonic.
## Key metrics/methods (formulas where given, else "not specified")
- BNN: 2 hidden layers × 4 ReLU units, mean-field Gaussian VI, ELBO = E_q[log p(y|w,x)] − KL(q(w)‖p(w)), ADAM.
- Competitors: same-architecture standard NN (uncalibrated) + beta, isotonic, logistic (Platt) calibrators.
- Metric: test log-loss; statistics: average ranks + Friedman test + Wilcoxon signed-rank with Holm correction.
## Data sources named
20 UCI binary-classification datasets (binarized where needed), e.g., Image Segmentation, Landsat Satellite, Mushroom, Spambase, Waveform. 80/20 train/test with validation and calibration subsets from training.
## Findings (numbers and facts, not vibes)
- Average ranks (lower better): BNN 2.0952, beta 2.6667, uncalibrated NN 2.7619, logistic 3.1905, isotonic 4.2857.
- Friedman statistic 23.13, p = 0.000119 (methods differ overall); post-hoc Wilcoxon-Holm: only BNN vs. isotonic is significant — BNN vs. beta, vs. uncalibrated, vs. logistic are NOT.
- Dataset-level log-losses: Image Segmentation BNN 0.012053 vs uncalibrated 0.410117; Landsat BNN 0.065981 vs 0.549391; Mfeat morphological BNN 0.000206 vs 0.325083.
- Honest read per the file: "calibration is usually enough" — the abstract-level claim overstates the statistics.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: exemplar of disciplined negative-result reporting — the abstract claim vs the pairwise statistics is a cautionary pattern for reading vendor/agent performance claims.
- OTHER: uncertainty head for GSE's tabular pick models; untried combination of VI-BNN outputs + post-hoc beta/isotonic calibration (stacking intrinsic uncertainty with empirical recalibration).
## Engine-actionable? (yes/no + one-line what)
yes (as a benchmarked experiment, not a replacement) — Horse-race a VI-BNN win-probability head vs the current NN + Platt/isotonic/beta pipeline on time-ordered 2022–2025 splits; adopt only if BNN beats the best calibrator with paired statistical significance, and test BNN-plus-post-hoc-calibration stacking which the paper never tried.
