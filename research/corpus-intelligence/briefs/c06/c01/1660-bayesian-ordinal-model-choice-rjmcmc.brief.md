# arxiv-program/research/2026-09-21/arxiv-deep/1660-bayesian-ordinal-model-choice-rjmcmc.md
## What it is (1-2 sentences)
Joint Bayesian model choice over the 2^p proportional-odds (PO) vs non-proportional-odds (NPO) configurations per variable in cumulative-link ordinal regression via reversible-jump MCMC, with stochastic ordering enforced by bounding proposals to a covariate-range hyper-rectangle. The per-variable PO/NPO structure test is the right machinery for auditing GSE's ordinal margin-bucket models — though the paper recommends LOO/WAIC comparison first and reserves RJ-MCMC for ambiguous cases.
## Key metrics/methods (formulas where given, else "not specified")
- Cumulative-link: logit(P(Y≤k|x)) = θ_k − x'β (PO) or θ_k − x'β_k (NPO), k=1..K−1; stochastic ordering requires θ_k − x'β_k increasing in k (enforced over observed covariate range only)
- RJ-MCMC with dimension-matching PO↔NPO proposals; posterior model probabilities from chain occupancy; random effects supported
- Code: github.com/tjmckinley/BayesOrd (R)
## Data sources named
Simulation: 100 datasets × 3 scenarios, n=1,000, 7 predictors, 3 ordinal levels, 200,000 MCMC updates, 10,000 burn-in; real: 738 dogs, repeated clinical measures, 500,000 iterations × 2 chains
## Findings (numbers and facts, not vibes)
- PO-truth: 3/700 variable-classifications wrong = 0.43% misclassification
- NPO-truth: 229/700 = 33% — NPO structure much harder to identify; mixed: 124/700 = 18% (95 NPO→PO under-fit, 29 PO→NPO)
- Dog data: strong posterior support for reproductive status, age, confinement, observed clinical signs; most selected effects had PO structure
- Limitations: ordering not guaranteed outside observed covariate range; RJ-MCMC scales poorly (2^p space); no comparison to simpler LOO/WAIC alternatives; only 3 ordinal levels tested
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: PO-assumption audit for GSE's ordinal models (7-bucket NFL margin model; player-prop yard buckets) — build gse.ordinal.StructureSelect: fit PO / full-NPO / per-variable-NPO, select by LOO/WAIC, expect most effects PO with possible NPO for home/divisional; guard: check stochastic ordering on an out-of-range covariate grid and reject violating predictions; improvement: fused-lasso partial-PO instead of hard RJ jumps (~10× faster)
## Engine-actionable? (yes/no + one-line what)
Yes — implement the PO/NPO structure audit via LOO/WAIC comparison first (not full RJ-MCMC); gate: structure-selected model beats PO-only by ≥0.003 log-loss on 2020–2024 holdout with no ordering violations on the covariate grid; if ≈PO-only, reject the machinery and keep PO.
