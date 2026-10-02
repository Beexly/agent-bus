# docs/arxiv-program/research/2026-09-21/arxiv-deep/1155-distribution-free-sequential-prediction-abstentions.md

## What it is (1-2 sentences)
Deep read (ledger #1155) of arXiv:2602.17918 (Yu & Blanchard, 2026) on distribution-free sequential prediction with abstentions under an adversarial corruption threat model. Verdict in file: REJECT — replaced by ledger 1330 ([1330] Available Guardrails); deep, correct theory for a problem GSE does not have.

## Key metrics/methods (formulas where given, else "not specified")
- AbstainBoost: weak learners WL(T,z) partition rounds into m groups, estimate k-shattering probabilities ρ̂^S_k(F) via U-statistics + median-of-means, abstain when min_y ρ^S_k(F^{x→y}) ≥ 0.9ρ^S_k(F) (instance doesn't shrink the version space); boosting (Alg. 6) deletes each expert's first s predictions, majority-votes survivors, abstains if < C experts predict; censored variant C-AbstainBoost.
- MisErr = Σ_t 1[ŷ_t ∉ {y_t, ⊥}]; AbsErr = Σ_t 1[c_t = 0 ∧ ŷ_t = ⊥] (free abstention on corrupted rounds).
- Thm. 2 (oblivious): MisErr ≲ T^{3α}, E[AbsErr] ≲ d² log^{5/3}(T)·T^{1−α}, α ∈ [0,1/3].
- Thm. 5 (adaptive, finite reduction dimension): same MisErr; AbsErr ≲ d²(D log D + log T)^{2/3} log(T)·T^{1−α}; linear classifiers in R^p: Õ(p^{4.67}T^{1−α}).
- Thm. 3 (lower bound, tight up to poly factors): some VC-1 class forces E[MisErr] ≥ T^α/32 or E[AbsErr] ≥ T^{1−α}/2 — the polynomial tradeoff is necessary.
- Assumptions: realizable binary classification, finite VC dimension, oblivious/adaptive adversary injecting arbitrary instances. No experiments, no data, no simulations, no code.

## Data sources named
None — pure theory; no experiments, no data, no simulations, no code released.

## Findings (numbers and facts, not vibes)
- Thm. 2/5 error bounds as above (polynomial misclassification/abstention tradeoff in T with rates T^{3α} and T^{1−α}, α ∈ [0,1/3]). [OTHER: theoretical results]
- Thm. 3 lower bound proves the polynomial tradeoff is necessary (VC-1 class forcing E[MisErr] ≥ T^α/32 or E[AbsErr] ≥ T^{1−α}/2). [OTHER: theoretical results]
- File's rejection reasons: (1) wrong problem — GSE does batch prediction on a stochastic sports process, not adversarial sequential injection; (2) portable mechanisms (disagreement-region abstention, committee majority-vote abstention) already covered by ledgers 1153 and 1157; coverage control by 1154; certification by 1330; (3) no empirical validation at all. [OTHER: corpus-overlap/rejection rationale]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Rejected paper; no findings carried forward: [OTHER — corpus bookkeeping; the selective-prediction lane lives in 1153/1154/1157/1330]

## Engine-actionable? (yes/no + one-line what)
no — REJECT stands; pure adversarial-sequential theory with no implementable GSE mechanism beyond what ledgers 1153/1154/1157/1330 already cover.
