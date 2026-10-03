# arxiv-program/research/2026-09-21/arxiv-deep/0473-quantifying-uncertainty-in-deep-spatiotemporal-forecasting.md
## What it is (1-2 sentences)
Full-paper ledger note on Wu et al. (2021) "Quantifying Uncertainty in Deep Spatiotemporal Forecasting" (KDD '21, arXiv:2105.11982v2) — the first systematic benchmark of frequentist vs Bayesian UQ methods for deep spatiotemporal forecasting, unified through statistical decision theory with a practitioner's selection recipe. Ledger verdict: ADAPT — adopt MIS as GSE's interval-forecast proper score and the frequentist-vs-Bayesian recipe for the next uncertainty engine.
## Key metrics/methods (formulas where given, else "not specified")
- MIS regression loss: L_MIS = (u−l) + (2/ρ)(y−u)1{y>u} + (2/ρ)(l−y)1{y<l} + |y−f}; Proposition: argmin of MIS gives the (1−ρ) confidence interval.
- Six UQ methods compared: Bootstrap (25 retrains on 50% subsamples), MIS regression, quantile regression (pinball loss at 0.025/0.5/0.975 — crossing warning), Spline Quantile (11-param monotone spline, CRPS loss, fixes crossing), MC dropout (5%, 50 passes), SG-MCMC (SGNHT, lr 5e−4, prior N(0,4), 25 parallel samples).
- Decision-theoretic unification: frequentist minimizes E[‖f(θ̂)−f(θ)‖²|θ], Bayesian minimizes E_θ[‖f(θ̂)−f(θ)‖²|data] ⇒ posterior mean.
## Data sources named
KDD Cup 2018 Beijing PM2.5 air quality (grid); METR-LA traffic (207 sensors, graph); COVID-19 US state deaths (JHU reported vs GLEAM mechanistic model, OAG/IATA air-traffic adjacency). ConvLSTM for grid, DCRNN for graph.
## Findings (numbers and facts, not vibes)
- Headline: Bayesian SG-MCMC best/robust mean predictions (posterior mean); frequentist quantile/MIS-regression best coverage (MIS). PM2.5 48h: MAE SG-MCMC 24.73 (best) vs Point 26.77; MIS: MIS-reg 179.96 (best), MC dropout 881.05 (worst, intervals too narrow at width 9.16).
- Traffic 1h MIS: MIS-reg 24.33 (best) vs SQ 60.56; COVID 4W MAE: SG-MCMC 40.66 (best) vs Point 42.37.
- DeepGLEAM residual learning: training the deep model on (reported − GLEAM) beats both — 1W RMSE 66.03 vs GLEAM 73.59 (paper claims 6.6% at 1W, 17% avg); pure deep model catastrophically fails under distribution shift.
- MIS decreases with samples faster for SG-MCMC than bootstrap ⇒ smaller sample complexity for posterior sampling (posterior contraction). Models systematically overconfident (authors' §6.3). MC dropout and naive bootstrap effectively ruled out.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — uncertainty quantification for point forecasts (totals, props, win-total bands); complements QB-BEHAVIOR/SCHEME by putting calibrated intervals on projections rather than behavioral intelligence itself.
## Engine-actionable? (yes/no + one-line what)
yes — Implement MIS (ρ=0.05) as GSE's standard interval score for totals/prop bands, add MIS-regression or quantile-regression heads to the engine for interval outputs (MC dropout ruled out), and backtest a residual model on (GSE projection − closing line) per the DeepGLEAM result.
