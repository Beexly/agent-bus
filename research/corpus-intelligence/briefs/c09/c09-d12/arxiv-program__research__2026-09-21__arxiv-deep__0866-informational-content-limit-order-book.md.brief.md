# arxiv-program/research/2026-09-21/arxiv-deep/0866-informational-content-limit-order-book.md
## What it is (1-2 sentences)
Empirical study of two PredictIt political prediction markets testing whether limit-order-book markets aggregate private information into consensus beliefs; verdict ADAPT as a cautionary discipline for how much weight GSE gives market-implied probabilities.

## Key metrics/methods (formulas where given, else "not specified")
- Four consensus diagnostics: (a) execution volume near resolution; (b) one-sided open-order accumulation; (c) per-trader portfolio transition matrices (P(shift asset→asset)); (d) entry-time profit distributions with K-sample Kolmogorov–Smirnov test (subsampled critical values, Politis et al. 1999).
- Incomplete-model belief bounds (Haile–Tamer/Sutton): q_it ≥ p_t (eq. 1); upper-bound estimator G(s|h)^u = (1/|N_t^a|)Σ 1{p_it ≤ s}1{h_it = h} (eq. 2); no-belief-updating q_it(h_t) = q_i (eq. 3); Markovian execution probabilities via Nadaraya–Watson kernel (eqs. A-9–A-10, Silverman bandwidths); limit-vs-market bound q_i ≤ (m_t − φ(p_t,y_i)p_t)/(1 − φ(p_t,y_i)) (eq. 7).
- Noise-trader ID: split trading vs prediction profits; "day traders" (exit with zero holdings) vs a trivial algorithm benchmark (copy day-trader buys, sell at first profitable limit order).

## Data sources named
PredictIt (real money; Victoria University of Wellington / Aristotle International), data shared privately by Blair Richards and Christopher Chidzik; 4,452 unique traders; two markets — Republican Iowa Caucus (14 candidates; Cruz eventual winner) and Supreme Court marriage-equality decision.

## Findings (numbers and facts, not vibes)
- Consensus REJECTED on all four tests: volume SPIKES at end; no one-sided open-order accumulation; transition matrices concentrated on diagonal; entry-time profit distributions not statistically different at 95% (KS test).
- <1% of traders make profits >$400; ~5% lose >$400; day-trader mean trading profit −$214.71; trivial algorithm beats day traders.
- Belief-bound mean-belief intervals (Table 3): CRUZ [0.41, 0.50], TRUMP [0.26, 0.38], RUBIO [0.06, 0.10]; Cruz/Trump intervals straddle 0.5 — cannot reject mean beliefs = 0.5; only Rubio firmly below. Avg transaction prices: Cruz 0.52, Trump 0.39, Rubio 0.12.
- Motivating example: noise traders buying state 0 above 0.75 while informed all believe state 1 → all executions in (0, 0.25], falsely suggesting state 1 is unlikely. "The market did not provide any more information than what was public at the time."

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (market microstructure / betting-market skepticism): execution prices ≠ consensus beliefs when noise traders + anonymity let informed traders hide; de-vigged lines are marginal-trade prices, not consensus beliefs.
- OTHER (methodology): four consensus diagnostics and the incomplete-model belief-bounding method as a decision procedure for when market-implied inputs deserve ensemble weight.

## Engine-actionable? (yes/no + one-line what)
Yes — run the paper's consensus diagnostics (line-move vs ticket divergence, late-vs-early move predictive power via KS test) before trusting market-implied probabilities; down-weight market inputs when the market fails the tests.
