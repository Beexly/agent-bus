# docs/arxiv-program/research/2026-09-21/arxiv-deep/1580-ensemble-postprocessing-probabilistic-neural-network.md
## What it is (1-2 sentences)
Deep-read ledger entry on Mlakar, Merse & Faganeli Pucer (2023, arXiv:2303.17610): neural-network ensemble weather-forecast post-processing — joint multi-station multi-lead-time modeling with normalizing spline flows (ANET2) vs normal (ANET2_NORM) and Bernstein polynomial quantile regression (ANET2_BERN) outputs, validated on ECMWF 2m temperature. Verdict: ADAPT — right architecture for GSE's game-day weather calibration; needs re-training for wind/precipitation and US stadiums.

## Key metrics/methods (formulas where given, else "not specified")
- Flow density: p_temp(x;theta) = p_norm(T~_theta(x)) * dT~_theta(x)/dx; NLL loss L = T~_theta(x_i)^2/2 - ln(dT~_theta(x_i)/dx); transform composition of 4 rational-quadratic spline transforms x 5 knot-value pairs (840 distributional params = 21 lead times x 10 x 4); knot/value monotonicity via CumSum(1e-3 + Softplus(raw)).
- NORM residual: mu = mu^e + mu'; sigma = sigma^e + Softplus(sigma') (residual-on-ensemble-stats predicted better than direct).
- ANET2: 6-layer dense residual net, SiLU, dropout 0.2, Adam, batch 256, lr 1e-3, weight decay 1e-6, lr x0.9 after 10-epoch plateau, early stopping; loss = NLL (ANET2/NORM) or quantile loss over 100 equidistant quantiles (BERN, degree 12, 13 coeffs/lead time).
- Features: per-lead ensemble mean/variance (21-dim each), station altitude/lon/lat/land use, seasonal cos(2pi d/365).

## Data sources named
EUPPBench benchmark: ECMWF ensemble 2m temperature, 229 stations western Europe; D11 train = 11-member 20-year reforecasts 2017-2018 (209 samples/year); D51 test = 51-member operational forecasts 2017-2018 (730 samples/year), 167,170 total forecasts. No code repo stated.

## Findings (numbers and facts, not vibes)
- Table 1 (D51 test): ANET2 CRPS 0.923, bias 0.069, QL 0.363; ANET1 CRPS 0.988, bias 0.092, QL 0.386; ANET2_BERN CRPS 0.935; ANET2_NORM CRPS 0.940, bias 0.038 (lowest). ANET2 ~6.6% CRPS gain over ANET1 (previous SOTA).
- ANET2 best CRPS at 204 of 229 stations; BERN at 18; NORM at 7; ANET1 at 0.
- Rank histograms: ANET2 most uniform; normal-output variants show over-dispersion hump at quantiles 20-40.
- Inference cost (Quadro P400) for 167,170 forecasts: NORM 2.87 s / BERN 7.14 s / ANET2 36.08 s; distributional params 42 / 273 / 840.
- Ensemble mean + variance carry sufficient signal; min/median/max/members added nothing.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: fills the "game-day weather prediction" calibration lane — nothing in the existing calibration stack covers weather-forecast calibration feeding the totals model; pairs with 1558's ensemble combiner (calibrated weather as sub-model expert).
- OTHER: feeds the totals/spread model with P(wind > 15 mph), E[precip], temperature quantiles — wind/precipitation are the weather variables that move NFL totals (wind/precip untested in this paper; spline flows should handle non-Gaussian/zero-inflated but need validation).

## Engine-actionable? (yes/no + one-line what)
yes — build weather/postprocess.py starting with an ANET2_NORM-style model (fastest, lowest bias) on GEFS/ECMWF-IFS ensemble reforecasts for 30 NFL stadium coordinates, targeting kickoff-time temperature/wind/precipitation; adopt if it beats EMOS by >=5% CRPS on wind and temperature on a 2024 holdout.
