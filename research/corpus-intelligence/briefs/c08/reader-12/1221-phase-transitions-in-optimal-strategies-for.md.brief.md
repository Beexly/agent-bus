# docs/arxiv-program/research/2026-09-21/arxiv-deep/1221-phase-transitions-in-optimal-strategies-for.md
## What it is (1-2 sentences)
Deep read of Dinis, Unterberger & Lacoste (2020, arXiv:2005.11698) on optimal betting when the gambler trades off long-run average growth rate ⟨W⟩ against its fluctuation σ_W, deriving the Pareto frontier and phase transitions for Kelly horse races (2, 3, M horses; uncorrelated and Markov-correlated). Verdict in-file: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Capital: C_{N+1} = o_x·b_x·C_N w.p. p_x; ⟨W⟩ = Σ_x p_x·ln(o_x·b_x); Kelly: b*_x = p_x.
- Objective: J̃ = α⟨W⟩ − (1−α)σ_W, α ∈ [0,1]; optimality condition p_x − b_x = (γ/σ_W)·p_x·[ln(o_x·b_x) − ⟨W⟩], γ = (1−α)/α.
- Two horses: b± = p ± γ·σ, σ = p(1−p); Pareto slope dσ_W/d⟨W⟩ vertical (infinite) at Kelly's point; = 1/(γ_c·|p−r|) near null strategy with γ_c = σ/|p−r|; phase transition: d²σ_W/d⟨W⟩²|_{γc} = r(1−r)/(σ²·γ_c³) > 0.
- TUR-like bound: σ_W ≥ ⟨W⟩/σ_q where q_x = r_x/p_x, r_x = 1/o_x (fair odds); saturated at b_x = r_x (null strategy).
- General M horses: γ_c = σ_q; d²σ_W/d⟨W⟩²|_{γc} = C/γ_c^5, C = ⟨q³⟩−⟨q²⟩² ≥ 0.
## Data sources named
None empirical — numerical experiments via simulated annealing on two-horse (p=0.2, r=0.4) and three-horse (p1=0.2, p2=0.6, r1=0.4, r2=0.2) cases, plus a Markov-correlated three-horse case (parameters in supplement).
## Findings (numbers and facts, not vibes)
- Near Kelly's point the Pareto slope is always vertical: "if one is willing to sacrifice a small amount of the average growth rate, one can lower the fluctuations significantly."
- Lower front between null and Kelly strategies is convex (proved, supplement Theorem 2) — no other phase transitions there.
- Limitations named in-file: fair-odds assumption fails for sportsbooks (vig); assumes known probabilities (estimation error absent); no real betting data; the phase transition is a landscape property, not an empirical market phenomenon.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: risk-adjusted sizing objective for GSE staking — replaces the hard-coded 0.25 fractional-Kelly default with a frontier-chosen fraction at a configured fluctuation budget; TUR-like bound as a monitoring invariant on probability/odds consistency.
## Engine-actionable? (yes/no + one-line what)
yes — compute the (⟨W⟩, σ_W) Pareto frontier over Kelly fractions on GSE's backtest edge distribution and pick the fraction at the frontier knee instead of the hard-coded 0.25 default.
