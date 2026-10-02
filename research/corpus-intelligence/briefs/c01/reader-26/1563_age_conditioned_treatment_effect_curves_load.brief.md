# arxiv-program/research/2026-09-21/arxiv-deep/1563-age-conditioned-treatment-effect-curves-load.md
## What it is (1-2 sentences)
Ledger note on Estimating the Age-Conditioned Average Treatment Effect Curves for NBA load management (Nakamura-Sakai, Forastiere & Macdonald 2024, arXiv:2402.12400): a causal meta-learner framework (S/T/X-learners × OLS-spline / honest-RF) estimating how rest-day effects on performance vary by player age, validated by simulation then applied to 10 NBA seasons. Verdict in-file: ADAPT — port the X-learner + honest-RF design and bootstrap-CI age-curve protocol to GSE's NFL rest/schedule adjustments.

## Key metrics/methods (formulas where given, else "not specified")
- Estimand: ACTE τ(a) = E[Y(1)−Y(0) | A=a] = μ₁(a) − μ₀(a) = E_X[μ₁(a,x) − μ₀(a,x)] (Eq. 2); ACEF μ_w(a) = E_X[μ_w(a,x)] smoothed with GAM (df=6).
- Potential-outcome decomposition: Yᵢ(w) = g(a,w) + fᵢ(x,a,w) + εᵢ, E_X[f(x,a,w)|A=a] = 0 → τ(a) = g(a,1) − g(a,0) (Eq. 3); identification under SUTVA + unconfoundedness (Theorem 1).
- Meta-learners (Künzel et al. 2019): S-learner (treatment as feature), T-learner (separate arms), X-learner — pseudo-effects D̃¹ᵢ = Yᵢ^obs − μ̂₀^obs(Aᵢ,Xᵢ) (treated), D̃⁰ᵢ = μ̂₁^obs(Aᵢ,Xᵢ) − Yᵢ^obs (control); τ̂(a) = e(a)·τ̂⁰(a) + (1−e(a))·τ̂¹(a), e(a) = Pr(Wᵢ=1|Aᵢ=a).
- Base learners: OLS-spline (fixed-effect spline) and honest random forest (Rforesty; honesty = separate subsamples for train/predict); 90% bootstrap CIs per age.
- Simulation DGP: g(a,w) = ω + β₁(a−a_max)² + β₂(a−a_max)²·1(a>a_max) + β₃(a−a_max)³·1(a>t_max) + τ(a)·w; β₁=−1/9, β₂=−6/1000, β₃=45/10000; σ_β=0.02, σ_ε=1, σ_γ=0.4; scenarios τ(a)=2; τ(a)=0.1(a−a_min); τ(a)=2(a−16)+0.0005·1(a>20)(a−a_max)³−0.0005·1(a>a_max)(a−a_max)⁴.

## Data sources named
- NBA game-level data, 10 seasons 2011–2022, via public hoopR R package (ESPN/nba_api): 827 players; unit = player-game with ≥25 min in previous game; age range 18–39 (40+ excluded for sparsity); treatment W=1 ≥1 day rest, W=0 back-to-back; treatment prevalence 0.151.
- Covariates: player, team, opponent, home/away, season fixed effects. No code repo stated.

## Findings (numbers and facts, not vibes)
- Simulation MSE (Table 1): Scenario 1 (constant τ): s.ols 0.00, t.ols 1.53, x.ols 1.53, s.rf 0.35, t.rf 0.05, x.rf 0.07. Scenario 2 (linear): s.ols 0.44, t.ols 1.44, x.ols 1.44, s.rf 0.29, t.rf 0.07, x.rf 0.08. Scenario 3 (nonlinear): s.ols 89.23, t.ols 9.40, x.ols 9.40, s.rf 9.90, t.rf 4.17, x.rf 3.74.
- Selection conclusion: X-learner + RF best for complex effects; S-learner + OLS best for simple parallel-trend effects.
- NBA application (qualitative from figures, no tabulated effect sizes): net rating significantly improved by rest across ages ~20–38; rest affects defense more than offense (larger ACTE on defensive rating); steals the only box-score stat with consistent positive rest effect; FG% and TS% improved by rest mainly for younger players; 3P% least affected.
- B2B share ~14–16% for ages 19–35, dropping to ~10–13% at ages 38–39 (Table 2).
- Survivorship bias example: blocks U-shape at 35+ driven by Tim Duncan holding 8 of top-10 blocks/100 seasons at age 35+ (Table 3).
- Limitations in-file: unconfoundedness likely violated (strategic rest vs opponent quality; unobserved injuries/travel/sleep); SUTVA suspect (teammate rest changes role); 40+ tails unidentified; ±25-min-previous-game filter is a potential collider; no external validation; effect sizes graphical only.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Direct port: NFL ACTE for rest treatments — W=1 short rest (≤3 days, TNF short week) vs W=0 normal; second treatment W=1 travel >2000 mi; outcomes EPA/play, success rate, half-PPR per game (WR/RB/TE, age 21–36), team offensive/defensive EPA; covariates player/team/opponent/home-away/season-week fixed effects + Elo + weather; stack via econml (Python) rather than R.
- [COACHING] Improvement experiment in-file: upgrade binary treatment to continuous dose-response τ(a,d) via generalized propensity score / DR-learner — test whether marginal benefit of the 4th vs 3rd rest day differs by age (older players benefit more from days 5–7, younger saturate earlier) → graded rest adjustment for TNF/MNF/bye edges instead of a binary flag.
- [TRUST-SIGNAL] Identification relies on unconfoundedness with strategic coach behavior as the key confounder — INFERENCE: the NFL port must condition on coaching/rest-decision selection (e.g., injury-report status, playoff stakes) or estimates inherit coach-selection bias.
- [OTHER] GSE overlap in-file: no rest/schedule causal adjustment layer exists today; fills gap #9 ("causal injury impact") adjacent slot; Garrett's CEPT is theory lane, no duplication.

## Engine-actionable? (yes/no + one-line what)
Yes — build `gse-acte-rest` with X-learner + honest-RF on nflverse 2019–2024 player-game data (age-specific short-week/travel effects); ADOPT into projections only if (a) synthetic-DGP MSE ≥30% below naive difference-in-means, (b) 90% bootstrap CI excludes zero over a contiguous ≥3-year age band with domain-sensible direction, (c) S/T/X sign agreement ≥70% of well-sampled age bins.
