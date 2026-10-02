# arxiv-program/research/2026-09-21/arxiv-deep/1810-afbart-shot-intensity-surfaces.md
## What it is (1-2 sentences)
AFBART (arXiv:2503.07789): Adaptive Functional Bayesian Additive Regression Trees — a fully nonparametric function-on-scalar regression that estimates NBA players' 2-D shot-intensity surfaces using data-adaptive basis functions plus BART-modeled coefficient functions, with calibrated uncertainty. Adjudicated ADAPT as GSE's nonparametric shot-diet regression feeding 3P/FG-attempt prop distributions.
## Key metrics/methods (formulas where given, else "not specified")
- Model: yᵢ(s) = Σₖ βₖ(xᵢ)φₖ(s) + εᵢ(s); φₖ adaptive orthonormal basis (matrix orthonormality constraint for identifiability, mixture-of-normals prior with thin-plate-spline roughness penalty); βₖ(x) = Σₜ g(x; Tₜ, Mₜ) (sum of trees, 50-tree BART ensemble).
- Posterior sampling via Gibbs/Metropolis-Hastings MCMC (Algorithm 1); defaults 20 basis functions, 50 trees; validation metrics RMSPE, MIS (interval score), MCRPS.
## Data sources named
NBA 2017–18 regular season: 191 players with >400 FGA (rookies excluded); shot data from nbasavant, summary stats from basketball-reference; 24 scalar covariates per player (position, age, MP, PER, TS%, 3PAr, WS, etc.); surfaces pre-estimated via LGCP (two-stage).
## Findings (numbers and facts, not vibes)
- Simulation (3 cases × 2 noise levels): AFBART had the lowest RMSPE, MIS, and MCRPS in all 6 settings — e.g., Case 1 low noise RMSPE 0.07 vs FBART 0.68 vs BFOSR 13.38 vs LLR 20.31; Case 3 realistic surfaces RMSPE 0.34 vs 0.69/0.90/3.02.
- Real-data 4-fold CV: AFBART lowest on both RMSPE and MCRPS; FBART-TPS second; FBART-FPC third (exact CV numbers were blanked in the HTML extraction — ordering only is verifiable).
- Variable importance top 5 (posterior mean splitting proportions): position, block %, steal %, games played, 3-point attempt rate.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (QB-BEHAVIOR) INFERENCE — applied by analogy: predicts a player's full spatial shot distribution from attributes, the player-behavior model that feeds prop distributions; credible-interval width feeds the uncertainty budget for 3P/FG-attempt props.
- (OTHER) Adaptive-basis functional BART machinery itself (pairs with 1809's MFM-archetype priors and 1806's matchup shrinkage per the file).
## Engine-actionable? (yes/no + one-line what)
Yes — implement AFBART (or a variational reimplementation if MCMC is too slow) on GSE's NBA shot-attempt coordinates + player covariate store, with synthetic positional-average surfaces as benchmarks; test on the paper's simulation Case 3 and 4-fold CV against FBART-TPS.
