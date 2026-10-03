# docs__arxiv-program__research__2026-09-21__arxiv-deep__0619-effective-injury-forecasting-in-soccer
## What it is (1-2 sentences)
Rossi, Pappalardo, Cintia et al. (2018), arXiv:1705.08079v2 (PLOS ONE) — forecasts non-contact soccer injuries from GPS-derived training workload data using tree models on engineered workload features (EWMA, ACWR, monotony), with a 10,000-repetition evaluation protocol and a forward weekly deployment simulation. Ledger verdict: ADAPT (as a template for NFL practice-load/availability modeling, with precision limits stated honestly).
## Key metrics/methods (formulas where given, else "not specified")
- Workload indices: EWMA of each workload feature with span 6; ACWR = (6-day acute workload) / (27-day chronic workload); monotony = weekly mean / weekly standard deviation over seven days; prior-injury EWMA.
- Models: decision tree (with feature selection) as headline; random forest as strong baseline. ADASYN synthetic oversampling applied only on training folds.
- Protocol: 30% data for train/feature-selection/hyperparameter tuning, 70% test in two stratified folds; whole pipeline repeated 10,000 times; plus a forward weekly simulation (train through week w, predict w+1).
## Data sources named
- Proprietary single-club data: 26 professional male players, 23 weeks in 2014, 931 individual training sessions; constructed example table: 952 examples, 55 features, 23 non-contact injuries (match injuries excluded). 12 GPS workload features (total distance, high-speed running, accelerations, etc.) + personal features (age, BMI, role) + injury-history features + derived indices.
- Access: proprietary; transformed data available by request to the authors. No public download, no code URL stated.
## Findings (numbers and facts, not vibes)
- Decision tree: injury recall 0.80 ± 0.07, precision 0.50 ± 0.11. Random forest: recall 0.87 ± 0.05, precision 0.41 ± 0.08.
- Classic workload indices as predictors: maximum precision ~6%; ACWR/MSWR below 4% — standard ratios nearly useless alone in this data.
- Forward weekly simulation: 9 of 14 injuries detected, F1 0.60, precision 0.56; performance stabilized after 14 weeks of the rolling protocol.
- Final selected features (decision tree): prior-injury EWMA (importance 0.71), high-speed-running EWMA (0.23), total-distance monotony (0.06) — only three features survived selection.
- File's own limitations: n = 26 players, 23 injuries (tiny event count); ADASYN fabricates injury examples from 23 real ones; precision 0.50 means half of flagged sessions are false alarms; match injuries excluded; EWMA span 6 and 6/27-day ACWR windows asserted, not tuned; soccer running-load maps poorly to football's collision-driven injury mechanisms.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: 10,000-repetition evaluation, forward deployment simulation, honestly reported precision ceiling (~0.50), explicit admission that standard indices fail and that alarm fatigue is the deployment risk.
- COACHING: workload-management mechanism — EWMA/ACWR/monotony feature engineering is the load-monitoring recipe coaching staffs use; ports to practice-intensity monitoring.
- OTHER: a new "availability layer" capability (no injury-forecasting capability exists anywhere in the corpus) — availability projections move prop lines and DFS ownership.
## Engine-actionable? (yes/no + one-line what)
Yes — build a weekly per-player injury-risk/availability score from nflverse snap/load proxies (EWMA of snap/touch load, practice-participation ACWR-analogs, prior-injury EWMA), accepted only if it hits precision ≥ 0.35 at recall ≥ 0.50 in a forward weekly simulation on the 2025 test season.
