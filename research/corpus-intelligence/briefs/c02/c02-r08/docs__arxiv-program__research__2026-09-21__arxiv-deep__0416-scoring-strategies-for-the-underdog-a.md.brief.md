# docs/arxiv-program/research/2026-09-21/arxiv-deep/0416-scoring-strategies-for-the-underdog-a.md
## What it is (1-2 sentences)
A purely theoretical/analytical paper deriving the "CLT Rule": win probability P ≃ ½[1 + erf(Z/√2)] with Z = (μ − μ_opp)/√(σ² + σ_opp²), so an underdog (μ < μ_opp) maximizes win probability by increasing outcome variance while a favorite minimizes it. No empirical data; worked toy examples in basketball and football plus a usage-dependent "skill curve" extension.

## Key metrics/methods (formulas where given, else "not specified")
- Per play type i: point value v_i, usage N_i, success probability p_i. Total mean μ = Σ_i v_i N_i p_i; variance σ² = Σ_i v_i² N_i p_i(1−p_i).
- Win probability: P ≃ (1/2)[1 + erf(Z/√2)], Z = (μ − μ_opp)/√(σ² + σ_opp²).
- Optimal usage solves dP/dN_i = 0; exact binomial score distributions (Appendix A) for small N.
- Skill curve: p_i(N_i) = α_i − β_i N_i/N (success rate declines with usage); optimal mix is interior rather than all-or-nothing.
- Computational claim: exact binomial optimization feasible in real time for N < 100 plays, M < 5 play types.

## Data sources named
None — no empirical dataset. Toy models only: basketball (p_2=0.5, p_3=0.3 vs opponent p_{opp}=0.55 on 2s) and football (3-yd run p=0.9; 10-yd pass p=0.25; 50-yd Hail Mary p=0.02).

## Findings (numbers and facts, not vibes)
- Basketball example: optimal 2-point/3-point mix switches at s_{2/3} = 0.39N. — COACHING (shot-selection threshold rule form)
- Football toy: run when yardage needed y < 2.8N; Hail Mary when y > 4.9N; short pass in between (2.8N < y < 4.9N); dashed CLT-rule predictions match the exact binomial optimum in Figure 4. — COACHING
- Skill-curve example: optimal three-point share N_3/N ≈ 0.208 (overuse degrades p_i, so the optimum is a mix). — COACHING
- INFERENCE: the CLT approximation degrades exactly at small N (end-game states), where the paper falls back on exact binomials that don't scale — the regime where a real game-management tool needs it most.
- Assumptions stated: plays are i.i.d. Bernoulli trials with fixed known p_i; CLT applies (large N); opponent strategy is fixed; no downs, field position, clock, turnovers, or defensive adaptation. — OTHER

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: the CLT Rule is a variance-tilt overlay for game-management decisions — underdog (win prob < 35%) deliberately selects higher-variance play mixes among near-optimal choices; favorites do the reverse. Directly complements 4th-down/go-for-it content.
- SCHEME: the skill-curve result (p_i declines with usage N_i, optimal mix interior at N_3/N ≈ 0.208) is the quantitative case against over-using any one play — relevant to play-calling mix evaluation.
- OTHER: opponent modeled as fixed (no game-theoretic response); a dynamic-programming equilibrium extension where the favorite responds to the underdog's variance-seeking is the paper's weakest link and an open improvement.

## Engine-actionable? (yes/no + one-line what)
yes — Add a variance-tilt overlay to 4th-down/late-game recommendations: in underdog spots (win prob < 35%) upweight higher-variance actions among near-optimal choices (backtest target: ≥ 0.5 pp added win probability per game), replacing the paper's Bernoulli toys with empirical state-conditioned play distributions from nflverse.
