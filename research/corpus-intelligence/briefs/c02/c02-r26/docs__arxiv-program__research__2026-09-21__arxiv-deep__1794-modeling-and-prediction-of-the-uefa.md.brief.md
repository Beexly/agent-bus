# docs/arxiv-program/research/2026-09-21/arxiv-deep/1794-modeling-and-prediction-of-the-uefa.md
## What it is (1-2 sentences)
Ledger 1794 deep-reads Groll et al. (2024, arXiv:2410.09068v1), which predicts UEFA EURO 2024 by linearly combining three learners (LASSO-Poisson, conditional-inference random forest, XGBoost) on team-covariate differences plus three separately-estimated "enhanced" team-strength variables, converting expected goals to W/D/L via the Skellam distribution and simulating 100,000 tournaments. Verdict ADAPT: the enhanced-variable pipeline and Skellam → simulation structure port to GSE's NFL needs, though the ensemble's gains over a single random forest were within noise and bookmakers beat all models.
## Key metrics/methods (formulas where given, else "not specified")
- Combined model: ŷᵢ = w₁·exp(β₀+xᵢβ) + w₂·(1/B)Σ_b ŷᵢ^{(b)} + w₃·Σₖηfₖ(xᵢ), Σw = 1; weights grid-searched (step 0.05, Σw=1) minimizing a min-max-normalized average of ML/CR/RPS.
- HistAbility: λ_{i,m} = exp(β₀ + (rᵢ − rⱼ) + hᵢ·𝟙(team i at home)), Σᵢrᵢ = 0; weighted likelihood L = Πₘ P(G_{i,m}=g_{i,m},G_{j,m}=g_{j,m})^{wₘ}.
- Time decay: w_{time,m}(xₘ) = (1/2)^{xₘ/1095.75} (half-period 3 years); match-importance weights: 4 (World Cup), 3 (confederation tournament), 2.5 (qualifiers), 1 (friendlies).
- Overround removal: quoted_oddsᵢ = oddsᵢ·δ + 1, median δ-margin 16.8%; pᵢ = 1/(exp(lᵢ)+1) from averaged log-odds.
- Inverse-simulation ability update: abilities_{iter+1} = abilities_{iter} − (l̃ᵢ − lᵢ)/(|l̃ᵢ − lᵢ|·(0.01/iter^{0.1})), stop when RMSE(l̃,l) < 0.05; β₀ = 0.15, h = 0 fixed (logability from bookmaker tournament-winning odds).
- Plus-minus: yᵢ = Σⱼβⱼxᵢⱼ + εᵢ (xᵢⱼ ∈ {1,−1,0} by side), ridge-estimated with HFA/competition/age/segment-duration/game-state adjustments.
- LASSO-Poisson: λᵢⱼ = exp(xᵢⱼᵀβ); l_p(β) = l(β) − ξΣₖ|βₖ|.
- Skellam: P(K=k) = e^{−(λ₁+λ₂)}(λ₁/λ₂)^{k/2} I_k(2√(λ₁λ₂)); π̂₁ᵢ = P(G₁ᵢ>G₂ᵢ), π̂₂ᵢ = P(G₁ᵢ=G₂ᵢ), π̂₃ᵢ = P(G₁ᵢ<G₂ᵢ).
- Metrics: MLᵢ = Πᵣ π̂_{ri}^{δ_{r,ỹᵢ}}; CRᵢ = 𝟙(ỹᵢ = argmax_r π̂_{ri}); RPSᵢ = (1/2)Σ_{r=1}^{2}(Σ_{l=1}^{r}(π̂_{li} − δ_{l,ỹᵢ}))².
- XGBoost tuned by 10-fold CV (η = 0.1 fixed); LASSO ξ via cv.glmnet; Cforest mtry tuned ∈ {1,2,3,4} (selected mtry = 1).
- Pipeline: 100,000 tournament simulations (extra time at λ/3, 50/50 shootouts) for stage probabilities.
## Data sources named
- Training: UEFA EURO 2004–2020 match results (195 matches), each split into two team-observations; features are covariate differences from the first-named team's perspective; target = team goals in 90 minutes.
- Classical covariates (top-8 after importance screening): log GDP per capita, log average market value (transfermarkt), FIFA rank, UEFA association club coefficients, normalized count of Champions League semifinalists in squad.
- 2024 prediction: covariates/abilities re-estimated pre-EURO 2024 (28 bookmakers via oddschecker/bwin); bookmaker three-way odds (betexplorer) as benchmark. No public code repo; covariate sources public; bookmaker tables in appendices.
## Findings (numbers and facts, not vibes)
- Leave-one-tournament-out results (paper's Table 7): LASSO ML 0.3983 / CR 0.4872 / RPS 0.2028 / MAE_goals 0.8550 / MAE_goaldiff 1.1796; Cforest 0.3996 / 0.4872 / 0.2016 / 0.8686 / 1.1669; XGBoost 0.3738 / 0.4769 / 0.2105 / 0.8713 / 1.1968; Combined 0.3994 / 0.4923 / 0.2015 / 0.8662 / 1.1674; Bookmakers 0.4047 / 0.5179 / 0.1973. Bookmakers beat all models on every reported metric. (OTHER)
- Best ensemble weights: 0.15 LASSO + 0.85 Cforest + 0.00 XGBoost (Avg_norm = 91.46); XGBoost appears in only 2 of the top-10 combos — the honest story is "Cforest ≈ combined ≫ XGBoost," and the combined model's edge over Cforest is within noise. (OTHER)
- Final LASSO coefficients: intercept 0.1308, logability 0.4037, market.value 0.0943, GDP 0.0876, CL.players 0.0162, FIFA.rank −0.0017; UEFA.points = 0, ave.PM = 0, HistAbility = 0 (LASSO-dropped). ξ ≈ 0.0183. (OTHER)
- Variable importance (permutation, combined model): logability and market value top, then GDP and ave.PM. (OTHER)
- EURO 2024 simulation: France 19.2% champion, England 16.7%, Germany 13.7%, Spain 11.4%, Portugal 10.8%, Netherlands 7.6%, Italy 5.6%, Belgium 4.9%; bookmaker consensus: England 20.5%, France 17.6%, Germany 14.0%. (OTHER)
- Reality check (ledger's own addition, labeled): Spain won EURO 2024 — the model's 4th favorite at 11.4%, bookmakers' 5th at 9.7% — a calibration anecdote, not a refutation. (OTHER)
- Weight-tuning selection bias: convex weights were chosen on the same CV predictions used for the final comparison — the paper does not correct this. (OTHER)
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- logability — a principled recipe (inverse tournament simulation) to convert futures odds into team strengths, a capability the ledger says the corpus lacks; portable to NFL Super Bowl futures → team-strength priors (OTHER).
- HistAbility — weighted-Poisson team ability with explicit 3-year half-life time decay and match-importance weights (4/3/2.5/1); portable as an NFL team-strength prior with adapted weights (OTHER).
- ave.PM — ridge plus-minus player ratings aggregated to team level; relevant to GSE's player-impact/injury content (COACHING).
- Skellam bridge: convert paired expected-points (λ₁,λ₂) into P(win), P(cover spread s), P(over total t) via the Skellam CDF — replacing normal-approximation spread math in the probability layer (OTHER).
- 100,000-bracket Monte Carlo from fitted score models with stage-probability tables — a ready-made weekly "paths to the Super Bowl" playoff-simulation content product (SCHEME).
- Caveat: independence assumption in the Skellam bridge; the ledger flags corpus paper 1791 showing copula dependence matters — bivariate-Poisson correction proposed as the improvement experiment (OTHER).
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the full pipeline: three NFL enhanced variables (HistAbility, inverse-simulation logability from futures, ridge plus-minus) feeding a LASSO-Poisson + RF score-model ensemble, Skellam CDF for spread/total probabilities, and a 100k playoff-bracket simulator; kill the XGBoost arm early if it trails the RF after one tuning round, per the paper's evidence.
