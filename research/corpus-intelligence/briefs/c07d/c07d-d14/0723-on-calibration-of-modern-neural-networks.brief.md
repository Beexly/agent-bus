# arxiv-deep/0723-on-calibration-of-modern-neural-networks.md
## What it is (1-2 sentences)
Read-and-ledger of Guo, Pleiss, Sun & Weinberger (2017), "On Calibration of Modern Neural Networks" (arXiv:1706.04599v2): the canonical calibration paper — diagnoses why modern NNs are systematically overconfident (depth, width, BatchNorm, NLL-overfitting) and compares post-hoc calibrators, crowning **temperature scaling** (a single scalar T on logits) as the fast, accuracy-preserving fix. Verdict: ADAPT — the foundational recipe for GSE's calibration lane.

## Key metrics/methods (formulas where given, else "not specified")
- Perfect calibration: `P(Ŷ=Y | P̂=p) = p ∀ p∈[0,1]` (1).
- ECE: `ECE = Σ_m (|B_m|/n) |acc(B_m) − conf(B_m)|` (3); MCE: `MCE = max_m |acc−conf|` (5); NLL: `NLL = −Σ_i log π̂(y_i|x_i)` (6). Table 1 uses M=15 bins.
- Temperature scaling (9): `q̂_i = max_k σ_SM(z_i/T)^(k)`; T chosen to minimize validation NLL. T does not change argmax → **accuracy unchanged**.
- Entropy-maximization derivation: temperature scaling is the unique max-entropy distribution subject to E[true-class logit] = E[weighted logit] (Claim 1, §S2).
- Comparators: histogram binning, isotonic regression, BBQ (Bayesian binning into quantiles), Platt variants (matrix scaling, vector scaling).
- Assumptions: train/validation/test from same distribution; calibration done post-hoc on held-out validation.

## Data sources named
- Vision: Caltech-UCSD Birds (200 classes), Stanford Cars (196), ImageNet 2012 (1.3M/25k/25k), CIFAR-10/100 (45k/5k/10k), SVHN. NLP: 20 News (20 categories), Reuters (8), SST binary + 5-class fine-grained (TreeLSTM). Models: ResNet, ResNet-SD, Wide ResNet, DenseNet, LeNet, DAN-3, TreeLSTM. Standard train/validation/test splits; validation used for calibration fitting.
- Reference implementation: http://github.com/gpleiss/temperature_scaling.

## Findings (numbers and facts, not vibes)
Table 1 quoted exactly (ECE %, M=15):
- CIFAR-100 ResNet-110: 16.53% → temp scaling 1.26%; histogram binning 2.66%; isotonic 4.99%; BBQ 5.46%; vector 1.32%; matrix 25.49%.
- CIFAR-10 ResNet-110: 4.60% → temp 0.83%. DenseNet-40: 3.28% → 0.33%.
- ImageNet ResNet-152: 5.48% → 1.86%. DenseNet-161: 6.28% → 1.99%.
- Birds ResNet-50: 9.19% → 1.85%. Cars: 4.30% → 2.35%.
- 20 News DAN-3: 8.02% → 4.11%. SVHN: 0.44% → 0.17% (already near-calibrated).
- Reuters: 0.85% → 0.91% — already calibrated; post-processing unnecessary.
- Miscalibration drivers: ECE grows with depth and width; BatchNorm increases miscalibration even as accuracy improves; more weight decay monotonically improves calibration well past the accuracy optimum; NLL overfits during training (CIFAR-100: test error drops 29%→27% while NLL overfits).
- Matrix scaling fails on 1000-class ImageNet (doesn't converge; quadratic parameter blowup). Vector scaling's learned vector is nearly constant → miscalibration is intrinsically low-dimensional.
- Binning methods change class predictions and hurt accuracy (§S3 Table S2).
- Temperature scaling = 1-D convex optimization, ~10 conjugate-gradient iterations, fraction of a second; BBQ ~3 orders of magnitude slower.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **CALIBRATION/SIZING (OTHER):** This is the recipe at the heart of Garrett's "most accurate and calibrated" goal. Every probability GSE emits (pick win-probabilities, Kelly fractions, confidence scores in abstention gates 0714–0720) must pass through temperature scaling fit on a held-out validation set — accuracy-invariant, so the pick never changes, only its price. The NLL-vs-accuracy disconnect (test error 29%→27% while NLL overfits) explains why a model with good pick accuracy can still produce terrible Kelly sizing — directly relevant to the calibration/sizing program. Concrete GSE protocol per ledger: reserve a time-ordered held-out calibration set of recent games, fit T on validation NLL, track ECE (M=15) weekly per market, re-fit T on a rolling window to handle distribution shift (team composition changes); never use binning calibrators (they change predictions/accuracy).
- **TRUST-SIGNAL (OTHER):** Calibrated probabilities are the precondition of any trust surface; the paper's acceptance-gate discipline (ADOPT if calibrated probabilities improve realized Kelly-growth; REJECT if already calibrated like Reuters at ECE <1% — measure ECE first) is the honest sequencing for the trust-target intake.
- **OTHER (extension ideas):** The ledger's improvement experiments propose class-conditional (vector) scaling on asymmetric markets (home underdogs vs road favorites) — testing whether GSE's market-specific data breaks the paper's low-dimensionality finding — and online weekly temperature re-fitting as an explicit regime-shift detector (ties to the 0745 covariate-shift lane).
- UNCERTAIN: whether GSE's probabilities are miscalibrated at all — the Reuters case (0.85%→0.91%) warns to measure first; post-hoc calibration assumes validation/test come from the same distribution and breaks under shift (injuries, trades, weather), which is the 0745 lane's problem.

## Engine-actionable? (yes/no + one-line what)
**Yes** — measure ECE (M=15) on GSE's emitted probabilities; if >1%, fit temperature scaling on a held-out recent window and apply before all Kelly sizing and abstention gates; re-fit weekly. 1–2 days; reference implementation exists.

Referenced files/papers/datasets: CIFAR-10/100, ImageNet 2012, Caltech-UCSD Birds, Stanford Cars, SVHN, 20 News, Reuters, SST; ResNet/ResNet-SD/Wide ResNet/DenseNet/LeNet/DAN-3/TreeLSTM; gpleiss/temperature_scaling; corpus cross-refs: calibration master list (competitor-scrape-2026-09-12.md; Platt/isotonic, grouping loss, CQR, LRD), ledger 0724 (probability calibration trees), ledgers 0714–0720 (abstention), ledger 0691 (empirical-rate teacher).
