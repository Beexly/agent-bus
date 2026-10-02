# docs/arxiv-program/research/2026-09-21/arxiv-deep/0697-towards-better-selective-classification.md

## What it is (1-2 sentences)
Ledger of arXiv:2206.09034v4 (Feng et al. 2022), "Towards Better Selective Classification" — asks whether SOTA selective classifiers (SelectiveNet, Deep Gamblers, Self-Adaptive Training) win via their external selection heads or via a better classifier, and tests a cheaper recipe: discard the selection head, select by Softmax Response (max class probability), and add an entropy-minimization regularizer. Ledger verdict: ADAPT — directly sharpens ledger 0692's SelectiveNet adaptation for GSE's publish gate.

## Key metrics/methods (formulas where given, else "not specified")
- Selective risk: min_θ,ψ E[l(f_θ(x),y)·g_ψ(x)] s.t. E[g_ψ(x)] ≥ c_target (Eq. 1).
- SelectiveNet loss: ℒ = α(ℒ_selective + λℒ_c) + (1−α)ℒ_aux (Eq. 3); ℒ_selective = (Σℓ·ḡ)/(Σḡ).
- SAT loss: ℒ = −(1/m)Σ[t_{i,y_i} log p_θ(y_i|x_i) + (1−t_{i,y_i}) log p_θ(C+1|x_i)] (Eq. 6); SAT moving target t_i ← α·t_i + (1−α)·p_θ(·|x_i) with a (C+1)th abstain logit.
- Entropy regularizer: ℒ_new = ℒ + β·H(p_θ(·|x)), β=0.01 (Eq. 7).
- Recipe: (1) train any selective classifier; (2) discard its selection mechanism; (3) rank samples by Softmax Response ḡ(x) = max_u p_θ(u|x_i) (or −H); (4) calibrate τ on validation for target coverage.

## Data sources named
ImageNet100, ImageNet, ImageNetSubset (25–175 classes), StanfordCars, Food101, CIFAR-10. ResNet34/VGG16, 3–5 seeds. No sports data. Code: https://github.com/BorealisAI/towards-better-sel-cls (builds on official SAT and Deep Gamblers implementations).

## Findings (numbers and facts, not vibes)
- ImageNet100 selective error, 80% coverage: SN 6.00→SN+SR 4.47; DG 5.21→DG+SR 4.52; SAT 5.20→SAT+SR 4.46. 50% coverage: SN 1.05→0.85; SAT 1.18→0.88.
- SAT+EM+SR: StanfordCars 70% coverage 21.34→15.84 (~26% relative); Food101 70% 4.89→3.52 (~28% relative); ImageNet100 60% 1.72→0.95; ImageNetSubset up to 85% relative improvement over vanilla SAT.
- ImageNet (SAT): 90% coverage 22.67→21.57; 70% 13.88→12.34 with EM+SR.
- Key negative result: SelectiveNet's own selection head catastrophically fails at low coverage (99.00% error at 10% coverage) — evidence the external head is the failure mode.
- Fairness caveat (Jones et al. 2021): lowering coverage can magnify recall disparities across groups — relevant if GSE's publish filter systematically withholds certain game types (e.g., divisional, bad-weather games).

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- External selection heads are suboptimal — Softmax Response selection beats them at zero cost → drop learned selection heads from the publish gate: TRUST-SIGNAL
- Entropy regularization (β=0.01) yields up to 85% relative error reduction → add CE + β·H(p) loss term to GSE's cover classifier: TRUST-SIGNAL
- Coverage-based filtering can systematically exclude certain game types — monitor subgroup coverage: TRUST-SIGNAL
- Calibration assumes no distribution shift; NFL seasons shift: OTHER

## Engine-actionable? (yes/no + one-line what)
Yes — train GSE's cover classifier with ℒ = CE + 0.01·H(p) (tune β), rank weekly games by max softmax probability, publish the top-c_target fraction with the threshold calibrated on the prior season; adopt iff it beats the vanilla+SR and learned-head baselines by ≥1pp covered-set ROI at 30% coverage on 2025 held-out (nflverse 2010–2025, train ≤2023, validate 2024).
