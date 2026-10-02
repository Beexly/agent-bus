# arxiv-program/research/2026-09-21/arxiv-deep/1673-hierarchical-stacking.md
## What it is (1-2 sentences)
Hierarchical stacking for Bayesian model averaging (Yao, Pirš, Vehtari, Gelman, 2021): generalizes stacking from one global weight vector to an input-dependent weight function w(x), with partial-pooling hierarchical priors that shrink small-cell weights toward the mean — plus theorems linking stacking weights to local-win probabilities, quantifying the heterogeneity dividend, and proving covariate-shift immunity.
## Key metrics/methods (formulas where given, else "not specified")
- p(ỹ|x̃,w(·)) = Σₖ wₖ(x̃)p(ỹ|x̃,Mₖ); LOO objective log p(w(·)|𝒟) = Σᵢ log(Σₖ wₖ(xᵢ)p_{k,−i}) + log p^prior(w)
- Discrete cells: softmax w_jk = exp(α_jk)/Σₖ exp(α_jk), α_jk|μₖ,σₖ ~ Normal(μₖ,σₖ) (σₖ→∞ no-pooling; σₖ→0 complete pooling); posterior mean w̄ mandatory (MAP degenerate at σ=0); additive ReLU features, GP priors, time-series recency reweighting variants
- Theorem 1: stacking weights ≈ Pr(model k is locally best); Theorem 3: elpd gain over selection ≥ max(L(1−ρ)(1−ε) − log K, 0) — largest when models locally separated and no single model dominates
- Covariate-shift immunity: if p(z|x), p(y|x,z) invariant, needs no reweighting (reweighted complete pooling has inflated/infinite variance)
- Model-check: PSIS-LOO elpd of the stacking model itself nearly free via eq. 28
## Data sources named
Bangladesh well-switching (n=3020, 5 models, 50 random 2000/1020 splits); Neal (1998) GP-regression bimodal data; 2016 US presidential election polling (8 models, one-week-ahead expanding-window backtest); Stan code in Appendix C
## Findings (numbers and facts, not vibes)
- Well-switching: hierarchical stacking best on test log predictive density, L₁ calibration error (20 bins), and the 10–200 worst test points; no-pooling stacking has the highest calibration error despite beating selection on elpd (pure overconfidence); model selection plateaus early as n grows, no-pooling collapses at small n, hierarchical dominates everywhere
- GP regression: hierarchical stacking beats complete pooling, mode-height, importance weighting under MAP/Laplace/importance resampling; under covariate shift matches exact-MCMC in the bulk, beats it in the tails
- Election: hierarchical > complete-pooling > no-pooling > selection; advantage largest early in cycle when polls are scarce; state-correlated prior adds small gain in scarce-data regimes
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: regime-dependent ensemble weights — learn input-varying stacking weights (cells: dome/outdoor × week-half × spread bucket × QB tier) with automatic small-cell shrinkage (ideal for the short NFL season); covariate-shift immunity for "this week's slate ≠ training distribution"; w(x) posterior as an interpretable local-fit diagnostic ("model X degrades in divisional games") guiding model improvement; design rule from Theorem 3: add models that win somewhere, not models better everywhere
## Engine-actionable? (yes/no + one-line what)
Yes — build discrete-cell hierarchical stacker on GSE backtests (Stan, ~1000 draws) on top of the n×K PSIS-LOO matrix; evaluate vs complete-pooling stacking on held-out weeks (mean LPD, binned calibration, worst-10% tail); must beat global stacking with ≤1 added week of compute discipline, else stay with plain log-score stacking.
