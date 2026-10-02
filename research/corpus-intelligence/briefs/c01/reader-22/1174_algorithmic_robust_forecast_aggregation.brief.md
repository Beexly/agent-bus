# arxiv-program/research/2026-09-21/arxiv-deep/1174-algorithmic-robust-forecast-aggregation.md
## What it is (1-2 sentences)
Minimax forecast aggregation formulated as a zero-sum game: the aggregator minimizes worst-case additive regret (quadratic loss) against an adversarial "nature" player choosing the worst-case conditionally independent information structure; solved via multiplicative-weights/no-regret dynamics with best-response oracles, yielding a log-odds-style near-minimax aggregator. Verdict in file: ADAPT — an adversarial stress-test framework for GSE ensemble aggregation.

## Key metrics/methods (formulas where given, else "not specified")
- Setting: binary state ω ∈ {0,1}; two experts issue forecasts x_i ∈ [0,1]; aggregator f(x_1, x_2) ∈ [0,1]; quadratic (Brier) loss.
- Regret: R(f, π) = E_π[(f(X) − ω)²] − inf_g E_π[(g(X) − ω)²] (excess loss over the Bayesian aggregator that knows π).
- Minimax regret: min_f max_π R(f, π); existing lower bound quoted ≈ 0.0225.
- Finite coverings via total-variation-distance (TVD) and earth-mover-distance (EMD) discretization of the information-structure space; Lipschitz aggregator class bounds discretization error.
- Experiment protocol: N=20 forecast bins, M=400 nature strategies, L=inf (per the paper's notation).

## Data sources named
No real data. Synthetic numerical experiments only — a discretized family of two-expert conditionally-independent information structures.

## Findings (numbers and facts, not vibes)
- Simple average regret: 0.0625.
- Average-prior aggregator regret: 0.0260.
- Previous state of the art: 0.0250.
- Proposed aggregator regret: 0.0226 vs. lower bound ≈ 0.0225 — essentially minimax.
- Distinguish per file: these are regrets in the discretized synthetic game, not out-of-sample errors on real forecasting data; authors state real-world experiments are future work.
- Assumptions: experts conditionally independent given state; forecasts are calibrated posteriors; correlated-expert structures are out of scope for the equilibrium computation.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (ensemble methodology): certified worst-case combiner for the engine's ensemble aggregation layer; complements the calibration stack (CQR, temperature scaling) which addresses per-model calibration, not cross-model worst-case aggregation.
- OTHER (test protocol): the N=20/M=400/L=inf zero-sum experiment is directly reusable as a robustness harness for the GSE combiner.
- OTHER (risk/calibration): the file's improvement experiment proposes estimating the actual joint distribution of member-model forecasts conditional on outcomes from GSE picks history, then solving the restricted minimax game within a TVD ball of the empirical structure — a data-driven robust aggregator tuned to the engine's real correlation structure.

## Engine-actionable? (yes/no + one-line what)
yes — Implement the log-odds-style minimax aggregator in the GSE ensemble layer and walk-forward backtest on engine picks history (2025 regular season), adopting only if Brier improves ≥0.002 and log-loss ≥0.005 vs. the current combiner with Diebold-Mariano p<0.05 on both, plus a robustness sub-gate (no month-slice loses by >0.003 Brier).
