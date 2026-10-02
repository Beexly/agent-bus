# arxiv-program/research/2026-09-21/arxiv-deep/1626-optimality-property-bayes-kelly-algorithm.md

## What it is (1-2 sentences)
Research ledger on "An Optimality Property of the Bayes–Kelly Algorithm" (2024, arXiv:2402.03035) — a pure-theory paper proving the Bayes–Kelly test martingale is exactly optimal for sequentially accumulating evidence that a forecast stream is miscalibrated (maximizes expected log test wealth at every horizon; optimum equals a KL divergence). The ledger's verdict is ADAPT: the statistical engine behind GSE's abstention / stake-shrink triggers.

## Key metrics/methods (formulas where given, else "not specified")
- Bayes–Kelly: conformal test martingale from a prior over the miscalibration alternative, updated per observed forecast–outcome pair via a conformity measure.
- Theorem 3.2 (paper's numbering): for fixed conformity measure and alternative, Bayes–Kelly maximizes E[log(test wealth)] at every horizon; the maximum equals D(alternative ‖ null).
- Assumptions: exchangeability under the null (calibrated forecasts); conformity measure and prior over alternatives fixed in advance; the general algorithm may be computationally infeasible (paper's stated limitation — practical use needs a tractable special case).

## Data sources named
No empirical dataset — pure theory; no simulations with stated sample sizes; no code repository link.

## Findings (numbers and facts, not vibes)
- The optimality theorem itself is the result: no other test martingale (for the same conformity measure and prior) accumulates expected log-evidence faster at any horizon.
- Limitations in file: general algorithm may be computationally infeasible; no demonstration on real forecasts or betting data; optimality is relative to a fixed conformity measure and prior — a bad prior yields a valid but weak monitor; exchangeability under the null is strong for sports forecasts with regime shifts.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL — this is the missing statistical backbone for "when do we stop trusting the engine": sequential miscalibration monitor. GSE's calibration work (conformal prediction audit, cqr.ts) is adjacent but no sequential monitor exists — new capability.
- OTHER — stake/abstention triggers: martingale crossing L1 → halve stakes; crossing L2 → abstain until mean-reversion. Runs per market (NFL spreads, totals, props separately).

## Engine-actionable? (yes/no + one-line what)
Yes — 1 week for the monitor + 1 week for trigger wiring: conformity score on each settled pick (e.g., signed log-loss residual), tractable Bayes–Kelly special case with Beta-family miscalibration alternative, per-market test martingales; gate on detecting injected ±5-point-for-4-week miscalibration regimes at least 30% faster (fewer bets to L1) than a rolling-calibration-error baseline at equal false-alarm rates.
