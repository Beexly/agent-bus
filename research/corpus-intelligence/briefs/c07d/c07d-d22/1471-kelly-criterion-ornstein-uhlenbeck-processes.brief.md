# arxiv-program/research/2026-09-21/arxiv-deep/1471-kelly-criterion-ornstein-uhlenbeck-processes.md
([1471] Application of the Kelly Criterion to Ornstein-Uhlenbeck Processes — arXiv:0903.2910v1, Lv & Meister 2009)

## What it is (1-2 sentences)
A theory paper deriving the optimal log-utility (Kelly) trading fraction for mean-reverting Ornstein–Uhlenbeck price processes. Ledger verdict: **REJECT as duplicate** — it is an exact duplicate of ledger 1368, which already deep-read arXiv:0903.2910v1 on 2026-09-21 with an ADAPT verdict; the entry exists only to satisfy the replace-on-duplicate rule and was replaced by ledger 1500 (arXiv:2604.25280v1).

## Key metrics/methods (formulas where given, else "not specified")
- Log-price OU: **dx_t = (a − b x_t)dt + σdW_t**.
- Optimal fraction vector: **f*_t = R^{−1} c_t**, with **R = σσᵀ**.
- Single asset: **f*_t = (μ_t − r)/σ²**, where **μ_t = a − b log S_t + 0.5σ²**.
- Mean-variance equivalent objective: **F(x) = c_tᵀx − 0.5xᵀRx**.
- Local/global correlation structures and estimation sensitivity discussed (no empirical backtest).
- Sensitivity rule (carried over from 1368): **1% σ-error ≈ 2% drift-error**.
- Assumptions: complete frictionless continuous-time market, nonnegative wealth, known drift/volatility.

## Data sources named
None — theory paper, no empirical dataset.

## Findings (numbers and facts, not vibes)
- The paper's arXiv ID (0903.2910v1) matches ledger 1368 exactly.
- Content is identical to ledger 1368's ADAPT-verdict record: dynamic Kelly fraction with mean-reverting drift; the first corpus source for Kelly sizing when the edge itself moves.
- No new numbers beyond 1368; no independent validation in this entry.
- Limitations (from 1368): frictionless continuous trading, known parameters, no odds limits/liquidity — all directly relevant to GSE's bankroll/staking lane, where those assumptions are violated.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER — Sizing/calibration program:** This duplicate adds nothing new; all intelligence connections live on ledger 1368. The actionable residue (from 1368, restated here only to prevent double-counting): Kelly fraction with mean-reverting drift is the corpus's first sizing rule for a *moving* edge — relevant to GSE's stake-sizing when model edge drifts over a season. Do not treat this entry as a second independent confirmation.

## Engine-actionable? (yes/no + one-line what)
**No** — duplicate of ledger 1368; any action belongs on that ledger's record.
