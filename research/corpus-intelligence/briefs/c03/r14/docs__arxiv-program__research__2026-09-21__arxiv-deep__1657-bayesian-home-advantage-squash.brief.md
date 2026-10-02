# docs/arxiv-program/research/2026-09-21/arxiv-deep/1657-bayesian-home-advantage-squash.md
## What it is (1-2 sentences)
Deep read of Greengard & Takriti (2025), arXiv:2506.09287 — a Bayesian hierarchical analysis of home advantage in professional squash (PSA World Tour 2018–2024), with a global home intercept plus country-specific home intercepts (Egypt, England, USA), ranked as an ADAPT for GSE's venue-specific home-field modeling.
## Key metrics/methods (formulas where given, else "not specified")
- Model (1): y ~ Normal(a_rank1 − a_rank2 + h·b, σ_y); h ~ Normal(0, 0.5); σ_y, σ_a ~ Normal⁺(0,2); β, γ ~ Normal(0,1); top-ranked ability fixed at 0 (identification); y = margin of victory in games (−3..−1, 1..3).
- Ability prior: a_j ~ Normal(β(j−1) + γ√(j−1), σ_a) — linear + square-root rank trend for diminishing ability gaps at worse ranks.
- Model (2): adds country-specific home intercepts on global h; h_country ~ Normal(0, 0.2); best-of-3 margins multiplied by 1.5 to best-of-5 scale.
- MCMC in Stan; posterior predictive checks (68% predictive intervals vs actual margins); SEs from posteriors.
- GSE port specified in file: discrete-outcome likelihood (ordered logit on margin buckets or Poisson score model) replacing the Normal approximation; direct team-ability parameters replacing rank-slot proxies.
## Data sources named
squashinfo.com data (provided to authors; public site); PSA World Tour Dec 2018–Mar 2024 (methods text: Nov 2018–Feb 2024); Bronze/Silver/Gold/Platinum + World Championships + World Tour Finals; retirements/walkovers excluded; top-30 players only; separate men's/women's models. Stan code in paper Appendix A; no GitHub repo.
## Findings (numbers and facts, not vibes)
- Global home advantage: +0.40 games (men), +0.30 games (women); SE ≈ 0.10 both.
- For evenly matched players: home win prob ≈ 58% men, 56% women — Φ(0.4/1.9) = 0.58, Φ(0.3/1.8) = 0.56.
- Country model: Egypt men 0.45 (SE ~0.10); Egypt women ~0.35; USA women ~0.35; England smaller with large SEs; USA men excluded (n=1 home match).
- Mean ability gap between adjacent top-20 ranks ≈ 0.15 games — home advantage (0.3–0.4) worth ~2–3 ranking slots.
- Sample counts by venue: Egypt 348 women / 329 men matches (181/177 with home advantage); USA 419/426 (118/1); England 128/252 (36/43); other 113/333 (16/22).
- Model artifact: estimated #4 man stronger than #3 (attributed to Mostafa Asal's suspensions depressing his ranking — rank-proxy ability flaw).
- COVID empty-crowd matches retained — attenuates the crowd mechanism claimed.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Hierarchical country/venue-specific home intercepts with shrinkage priors extend GSE's constant-home-field rating stack (Elo/Glicko/TrueSkill, Dixon–Coles): OTHER — venue/home-field estimation on the rating stack.
- Home advantage ≈ 2–3 ranking slots in magnitude: OTHER — scaling intuition for how much venue-specific home effects can move NFL spread pricing.
## Engine-actionable? (yes/no + one-line what)
Yes — build `gse.ratings.HierarchicalHomeField`: Bayesian hierarchical model with direct team abilities, global home intercept + team/venue-specific home deviations with Normal(0,τ) shrinkage, ordered-logit margin likelihood; fit on NFL 2000–2024 and test Denver altitude / dome / cold-weather / international splits plus 2020 empty-stadium crowd validation; gate = ≥0.004 log-loss gain on 2022–2024 holdout AND ≥3 teams with |home deviation| > 2× posterior SD.
