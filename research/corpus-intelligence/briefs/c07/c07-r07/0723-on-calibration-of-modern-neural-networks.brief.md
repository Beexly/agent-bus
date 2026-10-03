# arxiv-program/research/2026-09-21/arxiv-deep/0723-on-calibration-of-modern-neural-networks.md
## What it is (1-2 sentences)
The canonical calibration paper diagnosing why modern neural networks are poorly calibrated (depth, width, BatchNorm, NLL-overfitting during training) and comparing post-processing fixes, establishing single-scalar temperature scaling as the preferred recipe (Guo, Pleiss, Sun, Weinberger, 2017, arXiv:1706.04599v2). Ledger verdict: ADAPT — directly disciplines GSE's model-probability outputs (pick confidence, Kelly sizing, abstention gates): calibrate every probability the engine emits, because accuracy-optimized models are systematically overconfident.
## Key metrics/methods (formulas where given, else "not specified")
- Perfect calibration: P(Ŷ=Y | P̂=p) = p ∀ p∈[0,1].
- ECE = Σ_m (|B_m|/n) |acc(B_m) − conf(B_m)|; MCE = max_m |acc−conf|; NLL = −Σ_i log π̂(y_i|x_i).
- Temperature scaling: q̂_i = max_k σ_SM(z_i/T)^(k); T chosen to minimize validation NLL; T does not change argmax → accuracy unchanged.
- Entropy-maximization derivation: temperature scaling is the unique max-entropy distribution subject to E[true-class logit] = E[weighted logit] (Claim 1, §S2).
- Compared methods: histogram binning, isotonic regression, BBQ (Bayesian binning into quantiles), Platt variants (matrix scaling, vector scaling), temperature scaling.
- Assumptions: train/validation/test from the same distribution; calibration post-hoc on held-out validation.
## Data sources named
Vision: Caltech-UCSD Birds (200 classes), Stanford Cars (196), ImageNet 2012 (1.3M/25k/25k), CIFAR-10/100 (45k/5k/10k), SVHN. NLP: 20 News (20 cats), Reuters (8), SST binary + 5-class fine-grained (TreeLSTM). Models: ResNet, ResNet-SD, Wide ResNet, DenseNet, LeNet, DAN-3, TreeLSTM. Implementation: http://github.com/gpleiss/temperature_scaling. Temperature scaling is already inventoried in the repo (competitor-scrape-2026-09-12.md; master calibration list); this is the first full treatment of the recipe.
## Findings (numbers and facts, not vibes)
- ECE %, M=15, before → after temperature scaling: CIFAR-100 ResNet-110: 16.53% → 1.26% (histogram binning 2.66%, isotonic 4.99%, BBQ 5.46%, vector 1.32%, matrix 25.49%). CIFAR-10 ResNet-110: 4.60% → 0.83%; DenseNet-40: 3.28% → 0.33%. ImageNet ResNet-152: 5.48% → 1.86%; DenseNet-161: 6.28% → 1.99%. Birds ResNet-50: 9.19% → 1.85%. Cars: 4.30% → 2.35%. 20 News DAN-3: 8.02% → 4.11%. SVHN: 0.44% → 0.17%. Reuters: 0.85% → 0.91% — already calibrated; post-processing unnecessary.
- Matrix scaling fails on 1000-class ImageNet (doesn't converge; quadratic parameter blowup).
- Vector scaling's learned vector is nearly constant → miscalibration is intrinsically low-dimensional.
- Binning methods change class predictions and hurt accuracy.
- Temperature scaling = 1-D convex optimization, ~10 conjugate-gradient iterations, fraction of a second; BBQ ~3 orders of magnitude slower.
- ECE grows with depth and width; BatchNorm increases miscalibration even as accuracy improves; more weight decay monotonically improves calibration well past the accuracy optimum.
- NLL-vs-accuracy disconnect: on CIFAR-100, test error drops 29%→27% while NLL overfits — explains why good pick accuracy can coexist with terrible Kelly sizing.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Temperature scaling on a held-out time-ordered calibration set for every engine probability (picks, Kelly fractions, abstention gates): TRUST-SIGNAL
- NLL-vs-accuracy disconnect as diagnosis for pick-accuracy/Kelly-sizing divergence: TRUST-SIGNAL
- Online/rolling temperature re-fitting as regime-shift detector: OTHER
- Class-conditional (vector) scaling for asymmetric miscalibration (home underdogs vs road favorites): OTHER
## Engine-actionable? (yes/no + one-line what)
Yes — reserve a held-out time-ordered calibration set per model, fit temperature T on validation NLL, apply q̂ = softmax(z/T) before any confidence display or Kelly sizing, track ECE weekly and re-fit T on a rolling window (1–2 days effort; REJECT only if GSE's ECE is already <1% Reuters-like).
