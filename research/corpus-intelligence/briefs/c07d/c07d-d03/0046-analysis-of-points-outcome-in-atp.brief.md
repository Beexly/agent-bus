# arxiv-program/research/2026-09-21/arxiv-deep/0046-analysis-of-points-outcome-in-atp.md
## What it is (1-2 sentences)
A DTU student thesis (2022, posted to arXiv 2025 as arXiv:2506.05866v1) predicting, point-by-point, whether the server or returner wins the next point in ATP Grand Slam men's singles (Wimbledon + US Open 2016–2020, 709 matches) using public Sackmann data and a 57-feature design. Verdict in the file: REJECT — an honest negative result: every ML model matches or underperforms the naive "server wins the point" baseline.

## Key metrics/methods (formulas where given, else "not specified")
Only explicit math is textbook logistic regression, copied verbatim:
- Sigmoid: G(x) = 1 / (1 + e^(−wᵀx)) (Eq. 1).
- Loss: L(x) = (1/m) Σᵢ −(1−yⁱ)log(1+yⁱ−G(xⁱ)) − yⁱ log(G(xⁱ)) (Eq. 2; nonstandard log(1+yⁱ−G(xⁱ)) form — file notes this is the paper's own nonstandard form).
- SGD update: w_{j,n+1} = w_{j,n} − α ∂L/∂w_j (Eq. 3).
- Methods bake-off: **baseline** = server's empirical point-win rate (73.2% first serve / 57.2% second serve) vs Logistic Regression, Random Forest, AdaBoost, XGBoost (scikit-learn + XGBoost). XGBoost **scale_pos_weight = 1.3** to upweight the under-represented class.
- Metrics: accuracy, recall, precision, F1, ROC-AUC.
- Validation: 10% of matches randomly held out as test; remaining 90% split 80/20 train/validation; 10-fold CV on train/val; random search hyperparameter tuning of the best model. Split by match (no point-level train/test leakage); row design shifts post-outcome columns one row up and uses accumulated features so each row is the state at the start of the point.

## Data sources named
- Jeff Sackmann's public repos (tennis_atp + tennis point-by-point): Wimbledon + US Open men's singles, 2016–2020; 709 matches after excluding matches missing serve-placement features.
- 57 features (§3.3.1, Table 1): accumulated in-match stats (points/games/sets won, aces, winners, double faults, unforced errors, net points, break points), serve descriptors (speed, ServeWidth B/BC/BW/C/W, ServeDepth CTL/NCTL, ReturnDepth D/ND, ServeNumber first/second), match descriptors (surface, P1Rank/P2Rank, scores, tiebreak flags, distance run, rally count). Server always encoded as player 1 (features swapped when player 2 serves).
- Code: https://github.com/illumlol/ANALYSIS-OF-POINTS-OUTCOME-IN-ATP-GRAND-SLAM-TENNIS-USING-BIG-DATA-AND-MACHINE-LEARNING (no stated license or environment pinning).
- Provenance: DTU student project, not peer-reviewed; data ends 2020, two Slams only.

## Findings (numbers and facts, not vibes)
- Descriptive stats (§3.2): 68.19% (AD court) / 68.15% (deuce court) of successful first serves went close to the sidelines, vs only 29.04% / 30.3% for second serves (second-serve depth often NCTL — not close to line — consistent with risk aversion).
- Server point-win rates: **73.2% on successful first serves, 57.2% on second serves, 64.8% overall**.
- **First serve — 10-fold CV (Table 2):** baseline accuracy 73.2%. All four ML models: **accuracy = 73.2%**, recall **0.0%** — "the models rarely or never actually predicts the returner as the winner" (class imbalance 73.2/27.8). Logistic Regression highest precision (31.0%), "due to the low recall score the result is quite unreliable."
- **First serve — tuned XGBoost on test (Table 3):** accuracy **73.4%** vs baseline 73.2% (**+0.2 pp**), recall 1.2%, precision 43.7%, F1 2.3%, ROC-AUC 56.9%. "The model achieves a slight gain in accuracy score compared to the baseline, but in general the overall model performance is questionable."
- **Second serve — 10-fold CV (Table 4):** baseline 57.2%; XGBoost 53.0%, AdaBoost 52.8%, Random Forest 53.0%, Logistic Regression 52.7% — "All models scores roughly 4% lower in accuracy than the baseline."
- **Second serve — tuned XGBoost on test (Table 5):** accuracy **53.1%** vs baseline 57.2% (**−4.1 pp**), recall 44.7%, precision 50.6%, F1 47.5%, ROC-AUC 53.5%. "The Roc-Auc score indicates that the model is slightly better than a random guess."
- **Feature importance (XGBoost gain):** strongest = score/state features — P1SetsWon, P2SetsWon, P2BreakPointWonA/P2BreakPointMissedA, P1Rank/P2Rank, Surface. "The accumulated features for the serve and return position had no significant influence. It has therefore not been possible to identify factors which gives strategic advances in tennis."
- Paper's own conclusion (§5): "The Point Winner model performed equal or worse than their baselines… The Roc-Auc was just above 0.5 which indicated that model was not performing much better than a random guess."
- Reviewer notes: the +0.2 pp "improvement" is degenerate (1.2% recall — model predicts server virtually always); authors note higher-quality spatiotemporal data (Hawk-Eye) exists but is not public; no calibration analysis, no betting-market comparison, no match-level aggregation of point predictions.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL / OTHER (negative-result cautionary citation): with public summary features, point-level prediction collapses to the base rate — every model either degenerates to the server prior (recall 0.0%, accuracy = 73.2%) or loses to it (−4.1 pp on second serves). This generalizes as an engine discipline: in any domain where public summary features are thin, a strong-model baseline check against the naive prior must gate adoption. Serves the calibration/sizing program as a "strong baseline first" discipline reminder, not as a method.
- OTHER (tennis serve-width descriptive): 68.19%/68.15% of first serves land close to sidelines vs 29.04%/30.3% for second serves — a documented risk-aversion gradient. Out of NFL scope; record only.
- OTHER (leakage hygiene corroboration): the row design (shifted outcome columns, accumulated features, by-match splits) is careful — the failure is informational, not methodological. Corroborates GSE's play-by-play feature-engineering practice of shifting post-outcome features; changes no decision.

## Engine-actionable? (yes/no + one-line what)
No — negative result: no model beats the naive baseline, tennis is outside GSE scope; retain only as a "strong-baseline-first" cautionary discipline for the calibration/sizing program.
