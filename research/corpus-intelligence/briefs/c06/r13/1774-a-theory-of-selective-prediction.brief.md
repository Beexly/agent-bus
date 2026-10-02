# arxiv-program/research/2026-09-21/arxiv-deep/1774-a-theory-of-selective-prediction.md
## What it is (1-2 sentences)
Pure theory paper (arXiv:1902.04256) on selective prediction in a fully adversarial setting: a predictor chooses which future window of the sequence to predict (Algorithm 1's dyadic scheme fixes the window up front), achieving O(1/log n) squared loss — and the adaptive version (choosing the window after seeing data) gains only a constant factor. Adjudicated ADAPT as a scheduling principle: pre-commit GSE's gating strictness at season start rather than re-tuning thresholds week to week.
## Key metrics/methods (formulas where given, else "not specified")
- Lemma 2.1: for integer k ≥ 1, Algorithm 1 achieves expected squared loss ≤ 1/k on any sequence of length 2^k (Remark 2.2: O(1/log n) for general n).
- Theorem 1.1 (mean estimation): expected squared loss O(1/log n); tight — matching lower bound Ω(1/log n) (Drukh 2013 open question resolved).
- Lower bound §2.3: for any predictor A there exists a binary length-n sequence with expected squared loss ≥ 1/64.
- Theorem 1.4 (L-smooth statistics w.r.t. earth mover's distance): expected absolute loss O(L/√log n); concatenation-concave families (Def. 1.5): O(1/log n) squared loss.
## Data sources named
Theory only — no datasets, no experiments. Results are worst-case over arbitrary bounded sequences x ∈ [0,1]^n.
## Findings (numbers and facts, not vibes)
- The headline rates: O(1/log n) upper and lower bounds for mean estimation; explicit lower-bound constant 1/64 on binary sequences.
- Operational takeaway stated in the file: the adaptive (choose window after seeing data) gain over non-adaptive is small — so if a backtest shows GSE's adaptive week-skipping winning by a large margin, that diagnoses overfitting in the adaptive rule, not genuine signal.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (OTHER) Bet-window/card scheduling: pre-committed gating-strictness schedule (full-card vs reduced-card weeks) vs adaptive week-skipping — the paper predicts the adaptive gain is small.
## Engine-actionable? (yes/no + one-line what)
Yes — backtest a pre-committed seasonal gating schedule against an adaptive week-skip rule on graded picks history; keep the fixed schedule unless the adaptive rule wins by a large, stable margin.
