# arxiv-deep/1446-ranking-by-points-and-ordinal-models.md
## What it is (1-2 sentences)
Deep read of Szczecinski (2026), arXiv:2608.23859: a theoretical paper on when ranking teams by accumulated points equals ranking by fitted skill under an adjacent-categories (AC) multinomial logistic model. Verdict in file: ADAPT — build the AC ordinal model as GSE's discrete-outcome rating engine and audit points-style aggregations with its sufficiency test.
## Key metrics/methods (formulas where given, else "not specified")
- AC model: P_y^h(z) = exp(α_y^h + δ_y z)/Σ_l exp(α_l^h + δ_l z); home-boost P_y^h(z) = P_y(z+η).
- **Lemma 1 (sufficiency):** score s_i = Σ_y ξ_y k_{y;i} is sufficient for skill ⟺ (i) constant-sum score-points ξ_y + ξ_{L−1−y} = 1, AND (ii) AC model with slopes δ_y = ξ_y.
- MAP estimation with Gaussian prior precision γ via EM marginal likelihood (skills integrated out, Gauss–Hermite quadrature); estimating equation (18)/(20): Σ_{j≠i}[k_{i,j} G̃(θ̂_i−θ̂_j) + d_{i,j} Ğ(θ̂_i−θ̂_j)] + γ θ̂_i = s_i.
- **Proposition 1:** for schedule-equivalent + venue-balanced team pairs, s_i ≥ s_j ⟺ θ̂_i ≥ θ̂_j; Corollary 1: on a venue-balanced round-robin, point counting = MAP skill ranking = Elo ordering (order-invariant to intercepts, η, prior — Corollary 2).
## Data sources named
Nine leagues: Division 1 England 1950–1991, EPL 1992–2025, Championship 1993–2025, Bundesliga 1965–2025, NHL 2005–2025, SHL 1999–2003 & 2010–2025, SuperLega Italy 2009–2024. League records (described, not linked). Excluded: COVID seasons 2019/20–2020/21, NHL 2012/13 lockout, pre-2005 NHL draws, 2004/05–2009/10 SHL draws.
## Findings (numbers and facts, not vibes)
- Constant-sum test: football (0-1-3) FAILS; NHL (0-1-2-2) FAILS; SHL (0-1-2-3) passes; for L=3, sufficiency forces draw = half a win (0-1-2).
- Fitted home advantages η̂: Division 1 2pt-era 0.80±0.02; EPL 0.58±0.02; Championship 0.51±0.02; Bundesliga 1.13±0.03 (2pt) / 0.56±0.03 (3pt); NHL 0.23±0.02; SHL 0.42±0.03; SuperLega 0.64±0.08. Free slopes: NHL δ̂_1 = 0.38±0.02 (≈1/3); SuperLega δ̂_1 = 0.20±0.02, δ̂_2 = 0.40±0.02.
- Proposition 1 holds empirically: no schedule-equivalent pair reordered (719 pairs NHL+SHL); where equivalence fails, ≤3.2% pairs reordered (NHL 2005–07: 42/1298; 2021–25: 25/2476 = 1.0%); reorderings cluster at similar scores (median 0.4 pts apart vs 7.0 overall).
- Uniform rule (ξ_y = y) beats each league's own rule everywhere they differ: NHL own 0.907 → uniform 0.965 (fitted 0.968); SuperLega own 0.963 → uniform 0.993; EPL/Championship own 0.952–0.965 → uniform 1. Fitted slopes add ≤0.01 beyond uniform.
- NHL is binary (L=2) → reduces to Bradley–Terry; NFL's unbalanced 17-game schedule means Proposition 1 fails league-wide — a principled argument for model-based ratings over standings.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER:** principled justification for model-based NFL team ratings over standings (NFL schedule violates Proposition 1's conditions).
- **TRUST-SIGNAL:** Lemma 1's constant-sum check is an audit for GSE's power-score/composite aggregations — do our ad-hoc point sums satisfy sufficiency, or are we ranking by a non-sufficient statistic?
- **OTHER:** AC model as discrete-outcome head for spread engine — P(cover/push/no-cover) from one fitted model; uniform-rule recommendation (fitted slopes cluster near uniform) simplifies deployment.
## Engine-actionable? (yes/no + one-line what)
**Yes** — implement the AC ordinal model as the cover/push/no-cover head for the spread/total pick engine with ξ_y = y uniform slopes (negligible loss, zero estimation), plus a schedule-equivalence reorder-rate audit quantifying "why standings lie" in NFL.
