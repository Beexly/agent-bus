# arxiv-program/research/2026-09-21/arxiv-deep/1632-general-framework-portfolio-theory-drawdown.md
## What it is (1-2 sentences)
A theory paper (Maier-Paape & Zhu 2017, arXiv:1710.04818) constructing four "admissible convex risk measures" (ACRM) from the expected log drawdown of portfolio returns inside the growth-optimal (Kelly / Ralph Vince optimal-f) framework. ADAPT verdict in the source: gives GSE a principled risk-constrained slate allocator balancing log-growth against drawdown.
## Key metrics/methods (formulas where given, else "not specified")
- TWR: TWR^K_1(ϕ,ω) := ∏_{j=1}^K (1 + ⟨t_{ωj}, ϕ⟩); fractional portions ϕ over M systems with trade-return matrix T (N scenarios × M systems).
- Geometric mean: Γ(ϕ) := ∏_{i=1}^N (1 + ⟨t_i, ϕ⟩)^{p_i}; E[Z^(K)(ϕ,·)] = K·ln Γ(ϕ) (Theorem 3.2) — the growth-optimal objective.
- Risk-measure orderings (eq. 6.1): r_down(ϕ) ≥ r_down^X(ϕ) ≥ 0; r_cur(ϕ) ≥ r_cur^X(ϕ) ≥ 0; r_cur(ϕ) ≥ r_down(ϕ); r_cur^X(ϕ) ≥ r_down^X(ϕ).
- Two down-trade ACRMs (r_down, r_down^X) and two current-drawdown ACRMs (r_cur, r_cur^X); the X-approximations are positively homogeneous, giving efficient portfolios an affine linear structure including a drawdown-risk "market portfolio".
## Data sources named
No external dataset — theory with worked examples and contour plots (one fixed two-system allocation example ϕ*=(1/5,1/5); Figure 7 empirical convergence of current-drawdown risk as K→∞).
## Findings (numbers and facts, not vibes)
- The four constructions are proven to satisfy the ACRM definition; ordering theorems established.
- K→∞ convergence of the risk measures is empirically illustrated (Figure 7) but explicitly UNPROVEN — stated open question.
- Part III (promised applications) appears never to have materialized per the source — treat applied claims cautiously.
- No numeric performance results and no code/data released; estimating the trade-return matrix T from GSE pick history carries the usual small-sample risk, and the framework assumes scenario probabilities p are known.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: bankroll-risk math — a drawdown-constrained efficient-frontier allocator (max E[log TWR] subject to r_cur^X(ϕ) ≤ budget) that maps to per-category Kelly-fraction caps; complements 1619's stake sizing with a risk side.
## Engine-actionable? (yes/no + one-line what)
Yes — treat bet categories as the M "trading systems", build T from per-category unit-stake pick returns, and solve the convex max-log-growth subject to the r_cur^X drawdown budget via Monte Carlo equity curves; accept only if replay cuts max drawdown ≥25% vs unconstrained category-Kelly while keeping ≥90% of bankroll (source's gate).
