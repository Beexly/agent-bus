# docs/arxiv-program/research/2026-09-21/arxiv-deep/0418-what-if-they-took-the-shot.md
## What it is (1-2 sentences)
Deep-read of Mahmudlu, Karakuş & Arkadaş (2025, arXiv:2511.23072v1) — a hierarchical Bayesian logistic framework for soccer expected goals with Football Manager-informed priors that estimates player-specific finishing effects and supports counterfactual "what if player B took player A's shots" transfer analysis. Ledger verdict: ADAPT to NFL receiving/rushing player-effect estimation with draft/college priors.

## Key metrics/methods (formulas where given, else "not specified")
- Baseline: y_{ij} ~ Bernoulli(p_{ij}); p_{ij} = σ(η_{ij}); η_{ij} = α + βᵀx_{ij}.
- Hierarchical: η_{ij} = α + (β + γ_i)ᵀx_{ij}; γ_i ~ N(μ_i, Σ), Σ = diag(σ_1²,…,σ_17²), μ_i = FM-informed prior means.
- Partial pooling estimator: γ*_i ≈ [τ_i²/(τ_i²+σ²)]γ̂^MLE_i + [σ²/(τ_i²+σ²)]μ_i.
- Counterfactuals: η_{i,B|A} = α + (β+γ_B)ᵀx_i; xG_B(A) = Σ_i σ(α+(β+γ_B)ᵀx_i); ΔxG_{B←A} = xG_B(A) − xG_A(A); estimated by posterior predictive sampling → E[ΔxG], Pr(ΔxG>0), HDI_95%.
- Fit-Adjusted Transfer Score: FATS = Σ_c w_c Pr(ΔxG_c > 0), w_c = target team's empirical context shares. C³T decomposes ΔxG across situational strata (Open-Play / Pressure).
- Inference in PyMC with NUTS: 4 chains × 2,000 warmup + 2,000 sampling (8,000 posterior draws); target acceptance 0.95; max tree depth 10; MAP initialization.
- Prior specs: intercept Normal(−3, 0.5); coef_shot_distance SkewNormal(−0.5, 1, α=−4); coef_gk_distance SkewNormal(0.3, 1, α=4); coef_shot_angle SkewNormal(0.3, 1, α=3); technique coefficients Normal(0, 5); hyperpriors sigma_physics HalfNormal(0.3), sigma_situation HalfNormal(0.5), sigma_common_techniques HalfNormal(0.7), sigma_rare_techniques HalfNormal(2.0).
- XGBoost non-linear benchmark: n_estimators=591, max_depth=4, learning_rate=0.0139 (randomized search + 5-fold CV), validated against StatsBomb's proprietary xG (R² = 0.833).
- Assumptions: shot contexts fixed under counterfactual reallocation; FM ratings valid priors after z-scoring; player effects constant within season; 30-shot threshold suffices for identification with prior help.

## Data sources named
StatsBomb open event data (public, github.com/statsbomb/open-data, via statsbombpy), 2015–16 season, Europe's top five leagues — 9,970 shots by 148 distinct players after a 30-shots-per-player threshold; 17 engineered features per shot. Expert priors: Football Manager 2017 ratings (1–20 scale → z-scores; Finishing, Technique, Long Shots, Heading). NFL transfer spec names nflverse play-by-play + NGS route/coverage data 2021–2025 with draft capital + college dominator rating + preseason scouting grades as the FM17 analog.

## Findings (numbers and facts, not vibes)
- Baseline-vs-hierarchical prediction scatter: R² ≈ 0.75 with mean absolute deviation ~0.05 probability units (some > 0.10).
- XGBoost vs StatsBomb proprietary xG: R² = 0.833.
- XGBoost feature importance: defenders in triangle 27.6%, shot distance 18.3%, shot angle 14.2%, one-on-one 7.3%, body part 7.2%, penalty area 7.1%, GK proximity 6.5%, under pressure 5.3%, technique 4.3%, first time 2.1%.
- MCMC convergence: all 25 reported parameters R̂ < 1.1 (max 1.004, mean 1.001); bulk ESS mean 5,340 (min 1,579); tail ESS mean 4,973 (min 1,673); BFMI 0.77–0.85; composite score 5/5.
- Agüero prior–posterior: Finishing 17/20 (z=+1.406) → posterior +1.494 ± 0.529 log-odds (one-on-one); Long Shots 15/20 (z=+0.955) → +1.069 ± 0.312 (distance).
- Player effects (log-odds posterior means): one-on-one — Agüero +1.48, Suárez +1.43; distance — Bale and Robben >+1.7, Pogba +1.43, Mertens +0.64, Wijnaldum −0.11; first-time — Insigne +0.92, Salah +0.64, Agüero ≈−0.6, Modeste ≈−0.6; penalty area — Higuaín +1.79, Bale +1.78, Suárez +1.60.
- Berardi→Sansone: Berardi baseline 4.0 xG on 75 shots (95% HDI [1.5, 6.9]); Sansone counterfactual 6.2 xG (HDI [1.5, 12.8]); Δ=+2.2, of which +1.1 from pressured shots (Berardi 0.5 → Sansone 1.4 on 21 pressured attempts).
- Vardy–Giroud: Giroud→Vardy(Leicester) E[ΔxG]=−7.25, 95% HDI [−12.44, 1.87], Pr(ΔxG>0)=0.07, FATS=0.10; Vardy→Giroud(Arsenal) E[ΔxG]=−0.75, HDI [−9.31, 5.64], Pr=0.41, FATS=0.42.
- Aubameyang–Lewandowski: Lewandowski→Dortmund +6.49, HDI [−1.99, 11.51], Pr=0.92, FATS=0.85; Aubameyang→Bayern −5.32, HDI [−13.07, 3.36], Pr=0.14, FATS=0.21.
- Pogba–B. Fernandes: Bruno→Pogba(Juventus) −1.88, HDI [−5.90, 4.25], Pr=0.26, FATS=0.29; Pogba→Bruno(Udinese) −0.10, HDI [−2.25, 1.48], Pr=0.49, FATS=0.47. (File notes an internal paper inconsistency: §4.4.3 says Serie A 2015-16 Juventus/Udinese; §5.4 item 3 labels it "Manchester United 2021.")
- Real-world validation: counterfactuals checked against subsequent events — Sansone's €13M transfer to Villarreal; Immobile's and Belotti's later-season scoring resurgence after the model flagged latent finishing ability.
- Limitations: single-season data; counterfactuals hold contexts fixed though a different player changes shot creation; FM priors from a single expert system; 30-shot threshold + partial pooling means low-sample players are mostly prior ("data-driven" posterior for sparse players is largely FM repackaged); Vardy–Giroud asymmetry substantially tactical, not pure finishing.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Hierarchical player-effect estimation with scouting priors for NFL receivers (≥30 targets; draft capital + college dominator + scouting grades as priors) — OTHER (modeling methodology; INFERENCE: could inform target-concentration/fit evaluation but the paper itself contains no QB behavioral content).
- Counterfactual reallocation ("what if WR X ran these routes") for trade/free-agency/waiver evaluation with FATS-style scheme-fit score — OTHER (personnel-evaluation capability).
- Paper's warning that the model attributes system effects to player γ_i — COACHING (offensive scheme/OC context matters for player efficiency; NFL transfer spec explicitly adds scheme/QB covariates).

## Engine-actionable? (yes/no + one-line what)
Yes — build a hierarchical Bayesian player-effect model (PyMC, NUTS) over receiver targets with draft/college/scouting priors, serving batch trade/FA lists in offseason and weekly waiver claims; adopt only if held-out log-loss improves ≥1% and team-switcher counterfactuals beat the population baseline by ≥5% RMSE.
