# docs/arxiv-program/research/2026-09-21/arxiv-deep/0718-selective-time-series-forecasting-metalearning.md

## What it is (1-2 sentences)
Inácio, Cerqueira, Barandas & Soares (2026, arXiv:2606.23448v1) build a metalearning metamodel that predicts, BEFORE the forecast is issued, whether a global deep forecaster will incur a large error at a given origin — using only structural features of the recent lag window, with scale-invariant percentile targets so the rejection mechanism transfers across domains. Ledger verdict: ADAPT — the meta-regressor is a pre-forecast triage gate directly usable for GSE's pre-game model screen; it beats interval-width and residual heuristics and transfers zero-shot.

## Key metrics/methods (formulas where given, else "not specified")
- Target: u_{i,t} = #{j∈T_i: j≠t, e_{i,j} < e_{i,t}} / (|T_i|+1) — per-series empirical percentile rank of error, in (0,1), scale-invariant.
- Errors computed with sMAPE; predictors m_{i,t} = g(X_t^i), TSFEL statistical/temporal/spectral features of the lag window (trend, seasonality, lumpiness, complexity).
- Metamodel: CatBoostRegressor (30 random-search configs, grouped CV by series); context p=2h.
- Rejection: û_{i,t} ≥ q → abstain, at coverage ≈q; q ∈ {0.05, 0.10, 0.20, 0.30, 0.40}.
- Selective predictor: (f,s)(x) = f(x) if s(x)=1 else ⊥; coverage φ(s)=P(s(X)=1); risk R(f,s)=E[l(f(X),Y) | s(X)=1].
- Evaluation: risk-coverage curves; AUCO (distance to oracle curve); ErrDrop = no-rejection risk / most-selective risk.
- Forecasters: KAN and NHITS via NeuralForecast (10 random-search trials). Two modes: zero-shot and domain-adapted (fine-tune on 30% of target origins).

## Data sources named
M3, M1, Tourism univariate collections, monthly (h=6) and quarterly (h=4); e.g., M3-M: 1428 series, avg len 117, 26,126 windows; Tourism-M: 366 series, avg len 298, 17,750 windows. Source→target pairs: M3→M1, M1→Tourism. Code: https://github.com/ricardoinaciopt/selective_forecasting_metalearning. Data public (M3, M1, Tourism).

## Findings (numbers and facts, not vibes)
- Meta-level: in-domain Spearman ρ between predicted and realized error percentile 0.71–0.90; smallest AUCO, closest to oracle. Zero-shot transfer: ρ drops (e.g., M3-M→M1-M KAN 0.628, NHITS 0.571); domain adaptation recovers (0.820 / 0.812). (OTHER)
- Base-level (sMAPE kept, domain-adapted metamodel): T-M KAN keep-all 0.288 → 0.215 at q=0.40 (avg oracle gap 0.033, lowest of all methods); PI-width avg gap 0.089, residual-var 0.093; PI width worse than random near coverage 0.5. (OTHER)
- T-Q KAN: 0.272→0.180 (gap 0.021 vs PI-width 0.071). M1-Q: KAN 0.143→0.042 (gap 0.019). (OTHER)
- Series-level bootstrap: metamodel significantly closer to oracle than all baselines in all settings except residual-scale for M1-Q/NHITS (p=0.191). (OTHER)
- "Uncertainty is not equivalent to forecasting risk: wide intervals do not necessarily imply large errors." (TRUST-SIGNAL — interval width is a bad proxy for forecast risk)
- The metamodel operates ex ante — rejection decided before invoking the forecaster (pre-forecast triage), unlike interval/residual baselines. (OTHER)
- Targets are relative risk, not calibrated probabilities — no formal uncertainty guarantees. (TRUST-SIGNAL — limitation on how the output may be interpreted)
- Reproduction caveat: grouped CV by series is load-bearing for the ρ numbers; leakage across origins within a series would inflate them. (OTHER)

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
Tagged inline above.

## Engine-actionable? (yes/no + one-line what)
Yes — build a CatBoost meta-regressor over structural pre-game window features (spread movement stats, total movement, rest, injury count, line sharpness proxy) predicting the pick's realized-error percentile, and withhold/flag games above calibrated q before the engine even runs — a pre-game triage screen.
