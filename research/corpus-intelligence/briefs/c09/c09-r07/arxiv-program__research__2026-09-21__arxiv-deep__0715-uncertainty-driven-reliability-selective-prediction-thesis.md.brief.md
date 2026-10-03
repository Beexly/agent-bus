# arxiv-program/research/2026-09-21/arxiv-deep/0715-uncertainty-driven-reliability-selective-prediction-thesis.md
## What it is (1-2 sentences)
Deep-read ledger of Rabanser (2025) PhD thesis "Uncertainty-Driven Reliability: Selective Prediction and Trustworthy Deployment in Modern Machine Learning" — four studies on abstention-based reliability: SPTD (free abstention signal from training checkpoints), selective prediction under differential privacy, a finite-sample gap decomposition, and the Mirage adversarial-confidence attack. Verdict: ADAPT SPTD checkpoint-disagreement scoring and the gap-decomposition result for GSE's pick-abstention pipeline.

## Key metrics/methods (formulas where given, else "not specified")
- Selective rule: (f,g)(x) = f(x) if g(x) ≤ τ else ⊥; Coverage = M_τ/M; utility on accepted points.
- SPTD: weighted prediction-instability score from intermediate-checkpoint disagreements with the final prediction, weighting v_t = (t/T)^k, best k ∈ [1,3]; 10 checkpoints suffice for high-coverage regime (reject 30–50%); cost O(1) training, O(T) inference.
- Gap decomposition: Δ̂(c) ≤ ε_Bayes(c) + ε_approx(c) + ε_rank(c) + ε_stat(c) + ε_misc(c) (Eq. 5.1). Key theorem: monotone post-hoc calibration (temperature scaling) cannot reduce the ranking term — only non-monotone or feature-aware calibrators shrink ε_rank.
- MSIS time-series utility (Eq. in §3.8); DP-SGD per-sample clipping + Gaussian noise; Mirage penalty: KL(f(x) ‖ smoothed-target(ε)), ε ∈ [0.1,0.2], targeted region.

## Data sources named
CIFAR-10/100, StanfordCars, Food101 (ResNet-18); California housing, concrete strength, fish toxicity (MLP regression); M4 competition + Hospital (GluonTS DeepAR); synthetic Gaussian mixture, UTKFace, Credit, Adult (Mirage/audit). No sports data; all datasets public.

## Findings (numbers and facts, not vibes)
- CIFAR-10 at coverage 50: SR 98.6±0.2, SAT+ER+SR 99.7±0.1, Deep Ensembles 99.7±0.1, SPTD 99.8±0.0, DE+SPTD 99.9±0.0. At coverage 90: SPTD 96.5 vs DE 96.8 vs SR 96.4. StanfordCars coverage 70: SPTD 93.6 vs DE 92.4 vs SAT+ER+SR 92.2.
- Cost/performance rank: SR=5, SAT=4, DE=2, SPTD=2 (train O(1)), DE+SPTD=1.
- Regression & M4/Hospital: SPTD comparable to DE, improves over DE at low coverage; ODIST "subpar".
- Mirage (Table 6.1): Gaussian accuracy 97.62→97.58 while ECE 0.0327→0.0910; CIFAR-100 accuracy 83.98→83.92 while ECE 0.0662→0.1821 — confidence manipulated with accuracy unchanged, detected by Confidential Guardian when the reference set covers the region.
- DP result: methods needing multiple dataset passes (full ensembles, SelectiveNet calibration) suffer under DP-SGD budget spend; checkpoint-based SPTD most competitive at ε=1.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: abstention/selection signal — seed-disagreement across 10 bagged refits as a proxy for checkpoint instability, fed into the pick-posting gate; if GSE trains an SGD neural model, use real SPTD checkpoints at zero extra training cost.
- OTHER: calibration doctrine — the gap-decomposition theorem says temperature-scaling engine win probabilities cannot improve which picks to post (ε_rank preserved); invest in re-ranking signals (new features), not more calibration. Adopted as doctrine immediately (a mathematical statement about monotone transforms).

## Engine-actionable? (yes/no + one-line what)
Yes — build a seed/bagging disagreement score per engine pick and test at c=0.70 coverage whether instability-selected picks beat confidence-top-70% selection by ≥1.0 pp hit rate (McNemar p<0.10); adopt the monotone-calibration-can't-fix-ranking principle as doctrine now.
