# arxiv-program/research/2026-09-21/arxiv-deep/1200-analysis-of-kelly-optimal-portfolios.md
## What it is (1-2 sentences)
Deep read of Laureti, Medo & Zhang (2009, arXiv:0712.2771v3), an analytical finance paper on the Kelly-optimal portfolio for lognormally-distributed asset returns, including the "condensation" phenomenon (under-diversification) and whether the Kelly portfolio lies on Markowitz's Efficient Frontier. Verdict in file: ADAPT — the iterative pick-inclusion rule (eq. 13) and the inverse participation ratio concentration metric (eq. 15) are new to the corpus, but the lognormal formulas must be replaced with binary-outcome Kelly math before any sports use.

## Key metrics/methods (formulas where given, else "not specified")
- Model: p_i(t) = p_i(t−1)·e^{η_i(t)}, η_i ~ N(m_i, D_i), independent (eq. 1); returns R_i = e^{η_i}−1 lognormal with mean μ_i = exp(m_i+D_i/2)−1, variance σ_i² = (exp(D_i)−1)exp(2m_i+D_i).
- Kelly objective: maximize v = E[ln W₁], W₁ = 1 + Σq_iR_i (eq. 2); first-order conditions E[R_i/(1+Σq_jR_j)] = 0 (eq. 6).
- Small-D Taylor approximation (Appendix A, eqs. 19–21): E[g(η)] ≈ g(m) + D·g″(m)/2, applied to g(η) = (e^η−1)/[1+q(e^η−1)].
- One risky asset (verbatim): q̂ = 1/2 + m/D (eq. 7); invest nothing if m < −D/2 (m_<), everything if m > D/2 (m_>). First-order correction m(4m²−D²)/4D².
- Constrained (no short/borrow) N assets: q̂_i = 1/2 + (m_i + γ)/D_i, γ from Σq̂_j = 1 (eq. 9); iteratively drop any asset with q̂_i ≤ 0 and re-solve (eq. 13 form for equal volatility: include M assets where M is the largest with m_M + (1/M)Σᵢ₌₁ᴹ m_i > D/M).
- Kelly-on-EF theorem: for μ_i, σ_i → 0, the constrained Kelly portfolio satisfies the constrained Efficient Frontier: μ_K = (C̃₀C̃₂−C̃₁²+C̃₁)/C̃₀, σ²_K = (C̃₀C̃₂−C̃₁²+1)/C̃₀ with C̃_k = Σ(m_j+D_j/2)^k/D_j (eqs. 10–11).
- Two-asset condensation: invest fully in asset 1 when m′₁ = m₂ + (D₁+D₂)/2 (eq. 12); both assets held only for m″₁ < m₁ < m′₁ (Fig. 4 phase diagram).
- Many assets, equal volatility D, uniform m ∈ [a,b]: typical portfolio size M_T = √(2ND/(b−a)) (eq. 14, third branch); inverse participation ratio R = 1/Σq_i² ≈ 4M_T/3 (eq. 15); relative size M_T/N ∼ 1/√N → condensation in the large-N limit.
- Power-law tail f(m) = Cm^{−α−1}: condensation to a single asset when m̃₁−m̃₂ > D, with medians m̃₁ = m_min(Nr/ln2)^{1/α}, m̃₂ = m_min(Nr/1.68)^{1/α} (Sec. 2.4.2, Fig. 6).
- Logarithmic Efficient Frontier: minimize E[(lnW₁)²]−E[lnW₁]² s.t. E[lnW₁]=v_P, Σq_i=1 (eqs. 16–18); numerically ≈ classic EF.
- Correlated prices: Appendix B generalization via covariance matrix S, E[g(η)] ≈ g(m) + ½Tr(SV).
- Assumptions: investor knows true (m_i, D_i); lognormal returns; infinite divisibility; no dividends/costs/taxes; zero risk-free rate; no shorting/borrowing (forced by log-wealth being undefined on bankruptcy).

## Data sources named
No empirical data — analytical + numerical checks: direct maximization of E[ln W₁] (Fig. 2, D = 0.25 and 1.0); 10,000-repetition Monte Carlo for condensation size (Fig. 5); numerical simulation of P(m₁−m₂ > D) = 0.5 (Fig. 6); numerical Lagrangian optimization for the Logarithmic EF (Fig. 7). References ledgers 0813 (exact Kelly fractions for M simultaneous binary games) and 0171 (practical Kelly variants on real betting data) as corpus neighbors; competing formula q̂′ = μ/(μ²+σ²) from [13] is shown to err ~50% at D=0.25.

## Findings (numbers and facts, not vibes)
- Eq. 7 matches the numerical optimum across 2m/D ∈ [−1,1] for D = 0.25 and 1.0 (Fig. 2); relative error ≤3% at D=0.01.
- Uniform-m case (N=1000, D=0.01, x=−0.05): M_T follows Eq. 14; R ≈ 4M_T/3 matches numerics (Fig. 5, 10,000 reps).
- Power-law case (N=1000, r=0.1, m_min=0.1): α₁(D) curve — analytical vs simulation agreement (Fig. 6).
- LEF ≈ classic EF: "the difference between the traditional M-V approach and the modification proposed here is very small and does not justify the additional complexity" (Sec. 4).
- Condensation result: because Kelly forbids shorting/borrowing, the optimal portfolio can concentrate onto a few assets — under-diversification is a feature, not a bug, of constrained log-wealth maximization.
- Critical limitation: estimation error (the dominant real-world issue) is explicitly deferred to references [20, 23, 24]; the lognormal formulas do NOT apply to binary sports bets (the q̂=1/2+m/D form comes from the continuous-return expansion).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (OTHER — calibration/sizing program) The Kelly-consistent pick-inclusion rule is the actionable item: for each day's candidate pick set (model prob p_i, decimal odds o_i), compute binary-outcome Kelly fractions under a Σq≤1 constraint, iteratively drop the pick with the most-negative constrained fraction and re-solve (GSE analog of eq. 13's elimination loop) until all included picks have q̂_i > 0 — replacing ad-hoc "top-N picks" cutoffs with a Kelly-consistent selection. Serves the calibration/sizing lane.
- (OTHER — calibration/sizing program) The inverse participation ratio R = 1/Σq_i² as a concentration monitor on the posted card: flags days when the portfolio condensates to 1–2 picks (R ≈ 1), triggering the fractional-Kelly haircut from 0171's protocol. Directly serves the bankroll-risk and sizing program.
- (OTHER — Kelly lane, improvement direction) The Appendix B correlated-returns sketch extends to correlated binary bets (same-game / correlated legs): replace the diagonal-D assumption with an outcome-correlation matrix estimated from the engine's joint simulations, testing whether correlation-aware elimination further concentrates or diversifies the card vs the independent-bet version.
- CONTRADICTION/CAUTION: the paper's exact formulas (eq. 7, eq. 9, eq. 12) are for continuous lognormal returns and must NOT be ported verbatim to binary bets; ledger 0813's exact binary-outcome Kelly fractions are the correct base, with only the eq.-13 elimination logic and eq.-15 IPR metric transferred.

## Engine-actionable? (yes/no + one-line what)
Yes — add a post-processing module on the staking/sizing step: iteratively eliminate picks with non-positive constrained binary-Kelly fractions (eq.-13 analog) until all included picks have q̂_i > 0, and report the inverse participation ratio R = 1/Σq_i² as a concentration monitor; acceptance gate in file: adopt if 2024–2025 backtest matches baseline log-wealth with no-worse max drawdown, reject if <5% of days change the included set.
