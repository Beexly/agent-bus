# arxiv-program/research/2026-09-21/arxiv-deep/1631-nonlinear-optimisation-minimal-drawdown-portfolios.md
## What it is (1-2 sentences)
REJECT-ledgered deep read of arXiv:1908.08684 — a nonlinear-programming equity-portfolio optimizer minimizing average or maximum trailing drawdown, solved to proven global optimality with SCIP; rejected because it sizes from trailing realized drawdown with no edge/probability input and no stake-sizing rule GSE can use.
## Key metrics/methods (formulas where given, else "not specified")
- Four programs: MINAVG, MINMAX, MINAVG-S, MINMAX-S; drawdown per paper eqs. (1)–(2), D=20-day lookback; T=30 trading-day in-sample, rebalance every 10 days, ~180 rebalances; solved via SCIP with max(500, 7N) seconds per rebalance
- Zero transaction costs assumed; survivorship-bias-controlled EURO STOXX 50 / FTSE 100 / S&P 500 constituents 2010–2016
## Data sources named
Daily price data 2010–2016 for EURO STOXX 50, FTSE 100, S&P 500 constituents (commercial data, not public); C++ code mentioned, no public link
## Findings (numbers and facts, not vibes)
- Paper's claim: all four drawdown portfolios dominate the index in-sample and out-of-sample on return and (mostly) drawdown; EURO STOXX 50 cumulative return exceeds the index on over 99% of out-of-sample days; all four Sharpe ratios beat the index
- Ledger assessment: the >99%-of-days dominance claim with zero transaction costs, overlapping 30-day in-sample windows, and 10-day rebalancing is a classic overfit signature — in-sample drawdown minimization fitting recent noise
- No probability or edge input anywhere: weights minimize trailing realized drawdown, so applied to GSE picks it would concentrate stake on low-volatility legs regardless of +EV — a step backward from GSE's edge-based sizing
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- REJECT: no actionable intelligence for GSE; lane already covered by stronger direct drawdown tools (1627, 1628, 1629, 1632, 1635); replaced by 1635 (1610.08558). Salvageable idea only: add an edge filter so only +EV assets enter the optimizer, then re-test with transaction costs: OTHER
## Engine-actionable? (yes/no + one-line what)
No — REJECTED; no edge input, no sizing rule, overfit-suspicious empirical claims; do not wire.
