# arxiv-program/research/2026-09-21/arxiv-deep/1138-fouling-efficiency-xb-model.md
## What it is (1-2 sentences)
Deep read of arXiv:2401.08718 (Azmat & Yi 2024, "Investigating Fouling Efficiency in Football Using Expected Booking (xB) Model"). Builds an xG-style classifier for the probability a soccer foul draws a yellow card (features: minute, distance/angle to goal, foul history, VAEP offensive threat, 360 freeze-frame counts), rating teams/players by cumulative xB vs actual bookings; verdict ADAPT as an NFL "xFlag" expected-penalty model concept.
## Key metrics/methods (formulas where given, else "not specified")
- Three experiments: (1) 6 features on 957 fouls, Decision Tree / Logistic Regression / Gradient Boosting / XGBoost on 80/20 random split; (2) +VAEP offensive value + 2 spatial 360 features (attackers ahead of foul location, defenders between foul and goal), GBM vs XGBoost; (3) XGBoost on ~20,000 fouls, event data only.
- VAEP quoted from Decroos et al. (2019): V(ai, x) = DeltaPscores(ai, x) + (-DeltaPconcedes(ai, x)).
- Target: binary yellow-card issuance; model output probability = xB of that foul; team/player ratings = sum of xB per match, and xB/B ratio.
- Metrics: accuracy, precision, recall, F1, ROC AUC.
- Assumptions: non-dangerous fouls are the "tactical" component, modellable independently of bad-behavior bookings; yellow cards 18x more frequent than reds (cited Poli et al. 2020) justifies yellow-only modeling; booking probability depends on match context and foul history, not referee identity (no referee fixed effects); cumulative per-foul probabilities comparable across matches.
## Data sources named
StatsBomb open event data + StatsBomb 360 freeze-frame data, via Socceraction package. Experiments 1-2: 957 non-dangerous fouls from 210 matches across 4 competitions. Experiment 3: ~20,000 non-dangerous fouls from 2,690 matches: Serie A 2015/16 (380 matches, 2,716 fouls), Premier League 2015/16 (380, 2,418), La Liga 2015/16 (380, 3,388), Ligue 1 2015/16 (376, 2,321), Bundesliga 2015/16 (304, 2,013), Indian Super League 2021/22 (114, 619), FIFA World Cup 2018 (64, 385), WC 2022 (64, 370), UEFA Euro 2020 (51, 329). StatsBomb free data: statsbomb.com/what-we-do/hub/free-data/.
## Findings (numbers and facts, not vibes)
- Exp 1 (957 fouls, 6 features): DT Acc 0.55 / AUC 0.59; LR Acc 0.57 / AUC 0.56; GBM Acc 0.58 / AUC 0.59; XGBoost Acc 0.59, Prec 0.50, Rec 0.47, F1 0.48, AUC 0.61.
- Exp 2 (+VAEP + 2 spatial): GBM Acc 0.76, Prec 0.65, Rec 0.76, F1 0.70, AUC 0.82; XGBoost Acc 0.79, Prec 0.71, Rec 0.75, F1 0.73, AUC 0.84 (paper claims +20% accuracy, +23% AUC vs exp 1 for XGBoost).
- Exp 3 (~20k fouls, XGBoost): Acc 0.83, Prec 0.83, Rec 0.78, F1 0.82, AUC 0.91.
- WC 2022 descriptive: Morocco best fouling efficiency (high fouls, low bookings, high xB/B); Marcos Acuna (Argentina): xB 3.78, B 3, ratio 1.26; Woo-Young Jung: xB 2.42, B 2, ratio 1.21.
- Limitations: no referee effects (major omitted variable); random splits not time-ordered (same matches in train/test, AUC 0.91 likely optimistic); class imbalance not discussed; 83% accuracy weak without a majority-class baseline; soccer-only, no NFL analogue tested.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: per-team fouling discipline / tactical-fouling efficiency ratings as a coaching discipline signal.
- OTHER: officiating crew fixed effects (paper omits; the brief's improvement experiment makes them the largest expected lift); drive-extension probability inputs to win-prob.
## Engine-actionable? (yes/no + one-line what)
Yes — build an NFL "xFlag" expected-penalty model: XGBoost/LightGBM per-play flag probability on nflverse 2018-2025 features (down/distance, yardline, score differential, clock, home/away, team prior penalty rate, referee crew, EPA of pre-flag play), ADOPT into game simulation only if out-of-sample AUC >= 0.58 on 2023-2024 and it cuts closing-total MAE by >= 0.3 points; improvement experiment: add referee-crew embeddings and a two-stage flag->yardage hurdle model.
