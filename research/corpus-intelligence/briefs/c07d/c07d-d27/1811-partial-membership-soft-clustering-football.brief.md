# arxiv-program/research/2026-09-21/arxiv-deep/1811-partial-membership-soft-clustering-football.md
## What it is (1-2 sentences)
A Bayesian partial-membership (PM) model for soft-clustering multivariate football player count data — each player gets a fractional membership vector across K role profiles (multiplicatively compounded Poisson rates), recovering true archetypes where mixed-membership and finite-mixture alternatives fail — with WAIC-based model selection validated at 99/100 in simulation.

## Key metrics/methods (formulas where given, else "not specified")
- Likelihood (verbatim): `p(xᵢ|πᵢ, Λ) = Πⱼ Poisson(xᵢⱼ; Πₖ λₖⱼ^{πᵢₖ})`; `πᵢ ~ Dirichlet(δ)`, `δ = 1` (uniform) selected to promote archetypal units while keeping K manageable; `λₖⱼ ~ Gamma` priors.
- Each count variable j for player i follows Poisson with rate = multiplicative compounding of cluster profiles by membership weights: `Πₖ λₖⱼ^{πᵢₖ}`.
- Inference via MCMC in NIMBLE; label switching handled post hoc by probabilistic relabeling (`label.switching` R package); identifiability anchored by archetypal units (players with max membership ≈ 1).
- Model selection by marginalized WAIC (WAICm): simulation shows WAICm picks true K in 99/100 runs vs 79/100 for conditional WAIC (WAICc) — 20-point gap.
- Compared: PM (K = 2..8) vs mixed-membership MM (K = 2..8) vs finite mixture (K = 2..8) under the same Bayesian/MCMC protocol.

## Data sources named
- 200 Serie A players, >1,720 minutes, 2022/23 season (fbref data); 22 count variables (goals, assists, progressive carries, shots, key passes, crosses into penalty area, SCA/GCA variants, tackles, blocks, interceptions, clearances, take-ons). Appendix A: Washington DC bike-share station counts (660 stations, June 15–July 15 2022).

## Findings (numbers and facts, not vibes)
- Simulation (100 runs, true K = 4, n = 100): WAICm picks true K in 99/100; WAICc in 79/100.
- Selected K on Serie A: PM = 4 profiles, MM = 5, mixture = 6.
- PM profiles (Poisson means): Profile 1 = strikers (Gls 20.91, Sh 111.62, SCA 99.73); Profile 2 = full-backs/dynamic midfielders (PrgC 103.65, Tkl 89.44); Profile 3 = center-backs (Clr 133.32); Profile 4 = goalkeepers.
- Archetypes (max membership ≈ 1.0): Osimhen (Profile 1), Rogério (Profile 2), Luperto (Profile 3), Meret (Profile 4). Hybrids: Dybala, Mkhitaryan, Barella (profiles 1+2); Brozović (2+1+3).
- MM's highest memberships only reached 0.565–0.686 (no true archetypes recovered); the finite mixture blended roles within components (less interpretable).
- Runtimes, K = 2..8 sweep, MacBook Air (M3, 16GB): PM 10.6 h, MM 14.7 h, mixture 7.3 h.
- δ = 1 Dirichlet selected to promote archetypal units while keeping K manageable.
- Limitations: independent-Poisson assumption ignores within-cluster covariance; no overdispersion/zero-inflation modeled (negative-binomial/zero-inflated left to future work); 10.6 h runtime expensive for production refresh; membership season-static (no temporal dynamics); Poisson-mixture WAIC on different scales across model classes → cross-class WAIC comparison informal.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER — PLAYER REPRESENTATION / HYBRID ROLES]: GSE's soft role-membership mechanism. Mechanism: NFL hybrid-role players (big-slot WR = part-WR/part-TE, pass-catching RB, TE-heavy formations, gadget players) carry FRACTIONAL role memberships πᵢ (Dirichlet(1), archetype-anchored) instead of a single position label; per-player membership vectors become features for projection models, profile rate vectors become role priors for low-sample players. Complements ledger 1808 (hard role clusters) and 1807 (continuous embeddings): PM gives interpretable fractional roles with archetype anchors (archetype = max membership > 0.9). Serves the QB-behavioral-profiles-adjacent player-archetype program and DFS projection features.
- [SCHEME]: INFERENCE — profile rate vectors (e.g., Profile 2's PrgC 103.65 / Tkl 89.44 pattern) are scheme-usage fingerprints; the same machinery on NFL alignment/snap data yields scheme-role archetypes (e.g., every-down LB vs pass-rush specialist vs box safety), which feed matchup adjustments. Serves the coaching/scheme lane.
- [OTHER — TRUST-SIGNAL / MATCHUP INTAKE]: INFERENCE — archetypal units (players with ≈1.0 membership) are natural calibration anchors and matchup-intake exemplars: a CB matched on an Osimhen-analog (pure archetype) is a cleaner matchup signal than on a hybrid, so the trust-target intake can weight archetype purity.
- UNCERTAIN: WAICm's 99/100 correct-K recovery is on the paper's own simulation (true K = 4, n = 100, well-separated profiles) — real NFL count data with overdispersion may not recover K as cleanly; the improvement experiment (negative-binomial layer + temporal random-walk prior on πᵢ, success = WAICm improvement ≥2% with same 4 archetypes, runtime ≤12 h) is the honest path.
- Referenced: arXiv:2409.01874 (Seri, Rocci, Murphy); Heller et al. 2008 (PM model); NIMBLE; `label.switching` R package; fbref; Capital Bikeshare; ledgers 1807 (continuous embeddings), 1808 (hard role clusters).

## Engine-actionable? (yes/no + one-line what)
Yes (ADAPT, not ADOPT — 10.6 h runtime, no overdispersion handling) — fit Dirichlet(1) partial-membership model on GSE NFL per-player count stats (targets, carries, routes, snaps-by-alignment) with K selected by marginalized WAIC; output per-player membership vectors as projection-model features and role-rate profiles as low-sample priors, anchored by archetypal players (max membership > 0.9), with seasonal refresh + lightweight intra-season πᵢ updates.
