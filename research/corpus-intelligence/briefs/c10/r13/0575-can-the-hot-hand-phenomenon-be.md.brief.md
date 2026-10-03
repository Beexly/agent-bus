# arxiv-program/research/2026-09-21/arxiv-deep/0575-can-the-hot-hand-phenomenon-be.md
## What it is (1-2 sentences)
Bayesian longitudinal hidden Markov model with two latent states (cold/hot), logistic mixed-regression transition probabilities and Bernoulli observations, fitted to all 11,042 shots of the 2005–06 Miami Heat — presented as a general streak-quantification framework, with the empirical verdict that the team showed "something more like a cold hand instead of a hot hand." Ledger verdict: ADAPT — port the HMM machinery (not the shooting model) to NFL play/drive-level streak analysis.
## Key metrics/methods (formulas where given, else "not specified")
- Joint model f(Y,Z,θ,ψ) = f(Y|Z,θ,ψ)·f(Z|θ,ψ)·f(ψ|θ)·π(θ) (Eq. 1–2), factorized per match (conditionally i.i.d. across matches).
- Hidden transitions: logit(p_i^(CH))=β_CH+b_i^(CH); logit(p_i^(HC))=β_HC+b_i^(HC); b_i ~ N(0,Σ_b) independent components.
- Observations: logit(γ_in^C)=α_C+α_d X_in+α_FT I_FT(in)+a_i; logit(γ_in^H)=α_H+α_d X_in+α_FT I_FT(in)+a_i; a_i ~ N(0,σ_a²); covariates shared across states, only intercepts differ.
- Stationary (Eq. 8): Δ_i^(C)=p_i^(HC)/(p_i^(CH)+p_i^(HC)), Δ_i^(H)=p_i^(CH)/(p_i^(CH)+p_i^(HC)). Sojourn geometric (Eq. 10): P(τ_i^(j)=n)=[p_i^(jj)]^n(1−p_i^(jj)), n=0,1,…. Occupancy via Kulkarni 2016 closed forms (Eq. 9).
- Priors: δ_C ~ Be(1,1); σ_a,σ_CH,σ_HC ~ U(0,10); β_CH,β_HC,α_d,α_FT ~ N(0,10²); α_C,α_H ~ N(0,10²) with α_C ≤ α_H (label-switching constraint). Inference: JAGS MCMC, 3 chains × 30,000 post-burn-in after 30,000 burn-in, thinning 30; R̂ ≈ 1.000–1.048.
## Data sources named
Miami Heat, NBA 2005–06 season: 105 matches, 11,042 shots total (5,922 made); per shot: make/miss, distance in feet, match id, sequence order, free-throw indicator. Source: NBA play-by-play via nbastuffer.com (accessed 2022-05-03). Data + R code: github.com/gcalvobayarri/hot_hand_model.git.
## Findings (numbers and facts, not vibes)
- Posterior means (95% CI): β_CH=−0.49 (−0.58,−0.39); β_HC=0.38 (0.27,0.49); δ_C=0.55 (0.43,0.68); σ_CH=0.07 (0.00,0.18); σ_HC=0.10 (0.00,0.25); α_C=−0.15 (−0.29,−0.01); **α_H=12.59 (10.52,14.97)** — degenerate: implies make probability ≈1.0 at any distance, so the "hot" state is a fitted artifact absorbing easy makes rather than a real regime; α_d=−0.42 (−0.51,−0.33); α_FT=6.37 (5.16,7.75); σ_a=0.15 (0.00,0.31).
- Generic-match transitions: P(C→H)=0.38, P(H→C)=0.59 — remaining cold is more likely than switching to hot or remaining hot.
- Stationary distribution (Table 2): Δ^(C)=0.61 (0.57,0.65), Δ^(H)=0.39 (0.35,0.43).
- Occupancy in a 120-shot match: posterior mean 74.05 shots cold vs 46.85 hot; initial state "practically irrelevant."
- Streak probability (>3 consecutive shots in one state; threshold explicitly "arbitrary"): cold streak ≈0.25, hot streak <0.1 — cold streaks ~3× more likely than hot.
- Make probability: cold state ≈0.5 at 0 feet, "almost impossible" beyond 10 feet; hot state "very likely" to score up to 15 feet; state-unknown: ≈0.7 near basket, ≈0.5 mid-range, 0.4 from three.
- Limitations (from the file): no train/test split, no cross-validation, no predictive checks — purely inferential; one team, one season; no opponent-strength covariate ("cold" stretch against a good defense is indistinguishable from a real cold hand); text/table inconsistency on SD(α_d|D) (0.03 vs 0.05); distance effect forced identical across states.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- P(H→C)=0.59 > P(C→H)=0.38; stationary Δ^(H)=0.39; cold streaks 3× more likely than hot → [QB-BEHAVIOR] hot states are fragile/transient; any momentum flag must decay fast and never drive pick probabilities directly.
- α_H=12.59 degenerate intercept → [TRUST-SIGNAL] latent-state intercept saturation is the known failure signature of this model — any NFL port's acceptance gate must test for it (the paper's own §13 gate uses this).
- No opponent covariate → [QB-BEHAVIOR] apparent "cold hands" conflate with good defense; NFL port must include opponent defensive strength as a transition covariate.
- Occupancy/sojourn posteriors (74.05 vs 46.85 per 120-shot match; geometric sojourn; Kulkarni occupancy forms) → [OTHER] portable streak-quantification framework for NFL drive/play sequences feeding live in-game WP adjustments or a content "momentum flag."
## Engine-actionable? (yes/no + one-line what)
Yes — port the BLHMM to NFL play-success sequences (down/distance/field position/QB-injury/weather as covariates, opponent defensive strength as a transition covariate), gated on beating a no-HMM logistic baseline by ≥0.005 held-out log-loss with no degenerate state intercept.
