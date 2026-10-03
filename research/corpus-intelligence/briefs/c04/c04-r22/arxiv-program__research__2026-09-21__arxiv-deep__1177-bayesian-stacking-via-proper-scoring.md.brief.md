# docs/arxiv-program/research/2026-09-21/arxiv-deep/1177-bayesian-stacking-via-proper-scoring.md

## What it is (1-2 sentences)
A full-text ledger of Wadsworth & Niemi (2025), arXiv:2509.04203v1 — generalizing Bayesian stacking via a Gibbs (generalized-Bayes) posterior over simplex weights driven by any proper scoring rule, with an exponentially-discounted dynamic extension for nonstationary model skill. Verdict: ADAPT — a principled stacking engine for GSE's ensemble that tunes weights against log-loss/Brier directly, sitting between the combiner and the CQR calibration layer.

## Key metrics/methods (formulas where given, else "not specified")
- Gibbs posterior: π_n^(η)(ω) ∝ exp{−η n S_n(ω)} π(ω), where S_n(ω) = (1/n) Σ_i S(F_{ω,i}, y_i) for proper scoring rule S, η > 0 learning rate, π(ω) Dirichlet prior; point estimate = posterior mean ("SGP").
- η values used: 15 (static simulation), 1 with Dirichlet(50·1_4) prior (SIR); dynamic extension: exponentially discounted risk with discount α = 0.98, weights adapted to drifting model skill (empirical — authors note the consistency theorem covers IID + fixed-model-set only, not the dynamic variant).
- Comparators: BMA, equal weights (EQW), average of single-best (AVS), pseudo-BMA.
- Assumptions: IID data, fixed candidate model set, proper scoring rule, correct prior support. Authors caveat: linear pools can remain miscalibrated even when sharp.

## Data sources named
- (a) Static simulation: truth 0.65×N(3,1)+0.35×N(6.5,1); six unit-variance normal candidates with means {0,2,4,6,8,10}; n ∈ {10,20,50,100,200}; 500 replicates; 1,000 test draws.
- (b) Dynamic simulation: 50 time points, component means following a random walk with variance 0.01; 500 replicates.
- (c) SIR epidemic simulation: 3,000 replicates, 35 weeks, four candidate models, 10,000 predictive draws.
- (d) Real data: FluSight 2023–24 (public, CDC) — 53 regions, 29 weeks, one-week-ahead hospitalization forecasts from multiple teams' models. Missing forecasts excluded.
- Code/data availability: not stated in the paper.

## Findings (numbers and facts, not vibes)
- Static simulation: SGP concentrates on the best-supported models as n grows; beats BMA/EQW on the proper-score criterion it targets.
- Dynamic simulation: discounted SGP (α=0.98) tracks the drifting best model better than static stacking.
- FluSight 2023–24 (headline real-data result): SGP was the best method in 31 of 53 regions and the worst in only 3; weekly first-place counts over 29 weeks — SGP 14, BMA 8, AVS 5, EQW 2. These are proper-score rankings on hospitalization forecasts, not sports outcomes; η was tuned per setting (15 static, 1 SIR), so some tuning optimism applies.
- Limitations: dynamic α=0.98 variant has no theory; missing forecasts excluded (paper gives no guidance for ragged panels); linear pools can stay miscalibrated — GSE still needs its calibration stack on top; η tuning ad hoc per experiment; all real-data evidence is one FluSight season (single-regime risk).
- GSE implementation spec in the ledger: Gibbs posterior with S = log score (primary; Brier robustness check), Dirichlet prior, η tuned walk-forward; posterior-mean weights via MCMC/importance sampling on the simplex (cheap for few components); dynamic discounted-risk α=0.98 recomputed weekly; feed SGP pool into existing CQR layer; effort ~3–4 days with the walk-forward η/α tuner.
- Acceptance gate: adopt static or dynamic SGP if 2025 walk-forward log-loss improves ≥0.005 over the best baseline (DM p<0.05) with no Brier regression; ragged-panel veto: implementation must handle components missing >10% of weeks (renormalize over available models) before ship.
- Improvement experiment: adaptive η_t — a hierarchical Gibbs posterior where η follows recent volatility of the score differential between SGP and the best single model (high disagreement → lower η; stable regime → higher η).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Gibbs-posterior scoring-rule stacking and the dynamic α=0.98 discount for drifting model skill → OTHER (ensemble combination methodology; no QB-behavior, coaching, OL, or scheme content).

## Engine-actionable? (yes/no + one-line what)
Yes — implement SGP stacking (log-loss-targeted, η walk-forward-tuned, α=0.98 dynamic mode with ragged-panel handling) as GSE's combination rule feeding the CQR calibration layer; adopt only if 2025 walk-forward log-loss improves ≥0.005 (DM p<0.05) with no Brier regression.
