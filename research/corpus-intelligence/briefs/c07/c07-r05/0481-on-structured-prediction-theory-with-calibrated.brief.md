# arxiv-program/research/2026-09-21/arxiv-deep/0481-on-structured-prediction-theory-with-calibrated.md

Source paper: Osokin, Bach & Lacoste-Julien (2018), arXiv:1703.02403v4. Ledger verdict: REJECT — consistency theory with no data, no experiments, no path to NFL pick modeling.

## What it is (1-2 sentences)
Pure consistency theory for structured prediction (jointly predicting interrelated outputs like sequences/graphs/images): a calibration-function framework H_{Φ,L,F}(ε) for constructing convex surrogate losses that are provably consistent for task losses where the structured hinge fails, with averaged-SGD convergence guarantees. No datasets, no experiments, no code — and GSE predicts single scalar outcomes (win/spread/total), not structured objects, so there is no transfer path.

## Key metrics/methods (formulas where given, else "not specified")
- Calibration function: H_{Φ,L,F}(ε) := inf_{f∈F, q∈Δ^k} δφ(f,q) s.t. δℓ(f,q) ≥ ε (Def. 1).
- Calibration connection (Thm. 2): R_Φ(f) < R*_{Φ,F} + Ȟ(ε) ⇒ R_L(f) < R*_{L,F} + ε.
- Level-η consistency: H(ε) > 0 ∀ε > η.
- ASGD: step γ = 2D/(M√N); sample complexity N* = 4D²M²/Ȟ²(ε) (Thms. 5–6); assumptions: Φ continuous/bounded below/convex in scores, bounded stochastic-gradient norm (M²), bounded optimum norm (D).
- Worked examples: Hamming loss on sequences, ranking losses (mAP); conclusion: the classical 0-1 loss is ill-suited to structured prediction.

## Data sources named
None. Domains named as motivation: computer vision, NLP, bioinformatics.

## Findings (numbers and facts, not vibes)
- Zero numerical results; the only numbers are sample-complexity bounds and worked calibration-function constants.
- Qualitative conclusion: some task losses make learning harder than others; the exponential-in-output-size constants are tracked to separate tractable from intractable task losses.
- Limitation flagged by the authors themselves: the analysis constrains the score set F, not the data distribution (future work).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: none — not a duplicate (structured prediction doesn't appear in the corpus), just out of scope; the ledger's thin DFS-lineup tangent was judged too weak to matter.

## Engine-actionable? (yes/no + one-line what)
No — gate for theory papers is "changes a GSE engineering decision"; GSE's log-loss/Brier-calibrated scalar pipeline is unaffected, so the lane stays closed unless GSE ever builds a joint slate-level structured-output model.
