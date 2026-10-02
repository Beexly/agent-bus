# arxiv-program/research/2026-09-21/arxiv-deep/1174-algorithmic-robust-forecast-aggregation.md
## What it is (1-2 sentences)
Ledger for Guo et al. (2024) "Algorithmic Robust Forecast Aggregation" (arXiv:2401.17743) — minimax forecast aggregation formulated as a zero-sum game between the aggregator and an adversarial "nature" choosing the worst-case conditionally-independent information structure, solved via multiplicative-weights/no-regret dynamics with TVD/EMD discretization. Verdict: ADAPT, as an adversarial stress-test framework for GSE's ensemble combiner.
## Key metrics/methods (formulas where given, else "not specified")
- Binary state ω∈{0,1}; two experts issue posteriors x_i∈[0,1]; aggregator f(x_1,x_2)∈[0,1]; quadratic (Brier) loss.
- Regret: R(f,π) = E_π[(f(X)−ω)²] − inf_g E_π[(g(X)−ω)²]; minimax regret min_f max_π R(f,π).
- Experiment grid: N=20 forecast bins, M=400 nature strategies, L=inf (Lipschitz regularization).
- Reported regrets: simple average 0.0625; average-prior 0.0260; prior SOTA 0.0250; proposed 0.0226; existing lower bound ≈0.0225 (near-minimax).
## Data sources named
None — synthetic numerical experiments only, no real data. (Real-world experiments explicitly left as future work.)
## Findings (numbers and facts, not vibes)
- Proposed aggregator achieves worst-case regret 0.0226 vs. lower bound ≈0.0225, vs. 0.0625 for simple averaging — ~64% worst-case regret reduction over the mean.
- Guarantees proven only under conditional independence of experts given the state; correlated-expert structures are out of scope.
- Quadratic loss only; no result for log loss or decision-relevant losses (Kelly/ROI).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL — certified worst-case aggregation for member-model probabilities: guards against correlated/misspecified engine components degrading the combined forecast.
- OTHER — ensemble-theory / game-theoretic combining method.
## Engine-actionable? (yes/no + one-line what)
Yes — implement the log-odds-style minimax aggregator in the ensemble layer and backtest it walk-forward on the 3,411-pick engine history vs. the current averaging combiner (acceptance gate: Brier ≥0.002, log-loss ≥0.005 improvement, Diebold-Mariano p<0.05).
