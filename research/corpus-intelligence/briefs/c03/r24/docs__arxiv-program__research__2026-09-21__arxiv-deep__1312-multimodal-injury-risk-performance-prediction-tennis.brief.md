# docs/arxiv-program/research/2026-09-21/arxiv-deep/1312-multimodal-injury-risk-performance-prediction-tennis.md
## What it is (1-2 sentences)
A ledger review (REJECT, replaced by 1313) of the PART weighted-ensemble framework for tennis injury-risk and athlete-readiness prediction from multimodal data (daily surveys, WHOOP wearables, jump tests, match video) on a 9-player collegiate cohort. Rejected as a duplicate of ledger 0772 (same lab, same framework, same cohort) with weak discrimination and self-reported labels.
## Key metrics/methods (formulas where given, else "not specified")
- ARS (Athlete Readiness Score) weights: 0.35 wellness / 0.30 injury risk / 0.35 physical capability; playing-style multipliers 1.0/1.2/1.4/1.6 (explicitly heuristic).
- Physical capability: LSTM on 7-day input windows.
- Validation: player-grouped 3-fold CV (6 train / 3 test), 100 bootstrap iterations; injury classifiers scored with AUC, accuracy, F1; physical capability with RMSE/R²/MAE.
## Data sources named
- Monmouth University collegiate tennis cohort: 9 players (5 male / 4 female, age 20.3 ± 1.5), 16 weeks, 85 attributes / 82,804 entries.
- Daily 10-question survey, WHOOP sleep/recovery/workout data, vertical-jump testing, match video.
- Injury-risk label derived from the daily questionnaire (self-reported, not independently adjudicated).
## Findings (numbers and facts, not vibes)
- Injury classifiers: XGBoost AUC 0.64 ± 0.01, accuracy 0.74 ± 0.01, injury F1 0.43 ± 0.01; Decision Tree AUC 0.65 ± 0.01. Upper-body AUC 0.712; lower-body AUC 0.703.
- Physical-capability LSTM: RMSE 0.749, R² = 0.993, MAE 0.248 vs MLP RMSE 2.506 / R² = 0.922 — R² implausibly high, leakage/target-construction concern unaddressed.
- Authors' own framing: results reflect monitoring/near-term risk estimation, not validated prospective injury forecasting; cohort "restricts" generalizability; findings "preliminary."
- Ledger verdict: REJECT — duplicates ledger 0772 (`2608.25126v1`, already ADAPT).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Self-reported injury labels + weak AUC (0.64–0.65) → honesty discipline for any GSE readiness/availability signal: never publish an availability metric built on self-reported labels without adjudicated outcomes [OTHER].
- Duplicate-of-0772 → PART architecture already captured elsewhere in corpus; no new method here [OTHER].
- LSTM R² = 0.993 flagged as leakage risk → validation standard: any model with R² ≈ 1.0 must be treated as leakage until proven otherwise (backtest/audit gate) [TRUST-SIGNAL].
## Engine-actionable? (yes/no + one-line what)
No — REJECTED duplicate; nothing survives the 0772 test; the readiness-architecture value is already captured in ledger 0772.
