# docs/arxiv-program/research/2026-09-21/arxiv-deep/1804-apmm-automated-parlay-market-maker.md
## What it is (1-2 sentences)
A ledger read of arXiv 2607.18299 (Moshrefi & Rana): a hierarchical LMSR-style automated market maker for parlays (APMM) that prices multi-leg parlays correlation-aware via shared low-order interaction parameters, with claimed quadratic (vs exponential) worst-case loss under concentrated informed flow. Empirical evaluation is a historical replay on Kalshi NBA same-game-parlay markets, April–June 2026.
## Key metrics/methods (formulas where given, else "not specified")
- Parlay price = LMSR-style gradient of a convex cost function with sufficient statistics θ_S (interaction parameters for leg-subsets S, |S| ≤ K). Truncated hierarchy; assumes conditional independence of high-order interactions given low-order ones.
- Loss bounds: concentrated low-order informed flow → quadratic operator loss; diffuse bounded flow → linear loss. (Exact bounding expressions not reproduced in the ledger; asymptotic regimes stated only.)
- Trader effective-price ratio = APMM price ÷ independent-LMSR price (<1 = cheaper for trader).
- Historical-replay validation: each real Kalshi trade re-executed against the APMM book; maker P&L accumulated.
## Data sources named
- Kalshi NBA same-game-parlay corpus, April–June 2026: 7,372 markets / 29,257 trades (2-leg: 6,250 markets / 27,984 trades; 3+ leg: ~1,122 markets / ~1,273 trades).
## Findings (numbers and facts, not vibes)
- Trader price ratios by parlay order (APMM ÷ independent LMSR): 1-leg 1.000, 2-leg 0.994, 3-leg 0.981, 4-leg 0.971, 5-leg 0.961, 6-leg 0.938, pooled 0.978. Trader pricing edge grows with order (up to ~6% cheaper at order 6).
- Aggregate maker loss near-zero to negative in replay (maker roughly breaks even to slightly profitable); APMM maker loss lower than independent LMSRs in most games.
- Higher-leg data thin: only ~1,273 trades at 3+ legs, so order-5/6 ratios estimated on small samples.
- Limitations noted: in-sample replay (parameters estimated on the same tape); non-adversarial flow assumption; fee design future work (results exclude fees); strategic traders could attack the truncation residual.
- Ledger verdict: ADAPT.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Correlation-aware SGP fair-value pricing from marginals + low-order interactions: OTHER (market-pricing method, directly maps to GSE SGP/prop pricing lane).
- Hub-concentration risk control (throttle when concentrated informed flow on low-order legs; quadratic-loss regime): TRUST-SIGNAL (sharp correlated action as a signal of informed flow on a few props).
- Correlation discount metric (price ÷ independence price) to flag books mispricing correlation: OTHER (betting-market edge detection).
## Engine-actionable? (yes/no + one-line what)
Yes — build a hierarchical SGP fair-value layer (marginals from game model + pairwise log-linear/copula interactions on same-game prop pairs) to price SGPs, flag mispriced book correlation, and monitor hub concentration as sharp-action signal; NFL re-fit with fees as the adaptation path.
