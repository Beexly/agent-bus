# docs/arxiv-program/research/2026-09-21/arxiv-deep/0740-conformal-prediction-interval-estimations-power.md

## What it is (1-2 sentences)
Kath & Ziel (2019/2020, arXiv:1905.07886) compare conformal prediction (CP) and normalized conformal prediction (NCP) interval machinery against quantile regression averaging (QRA), naive, and empirical-error intervals for day-ahead and intraday electricity prices — noisy, heavy-tailed, heteroscedastic series — across a full 144-path factorial. Ledger verdict: ADAPT — the inductive-conformal + normalized-nonconformity machinery and the path-selection discipline directly inform GSE's rolling prediction intervals for totals/spreads; the power-market application itself is not adopted.

## Key metrics/methods (formulas where given, else "not specified")
- Inductive (split) CP: split data 75/25 into proper training and calibration; nonconformity = absolute residual |y_i − ŷ_i|; interval [ŷ(x) − q̂, ŷ(x) + q̂] with q̂ the (1−α)-quantile of calibration residuals.
- Normalized CP: nonconformity = |y_i − ŷ_i|/σ̂_i with a dispersion estimate σ̂_i; interval [μ̂(x) − σ̂(x)·q̂, μ̂(x) + σ̂(x)·q̂] — width adapts per observation.
- Comparators: QRA (quantile regression on point forecasts), naive/empirical-error intervals.
- 144 prediction paths = markets × model types × point-predictor choices (random-forest-based and simple autoregressive mean/median point predictors).
- Evaluation: empirical coverage (PICP), average width, Winkler score, pinball loss, Christoffersen conditional-coverage tests (independence + unconditional coverage LR tests).

## Data sources named
(1) Nord Pool day-ahead spot prices — 24 hourly prices as multivariate target (models trained per hour); (2) EPEX SPOT intraday continuous market — 15-minute price paths; (3) GEFCom competition data. Features: lagged prices, standard price-forecasting covariates/fundamentals. Exact dataset date ranges not printed in the full text. No code stated.

## Findings (numbers and facts, not vibes)
- NCP is equal or better than QRA, naive, and empirical-error intervals depending on market regime — but explicitly no single configuration dominates: the optimal choice of point predictor, normalization, and split is market-dependent. (OTHER)
- Coverage targets are met (PICP ≈ nominal) while average interval widths are competitive; Winkler and pinball scores favor NCP in the heteroscedastic intraday regime where normalization matters most. (OTHER)
- Exact printed numbers are sparse — the headline finding is qualitative (competitiveness + regime dependence), not a single percentage gain. (OTHER)
- Random 75/25 split on time series is a stated limitation: leakage risk; for ordered data this must be a rolling/expanding window. (TRUST-SIGNAL — methodological warning)
- Exchangeability is false under structural breaks (market rule changes in power; injuries/coaching changes in NFL) — the paper flags this itself as the biggest threat. (TRUST-SIGNAL — the stated #1 failure mode)
- 25–50% holdout cost: calibration eats a large fraction of data; with ~272 games/season this is expensive. (OTHER)
- Symmetric intervals only — no tail-asymmetry modeling (blowout vs. defensive-slugfest tails differ). (OTHER)

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
Tagged inline above.

## Engine-actionable? (yes/no + one-line what)
Yes — add a normalized-nonconformity option (interval = [ŷ − σ̂·q̂, ŷ + σ̂·q̂], σ̂ = per-game dispersion estimate like recent total-volatility) to the interval layer with rolling-window calibration, and run the paper's path-selection discipline per market (spread/total/moneyline) — never use a random calibration split on ordered data.
