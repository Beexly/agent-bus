# docs/arxiv-program/research/2026-09-21/arxiv-deep/1790-skellam-regression-model-for-quantifying-positional.md

## What it is (1-2 sentences)
Deep-ledger summary of Pelechrinis & Winston (2020, arXiv:1807.07536v5): a Skellam regression that models soccer's final score differential directly (sidestepping the negative −0.06 home–away goal correlation that breaks bivariate Poisson), producing calibrated win/draw/loss probabilities and an "expected league points above replacement" (eLPAR) positional-value metric. Verdict: ADAPT.

## Key metrics/methods (formulas where given, else "not specified")
- Skellam PMF: P(z) = e^{−(λ1+λ2)}·(λ1/λ2)^{z/2}·I_z(2√(λ1λ2)); model Z ~ Skellam(λ1,λ2), log(λ1) = b1^T·x, log(λ2) = b2^T·x, fit by MLE. Win/draw/loss from PMF summation.
- Brier: B_s = (1/N)Σ_i Σ_{j=1}^{R}(p_{ij} − o_{ij})².
- eLPAR: eLPAR_p(φ) = 3·δP_w + 1·δP_d; time-weighted eLPAR_p = (1/T)Σ_φ t_φ·eLPAR_p(φ). Replacement level = mean FIFA rating of bottom salary decile (GK 68.3, defense 64.4, midfield 64.5, attack 67.5).
- Covariates: home-minus-away average FIFA rating of defensive line, midfield, attack, GK (x_D, x_M, x_A, x_GK). Validation: 80/20 random split, predicted-vs-actual differential distribution, out-of-sample Brier vs climatology, calibration curves in 0.1 bins.

## Data sources named
Kaggle European Soccer Database (21,374 games, 11 European leagues, seasons 2008-09 to 2015-16); FIFA video-game overall ratings (~11,060 players, ~2 readings/season, scraped from sofifa.com); Spotrac 2015-16 EPL contract values; code/data at github.com/kpelechrinis/eLPAR-soccer.

## Findings (numbers and facts, not vibes)
- Coefficients (N=21,374): log(λ1): x_D 0.01761***, x_M 0.02559***, x_A 0.00747***, x_GK 0.00142 (n.s.); log(λ2): x_D −0.02607***, x_M −0.01759***, x_A −0.01095***, x_GK −0.00313**. Goal dispersion ≈ 1.01 home / 1.10 away (Poisson justified).
- Out-of-sample Brier 0.58 vs climatology baseline 0.65 (home 46% / away 29% / draw 25%).
- Calibration curves "practically on top of the y=x line"; model never predicts draw prob >30%.
- eLPAR: same-rated defender adds most, then midfielder, then attacker, GK least; every EPL team underpays defenders; mean absolute salary-performance deviation ≈ 9.5%.
- Limitations flagged: random (not time-ordered) 80/20 split; NFL transfer needs key-number treatment (±3, ±7 margin spikes) and draw-mass redistribution.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: margin-distribution modeling — full margin PMF from covariate differentials yields closed-form P(cover) and P(over) surfaces per game.
- OTHER: positional economics template (eLPAR → NFL ePAR vs cap dollar) for cap-efficiency content.
- TRUST-SIGNAL: calibration validation protocol (0.1-bin curves vs y=x, Brier vs climatology) directly reusable for engine win-prob QC.
- OTHER: covariance-free argument — Skellam PMF independent of bivariate correlation, relevant because NFL home/away scoring also shows weak correlation.

## Engine-actionable? (yes/no + one-line what)
Yes — adapt the Skellam-regression template to NFL final-margin distribution with unit-strength differentials as covariates, producing a closed-form spread/total probability surface complementary to the engine's Monte Carlo (ledger §11 gives a 3–4 day spec with acceptance gate: out-of-sample Brier < climatology by ≥0.02 and P(cover) calibration slope ∈ [0.9, 1.1]).
