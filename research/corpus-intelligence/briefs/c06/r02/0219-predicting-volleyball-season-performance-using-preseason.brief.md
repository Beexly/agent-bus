# arxiv-program/research/2026-09-21/arxiv-deep/0219-predicting-volleyball-season-performance-using-preseason.md
## What it is (1-2 sentences)
A full-depth research note on Ozolcer, Zhang & Bae (2025, arXiv:2503.08100v1) predicting collegiate volleyball players' season performance (good vs poor binarized hit%) from 12 weeks of pre-season Fitbit wearable data and EMA surveys using XGBoost with LOSO cross-validation. The note's verdict is REJECT — N=14 with only 3 positives, volleyball-specific target, proprietary data, and no transfer path to NFL since GSE has no player-level wearable data.
## Key metrics/methods (formulas where given, else "not specified")
- Hit % = (Kills - Errors) / Attempts; binarized at 0.2 (coach threshold): >0.2 good (11), <0.2 poor (3).
- Feature pipeline: daily aggregation; domain features (sedentary metrics, sleep-stage DFA, HR stats/skewness/kurtosis/DFA/entropy, day-over-day RHR/HRV change, SpO2 stats/Hurst exponent); feature selection via pairwise Pearson |r| > 0.7 drop then univariate F-test (p < 0.05); mean imputation; min-max normalization fit on train only; SMOTE on training data.
- Five classifiers compared with Optuna tuning (XGBoost, LightGBM, random forest, linear SVM, Gaussian NB); 7 phase combinations evaluated; LOSO CV with 10 bootstrap iterations.
- Metrics: accuracy, F1, precision, recall, AUROC, AUPRC; paired t-test for classifier F1; Spearman rho for EMA correlations.
## Data sources named
Fitbit Charge 5 wearables (26 weeks, 12 weeks used; 1-min steps/distance/calories; HR ~8.5/min; daily HRV/RHR/sleep stages/breathing rate/VO2 max/SpO2); twice-daily EMA surveys (1-7 ratings on injury risk, readiness, recovery, soreness, tiredness, mood, stress, sleep quality, perceived performance, productivity); official NCAA box scores from team website. N=17 recruited, N=14 in modeling (3 excluded), single team, single championship season. No data released.
## Findings (numbers and facts, not vibes)
- XGBoost (Phase 1+2+3): accuracy 0.7925, F1 0.5819, precision 0.6949, recall 0.5007, AUROC 0.6807, AUPRC 0.6030; beat RF (F1 0.5681) at p=0.027.
- Phase 2+3 (55 days) best: accuracy 0.8645, F1 0.7549, AUROC 0.8236, AUPRC 0.7776; Phase 3 alone (9 days): F1 0.2273.
- Top features (F-test): HRV F=86.279 (poor 87.0 vs good 49.3); breathing rate F=60.780; total sedentary time F=46.942; HRV change F=46.905; sleep efficiency F=15.211 (poor 92.5 vs good 82.6 — counterintuitive sign).
- EMA: perceived stress vs season hit avg rho=-0.228 (p<0.001); perceived performance vs same-day hit% rho=+0.346 (p=0.002).
- In-season: SpO2 std rho=-0.430 (p=0.006); RHR change rho=+0.387 (p=0.014).
- Position trends: middle hitters improved beta=+0.0040/day (p=0.003); setters declined.
- Fatal fragility: F1=0.75 rests on SMOTE synthesized from n=3 real minority subjects; feature selection timing relative to LOSO folds not stated; physiology signs counterintuitive (likely position-confounded).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, OTHER)
- TRUST-SIGNAL: the note is a cautionary case study — SMOTE from n=3, uncorrected multiple-testing EMA correlations, and unstated feature-selection timing are exactly the reproducibility traps GSE's own evaluations must avoid.
- OTHER: pre-season passive-sensor feature engineering (DFA, Hurst exponent, sedentary bouts) is methodologically portable to any athlete monitoring, but GSE has no wearable data source to apply it to.
## Engine-actionable? (yes/no + one-line what)
no — verdict is REJECT; no NFL data source exists for continuous player physiology and N=14/3-positives cannot support a credible claim, so nothing is ported.
