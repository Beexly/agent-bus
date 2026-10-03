# docs__arxiv-program__research__2026-09-21__arxiv-deep__0668-ml-based-approach-for-nfl
## What it is (1-2 sentences)
Skoki, Lerga & Štajduhar (2022), arXiv:2206.13222v1 — asks whether defensive pass interference (DPI) calls can be predicted from Next Gen Stats GPS tracking alone using sequence models (LSTM, GRU, attention, multivariate LSTM-FCN), intended as a first-stage filter for later video analysis. The paper's own finding is a clean negative result; the ledger verdict is REJECT (tracking data alone lacks the information; GSE has no video pipeline to attach the filter to).
## Key metrics/methods (formulas where given, else "not specified")
- Sequence models for imbalanced time-series binary classification: LSTM, GRU, attention network (on LSTM), multivariate LSTM-FCN; Keras/TensorFlow 2.0; single hidden layer with 8, 64, or 128 cells (more layers tested, no improvement).
- Class weight formula (Eq. 1): w_class = n_inst / (n_classes × n_inst_class) → 0.51 for non-DPI, 20.52 for DPI. Undersampling and SMOTE-style augmentation considered and rejected.
- Model selection: 12 configurations trained 5× each; best validation-picked; target was best precision at recall ≥ 0.80 (recall prioritized).
- No model equations beyond standard architectures (referenced, not restated). Accuracy deliberately not used.
## Data sources named
- NFL Big Data Bowl 2021 on Kaggle (2018 regular-season NGS tracking for all passing plays); competition/academic non-commercial use.
- Scope: 17,703 passing-play actions; only 259 DPI events (1.46%). After a max attacker–defender distance filter (90% of DPI plays below 5.56 distance units): 9,529 non-DPI + 231 DPI (2.32% positive).
- Processing: frames from "pass_forward" event to end-of-play; attacker/defender closest to ball at end-of-play; normalized play direction (all attacks → right); features: acceleration, speed, orientation, direction for attacker/defender/ball + pairwise Euclidean distances + six binary static events (pass_arrived, pass_outcome_caught, tackle, first_contact, pass_outcome_incomplete, out_of_bounds).
- Splits: 56% train (5,336 non-DPI / 130 DPI) / 14% val (1,334/32) / 30% test (2,859/69).
- Code: https://github.com/askoki/nfl_dpi_prediction.
## Findings (numbers and facts, not vibes)
- Test set (Table II): best recall 0.884 (LSTM-128, ANN-64, GRU-128); best overall LSTM-64: recall 0.855, precision 0.091, F1 0.164, AUC 0.821. LSTM-128: recall 0.884, precision 0.0748, F1 0.138, AUC 0.807. GRU-8 collapsed (AUC 0.487, precision 0.023).
- No configuration achieves F1 "significantly above 0.15"; authors' conclusion: tracking data alone "does not contain enough information in order to classify this complex event correctly"; future work should use video.
- Precision ~0.08 ≈ 12 false alarms per true DPI; as a filter it would pass ~11% of all pass plays to video review.
- File's limitations: closest-to-ball pair heuristic may miss off-ball DPI; only 259 positives from one season, no cross-season/crew validation; no simple-heuristic baseline; end-of-play frame selection is post-hoc relative to live calls.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: an honest published negative — the paper generalizes fine (validation ≈ test) yet the ceiling is low; documents why automated penalty-call classification from tracking is a dead end.
- OTHER: closes a lane — no tracking-only penalty-classification work is worth building; if a referee-signal lane is ever opened, the honest experiment is a hierarchical-Bayesian crew-effect model on nflverse penalty data, not kinematic classification (file's own suggested improvement experiment, outside this paper's scope).
## Engine-actionable? (yes/no + one-line what)
No — the REJECT verdict stands: tracking-only DPI classification tops out at F1 0.164, and the authors' conclusion (tracking alone can't solve it; video needed) plus GSE's lack of a video pipeline leaves no actionable application; the only use is as a negative control.
