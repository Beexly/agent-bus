# docs/arxiv-program/research/2026-09-21/arxiv-deep/1634-optimal-parlay-wagering-whitrow-asymptotics.md
## What it is (1-2 sentences)
Deep read of Long (2026), arXiv:2603.26620v1 — the exact Kelly-optimal ticket book over the full parlay menu (singles, doubles, triples, …) via outer-product construction, plus Whitrow asymptotics quantifying how little growth GSE's singles-only policy costs.
## Key metrics/methods (formulas where given, else "not specified")
- Single-event implicit-cash solver (Prop. 2.1): s*_i = (p_i − c*π_i)_+; W*_i = max(c*, p_i/π_i); KKT: E[1/W*(I)]=1; cash c* = (1−P_A)/(1−Q_A) on the active prefix.
- Exact parlay formula (Thm 3.1): x*_γ = ∏_{ℓ:γℓ=0} c*_ℓ · ∏_{ℓ:γℓ≠0} s*_{ℓ,γℓ}; terminal wealth factorizes W_x*(I) = ∏ F_ℓ(I_ℓ); V_par = Σ E[log F_ℓ(I_ℓ)].
- Active-ticket criterion (Cor. 3.2): a ticket is active iff every selected leg is active in its one-event problem — no optimal parlay contains a singly inactive leg. Single on leg i of event ℓ gets s*_{ℓ,i}·∏_{r≠ℓ}c*_r.
- Whitrow asymptotics (Thm 4.2): x^sim_j(ε) = x^ind_j(ε) − Λ_j α_j ε³ + O(ε⁴) = (1 − Λ_j ε²) x^ind_j(ε) + O(ε⁴), Λ_j := Σ_{k≠j} a_k^T C_k^{−1} a_k — simultaneous singles = isolated Kelly stakes through second order with only event-specific cubic shrinkage.
- Quartic value loss (Prop. 5.1): 0 ≤ V_par(ε) − V_sing(ε) = O(ε⁴).
- Binary check vs Thorp: f_1 = m_1(1−m_2²)/(1−m_1²m_2²), f_2 = m_2(1−m_2²)/(1−m_1²m_2²).
## Data sources named
None — pure theory (7 content pages) with a worked two-1X2-soccer-match example and an exact binary check against Thorp's two-bet formula. No code stated.
## Findings (numbers and facts, not vibes)
- Exact factorization of the full ticket book as outer product of one-event strategies; a parlay ticket's stake = product of per-event stakes (e.g., HH = h_1·h_2; single on home in match 1 = h_1·c_2; pure cash = c_1·c_2).
- Singles-only restriction costs only QUARTIC growth (O(ε⁴)) — essentially nothing at small edges.
- Simultaneous singles stakes need only a cubic, event-specific shrinkage correction (1 − Λ_j ε²) vs naive isolated-Kelly summed stakes.
- Independence across events is load-bearing — correlated legs (same-game parlays, correlated props) break the factorization; multiplicative parlay pricing assumed; the perturbative results need the low-edge regime, which is exactly where GSE's biggest edges don't sit.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Quartic-loss result quantifies GSE's singles-first stance ("play singles like a responsible adult"): OTHER — messaging/copy backing for the brand parlay stance.
- Active-leg criterion as a parlay-menu filter (only legs active in their one-event problem may appear): OTHER — staking/product rule for any future parlay product.
- Cubic shrinkage correction for simultaneous singles slates: OTHER — staking correction.
## Engine-actionable? (yes/no + one-line what)
Yes — implement the closed-form one-event implicit-cash Kelly solver and apply the (1−Λ_jε²) shrinkage correction to simultaneous singles slates; use the active-leg criterion to prune any parlay menu; acceptance gate = ≥10% max-drawdown cut vs naive isolated-Kelly with final bankroll within 2% on the 2025–2026 replay.
