# research/2026-09-21/arxiv-deep/1120-predicting-ulnar-collateral-ligament-injury-rookie.md
## What it is (1-2 sentences)
Research note on arXiv:2207.00585v1 (Rendar & Ma 2022): a two-page podium abstract predicting ulnar collateral ligament (Tommy John) injury in rookie MLB pitchers from rookie-season tabular stats — 8,503 pitchers, 47 Stathead features → K-best 13 → six models, best MLP at ROC-AUC 0.674. Verdict: ADAPT — the compact, honest tabular injury-prediction protocol ports directly to GSE's NFL player-availability modeling (rookie workload → soft-tissue injury), with the paper's missing details (feature list, split years, hyperparameters, CIs) treated as gaps to fill rather than results to trust.

## Key metrics/methods (formulas where given, else "not specified")
- Not specified — no equations stated in the paper.
- Method: 80/20 split "according to year" (split years not stated); oversampling applied to training set; K-best feature selection 47 → 13 (the 13 features not listed); models: KNN, Naive Bayes, XGBoost, Random Forest, Decision Tree, MLP (hyperparameters not stated); metric ROC-AUC; no cross-validation, no confidence intervals, no calibration.
- Assumptions: (a) name-join between Stathead and the TJ repository is reliable; (b) rookie-season stats carry UCL signal; (c) train-only oversampling does not distort the test distribution (test imbalance handling not stated).

## Data sources named
- 8,503 rookie MLB pitchers debuting after 1974; 47 features from Stathead (paid proprietary source); labels from a public Tommy John surgery repository (unnamed), joined to pitchers by player name.
- Class balance: 826 positive / 7,677 negative (~1:10 imbalance).
- No joined dataset released; no code; no feature list.
- GSE analogues named: nflverse (combine, college stats where available), NFL injury reports (labels), practice participation.

## Findings (numbers and facts, not vibes)
- Full text: the entire two-page podium abstract read (text extracted with pdftotext).
- ROC-AUC: KNN 0.5702; Naive Bayes 0.5463; XGBoost 0.6068; Random Forest 0.6143; Decision Tree 0.6329; MLP 0.6740 (best).
- Paper's claim: rookie-season features carry modest but real UCL signal; nonlinear models (MLP) beat tree ensembles here.
- Limitations/leakage: no feature list, no split years, no hyperparameters, no uncertainty intervals, no calibration — nothing independently reproducible; name-join label noise directly corrupts labels; AUC 0.674 is modest and at 1:10 imbalance precision at any usable recall is likely poor (not reported); "split according to year" without years — temporal cleanliness unverifiable; no trivial baseline (e.g., innings-pitched workload alone).
- GSE overlap: related to `0768-early-detection-injuries-mlb-pitchers-video.md` (arXiv:1904.08916 — same population, video modality; this paper is tabular — complementary, not duplicate) and `0317-scalable-injuryrisk-screening-in-baseball-pitching.md` (baseball pitching injury); the map flags "causal injury impact" as thin; this paper is predictive not causal — an extension of the injury-prediction cluster into tabular rookie-season features.
- Port-to-NFL spec: rookie injury-risk (hamstring/ACL) from college workload + combine + rookie preseason features; publish the feature list; year-based splits with stated cutoffs; report PR-AUC + calibration alongside ROC-AUC; compare against workload-only baseline; start with the paper's winner (MLP) plus XGBoost; add a survival (time-to-injury) formulation. Effort: ~2 engineer-weeks.
- Repro test: 2015–2024 NFL rookies; features from college/combine/preseason; label = season-ending soft-tissue injury in first 3 seasons; metric ROC-AUC and PR-AUC on 2022–2024 forward test; baselines (a) workload-only logistic regression, (b) the paper's MLP recipe.
- Acceptance gate: ADOPT if the NFL port achieves ROC-AUC ≥ 0.65 with 95% CIs excluding 0.5 on the forward test AND beats the workload-only baseline; REJECT otherwise (the paper's 0.674 is the benchmark to meet-or-beat with honest uncertainty).
- Improvement experiment: replace binary classification with a survival model (time-to-first-injury, e.g., Cox or DeepHit-style) — the paper throws away when the injury happened, but workload→injury is inherently temporal; test whether survival modeling improves ranking (C-index) over the binary MLP.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: The protocol's acceptance gate (ROC-AUC ≥ 0.65, 95% CIs excluding 0.5, beat workload-only baseline, PR-AUC + calibration reported) is a trust-target intake template for any GSE injury-risk feature entering the engine — modest-AUC injury models at 1:10 imbalance must be gated on precision-usable metrics (PR-AUC) and calibration, not ROC-AUC alone; the paper's failure to report precision at usable recall is exactly the anti-pattern the gate exists to prevent. The name-join label-noise flag also applies to any GSE pipeline joining injury labels by player name across sources.
- OTHER: Serves the player-availability modeling program (rookie injury risk → hamstring/ACL): the survival-model improvement experiment (Cox/DeepHit, C-index) converts the paper's throwaway temporal information into the engine's time-to-injury feature, which feeds availability-adjusted projections and rankings. Extension of the injury-prediction cluster (0768 video modality, 0317 pitching injury), predictive not causal — the map's "causal injury impact" thin spot remains unfilled.
- UNCERTAIN: The 0.674 AUC is a two-page abstract's claim with no feature list, no split years, no hyperparameters, no CIs — treat as a protocol benchmark, not an established result; the NFL port's ≥0.65 gate with CIs is the honest version.

## Engine-actionable? (yes/no + one-line what)
Yes — port the protocol to NFL rookies (2015–2024; college/combine/preseason features → season-ending soft-tissue injury in first 3 seasons; MLP + XGBoost; PR-AUC + calibration; workload-only baseline) as a player-availability feature, gated on ROC-AUC ≥ 0.65 with 95% CIs excluding 0.5 and beating the workload baseline; ~2 engineer-weeks, with the Cox/DeepHit survival upgrade as the improvement experiment.
