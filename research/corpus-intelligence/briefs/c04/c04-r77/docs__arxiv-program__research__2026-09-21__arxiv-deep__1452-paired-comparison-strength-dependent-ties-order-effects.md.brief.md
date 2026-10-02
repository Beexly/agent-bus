# docs/arxiv-program/research/2026-09-21/arxiv-deep/1452-paired-comparison-strength-dependent-ties-order-effects.md
## What it is (1-2 sentences)
Ledger for arXiv:2505.24783v1 (Glickman, 2025) extending the Bradley-Terry-with-ties-and-order-effects model so that both tie probability and the size of the order (home/white) effect vary with the *average strength* of the two competitors, motivated by chess where draws are more common between stronger players. Verdict: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Extension of David's (1988) BT-with-ties-and-order-effects; outcome Yᵢⱼ ∈ {win, loss, draw} with xᵢⱼ = ±1 encoding the order advantage:
  - P(win) ∝ exp(θᵢ + xᵢⱼ[α₀ + α₁(θᵢ+θⱼ)/2]/4), P(loss) ∝ exp(θⱼ − xᵢⱼ[α₀ + α₁(θᵢ+θⱼ)/2]/4) — Eqs. 6–7
  - P(draw) ∝ exp(β₀ + (1+β₁)(θᵢ+θⱼ)/2)
  - When α₁ = β₁ = 0 the model collapses exactly to David (1988). IIA preserved: P(win)/P(loss) odds unaffected by tie parameters.
- Davidson–Beaver order effect: logit P(win) = θᵢ − θⱼ + (α/2)xᵢⱼ (Eq. 2).
- Strength–Elo link: Rᵢ = 1500 + (400/log 10)·θ̂ᵢ; Elo-scale prior conversion μᵢ = (Rᵢ − 1500)/(400/log 10) (Eq. 10).
- Estimation: alternating conditional maximization (Newton–Raphson multinomial logit on strengths given γ, then on γ = (α₀,α₁,β₀,β₁) given strengths), or fully Bayesian via JAGS/R2Jags Gibbs sampling with N(μₖ, σₖ²) priors — Bayesian form handles perfect-score players (no finite MLE) and seeds pre-season priors from power ratings.
## Data sources named
- Motivation: 19,453 FIDE games (1995–2007), rating difference ≤ 200; GAM analysis of draw logit on within-pair average rating controlling for rating difference (Figure 1).
- Fit: US Chess Open 2006–2019, 24,888 games, 6,005 rated + 70 unrated players (treated as distinct player-years), 14 tournaments (Table 1). Six model variants (Table 2) × two priors = 12 fits, JAGS 3 chains × 20,000 iterations (10,000 burn-in, thinned to 6,000), all R̂ < 1.01.
## Findings (numbers and facts, not vibes)
- Table 3 (DIC, lower = better): full model with informative prior = 43,821 — substantially better than every alternative (Model 2: 43,956; Model 6/David 1988: 44,658; Model 4, constant tie prob: 44,553); all informative-prior models beat all noninformative-prior models (best: 53,686); differences >> 2–3 DIC guideline.
- Table 4 (posterior means, 95% central intervals): α₀ = 0.363 (0.289, 0.434) — white win-to-loss odds exp(0.363/2) ≈ 1.20 for average players (0.545 vs 0.455 decisive); α₁ = 0.037 (0.000, 0.074) — white advantage grows slightly with strength (evenly matched strong players θᵢ=θⱼ=2: odds 1.244, P(white win) 0.554); β₀ = −0.471 (−0.505, −0.437); β₁ = 0.120 (0.103, 0.138) — decisive positive evidence for strength-dependent ties: draw probability for evenly matched average players = 0.238 vs 0.489 for evenly matched strong players (θᵢ=θⱼ=2). Unrated players much weaker: μ_miss = −3.399.
- Model 4 (β₁ = 0) losing to Model 1 confirms the tie-strength interaction carries real signal beyond the order-effect interaction (Model 3 vs 1: 44,086 vs 43,821).
- Note: α₁'s chess CI barely excluded 0 — paper suggests monotone splines as future work instead of the linear dependence on average strength.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (rating/modeling): directly extends corpus ledger [1451]'s covariate-BT message — not only do covariates matter, the size of the home/white effect itself varies with team quality (α₁ > 0); connects to [1445]–[1450]'s rating machinery via the Elo–BT link.
- SCHEME: GSE's NFL spread model currently uses flat HFA; this paper argues HFA should be an interaction with team quality (elite teams exploit home advantage more) — testable on ATS covers. Strength-dependent tie mass maps onto GSE's soccer/NHL draw lanes and NFL push probability.
- TRUST-SIGNAL: explicit numeric gate — strength-dependent tie model must beat constant-ν Davidson by ≥ 0.005 out-of-sample 3-way log-loss on EPL 2022–2024 with β₁'s 95% CI excluding 0; NFL HFA × quality interaction included only if it improves ATS log-loss by ≥ 0.003 on 2018–2023 holdout, otherwise keep flat HFA.
## Engine-actionable? (yes/no + one-line what)
Yes — two model changes: (1) add β₁-style strength-dependent tie mass to GSE's 3-way outcome model (draw probability rising with combined team quality) and an α₁-style HFA × team-strength interaction to the spread/ATS model, each gated by the stated out-of-sample log-loss thresholds; (2) adopt the paper's Figure 1 GAM diagnostic (draw logit on within-pair average implied strength, controlling for difference) as GSE's standard pre-test before adding tie-model complexity; also adopt the JAGS Bayesian structure for pre-season prior seeding.
