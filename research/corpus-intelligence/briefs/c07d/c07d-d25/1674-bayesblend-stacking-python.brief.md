# arxiv-program/research/2026-09-21/arxiv-deep/1674-bayesblend-stacking-python.md
## What it is (1-2 sentences)
BayesBlend (Allen, Gabry, Goodrich, Ledger Investing team, arXiv:2405.00158) — a pip-installable Python package providing production-oriented Bayesian model averaging and stacking (pseudo-BMA, MLE stacking, Bayesian stacking, hierarchical Bayesian stacking) with an end-to-end blend-into-predictions API no existing package offers. Verdict in file: ADAPT as the reference implementation candidate for GSE's stacking lane.

## Key metrics/methods (formulas where given, else "not specified")
- Pseudo-BMA (eq. 5): w_k = exp(elpd̂^k_{psis-loo}) / Σ_{k'} exp(elpd̂^{k'}_{psis-loo}), with elpd̂^k_{loo} = Σ_i log p(y_i|y_{−i},M_k) estimated by PSIS importance-weighted posterior draws (eq. 4).
- Complete-pooling stacking (eq. 6): ŵ = argmax_w Σ_i log Σ_k w_k p(y_i|y_{−i},M_k) — unit-simplex constrained in the applied variant.
- Hierarchical (covariate-dependent) stacking (eqs. 7–8): p(y_i|y_{−i}) = Σ_k w_{ik} p(y_i|y_{−i},M_k); w_{ik} = softmax(w*_{i1:K}); w*_{ik} = α_k + β_k x_i; (β_1…β_K) ~ Normal(μ,σ). Identifiability: fix one model's weights to zero (reference model, always the first in the dictionary).
- API: `Draws` dataclass (log posterior predictive densities + posterior predictions from any sampler — CmdStanPy, ArviZ, NumPy; backend-agnostic; first dim = posterior samples) feeds four `BayesBlendModel` subclasses: `MleStacking`, `BayesStacking` (full Bayesian weight inference via MCMC, informative priors; regularizes weights toward uniform relative to MLE), `HierarchicalBayesStacking` (implements Yao et al. 2022a), `PseudoBma` (pseudo-BMA / pseudo-BMA+ from PSIS-LOO elpd).
- Killer feature: `.fit` estimates weights, `.predict` returns a new blended `Draws` — including training on one dataset and blending on out-of-sample data, which no existing package (loo, ArviZ) supports.
- Implementation notes: requires CmdStan 2.34.1 via CmdStanPy 1.2.2 for Bayesian variants; PSIS-LOO can come from ArviZ or loo; hierarchical covariates standardized as x̄ = (x − mean(x))/(2·sd(x)); α_k = average weight of model k, β_k = change per 2SD of covariate.
- Related work cited: Yao et al. 2018 stacking (ledger 1672); Yao et al. 2022a hierarchical stacking (ledger 1673); Vehtari et al. 2017 PSIS-LOO; R `loo` package; ArviZ (Kumar et al. 2019); NumPyro hierarchical-stacking example; Meyers (2015) insurance loss dataset.

## Data sources named
- Toy Bernoulli (success probability drifting over trials).
- Insurance loss development: Meyers (2015), 50 programs, paid-loss triangles; candidate parametric development curves.
- Insurance loss forecasting: leave-future-out over accident years; candidates AR(1), SSM, Linear-Hk, GP.
- Cross-reference check: not in the ledger corpus (dedup vs `ledger-tracker-750.jsonl`, `wave4b-dedup-baseids.txt`, existing `arxiv-deep` headers: zero hits).

## Findings (numbers and facts, not vibes)
- Toy Bernoulli (drifting success probability): hierarchical stacking achieves the highest blended ELPD (expected — the only blend modeling the time trend); all blended distributions beat either candidate in isolation.
- Insurance loss development: Bayesian stacking models perform best, hierarchical slightly better than non-hierarchical; blended ELPD practically indistinguishable from the best single candidate (Exp 1+); pseudo-BMA performed *worse* than the best candidate.
- Insurance loss forecasting (leave-future-out over accident years): only pseudo-BMA+ and MLE stacking beat the best single candidate (AR(1)); SSM wins on LFO test data but AR(1) wins on validation — test-data winners don't generalize, and blending lands remarkably close to the out-of-sample best without knowing it in advance. Bayesian/hierarchical stacking spread weight to Linear-Hk and GP models (less aggressive sparsification); MLE/pseudo-BMA+ concentrated on SSM + AR(1).
- Software gap documented: `loo` (R) and `arviz.compare` give weights only — no Bayesian weight inference, no hierarchical stacking, no blending/prediction step.
- Limitations: primarily a software paper (theory restates Yao et al. 2018/2022a, not new); CmdStan dependency (compile times in CI); single-company maintenance risk (Ledger Investing); hierarchical stacking needs the covariate story decided in advance (same overfitting cautions as 2101.08954); evaluated on insurance data only — sports-scale categorical hierarchies (teams × weeks) not demonstrated.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER (ensemble/calibration-safety plumbing):** This is the reference tooling for GSE's stacking lane — the `Draws` abstraction (log-likelihood matrix + posterior predictions, first dim = posterior samples) is exactly the artifact to standardize across GSE's multi-framework model zoo, with ArviZ/CmdStanPy integrations ready. Blending then feeds calibration (CQR/conformal) and Kelly sizing. Serves the calibration/sizing and ensemble programs.
- **QB-BEHAVIOR:** HierarchicalBayesStacking implements regime-dependent weights (weights varying with spread bucket, dome/outdoor, week) turnkey — the lane's answer to QB-regime-dependent model weighting (e.g., weight migrating between models after a QB change mid-season). The insurance time-series example maps directly onto GSE's season structure: train blending on early weeks, apply to future weeks (leave-future-out), with hierarchical weights on a time covariate. Serves QB-behavioral-profiles and calibration programs.
- **COACHING:** Regime-dependent stacking weights (week, spread bucket, dome/outdoor) are a vehicle for coaching-regime adaptation — e.g., weight shifts after coordinator changes — without refitting the zoo. Secondary.
- **TRUST-SIGNAL:** The honest finding that "blending ≠ always the best" and pseudo-BMA can *lose* to the best candidate is a trust-relevant anti-hype result: adopt the plumbing, not the assumption that blending always wins; the proposed test (do weights agree with ledgers 1672–1673 manual pipeline; does hierarchical-over-time weight migration look sensible mid-season) is the trust discipline. Serves trust-target intake.

## Engine-actionable? (yes/no + one-line what)
Yes — adopt (or vendor-inspire) BayesBlend's `Draws` + stacking-model pattern as GSE's ensemble plumbing: standardize heterogeneous model outputs into one blending interface, with Bayesian and hierarchical (week/spread-bucket/dome) stacking and a blend-forward `.predict` for weekly production runs feeding calibration and Kelly sizing.
