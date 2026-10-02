# docs/arxiv-program/research/2026-09-21/arxiv-deep/1205-optimal-investment-minimize-drawdown.md
## What it is (1-2 sentences)
Angoshtari, Bayraktar & Young (2015), arXiv:1506.00166v2 — stochastic optimal control paper deriving the investment strategy that minimizes the probability wealth ever falls to a fixed fraction α of its running maximum (drawdown) in a Black-Scholes market with deterministic payout. Ledger verdict: ADAPT; ledger completed 2026-09-21, all theorems/proofs read.
## Key metrics/methods (formulas where given, else "not specified")
- Market: riskless rate r, risky GBM (μ,σ); wealth dW_t = [rW_t+(μ−r)π_t−c(W_t)]dt + σπ_t dB_t (eq. 2.1); payout c(w) continuous, non-decreasing, with unique "safe level" w_s where rw=c(w) (Assumption 2.1); drawdown time τ_α = inf{t: W_t ≤ αM_t}, M_t = running max.
- Optimal strategy (Prop. 2.1, Thm. 3.1): π*(w) = 2(c(w)−rw)/(μ−r) (eqs. 2.3, 3.8) — dollar amount (not fraction) invested in risky asset, independent of m and α; identical to the ruin-minimizing rule even with a moving ruin level αM_t.
- Minimum drawdown probability: φ(w,m) = 1 − g(w,m)/g(w_s,m) for m ≥ w_s, and φ = 1 − k(m)g(w,m)/g(w_s,w_s) for m < w_s (eq. 3.6), with scale function g (eq. 2.6) and k (eq. 3.7); δ = ½((μ−r)/σ)².
- Universality (Remark 3.2): same strategy minimizes E[f(min, max)] for ANY f non-increasing in the minimum and non-decreasing in the maximum — objective shape only changes boundary conditions.
- Method: verification lemma (Lemma 3.1, six conditions on candidate h(w,m)); equality version (Cor. 3.2); Feller explosion test for safe-level reachability; comparison principle (Lemma 4.2).
- Assumptions: Black-Scholes GBM, continuous payout function, admissible strategies (integrability), infinite horizon; finite-horizon variants can behave differently — the infinite-horizon assumption is load-bearing.
## Data sources named
None — stochastic optimal control, no dataset. One worked example: c(w) = rw + b(w_s−w)² payout tangent case (Example 4.1).
## Findings (numbers and facts, not vibes)
- The same closed-form stake rule π*(w) = 2(c(w)−rw)/(μ−r) minimizes drawdown probability both above and below the safe level — provably identical to the ruin-minimizing rule, independent of the running maximum m and the drawdown fraction α. [OTHER]
- Universality: the identical strategy minimizes E[f(min,max)] for any f non-increasing in the minimum and non-decreasing in the maximum (Remark 3.2). [OTHER]
- Under mild conditions the safe level w_s is never reached (Feller explosion test, v(w_s^−,m)=∞; Props. 4.1–4.3); if c(w)−rw stays bounded away from 0 (w_s=∞), drawdown probability is identically 1. [OTHER]
- No numerical results — theorem paper; qualitative behavior: optimal risky amount shrinks linearly to zero as wealth approaches the safe level. [OTHER]
- GSE translation proposed in the ledger: bankroll analogues (running-max bankroll M_t, stop fraction α e.g. 0.8, "payout" c(w) as per-slate unit-withdrawal/target-profit function); risk budget per slate R(w) = 2·(c(w)−r·w)/(μ−r) with (μ−r)/σ mapped to the engine's per-slate edge/volatility, auto-derisking as bankroll approaches the safe level; split R across approved edges proportionally to edge/vol²; monitor φ(w,m) as a bankroll risk metric alongside 1203's stop-loss Kelly. [OTHER]
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Closed-form drawdown-minimizing stake rule "risk budget ∝ distance-to-stop" — OTHER
- Universality over min/max objectives (Remark 3.2) — OTHER
- Safe-level-never-reached result and its "safe bankroll" analogue — OTHER
- Finite-horizon warning (a betting season is finite) vs infinite-horizon theorem — OTHER
## Engine-actionable? (yes/no + one-line what)
yes — port the π*(w) = 2(c(w)−rw)/(μ−r) rule as a per-slate bankroll risk budget (α=0.8 stop), split across approved edges by edge/vol², and backtest 2024–2025 NFL with an adoption gate of ≥40% drawdown-frequency reduction at ≤10% log-growth cost vs baseline Kelly (with a finite-horizon freeze-maximum variant tested near season end).
