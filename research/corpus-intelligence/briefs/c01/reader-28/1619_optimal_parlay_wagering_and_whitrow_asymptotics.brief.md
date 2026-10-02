# arxiv-program/research/2026-09-21/arxiv-deep/1619-optimal-parlay-wagering-and-whitrow-asymptotics.md
## What it is (1-2 sentences)
A pure-theory arXiv note (Long 2026, arXiv:2603.26620) deriving the exact Kelly-optimal stake for every ticket in a multi-event parlay menu, and the asymptotics of what is lost when parlays are banned (Whitrow's 2007 phenomenon). ADAPT verdict in the source: the exact parlay-Kelly factorization and cubic Whitrow shrinkage give GSE a rigorous simultaneous-bet sizing framework.
## Key metrics/methods (formulas where given, else "not specified")
- Single-event implicit-cash Kelly: s_i^* = (p_i − c^*π_i)_+, W_i^* = max(c^*, p_i/π_i); c^* = (1−P_A)/(1−Q_A); active set is a prefix after sorting by edge ratio p_i/π_i descending; overround Σπ_i > 1 guarantees positive cash and ≥1 inactive outcome.
- Exact parlay factorization: x_γ^* = ∏_{ℓ:γ_ℓ=0} c_ℓ^* ∏_{ℓ:γ_ℓ≠0} s_{ℓ,γ_ℓ}^*; full m-leg parlay stake x_{i_1,…,i_m}^* = ∏_ℓ s_{ℓ,i_ℓ}^*; growth V_par = Σ_ℓ E[log F_ℓ(I_ℓ)].
- Active-ticket criterion (Cor. 3.2): a ticket is active iff every selected leg is active in its one-event Kelly problem.
- Whitrow asymptotics (Thm. 4.2): x_j^sim(ε) = (1 − Λ_jε²)x_j^ind(ε) + O(ε⁴), with Λ_j = Σ_{k≠j} a_k^T C_k^{−1}a_k (cubic shrinkage of simultaneous-singles stakes vs. isolated Kelly).
- Quartic value loss (Prop. 5.1): 0 ≤ V_par(ε) − V_sing(ε) = O(ε⁴); binary check matches Thorp's two-bet formula to O(ε⁵).
## Data sources named
None — pure theory; closed-form binary check against Thorp's two-bet formula. No empirical dataset.
## Findings (numbers and facts, not vibes)
- The m-event parlay menu decouples exactly into the outer product of one-event Kelly strategies under multiplicative pricing (recovers Grant–Johnstone–Kwon log-utility equivalence transparently).
- Simultaneous singles agree with isolated Kelly through second order; first interaction is a cubic, event-specific scalar shrinkage (1 − Λ_jε²).
- Banning parlays costs only O(ε⁴) in log-growth — at realistic edges ε ~ 0.02–0.05 the sacrificed growth is ~10⁻⁶–10⁻⁵ per unit, i.e., nothing (INFERENCE: the arithmetic is stated in the source's implementation spec).
- Binary exact solution: f_1 = m_1(1−m_2²)/(1−m_1²m_2²), f_2 = m_2(1−m_1²)/(1−m_1²m_2²); expands to m_1 − m_1m_2² + O(ε⁵), matching the cubic law.
- Load-bearing limitation: independence assumed; correlated legs (same-game parlays, correlated props) break the factorization — precisely the parlays books misprice most. Multiplicative parlay pricing also assumed; real books shade parlay prices worse.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: wager/bankroll sizing math — canonical simultaneous-slate Kelly sizer with exact cubic shrinkage correction, replacing ad-hoc "divide Kelly by number of picks" rules.
- OTHER: content/stance math — quantitative (theorem-level) backing for GSE's "play singles, not whalelays" editorial line; O(ε⁴) result citable in content.
## Engine-actionable? (yes/no + one-line what)
Yes — implement implicit-cash Kelly s_i^* with active-set prefix sort plus Whitrow shrinkage (1 − Λ_jε²) as GSE's canonical simultaneous-slate sizer, and enforce the active-leg gate (Cor. 3.2) as a hard filter on any parlay-adjacent content.
