# arxiv-program/research/2026-09-21/arxiv-deep/1521-calibrated-predictive-distributions-samples.md

## What it is (1-2 sentences)
Research ledger on "Calibrated Predictive Distributions from Sample-Based Generators" (Wang, Tzeng, Fan, Huang 2026, arXiv:2609.19035) — a method (CPIT) that turns a sample-only Monte Carlo forecaster into a calibrated predictive distribution via affine bias correction plus conformal PIT recalibration. The ledger's verdict is ADAPT: CPIT is a drop-in post-processing layer for GSE's Monte Carlo game samples to get threshold-coherent exceedance probabilities for margin of victory.

## Key metrics/methods (formulas where given, else "not specified")
- Bias-Corrected Conformal PIT: randomized PIT u_i=(N_i+V_i(N_i^*+1))/(m+1); conformal calibration map Ĉ(t)=(1+Σ1{u_i≤t})/(N+1); calibrated CDF F̃^e_x(y)=Ĉ_m(F̃^adj_x(y)); rank-cell weights w_j=Ĉ_m(j/m)−Ĉ_m((j−1)/m); Gaussian smoothing τ_x=4^{1/3}s_x m^{−1/3}; PIT-centrality wrapper (score 2F̃^e_x(y)−1) for nested intervals.
- Theorem 3 uniform error bound with probability ≤2exp(−2Nε²); Proposition 1: W1(P̃^eτ_x,P̃^e_x) ≤ τ_x√(2/π).
- Validation metrics: PIT CvM distance, QErr (mean |empirical−nominal| coverage over {0.05,…,0.95}), mean CRPS, central-90% coverage/length, Brier skill scores at thresholds; baselines: raw ensemble, global/GAM affine correction, three interval-only split-conformal scores.

## Data sources named
Simulations (3 misspecification designs, nbias=1000, ncal=1000, ntest=5000, m=100 draws, 100 replications); WeatherBench-2: 50-member ECMWF IFS-ENS 24h precipitation vs ERA5, n=3,649 cases (2018–2022); reference implementation https://github.com/egpivo/bc-cpit and PyPI `bc-cpit`.

## Findings (numbers and facts, not vibes)
- Sim 1: CvM 474.56→0.59, QErr 0.2745→0.0098, CRPS 0.1915→0.0854; CPIT 90% coverage 0.890/0.891.
- Sim 3 (shape misspecification): affine correction inert (CvM >31); CPIT CvM→~1.02, QErr 0.0757→0.0120; upper-tail QErr 0.033→0.013.
- Taiwan cells: CPIT(GAM) average CvM 0.154 (98% reduction), QErr 0.012, coverage 0.886 unsmoothed / 0.928 smoothed.
- CPIT's single CDF yields threshold-coherent monotone exceedance probabilities π̂(10)≥π̂(20)≥π̂(40)≥π̂(80) — interval-only baselines cannot do this.
- Caveat from file: affine bias correction can worsen things when misspecified (Taiwan NW: BC(Global) CvM 7.40→10.26); GAM correction is the safe default; marginal diagnostics can mask local miscalibration (Sim 2).
- Adoption gate stated in file: CPIT adopted if on 2022–2024 NFL holdout it reduces PIT CvM ≥50% vs raw AND improves mean CRPS ≥3% AND 90% coverage lands in [0.87, 0.93].

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — post-processing/calibration infrastructure: converts Monte Carlo samples into a calibrated predictive distribution; ledger pairs it with rankECE (ledger 1520) as the calibration measure and ledger 1523 for tail calibration.
- TRUST-SIGNAL — honest calibration-state labeling; threshold-coherent probabilities are the publishable face of a calibrated engine.

## Engine-actionable? (yes/no + one-line what)
Yes — 2–3 day build: feed engine's m Monte Carlo margin draws through BC(GAM)+CPIT (identity T on margin, GAM features {spread, total, home flag, week}) to output per-game calibrated predictive distribution for P(margin>spread), P(total>line), HDR intervals, blowout risk.
