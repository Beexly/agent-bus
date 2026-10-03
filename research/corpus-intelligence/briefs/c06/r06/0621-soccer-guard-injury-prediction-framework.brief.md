# arxiv-program/research/2026-09-21/arxiv-deep/0621-soccer-guard-injury-prediction-framework.brief.md
## What it is (1-2 sentences)
SoccerGuard runs a 90-scenario grid (input window × output horizon × imbalance treatment × 5 models) on the SoccerMon dataset to see which injury-prediction configuration works; headline finding is that longer input windows and longer forecast horizons lift F1 sharply, but absolute recall remains near zero.
## Key metrics/methods (formulas where given, else "not specified")
- Grid: input windows 3/5/7 sessions × output horizons 1/3/7 days × class-proportion treatments × 5 models (logistic regression, random forest, XGBoost, SVC, LSTM).
- 45 Monte Carlo CV rounds per scenario; default hyperparameters throughout; SMOTE-family synthetic oversampling for imbalance.
- Metrics: precision, recall/TPR, F1, AUC per scenario.
## Data sources named
SoccerMon (public dataset; paper constructs scenarios from it). 4,448 data points, 37 players, Feb 2020–Nov 2021, 114 attributes, 43 injury points (~1% event rate). Paper's scenario-construction code not linked.
## Findings (numbers and facts, not vibes)
- Example scenario I-58 (random forest): precision 0.623, TPR 0.014, F1 0.027, AUC 0.618 — high precision but catches 1.4% of injuries.
- 5-session input improves F1 by 40.91% vs 3-session input; 7-day output horizon improves F1 by 336.36% vs 1-day horizon.
- Authors recommend logistic regression first, then LSTM (asserted over models with tiny absolute TPRs).
- File flags serious flaws: 43 injury events over 90 scenarios × 45 MC rounds (multiple-comparison minefield), Monte Carlo random splits on longitudinal data (leak future sessions into training), no hyperparameter tuning.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: window-sweep protocol (input × horizon grid) adaptable to NFL injury model with chronological splits; INFERENCE — the low F1/precision-only reporting pattern is a TRUST-SIGNAL red flag: papers reporting precision without TPR on rare events should be treated as noise-mined until re-validated.
## Engine-actionable? (yes/no + one-line what)
yes — Adopt only the scenario-grid protocol for the NFL injury model (sweep 1–4 week input windows × 1–3 week horizons on nflverse + injury-report data) with chronological splits, hyperparameter tuning per cell, and a TPR ≥ 0.30 at precision ≥ 0.30 acceptance gate; do not copy any of the fitted models.
