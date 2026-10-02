# docs/arxiv-program/research/2026-09-21/arxiv-deep/0697-towards-better-selective-classification.md

## What it is (1-2 sentences)
Research-ledger read of arXiv:2206.09034v4 (Feng et al., 2022): shows that SOTA selective-classification performance comes from training a more generalizable classifier, not from external selection heads/abstain logits — discarding the selection mechanism and ranking by Softmax Response (max class probability) wins, and an entropy-minimization regularizer (β=0.01) yields up to 85% relative error reduction. Verdict in file: ADAPT — the recipe is immediately actionable for GSE's publish gate (which games to publish vs withhold).

## Key metrics/methods (formulas where given, else "not specified")
- Recipe: (1) train any selective classifier; (2) discard its selection mechanism (selection head / abstain logit); (3) rank samples by Softmax Response ḡ(x) = max_u p_θ(u|x_i) (or −H); (4) calibrate threshold τ on validation for target coverage.
- Entropy-regularized loss: ℒ_new = ℒ + β·H(p_θ(·|x)), β=0.01 (Eq. 7).
- Selective risk: min_θ,ψ E[l(f_θ(x),y)·g_ψ(x)] s.t. E[g_ψ(x)] ≥ c_target (Eq. 1).
- SelectiveNet loss: ℒ = α(ℒ_selective + λℒ_c) + (1−α)ℒ_aux (Eq. 3); ℒ_selective = (Σℓ·ḡ)/(Σḡ).
- SAT loss: ℒ = −(1/m)Σ[t_{i,y_i} log p_θ(y_i|x_i) + (1−t_{i,y_i}) log p_θ(C+1|x_i)] (Eq. 6); SAT uses dynamically moving target t_i ← α·t_i + (1−α)·p_θ(·|x_i) with a (C+1)th abstain logit.
- Assumptions: validation and test identically distributed (calibration breaks under shift); coverage threshold τ chosen on validation.

## Data sources named
- ImageNet100, ImageNet, ImageNetSubset (25–175 classes), StanfordCars, Food101, CIFAR-10; ResNet34/VGG16, 3–5 seeds. No sports data. Code: https://github.com/BorealisAI/towards-better-sel-cls.

## Findings (numbers and facts, not vibes)
- ImageNet100 selective error, 80% coverage: SN 6.00 → SN+SR 4.47; DG 5.21 → DG+SR 4.52; SAT 5.20 → SAT+SR 4.46. 50% coverage: SN 1.05 → 0.85; SAT 1.18 → 0.88.
- SAT+EM+SR: StanfordCars 70% coverage 21.34 → 15.84 (~26% relative); Food101 70% 4.89 → 3.52 (~28% relative); ImageNet100 60% 1.72 → 0.95. ImageNetSubset: up to 85% relative improvement over vanilla SAT.
- ImageNet (SAT): 90% coverage 22.67 → 21.57; 70% 13.88 → 12.34 with EM+SR.
- Key negative result: SelectiveNet's own selection head catastrophically fails at low coverage (99.00% error at 10% coverage) — evidence the external head is the failure mode.
- Fairness caveat (Jones et al. 2021): lowering coverage can magnify recall disparities across groups — relevant if the publish filter systematically withholds certain game types.
- Refines ledger 0692 (SelectiveNet adaptation) in the same corpus: the selection head should be replaced by SR selection; complements ledgers 0694/0695/0696 as a fourth, cheapest abstention lane.
- GSE gate (per file): ADOPT if entropy-regularized + SR beats vanilla + SR on 2025 held-out covered-set ROI by ≥1pp at matched 30% coverage, or vanilla + SR beats the learned-head variant by ≥1pp; REJECT if the learned head beats SR (contradicts paper).

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- GSE's publish gate (which picks to post vs withhold) should rank weekly games by max softmax probability, not a learned selection head — the head is empirically the failure mode (99% error at 10% coverage) — **TRUST-SIGNAL**
- Entropy regularizer β=0.01 (retune for GSE architecture) is a one-term loss addition with up to 85% relative selective-error reduction in vision — near-zero-cost accuracy gate improvement — **TRUST-SIGNAL**
- Coverage-based selection can systematically exclude game types (fairness caveat) — the publish filter must be monitored for subgroup skew (e.g., divisional games, bad-weather games) so GSE doesn't silently go dark on whole categories — **TRUST-SIGNAL**
- Calibration assumes no distribution shift; NFL seasons shift — threshold must be recalibrated per season (prior-season validation data per the file's spec) — **TRUST-SIGNAL**
- Causal test proposed: freeze the classifier and swap only the selection mechanism (head vs SR vs entropy) — if SR wins frozen, external selection heads can be dropped permanently — **OTHER** (evaluation methodology)

## Engine-actionable? (yes/no + one-line what)
yes — Train the ATS cover classifier with ℒ = CE + β·H(p_θ) (start β=0.01, tune), replace any learned selection head with Softmax-Response ranking + prior-season-calibrated coverage threshold for the publish gate; monitor subgroup coverage skew.
