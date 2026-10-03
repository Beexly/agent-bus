# docs/arxiv-program/research/2026-09-21/arxiv-deep/1125-assumption-lean-quantile-regression-efficient-influence.md

## What it is (1-2 sentences)
Deep read (ledger #1125) of arXiv:2404.10495v2 on assumption-lean quantile regression: defines a model-free conditional-association estimand Ψτ, derives its efficient influence function, and builds cross-fitted DML and TMLE estimators with honest confidence intervals. Verdict in file: ADAPT — the rigorous path to GSE's distributional player/prop analysis (median vs tail effects) with valid CIs.

## Key metrics/methods (formulas where given, else "not specified")
- Estimand: Ψτ = E[(A−A*){Qτ(Y|A,L) − Qτ(Y|A*,L)}] / E[(A−A*)²], equivalently residualized via A − E(A|L) — weighted average of conditional quantile contrasts, identified without a parametric quantile model.
- Efficient influence function (EIF) involves the conditional quantile, exposure regression, conditional expectation of the quantile, and the density at the quantile.
- Estimators: cross-fitted DML and TMLE; TMLE fluctuation step targets the EIF; nuisance models need faster-than-n⁻¹/⁴ rates (or product-rate conditions).
- GSE spec in file: Python (DoubleML-style cross-fitting + TMLE fluctuation); gradient boosting for E(A|L), quantile forests for Qτ, kernel density for f(Y|·) at the quantile; start at τ ∈ {.25, .5, .75} before extremes; ~3 engineer-weeks.
- Stabilized-density improvement: conformalized quantile-density with guarded fallback when density < ε.

## Data sources named
- Simulations: experiments 1–2, n=500+, varying τ; naive plug-in vs cross-fitted DML vs TMLE on bias and coverage.
- Application: 3,925 Belgian participants (excess weight exposure → health-care costs); median and 90th percentile; restricted (not public) health data.
- Proposed GSE data: nflverse player-game features 2015–2024; semi-synthetic NFL test (real covariates, simulated heterogeneous quantile effects, 200 replications).

## Findings (numbers and facts, not vibes)
- Experiment 1, setting 1, n=500, τ=.5: plug-in bias −70×10⁻² with 0.1% coverage of 95% intervals → TMLE-CF bias 1.2×10⁻² with 97.2% coverage. [TRUST-SIGNAL: honest CI methodology]
- Belgian application: TMLE estimated excess-weight health-cost differences of €205.09 at the median and €1,142.42 at the 90th percentile — tail effect 5.6× the median (the distributional point). [TRUST-SIGNAL: distributional analysis]
- Caveats from paper/file: extreme-quantile performance degrades; near-zero density estimates destabilize the estimator; nuisance-rate conditions (faster than n⁻¹/⁴) are real assumptions; no code released.
- Adoption gate in file: ADOPT if TMLE-CF achieves 90–98% coverage with |bias| ≤ 25% of plug-in bias at τ=.5/.75 on semi-synthetic test; REJECT (restrict to central quantiles) if coverage collapses at τ=.9.
- Distinct from existing corpus ledgers 1075/1088/1089 (conditional-causal/DML estimand, not plain quantile methods). [OTHER: corpus overlap — extension, not duplicate]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Honest-CI distributional inference for prop/player analysis: [TRUST-SIGNAL]
- Tail-vs-median effect quantification (e.g., matchup/weather/rest on yardage distribution): [TRUST-SIGNAL]
- Corpus-overlap status (extension of calibration/CQR lane): [OTHER]

## Engine-actionable? (yes/no + one-line what)
yes — Adopt the cross-fitted TMLE distributional pipeline for prop/matchup analysis (median vs 90th percentile effects with honest CIs), gated on semi-synthetic coverage test; restrict to central quantiles if τ=.9 coverage collapses.
