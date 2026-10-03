# arxiv-program/research/2026-09-21/arxiv-deep/0493-longsequence-lstm-modeling-for-nba-game.md
## What it is (1-2 sentences)
An NBA game-outcome prediction paper (Rios, Han, Baimagambetov, Polatidis, 2026, arXiv:2512.08591v1) using an LSTM over extreme 9,840-game sequences (8 full NBA seasons) on a novel multi-season Kaggle dataset, framed as a "generalizable fallback" prior that resists concept drift. The worker ledger marked it ADAPT — port the fallback-prior architecture (not the feature set) to an NFL long-history LSTM on nflverse.
## Key metrics/methods (formulas where given, else "not specified")
- Architecture: sequence-to-one LSTM, input (batch, 9840, features) → LSTM(200, return_sequences=True) → LSTM(100, return_sequences=True) → LSTM(50, return_sequences=False) → Dense(32, ReLU) → Dropout(0.3) → Dense(1, sigmoid) = P(home win).
- Standard LSTM gate equations (1)–(6): f_t=σ(W_f·[h_{t−1},x_t]+b_f), i_t=σ(W_i·[h_{t−1},x_t]+b_i), c̃_t=tanh(W_c·[h_{t−1},x_t]+b_c), o_t=σ(W_o·[h_{t−1},x_t]+b_o), c_t=f_t⊙c_{t−1}+i_t⊙c̃_t, h_t=o_t⊙tanh(c_t); ŷ=σ(w·a+b).
- Baselines: Logistic Regression (L2 C=1.0); Random Forest (sklearn, bootstrap); MLP (Dense 128→BN→Dropout 0.3→Dense 64→Dropout 0.3→Dense 32→sigmoid, Adam, BCE); CNN (Conv2D 32/64/128 with (1,2) kernels, (1,2) max-pool, kernel regularizer 0.001, flatten, Dense 128, sigmoid, Adam, BCE). TensorFlow/Keras. No hyperparameter tuning reported.
- Evaluation metrics: (7) Accuracy=(TP+TN)/(TP+TN+FP+FN); (8) Precision=TP/(TP+FP); (9) AUC-ROC=∫_0^1 TPR(FPR)d(FPR). No calibration step.
## Data sources named
- nba.com/stats (source); novel dataset public at https://www.kaggle.com/datasets/charlesrios/nba-advanced-metrics-2004-2024.
- All NBA regular-season games 2004–05 to 2024–25; each game = 2 teams × ~33 features (WINS, LOSSES, FGM, FGA, FG3A, FG3M, FTA, FTM, OREB, DREB, AST, STL, BLK, TO, PF, PTS, PLUS_MINUS, OFF_RATING, DEF_RATING, AST_PCT, AST_TOV, AST_RATIO, OREB_PCT, DREB_PCT, TM_TOV_PCT, EFG_PCT, TS_PCT, PACE, POSS, PIE, PCT_PTS_PAINT, PCT_PTS_FB, PCT_PTS_OFF_TOV, PCT_PTS_3PT), each duplicated as HOME_* and AWAY_*, each value = team's stat from its most recent game. No rosters, trades, or free-agency data. Samples require 9,840 preceding games, so predictions begin 2012–13; sliding window shifts one game at a time.
## Findings (numbers and facts, not vibes)
- LSTM: 72.35% accuracy, 73.15% precision, 76.13% AUC-ROC — best on all metrics.
- Logistic Regression: 70.12% accuracy, 70.66% precision, 69.85% AUC-ROC.
- Random Forest: "slightly increased accuracy and AUC-ROC" vs LR but decreased precision (no exact numbers); top-3 RF feature importances: LOSSES, WINS, PIE (FG3A/FG3M ranked near bottom despite the 3-point revolution — the paper's surprise).
- MLP: "larger jump" over LR/RF in all metrics (no exact numbers). CNN: lower accuracy and precision than MLP but higher AUC-ROC (no exact numbers) — better probability ranking, worse classification.
- LSTM outperformed three prior works (Perricone et al. 2016; Teno et al. 2022; Zhao et al. 2023) on accuracy.
- The paper's claim "Vegas betting lines… roughly 55% accurate, significantly lower than our model's 72.35%" is flagged by the worker as a category error (Vegas lines are priced to balance action, not maximize accuracy; 55% figures concern ATS pick rates, not moneyline accuracy).
- Limitations: train/val/test partition not stated; no significance tests; no ablation of the asserted 8-season window; sliding windows overlap by 9,839 games (leakage risk if split isn't strictly time-ordered); no roster/trade/injury data; playoffs excluded.
- NFL transfer caveat: NFL has 17-game seasons vs 82-game NBA seasons; an 8-"season" NFL window is ~136 games per team — a very different information regime, and NFL game-level features are noisier per game.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — sequence modeling for game-outcome prediction; the transferable idea is the architecture role: a stabilized long-history "fallback prior" stacked with current-season specialists (FiveThirtyEight ELO+RAPTOR cited as spirit). Maps to GSE's ensemble instinct, not to QB/coaching/OL/trust/scheme lanes. Improvement experiment proposed in the file: replace the fixed window with learned team-specific effective-history via attention over the sequence.
## Engine-actionable? (yes/no + one-line what)
yes — build a 2-layer LSTM/GRU sequence-to-one fallback-prior model on nflverse 2000–2024 team-game features (~150–200-game sequences), stack its output as a prior feature in GSE's ensemble, and adopt only if the stacked model's 2023–2024 holdout log-loss beats the no-prior baseline by ≥0.005 (never hard-copy the paper's 9,840-game window or its uncalibrated evaluation).
