# research/2026-09-21/arxiv-deep/1173-infinite-forecast-combinations-dirichlet-process.md
## What it is (1-2 sentences)
Ledger read of arXiv:2311.12379 (Ren et al., 2023): samples learning rates and combination weights for LSTM forecast ensembles from a Dirichlet process DP(α,H) with α=1000, evaluated on M4 weekly time series. Verdict: **REJECT** — the DP machinery is decorative, headline claims are contradicted by the paper's own tables, and preprocessing leaks across train/test.

## Key metrics/methods (formulas where given, else "not specified")
- G ~ DP(α,H), α=1000; H ∈ {EXP(0.001), N(0.001,0.01), Beta(1,1000)}; stick-breaking β_i, π_i = β_i Π_{k<i}(1−β_k).
- Ensemble E(m,α,H,p) of p checkpoints from one LSTM run, p ∈ {10,…,100}; weighted averaging w_i/Σw vs simple averaging 1/p.
- Metrics: MAE, RMSE averaged over the M4 weekly series set.

## Data sources named
M4 weekly time series (public); LSTM base model (two LSTM modules + dropout + dense output, lag 7; single-model baseline S at fixed lr=0.001).

## Findings (numbers and facts, not vibes)
- Ensemble with p≤10 is WORSE than the single model; p=20–50 gives roughly 50% error reduction vs single model; gains flatten after p≈60. [OTHER]
- Tables III/IV: simple-average MAE 0.331 (p=10) → 0.217 (p=100) vs single 0.294; weighted-average MAE 0.137 → 0.067; simple-average RMSE 0.137 → 0.067 vs single 0.137; weighted-average RMSE 0.083 → 0.063. [OTHER]
- Mixed ensemble E′ is near-identical to the plain average of the three homogeneous ensembles (at p=50: MAE 0.2368 vs 0.2369; RMSE 0.0765 vs 0.0770) — contradicting the paper's "substantial improvement" claim. [TRUST-SIGNAL: paper's headline claims contradict its own tables; do not trust without auditing tables]
- Possible table error: Table III's weighted-average MAE row is numerically identical to Table IV's simple-average RMSE row. [TRUST-SIGNAL]
- Train and test merged before [0,1] normalization — leakage across the split. [TRUST-SIGNAL]
- α=1000 degenerates the DP to its base distribution — the DP adds nothing; sampling from EXP/N/Beta needs no DP. [OTHER]

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
See tags above. The one usable fragment — diverse learning rates / checkpoint harvesting from one training run — is standard snapshot-ensembling, already better covered by ledgers 1336 (RAD protocol) and 1169/1170.

## Engine-actionable? (yes/no + one-line what)
No — rejected; nothing here transfers that the engine's existing ensemble lane (1169, 1170, 1336) doesn't already own. Per standing rule this REJECT does not count toward the 750 and is replaced by ledger 1336.
