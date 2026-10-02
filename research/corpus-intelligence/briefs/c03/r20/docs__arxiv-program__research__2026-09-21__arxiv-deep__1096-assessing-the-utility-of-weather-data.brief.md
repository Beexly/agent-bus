# docs/arxiv-program/research/2026-09-21/arxiv-deep/1096-assessing-the-utility-of-weather-data.md

## What it is (1-2 sentences)
Deep-read (arXiv:1802.03913v1, Zafarani, Eftekharnejad & Patel 2018) of a small solar-power regression study asking whether weather data improves photovoltaic power prediction. Verdict at source: REJECT — methodologically weak (random splits on time series, unclear target units, never runs the with/without-weather ablation its title promises) and domain-disjoint from sports.

## Key metrics/methods (formulas where given, else "not specified")
- LASSO (α tuned by 10-fold CV: α=0.1722; also tried α=0.001) and ordinary linear regression on 100+ features; top-25-feature model also tried.
- Train/test via random 60/40 split on time-ordered data — INVALID for forecasting (leakage via temporal autocorrelation); 10-fold CV on the same time series. No time-ordered backtest. No baseline comparing with-weather vs without-weather.
- No equations of note; standard LASSO/OLS. Assumptions: i.i.d. samples (violated), linear weather→power relationship, random-split validation estimates generalization.

## Data sources named
One Syracuse solar-panel installation, 2016-06-29 through 2017-02-25: 100+ parameters (weather data, meter/PV data, solar radiation data, 5-day-ahead predicted weather). Sample counts and exact schema loosely specified; target units/scaling unclear. No code or data released.

## Findings (numbers and facts, not vibes)
- LASSO: default MSE 5.5436; 10-fold CV α=0.1722; 60%-train MSE 5.5045; α=0.001 → MSE 5.4459. OLS: full-data MSE 5.4248; 60/40 split MSE 5.4147. Top-25-feature model MSE 5.4968. (Units of MSE unstated; model differences are tiny and likely noise.)
- Feature importance: instantaneous solar irradiance dominates. Claim: ~6 features suffice; ~5,000 samples (~2 months) stabilize error.
- The paper never answers its own title question — no with/without-weather ablation.
- Single site, single 8-month winter-skewed window; no external validity.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] Random splits on autocorrelated time series = train/test leakage; no time-ordered validation; unstated metric units — textbook negative example of evaluation hygiene; worth keeping as an anti-pattern reference for GSE's own backtest reviews.
- [OTHER] The paper never runs the ablation its title promises — INFERENCE: title-question claims that are asserted rather than tested should be flagged at triage, the same failure mode Garrett's INGEST-AND-LEARN doctrine guards against.
- [OTHER] Domain (rooftop solar) has no mechanism connecting to sports prediction; the weather-for-totals lane cares about wind/precipitation on scoring — a solar-irradiance regression offers no transferable method (ledger 1098 KoMet covers weather-model post-processing rigorously).

## Engine-actionable? (yes/no + one-line what)
No — rejected at source: invalid validation, unanswered research question, uninterpretable metrics, no sports applicability; only value is as an evaluation-anti-pattern reference.
