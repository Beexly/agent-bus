# arxiv-program/research/2026-09-21/arxiv-deep/0982-sbm-competitive-balance-epl.md
## What it is (1-2 sentences)
Full-paper deep read (ledger 0982, arXiv 2107.08732v1, Gorgi/Masefield/McDaid/Friel 2021) of a Bayesian stochastic block model (SBM) that infers the number of competitive tiers K and per-team tier membership from 42 seasons of English top-flight 1X2 results — a fully probabilistic competitive-balance model rather than univariate balance indices.

## Key metrics/methods (formulas where given, else "not specified")
- Collapsed posterior (eq. 8): π(z,K|y) ∝ ∏_{k=1}^{K}∏_{l=1}^{K} [ Γ(3) ∏_ω Γ(N_kl^ω+1) / Γ(Σ_ω(N_kl^ω+1)) ] · ∏_{k=1}^{K} Γ(n_k+1) · Γ(K)/Γ(N+K) · 1/K!, where N_kl^ω counts outcome-ω games with home team in block k vs away in block l, n_k = block-k team count.
- Marginal top-block membership (eq. 17): π(z_i=1|y) = Σ_k π(z_i=1|y,K=k)π(K=k|y); team joins "strongest block" when > 0.5.
- Priors: Dirichlet(1,1,1) uniform on each block-interaction pmf; Dirichlet(1,...,1) on allocation weights θ; K ~ zero-truncated Poisson(λ=1), π(K)=1/(K!(e−1)), K ∈ 1..K_max (1/K! cancels label-switching permutations); z_i|θ iid Multi(1,θ).
- MCMC: collapsed allocation sampler with three move types — MK (insert/remove empty cluster, changes K only), M-GS (Gibbs update of all allocations, fixed K), AE (absorb/eject cluster, changes both); fixed-dimension z avoids reversible-jump MCMC; label switching handled post-hoc by ordering block 1 as strongest.
- Comparators: Herfindahl–Hirschman index of competitive balance (HHICB) and relative-entropy statistic Σ_i p_i log(p_i)/log(1/n), p_i = points share (max 1 at perfect balance).

## Data sources named
- 42 seasons of English top-flight results (1978/79–2019/20), N×N results matrix per season with y_ij ∈ {1,2,3} = {home win, draw, home loss}; N=20 → 380 fixtures/season; N=22 (pre-1995) → 462; ≈16,400 match outcomes total.
- R code + datasets: https://github.com/basins95/Football_SBM.
- Cited: Manasis/Ntzoufras/Reade 1507.00634 (ledger 0980), Dixon–Coles 1997, Karlis–Ntzoufras 2003.

## Findings (numbers and facts, not vibes)
- Since 2003/04, posterior P(K=2) > 0.85 in almost every season; in the first half of the study, K=1 vs K=2 often near-equal (e.g. 84/85: 42.34 vs 57.22; 90/91: 49.31 vs 50.07; 95/96: 48.05 vs 51.68).
- Notable exceptions: 15/16 (Leicester title season) K=1 support 75.37; 84/85 K=2 was a pathological single-team split (Stoke, 3 wins in 42 games). Three-block support negligible except modest post-2003 bumps (03/04: 5.12, 07/08: 5.92, 09/10: 4.67).
- 2018/19 worked example: K=2 at 97.94%; top block = the big six (Man City, Liverpool, Chelsea, Spurs, Arsenal, Man Utd); Tottenham (3rd in table) had LOWER top-block membership (0.80) than Arsenal (0.89) and Man Utd (0.84) — consistent with head-to-head records (Arsenal 2W 2D vs both; Spurs 1W 1D 2L vs both).
- Big-six emergence: from 2009/10 (Abu Dhabi takeover season) Man City and Spurs ever-present in top block; Arsenal/Chelsea/Man Utd ever-present apart from 2019/20; Liverpool absent 5 of 20 seasons. 2019/20 top block = only Liverpool + Man City (Liverpool 99 points; 3rd-placed Man Utd at 66).
- Structural break: 1978/79–2003/04 top block contained > half the league (11–22 teams) in 20 of 25 seasons; from 2003/04 on, only 2–7 teams in 15 of 17 seasons.
- SBM agrees with classical indices (lower HHICB / higher relative entropy ↔ high P(K=1)) but adds latent structure.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: competitive-balance/season-structure analytics — top-block membership posterior is a purer latent-strength measure than table position (the 2018/19 Arsenal/Spurs case); structural-break detection (~2003 EPL) transfers to parity analysis across any league format.
- TRUST-SIGNAL: posterior P(K) and membership probabilities are calibrated probabilistic outputs usable as priors/regularizers in a prediction stack.

## Engine-actionable? (yes/no + one-line what)
Yes — build a seasonal "league tier engine": fit collapsed SBM on the 1X2 results matrix per completed season, output P(K) + per-team top-block membership; use as contextual prior for pre-season ratings shrinkage and mid-season matchup regime labels.
