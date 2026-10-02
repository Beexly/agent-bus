# docs/arxiv-program/research/2026-09-21/arxiv-deep/0418-what-if-they-took-the-shot.md
## What it is (1-2 sentences)
Deep-read ledger of Mahmudlu, Karakuş & Arkadaş (2025) "What If They Took the Shot?" (arXiv:2511.23072v1): a hierarchical Bayesian xG model with player-specific finishing deviations shrunk toward Football Manager 17 priors, extended to counterfactual "player B takes player A's shots" transfer-evaluation (FATS score). Verdict: ADAPT to NFL receiving — hierarchical player-effect estimation with scouting priors + counterfactual personnel reallocation for trades/free agency.
## Key metrics/methods (formulas where given, else "not specified")
- Hierarchical: η_ij = α + (β + γ_i)ᵀx_ij; γ_i ~ N(μ_i, Σ) (FM-informed prior means); partial pooling γ*_i ≈ [τ_i²/(τ_i²+σ²)]γ̂^MLE_i + [σ²/(τ_i²+σ²)]μ_i.
- Inference: PyMC NUTS, 4 chains × 2,000 warmup + 2,000 sampling (8,000 draws), target acceptance 0.95, max tree depth 10.
- Counterfactuals: xG_B(A) = Σ_i σ(α + (β+γ_B)ᵀx_i); ΔxG_{B←A} = xG_B(A) − xG_A(A) → E[ΔxG], Pr(ΔxG>0), HDI_95%.
- FATS (Fit-Adjusted Transfer Score) = Σ_c w_c Pr(ΔxG_c > 0), w_c = target team's empirical context shares.
- XGBoost benchmark: n_estimators=591, max_depth=4, learning_rate=0.0139 (randomized search + 5-fold CV).
## Data sources named
StatsBomb open event data 2015-16, Europe's top five leagues, via statsbombpy (9,970 shots by 148 players, ≥30 shots/player, 17 engineered features); Football Manager 2017 ratings (Finishing, Technique, Long Shots, Heading, 1–20 → z-scores) as expert priors; player-name linkage required automated + manual matching.
## Findings (numbers and facts, not vibes)
- MCMC convergence: all 25 reported parameters R̂ < 1.1 (max 1.004, mean 1.001); bulk ESS mean 5,340 (min 1,579); tail ESS mean 4,973 (min 1,673); BFMI 0.77–0.85; composite score 5/5.
- XGBoost feature importance: defenders in triangle 27.6%, shot distance 18.3%, shot angle 14.2%, one-on-one 7.3%, body part 7.2%, penalty area 7.1%, GK proximity 6.5%, under pressure 5.3%, technique 4.3%, first time 2.1%.
- Player log-odds posterior means: one-on-one — Agüero +1.48, Suárez +1.43; distance — Bale and Robben >+1.7, Pogba +1.43; penalty area — Higuaín +1.79, Bale +1.78.
- Berardi→Sansone: ΔxG = +2.2 (Berardi baseline 4.0 xG on 75 shots, HDI [1.5,6.9]; Sansone counterfactual 6.2, HDI [1.5,12.8]); +1.1 of it from pressured shots (0.5 → 1.4 on 21 pressured attempts).
- Vardy→Giroud swap: Giroud→Vardy(Leicester) E[ΔxG] = −7.25, Pr(ΔxG>0) = 0.07, FATS = 0.10; Vardy→Giroud(Arsenal) −0.75, Pr = 0.41, FATS = 0.42.
- Lewandowski→Dortmund +6.49, Pr = 0.92, FATS = 0.85; Aubameyang→Bayern −5.32, Pr = 0.14, FATS = 0.21.
- Retrospective "validation": model flagged latent finishing ability of Immobile and Belotti during underperforming spells; Sansone's €13M transfer to Villarreal followed.
- Internal inconsistency flagged in the file: §4.4.3 places Pogba–B. Fernandes counterfactual in Serie A 2015-16 (Juventus/Udinese); §5.4 labels it "Manchester United 2021".
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, OTHER)
- Hierarchical player-deviation + FATS scheme-fit score ports to NFL WR/RB personnel evaluation (who fits a scheme's route contexts) — SCHEME.
- Draft-capital/college-dominator priors as the FM17 analog for shrinking small-sample receiver estimates — OTHER (methodology).
- No QB behavior, OL, coaching, or trust-quote content in the file.
## Engine-actionable? (yes/no + one-line what)
Yes — fit hierarchical Bayesian EPA/target model on WR/TE 2021–2024 (nflverse + NGS route/coverage contexts, priors from draft capital/college dominator), reallocate free agents' γ onto team target contexts for trade/waiver evaluation; gate: held-out log-loss ≥1% over population model AND team-switcher counterfactual RMSE ≥5% better.
