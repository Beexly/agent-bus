# docs/arxiv-program/research/2026-09-21/arxiv-deep/0305-arbitragefree-combinatorial-market-making-via-integer.md
## What it is (1-2 sentences)
Prediction-market microstructure paper: an arbitrage-free combinatorial market maker (FWMM) that removes arbitrage from cost-based (LMSR) markets by projecting prices onto the marginal polytope via fully-corrective Frank-Wolfe with an integer-program oracle (Gurobi 5.5), evaluated by counterfactual replay of 63,689 Yahoo! Predictalot trades from the 2010 NCAA March Madness tournament. The ledger verdict is REJECT for GSE: GSE consumes odds, it does not operate a combinatorial prediction market.
## Key metrics/methods (formulas where given, else "not specified")
- LMSR cost function C(θ) = log(Σ_i e^{θ_i}); instantaneous price p(θ) = ∇C(θ).
- Arbitrage-free prices = marginal polytope M = conv(Z), Z = valid payoff vectors; arbitrage exists iff p(θ) ∉ M.
- Bregman projection µ* = argmin_{µ∈M} D(µ‖θ), D(µ‖θ) = R(µ) + C(θ) − θ·µ (mixed Bregman divergence), R(µ) = sup_{θ'} [θ'·µ − C(θ')].
- Frank-Wolfe gap g(µ) = max_{z∈Z} ∇F(µ)·(µ−z); Proposition 4.1: moving to θ̂ = ∇R̄(µ̂) guarantees profit ≥ D(µ̂‖θ) − g(µ̂).
- Partial-outcome cost function C_σ(θ) = sup_{µ∈V_σ} [θ·µ − R(µ)]; liquidity-budget sweep {0.1, 1, 10, 100, 1000} at b=150.
## Data sources named
Yahoo! Predictalot combinatorial prediction market (2010 NCAA Men's D1 Basketball Tournament, Mar 18 – Apr 5, 2010); 93,036 bets placed, 63,689 retained (68%). Data proprietary, not shared.
## Findings (numbers and facts, not vibes)
- FWMM vs LCMM log-likelihood improvement (OTHER): variables 2.1%–5.6%, median 3.3%; bundles 0.9%–3.2%, median 2.2%, across all budgets/seeds (OTHER).
- Excluding the first 16 games, median improvement rises to 12.4% for securities and 5.6% for bundles (OTHER).
- Once Bregman projections succeed (only after 45 of 63 games settled, 30-min projection time limit): FWMM-over-LCMM accuracy improvement 0%–80% for variables (median 38%), 0%–44% for bundles (median 9%) (OTHER).
- First successful projection completed only at 2010-03-21 13:58:50 (after 45/63 games settled) — projection not feasible in real time on a live outcome space (OTHER).
- Optimal budget 10 for IND/LCMM, 100 for FWMM; LCMM/FWMM far less budget-sensitive than IND (OTHER).
- Total runtime ~5 hours to replay 22 days of trades on a standard workstation (OTHER).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Prediction-market microstructure theory (arbitrage removal via Frank-Wolfe + IP) has no GSE surface; GSE consumes prediction-market prices as features rather than operating a market. No QB-BEHAVIOR, COACHING, OL, SCHEME, or TRUST-SIGNAL content.
- TRUST-SIGNAL: the ledger flags the experiment as heavily synthetic — initial prices, settling times, and limit orders (drawn uniform from [p̄,1] with arbitrary budgets) are fabricated; "trader beliefs" inferred from realized average prices circularly feed prices into a price-accuracy test. INFERENCE: any result from this paper should be treated as mechanism-design evidence only, not market-behavior evidence.
## Engine-actionable? (yes/no + one-line what)
No — GSE has no market-making lane; the only conceivable use is a hypothetical GSE-operated contest surface, which does not exist.
