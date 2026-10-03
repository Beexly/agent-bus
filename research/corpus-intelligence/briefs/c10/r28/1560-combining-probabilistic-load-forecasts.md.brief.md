# arxiv-program/research/2026-09-21/arxiv-deep/1560-combining-probabilistic-load-forecasts.md
## What it is (1-2 sentences)
Ledger for arXiv:1803.06730 (Wang et al. 2018), a quantile-forecast combination method (CQRA-T): per-quantile ensemble weights fit by minimizing pinball loss under nonnegativity + sum-to-one constraints, formulated as a linear program. Verdict ADAPT — intended as GSE's probabilistic-side combiner for quantile/prop outputs.
## Key metrics/methods (formulas where given, else "not specified")
- Pinball loss (Eq. 1); combination ŷ_{t,q} = Σ_n ω_{n,q} ŷ_{n,t,q} (Eq. 15); weights from min_ω Σ_t pinball_q s.t. Σω_n=1, ω_n≥0 (Eq. 14) → LP via auxiliary variables (Eq. 17); overall score L = mean pinball over test years × quantiles (Eq. 18).
- Simplex constraints make CQRA a special case of lasso → automatic model pruning; quantile crossing handled by naive rearrangement (Chernozhukov et al. 2010).
- Improvement experiment: cross-quantile smoothed CQRA — add fused-lasso penalty Σ_q‖ω_q − ω_{q−1}‖₁ to the LP so weights vary smoothly across quantiles.
## Data sources named
ISO New England hourly zonal load (8 zones + system total, 2013-01-01 → 2016-12-31); CER Irish smart-meter residential (10 consumers, 2009-07-15 → 2010-12-31); 13 individual models (QRNN, QRRF, QRGB) via R (qrnn, quantregForest, gbm) and YALMIP/MATLAB for the LP.
## Findings (numbers and facts, not vibes)
- ISO-NE (Table II): CQRA-T lowest pinball loss on all 9 profiles; average improvement vs best individual 4.39% (SYS: 269.953 vs 288.563; CT: 77.961 vs 81.478; ME: 17.492 vs 18.146).
- CER (Table III): CQRA-T best on 9 of 10 consumers (exception #1016: nothing beats best individual — stated negative); unconstrained QRA variants worse than best individual on all 10 consumers.
- Pruning (Fig. 5): models #12/#13 pruned for all quantiles; 6–9 of 13 models retained per quantile; weights not smooth across q.
- Cautionary: CQRA-E (simplex constraints on averaged quantiles) strongly worsened vs QRA-E (e.g., SYS 356.527 vs 276.417) — constraints help only with targeted-quantile regressors.
- Acceptance gate specified: ADOPT if CQRA-T cuts mean pinball ≥3% vs best individual sub-model quantiles on 2024 holdout and beats simple averaging by ≥1%; REJECT if LP prunes to a single model or unconstrained QRA-T matches it.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- 4.39% average pinball cut via simplex-constrained per-quantile LP (OTHER)
- Automatic sparsity/pruning of weak sub-models per quantile, interpretable retained-model sets (TRUST-SIGNAL)
- Constraint-on-wrong-regressors failure mode (CQRA-E disaster) as a guardrail for GSE's combiner design (TRUST-SIGNAL)
## Engine-actionable? (yes/no + one-line what)
Yes — per-market, per-quantile CQRA-T LP (scipy linprog, 1–2 days effort) to combine GSE sub-model quantile forecasts for spread/total props, with naive rearrangement and chronological T1–T4 validation.
