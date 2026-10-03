# docs/arxiv-program/research/2026-09-21/arxiv-deep/1012-two-stage-score-based-abstention.md
## What it is (1-2 sentences)
Deep read of arXiv:2310.14770 (Mao, Mohri, Zhong 2023) on theoretically grounded surrogate losses for score-based multi-class abstention, comparing single-stage (joint predictor+rejector) vs two-stage (frozen predictor, learned rejector) formulations with H-consistency guarantees.
## Key metrics/methods (formulas where given, else "not specified")
- Abstention loss L_abs with abstention cost c; single-stage surrogate family L_μ (generalized cross-entropy, parameter μ; SOTA special cases μ=1.0 Mozannar & Sontag 2020, μ=1.7 Cao et al. 2022).
- Two-stage surrogates: stage 1 logistic loss on predictor h; stage 2 exponential loss Φ(t)=exp(−t) on rejector r with h frozen.
- H-consistency bound: excess abstention risk ≤ Γ(excess surrogate risk) for concave Γ (hypothesis-set-specific, non-asymptotic); two-stage enjoys both realizable H-consistency and Bayes-consistency, which single-stage cross-entropy surrogates lack in general.
- Datasets: CIFAR-10 (ResNet-34, c=0.05), CIFAR-100 (WRN-28-10, c=0.15), SVHN (ResNet-34, c=0.03); SGD+Nesterov, batch 1024, weight decay 1e-4, 200 epochs, cosine LR from 0.1; abstention loss mean±SD over 3 trials.
## Data sources named
CIFAR-10, CIFAR-100, SVHN (public image datasets; no sports data).
## Findings (numbers and facts, not vibes)
- Abstention loss (Table 1, exact): CIFAR-10: CE μ=1.0 → 4.48%±0.10%; CE μ=1.7 → 3.62%±0.07%; two-stage → 3.22%±0.04%. CIFAR-100: μ=1.0 → 10.40%±0.10%; μ=1.7 → 14.99%±0.01%; two-stage → 9.54%±0.07%. SVHN: μ=1.0 → 1.61%±0.06%; μ=1.7 → 2.16%±0.04%; two-stage → 0.93%±0.02%. Two-stage wins on all three datasets.
- The μ=1.0 vs μ=1.7 ranking FLIPS between CIFAR-10 (μ=1.7 better) and CIFAR-100/SVHN (μ=1.0 better) — single-stage surrogate choice is dataset-dependent, an argument for the two-stage approach.
- The paper explicitly casts defer-to-human as a special case of abstention.
- Limitations: c is hand-set near the Bayes error with no selection rule; only 3 trials; theory is for 0/1+abstention loss, not profit/ROI.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Two-stage = freeze the engine, learn the no-bet rejector on top — the deployment architecture for a GSE no-bet layer without retraining the engine (OTHER)
- Abstained games = deferred to human review (Garrett) as a formal special case (OTHER)
- Confidence-threshold rejectors are the "typically worse" baseline the learned two-stage rejector beats (OTHER)
- Rejector inputs can subsume existing engine confidence/uncertainty scores as features (OTHER)
## Engine-actionable? (yes/no + one-line what)
yes — Build a two-stage no-bet head on the frozen engine: stage 2 rejector (GBM/small MLP) trained on historical engine outputs + game features with labels = engine pick wrong/unprofitable, exponential loss Φ(t)=exp(−t), abstention cost c tuned to target no-bet rate; numeric gate: ≥15% relative abstention-loss reduction vs confidence-threshold baseline (paired p<0.05) AND higher profit, 2020–2023 train / 2024 test.
