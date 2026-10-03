# arxiv-program/research/2026-09-21/arxiv-deep/1232-objective-and-subjective-entropy-measures.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2607.09505v1 (Sharma 2026, 1,829 words): pure continuous-time theory proving that any portfolio's suboptimality vs the growth-optimal (Kelly) portfolio is measured exactly by KL-divergence quantities, both objective (under true beliefs) and subjective (under the investor's implied beliefs). Verdict: ADAPT as a diagnostic for ranking GSE's staking rules.
## Key metrics/methods (formulas where given, else "not specified")
- Kelly condition: σ_tᵀπ_t⋆ = θ_t; growth-optimal growth: g_t⋆ = r_t + ½‖θ_t‖².
- Instantaneous growth gap: g_t⋆ − g_t^π = ½‖θ_t − σ_tᵀπ_t‖² (half the squared tracking error to Kelly in volatility units).
- Objective identity: E_P[log(X_T^{π⋆}/X_T^π)] = D_KL(P‖P^π); subjective mirror: E_{P^π}[log(X_T^π/X_T^{π⋆})] = D_KL(P^π‖P). Conceptual result: every portfolio is growth-optimal under some belief P^π; suboptimality under the true P is exactly D_KL(P‖P^π).
## Data sources named
None — analytic identities, no dataset, no numerics, no code.
## Findings (numbers and facts, not vibes)
- No empirical findings: the paper is proved identities, not tests. Assumes full-row-rank volatility, Novikov conditions for measure changes; unconstrained Kelly may demand leverage/shorts; provides measurement, not a new decision rule.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: sizing diagnostics — the growth-gap identity lets GSE rank staking rules (fixed fraction, quarter-Kelly, variance-budgeted, etc.) by distance-from-Kelly ½‖θ̂ − σ̂ᵀπ‖² per slate, separately from drawdown, so raw P&L no longer conflates "far from optimal" with "unlucky". Overlaps wave-3 sizing papers 1222 (what fraction α costs in closed form), 1223, 1224 (KL-regret language), and ledger 0171's 10-strategy comparison.
## Engine-actionable? (yes/no + one-line what)
yes — add a Kelly-gap diagnostic to the staking-rule horse race: compute per-slate growth gaps for each candidate rule on walk-forward picks and use the gap-vs-realized-log-wealth divergence to separate estimation-driven from structural shortfall.
