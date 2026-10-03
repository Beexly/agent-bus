# arxiv-program/research/2026-09-21/arxiv-deep/1674-bayesblend-stacking-python.md
## What it is (1-2 sentences)
A software paper (Allen, Gabry, Goodrich, Ledger Investing, arXiv:2405.00158) introducing BayesBlend, a pip-installable Python package for Bayesian model averaging and stacking with a backend-agnostic `Draws` container, full-Bayesian and hierarchical (covariate-dependent) stacking, and an end-to-end blend-into-predictions API. Verdict: ADAPT as the reference implementation candidate for GSE's stacking lane.
## Key metrics/methods (formulas where given, else "not specified")
- Pseudo-BMA: w_k = exp(elpd̂^k_{psis-loo}) / Σ_{k'} exp(elpd̂^{k'}_{psis-loo}) (eq. 5); elpd̂^k_{loo} = Σ_i log p(y_i|y_{−i},M_k) via PSIS importance-weighted draws (eq. 4).
- Complete-pooling stacking: ŵ = argmax_w Σ_i log Σ_k w_k p(y_i|y_{−i},M_k) (eq. 6), unit-simplex constrained.
- Hierarchical (covariate-dependent) stacking (Yao et al. 2022a): p(y_i|y_{−i}) = Σ_k w_{ik} p(y_i|y_{−i},M_k); w_{ik} = softmax(w*_{ik}); w*_{ik} = α_k + β_k x_i; (β_1…β_K) ~ Normal(μ,σ) (eqs. 7–8); identifiability via reference model.
- Four model classes: MleStacking, BayesStacking (Bayesian weight inference, regularizes toward uniform vs MLE), HierarchicalBayesStacking, PseudoBma; `.fit` estimates weights, `.predict` returns blended `Draws` — including train-on-one-dataset/blend-on-out-of-sample, which loo/ArviZ don't support.
## Data sources named
Toy Bernoulli (drifting success probability); insurance loss development (Meyers 2015, 50 programs, paid-loss triangles); insurance loss forecasting (leave-future-out over accident years). Code: BayesBlend on pip (CmdStan/CmdStanPy backend). Prior art: Yao et al. 2018 (ledger 1672), Yao et al. 2022a (ledger 1673), Vehtari et al. 2017 PSIS-LOO, R `loo`, ArviZ.
## Findings (numbers and facts, not vibes)
- Toy Bernoulli: hierarchical stacking achieves the highest blended ELPD; all blended distributions beat either candidate in isolation.
- Insurance loss development: Bayesian stacking best, hierarchical slightly better than non-hierarchical; blended ELPD practically indistinguishable from the best single candidate (Exp 1+); pseudo-BMA performed WORSE than the best candidate.
- Insurance loss forecasting: only pseudo-BMA+ and MLE stacking beat the best single candidate (AR(1)); SSM wins on LFO test but AR(1) wins on validation — test-data winners don't generalize, blending lands close to the out-of-sample best without knowing it in advance.
- Software gap: `loo`/`arviz.compare` give weights only — no Bayesian weight inference, no hierarchical stacking, no blend/predict step; BayesBlend is the only implementation with all three.
- Hierarchical covariates standardized as x̄ = (x − mean(x))/(2·sd(x)); reference model = first in dictionary.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: weight posteriors (vs point MLE weights) give an honest uncertainty statement about which model the data trusts — regularized toward uniform early season.
- OTHER: hierarchical stacking is the turnkey mechanism for regime-dependent ensemble weights (spread bucket, dome/outdoor, week) with partial pooling; the train-blend-on-future-weeks design matches NFL weekly production cadence; the `Draws` abstraction standardizes the heterogeneous model zoo into one blending interface.
## Engine-actionable? (yes/no + one-line what)
Yes — prototype a GSE stacking pipeline on one backtest season: convert 3–5 models into `Draws`, fit Mle/Bayes/Hierarchical stacking (covariate: week), compare blended ELPD on leave-future-out weeks against the manual 1672–1673 pipeline.
