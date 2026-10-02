# docs/dfs/research/2026-09-25/youtube-builder-research/indie-model-builders-dossier-2026-09-25.md
## What it is (1-2 sentences)
A ranked dossier of 24 independent NFL model builders (Instagram/X/GitHub/web sweeps, read-only, 2026-09-25) scored on plug-and-play methodology value to GSE, with evidence quality marked DIRECT vs INFERENCE and a license posture key — finding only 2 of 24 (TreMatt03, engage8, both MIT) are code-liftable; everything else is learn-from-methodology.

## Key metrics/methods (formulas where given, else "not specified")
- no formulas given. Builder-level numbers (verbatim from builders, not independently verified unless noted):
- TreMatt03 nfl-game-predictor (MIT): walk-forward 3,816 games 2012–2025 — accuracy 65.2%, log loss 0.622, Brier 0.216, AUC 0.706 vs Elo-only 0.634 / closing Vegas moneyline 0.609. "Team efficiency stats add almost nothing on top of Elo… every combination landed within noise of Elo alone (0.632 vs 0.632)." "Rating passers individually — EPA per dropback, tracked per player so it follows a trade or a midseason takeover — moved log loss from 0.633 to 0.625 and AUC from 0.690 to 0.700. It is the single largest improvement in the project."
- Damepivot nfl-game-model (no license): ridge regression on 870,000 plays / 6,719 games 2000–2025; team ratings = EPA/play split passing/rushing × offense/defense + success rate + explosive-play rate, schedule-adjusted via "ridge regression over one-hot team indicators" (penalty shrinks thinly-sampled teams toward league average); prior-season blending w(week) = n/(n+6); held-out 2023–2025 (816 games, "touched exactly once"): margin MAE 10.077 vs Elo 10.253; win-prob accuracy 65.3%, Brier 0.2182, calibration slope 0.998 (at 86.5% stated, home won 86.4% over 462 games).
- SamuelLachance Sharp Odds (open): 14-feature NFL stack with per-play TrueSkill ratings + weekly QB Kalman fusion; test log-loss 0.61919 vs plain Elo 0.63984 vs closing line ~0.609; closing line statistically *encompasses* the model.
- howlscastle97 nfl-model-hq (open, no OSI license): Bayesian margin system — joint Kalman filter over 32 team ratings + home-field (tuned by one-step predictive log-likelihood ≤2023); deep ensemble of 5 heteroscedastic MLPs (mu+sigma heads) on beta-NLL (beta=0.5), RECAL_SCALE=1.039 variance recalibration; Kalshi price logger with fee-adjusted edges (fee=0.07·p·(1−p)); published null result: per-QB empirical-Bayes rating = −0.0002 [−0.0131, +0.0123] held-out — NOT shipped.
- seidcubro PriorLine (license unclear, NOASSERTION): per-market model bakeoff (ridge rush_att R² 0.747; elastic net rush_yds/recs; HGB passing; Poisson pass TD; RF TD classifiers) → quantile models q10–q90; 20,000 sims per matchup with Dirichlet touch-shares; blind 2025 backtest: 6,736 graded picks = 51.5% vs 53.9% breakeven, −4.3% ROI → structural fix: books shade lines toward overs, quantile medians beat means, top tier +4.1% over 3,952 graded picks; "Every bucket was 14 to 29 points overconfident" pre-recalibration.
- bweezy615 @Soothbet (open): Elo + damped-MOV update + opponent-aware EPA form + rest → isotonic regression refit each season; 11-book price shopping, de-vigged fair line; 2,608-game walk-forward: 49.5% ATS vs 52.4% breakeven — published the losing record.
- sujar.tech (IG, 73.7K, DM-gated): ensemble voting (LogReg + trees + XGBoost + RF) on 6,234 games back to 2003, holdout 2021–2025, 20+ features (ELO, win %, rest, EPA, market data, injuries); self-reported "55–65% typical," 88% best week.
- maximusdesir engage8 (MIT): LightGBM pre-snap run/pass prediction on 173,881 nflverse plays, time-split train 2019–21/cal 2022/test 2023: 69.7% accuracy vs 59.0% naive, ROC-AUC 0.766, Brier 0.192.
- cdinh92 nfl-predictive-engine (no license): nflreadpy → EMA (span 4) → XGBoost → 80/20 ensemble with odds-vig-strip; Week 2 9-7 SU (56.3%); high-confidence tier 2-0.
- r2codes (IG, 8.5K): ridge regression 3,028 games since 2015 (recency-weighted); Week 1: 11-5, 60%+ confidence picks 9-1 vs sub-60% 2-4.
- jackc625 nfl-predict (no license): Friday-snapshot engine, three-level temporal safety (as_of_datetime fence, LeakageGate, walk-forward splitter), blend weights tuned strictly on pre-2018 seasons so the 2021–2024 backtest is never seen.
- Daniele Comitogianni (IG, 6.7K): dynamic Elo + SoS-adjusted efficiency (SoS adjustment dropped Patriots' defense from 5th raw to 11th), 100,000 Monte Carlo sims → Seahawks 62% win prob, −3 spread, 23-20.
- Athena Huo (IG, 14K): documented V1→V2 leakage fix (V1 trained on 2025 data = leakage → retrained V2: Rams 63.4%, 27-24).
- Barking Crow Movelor CFB: average error 12.9 pts/game vs closing spread 12.1 / FPI 12.5 / SP+ 12.3.

## Data sources named
nflverse (python package, back to 2003), nflreadpy, NFL FastR play-by-play, Kalshi API price logger, Odds API lines, PredictionTracker.com (nfelo picks), 247Sports Composite recruiting, 11-book price feeds.

## Findings (numbers and facts, not vibes)
- Independent convergence on per-player QB tracking (QB-BEHAVIOR signal): TreMatt03, Damepivot, cdinh92, and nfelo all landed on per-player QB features independently — the dossier's strongest cross-builder signal. TreMatt03's per-player QB EPA/dropback was the single largest project improvement (log loss 0.633→0.625, AUC 0.690→0.700); Damepivot uses rolling EPA/dropback + CPOE over a 16-game window crossing seasons; nfelo replicates/improves the FiveThirtyEight QB Elo model.
- TreMatt03 DIRECT quote: team efficiency stats (EPA/play, success rate, explosive-play rate) add almost nothing on top of Elo (0.632 vs 0.632) — saves GSE wasted feature work (INFERENCE: applies to their game-model frame).
- Over-shade asymmetry (seidcubro): books shade lines toward overs; quantile medians beat means; every confidence bucket 14–29 points overconfident pre-recalibration; post-fix top tier +4.1% over 3,952 graded picks.
- Honest-negative-result builders as the quality filter: Sooth (published 49.5% ATS losing record), SamuelLachance (closing line encompasses his model), howlscastle97 (shipped null result with reasoning), seidcubro (−4.3% ROI then the fix), TreMatt03 ("suspicious of a hobby project that claimed to beat the market").
- Confidence-calibration framing works in public: r2codes 60%+ confidence picks 9-1 vs sub-60% 2-4 (Week 1); cdinh92 high-confidence tier 2-0 (Week 2).
- License posture: only 2 of 24 code-liftable today (TreMatt03 MIT, engage8 MIT); no-license repos = all rights reserved, learn-only; verify any license before ingesting code.
- CFB gap: only one CFB builder surfaced (Barking Crow) — a CFB-specific sweep is open work.
- Excel LADZ (YouTube): flagged for browser delegation — needs a live-browser watch to assess.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Per-player QB EPA/dropback tracking that follows trades/midseason takeovers (TreMatt03; QB is what Elo misses — Damepivot) → QB-BEHAVIOR.
- QB familiarity = share of last 16 starts by today's listed starter (howlscastle97); injury absence weighted by prior-games snap share with anti-leakage test (TreMatt03) → QB-BEHAVIOR.
- Pre-snap run/pass prediction + defensive-tendency engine (engage8, MIT, LightGBM, 69.7% accuracy vs 59.0% naive) → SCHEME (coaching-tendency modeling) — INFERENCE that it maps to GSE's coaching/scouting lane as stated in the dossier.
- Coach Intent Index for preseason (r2codes: which coaches actually try to win) → COACHING.
- 11v11 per-play TrueSkill ratings, salary cohort priors (SamuelLachance); SoS-adjusted efficiency metrics (Comitogianni: dropped Patriots' defense 5th→11th) → SCHEME.
- Quantile models q10–q90 for player props; Dirichlet touch-shares in simulation; books shade toward overs (seidcubro) → OTHER (player-prop modeling mechanics).
- Sealed-ledger discipline, isotonic calibration pipeline, leakage-gate time-fences, market-blend in log-odds space → OTHER (evaluation/infra discipline).

## Engine-actionable? (yes/no + one-line what)
Yes — lift TreMatt03 (MIT) per-player QB EPA/dropback tracking + snap-share injury weighting (verified license) as the highest-value plug-and-play feature, and test engage8 (MIT) pre-snap run/pass tendency features against GSE's coaching lane, treating all other builders' methods as learn-only references pending license verification.
