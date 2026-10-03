# arxiv-program/research/2026-09-21/arxiv-deep/0699-calibrating-bayesian-learning-regularization-confidence-minimization.md
## What it is (1-2 sentences)
Deep ledger on Huang, Park & Simeone (2024), "Calibrating Bayesian Learning via Regularization, Confidence Minimization, and Selective Inference" (arXiv:2404.11350v3): a three-stage pipeline (MMCE calibration regularization → OOD confidence minimization → selective calibration selector) that trades coverage for accuracy + calibration + OOD detection. Verdict: ADAPT — the selective-calibration selector is a calibration-specific abstention rule complementing the accuracy-oriented abstention of ledgers 0692–0698.

## Key metrics/methods (formulas where given, else "not specified")
- MMCE regularizer: E(θ|D^tr) = (Σ_iΣ_j (c_i−r_i)(c_j−r_j)κ(r_i,r_j)/|D^tr|²)^{1/2} (Eq. 8).
- Free energy: F(q|D^tr) = E_{θ∼q}[L(θ|D^tr)] + β·KL(q||p) (Eq. 11).
- CBNN: φ^CBNN = argmin_{q(θ|φ)} {F(q|D^tr) + λ·E(q|D^tr)} (Eq. 17).
- OCM: C(θ|D^u) = −Σ_iΣ_y log p(y|x^u[i],θ) (Eq. 22); CBNN-OCM adds γ·C(q|D^u) (Eq. 25).
- Selective MMCE (Eq. 30) with selector weights g(x_i^val|φ)g(x_j^val|φ); relaxed with continuous g̃(r,s|φ) and −η·Σ log g̃ coverage barrier (Eq. 33); inference via threshold τ (Eqs. 36–41).
- OOD detection probability: p_d^OOD = ½(1+TV), TV = ½∫|p^ID(r)−p^OOD(r)|dr (Eqs. 19–20).
- Selector inputs: averaged confidence r̄(x) + outlier-score vector s̄(x) (KDE, isolation forest, 1-class SVM, kNN distance on last-layer features); 3-layer 64-dim net.
- Calibration measured via ECE with M=15 bins; Gaussian VI with diagonal covariance on WideResNet-40-2.

## Data sources named
- CIFAR-100 (ID), TinyImageNet-resized (OOD uncertainty set). No sports data.
- Code: https://github.com/kclip/Calibrating-Bayesian-Learning.

## Findings (numbers and facts, not vibes)
- Calibration regularization cut ECE >20% (frequentist) and 50% (Bayesian) on CIFAR-100.
- OCM at γ=0.5 "drastically improves" OOD detection for FNN and BNN; calibration regularization alone does not help OOD detection.
- Trade-off confirmed: calibration regularization improves ID ECE at the cost of ID accuracy for a fixed OOD detection level.
- SCBNN-OCM vs standard FNN at ~50% ID coverage: +25% accuracy, −20% ECE, +50% OOD detection probability; beats SBNN-OCM on all three metrics for coverage <50%.
- Headline numbers require ~50% rejection (heavy coverage cost); OOD task (TinyImageNet vs CIFAR-100) is an easy distributional gap — GSE's OOD analogues (playoff games, COVID seasons) are much closer to ID.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Selective-calibration selector as a publish/withhold gate for GSE picks on calibration grounds: TRUST-SIGNAL.
- Improvement experiment: if the selector's rejections correlate with known hard-game indicators (backup QB, extreme weather, large line moves), it becomes a learned game-difficulty model: QB-BEHAVIOR / OTHER.
- MMCE regularizer as a drop-in calibration term on the classification head loss: OTHER (calibration lane).

## Engine-actionable? (yes/no + one-line what)
Yes — add an MMCE-style calibration regularizer to the classification head (cheap, no architecture change) and prototype the selective-calibration selector (confidence + outlier scores vs historical game embeddings) with a coverage target ξ=0.5; acceptance gate: selected-set ECE down ≥20% vs baseline with accuracy within 1pp.
