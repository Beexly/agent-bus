# docs/arxiv-program/research/2026-09-21/arxiv-deep/0286-xgboost-learning-of-dynamic-wager-placement.md
## What it is (1-2 sentences)
Deep-read ledger of Terawong & Cliff (2024, arXiv:2401.06086v1): trains XGBoost as an imitation learner on the profitable in-play bets of simple bettor-agents inside the Bristol Betting Exchange (BBE) horse-race agent-based simulator, then deploys the learned policy as a new agent and evaluates it on profit against all baselines. Verdict ADAPT — the headline finding is that the learner outperforms every agent that generated its training data (including the privileged-information agent), but the strategy is horse-race-specific and validated only in the simulator.

## Key metrics/methods (formulas where given, else "not specified")
- XGBoost binary classifier (binary:logistic, LogLoss), GridSearchCV 5-fold tuning eta, max_depth, subsample, colsample_bytree, gamma, then n_estimators with early_stopping_rounds=10; optimal: colsample_bytree=1.0, eta=0.3, gamma=0, max_depth=6, subsample=1.0; halted at 452 of 1000 rounds.
- Features ranked by F-score: distance (8680), time (6642), rank (1276); target = binary back/lay decision.
- Evaluation: Wilcoxon-Mann-Whitney U-tests on per-agent profit distributions (non-normal per Shapiro-Wilk), two scenarios × 100 races each.
- Classification: accuracy 0.88; lay: precision 0.88 / recall 0.98 / F1 0.93; back: precision 0.85 / recall 0.41 / F1 0.56 (confusion: 72521 TN, 1197 FP, 6730 TP, 9541 FN).

## Data sources named
- Synthetic only: Bristol Betting Exchange (BBE) open-source ABM — horse-race track simulator (1-D discrete-time stochastic process with blocking/hurrying) + real betting-exchange matching engine (back/lay, time-priority, commission). 1000 training races × 5 competitors; 110 bettors (ZI, Leader-Wins, Back-The-Favourite, Linear-Extrapolator, Underdog, Privileged RP(1,10,15)); ~90k labeled actions from top-20% most profitable in-play transactions per race.
- Code: github.com/ChawinT/ — XGBoost_TBBE (data gen + agent integration), XGBoost_ModelTraining (training/optimization/hypothesis tests).

## Findings (numbers and facts, not vibes)
- The XGBoost agent was significantly more profitable than EVERY baseline agent type in both scenarios — including the Privileged agent that runs private forward race simulations; largest p-value = 0.0017 (Privileged vs XGBoost, scenario 2).
- The learned policy keys almost entirely on race position-in-time: top features distance (8680 F-score), time (6642), rank (1276).
- Back-class recall is poor (0.41): the strategy misses most back opportunities; profitability comes from lay selectivity.
- Authors explicitly caution against real-money use: BBE race dynamics are "convincing" but not calibrated to real races; profitability inside the ABM transfers to nothing in reality.
- Training data = only the top-20% most profitable in-play transactions per race (~90k labeled actions total).
- Fixed stakes throughout — stake sizing is entirely unaddressed in the paper.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Learned policy beats every teacher including the privileged-info agent (p=0.0017) — OTHER (in-play betting policy / synthetic learning loop)
- Imitation-learning loop design (profitable-agent actions → classifier → redeploy → test for beats-every-teacher) — OTHER (in-play wagering research lane)
- Top features are race-shape (distance/time/rank), i.e., position-in-time state — OTHER (feature-priority signal for in-play modeling)
- Back recall 0.41 / lay selectivity drives profit — OTHER (bet-side asymmetry in in-play policy)
- Circular-simulator risk: trained AND tested inside same ABM; no real-data validation — TRUST-SIGNAL (calibration-of-claims evidence standard)

## Engine-actionable? (yes/no + one-line what)
Yes — port the imitation-learning loop (not the horse policy): build an NFL in-play sandbox from recorded live-odds + win-probability traces, train XGBoost to imitate the top-20% profitable scripted baseline actions, and require the learned policy to beat every baseline on 2025 holdout profit (p<0.05 Wilcoxon) before adoption.
