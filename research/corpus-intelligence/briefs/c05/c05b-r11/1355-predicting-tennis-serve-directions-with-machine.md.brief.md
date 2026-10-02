# arxiv-program/research/2026-09-21/arxiv-deep/1355-predicting-tennis-serve-directions-with-machine.md
## What it is (1-2 sentences)
Deep-research ledger of arXiv:2602.22527v1 (Zhu & Naikar, cs.LG, 2026) on predicting tennis first-serve direction (6 classes: wide/body/down-the-T × deuce/ad) from point-charting data with per-player ML models. Five classifiers hit ~49% (men) / ~44% (women) accuracy vs ~16.7% chance — but the random point-level 70/30 split leaks within-match data, so true generalization is lower; the ledger flags this and requires grouped chronological re-validation. Verdict: ADAPT — serve-tendency priors for serve/return prop features and live in-play modeling, after recalibration.

## Key metrics/methods (formulas where given, else "not specified")
- Per-player models (one model per player, not pooled): multinomial logistic regression, decision tree, random forest (200 trees, max depth 150), multiclass SVM, neural network (sklearn MLPClassifier, two hidden layers (200, 100)). Also tried bagging (50 estimators), AdaBoost (70), XGBoost (K=10) — "no better," results omitted.
- Target: first-serve direction among 6 classes; deuce-side and ad-side serves modeled separately.
- Features (Sec. 5): (a) run index — estimated court movement per point inferred from charted shot type/direction/depth; (b) performance anxiety index from OCC emotion model: anxiety = uncertainty × (hope + fear) (eq. 1) at game, set, and match levels (3 features) + overall anxiety = game + set + match anxiety (eq. 2); uncertainty from score gaps at three hierarchical levels, hope from closeness to winning, fear from closeness to losing; (c) court surface; (d) opponent handedness.
- Validation: random 70/30 point-level split per player (NOT match-grouped, NOT chronological), same partitions across all five classifiers; accuracy only — no predicted probabilities, no calibration, no log-loss, no cross-validation.
- Assumptions: charted serve-direction labels are ground truth; point-level i.i.d. (key weakness); OCC anxiety is a valid proxy for scoreboard pressure; 6 serve directions is the right granularity; ≥30 matches suffices per player.

## Data sources named
Tennis Match Charting Project (public, volunteer-charted; https://github.com/JeffSackmann/tennis_MatchChartingProject): 3,424 matches of 655 men, 1,916 matches of 422 women; analysis restricted to players with ≥30 matches; results shown for 10 selected men (Djokovic, Federer, Kyrgios, Medvedev, Murray, Nadal, Thiem, Tsitsipas, Wawrzinka/Wawrinka, Zverev) and 10 women. No code released; no date range stated.

## Findings (numbers and facts, not vibes)
- Men, deuce side (Table 1, mean over 10 players): LR 0.50, RF 0.49, DT 0.46, SVM 0.49, NN 0.50, MEAN 0.49. Standouts: Murray 0.55–0.58 (mean 0.55), Kyrgios 0.50–0.55 (0.53), Thiem 0.43–0.55 (0.51).
- Men, ad side (Table 2): LR 0.51, RF 0.49, DT 0.47, SVM 0.51, NN 0.51, MEAN 0.50. Standouts: Thiem 0.52–0.58 (0.56), Federer 0.52–0.59 (0.55), Medvedev 0.49–0.60 (0.53).
- Abstract reports average accuracy "around 49% for male players and 44% for female players" (women's tables follow the same pattern at slightly lower levels).
- No single classifier dominates: LR, RF, SVM, NN cluster within ~1–3 points of each other per side; decision trees consistently worst; bagging/AdaBoost/XGBoost no better.
- Some players more predictable from one side than the other (deuce vs ad asymmetry); charting data is volunteer-coded with unknown label error, no inter-rater reliability reported.
- Critical leakage: random point-level split means serves from the SAME match appear in train and test — serve tendencies are match-/opponent-specific, so test accuracy is inflated; no chronological split (unusable for forward betting as published); selected-player reporting (10+10 of 655/422) risks cherry-picking; anxiety index not ablated against raw score features.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Serve-tendency priors for tennis props lane: pre-match feature for serve-prop pricing (ace/DF/hold probabilities conditioned on predicted direction mix vs opponent return tendencies); live point-by-point prior for in-play serve/return markets.
- [TRUST-SIGNAL] GSE must use match-grouped chronological splits (train before date T, test after), calibrate with isotonic/Platt scaling, evaluate log-loss alongside accuracy — the ledger's acceptance gate: grouped-chronological log-loss beats per-player empirical-frequency baseline by ≥5% AND calibration slope within [0.85, 1.15], else REJECT the ML layer and use empirical direction frequencies as the prior.
- [OTHER] Improvement experiment: replace the hand-built OCC anxiety index with learned score-state embeddings (small NN over the full hierarchical score tensor) trained end-to-end with the direction classifier.
- [OTHER] Corpus gap: Garrett's tennis modeling work has nothing on point-level serve-direction prediction — new capability, not duplication.

## Engine-actionable? (yes/no + one-line what)
Yes — rebuild per-player gradient-boosted serve-direction classifiers from Match Charting Project data with match-grouped chronological splits, isotonic/Platt calibration, and the log-loss gate; use validated models as serve-direction priors for serve-prop pricing and live in-play updates, falling back to empirical direction frequencies if the ML layer fails the gate.
