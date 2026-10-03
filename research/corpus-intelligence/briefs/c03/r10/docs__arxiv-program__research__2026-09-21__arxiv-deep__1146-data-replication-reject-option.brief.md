# docs/arxiv-program/research/2026-09-21/arxiv-deep/1146-data-replication-reject-option.md
## What it is (1-2 sentences)
A deep-read ledger entry for arXiv:1011.3177 (Sousa & Cardoso): the data-replication trick reduces classification with a reject option to a single standard binary classifier — two non-intersecting boundaries learned during training instead of post-hoc thresholds. Verdict: ADAPT — maps directly onto GSE's pick-abstention lane: a trainable "don't bet this game" region instead of hand-tuned confidence cutoffs.
## Key metrics/methods (formulas where given, else "not specified")
- Outputs ordered C₁ < C_reject < C₂; each point replicated twice into R^{d+1}: [x;0] and [x;h]; replica 1 discriminates C₁ vs {C_reject,C₂} with high cost on C₂ errors; replica 2 discriminates {C₁,C_reject} vs C₂ with high cost on C₁ errors. One binary classifier on 2ℓ replicated points; intersections give two non-intersecting boundaries. Prediction: (C₁,C₁)→C₁, (C₂,C₁)→reject, (C₂,C₂)→C₂.
- Loss: L = 0 correct, w_r reject, 1 error; empirical risk = w_r·R + E, 0 ≤ w_r ≤ 1 (w_r = C_low/C_high); constraint w_r < 0.5 (above that, random guessing beats rejecting).
- SVM: min ½wᵀw + ½(b₂−b₁)²/h² + CΣC_{i,q}^{(k)}·sgn(ξ_{i,q}) with 4 margin constraints per replica. K-class ordinal: 2(K−1) replicas, K−1 reject regions; reject if N_{C₂}/2+1 non-integer.
- Evaluation: Accuracy-Reject (A-R) curves over w_r ∈ (0,0.5), three training-size regimes, 100 repetitions; MATLAB code released (legacy URL, likely dead).
## Data sources named
SyntheticI/II/III/IV (400 points each, regenerable from paper's equations); BCCT: 960 breast-cancer conservative-treatment observations, 30 aesthetic measurements (binary {Excellent,Good} vs {Fair,Poor}; multiclass 4 ordered classes); Letter AH dataset (mentioned in results). No code/data links verified live.
## Findings (numbers and facts, not vibes)
- rejoSVM outperformed all comparators (two-independent-classifiers, post-hoc threshold, Fumera embedded-reject SVM, Frank–Hall-style ordinal) over the FULL w_r range on all six datasets (Figs. 10–19).
- rejoNN best NN-based method in most settings; SVM-based beat NN-based overall.
- No exact numeric operating points — all results are A-R curve figures, no extractable accuracy/reject-rate numbers.
- Parallel-boundary restriction (shared direction w) is a capacity constraint framed as interpretability.
- Fumera baseline possibly misused (authors admit); w_r is still a hyperparameter, so the "no thresholds" claim is partial.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Trainable pick-abstention layer: game features (edge vs closing, conformal interval width, market steam, model version) → {bet-A, ABSTAIN, bet-B} learned in training, shipped as a pre-bet filter with w_r swept on A-R curves: TRUST-SIGNAL (data-driven abstention replacing hand-set confidence cutoffs; composes with conformal-width gating).
- Operating point chosen on ROI under Kelly, not raw accuracy; acceptance gate requires boundary stability (direction cosine similarity ≥0.8) and no degenerate single-market abstention: TRUST-SIGNAL (anti-overfit acceptance discipline).
## Engine-actionable? (yes/no + one-line what)
Yes — build a trainable abstention filter via data-replication SVC/NN on the GSE picks DB; adopt only if it beats fixed-threshold abstention on out-of-sample ROI by ≥2pp at the 20% abstention rate.
