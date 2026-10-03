# arxiv-program/research/2026-09-21/arxiv-deep/0069-bayesxg-player-and-position-correction-on.md
## What it is (1-2 sentences)
Ledger read of Scholtes & Karakuş (2023), arXiv:2311.13707: Bayesian hierarchical logistic regression (bambi/PyMC) for position- and player-adjusted expected goals in soccer, with directional skew-normal priors and a full prior-sensitivity battery, validated across EPL, La Liga, and Bundesliga. Verdict ADAPT: the xG application duplicates 2301.13052 (already absorbed); port the hierarchical machinery and prior-sensitivity protocol, not the model.

## Key metrics/methods (formulas where given, else "not specified")
- Bernoulli likelihood; bambi MCMC with 1500 draws, 250 burn-in, 4 chains (6000 samples), 95% target acceptance. Group-specific intercepts β_0k and slopes β_jk.
- Logistic: logit(p_i) = β_0 + Σ_j β_j X_ji. Baseline (Eq. 8): logit(p_i) = β_0 + β_1·distance + β_2·angle + β_3·(distance·angle). Extended (Eq. 9): + GK distance, players in triangle, body part, first-time, GK in triangle, one-on-one, open goal, technique, under pressure (16 parameters, 33 after one-hot).
- Hierarchical (Eq. 10): logit(p_ik) = β_0k + Σ_j β_jk·X_ji + β_{N+1,k}·X_{N+1,i}. Three models: BayesxG1 (baseline + position), BayesxG2 (extended + position), BayesxG3 (extended + player).
- Priors (Table 3): skew-normal (SN) with directional α where sign is predictable: distance SN(μ=−1,σ=5,α=−1); angle SN(μ=1,σ=5,α=1); one-on-one α=2; open goal α=4; under pressure α=−2; GK in triangle α=−2; position α={ST:2, AM:1, M:0, D:−2} with σ∼HN(γ=5); player α∈{2,0} by reputation (2 = good finisher). Neutral coefficients N(μ=0,σ=5).
- Prior sensitivity (§4.5): refit extended single-level model with (1) paper priors, (2) wide uniform, (3) tight uniform, (4) wide normal, (5) tight normal, (6) deliberately ill-suited (narrow, flipped skews); compared via MSD boxplots.
- Sampler validation: Bayes-theorem adjustment P(goal|position_i) = P(position_i|goal)·P(goal)/P(position_i) (Eq. 11) reproduces the hierarchical adjustments.

## Data sources named
StatsBomb open event data via StatsBombPy; 63,309 open-play shots (set pieces excluded), 42 columns, men only. EPL ~10,000+ shots; La Liga ~19,000 shots (Barcelona/Messi-heavy, authors note the bias risk); Bundesliga ~7,500 shots. Goals: 6,559 / 56,750 no-goal. Engineered features: distance to goal, shot angle, GK distance to goal, GK in shot triangle, players in shot triangle, opponents within 1 m, body part, first-time shot, one-on-one, open goal, technique, under pressure.

## Findings (numbers and facts, not vibes)
- Table 4 (frequentist): Baseline — RMSE 0.095, MAE 0.058, R² 0.428, Brier 0.086. Extended — RMSE 0.055, MAE 0.029, R² 0.826, Brier 0.076 vs. StatsBomb benchmark 0.075 ("nearly identical," comparable to industry-leading xG).
- BayesxG1 positional adjustments (Table 5): ST 0.009/0.010, AM 0.019/0.020, M −0.006/−0.005, D −0.042/−0.044 (attacking midfielders get larger positive adjustments than strikers).
- BayesxG2: positional adjustments collapse — "few adjustments now exceed 0.01"; richer situational features absorb what looked like position effects. Ordering (AM > ST > M > D) and shrinkage replicate in La Liga and Bundesliga.
- BayesxG3 player effects persist even with extended features: Pirès adjustments up to +0.3 above baseline; Agüero consistently positive; Vardy/Coutinho/Barkley ≈ minimal; Shelvey substantially negative. Aubameyang anomaly: high conversion (20.6%) but negative adjustments — his goals come from already-high-xG chances.
- Player conversion rates (selection, min 50 shots): EPL: Pirès 56/14 (25.0%), Agüero 112/20 (17.9%), Vardy 111/19 (17.1%), Coutinho 105/8 (7.6%), Barkley 82/6 (7.3%), Shelvey 51/0 (0%); La Liga: Bale 89/20 (22.5%), Messi 1862/375 (20.1%), Eto'o 295/62 (21%), Bebé 74/2 (2.7%); Bundesliga: Hernández 63/16 (25.4%), Aubameyang 107/22 (20.6%), Lewandowski 147/28 (19%).
- Prior sensitivity: paper's priors win (closest to baseline/benchmark); wide normal ≈ comparable; wide uniform poor spread (non-convergence at fixed budget); tight uniform/normal systematically underestimate (mass ≤0.8); ill-suited narrow, few predictions >0.5.
- File's adversarial caveats: player priors use subjective reputation (α=2 for "good finishers"), not data-driven; BayesxG3 player selection is post-hoc (chosen by observed conversion rate — circularity risk in the showcase); team effects confound player effects (Vardy/Leicester vs. Agüero/City); MCMC cost not quantified.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Position effects can be artifacts of omitted situational features — BayesxG1→BayesxG2 lesson transfers directly to NFL: apparent TE/RB/WR group effects on EPA may vanish once coverage/pressure features are included (OTHER).
- Player effects persist even with rich features (Pirès +0.3, Agüero positive, Shelvey negative) — supports player-level random effects in NFL completion-probability models; partial pooling handles small-sample players (QB-BEHAVIOR).
- Team effects confound player effects — crossed random effects (QB vs. scheme vs. supporting cast) are the paper's own stated extension, directly NFL-relevant (COACHING).
- Reputation-based player priors and post-hoc player selection are the trust red flags: use empirical-Bayes priors estimated from prior-season data instead (TRUST-SIGNAL).

## Engine-actionable? (yes/no + one-line what)
Yes — the Bayesian hierarchical logistic regression with directional skew-normal priors is the principled upgrade to GSE's shrinkage-based CPOE: pilot hierarchical completion-probability models (QB/receiver random effects) vs. current shrinkage CPOE on time-ordered 2024–2025 passes, adopt only if hierarchical wins held-out log-loss on QBs with <200 attempts and the chosen priors rank first on the §4.5-style prior-sensitivity MSD battery; do not adopt the soccer xG model itself (duplicates 2301.13052, already absorbed).
