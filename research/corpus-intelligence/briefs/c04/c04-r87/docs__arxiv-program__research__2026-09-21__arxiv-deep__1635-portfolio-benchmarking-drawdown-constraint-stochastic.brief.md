# docs/arxiv-program/research/2026-09-21/arxiv-deep/1635-portfolio-benchmarking-drawdown-constraint-stochastic.md
## What it is (1-2 sentences)
Deep-read ledger of Agarwal & Sircar (arXiv:1610.08558): continuous-time portfolio theory maximizing expected utility of wealth relative to its running maximum (high watermark) under a hard drawdown constraint, with stochastic volatility modeled via a Heston-type local-stochastic-volatility market. Verdict in the file: ADAPT — supplies the wealth-to-peak ratio ξ as a principled state variable for stake scaling plus a hard barrier-stop rule.

## Key metrics/methods (formulas where given, else "not specified")
- Objective: V(t,l,m,x,y) = sup_π E[U(L_T/M_T)] subject to hard drawdown constraint L_s ≥ αM_s a.s.; utility tested: U(ξ)=ξ^{1−γ}/(1−γ) with γ=3.0, and a two-term mixture with γ_1=3.0, γ_2=1.5.
- Optimal strategy: π* = −[(µ(x,y)−r)V_l + ρβ(y)σ(x,y)V_{yl} + σ²(x,y)V_{xl}] / [σ²(x,y)V_{ll}]; dimensionality reduced via ξ = l/m ∈ [α,1] (wealth-to-peak ratio) to a PDE for Q(t,ξ,x,y).
- Sharpe-ratio function: λ(x,y) := (µ(x,y)−r)/σ(x,y).
- Barrier condition: V(t,αm,m,x,y) = U(α) — hitting the drawdown limit means stop trading the risky asset; Neumann condition V_m(t,m,m,x,y)=0 at the peak.
- Solved by coefficient expansion in stochastic-vol parameters, using regularity of the risk-tolerance function R(t,ξ) (own nonlinear PDE, Prop. 1) for correction terms numerically.

## Data sources named
No external dataset. Numerical study only: Heston-type local-stochastic-volatility model with market-calibrated parameters (parameters not published in reusable form).

## Findings (numbers and facts, not vibes)
- Policies compared across ξ∈[0.4,1] and volatility regimes y=θ, 1.05θ, 0.95θ (vol above/at/below long-run mean).
- Near the high watermark (ξ→1) the optimal policy gradually liquidates the risky position; with the stochastic-vol correction the investor holds the risky position longer near the peak, then liquidates sharply to guard downside.
- At y=1.05θ (elevated vol): invest more than the constant-vol policy π_0 and build up faster away from the barrier; at y=0.95θ: invest less but hold more near the peak.
- The stochastic-vol correction to the VALUE function is small, but the corrected strategy π_0+π_1 is "remarkably different" from π_0.
- File's acceptance gate for the GSE adaptation: ξ-scaled replay keeps realized drawdown above barrier α=0.80 while retaining ≥90% of flat staking's final bankroll on 2025–2026.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: bankroll management / stake scaling as a control policy — no football signal content.

## Engine-actionable? (yes/no + one-line what)
yes — add bankroll/peak ξ as a staking-engine state variable with a barrier α (e.g., 0.80) that scales stakes down toward and halts at the barrier, shifted by a trailing realized-vol-of-pick-returns regime input; 3–4 day effort per the file's implementation spec.
