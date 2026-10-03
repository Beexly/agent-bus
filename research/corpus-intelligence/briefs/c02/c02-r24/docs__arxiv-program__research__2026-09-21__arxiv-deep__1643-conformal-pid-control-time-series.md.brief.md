# docs/arxiv-program/research/2026-09-21/arxiv-deep/1643-conformal-pid-control-time-series.md

## What it is (1-2 sentences)
A conformal time-series prediction-interval controller that upgrades adaptive conformal inference (ACI, pure integrator) to a full PID design: a proportional term for instant reaction to misses, a saturating integrator for persistent bias, and a "scorecaster" that anticipates predictable miscoverage from observable features. Corpus verdict: ADAPT — the direct upgrade path for GSE's existing I-only ACI implementation (`aci-durable.ts`/`aci-state.ts`).

## Key metrics/methods (formulas where given, else "not specified")
- Quantile tracker (ACI in score space): `q_{t+1} = q_t + η(err_t − α)`
- General controller: `q_{t+1} = q̂_{t+1} + r_t( Σ_{i=1}^t (err_i − α) )`, where q̂_{t+1} is the scorecaster (any forecaster of the next score from observable features) and r_t is a saturating integrator (bounded, e.g. tan/tanh-based) on cumulative errors.
- Long-run error bound (bounded scores |s| ≤ b): `| (1/T) Σ_{t=1}^T (err_t − α) | ≤ (b + η)/(ηT)`
- Theorem: DETERMINISTIC long-run coverage for any score sequence and any scorecaster satisfying boundedness/saturation conditions — no stochastic assumptions.
- Scorecasters used: Theta method (electricity); 50-state cases/deaths/previous-forecasts regression (COVID). P term reacts within 1–2 steps to a miss burst; saturating integrator prevents runaway interval explosion.
- Assumptions: scores bounded (b < ∞); saturation function increasing, odd-ish, bounded; feedback (Y_t revealed) required each step.

## Data sources named
- COVID-19 Forecasting: 4-week-ahead US state-level COVID death forecasts, late 2020 – late 2022; base model = COVID-19 Forecast Hub ensemble; nominal level 80%.
- NSW (Australia) half-hourly electricity demand, May 7 1996 – Dec 5 1998; base = Transformer forecaster, scorecaster = Theta method; nominal level 90%.
- Code: http://github.com/aangelopoulos/conformal-time-series; COVID data via the public COVID-19 Forecast Hub.

## Findings (numbers and facts, not vibes)
- COVID (nominal 80%): during a 10-week winter shock stretch the base Forecast Hub ensemble missed 8 of 10 — 20% coverage; the PID controller missed 3 of 10 — 70% coverage, with intervals visibly widening as the scorecaster (trained on rising cases/deaths) anticipated the shock. Over the full 2020–2022 horizon, PID tracks nominal while the base model oscillates.
- Electricity (nominal 90%): PID maintains coverage through demand-regime changes where the Transformer's raw intervals fail; the Theta scorecaster adds anticipatory widening before known volatile periods.
- Limitations: still needs Y_t revealed each step (fine for weekly games, not for props/futures with delayed settlement); a bad scorecaster adds noise; η and saturation parameters are tuning knobs; the guarantee is long-run, not finite-window (a 17-week NFL season is short for asymptotic comfort); widened intervals during shocks may look like "panicking" to users.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- 20% → 70% shock-stretch coverage recovery as the template for GSE's regime-shift problem — TRUST-SIGNAL (interval reliability as the trust layer of public projections).
- Scorecaster features (weather bucket, QB-change flag, rest differential, December flag, trailing error; proposed addition: line movement into the weekend as a market-aware scorecaster) — SCHEME (regime/context-driven anticipation of engine error).
- QB-change flag as an explicit scorecaster input — QB-BEHAVIOR.
- December flag and post-bye-chaos as predictable-miscoverage features — COACHING (schedule/spot-driven error regimes).
- P-term + saturating integrator added to the existing I-only ACI controller — OTHER (calibration/control machinery).

## Engine-actionable? (yes/no + one-line what)
Yes — upgrade GSE's ACI → PID: keep the α_t integrator, add P-term on the score quantile and a scorecaster regressing next-week residual-quantile on [weather, QB-change, rest differential, December, trailing error], with a tanh saturating integrator; ADAPT on ≥10pp shock-stretch coverage improvement over I-only ACI in the 2023–2025 backtest at ≤115% mean width; drop the scorecaster if it adds width without coverage gain (keep P+I).
