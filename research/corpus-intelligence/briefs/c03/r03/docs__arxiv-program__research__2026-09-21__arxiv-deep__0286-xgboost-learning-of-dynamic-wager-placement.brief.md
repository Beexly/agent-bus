# docs/arxiv-program/research/2026-09-21/arxiv-deep/0286-xgboost-learning-of-dynamic-wager-placement.md
## What it is (1-2 sentences)
Deep read of Terawong & Cliff (2024, arXiv:2401.06086v1): XGBoost trained as an imitation learner on the most profitable in-play bets of simple scripted bettor-agents inside the Bristol Betting Exchange (BBE) agent-based model of horse-race betting. Verdict ADAPT — the headline finding (learner outperforms every agent that generated its training data, including a privileged-information agent) is a validated synthetic-data learning loop for in-play/line-movement modeling, but the strategy is horse-race-specific and tested only in a simulator.
## Key metrics/methods (formulas where given, else "not specified")
- XGBoost binary classifier (binary:logistic, LogLoss), GridSearchCV 5-fold; optimal: colsample_bytree=1.0, eta=0.3, gamma=0, max_depth=6, subsample=1.0; n_estimators up to 1000 with early_stopping_rounds=10 (halted at 452).
- Evaluation via Wilcoxon-Mann-Whitney U-tests on per-agent profit distributions (non-normal, Shapiro-Wilk confirmed).
- Training data: top-20% most profitable in-play transactions per race; ~90k labeled actions. Top features by F-score: distance (8680), time (6642), rank (1276).
## Data sources named
BBE agent-based model (Bristol Betting Exchange) — horse-race track simulator + real matching-engine implementation of a betting-exchange order book (back/lay, odds levels, time-priority matching, commission); 1000 training races x 5 competitors; 110 bettors of types ZI, Leader-Wins, Back-The-Favourite, Linear-Extrapolator, Underdog, Privileged RP(1,10,15). Repos: github.com/ChawinT/ (XGBoost_TBBE, XGBoost_ModelTraining).
## Findings (numbers and facts, not vibes)
- Classification accuracy 0.88 overall; lay class: precision 0.88/recall 0.98/F1 0.93; back class: precision 0.85/recall 0.41/F1 0.56 (confusion: 72521 TN, 1197 FP, 6730 TP, 9541 FN) — poor back-class recall; profitability comes from lay selectivity.
- XGBoost agent significantly more profitable than every baseline in both scenarios (100 races each), including the Privileged (private-simulation) agent, largest p = 0.0017.
- Model keys essentially on race-shape heuristic (distance + time + rank) — no transferable content to NFL noted directly.
- Authors' own caution: "a lot of further development work and much more extensive testing would be required" before real-money use; no real-data validation whatsoever.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Imitation-of-profitable-actions learning loop beats every teacher (TRUST-SIGNAL — honest proof-of-concept framing with non-parametric tests and explicit simulator-only caveat)
- Profitability evaluated on profit rather than accuracy — only corpus entry to train a model to place bets (OTHER — betting-policy lane)
- Learned policy reduces to distance/time/rank race-shape heuristic (OTHER — in-play timing features)
## Engine-actionable? (yes/no + one-line what)
Yes — port the imitation-learning loop, not the horse policy: train XGBoost on the most profitable actions of scripted in-play NFL betting policies from recorded live-odds + win-probability traces, test learned policy on holdout profit vs every baseline (p < 0.05 Wilcoxon).
