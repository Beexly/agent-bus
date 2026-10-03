# arxiv-program/research/2026-09-21/arxiv-deep/0620-non-contact-injury-australian-football-players.md
## What it is (1-2 sentences)
Ledger brief for arXiv:1706.04336v1 (Carey et al.), which tested regularized logistic regression, GEE, random forest, and SVM on GPS/accelerometer/RPE training-load data to predict non-contact injuries in elite Australian footballers. Verdict: REJECT — an honest negative result; multivariate ML could not reliably predict injuries (nearly all mean AUCs < 0.65, lag models at chance); replaced under the replace-on-reject rule by ledger 0630 (arXiv:2206.01038v1, sports video action-recognition survey).

## Key metrics/methods (formulas where given, else "not specified")
- Models: regularized logistic regression, generalized estimating equations (GEE), random forest, SVM — standard forms, no novel equations stated.
- Features: GPS/accelerometer load metrics + session-RPE; rolling and EWMA windows of 3/6/21 days; ACWR, monotony, strain.
- Preprocessing experiments: PCA, undersampling, SMOTE for class imbalance; lag models (predicting injuries further out); decision thresholds in paper's Table 3.

## Data sources named
- Proprietary single-AFL-club data, NOT public. 75 unique athletes, 133 player-seasons. Train 2014–2015 (9,203 records), test 2016 (4,664 records). Injury counts train/test: NC 321/67, NCTL 156/42, hamstring 36/13.

## Findings (numbers and facts, not vibes)
- Hamstring logistic regression: mean AUC 0.72, best reported AUC 0.76 — but rests on 13 test hamstring injuries.
- All other multivariate models: mean AUC below 0.65 (NC and NCTL injuries unpredictable from these features).
- Lag models: AUC 0.50–0.57, essentially chance.
- PCA gave minor gains; SMOTE gave no major gains.
- GSE-salvageable lesson (negative): do not build NFL injury models on single-club samples with dozens of events; feature family (EWMA windows, ACWR, monotony) is subsumed by the stronger Rossi soccer paper (ledger 0619: recall 0.80, precision 0.50, forward-simulation validation).
- GSE overlap: no injury-forecasting capability exists in the corpus; workload indices exist only as game-context features (rest/bye).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Negative result on workload→injury prediction from small samples — TRUST-SIGNAL (do not ship NFL injury models trained on small samples; sets a quantitative floor: need > ~dozens of events before AUC claims are credible)
- EWMA/ACWR/monotony workload feature family — OTHER (training-load context, overlaps ledger 0619 Rossi paper)
- AFL-specific load constructs transfer poorly to NFL contact-driven injury mechanisms — OTHER

## Engine-actionable? (yes/no + one-line what)
No — REJECT; the one usable lesson is the negative constraint (small-sample injury models fail), already captured by ledger 0619; its ledger slot was reassigned to the video-action-recognition survey (0630).
