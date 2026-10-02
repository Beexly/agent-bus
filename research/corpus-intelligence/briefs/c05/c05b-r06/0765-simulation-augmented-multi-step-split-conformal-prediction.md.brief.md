# arxiv-program/research/2026-09-21/arxiv-deep/0765-simulation-augmented-multi-step-split-conformal-prediction.md
## What it is (1-2 sentences)
Deep ledger on Sabashvili (2026), "Simulation-Augmented Multi-Step Split Conformal Prediction for Aggregated Forecasts" (arXiv:2606.16356v1): expanding-window CV residuals → block bootstrap over residual sequences → empirical-quantile intervals on aggregated targets (annual totals, YoY growth), where naive combination of pointwise intervals is invalid. Verdict: ADAPT — the block-bootstrap-over-CV-residuals recipe for intervals on aggregated targets fills a gap in GSE's CQR/pointwise-interval stack (season win totals, season points).

## Key metrics/methods (formulas where given, else "not specified")
- Algorithm 1: expanding-window CV (initial window 10 obs, grow by 1) → residuals ε̂_{k,h}=y_{k+h}−ŷ_{k+h} across origins k and horizons h → centre horizon-wise residual columns → extract consecutive blocks of length b (b=12 for 36-month horizon; b=3 for 12-month) → S=10,000 simulated future paths per series (blocks sampled with replacement, stitched, added to point path) → aggregate per path: Ŷ_s=Σ_{m=1}^{12} ŷ_{s,m}; Ĝ_s=(Ŷ_{s,year}−Ŷ_{s,year−1})/Ŷ_{s,year−1} → empirical quantiles at 90/95/99% (reported as 10%/5%/1% miscoverage).
- "Coverage cost" = relative width increase per coverage gain; Wilcoxon signed-rank significance tests on per-series coverage/width.
- Base forecaster: Auto-ARIMA via R fable (v0.4.0); baseline = conditional simulation without CV-residual calibration (ref [4]). Direct split-conformal on aggregated nonconformity scores judged "less suitable" (too few aggregated calibration points per series).
- Assumptions: residual blocks approximately exchangeable within horizon columns after centring (author admits residuals "are not strictly exchangeable" — nominal levels are targets, not guarantees); block bootstrap preserves local cross-horizon dependence; CV residuals approximate future residual distribution (stationarity); S=10,000 paths sufficient for tails (unjustified).

## Data sources named
- M4 monthly competition data (monthly sales, 36-month horizon); proprietary dataset of 2,000 real monthly sales series (not public, 12-month horizon).

## Findings (numbers and facts, not vibes)
- M4 coverage (SA-MSCP vs baseline, miscoverage 10/5/1%): Raw 88.8/91.4/93.9 vs 75.2/80.8/87.0; Aggregated 83.1/85.8/88.9 vs 65.6/70.9/78.4; Growth 89.9/92.0/94.4 vs 75.2/80.5/87.4. Wilcoxon p≪0.001 for coverage and width.
- Coverage deltas +6.9 to +17.5 pp (Aggregated 10%: +17.5pp at cost 10.8); 99% growth interval extremely expensive (cost 113.1).
- Proprietary: Aggregated 89.3/91.1/94.2 vs 75.3/80.4/86.8; growth rows identical to aggregated (monotone transform — the "growth" result adds nothing on that dataset). Deltas +4.4 to +14.0pp.
- Author's honesty: "both methods miss the target coverage level" — achieved coverage stays below nominal throughout; nominal levels are targets, not guarantees; follow-ups suggested: post-hoc recalibration, online adaptation (conformal PID).
- Adversarial notes: block size hand-tuned post hoc; proprietary dataset unreplicable; S=10,000 paths computationally heavy; no benchmark vs weighted/online conformal time-series methods (SPCI, conformal PID); baseline is weak.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Season-total markets (team win totals, player season yards/TDs, remaining-schedule aggregates): treat weekly game-level forecasts as the "monthly" series, season aggregate as the "annual total" — OTHER (season-long markets / interval stack).
- Proposed pairing with conformal PID online adaptation to close the nominal-vs-achieved coverage gap as the season progresses — OTHER.
- Complements existing CQR/pointwise intervals; head-to-head interval width/coverage comparison planned — OTHER (calibration lane).

## Engine-actionable? (yes/no + one-line what)
Yes — port Algorithm 1 to season win totals: expanding-window backtest of the game-level model (2020–2024), horizon-wise residuals, block bootstrap b=4 weeks, S=10,000 remaining-season paths → 90/95% intervals on final win totals; adopt if 2023–2024 holdout coverage ≥80% at nominal 90% with width ≤1.5× naive binomial-sum baseline; effort 2–3 days.
