# docs/arxiv-program/research/2026-09-21/arxiv-deep/1368-kelly-criterion-ornstein-uhlenbeck-processes.md
## What it is (1-2 sentences)
An analytical finance paper (Lv & Meister, 2009) deriving the explicit dynamic Kelly (log-utility) optimal fraction for mean-reverting Ornstein–Uhlenbeck price processes via martingale/duality methods, including correlation-structure collapse results and an estimation-sensitivity rule. Verdict: ADAPT — first corpus source for Kelly sizing when the edge itself moves.
## Key metrics/methods (formulas where given, else "not specified")
- Optimal fraction vector: f_t* = R^{−1}c_t (eq. 21), R = σσ^T the yield-rate correlation matrix; equivalently the maximizer of F(x) = c_t^T x − ½x^T R x (eq. 22) — the Kelly–mean-variance link.
- Single asset: f_t* = (μ_t − r)/σ² with μ_t = a − b·log(S(t)) + 0.5σ² — dynamic fraction that rises as price falls below its mean-reverting level.
- OU set-up: S_i(t) = exp(x_i(t)), dx_i = (a_i − b_i·x_i)dt + Σ_j σ_{i,j}dW_t^j (eq. 13).
- Estimation sensitivity (r = 0): a 1% overestimation of volatility ≈ a 2% underestimation of drift in effect on f* — volatility estimation errors dominate.
- Local correlations (tridiagonal σ, r = 0): expected total fraction f_S*(∞) = (n+1)/4 for odd n, n/4 for even n (eq. 24).
- Global correlations: total optimal fraction = (μ_1(t) − r)/σ² (eq. 26) — n correlated assets behave like one; long-run limit f*(∞) = (a_1 + ½σ² − r)/σ² if b_1 = 0, else (½σ² − r)/σ² (eq. 28).
- Method: martingale/duality (Ṽ_t* = I(η_t*)), Girsanov change of measure, Itô's lemma to read off the replicating strategy; market completeness assumed.
- One numerical illustration: a = 0.5, b = 0.2, σ = 0.1, r = 0.03, S_0 = 10, V_0 = 10 (Fig. 1).
## Data sources named
- None — analytical + one simulation; no empirical data.
## Findings (numbers and facts, not vibes)
- Optimal fraction oscillates inversely with price along the simulated OU path (buy the dip, sell the rally); wealth compounds along the path.
- 1% σ-error ≈ 2% drift-error in effect on the optimal fraction — calibration budget belongs on σ first.
- n strongly correlated assets sized independently behave like one asset (eq. 26): total stake must be capped at the single-pick fraction, not summed.
- Assumptions: complete market, known (a, b, σ); no transaction costs/spreads; continuous rebalancing.
- No baselines vs fixed-fraction Kelly or buy-and-hold; the bubble/evolutionary-finance discussion is explicitly speculative.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- f_t* = (μ_t − r)/σ² dynamic form → line-deviation sizing: stake scales with (fair_line − current_line)/σ² — bet bigger when the line has moved against GSE's number (mean-reversion edge), smaller when it has moved with it [OTHER].
- σ-sensitivity rule (1% σ-error ≈ 2% drift-error) → calibration priority: line-volatility estimation first; add a σ-sanity gate to the sizing module [OTHER].
- Correlation collapse (eqs. 24, 26–28) → correlated pick clusters (same-game legs, alt-lines) must be capped as one pick, not summed independently [OTHER].
- Complements ledger 1200 (static lognormal Kelly), 1367 (general-distribution Kelly), 1366 (binary-regime partition) — none treat a time-varying mean-reverting edge [OTHER].
## Engine-actionable? (yes/no + one-line what)
Yes — add OU-adjusted dynamic Kelly sizing: estimate pull-speed b and line volatility σ from line-move history, scale stakes by line deviation/σ², and cap correlated-cluster total stake at the single-pick fraction.
