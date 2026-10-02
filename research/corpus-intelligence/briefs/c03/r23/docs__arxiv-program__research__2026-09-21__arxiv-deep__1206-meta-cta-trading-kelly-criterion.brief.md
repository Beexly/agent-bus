# docs/arxiv-program/research/2026-09-21/arxiv-deep/1206-meta-cta-trading-kelly-criterion.md
## What it is (1-2 sentences)
Deep-read ledger (REJECT) of arXiv:1610.10029 (Meister, 2016), a pure deterministic toy model of Kelly-optimizing CTA funds rebalancing futures portfolios under power-law price impact, producing a three-phase dynamic (oscillating decay, monotone decay, runaway breakdown) with "meta-CTA" exploitation prescriptions. No empirical data, no calibration, no validation anywhere in the paper.

## Key metrics/methods (formulas where given, else "not specified")
- Kelly leverage Λ = λ/σ (market price of risk / volatility), fixed; Lévy extension Λ̂ = R(λ,σ)/(ψ(2σ)−2ψ(σ)) (eq. 17).
- Rebalancing: Δθ_t ∝ (Λ−1)·dS_t/S_t (eq. 23/25); price impact: Δθ_t ∝ (dS_t/S_t)^γ (eq. 26), γ≈0.5.
- Alternation yields cobweb dynamics (Fig. 1); three-phase diagram in (Λ, γ) (Fig. 2): Phase I oscillating decaying, Phase II monotone decaying, Phase III runaway/explosive.
- Meta-CTA prescriptions: Phase III → reduce exposure, predatory options exploit reversion + vol spike; Phase II → sell gamma; Phase I → no directional opportunity.
- Appendix: replicating Kelly portfolio with a single call option, feasible iff λ/σ>1.

## Data sources named
None — no dataset. Author's weakest assumption (flagged in paper): Kelly investors believe in GBM with fixed drift/vol while the true process is the deterministic feedback loop; no noise; continuous rebalancing; unlimited liquidity until Phase III.

## Findings (numbers and facts, not vibes)
- No empirical numbers at all: no backtest, no calibration, no numerical example (the ledger explicitly notes the AAPL 110,000-tick / K̂*≈0.824 example belongs to a different paper, 1710.01786, ledger 1209).
- Only outputs are qualitative: three-phase diagram and cobweb dynamics from an un-noised deterministic model.
- The modeled feedback loop (portfolio rebalancing moving futures prices) has no close analogue in bookmaker line management, per the reader's verdict.
- Ledger verdict: REJECT; replacement required in the market-microstructure/line-movement lane; transferable one-liner (avoid crowded sides) better sourced from genuine sports-market microstructure work.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- "Crowded signal / steam" intuition overlaps the CLV/market-microstructure lane conceptually but provides no line-movement model, no CLV measurement, no detection statistic (OTHER — market microstructure, not usable).
- No QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, or SCHEME content in the paper.

## Engine-actionable? (yes/no + one-line what)
No — toy model with zero empirical grounding and no transferable mechanism to fixed-odds sports betting; REJECT stands.
