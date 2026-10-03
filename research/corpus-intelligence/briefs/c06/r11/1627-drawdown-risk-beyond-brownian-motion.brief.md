# arxiv-program/research/2026-09-21/arxiv-deep/1627-drawdown-risk-beyond-brownian-motion.md
## What it is (1-2 sentences)
Paper (arXiv:2608.00127): a Monte Carlo drawdown-quantile framework showing standard Brownian-motion formulas materially understate tail drawdown risk for non-Gaussian return archetypes — at Sharpe 1, 3-year horizon, the 90th-percentile max drawdown is 1.87 (Gaussian), 1.98 (trend), 2.00 (market-neutral), and 2.48 (mean-reversion/short-vol, ~33% worse than Gaussian).
## Key metrics/methods (formulas where given, else "not specified")
- Brownian benchmark (Sharpe 1, 3 years): max-drawdown median 1.16, 90th percentile 1.89 annual-vol units.
- Archetype table (Sharpe 1, 3 years), 90th-pct max drawdown: Gaussian 1.87, trend 1.98, mean-reversion/short-vol 2.48, market-neutral 2.00.
- Four statistics: maximum drawdown, maximum loss, final negative time, longest recovery time.
- 250 trading days/year Brownian; 16,000 independent paths, fixed seed, for archetypes; recommends stationary block bootstrap and Hurst-exponent stress scenarios (H=0.5, 0.6, 0.7) for real use.
## Data sources named
No external dataset — pure Monte Carlo simulation study; no code URL found (paper claims reproducible tables).
## Findings (numbers and facts, not vibes)
- Short-vol/mean-reversion archetype is ~33% worse than Gaussian at the tail (2.48 vs 1.87) — the worst of the four archetypes.
- 16,000 paths is modest for 90th-percentile tail claims; block bootstrap recommended but not demonstrated on real data in the paper.
- GSE's pick-return process (discrete −110 bets, time-varying edge) matches none of the archetypes exactly — stylized inputs only.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: bankroll stress-test framework — feed realized GSE pick-level P&L (per-bet returns at actual Kelly-fraction stakes) into archetype + block-bootstrap (2-week blocks) simulation; use worst-archetype drawdown to set bankroll reserve and circuit-breaker levels.
- TRUST-SIGNAL: honest drawdown quantile disclosure is a credibility asset for the public results ledger (median AND 90th-pct worst-case, not Gaussian-only).
## Engine-actionable? (yes/no + one-line what)
Yes — build bankroll simulator on settled 2024–2026 picks with archetype streams + block bootstrap; ADOPT the archetype tables as sizing guardrail if bootstrap 90th-pct max drawdown exceeds the Brownian prediction by ≥15%, else reject as unnecessary.
