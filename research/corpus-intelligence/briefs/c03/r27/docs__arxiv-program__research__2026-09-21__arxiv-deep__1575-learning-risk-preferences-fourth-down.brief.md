# docs/arxiv-program/research/2026-09-21/arxiv-deep/1575-learning-risk-preferences-fourth-down.md

## What it is (1-2 sentences)
Inverse-optimization paper that recovers NFL coaches' implicit risk preferences as a quantile parameter τ from 9 seasons of 4th-down decisions, replacing prescription ("what coaches should do") with estimation ("what quantile of next-state value their choices are optimal under"). Corpus verdict ADAPT — supplies the exact estimand (τ per coach-team × field region × WP bin) plus code to upgrade GSE's 4th-down behavior model, win-probability edge detection, and opponent-tendency content. Replaces ledger 1567 (REJECT).

## Key metrics/methods (formulas where given, else "not specified")
- Candidate objective: τ-quantiles of next-state value distribution V^π̄(σ,a) = r(S_{t+1}(σ,a)) + E_π̄[Σ_{n≥t+2} r(S_n) | S_{t+1}]; q^π̄_τ(σ,a) = Q_τ[V^π̄(σ,a)] = inf{x : τ ≤ F_{V^π̄}(x|σ,a)} (Eq. 4.6).
- Inverse problem: min_{τ∈[0,1]} (1/N)Σ_j 1(a_j ≠ a*_j(σ_j, q^π̄_τ)) — average Hamming loss between observed decisions and τ-optimal decisions (Eq. 4.11); two-region (own/opponent half, L=2; L≥3 underidentified given |A|=3) joint estimation of (τ_1, τ_2) (Eq. 5.5).
- Forward model: one-period MDP, action set {GO, FGA, PUNT}; future play after t+1 follows fixed league-average stationary policy π̄; rewards r(TD)=6.95, r(FG)=3, r(SAF)=−2 (negated for team B).
- Quantile estimates regularized with bivariate monotonic smoothing (SCAM, Pya & Wood 2015 tensor-product penalized B-splines, k=4 knots, monotonic-decreasing in yardline and yards-to-go); GO-transition augmentation with 3rd-down plays à la Romer 2006 to counter Daly-Grafstein 2023 selection bias; inference restricted to τ∈[0.2,0.8] (τ-optimal policies plateau at extremes).
- Uncertainty: 200 game-level bootstrap samples (preserving within/across-drive dependence), 95% CIs; point estimates = medians of optimal-τ sets; coach-team plots restricted to coaches with ≥25 observed 4th-down decisions per field region per WP range.
- Performance regression: AvgPointsGained_{ijkℓ} = β_0 + β_1 τ̂_{ijkℓ} + β_2 Elo_{ij} + β_3 1(ℓ=Own) + ε (Eq. 6.2); 4th Down Bot (Baldwin 2024, nfl4th) run through the identical inverse pipeline as the risk-neutral reference "translation".

## Data sources named
nflfastR play-by-play, 9 seasons (2014–2022), via the nflfastR R package; win-probability estimates from Carl and Baldwin 2024 (tree-based: score differential, time remaining, Vegas pregame spread); FiveThirtyEight Elo (archived CSV); reproduction code https://github.com/nsandholtz/fourth_down_risk.

## Findings (numbers and facts, not vibes)
- League aggregate: coaches' behavior consistent with optimizing low quantiles of next-state value — conservative risk preferences — in both field regions and nearly every WP range, vs. the 4th Down Bot.
- τ̂_1 − τ̂_2 (opponent half minus own half) > 0 with 95% CIs excluding 0 until WP ≥ 0.8: coaches clearly more risk-tolerant in the opponent's half at low-to-mid WP; gap dissipates as WP→1.
- Bot−League gaps largest in own half at low WP; only exception: opponent half at WP<0.05, where league τ̂ matches the Bot (desperation aligns behavior with WP).
- Time trend: league risk tolerance increased over 2014–2022 in every WP×region cell, more pronounced in the opponent's half.
- Quarter: Q4 vs Q1–Q3 indistinguishable except WP<0.2, where Q4 is much more risk-tolerant.
- Coaches: no coach's median τ̂_2 (own half) exceeds the risk-neutral reference in any WP range; in the opponent half at low WP, ~half of coaches are risk-seeking vs risk-neutral, with Matt Nagy, Jay Gruden, Mike McCarthy, Doug Pederson medians even exceeding the 4th Down Bot. Own-half behavior uniform across coaches; opponent-half shows wide variation.
- Performance regression (N=622 coach-season-WP-region cells): β_1(τ̂) = 0.769*** (0.138), partial R² 0.048; β_2(Elo) = 0.036***; β_3(own-half indicator) = 0.079***; R² = 0.059, adj. R² = 0.054, F = 12.860***. Higher τ̂ → more average points gained; excessive risk aversion negatively associated with 4th-down performance (consistent with Yam & Lopez 2019's ~0.4 wins/year cost estimate).
- Limitations named: state space omits score differential/time/timeouts (WP stratification as proxy; mild circularity since markets price in coaching tendencies); league-wide transitions ignore team strength; region gaps partly inflated by residual Daly-Grafstein selection bias (Bot's "translated" τ also differs by region); τ explains only ~5% of 4th-down points variance; 2014–2022 data, aggression trend means 2023–2026 τ̂ would be higher.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Coaches optimize low quantiles (conservative) nearly everywhere; risk-tolerance gap opponent-vs-own half persists until WP≥0.8 → COACHING (predictable, quantified 4th-down decision bias by field region).
- ~Half of coaches risk-seeking in opponent half at low WP; Nagy/Gruden/McCarthy/Pederson exceed the Bot; own-half behavior uniform → COACHING (coach-level heterogeneity lives in the opponent half — team-specific τ̂ is a real feature, own-half τ̂ is not).
- β_1 = 0.769***: higher τ̂ → more average points gained; conservatism costs ~0.4 wins/year (Yam & Lopez 2019) → COACHING (4th-down decision edges are a measurable win-probability lever).
- Team-specific τ̂ as calibrated input to drive-outcome prediction and live-WP edges → TRUST-SIGNAL (behavioral feature with bootstrapped CIs, not vibes).

## Engine-actionable? (yes/no + one-line what)
Yes — build `gse_coach_risk.py` to fit per-team-season-region τ̂ from nflverse 2014–2025 (200 game-level bootstraps) and serve τ̂(team, region, WP bin) as a feature into GSE's 4th-down GO/FGA/PUNT classifier + live-WP model; refit each offseason (stale τ̂ systematically underrates aggression); acceptance gate: team-specific τ̂ rule beats risk-neutral WP-max rule by ≥3 pp Hamming accuracy in the opponent half on 2024–2025 4th downs.
