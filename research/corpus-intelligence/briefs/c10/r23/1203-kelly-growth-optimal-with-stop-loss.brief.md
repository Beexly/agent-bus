# research/2026-09-21/arxiv-deep/1203-kelly-growth-optimal-with-stop-loss.md
## What it is (1-2 sentences)
Ledger read of arXiv:1311.2550v2 (Nielsen, 2013): derives the Kelly growth-optimal dynamic stake/risk fraction under a periodically reset stop-loss rule — the optimal strategy itself obeys a nonlinear PDE (no value function needed), solved numerically with closed-form asymptotics. Verdict: **ADAPT** — stop-loss-aware Kelly scaling ports directly to GSE bankroll management.

## Key metrics/methods (formulas where given, else "not specified")
- Market: GBM dS_t = S_t(μdt+σdW_t); portfolio fraction α in risky; dπ_t/π_t = α[(μ−r)dt+σdW_t].
- Main result (eq. 16): ∂t α = −(σ²/2)·α²·∂π(π²∂πα); in risk dollars γ=πα: ∂t γ = −(σ²/2)·γ²·∂π²γ — nonlinear backward diffusion, independent of drift (drift enters via boundary conditions).
- Stop-loss solution: boundary conditions α→αK (π→∞), α(πc,t)=0, α(π,T)=αK for π>πc; scaled coords z=πc/π, θ=(T−t)/τ, τ=2σ²/(μ−r)², u=α/αK solving ∂θu = u²z²∂z²u (eq. B5); explicit Euler stable for Δθ/(Δz)² < 0.5; long-horizon limit u(z,θ) → 1−z.
- Recovered known solutions: free Kelly αK=(μ−r)/σ²; terminal-stop α(π)=αK(1−πc/π) (CPPI with Kelly multiplier); Grossman–Zhou drawdown Kelly α=αK(1−λm_t/π_t); multi-asset = u(π,t)·αK (multiples of the free-Kelly portfolio).

## Data sources named
None — analytic/numerical finance. Benchmark scenario: Sharpe s = 1.0, monthly stop-reset period, VaR cap u ≤ 0.3.

## Findings (numbers and facts, not vibes)
- Fig. 1(b) (s=1.0, monthly reset): with stop 1%/5%/10%/20% below current value, u rises with time-to-reset; the 1%-below-stop curve stays near 0 for most of the month (deep "dead zone"), recovering only in the final days. [OTHER]
- Fig. 2: convergence to the 1−z asymptote as θ→∞. [OTHER]
- VaR example: 3% daily 95% VaR (≈30% annual vol) caps u ≤ 0.3 at s=1.0. [OTHER]
- Limitations stated by the author: continuous-time GBM with no gap risk (stop-losses not truly enforceable at πc under jumps); no transaction costs; μ,σ assumed known (author recommends Bayesian uncertainty incorporation). [TRUST-SIGNAL: author-acknowledged gaps]
- New to corpus: existing Kelly ledgers (0171, 0626, 0813) contain no stop-loss-constrained Kelly and no time-to-reset stake scaling. [OTHER]

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
See tags above. Lanes touched: bankroll/portfolio sizing (monthly stop-loss δ, unit drawdown caps); complements ledger 0626's uncertainty angle.

## Engine-actionable? (yes/no + one-line what)
Yes — implement stop-loss-aware Kelly: stake fraction = αK·u(z,θ) with z = stop-level/current bankroll, θ = (days-to-month-reset)/τ, or the cheap long-horizon asymptote u ≈ 1−z with a sit-out rule for the dead zone; gate via backtest on 2024–2025 NFL (≥95% of free-Kelly log growth, stop-hit frequency cut ≥50%). Paper's own flagged improvement: discrete-time per-slate DP with Bayesian-shrunk engine edge estimates.
