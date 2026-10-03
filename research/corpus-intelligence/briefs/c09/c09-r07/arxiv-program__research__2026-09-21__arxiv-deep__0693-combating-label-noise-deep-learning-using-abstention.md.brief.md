# arxiv-program/research/2026-09-21/arxiv-deep/0693-combating-label-noise-deep-learning-using-abstention.md
## What it is (1-2 sentences)
Deep-read ledger of Thulasidasan et al. (2019) "Combating Label Noise in Deep Learning Using Abstention" — a deep classifier with an extra abstention output (Deep Abstaining Classifier, DAC) that is robust to label noise during training and doubles as a data cleaner identifying noisy samples. Verdict: ADAPT the abstention-head loss as a data cleaner for GSE's noisy derived training labels (e.g., corrupted "closing-line edge" labels in anomalous games).

## Key metrics/methods (formulas where given, else "not specified")
- DAC loss (Eq. 1): ℒ(x_j) = (1−p_{k+1})(−Σ_i t_i log(p_i/(1−p_{k+1}))) + α·log(1/(1−p_{k+1})) — first term is CE over real classes with abstention mass normalized out; second term is the abstention penalty.
- Abstention gradient (Eq. 2): ∂ℒ/∂a_{k+1} = p_{k+1}[(1−p_{k+1})(log(1/(1−p_{k+1})) − g) + α]; abstention mass grows iff α < (1−p_{k+1})(−log(p_j/(1−p_{k+1}))), j = true class.
- Lemma 1: ∂ℒ/∂a_j ≤ 0 for the true-class pre-activation — learning on true classes persists even while abstaining.
- Lemma 2: with fixed α, abstention rate γ→0 or γ→1 as t→∞ — α must be auto-tuned; LR-decay phases trigger memorization collapse of abstention (observed at epochs 60/120).
- α auto-tuning (Algorithm 1): L abstention-free warmup epochs, moving-average threshold β̃, set α = β̃/ρ (ρ=64, μ=0.05, untuned), linearly ramp to α_final.
- Data-cleaning protocol: train DAC, find best-validation-epoch non-abstaining portion, eliminate persistently-erroring samples, retrain regular DNN on cleaner set. Code: https://github.com/thulas/dac-label-noise.

## Data sources named
STL-10 (5,000 train / 8,000 test), CIFAR-10 / CIFAR-100 / Fashion-MNIST with uniform label corruption at {0.2, 0.4, 0.6, 0.8}; synthetic structured noise (10% label-randomized + smudge; monkey-class full randomization). Baselines: standard baseline, generalized cross-entropy ℒ_q, truncated ℒ_q, Forward/Forward-T̂, MentorNet, oracle cleaner. No sports data.

## Findings (numbers and facts, not vibes)
- CIFAR-10 ResNet-34 test accuracy at noise 0.2/0.4/0.6/0.8: Baseline 88.94/85.35/79.74/67.17; DAC 92.91/90.71/86.30/74.84 (fraction removed / remaining noise: 0.24/0.01, 0.41/0.03, 0.56/0.07, 0.75/0.16); Oracle 92.56/90.95/88.92/86.43 — DAC beats the oracle at 0.2 noise.
- CIFAR-10 WRN28x10: DAC 93.35/90.93/87.58/70.8 vs MentorNet 92.0/89.0/−/49.0. CIFAR-100 ResNet-34: DAC 73.55/66.92/57.17/32.16 vs baseline 69.15/62.94/55.39/29.5. Fashion-MNIST ResNet-18: DAC 94.76/94.09/92.97/90.79 vs baseline 93.91/93.09/91.83/88.61.
- Structured noise: DAC abstains with high precision/recall on smudged label-randomized images; abstains on ~80% of monkey-class images; threshold-on-softmax produces confident-but-wrong predictions (many p≥0.9 on monkeys).
- Caveat: DAC removes up to 75% of training data at 0.8 noise — dangerous for small sports samples.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: training-data hygiene — the abstention head becomes an interpretable "unreliable game" detector if abstained games concentrate on identifiable anomalies (backup-QB starts, extreme weather, international games).
- OTHER: combines with ledger 0692's SelectiveNet coverage constraint — training-time cleaning (DAC) + inference-time selection (SelectiveNet) were never jointly tested in the literature; a composition test is the improvement experiment.

## Engine-actionable? (yes/no + one-line what)
Yes — train a DAC-style variant of GSE's pick/outcome model with a k+1 abstention head on a derived noisy target (e.g., opening-line cover indicator corrupted by line movement), remove abstained games, retrain; adopt if test Brier improves ≥0.003 with abstained fraction ≤25%.
