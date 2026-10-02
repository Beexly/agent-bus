# docs/arxiv-program/research/2026-09-21/arxiv-deep/1634-optimal-parlay-wagering-whitrow-asymptotics.md

## What it is (1-2 sentences)
Deep-read ledger (ADAPT verdict) of arXiv:2603.26620 — exact Kelly ticket-book construction for independent multi-outcome events via an outer-product of one-event strategies, plus perturbative asymptotics showing the singles-only restriction costs only quartic growth and needs only cubic shrinkage correction.

## Key metrics/methods (formulas where given, else "not specified")
- Single-event implicit-cash Kelly (Prop. 2.1): s*_i = (p_i − c*π_i)_+; W*_i = max(c*, p_i/π_i); cash c* = (1−P_A)/(1−Q_A) over the active prefix (sorted by p_i/π_i).
- Exact parlay ticket (Theorem 3.1): x*_γ = ∏_{ℓ:γℓ=0} c*_ℓ · ∏_{ℓ:γℓ≠0} s*_{ℓ,γℓ}; terminal wealth factorizes W_x*(I) = ∏ F_ℓ(I_ℓ); growth V_par = Σ E[log F_ℓ(I_ℓ)].
- Active-ticket criterion (Cor. 3.2): a ticket is active iff every selected leg is active in its one-event problem — no optimal parlay contains a singly inactive leg. Full m-leg parlay stake = ∏ s*_{ℓ,iℓ}; single on leg i of event ℓ gets s*_{ℓ,i}·∏_{r≠ℓ}c*_r.
- Whitrow asymptotics (Theorem 4.2): x^sim_j(ε) = x^ind_j(ε) − Λ_j α_j ε³ + O(ε⁴) = (1 − Λ_j ε²) x^ind_j(ε) + O(ε⁴), with Λ_j := Σ_{k≠j} a_k^T C_k^{−1} a_k — simultaneous singles stakes equal isolated Kelly through second order.
- Quartic value loss (Prop. 5.1): 0 ≤ V_par(ε) − V_sing(ε) = O(ε⁴).
- Binary cross-check vs Thorp's two-bet formula: f_1 = m_1(1−m_2²)/(1−m_1²m_2²), expanding to f_1 = m_1 − m_1 m_2² + O(ε⁵).

## Data sources named
None — pure theory with a two-1X2-soccer-match illustration.

## Findings (numbers and facts, not vibes)
- The singles-only restriction costs only O(ε⁴) growth — at small edges, essentially nothing (paper's Prop. 5.1).
- Simultaneous singles slates need only an event-specific cubic shrinkage (1 − Λ_jε²) vs naive isolated-Kelly stakes; no deeper re-optimization required.
- Active-leg criterion prunes menus: only legs active in their one-event problem can appear in an optimal ticket.
- Load-bearing assumptions: event independence (breaks for same-game parlays / correlated props), multiplicative parlay pricing (books shade), low-edge regime + fixed support (GSE's biggest edges are where the approximation is weakest).
- Improvement experiment (ledger author): extend the perturbation to block-diagonal correlation (correlated props within a game, independent across games) and test on same-game-heavy slates.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Quartic-loss result quantifies the cost of GSE's singles-first stance (negligible at small edges) — OTHER (sizing policy; also public-messaging backing).
- Active-leg criterion as a parlay-menu filter — OTHER (any parlay product's leg eligibility).
- Cubic shrinkage correction for simultaneous singles slates — OTHER (staking module refinement).
- Independence assumption breaks on correlated same-game props — TRUST-SIGNAL (the correction cannot be trusted blindly on correlated slates; flag as calibration-risk).

## Engine-actionable? (yes/no + one-line what)
yes — Implement the implicit-cash one-event Kelly solver, apply the Λ_j cubic-shrinkage correction to simultaneous singles slates (adopt if replay cuts max drawdown ≥10% vs naive isolated Kelly with bankroll within 2%), and use the active-leg criterion as the parlay-menu filter (the file's own spec and gate).
