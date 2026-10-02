# arxiv-program/research/2026-09-21/arxiv-deep/1204-kelly-criterion-variable-payoff.md
## What it is (1-2 sentences)
Ledger for Pérez Marco (2014) "Kelly criterion for variable pay-off" (arXiv:1411.3615) — a 5-page pure-theory note deriving the Kelly-optimal fraction when the pay-off b is a random variable with known distribution ρ. Verdict: REJECT — subsumed by existing ledgers 0171/0626/0813.
## Key metrics/methods (formulas where given, else "not specified")
- Growth rate: g(f) = q·log(1−f) + p·∫₀^∞ log(1+bf)·ρ(b)db, f∈[0,1].
- Classical Kelly: f*(p,b) = p − q/b = [p(1+b)−1]/b.
- Variable-payoff integral equation (Thm 3.1): ∫₀^∞ [b·ρ(b)/(1+bf̂)]db − (1−p)/[p(1−f̂)] = 0; unique solution by strict concavity.
- Corollary 3.2: f̂(p,ρ) ≤ f*(p,b̄) with b̄ = ∫bρ(b)db; equality iff pay-off constant (Jensen on h(b) = b/(1+bf̂)).
- Assumes p constant across rounds; ρ known, finite integral; no leverage.
## Data sources named
None — pure theory, no data, no simulations.
## Findings (numbers and facts, not vibes)
- No numerical results. Single substantive result: uncertain pay-off ⇒ Kelly fraction ≤ constant-average-payoff fraction (shade down) — a one-line Jensen corollary of conservative-Kelly principles already adopted in ledgers 0171 (practical Kelly), 0626 (Kelly under probability uncertainty), 0813 (diversification/limited-info Kelly).
- Zero external validity to GSE: NFL spread/moneyline/total markets have fixed known decimal odds at bet time; pay-off is never random at decision time.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — staking theory (variable-payoff Kelly); already-covered territory.
## Engine-actionable? (yes/no + one-line what)
No — nothing to build beyond the existing Kelly protocol; relevant only in a speculative future live-cash-out lane.
