# docs/arxiv-program/research/2026-09-21/arxiv-deep/1658-bivariate-poisson-home-advantage-covid.md
## What it is (1-2 sentences)
Deep-read ledger of Benz & Lopez (arXiv:2012.14949): Bayesian bivariate-Poisson regression estimating per-league home advantage in soccer across the Covid "ghost games" natural experiment, with a 1,800-simulated-season study showing bivariate Poisson cuts home-advantage bias ~85% vs linear regression. Verdict in the file: ADAPT — directly portable to GSE's NFL score models and home-field estimation.

## Key metrics/methods (formulas where given, else "not specified")
- (Y_H, Y_A) ~ BP(λ_1, λ_2, λ_3); log λ_1 = μ_ks + T_k·I_pre + T'_k·I_post + α_H + δ_A (home attack + away defense + home-advantage term); log λ_2 = μ_ks + α_A + δ_H; log λ_3 = γ_k (constant covariance). Team attack/defense strengths are seasonal random effects centered at 0. λ_3=0 (independence) variant used since observed goal correlation was −0.16..0.07.
- Priors: μ_ks ~ N(0,25); α,δ,τ ~ N(0,σ²), σ ~ Inverse-Gamma(1,1); T_k, T'_k ~ N(0,25). MCMC: 3 chains × 7,000 (2,000 burn-in) for λ_3=0; 3 × 20,000 (10,000 burn-in) for λ_3>0; R̂ 0.9998–1.003.
- Validation: simulation study (1,800 seasons: 100 per cell × 18 cells, ρ* ∈ {−0.8,−0.4,0}, T* ∈ {0,0.25,0.5}) comparing bivariate Poisson vs linear regression vs paired comparison on mean absolute bias of home advantage; real data: posterior P(T'_k < T_k) per league.

## Data sources named
17 professional soccer leagues, 13 European countries, 5 seasons 2015–2020, scraped from Football Reference 2020-10-28. E.g., Bundesliga 1,448 pre / 82 post games; English Championship 2,673/113; Serie A 1,776/124. Code: https://github.com/lbenz730/soccer_ha_covid.

## Findings (numbers and facts, not vibes)
- Simulation MAB (goal-difference scale): bivariate Poisson 0.051–0.084 across all cells; linear regression 0.382–0.549 (~6× larger bias; ~85% bias reduction); paired comparison 0.059–0.094 (close to BP).
- Real data posterior means (log scale): Austrian Bundesliga 0.161 → −0.202 (−225.7%, P(decline)=0.999); German Bundesliga 0.239 → −0.024 (−110.2%, 0.995); Greek Super League 0.409 → 0.167 (−59.3%, 0.972); Spanish La Liga 0.306 → 0.149 (−51.3%, 0.959); English Championship 0.234 → 0.114 (P=0.912). Six leagues showed HA increases (Swiss Super League 0.180 → 0.362, +101.1%, P(decline)=0.043; Serie A 0.204 → 0.292, P=0.125).
- P(decline) > 0.9 in 7/17 leagues, > 0.5 in 11/17 — "mixed" verdict vs pooled literature's uniform-drop finding.
- Pre-Covid HA heterogeneity: Greek Super League 0.409 vs Austrian Bundesliga 0.161 (2.5×) — justifies league-specific (or team-specific) estimation.
- File's gate for GSE: simulation replication MAB(T̂) ≤ 0.10 with ≥50% bias reduction vs linear regression AND 2020-season holdout predictive log-likelihood beating GSE's current score model by ≥ 0.01 nats/game.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: score-distribution modeling / home-field estimation machinery (no football-behavior content).
- TRUST-SIGNAL (secondary): the posterior P(decline) probabilistic-decline statement format is a trust-grade way to report home-field regime changes.

## Engine-actionable? (yes/no + one-line what)
yes — build a per-season NFL bivariate-Poisson home-advantage module (home/away points ~ BP with season HA term T_s + attack/defense random effects, fit in numpyro/Stan), using posterior attack/defense strengths as features for spread/total models; run the 2020 COVID season as the natural-experiment replication.
