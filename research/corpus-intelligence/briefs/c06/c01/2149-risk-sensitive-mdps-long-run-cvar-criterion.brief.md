# arxiv-program/research/2026-09-21/arxiv-deep/2149-risk-sensitive-mdps-long-run-cvar-criterion.md
## What it is (1-2 sentences)
A risk-sensitive MDP framework that directly optimizes the *long-run CVaR* of per-period costs: since CVaR breaks the dynamic-programming principle (time inconsistency), the authors derive a sensitivity-based CVaR difference formula, a Bellman-type local optimality equation, and a policy-iteration algorithm converging in 2–3 iterations, plus a mean-CVaR objective with a β risk-attitude knob. Tested on a constructed 60-state portfolio MDP.
## Key metrics/methods (formulas where given, else "not specified")
- CVaR(X) = E[X | X ≥ F_X^{−1}(α)] = (1/(1−α))∫_α^1 F_X^{−1}(γ)dγ (loss convention)
- Pseudo-CVaR with fixed threshold y (linearizes sensitivity analysis); CVaR difference formula (policy pair); Bellman local optimality equation (necessary+sufficient for local, only necessary for global optima); CVaR derivative formula
- Algorithm 1: alternate policy evaluation (long-run CVaR) and difference-formula improvement; provably converges to local optima in mixed-policy space
- Mean-CVaR: CVaR(c_t) + β·η(c_t); β=0.1 conservative → β=2 aggressive; deterministic policies optimal for minimization (risk-averse case)
- Assumptions: finite S, A; infinite-horizon average-cost; known transitions; bounded costs; unichain policies
## Data sources named
Constructed portfolio MDP: 10 market conditions × 6 risky-asset percentages (60 states); actions = next-period risky % ∈ {0.1,0.25,0.4,0.55,0.7,0.85}; transaction cost 0.45%; riskless 0.01%/day; CVaR level α=0.66/0.75; no real data
## Findings (numbers and facts, not vibes)
- Convergence in 2–3 iterations from any start; different starts land on one of two local optima (global CVaR 4.43, local 12.58) — non-convex, multi-start needed
- Table 3 (mean, std, CVaR of costs): CVaR-global (−37.55, 37.91, 4.43); CVaR-local (−92.37, 94.77, 12.58); random (−150.41, 205.21, 50.38); mean-optimal (−311.65, 322.20, 45.17) — mean-optimal policy has ~10× worse CVaR than the CVaR policy
- Mean-CVaR (β=0.22, α=0.75): objective converges to 3.38 by iteration 3; higher β → visibly more aggressive; two local optima at β=0.4
- Limitations: only local-optimum convergence guaranteed; toy MDP, hand-specified transitions, no learning theory (GSE must estimate MDP from limited weekly data); no comparison to simpler baselines like fixed-fraction staking
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: season-level policy optimization — the risk-control layer ABOVE one-shot Kelly: MDP over states = bankroll bucket (deciles) × edge-availability bucket (high/low), actions = stake tiers {0, 0.5u, 1u, 1.5u, 2u} (0 = sit out the week), transitions from 2022–2025 weekly P&L; precompute conservative/balanced/aggressive tables (β∈{0.1,0.22,0.4}); weekly lookup serves stake tier; regime gating: this policy in normal regime (drawdown<8%), 2148's randomized policy in the loss frame; the β knob is the formal risk-attitude dial
## Engine-actionable? (yes/no + one-line what)
Yes — implement policy iteration (5 random restarts) on the 20-state staking MDP (~1–2 weeks); gate: 2024–2025 simulation CVaR_0.75(weekly cost) ≤0.7× best baseline's AND mean weekly profit ≥0.9× best baseline's AND max drawdown ≤0.85× best baseline's; reject if restart spread >30% of objective (unstable landscape) or any β underperforms flat-1u on all three metrics.
