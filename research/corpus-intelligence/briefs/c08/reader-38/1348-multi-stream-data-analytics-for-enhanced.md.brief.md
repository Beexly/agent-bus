# docs/arxiv-program/research/2026-09-21/arxiv-deep/1348-multi-stream-data-analytics-for-enhanced.md
## What it is (1-2 sentences)
Ledger read of Bonello, Beel, Lawless, Debattista (2019), "Multi-stream Data Analytics for Enhanced Performance Prediction in Fantasy Football" (arXiv:1912.07441v1): a Fantasy Premier League recommender fusing historical stats, betting-market odds, and blog/news sentiment into per-position gradient-boosting models predicting captain-worthy (>6 pts) players weekly. Verdict: ADAPT — the multi-stream player-performance pipeline (and honest negative tweet-sentiment result) transfers to GSE's DFS/props lane.
## Key metrics/methods (formulas where given, else "not specified")
Per-position (GK/DEF/MID/FWD) gradient boosting machines chosen over SVMs/RFs for the imbalanced points distribution; target binary "isCaptain" (1 if player scored >6 points that gameweek). Hyperparameters selected via AUC-ROC curves; feature importance per position. Pipeline: FPL API + odds API + article API → statistics predictor + article predictor → GBM → weekly optimal lineup. No formal equations stated.
## Data sources named
FPL API (official game data: minutes, influence, threat, creativity, ICT index, transfers, points history, fixture difficulty ratings, home/away, price); betting odds via football-api (RapidAPI) converted to implied probabilities; tweets via tweepy (dropped — degraded predictions); blog/news entity sentiment via Aylien API (commercial).
## Findings (numbers and facts, not vibes)
- Full-season 2018/19 simulation: multi-stream **2,314 points**, avg ~63–64 pts/gameweek, rank **~30,000 of 6.5M (top 0.5%)** vs stats-only baseline **1,994 points**, ~52–54 pts/gameweek, rank **~800,000 (top 13%)**. Improvement +320 points (~+11 pts/week).
- Per-position precision: forwards 92% (multi) vs 88% (baseline); goalkeepers 79% vs 82% (baseline better — text adds noise for keepers).
- Accuracy paradox: overall accuracy 89% (multi) vs 91% (baseline) — accuracy slightly down while points strongly up.
- Blog-sentiment ablation: odds alone and blogs alone each significantly beat baseline; combined, "considerably more powerful than their individual counterparts."
- Honest negative: tweet sentiment *degraded* predictions (football slang/emojis defeat standard sentiment libraries) — excluded from final model.
- Limitations flagged in-file: single season, no cross-season validation; recommender ignores FPL transfer constraints; no probability calibration.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: DFS/props projection architecture — per-position GBMs, odds-implied lines as *features* (not just targets), news entity-sentiment stream (skip raw tweets per the negative result); position-specific feature-importance audits to set stream weights.
## Engine-actionable? (yes/no + one-line what)
yes — build NFL per-position (QB/RB/WR/TE) GBM upside models: nflverse/FTN stats + Odds-API implied totals/prop lines as features + beat-writer news entity sentiment, weekly expanding-window retraining, gated on ≥10% total-points gain over stats-only on 2021–2024 backtest with per-stream ablation (2–3 weeks + one season backtest).
