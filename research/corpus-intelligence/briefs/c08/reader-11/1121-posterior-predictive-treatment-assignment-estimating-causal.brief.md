# docs/arxiv-program/research/2026-09-21/arxiv-deep/1121-posterior-predictive-treatment-assignment-estimating-causal.md

## What it is (1-2 sentences)
Ledger of arXiv:1710.08749v1 (Zigler & Cefalu 2017, verdict ADAPT). Proposes Posterior Predictive Treatment Assignment (PPTA): a two-stage modular Bayesian procedure for causal-effect estimation under poor propensity-score overlap, stochastically including units with probability their posterior-predictive treatment assignment differs from observed.

## Key metrics/methods (formulas where given, else "not specified")
- Marginal structural model E(Y_a) = θ + Δa; inclusion S_i ~ Bernoulli(p_i), p_i = P(A_i^rep ≠ A_i^obs | X, data) under the posterior-predictive treatment model.
- Two-stage design with no outcome feedback into the design stage (modularization / "cutting feedback"); computation: m₁ design MCMC draws × m₂ outcome-model chains, pooled.
- Estimand is an overlap-population effect (ATO, Li et al. 2016 spirit) — explicitly NOT guaranteed to be the full-population ATE ("there is no guarantee that the procedure averages over a single quantity").
- Adoption gate in file: coverage ≥90% with bias ≤50% of IPTW's bias under poor overlap, at ≤20% wider intervals than overlap weights.

## Data sources named
Simulation: 500 replications, n=500, five normal covariates, confounding strength B varied 0 → 2.5, true outcome effect 0.2. Application: US power plants 2002–2014, yearly n = 1,505–2,028, treatment prevalence 15%–47% (scrubber installation / emissions controls; EPA public sources, not redistributed). Comparators: IPTW, truncated IPTW (IPTWt50), Crump et al. pruning, overlap weights.

## Findings (numbers and facts, not vibes)
- Simulation: PPTA and overlap weights had the least variability as overlap worsened; IPTW became unstable and biased under poor overlap.
- Application: PPTA achieved near-zero standardized differences (best balance) but wider intervals than competitors — the price of honest uncertainty.
- Paper's verdict: PPTA results were more credible than IPTW (with or without truncation) given subject-matter knowledge of emissions-control technology.
- Honest limits flagged: estimand varies with S; m₁×m₂ MCMC is expensive vs closed-form weighting; strong ignorability untestable; no code released.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: causal estimation of mid-season coordinator/QB changes on EPA/success rate with few treated units and poor overlap — the file's named GSE use case.
- OTHER: Bayesian causal-inference design for limited-overlap problems; extension over the corpus's existing causal ledgers (0142, 0265, 0272, 0771), none of which cover limited-overlap Bayesian estimation.

## Engine-actionable? (yes/no + one-line what)
Yes — implement PPTA (PyMC/Stan two-stage, Bayesian logistic propensity → posterior-predictive inclusion → Bayesian outcome model) for causal questions with few treated units (QB changes, coordinator firings, rest advantages) on nflverse 2015–2024, falling back to overlap weights if it doesn't beat them.
