# arxiv-program/research/2026-09-21/arxiv-deep/1082-probabilistic-recalibration-gp-pit.md
## What it is (1-2 sentences)
Deep-read ledger of Graziani et al. 1904.02855 (GP-based PIT recalibration of probabilistic forecasts). Verdict: ADAPT — a method to recalibrate miscalibrated forecast densities by fitting a Gaussian-process density (GPME) to historical PIT values, with a theorem-backed guarantee and an a-priori Forecast Advantage Measure (FAM) that predicts expected winnings before deployment.
## Key metrics/methods (formulas where given, else "not specified")
- Recalibration equation: p₁(x;J,C) = π(F=F̃(x;J,C)|ℱ,C)·p(x;J,C) (eq. 6)
- Theorem 1: E[KL[Π‖p] − KL[Π‖p₁]] = ∫ π(F|ℱ,C) log₂ π(F|ℱ,C) ≥ 0
- Predicted entropy-game winnings: ΔS̄ = KL[π(F|ℱ,C)‖U] ≥ 0; variance Var(ΔS) via 2-D quadrature; FAM = ΔS̄/√Var(ΔS) ~ O(N^{1/2})
- Kelly link: ignorance-score difference −ΔIgn = expected log₂ wealth growth per bet for a Kelly bettor
- Fit-quality diagnostic: EI → B/2N; thinning by PIT autocorrelation lag restores GPME's i.i.d. training assumption
- GPME (App. A): log-Gaussian Cox process on PIT space, squared-exponential kernel, Laplace-approximated Poisson likelihood, closed-form entropies
- Deployment gate from the file: ADAPT only if a-priori FAM ≥ 2.0 on the engine's Forecast-Observation Archive (FOA)
## Data sources named
- Nonlinear circuit (Moore–Spiegel analogue): 2,048 forecasts; climatology from 2,000 z-probe points (lab-internal, not public)
- NMME 5 consistent models (CCSM3/CCSM4/GFDL variants, ensembles 6–12), monthly NINO 3.4 hindcasts Jan 1982–Oct 2017 (430); BMA with EM; 64 thinned (×5) train, 74 test; NOAA OISST v2 public
## Findings (numbers and facts, not vibes)
- Circuit case: ~0.6 bits/turn entropy-game winnings → wealth multiplier ×1.5/turn after recalibration; recalibrated PIT uniform
- ENSO case: recalibration won 0.2–0.6 bits/turn vs raw BMA forecasts; predicted ΔS̄ matched actuals; PIT autocorrelated to 15-month lags required ×5 thinning (64 training points); FAM in that case was only 1–2
- No code released; method must be reimplemented from Appendix A
- No sports data used in the paper; NFL validity untested per the file
- The "non-i.i.d." generality applies to deployment, not the fit — autocorrelated PITs must be thinned, discarding most data
- Assumes stationarity of the miscalibration itself ("miscalibration more stable than climatology")
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (calibration): distributional PIT recalibration with a priori decision statistic and direct Kelly-profit interpretation; bridges calibration and Kelly/market lanes. No content on QB behavior, coaching, OL, trust signals, or scheme.
## Engine-actionable? (yes/no + one-line what)
Yes — build a Forecast-Observation Archive of engine predictive densities vs realized outcomes, fit GPME to thinned PITs, deploy recalibration as a post-processing layer on spread/total densities, gating deployment on FAM ≥ 2.0 and translating ΔS̄ (bits) directly into expected Kelly wealth growth per bet.
