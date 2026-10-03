# arxiv-program/research/2026-09-21/arxiv-deep/0046-analysis-of-points-outcome-in-atp.md
## What it is (1-2 sentences)
A point-by-point prediction study of ATP Grand Slam men's singles (server vs returner wins the point, split by first/second serve) using only public data, testing LR/RF/AdaBoost/XGBoost against the naive serve-prior baseline. Verdict in the source: REJECT — honest negative result; every ML method matches or underperforms the naive baseline.
## Key metrics/methods (formulas where given, else "not specified")
- Sigmoid G(x) = 1/(1 + e^{-w^T x}) (Eq. 1); nonstandard cross-entropy loss Eq. 2; SGD update Eq. 3. Methods: baseline (server's empirical point-win rate), Logistic Regression, Random Forest, AdaBoost, XGBoost (XGBoost scale_pos_weight = 1.3).
- Validation: 10% of matches randomly held out as test; remaining 90% split 80/20 train/validation; 10-fold CV on train/val; random-search hyperparameter tuning. Split by match; post-point columns shifted one row up to avoid in-row leakage. Metrics: accuracy, recall, precision, F1, ROC-AUC.
## Data sources named
Jeff Sackmann's public repos (tennis_atp + slams point-by-point): Wimbledon + US Open men's singles, 2016–2020, 709 matches; 57 features (accumulated in-match stats, serve descriptors — speed, ServeWidth B/BC/BW/C/W, ServeDepth CTL/NCTL, ReturnDepth D/ND, ServeNumber — match descriptors: surface, ranks, scores, tiebreak flags, distance run, rally count). Code: github.com/illumlol/ANALYSIS-OF-POINTS-OUTCOME-IN-ATP-GRAND-SLAM-TENNIS-USING-BIG-DATA-AND-MACHINE-LEARNING.
## Findings (numbers and facts, not vibes)
- Descriptives: 68.19% (AD) / 68.15% (deuce) of successful first serves went close to sidelines vs 29.04% / 30.3% for second serves; server point-win rates 73.2% (first serve), 57.2% (second serve), 64.8% overall.
- First serve 10-fold CV: all four ML models accuracy = 73.2% (equal to baseline), recall 0.0% — models never predict the returner; tuned XGBoost test: 73.4% (+0.2 pp) with recall 1.2%, precision 43.7%, F1 2.3%, ROC-AUC 56.9%.
- Second serve CV: XGBoost 53.0%, AdaBoost 52.8%, RF 53.0%, LR 52.7% vs baseline 57.2% (all ~4 pp below); tuned XGBoost test 53.1% vs 57.2% (−4.1 pp), ROC-AUC 53.5% (slightly better than random).
- Feature importance (XGBoost gain): strongest = score/state features (P1SetsWon, P2SetsWon, P2BreakPointWonA/P2BreakPointMissedA, ranks, surface); accumulated serve/return features had no significant influence.
- Paper's own conclusion: negative result — public summary features cannot beat the serve prior; Hawk-Eye spatiotemporal data exists but is not public.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — tennis point prediction, outside NFL/NCAA scope; negative-result cautionary citation.
- SCHEME — INFERENCE: strategic-level finding that score/state features dominate tactical serve-placement features for point outcome, which rhymes with game-state-driven modeling in football.
## Engine-actionable? (yes/no + one-line what)
No — negative result on tennis with no transferable method; file only as a cautionary citation that point-level prediction with public summary features degenerates to the prior.
