# docs/arxiv-program/research/2026-09-21/arxiv-deep/1657-bayesian-home-advantage-squash.md
## What it is (1-2 sentences)
Deep read of Greengard & Takriti (arXiv:2506.09287): a Bayesian hierarchical linear model estimating home-country advantage in professional squash (PSA World Tour 2018–2024) using margin-of-victory in games. Verdict ADAPT — the hierarchical ability + home-intercept model with shrinkage priors is a template for GSE venue-specific home-field estimation.
## Key metrics/methods (formulas where given, else "not specified")
- Model (1): y ~ Normal(a_rank1 − a_rank2 + h·b, σ_y), b ∈ {−1,0,1} home indicator; h ~ Normal(0, 0.5); σ_y, σ_a ~ Normal⁺(0,2); ability prior a_j ~ Normal(β(j−1) + γ√(j−1), σ_a), β,γ ~ Normal(0,1); top-rank ability fixed at 0 (identification).
- Model (2) adds country-specific home intercepts: y ~ Normal(a_rank1 − a_rank2 + h_global·b + h_country·b_country, σ_y); h_country ~ Normal(0, 0.2).
- Fit by MCMC in Stan. Best-of-3 results scaled ×1.5 onto best-of-5 scale. Ability depends only on world-ranking slot j.
## Data sources named
squashinfo.com; PSA World Tour matches Dec 2018–Mar 2024 (Bronze/Silver/Gold/Platinum + Worlds + Finals); top-30-ranked players only; retirements/walkovers excluded; separate men's/women's models. Sample: Egypt 348W/329M matches (181/177 with HA); USA 419/426 (118/1); England 128/252 (36/43); other 113/333 (16/22).
## Findings (numbers and facts, not vibes)
- Global home advantage: +0.40 games (men), +0.30 games (women); SE ≈ 0.10 both.
- Evenly-matched home win probability ≈ 58% men, 56% women: Φ(0.4/1.9)=0.58, Φ(0.3/1.8)=0.56 with σ_m=1.9, σ_w=1.8.
- Country model: Egypt men 0.45 (SE ~0.10); Egypt women ~0.35; USA women ~0.35; England smaller with large SEs; USA men excluded (n=1 home match).
- Mean ability gap between adjacent top-20 ranks ≈ 0.15 games — home advantage (0.3–0.4) is worth ~2–3 ranking slots.
- Artifact: estimated #4 man stronger than #3 (attributed to Mostafa Asal's suspensions depressing his ranking).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Home advantage ≈ 58% win prob for evenly matched competitors (OTHER)
- Home advantage worth ~2–3 ranking slots of ability gap (OTHER)
- Egypt home effect (0.45) measurably larger than England's with similar samples — venue/crowd heterogeneity is real (OTHER)
- COVID empty-crowd matches retained, attenuating the measured crowd channel — mechanism confound flagged (OTHER)
- Numeric acceptance gate proposed: hierarchical model must beat constant-home baseline by ≥0.004 log-loss on 2022–2024 NFL holdout AND ≥3 teams with |home deviation| > 2× posterior SD (OTHER)
## Engine-actionable? (yes/no + one-line what)
Yes — build gse.ratings.HierarchicalHomeField: global home intercept + team/venue-specific home deviations with Normal(0,τ) shrinkage, discrete-outcome likelihood (ordered logit on margin buckets) instead of the paper's Normal approximation, tested on NFL 2000–2024 with 2020 empty-stadium season as a natural crowd experiment.
