# docs/arxiv-program/research/2026-09-21/arxiv-deep/1146-data-replication-reject-option.md

## What it is (1-2 sentences)
Ledger of arXiv:1011.3177v3 (Sousa & Cardoso, 2011/2018), the Data Replication Method for classification with a reject option — it learns a "send to human review" region with a single standard binary classifier via a data-duplication trick, no post-hoc thresholds. Verdict: ADAPT — maps directly onto GSE's pick-abstention lane: a principled, trainable "don't bet this game" region instead of hand-tuned confidence cutoffs.

## Key metrics/methods (formulas where given, else "not specified")
- View three outputs as ordered: C₁ < C_reject < C₂. Replicate each training point twice into R^{d+1}: [x;h] and [x;0] (h = const). Replica 1 (extension 0): discriminate C₁ vs {C_reject,C₂} with HIGH cost on C₂ errors; replica 2 (extension h): discriminate {C₁,C_reject} vs C₂ with HIGH cost on C₁ errors. Train one binary classifier on the 2ℓ replicated points; its intersection with each replica subspace yields two non-intersecting boundaries.
- Prediction: classify both replicas; (C₁,C₁)→C₁, (C₂,C₁)→reject, (C₂,C₂)→C₂.
- Mapped to SVMs (rejoSVM: standard binary SVM on replicated data, objective adds ½(b₂−b₁)²/h² for unique thresholds) and NNs (rejoNN: partially linear output G(x)=G(x)+wᵀeᵢ).
- Loss: L = 0 if correct, w_r if reject, 1 if error; empirical risk = w_r·R + E, 0 ≤ w_r ≤ 1 (w_r = C_low/C_high, normalized rejection cost; w_r < 0.5 — above that random guessing beats rejecting).
- K-class extension: 2(K−1) replicas, K−1 reject regions; reject if N_{C₂}/2+1 is non-integer.
- GSE mapping: game-level features (spread, total, model edge, market movement); target = {bet side A, ABSTAIN, bet side B} ordered by model edge sign. Features per historical pick: model edge vs closing line, interval width (from cqr.ts), market steam (line movement), sport/league, days-to-game, model version.
- GSE spec: train rejoSVM-style binary classifier (sklearn SVC or small NN) on replicated picks; sweep w_r ∈ (0,0.5) to trace the A-R curve; choose operating w_r that maximizes ROI under GSE's Kelly staking (not raw accuracy); ship as pre-bet filter.

## Data sources named
- SyntheticI: 400 points uniform in [0,1]², labels from hyperbolic transition zones α = 10(x₁−0.5)(x₁−0.5)... (file text: α = 10(x₁−0.5)(x₂−0.5) with Gaussian noise ε₁∼N(0,0.125²)).
- SyntheticII: 400 points from two 2-D Gaussians (means [−2,−2]ᵀ and [+2,+2]ᵀ, covariances diag(9,9)/diag(25,25)) + uniform noise ε∈[0.025,0.25].
- BCCT: 960 breast-cancer conservative-treatment observations, 30 aesthetic measurements (binary and 4-class ordinal versions).
- SyntheticIII/IV, Letter AH dataset (mentioned in results). MATLAB code link stated: http://www.inescporto.pt/~jsc/ReproducibleResearch.html (legacy, likely dead, not verified).
- GSE test data named: engine picks table (3,411 picks, model v5.2.7) with realized outcomes.

## Findings (numbers and facts, not vibes)
- rejoSVM outperformed all comparators over the FULL w_r range on SyntheticI, SyntheticII, binary BCCT, SyntheticIII, SyntheticIV, and 4-class BCCT (Figs. 10–19). **No exact numeric table values — all results are A-R curve figures.**
- rejoNN best among NN methods in most settings; SVM-based methods beat NN-based overall.
- Claimed advantages: (1) single standard binary classifier; (2) reject region learned during training; (3) no intersecting/ambiguous regions by construction; (4) one direction (parallel boundaries) → interpretable.
- Limitations: parallel-boundary restriction is a capacity constraint (single direction w); Fumera baseline may have been misused (authors admit); w_r is still a hyperparameter (the "no thresholds" claim covers only post-hoc cutoffs); legacy MATLAB code link probably dead; needs Bioinformatics Toolbox.
- GSE overlap: abstention lane currently rests on conformal prediction intervals + hand-set confidence rules — missing a trainable abstention classifier; composes with conformal work (conformal gives interval width as a feature; rejoSVM learns the reject boundary over it). Complements reject-option papers 1147/1148/1149 (this one most implementation-ready).
- Acceptance gate proposed: ADOPT only if (a) beats fixed-threshold abstention on out-of-sample ROI at ≥2 abstention rates, (b) learned reject region stable across CV folds (boundary direction cosine similarity ≥0.8), (c) abstention doesn't degenerate to a single league/market.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] Trainable abstention ("don't bet this game" region) directly strengthens pick-selection discipline — the card filter layer.
- [OTHER] ROI-optimized abstention: choose w_r to maximize Kelly-ROI, not accuracy — aligns the abstention layer with the sizing objective.
- [OTHER] Improvement experiment: two-stage gate — rejoSVM coarse abstain region, then a gradient-boosted "bet quality" score for Kelly sizing (abstention wants uncertainty signals; sizing wants edge magnitude — decouple them).

## Engine-actionable? (yes/no + one-line what)
yes — Implement rejoSVM-style data-replication abstention on the 3,411-pick table with interval-width + steam features, requiring ≥2pp ROI gain over fixed-threshold abstention at 20% abstention rate in time-series CV before adoption (spec in §11–14 of the file).
