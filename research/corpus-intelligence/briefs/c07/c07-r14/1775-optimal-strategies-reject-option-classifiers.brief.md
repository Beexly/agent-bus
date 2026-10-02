# arxiv-program/research/2026-09-21/arxiv-deep/1775-optimal-strategies-reject-option-classifiers.md
## What it is (1-2 sentences)
A ledger on arXiv:2101.12523: unifies three reject-option formulations (cost-based, bounded-improvement, bounded-coverage) under one Bayes classifier with differing selection rules, and proposes two Fisher-consistent learned uncertainty scores (REG loss regression, SELE pairwise ranking loss) for black-box predictors, validated on 11 classification datasets, ordinal regression, and structured output.
## Key metrics/methods (formulas where given, else "not specified")
- REG objective: F_REG(θ) = (C/2)‖θ‖² + (1/n) Σᵢ (ℓ(yᵢ, h(xᵢ)) − s_θ(xᵢ))², s_θ(x) = ⟨θ, ψ(x)⟩ (ridge regression on realized loss).
- SELE objective: F_SELE(θ) = (C/2)‖θ‖² + (1/P) Σ_p ψ_sele(s, T_n^p), chunked P = round(n/500) to avoid O(n²) pairwise cost.
- Relative improvement: 100 × (AuRC_baseline − AuRC_method) / AuRC_baseline.
- Core theory: three reject models share the same Bayes classifier; bounded-coverage requires a *randomized* Bayes selection rule; AuRC (area under risk–coverage curve) equals expected quality of the bounded-coverage model under uniform random target coverage.
- Regularization C ∈ {0, 1, 10, 100, 1000} selected by validation AuRC.
## Data sources named
11 UCI-style classification datasets (named: PHISHING, SATTELITE, SENSORLESS, SHUTTLE); 11 ordinal-regression datasets (CALIFORNIA, ABALONE, BANK, CPU, BIKESHARE, CCPP, FACEBOOK, GPU, METRO, MSD, SUPERCONDUCT); DLIB face detector/landmark task (n = 3,484 train, m = 2,448 parameters); 5 random train/test splits each.
## Findings (numbers and facts, not vibes)
- Classification on SVM (AuRC % misclassification, average ranks): REG 1.09, SELE 2.09, baseline 2.82. PHISHING: REG 0.72±0.12 vs baseline 6.37±0.44; SATTELITE 3.82±0.27 vs 15.36±0.37; SENSORLESS 1.56±0.08 vs 6.92±0.17; SHUTTLE 0.24±0.07 vs 2.02±0.15.
- Ordinal regression on SVOR (MAE AuRC, average ranks): SELE 1.27, REG 1.73, Margin 3.00; Friedman rejects equivalence p=0.05, Nemenyi significant at p=0.10 (CD=0.98). MSD: SELE 4.26±0.03 vs Margin 6.23±0.07; GPU 0.85±0.03 vs 1.43±0.02; FACEBOOK 0.37±0.01 vs 0.51±0.01.
- Structured output: both learned scores beat the detector's own score; SELE slightly beats REG; gap largest at low coverage.
- Learned scores help most where the predictor's native score is poor; linear scores only (hand-designed ψ per predictor).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Learned pick-gate score trained on realized pick loss beats probability-threshold gating — foundation for GSE's pick gating (TRUST-SIGNAL)
- AuRC as expected performance across all coverage operating points; operating coverage (card size) must be checked explicitly, AuRC alone can mislead (TRUST-SIGNAL)
- Randomized tie-breaking at the selection threshold as the Bayes-optimal rule (OTHER — decision theory)
## Engine-actionable? (yes/no + one-line what)
yes — Build GSE-SELE: freeze pick model, ridge-regress realized pick loss (units) on pick features for a learned gate score, require ≥10% relative AuRC gain at the actual posted-card coverage before shipping.
