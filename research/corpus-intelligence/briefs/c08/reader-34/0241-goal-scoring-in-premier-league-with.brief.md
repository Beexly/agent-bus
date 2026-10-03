# docs/arxiv-program/research/2026-09-21/arxiv-deep/0241-goal-scoring-in-premier-league-with.md
## What it is (1-2 sentences)
Read-note on arXiv:2108.05796 (Lê & Phạm 2021) modeling Premier League home goals with Poisson GLM over 2000/01–2020/21. Verdict recorded in the file is REJECT: graduate-coursework analysis with post-hoc features, in-sample AIC selection only, no out-of-sample validation.

## Key metrics/methods (formulas where given, else "not specified")
- GLM Poisson (log link): log(E[FTHG]) = β₀ + β₁·HTAG + β₂·logHST + β₃·logHC + β₄·HR + β₅·AR + Σ_team β_team·1{HomeTeam=team}
- Goodness-of-fit p = 1 − stats.chi2.cdf(deviance, df_resid)
- AIC used for model selection across 63 exhaustive subsets of 6 predictors
- Diagnostics: Pearson residuals vs fitted, Q-Q plot, standardized residuals vs leverage; 6 outliers removed

## Data sources named
- football-data.co.uk (public): all Premier League matches 2000/2001–2020/2021, "over 7000 matches", 43 teams
- Software: Python (numpy, pandas, itertools, stats, statsmodels, matplotlib, seaborn). No code repo shared.

## Findings (numbers and facts, not vibes)
- Pooled chi-square test of FTHG vs Poisson(mean 1.52): p < 0.05, reject Poisson; authors then subset teams until the test passes (cherry-picked compatibility).
- Best model (HTAG + logHST + logHC + HR + AR + HomeTeam): deviance 5622.496, df_resid 5821, AIC 17006.4877, p_chisq 0.968193.
- Coefficients: logHST 0.6947 (z=31.04, strongest driver); logHC −0.2298 (z=−12.27, NEGATIVE — multicollinearity artifact per the note); HR −0.1733 (z=−3.63); AR 0.140 (z=4.45); HTAG 0.0246 (p=0.11, n.s.; ΔAIC vs dropping = 0.53).
- Weakest team dummies: Wigan −0.5976, Portsmouth −0.5485, Sunderland −0.5156.
- All features are post-hoc match stats (shots on target, corners) — knowable only after the match; model is descriptive, not predictive.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Poisson GLM workflow template for count outcomes (goals) — domain is soccer, no NFL transfer.
- OTHER (anti-lesson): negative partial correlation of corners given shots on target illustrates multicollinearity danger in post-hoc stat models.

## Engine-actionable? (yes/no + one-line what)
No — REJECT: duplicate of inventoried Poisson/Dixon-Coles methods, no out-of-sample validation, post-hoc features make it non-deployable.
