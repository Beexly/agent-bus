# docs/arxiv-program/research/2026-09-21/arxiv-deep/0915-network-dynamical-ranking-sports.md
## What it is (1-2 sentences)
A temporal-network ranking paper (Motegi & Masuda, 2012, arXiv:1203.2228v2) extending the Park–Newman win-lose score to a dynamic network rating: wins are credited by the opponent's strength at game time with exponential decay, computed via closed-form online updates, and it beats static ratings and official ATP rankings on 137k+ matches. The deep-read ledger rates it ADAPT as an NFL dynamic power rating.
## Key metrics/methods (formulas where given, else "not specified")
- Extends Park & Newman: W = A(I−αA)⁻¹, w = Wᵀ1, ℓ from Aᵀ, s = w − ℓ.
- Dynamic closed online updates: w_{t_n} = A_{t_n}ᵀ1 + e^{−β(t_n−t_{n−1})}(I + αA_{t_n}ᵀ) w_{t_{n−1}} (ℓ symmetric with A_{t_n}; s = w − ℓ).
- Temporal network is acyclic (game links point backward in time) — α has no convergence upper bound (static case capped at 1/λ_max ≈ 0.0048).
- Validation: walk-forward, scores from games ≤ t_n predict t_{n+1}; accuracy = (N′−e−v)/(N′−e) over violations v and ties e; parameter robustness via top-300 generalized Kendall tau (eqs. 9–10).
- Assumptions: exponential decay of relevance; constant indirect-win weight α; order of games carries the signal. Caveat: Σs grows exponentially for large α — normalize by instantaneous sum before cross-time comparison.
## Data sources named
137,842 ATP men's singles matches, Dec 1972–May 2010, 5,039 players (main); 330,796 matches Jul 1984–Aug 2011 for the ATP-rankings comparison (atpworldtour.com, public at the time). No code. Tennis only; team-sport dynamics untested.
## Findings (numbers and facts, not vibes)
- Dynamic win-lose accuracy: 0.659–0.661 (α 0.08–0.20, β = 1/365) vs static win-lose 0.623 vs prestige 0.631.
- Beats official ATP rankings 0.637 over α ∈ [0.11, 0.39] (dynamic 0.646–0.650).
- Dynamic prestige slightly best at 0.668 but lacks closed-form online updates.
- Robust: top-300 Kendall K ≥ 0.85 for all α ≥ 0.06; β ∈ [0, 2/365] nearly identical — game order matters more than the decay rate.
- Binary win/loss edges ignore margin (blowouts = squeakers; authors bless folding importance into A but don't test it); no comparison vs betting markets or Elo-family baselines.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, OTHER)
- OTHER (power ratings): fixes a real GSE flaw — static ratings over-credit September wins over teams that got good late (and under-credit losses to teams good-then, bad-now); the dynamic score prices strength at game time. Spec: 32-node NFL dynamic win-lose with weekly A matrices, α ≈ 0.13, O(32²)/week, closed form — a fast Elo challenger in the engine-benchmark lane; add the dynamic prestige variant (their eq. 17, batch weekly) since it won outright (0.668). INFERENCE: margin-of-victory weighting (log(1+margin)) in A entries is the authors-blessed extension to test first.
## Engine-actionable? (yes/no + one-line what)
yes — Build the NFL dynamic win-lose (+ dynamic prestige variant) power rating; ADOPT as a GSE input iff it beats Elo on 2020–2025 walk-forward by ≥1pp SU accuracy or ≥2% log-loss (paired bootstrap p<0.05).
