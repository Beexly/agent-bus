# EXECUTION_LEDGER.md
## What it is (1-2 sentences)
Append-only build journal of the GSE Intelligence Core branch (2026-06-23 → 2026-07-07) recording every shipped slice with WHAT/FILES/GATE/FLAG/DECISIONS/BLOCKED-ON-HUMAN: the ladder-event system (A1/A2), replay/backtest harness (E1), feature store + empirical-Bayes shrinkage + market-anchored reconciliation (B1–B6, BT), Tweedie baseline with real-data backtests (WO1/AUDIT1), game-script/regression/availability/divergence engines (C1–C6), prop triangulation + distribution/parliament/provenance outputs (D1–D6), scoring reliability + board health (E2/E3), persist-what-we-fetch (F1–F3), nflverse currency fixes (DATA1–DATA4), and the Sunday-frontier wave of governed SHADOW proprietary metrics (Stale Line Risk, QB Burden Index, Role Volatility, Playable Window, Market Mirage, Calibration Integrity Grade, Portfolio Fit, No-Bet Pressure, Drift Pressure, Conformal Uncertainty Width).
## Key metrics/methods (formulas where given, else "not specified")
- Empirical-Bayes shrinkage weight: `w = n / (n + k)`, DEFAULT_PLAYER_RATE_SHRINKAGE_K = 12 (pseudo-sample strength).
- Tweedie GBM: negative-gradient pseudo-residuals under log link, mu=exp(F), pseudo = y*exp((1-p)F) - exp((2-p)F), power p=1.5 default; Newton leaf = -sum(grad)/(sum(hess)+ridge), grad = e^{(2-p)F} - y e^{(1-p)F}, hess = (2-p)e^{(2-p)F} + (p-1) y e^{(1-p)F}.
- Split-conformal finite-sample quantile: ceil((n+1)*p) order statistic.
- Clark-West gate: `beatsMarket` requires ≥30 OOS samples, positive adjusted mean, t-stat > 1.64, and model MAE < market MAE.
- Wo2 yard coherence: team yards/TDs split into PASSING and RUSHING pools via C3 game-script pass/run rate; RECEIVING pool = passing pool; fantasy points = pass yds/25 + pass TD*4 + rush&rec yds/10 + TD*6.
- Ensemble: sequential Hedge/multiplicative-weights with capped absolute loss; promotion requires Clark-West win vs both equal-weight and market-only plus lower MAE.
- ACI: rolling Adaptive Conformal Inference, Mondrian by position, non-overlapping fit/calibration/test windows.
- GSE Signal Score: no-bet governor with calibration action policy (DRIFTING/BLOCKED calibration hard-passes; WATCH caps below LEAN/PLAY).
## Data sources named
nflverse (player stats, pbp, snap_counts, injuries, depth_charts, rosters, schedules, combine, trades, Next Gen Stats combined asset covering 2016–2025, draft picks incl. 2026 draft); ESPN qbr; only `contracts` lags (year_signed 2022, upstream OTC). Historical player-prop lines flagged as needed [DATA] follow-up.
## Findings (numbers and facts, not vibes)
- Definitive backtest 2021–2025 (71 walk-forward folds, 18,344 OOS player-weeks, purged+embargoed): model MAE 5.3087 vs naive 4.9064 → beats NAIVE = FALSE (Clark-West t=18.8 but model MAE higher — gate correctly withholds).
- Single-season 2023: 3,796 samples, 2,955 OOS, model MAE 4.9928 vs naive 4.7573 → FALSE; after genuine Tweedie loss: 4.8679 vs 4.7573 → still FALSE; Newton leaf correct implementation actually raised OOS MAE 4.87 → 5.04 (deviance-optimal ≠ MAE-optimal; overfit at fixed hyperparams). Opponent-defense ablation (BACKTEST_OPP=1): never selected by greedy booster, identical OOS MAE (5.0437 vs naive 4.76).
- Audit1 found a real adversarial bug: first-order mean-of-gradient leaf could overshoot/diverge for small p; Newton fix + regression test asserting non-increasing deviance for p∈{1.1,1.5,1.9}; ~3x backtest speedup (42s → 13s).
- Honest verdict recorded: beating naive points-persistence OOS is genuine ML research (regularization, early stopping, role features, CV), not a one-session win; canPublishProjections stays off.
- Shadow metrics added (all SHADOW/INTERNAL/NOT_READY, probability=null, no pick trigger): Receiver Difficulty Index, Expected YAC, YAC Creation, Rush Environment Index, Expected Rush Yards, Rush Over Expected, Stale Line Risk Score, QB Burden Index, Role Volatility Index, Playable Window Score, Market Mirage Score, Calibration Integrity Grade, Portfolio Fit Score, No-Bet Pressure, Drift Pressure Index, Conformal Uncertainty Width.
- Data currency: per-season `ngs_<season>` 404s for 2025 — fixed via combined `ngs_<variant>` asset (2016–2025); per-season `stats_player_week_<s>.csv` merged into live path (DATA2); `guard:nflverse-currency` probe exits non-zero on staleness.
- Test scale: final all-workspaces runs cited ~670 files / 8,239 tests; prediction-engine alone 107 files / 885 tests.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: QB Burden Index (expected-completion difficulty, pressure, throw depth, down-distance friction, OL disruption proxy, receiver separation deficit, time-to-throw stress, weather, pass-rate pressure) — contextual QB burden, not QB quality.
- OL: Rush Environment Index and Expected Rush Yards use OL-relevant context (down-distance, box/front pressure, line continuity, run-direction leverage) before crediting the ball carrier.
- SCHEME: C3 game-script engine (Vegas win-probability path → pass/run rate, plays, pace labels) drives WO2 yard-pool splits; pass/run rate feeds allocation.
- COACHING: Role Volatility Index (snap-share movement, opportunity movement, depth-chart shock, teammate role shock) and C2 Markov role-migration engine capture coaching-usage changes.
- TRUST-SIGNAL: the entire ledger is an honesty-engineering record — Clark-West gates that withhold publication, recorded failures (model loses to naive), no-bet governor hardening (calibration DRIFTING/BLOCKED hard-passes), adversarial AUDIT1 finding logged and fixed, explicit "Tweedie that isn't Tweedie" truth-in-labeling, no-bet methodology with reason codes.
## Engine-actionable? (yes/no + one-line what)
yes — this IS the engine's build record: the shrinkage formula (w=n/(n+k), k=12), Clark-West promotion gates, yard-pool conservation rules, no-bet governor policy, and backtest verdicts are the current wiring baseline.
