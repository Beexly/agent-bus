# docs/arxiv-program/research/2026-09-21/arxiv-deep/1181-improving-sharpness-in-neural-network.md
## What it is (1-2 sentences)
Deep read of Baran & Mihalina (2026, arXiv:2606.08587v1) on sharpening neural-network parametric post-processing by adding a direct interval-width penalty to the CRPS training loss, tested on ECMWF ensemble temperature forecasts. Verdict in-file: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Modified loss: CRPSmod(F,y) = CRPS(F,y) + α·w(F,p), headline α = 0.006, p = 50/52, where w(F,p) = width of the central p prediction interval.
- Model: distributional regression network (DRN) outputting Gaussian parameters; five configurations (global V1/V2, rolling V2 R, lead-time-specific V2 LT, local per-station V2 L).
- Metrics: mean CRPS, predictive-mean RMSE, central-interval width, empirical coverage.
## Data sources named
EUPPBench: ECMWF 51-member ensemble forecasts of 2m temperature at 122 European stations; train 2017, test 2018; 1,870,260 usable samples.
## Findings (numbers and facts, not vibes)
- Interval width decreased 8.2%–12.46% across configurations; empirical coverage decreased only 1.8%–2.35% in relative terms.
- Mean CRPS and RMSE did not deteriorate and often slightly improved; example V2 test: constrained CRPS 0.9429 vs unconstrained 0.9485; RMSE 1.7569 vs 1.7578.
- No code stated; no theory for optimal α (empirically tuned).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: calibration lane — sharpness-conditional-on-validity for GSE totals/prop prediction intervals used in edge sizing and Kelly staking.
## Engine-actionable? (yes/no + one-line what)
yes — swap the probabilistic post-processor's loss to CRPSmod (tune α ~0.001–0.02 walk-forward) and ship behind a live coverage monitor that rolls back if realized coverage drops >1pp below nominal.
