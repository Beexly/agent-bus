# research/2026-09-21/arxiv-deep/0481-on-structured-prediction-theory-with-calibrated.md
## What it is (1-2 sentences)
Deep-read ledger for Osokin, Bach & Lacoste-Julien (2018), arXiv:1703.02403v4 — a pure-theory paper building a calibration-function framework for consistent convex surrogate losses in structured prediction (sequences, graphs, images), with ASGD optimization guarantees and no data or experiments. The intake verdict is **REJECT**: consistency theory for exponential-class structured prediction has no path into GSE's scalar-outcome pick engine.

## Key metrics/methods (formulas where given, else "not specified")
- Calibration function (Def. 1, eqs. 5–6): H_{Φ,L,F}(ε) := inf_{f∈F, q∈Δ^k} δφ(f,q) s.t. δℓ(f,q) ≥ ε — the infimum excess conditional surrogate risk when excess task risk is ≥ ε.
- Calibration connection (Thm. 2, eq. 7): R_Φ(f) < R*_{Φ,F} + Ȟ_{Φ,L,F}(ε) ⇒ R_L(f) < R*_{L,F} + ε, where Ȟ is a convex non-decreasing lower bound of H.
- Level-η consistency (Def. 3): H_{Φ,L,F}(ε) > 0 ∀ε > η (plus finiteness at some ε̂ > η) — a graded notion of consistency; optimizing the surrogate gets the task risk within η.
- ASGD step (Thm. 5): γ := 2D/(M√N); sample complexity (Thm. 6, eq. 11): N* := 4D²M² / Ȟ²_{Φ,L,F}(ε) — expected excess task risk < ε after N > N* iterations.
- Assumptions (Assumption 4 + Thm. 5): Φ continuous and bounded below, convex in scores f ∈ ℝ^k; bounded expected squared stochastic-gradient norm (E‖Fᵀ∇Φ ψ(x)ᵀ‖²_HS ≤ M²); bounded optimum norm (‖W*‖_HS ≤ D); feasible score set F ⊆ ℝ^k.
- Setup: score functions f: X → ℝ^k over k structured classes (k exponential in output dimension); task loss L; convex surrogate Φ; worked examples for Hamming distance on sequences and ranking losses (mAP). Consequence stated in conclusion: the classical 0-1 loss is ill-suited to structured prediction.

## Data sources named
- None. Pure theory; the only mention of numerics is "we have used numerical simulations and symbolic derivations to check for correctness" of derivations. Domains named as motivation: computer vision, NLP, bioinformatics.
- Related companion: 1605.06443v2 (same authors' follow-up) — next in this sweep wave.

## Findings (numbers and facts, not vibes)
- Zero numerical results in the paper; the only numbers are sample-complexity bounds (eq. 11) and worked calibration-function constants for specific losses.
- Theoretical results (all proofs, appendices through Proposition 17): (a) H>0 ⇒ small excess surrogate risk implies small excess task risk; (b) graded level-η consistency; (c) ASGD convergence with step γ = 2D/(M√N) and explicit sample complexity N* = 4D²M²/Ȟ²(ε); (d) for any task loss they construct a convex surrogate (via optimization-based normalization, §4) with tight bounds on the calibration function, tracking exponential-in-output-size constants explicitly to separate tractable from intractable task losses.
- Self-flagged limitation: the analysis constrains the score set F, not the data distribution (future work: constrain distributions instead); theory covers only losses where the calibration function is computable.
- The actionable reading ("0-1 loss is bad for structured losses") does not apply to GSE's log-loss/Brier-calibrated probability pipeline.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: No connection to any current GSE program. GSE predicts single scalar outcomes (win/spread/total, binary or regression) per game with log-loss/Brier-calibrated probability models — the "exponential classes" problem the paper solves (sequences, graphs, image labelings) has no analog in the pick engine, and the consistency-of-surrogate question concerns sequence labelers and rankers, not calibrated probability models. GSE's DFS lineup work is combinatorial optimization, not structured-prediction learning — the connection is too thin to matter (INFERENCE).
- OTHER (UNCERTAIN, far-future): The only hypothetical port is if GSE ever builds a structured-output model (e.g., jointly predicting a full slate's outcomes as one structured object to capture correlated-game covariance for portfolio bet sizing): instantiate the calibration function for a slate-level Hamming loss and compare ASGD sample complexity (eq. 11) against independent per-game models. Currently out of scope.

## Engine-actionable? (yes/no + one-line what)
No — theory-only paper with zero empirical claims; no artifact to build, no engineering decision changes; reject closed.
