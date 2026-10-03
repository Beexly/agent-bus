# arxiv-program/research/2026-09-21/arxiv-deep/1538-a-simple-bayesian-procedure-for-forecasting.md
## What it is (1-2 sentences)
Deep read of arXiv:1501.05831 (Foulley, 2015): a deliberately simple hierarchical Bayesian cumulative-probit (Glenn–David) model for UEFA Champions League win/draw/loss outcomes, where team strength is a Gaussian random effect regressed on an external rating and priors are recursively rolled forward season to season, plus a Dirichlet-multinomial mechanism for blending expert (odds-setter) views. Ledger verdict: ADAPT — the external-rating regression prior, season-recursive updating, and expert-blending formalism port directly to the engine's rating layer.

## Key metrics/methods (formulas where given, else "not specified")
- Latent cumulative probit: p_ij,1 = Φ̄(d − Ds_ij − h); p_ij,3 = Φ̄(d + Ds_ij + h); p_ij,2 = 1 − p_ij,1 − p_ij,3; m_ij = Ds_ij + h; Z_ij ~ N(m_ij, 1); Φ̄ = survival function.
- Hierarchy: X_ij|θ ~ Cat(Π_ij); s_i|η_i,σ_s² ~ N(η_i, σ_s²); d ~ N(d_0,σ_d²); h ~ N(h_0,σ_h²); η_i = βx_i, β ~ N(β_0,σ_β²) (x_i = standardized external rating); γ_s = log σ_s ~ N(γ_0,σ_γ²) (lognormal SD).
- Priors for d, h, β, γ_s refreshed each season from previous season's posteriors — recursive Bayesian learning. Fit by Gibbs sampling (WinBUGS/OpenBUGS).
- Metrics: Brier B_m = Σ_{k=1..3} [P_{m,k}(θ) − O_{m,k}]² (range 0–2, posterior-expectation form); Accuracy A_m = Pr(X_m^new = X_m^obs|θ).
- Expert blending as implicit Dirichlet-multinomial data: l(m) = Σ_k a_{m,k} log p_{m,k}, a_{m,k} = w_m p^ex_{m,k} − 1; demonstrated on Bayern–Real Madrid semifinal 2nd leg with weights 10/20/50/200 (w_m hand-set, uncalibrated).
- GSE transfer: (1) cumulative-probit skeleton for NFL ordered outcomes (cover/push/fail; over/push/under); (2) prior mean of team strength = regression on pre-season market-implied power ratings; (3) end-of-season posteriors → next pre-season's priors (off-season roll-forward); (4) analyst/odds-setter views as implicit Dirichlet-multinomial pseudo-data with w_m calibrated on 2020–2024 held-out log-likelihood; ~3–5 days in Stan/PyMC on nflverse.

## Data sources named
2013–14 UEFA Champions League: 32 teams in 8 groups; group stage (96 matches) + knock-out rounds; 2012–13 results used only to calibrate priors. External ratings: UEFA Club Ranking (5-year UEFA competition history) and Football Club World Ranking (52-week weighted), correlated r = 0.807 [0.628, 0.905]. No code repo; data public, no download links.

## Findings (numbers and facts, not vibes)
- Overall (Group+Knockout) — Zero (all teams equal): Brier 0.685, Accuracy 38.3%; UEFACR: 0.595 / 43.3% (+13.1% accuracy); FCWR: 0.530 / 47.4% (+23.8% accuracy, +22.6% Brier).
- Group stage — Zero 0.695/37.7%, UEFACR 0.594/43.4% (+15.1%), FCWR 0.524/47.9% (+27.0%). Round of 16 — Zero 0.637/41.3%, UEFACR 0.531/45.9% (+11.1%), FCWR 0.476/51.2% (+24.0%). QF/SF/F — advantage vanishes (FCWR 0.635/38.7% vs Zero 0.667/38.7%).
- Priors (Table 3): δ ~ N(0.335, 1/300); h ~ N(0.225, 1/100); β: UEFACR N(0.250, 1/100), FCWR N(0.430, 1/120); γ: Zero N(−1.00, 1/5.79), UEFACR N(−1.13, 1/5.00), FCWR N(−2.00, 1/2.30).
- Posterior team ratings (Table 6): RMA 2.049 (SEP 0.968), AMA 1.964, PSG 1.226, BAR 1.223, BAY 1.037; Porto (Pot 1) ranked 24th, Marseille last at −1.967. Finalists' ratings reproduced the actual 2014 final (RMA vs AMA ranked 1–2).
- External reference: Forrest et al. (2005) Brier 0.633 on English football.
- Key decay finding: once ~10+ matches observed the likelihood dominates and external info adds nothing — priors matter early, vanish later (QF onward).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: engine rating-layer formalism — Bayesian anchor of team strengths on market-implied pre-season ratings with season-recursive prior roll-forward; Bayesian mechanism for blending model + market + analyst views; cumulative-probit skeleton for cover/push/fail ordered outcomes.

## Engine-actionable? (yes/no + one-line what)
Yes — adopt the external-rating regression prior + recursive season roll-forward as the engine's rating layer, rejecting static strengths in-season; calibrate the Dirichlet-multinomial expert-blend weight w_m by cross-validation instead of hand-sweeping.
