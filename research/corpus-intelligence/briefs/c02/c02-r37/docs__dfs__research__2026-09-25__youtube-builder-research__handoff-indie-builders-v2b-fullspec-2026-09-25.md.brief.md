# docs/dfs/research/2026-09-25/youtube-builder-research/handoff-indie-builders-v2b-fullspec-2026-09-25.md

## What it is (1-2 sentences)
A builder handoff spec (builds 7–15 of 15 indie model-builders, companion to builds 1–6) giving exact inputs, methods, output shapes, composition targets, and test assertions for coding a model kernel from each builder's approach into the GSE prediction engine — methodology learned and re-implemented, nothing copied except the one MIT-licensed case.

## Key metrics/methods (formulas where given, else "not specified")
- TrueSkill (Build 7): per-play 11v11 contest update on (mu, sigma) from EPA-bucketed outcomes; team strength = sum of 11 starters' mu; weekly QB Kalman fusion; devigged closing line as log-loss floor (0.61919 stack vs 0.63984 plain Elo vs ~0.609 closing).
- SoS adjustment (Build 8): iterative SRS-style — adjusted rating = raw rating − average opponent adjusted rating, iterated to convergence (delta < 1e-6 within 100 iterations).
- Market blend (Build 10): LOG-ODDS space for probabilities (logit → weighted mean → expit); POINT space for spreads/totals; probability-space blending is declared a bug the module refuses.
- Ensemble (Build 15): 0.8 × model prob + 0.2 × vig-stripped market prob; edge = modelProb − vegasImplied.
- Coach Intent Index (Build 12): preseason intentScore 0–1; adjProb = 0.5 + (prob−0.5)·(0.5 + 0.5·|intentDiff|) toward the trier; regular season informational only.
- Pre-snap model (Build 14): 69.7% accuracy vs 59.0% naive, ROC-AUC 0.766, Brier 0.192 on 173,881 nflverse plays; report Brier over accuracy.
- Confidence-split reporting (Build 12): every voter reports record by tier — e.g., 60%+ picks 9-1 vs sub-60% 2-4.
- EMA features (Build 15): EMA(span=4) with shift(1) on 9 metrics; differential = team EMA − opponent EMA; 9-feature vector.
- CFB prior (Build 13): log-scaled margin of victory; 5-year weighted 247Sports talent with 3-years-ago class double-weighted; HFA ≈ 3 pts.

## Data sources named
- SamuelLachance (open source): 14-feature stack + per-play TrueSkill, nflverse play data with player participation
- Daniele Comitogianni (methodology only): decade of play-by-play, XGBoost/RF/Ridge + 100,000 Monte Carlo; reports win prob, spread, projected score (62%, −3, 23-20)
- Athena Huo (code on request): 4,045 games back to 2010; injury reports + weather refresh; N=10,000 per-game simulations; Kalshi 61% vs sims value example; value flag threshold |value| > 0.05
- jackc625 (learn-only): Bronze/Silver/Gold lakehouse; as_of_datetime time-fence; blend weights tuned strictly on pre-2018 seasons
- nfelo / Robby Greer (open source): separate team Elo + QB Elo, regressed to market spreads; public per-game win-prob CSVs; divergence flag |GSE − nfelo| > 0.08
- R2 (methodology only): ridge on 3,028 games since 2015 (recency-weighted), 1,000 sims per game
- Barking Crow / Movelor (open writeup): margin-of-victory Elo + recruiting; transparent benchmark "Movelor 12.9 pts error, closing spread 12.1, FPI 12.5, SP+ 12.3"
- maximusdesir/engage8 (MIT — the only code liftable with attribution, github.com/maximusdesir/engage8): LightGBM on 173,881 plays, time-split 2019–21/2022/2023
- cdinh92 (learn-only): nflreadpy pipeline, XGBoost, 80/20 odds-vig-strip ensemble; only 2 weeks of history — "promising, not proven"

## Findings (numbers and facts, not vibes)
- SamuelLachance's 14-feature TrueSkill stack beat plain Elo (log-loss 0.61919 vs 0.63984); the closing line still encompassed his model (~0.609) — he published that negative result [TRUST-SIGNAL, SCHEME]
- Pre-snap LightGBM: 69.7% accuracy vs 59.0% naive baseline, ROC-AUC 0.766, Brier 0.192 — methodology-grade signal for defensive-tendency inputs [SCHEME]
- R2's confidence split: 60%+ picks went 9-1 vs sub-60% 2-4 — a standing reporting requirement, not a one-off [TRUST-SIGNAL]
- Movelor error benchmark: 12.9 pts (model) vs 12.1 (closing spread) vs 12.5 (FPI) vs 12.3 (SP+) — published four-column honest table [TRUST-SIGNAL]
- Comitogianni's SoS adjustment dropped the Patriots' defense from 5th raw to 11th — concrete magnitude of SoS correction [SCHEME]
- jackc625's three-level temporal safety: as-of fence + keyword scan + walk-forward splitter that HARD-FAILS on season overlap; blend weights tuned only on pre-2018 seasons so 2021–24 backtest is unseen [TRUST-SIGNAL]
- nfelo's caveat (his own docs): market-regressed, so NOT methodologically independent of the market — specified as benchmark only, never as a signal [TRUST-SIGNAL]
- QB Elo update weighted by QB's share of team EPA: a QB producing 80% of the offense moves his rating more than a game manager [QB-BEHAVIOR]
- EMA leakage rule: shift(1) only — yesterday's values, never the current week; blend edge = modelProb − vegasImplied [TRUST-SIGNAL]
- Standing rule: every module gets a test; new files only; methodology re-implemented as GSE's own output; log each finished item in docs/research/2026-09-21/wiring/IMPLEMENTED.md [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TrueSkill player ratings + QB Kalman fusion → QB-BEHAVIOR (QB performance tracked as rating series), SCHEME (injury-aware team aggregates)
- Per-play TrueSkill → OTHER (potential OL signal: per-play OL participant updates could feed OL ratings)
- Coach Intent Index (preseason aggressiveness, intentScore 0–1, 4th-down aggressiveness input) → COACHING
- Pre-snap run/pass tendency engine → SCHEME (play-calling tendencies; bridge to ethandjo AI OC builds)
- Leakage gates, encompassing tests, confidence-split reporting, benchmark tables, as-of fencing → TRUST-SIGNAL
- QB Elo update weighted by QB's EPA share → QB-BEHAVIOR
- SoS-adjusted efficiency, EMA differentials, geometric/time-weighted features → SCHEME

## Engine-actionable? (yes)
Encode as-of time-fencing + walk-forward hard-fail gates on every predictor module before any backtest work proceeds.
