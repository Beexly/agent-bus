# docs/arxiv-program/research/2026-09-21/arxiv-deep/1564-causal-effect-two-for-one-strategy.md
## What it is (1-2 sentences)
A deep read of Sasan & Swartzentruber (2024), "The Causal Effect of the Two-For-One Strategy in the National Basketball Association" (arXiv:2412.08840). It estimates the causal effect of the NBA end-of-quarter two-for-one (TFO) strategy on quarter-end score differential using covariate-balancing propensity scores + IPW/matching for ATC + causal forest + RATE heterogeneity tests — and reads as a reusable sports-causal-methods protocol that the file argues matters more to GSE than the TFO finding itself. Verdict in file: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Outcome POD: Yᵢ = Yᵢ,EOQ − Yᵢ,TFO-O (Eq. 1) — score-differential change from opportunity to quarter end.
- Estimands: ATE, ATT, ATC: E[Yᵢ(1)−Yᵢ(0)], E[Yᵢ(1)−Yᵢ(0)|Wᵢ=1], E[Yᵢ(1)−Yᵢ(0)|Wᵢ=0] (Eqs. 2-4); paper estimates ATC.
- Propensity via covariate-balancing propensity score (Imai & Ratkovic 2013): e(X)=P(W=1|X) (Eq. 8); IPW weights Wᵢ/ê(Xᵢ)+(1−Wᵢ)/(1−ê(Xᵢ)) (Eq. 9); estimators Eqs. 10-12. 1:1 optimal pair matching without replacement (MatchIt); matching ATT: τ̂_ATT = n₁⁻¹Σ_{i:Wᵢ=1}(Yᵢ−|M(i)|⁻¹Σ_{j∈M(i)}Yⱼ) (Eq. 13).
- CATE: τ(x)=E[Yᵢ(1)−Yᵢ(0)|X=x] (Eq. 14).
- Causal forest (Athey/Wager, grf): DML orthogonalization (residualize Y,W on X), heterogeneity-maximizing splits Δ(s)=(τ̄_L−τ̄_R)², honest estimation τ̂(l)=|l|⁻¹Σ ỸᵢW̃ᵢ/(ê(Xᵢ)(1−ê(Xᵢ))), B-tree ensemble averaging.
- Heterogeneity tests: test calibration (regress outcome on mean forest prediction + differential forest prediction; p-value on the latter) and RATE (Yadlowsky et al. 2024): TOC(q)=E[Y(1)−Y(0)|S(Xᵢ)≥F⁻¹(1−q)]−E[Y(1)−Y(0)], RATE=∫₀¹TOC(q)dq (Eqs. 15-16); train causal forest on 2018-19, predict on 2021-22.
- Assumptions stated and checked: consistency, no interference (Eq. 5), conditional exchangeability (Eq. 6), positivity (Eq. 7); balance via Love plots with 0.1 standardized-mean-difference rule; positivity via propensity overlap histograms.
## Data sources named
NBA play-by-play, regular seasons 2018-19 and 2021-22, via the nbastatR R package (public). Covariates: NBA 2K player ratings via HoopsHype scrape, betting spread and total via Sportsbook Reviews archive (2023), starting lineups via Basketball Reference. No code repository link stated. Reproducibility relies on third-party public sources.
## Findings (numbers and facts, not vibes)
- Sample: 2018-19: 1036 TFO-A / 529 TFO-NA; 2021-22: 950 TFO-A / 462 TFO-NA; combined 1986 A / 991 NA (first three quarters only). [COACHING]
- ATC estimates (Table 2, exact): IPW — 18-19: 0.55 (0.43, 0.66), p<0.001; 21-22: 0.57 (0.45, 0.69), p<0.001; both: 0.55 (0.47, 0.64), p<0.001. Matching — 18-19: 0.60 (0.35, 0.85), p<0.001; 21-22: 0.64 (0.39, 0.89), p<0.001; both: 0.63 (0.46, 0.80), p<0.001. Each unconverted TFO-O costs slightly more than half a point of score differential. [COACHING]
- Causal forest ATE: 0.61 (SE 0.11) — third-method consistency with IPW/matching. [COACHING]
- Heterogeneity: test calibration — mean forest prediction 1.00511 (SE 0.17876, p<0.001); differential forest prediction 0.63352 (SE 0.67520, p=0.1741) → no significant heterogeneity. RATE: 0.035 (SE 0.112, 200 bootstraps) → no heterogeneity. RATE by rating diffs (Table 4): max-rating diff 0.028 (0.085); mean-rating diff 0.0825 (0.087) — both non-significant. [COACHING]
- Balance diagnostics: 5 covariates above 0.1 standardized mean difference pre-adjustment; IPW brings all near 0, matching leaves time-left slightly above 0.1. [COACHING]
- Limitations (from file): coach play-calling ability is an unmeasured confounder; NBA 2K ratings are subjective video-game ratings; no tracking/spatial data (shot difficulty unobserved); two seasons (~3000 opportunities) → heterogeneity tests underpowered (authors admit); 4th quarters excluded (highest-leverage situations lost); R-package dependence (WeightIt, MatchIt, grf, marginaleffects, cobalt, survey) — no Python replication. [COACHING, OTHER]
- GSE overlap (from file): "4th-down humility (2311.03490)" already absorbed; causal inference a pending topic in the 15-area ML brief — this is a concrete causal-inference-in-sports reference implementation, not a duplicate; GSE has no causal protocol for tactical decisions. [COACHING]
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Reusable causal-tactics protocol (CBPS propensity + IPW + matching + causal forest + RATE) for NFL tactical decisions: go-for-it on 4th, onside kick, hurry-up, 2-pt vs XP — outcome = ΔEP/ΔWP from decision point to end of drive (NFL analog of POD): COACHING.
- Covariate design maps 1:1 to NFL (score differential, time left, down/distance/field position, spread/total, Elo, QB tier): COACHING.
- ATC-by-situation tables feed real-time content ("the data says going for it here is worth +X WP") — supports the X engagement mandate: COACHING.
- Proprietary extension: pool 7+ NFL seasons (~10x the paper's n) and RATE-test heterogeneity by QB tier and coach identity for a coach-aggressiveness causal leaderboard: COACHING, QB-BEHAVIOR.
## Engine-actionable? (yes/no + one-line what)
Yes — build `gse-causal-tactics`: treatment library on nflverse play-by-play (4th-down go/punt, onside kick, hurry-up, 2-pt/XP) with CBPS + IPW + matching + causal forest estimating ATC on ΔEP/ΔWP, adopted only if IPW and matching CIs both exclude zero with same sign, |ΔEP| ≥ 0.3, all post-weighting standardized differences <0.1, and causal-forest ATE inside the IPW 95% CI.
