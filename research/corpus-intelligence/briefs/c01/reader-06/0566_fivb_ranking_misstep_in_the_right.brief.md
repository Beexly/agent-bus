# arxiv-program/research/2026-09-21/arxiv-deep/0566-fivb-ranking-misstep-in-the-right.md
## What it is (1-2 sentences)
Full-paper brief of a statistical audit (Tenni, Gomes de Pinho Zanco & Szczecinski, arXiv:2408.01603) of the FIVB volleyball ranking: the authors derive the implicit loss its SGD update actually minimizes, then analytically and numerically optimize its parameters (numerical scores r, thresholds c, match-importance weights ξ, HFA η). Verdict: ADAPT — the real product is an evaluation methodology for rating algorithms; three verdicts transfer directly to GSE's Elo/SG updates: (1) hand-set "numerical scores" are suboptimal and fixable analytically; (2) match-importance weights are counterproductive; (3) adding HFA costs nothing and gains ~1% on home matches. Code: https://github.com/brbalab/FIVB.

## Key metrics/methods (formulas where given, else "not specified")
- Cumulative-link ordinal probit: Pr{Y_t=y|θ,x_t} = P_y(z_t), z_t = x_tᵀθ (+η h_t for home team); symmetric thresholds c^FIVB=(−1.06, −0.394, 0, 0.394, 1.06).
- FIVB update: θ_{t+1}=θ_t − μsξ_{v_t}x_t g^FIVB_{y_t}(z_t/s), μ=0.01, s=125; g^FIVB_y(z)=ř(z)−r^FIVB_y, r^FIVB={2.0,1.5,1.0,−1.0,−1.5,−2.0}.
- Implicit loss via integration: ℓ^FIVB_y(z)=Σ_{l=0}^{L−2}(r^FIVB_l−r^FIVB_{l+1})ψ(z+c^FIVB_l) + (r^FIVB_{L−1}−r^FIVB_y)z + Const, ψ(z)=Φ(z)z+𝒩(z) (Lemma 1: convex in z).
- Analytical scores: r̃_y(c)=r̃_0·Φ(c_0)(𝒩(c_y)−𝒩(c_{y−1}))/[𝒩(c_0)(Φ(c_y)−Φ(c_{y−1}))] → r̃=(2.0, 0.89, 0.25, −0.25, −0.89, −2.0) (monotonic, matches log-loss slope at z_0=0).
- Validation: leave-one-out cross-validation optimized with ALO; metrics U (all), U^ntr (neutral), U^hfa (home) averaged log-loss; V(p)=e^{−U(p)} geometric mean predicted outcome prob; real-time SG metrics Ū + average Spearman ρ̄ vs official ranking; ALO steepest-descent gradient via JAX/JAXopt automatic implicit differentiation.

## Data sources named
Men's national-team volleyball, 2021-01-01 through 2023-12: M=102 teams, T=1151 matches (761 neutral, 390 home-venue); outcome counts on neutral: 3-0:203.5 / 3-1:117.5 / 3-2:59.5 / 2-3:59.5 / 1-3:117.5 / 0-3:203.5; home: 3-0:135 / 3-1:64 / 3-2:29 / 2-3:33 / 1-3:45 / 0-3:84. Excluded: 67 matches with tiny increments {0,0.01}, 33 with 0.0 increments, forfeits.

## Findings (numbers and facts, not vibes)
- Re-optimized thresholds + HFA η≈0.2 improve home-match validation V from ≈25.8% to ≈26.8% (~1 percentage point); neutral matches unaffected.
- FIVB's numerical scores r^FIVB are inadequate: numerically optimized r̂ is non-monotonic (2.0, ≈0.9, ≈−0.1, ≈0.1, ≈−0.9, −2.0) — an artifact of fitting the implicit-loss shape, not a meaningful value of a 3-2 win; analytical r̃ is monotonic and performs identically to r̂, both negligibly worse than the true log-score. Suggested rounded values: r̃_1=1.0, r̃_2=0.25.
- Match-importance weights ξ^FIVB are detrimental to prediction; optimized weights end up near-equal (ξ̂_v∈(0.9,1.5) for γ<0.5).
- FIVB's μ=0.01 is 3–4× too small (cases with jointly optimized μ̂ reach 0.03–0.20); removing weights requires larger steps since weighting acts as a variable step size. Real-time SG best case F (true log-score, ξ≡1, η=0.2, μ̂=0.20): Ū 1.46/1.48/1.43 vs official case A Ū 1.52/1.51/1.53.
- V interpretation: U=1.4 → V≈24.7% vs uniform 16.7% (U=1.79) over 6 outcomes.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (rating-system methodology): the reverse-engineer-implicit-loss-then-optimize-against-proper-log-loss audit method is new capability for GSE's Elo/SG evaluation; verdicts directly checkable on GSE's own Elo (test playoff/prestige weights; check K step size; fit HFA η).
- COACHING (speculative): INFERENCE — an ordinal margin-of-victory model over margin buckets (win ≥14, 7–13, 1–6, tie, …) extracts blowout signal from binary outcomes and could serve as a coaching dominance/consistency indicator — the brief's suggested port, not a paper result.
- TRUST-SIGNAL: proper log-loss (ALO-LOO) as the audit objective enforces honest calibration-state evaluation of rating updates.

## Engine-actionable? (yes/no + one-line what)
Yes — run the paper's audit on GSE's Elo/SG: reverse-engineer its implicit loss, fit HFA η on 2015–2025 NFL (expect ~1% home-match gain), test whether playoff/prestige weights beat equal weights on held-out log-loss (verdict predicts they won't), and prototype an ordinal cumulative-link MOV model over margin buckets vs binary Elo; gates: equal weights beat current weights AND ordinal-MOV beats binary Elo on win-probability log-loss by ≥0.005 (season-blocked CV).
