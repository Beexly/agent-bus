# arxiv-program/research/2026-09-21/arxiv-deep/1084-isotonic-distributional-regression.md
## What it is (1-2 sentences)
Deep read of Henzi, Ziegel & Gneiting, "Isotonic Distributional Regression" (arXiv:1909.03725v3, JRSS-B 2021): a tuning-free, nonparametric method that learns calibrated conditional outcome distributions via isotonic regression under proper scoring rules. Verdict in-file: **ADAPT** as GSE's benchmark engine-output postprocessor (lane: calibration_uncertainty).
## Key metrics/methods (formulas where given, else "not specified")
- CRPS(F,y) = ∫(F(z) − 1{y≤z})²dz, with mixture representations in terms of quantile loss and elementary scoring functions.
- Theorem 2.1: IDR is the unique minimizer of mean CRPS over conditional CDFs monotone (stochastic order) in a covariate partial order (min-max formula (10)).
- Theorem 2.2 universality: simultaneously optimal under essentially all quantile/threshold-weighted proper scoring rules; threshold-calibrated in-sample (strongest calibration notion); nests isotonic quantile regression and binary classifiers; no quantile crossing ever.
- Computation: one QP per threshold via OSQP, warm-started; subagging variant idrbag (100 subsamples of size n/2) smooths and speeds: n=10,000 naive 11.7s → 1.1s sequential; subagging 2.5s, 0.5s on 8 cores.
- Prediction at new x: F(z) = ½(max over successors + min over predecessors); partial orders: componentwise (Prop 3.1 — adding covariates can only improve in-sample fit), empirical stochastic order ⪯_st (equivalent to sorted-componentwise), empirical increasing convex order ⪯_icx (sums of top order statistics, Gini link (22)).
- Theorem 2.3: uniform consistency under mild conditions.
## Data sources named
- Simulations: X~Unif(0,10), four scenarios (smooth Gamma, discontinuous +10·1{X≥5}, non-isotonic −2·1{X≥7}, Poisson); 500 training replicates per n∈{500,1000,2000,4000}; test m=5,000.
- Case study: ECMWF 52-member ensemble + airport observations (London/Brussels/Zurich/Frankfurt), 2007-01-06 to 2017-01-01 (TIGGE public data), ~700-instance 2015–2016 test. Competitor code in ensembleBMA/ensembleMOS/crch R packages. R package: isodistrreg (CRAN); Python isodisreg on GitHub.
## Findings (numbers and facts, not vibes)
- IDR best under discontinuity; subagging always slightly better (Table 1); robust under isotonicity violation.
- ECMWF case study: competitive with hand-built parametric SOTA (BMA/EMOS/HCLR) on CRPS, beats BMA widely, uniform PITs, better than EMOS/HCLR on precipitation-probability Brier score; weaker on accumulation magnitudes (cannot extrapolate past training max; ignores ensemble spread).
- Weaknesses: cannot extrapolate beyond training response range; cannot distinguish distributions agreeing in location but differing in spread/shape; needs large training sets (~2,500–3,000 days); boundary spiking of isotonic estimators (Wu et al. 2015).
- Numeric gate set by reader: adopt idrbag if ≥5% relative mean-CRPS improvement over raw engine on held-out 2025 games AND beats incumbent GSE recalibration.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: calibration/uncertainty — universal distributional postprocessor for engine outputs (spreads, totals, win probabilities → calibrated conditional outcome distributions for Kelly/prop pricing); no QB/coaching/OL content.
## Engine-actionable? (yes/no + one-line what)
yes — make idrbag the benchmark postprocessor converting engine point forecasts into calibrated full outcome CDFs for prop pricing and Kelly sizing, gated on ≥5% held-out CRPS improvement; follow-up: graft parametric tail (GPD) for blowouts and ⪯_icx dispersion covariate.
