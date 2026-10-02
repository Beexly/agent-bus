# arxiv-program/research/2026-09-21/arxiv-deep/1200-analysis-of-kelly-optimal-portfolios.md
## What it is (1-2 sentences)
"Analysis of Kelly-optimal portfolios" (Laureti, Medo, Zhang 2009, arXiv:0712.2771v3) derives approximate analytical Kelly fractions for lognormal-returns assets and characterizes when the constrained Kelly portfolio "condensates" onto a few assets, including an effective-portfolio-size metric. Ledger verdict: ADAPT — the iterative inclusion/elimination rule and inverse participation ratio are new to the corpus; the lognormal formulas must be replaced with binary-outcome Kelly math for sports.
## Key metrics/methods (formulas where given, else "not specified")
- Multiplicative model p_i(t) = p_i(t−1)·e^{η_i(t)}, η_i ~ N(m_i, D_i); Kelly maximizes v = E[ln W₁], W₁ = 1 + Σq_iR_i; first-order conditions E[R_i/(1+Σq_jR_j)] = 0.
- One asset: q̂ = 1/2 + m/D (eq. 7); invest nothing if m < −D/2, everything if m > D/2.
- Constrained N assets (no short/borrow): q̂_i = 1/2 + (m_i + γ)/D_i with Σq̂_j = 1; iteratively drop assets with q̂_i ≤ 0 and re-solve.
- Inclusion rule (equal volatility D): include M assets where M is largest with m_M + (1/M)Σᵢ₌₁ᴹ m_i > D/M (eq. 13).
- Effective portfolio size: inverse participation ratio R = 1/Σq_i² ≈ 4M_T/3 (eq. 15); uniform-m case typical size M_T = √(2ND/(b−a)); relative size M_T/N ∼ 1/√N → condensation in large-N limit.
- Two-asset condensation: invest fully in asset 1 when m′₁ = m₂ + (D₁+D₂)/2 (eq. 12).
- Lognormal-return setting ≠ sports betting: binary outcomes with fixed decimal odds have different Kelly math; eq. 7 does NOT apply to binary bets directly.
## Data sources named
None — analytical + numerical (brute-force E[ln W₁] maximization; 10,000-repetition Monte Carlo for condensation size; numerical Lagrangian optimization for the Logarithmic Efficient Frontier).
## Findings (numbers and facts, not vibes)
- Eq. 7 matches numerical optimum across 2m/D ∈ [−1,1] for D = 0.25 and 1.0; relative error ≤3% at D=0.01.
- M_T/N ∼ 1/√N: large portfolios condensate — the Kelly-optimal set shrinks relative to the universe as N grows.
- Logarithmic Efficient Frontier ≈ classic Efficient Frontier: "the difference between the traditional M-V approach and the modification proposed here is very small and does not justify the additional complexity."
- Competing formula q̂′ = μ/(μ²+σ²) errs ~50% at D=0.25 — a caution against closed-form shortcuts (echoes 1210/1220).
- Assumes known (m_i, D_i); estimation error explicitly deferred.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Pick-card construction: the iterative worst-asset elimination loop is a Kelly-consistent replacement for ad-hoc top-N pick cutoffs (OTHER — sizing/selection pipeline).
- TRUST-SIGNAL: the IPR (R = 1/Σq_i²) as a concentration monitor on the posted card — flags days the portfolio condensates to 1–2 picks (R ≈ 1), triggering a fractional-Kelly haircut.
## Engine-actionable? (yes/no + one-line what)
Yes — add a pick-inclusion rule to the sizing pipeline: compute constrained binary-Kelly fractions for the day's candidate set, iteratively drop the most-negative-fraction pick and re-solve until all q̂_i > 0, gated on ≥ baseline log-wealth with no worse max drawdown on a 2024–2025 backtest; report IPR on every posted card.
