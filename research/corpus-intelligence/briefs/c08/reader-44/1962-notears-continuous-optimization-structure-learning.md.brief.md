# docs/arxiv-program/research/2026-09-21/arxiv-deep/1962-notears-continuous-optimization-structure-learning.md

## What it is (1-2 sentences)
Deep-ledger summary of Zheng, Aragam, Ravikumar & Xing (2018, arXiv:1803.01422): NOTEARS recasts score-based DAG structure learning — combinatorial and NP-hard — as continuous optimization over real matrices via a smooth acyclicity constraint h(W) = tr(e^{W∘W}) − d = 0, solved with augmented Lagrangian + L-BFGS/proximal quasi-Newton. Verdict: ADAPT.

## Key metrics/methods (formulas where given, else "not specified")
- Acyclicity characterization (Theorem 1): h(W) = tr(e^{W∘W}) − d = 0 ⟺ W is a DAG; ∇h(W) = (e^{W∘W})^T ∘ 2W. h quantifies "DAG-ness" (cycle count/severity).
- Score: ℓ(W; X) = (1/2n)||X − XW||_F² + λ||W||₁; augmented Lagrangian L^ρ = F + (ρ/2)|h|² + αh, dual ascent α_{t+1} ← α_t + ρ·h(W_{t+1}), stop when h < ε (e.g., 1e-8), typically < 10 outer iterations.
- Unconstrained subproblems: L-BFGS (λ=0) or proximal quasi-Newton with closed-form coordinate updates via soft-thresholding S(c − b/a, λ/a); active-set shrinking cost O(m²|S| + m³ + m|S|T); final hard threshold ω rounds to a strict DAG.
- Logistic-GLM extension for binary variables; ~50 lines of Python; code at github.com/xunzheng/notears.

## Data sources named
Synthetic ER-k and scale-free (SF-k) DAGs, d ∈ {10, 20, 50, 100}, n ∈ {20, 1000}, Gaussian/Exponential/Gumbel noise, generator parameters in Appendix D; Sachs et al. (2005) protein-signaling flow-cytometry data (n = 7466, d = 11, 20-edge consensus network).

## Findings (numbers and facts, not vibes)
- SHD: NOTEARS beats FGS uniformly; gap widest on denser scale-free (SF-4) graphs and larger d; ℓ1 helps at n=20. FGS competitive at ER-2, "rapidly deteriorates" at SF-4.
- Global-optimum comparison (Table 1, d=10, GOBNILP; Δ = NOTEARS − global): n=1000, λ=0, ER2: 5.02 vs 4.97 (Δ=−0.05); n=1000 SF4: 5.05 vs 4.94 (Δ=−0.11); ||Ŵ − W_G|| as small as 0.02–0.04 at n=1000.
- Sachs real data: FGS 17 edges SHD=22 vs NOTEARS 16 edges SHD=22 (tie on SHD, fewer edges).
- Limitations: linear SEM only (follow-up NOTEARS-MLP exists; "Unsuitability of NOTEARS" critique re: varsortability); O(d³)/iteration matrix exponential; i.i.d. assumption (autocorrelated sports data confuses lagged with contemporaneous effects); stationary points only; ω threshold chosen fixed/suboptimal per the authors.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: new capability — principled causal feature selection for the prediction stack: learn a DAG over ~35 team-week indicators and restrict the game-outcome model to the Markov blanket of the spread-cover target (confounded leaves pruned). No NOTEARS/causal-graph learning anywhere in the corpus.
- OTHER: NFL directionality sanity gate (e.g., pressure rate → sack rate → defensive EPA) doubles as a trust-signal on feature engineering.
- OTHER: DYNOTEARS/NOTEARS-MLP improvement experiment (ledger §14) targets the autocorrelation and threshold-effect gaps — e.g., pressure rate only matters above ~30%.

## Engine-actionable? (yes/no + one-line what)
Yes — run NOTEARS on an nflverse team-week panel (2015–2026, ~35 indicators) quarterly as an offline artifact, prune the game-outcome feature set to the Markov blanket of the spread-cover target with bootstrap stability ≥0.6, gated on held-out 2024–2025 Brier within 0.002 of the full-feature baseline at ≤60% feature count (ledger §11–13 spec, ~2 engineer-days).
