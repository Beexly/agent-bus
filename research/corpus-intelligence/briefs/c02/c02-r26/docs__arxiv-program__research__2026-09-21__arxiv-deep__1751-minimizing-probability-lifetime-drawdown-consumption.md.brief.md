# docs/arxiv-program/research/2026-09-21/arxiv-deep/1751-minimizing-probability-lifetime-drawdown-consumption.md
## What it is (1-2 sentences)
Ledger 1751 deep-reads Angoshtari, Bayraktar & Young (2015, arXiv:1507.08713), a stochastic-optimal-control paper on minimizing the probability that wealth ever falls below a fraction α of its running maximum before death, given constant consumption. Verdict ADAPT: its "freeze the high-water mark" regime and distance-to-safety feedback sizing are portable to GSE's bankroll manager, but the GBM/constant-consumption/lifetime scaffolding must be re-mapped to seasonal betting with withdrawals.
## Key metrics/methods (formulas where given, else "not specified")
- Objective: minimize φ(w,m) = P(τ_α < τ_d), where τ_α = hitting time of α·M_t (running max), τ_d = time of death.
- Safe level: c/r (wealth whose riskless interest covers consumption). Optimal feedback investment (case m ≥ c/r, Eq. 4.1): π_t = (μ−r)/σ² · 1/(γ−1) · (c/r − W_t^π), with γ = 1/(2r)[(r+λ+δ) + √((r+λ+δ)² − 4rλ)] > 1, δ = ½((μ−r)/σ)².
- Three regimes: (i) αm < w < c/r ≤ m: optimal = lifetime-ruin-minimizing strategy; (ii) αm < w ≤ m ≤ m* < c/r: optimally NEVER let maximum wealth increase above current m ("if the individual were to allow maximum wealth to increase, then the drawdown level of α times the new maximum would be too great given the constant rate of consumption"); (iii) αm < w < m with m* < m < c/r: allow the maximum to increase to c/r.
- Minimum drawdown probability (regime ii) = Legendre dual of a controller-stopper problem's value function (§5.2).
- Structural note: π_t ∝ (c/r − W_t) — investment is MORE aggressive when wealth is far below the safe level (classic ruin-minimization shape, opposite of Kelly's wealth-proportional sizing).
## Data sources named
None — pure stochastic optimal control theory; no empirical data.
## Findings (numbers and facts, not vibes)
- No numerical results in the paper; all findings are analytic (closed-form feedback rule, m* threshold structure, three-regime characterization, Legendre-duality representation).
- The m* threshold is implicit; no closed form quoted in the ledger.
- The "invest more when poor" shape minimizes drawdown/ruin probability but sacrifices growth — it is NOT growth-optimal, and the paper does not price the growth cost. (OTHER)
- INFERENCE: The ledger's §11 notes GSE has no drawdown-probability objective anywhere in its existing research map, and that GSE's drawdown governor (1749) ratchets the reference max upward on every new peak — this paper's regime (ii) says when below the safe level, don't ratchet. (OTHER)
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Frozen high-water mark below safe level: when bankroll is under the safety threshold, do not raise the drawdown trigger on new peaks (OTHER).
- Distance-to-safety sizing: stake ∝ (safe level − bankroll) × edge, i.e., more aggressive when far below safety — a contrarian shape to test against Kelly-proportional sizing (OTHER).
- Regime (iii): once above the m* threshold, allow the maximum to increase so wealth can grow to fund consumption (OTHER).
- Ledger's acceptance gate: adopt the frozen-max/distance-to-safety mode if it cuts empirical drawdown frequency (weeks with B_t < 0.7·M) by ≥ 30% vs the ratcheting-governor mode while terminal log growth stays ≥ 85%; reject if the aggressive-when-poor shape blows up on discrete weekly data (OTHER).
## Engine-actionable? (yes/no + one-line what)
Yes — build a "drawdown-probability mode" for the bankroll manager: freeze the high-water mark and size by distance-to-safety when below the safe level, revert to the 1749 α-governor above it; improvement experiment re-solves it as a discrete-time DP with Garrett's actual lumpy withdrawal schedule.
