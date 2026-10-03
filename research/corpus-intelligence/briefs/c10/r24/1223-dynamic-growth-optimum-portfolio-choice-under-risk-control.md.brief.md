# arxiv-program/research/2026-09-21/arxiv-deep/1223-dynamic-growth-optimum-portfolio-choice-under-risk-control.md
## What it is (1-2 sentences)
Ledger of arXiv:2112.14451v1 (Wei, Xu 2021): dynamic Kelly (growth-optimal) portfolio choice in continuous time with a VaR/ES tail-risk governor on log-returns, solved in closed form via quantile formulation and convex envelopes. Verdict: ADAPT as a Kelly-with-tail-governor for GSE's bankroll staking.

## Key metrics/methods (formulas where given, else "not specified")
- Objective: max_{X_T} λ·E[R] − ρ_Φ(R), R = log(X_T/x), ρ_Φ = weighted VaR; λ ≥ 0 growth-vs-risk trade-off.
- Optimal quantile: H⋆(s;λ,η) = (1+λ)η⁻¹δ′(s;λ), with convex envelope δ of the integrand; VaR (Dirac at α) and ES (φ(z) = (1/α)·1_{z≤α}) specializations give closed-form policies.
- λ = 0 → minimum-risk; λ → ∞ → growth-optimal; interior solutions are λ/(1+λ)-mixtures of growth and min-risk wealth.
- Assumptions: complete Black-Scholes market, log-normal pricing kernel, square-integrable strategies. Key contrast: He et al. (2015) put mean-WVaR on terminal wealth → vertical (improper) frontier; log-return criterion yields a proper concave frontier.
- Illustrations at T=1, r=0.05, θ=0.4 (market price of risk).

## Data sources named
None — pure theory paper; no real dataset. All numerics are closed-form illustrations (Figures 2–6).

## Findings (numbers and facts, not vibes)
- Growth-optimal portfolio has the highest expected log-return AND the highest tail risk (stated for both VaR and ES frontiers) — the central growth-vs-risk tension.
- Min-VaR expected log-return = −∞ (degenerate extreme); min-ES is finite, so only the mean-ES frontier is a finite usable curve.
- Frontier sensitivity: increasing confidence α shifts the entire frontier left (lower risk at fixed expected log-return); minimum achievable ES decreases in α.
- Mean-VaR terminal payoff is digital-like (pays X^{VaR} in good states, 0 otherwise); mean-ES payoff is continuous in the state price density (good states: fraction λ/(1+λ) of growth-optimal; intermediate: constant X^{ES}; bad: multiple (α^{-1}+λ)/(1+λ)).
- Limitations: no empirical validation; complete-market/Black-Scholes assumptions; does not address estimation error in θ (the dominant real-world Kelly risk).

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Kelly-with-ES-governor — simulate the slate log-return distribution under Kelly stakes (Monte Carlo over pick outcome model); if ES_α exceeds bankroll risk budget, shrink the Kelly vector by scalar s ∈ (0,1) via bisection on the ES constraint (α = 0.95 default, report implied λ explicitly).
- OTHER: The paper's λ is the principled version of the Kelly fraction — set it to hit a VaR/ES target rather than a fixed ¼.
- OTHER: Test hypothesis — walk-forward on GSE pick history: quarter-Kelly vs Kelly-with-ES-governor, measuring realized log-wealth, max drawdown, and the exchange rate (growth given up per unit ES reduced).

## Engine-actionable? (yes/no + one-line what)
yes — add an ES-based tail governor on top of GSE's Kelly staking: shrink stakes when simulated slate ES_α exceeds the bankroll risk budget, per the ledger's discrete-time implementation spec.
