# arxiv-program/research/2026-09-21/arxiv-deep/1811-partial-membership-soft-clustering-football.md
## What it is (1-2 sentences)
A ledger on Seri, Rocci & Murphy (arXiv:2409.01874): a Bayesian partial-membership (PM) model for count data that gives football players interpretable fractional role assignments (a playmaker can be part-midfielder, part-attacker — distinct from uncertainty about a single role), beating mixed-membership and finite-mixture alternatives on Serie A data.
## Key metrics/methods (formulas where given, else "not specified")
- Likelihood: p(xᵢ|πᵢ, Λ) = Πⱼ Poisson(xᵢⱼ; Πₖ λₖⱼ^{πᵢₖ}); πᵢ ~ Dirichlet(δ), δ = 1 (uniform, promotes archetypal units).
- Inference: MCMC in NIMBLE; label switching handled by probabilistic relabeling (`label.switching`); identifiability anchored by archetypal units (max membership ≈ 1).
- Model selection by marginalized WAIC (WAICm): simulation shows it picks true K in 99/100 runs vs 79/100 for conditional WAIC.
## Data sources named
200 Serie A players with >1,720 minutes, 2022/23 season (fbref); 22 count variables (goals, assists, progressive carries, shots, key passes, crosses into penalty area, SCA/GCA variants, tackles, blocks, interceptions, clearances, take-ons). Appendix: DC bike-share counts (660 stations).
## Findings (numbers and facts, not vibes)
- Simulation: WAICm recovers true K=4 in 99/100 runs; WAICc in 79/100.
- Selected K: PM = 4 profiles, MM = 5, mixture = 6. PM profiles: strikers (Gls 20.91, Sh 111.62, SCA 99.73); full-backs/dynamic mids (PrgC 103.65, Tkl 89.44); center-backs (Clr 133.32); goalkeepers.
- Archetypes: Osimhen (profile 1, ≈1.0), Rogério, Luperto, Meret; hybrids Dybala/Mkhitaryan/Barella (1+2), Brozović (2+1+3). Mixed-membership maxed at 0.565–0.686 membership (no true archetypes); mixture blended roles.
- Runtimes (K=2..8, MacBook Air M3 16GB): PM 10.6h, MM 14.7h, mixture 7.3h.
- Limitations: independent-Poisson (no covariance, no overdispersion/zero-inflation), 10.6h runtime, season-static memberships, cross-class WAIC comparison informal.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Fractional role memberships for hybrid NFL roles (big-slot WR part-WR/part-TE, pass-catching RB) instead of single position labels — feeds projection features and matchup adjustments (SCHEME)
- Archetype-anchored interpretability: anchor each role profile to a real archetypal player for label stability (OTHER — modeling)
- Marginalized WAIC over conditional WAIC for selecting the number of profiles (OTHER — model selection)
## Engine-actionable? (yes/no + one-line what)
yes — Fit PM-style Dirichlet×Poisson soft role clustering on NFL per-player count stats (targets, carries, routes, snaps by alignment) to produce fractional role-membership features for projection models, archetype-anchored; ADAPT not ADOPT (10.6h runtime, no overdispersion handling yet).
