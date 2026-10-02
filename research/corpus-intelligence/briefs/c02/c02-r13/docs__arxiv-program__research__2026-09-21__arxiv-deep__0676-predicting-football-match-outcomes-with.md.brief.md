# docs/arxiv-program/research/2026-09-21/arxiv-deep/0676-predicting-football-match-outcomes-with.md

## What it is (1-2 sentences)
Ren & Susnjak (2022, arXiv:2211.15734) decompose soccer match prediction by a Kelly-Index difficulty class (Type 1/2/3 based on how many bookmakers show K>1), train per-class ensemble ML classifiers with SHAP explainability, and test a confidence-gated betting strategy. Ledger verdict: ADAPT — the difficulty classification + confidence-gated staking is a directly portable pick-selection/abstention filter.

## Key metrics/methods (formulas where given, else "not specified")
- Kelly Index per outcome per bookmaker: K_H = (O_H/avgO_H)·F_99; K_D = (O_D/avgO_D)·F_99; K_A analogous (F_99 = payout rate; O_H = bookmaker odds, avgO_H = mean odds across books).
- Type rule: count of bookmakers with any K>1 → Type 1 (≥2, easiest), Type 2 (exactly one), Type 3 (none, hardest).
- Classifiers per type: CatBoost, XGBoost, Random Forest, Gradient Boosting, Logistic Regression, KNN, Decision Tree, Stacking, Voting + 2 baselines, tuned via RandomizedSearchCV.
- SHAP for feature importance; expanding-window forecasting validation; per-type accuracy/precision/recall/F1 + average rank.
- Betting experiment: $1 flat stake per match, ROI = profit/invested, plus confidence-threshold gating (bet only if model confidence ≥ threshold, on Pinnacle odds).

## Data sources named
1,140 English Premier League matches, 2019–2021 seasons (380/season): match stats, six European bookmakers' odds (Bet365, Interwetten, Bet&Win, Pinnacle, VC Bet, William Hill), Elo-based engineered features. Public datasets; no code stated.

## Findings (numbers and facts, not vibes)
- Draw rates: Type 1 16.0–21.1% per season; Type 3 23.6–29.5% per season; Type 1 home wins dominate. (OTHER)
- Accuracy: Type 1 CatBoost 70.0% (precision 66.6, F1 63.6); Type 2 Random Forest 52.7%; Type 3 RF 41.1%; all-matches RF 52.0%. (OTHER)
- SHAP: Type 1 → home historical stats dominate; Type 2/3 → bookmaker odds features dominate. (OTHER)
- Betting ROI ($1 stakes): naive per-type mostly negative — Type 1: Bet365 −1.1%, Pinnacle +1.4%; Type 2/3: all −3.3% to −6.3%. (TRUST-SIGNAL — only the gated result is worth publishing)
- Only profitable configuration: Type 1 matches + model confidence ≥70% on Pinnacle odds → final ROI +17%. (OTHER)
- Stacking/voting ensembles unexpectedly underperformed the single best models. (OTHER)
- Confidence distribution: even "easy" matches rarely exceed 60% model confidence; Table 9: Type 1 2020 had 0% of matches above 0.7 confidence — the +17% ROI rests on a small slice. (TRUST-SIGNAL — fragility caveat)
- Odds features leak market information into "model" predictions; no transaction costs modeled; Pinnacle-only profitability may not transfer to US books. (TRUST-SIGNAL — limitation)

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
Tagged inline above.

## Engine-actionable? (yes/no + one-line what)
Yes — compute a Kelly-style difficulty index across US books per game (book odds ÷ market mean × payout rate), classify games easy/medium/hard, and gate published picks: easy + engine confidence ≥70% → full unit, medium → half unit or pass, hard → pass; backtest 2020–2024 NFL ATS vs closing lines.
