# docs/arxiv-program/research/2026-09-21/arxiv-deep/0772-multimodal-injury-risk-prediction-in-tennis.md

## What it is (1-2 sentences)
The PART (Predictive Athlete Readiness for Tennis) framework fuses wearable physiology, self-report questionnaires, workload, vertical-jump assessments, and match-video motion analysis into a single Athlete Readiness Score (ARS, 0–100) plus body-region injury probabilities, using four specialized sub-models (wellness, injury risk, physical capability, playing style) with supervised learned integration weights. The deep-read ledger verdict is ADAPT: the architecture and honest evaluation discipline transfer to GSE athlete-availability modeling, though the source study is tiny (9 collegiate athletes) and injury classification is weak (F1 0.10).

## Key metrics/methods (formulas where given, else "not specified")
- ARS_initial = w1·Wellness + w2·(1−InjuryRisk) + w3·PhysicalCapability, with weights learned by multiple linear regression against expert-consensus ARS labels.
- Style adjustment: w_style ∈ {1.0, 1.2, 1.4, 1.6} by aggressiveness-score (ASP) quartile (ASP≤5 → 1.0; 5<ASP≤8 → 1.2; 8<ASP≤12 → 1.4; ASP>12 → 1.6); ARS_final = ARS_initial / w_style — defensive grinders get readiness discounted for higher cumulative load exposure.
- Sub-models: XGBoost classifier (injury probability, upper/lower body variants) and XGBoost regressor (Recovery Score %); MLP and LSTM on temporal physiological sequences (physical capability); computer-vision/motion analysis on match video (playing-style aggressiveness).
- Evaluated on MAE/RMSE/R² (wellness), AUC-ROC/accuracy/F1 (injury), training vs validation loss (physical capability).

## Data sources named
- PART dataset: 9 collegiate tennis players (Monmouth University).
- WHOOP wearable (sleep, HRV, resting HR, workout details); daily self-report questionnaires (ASRM-style); vertical-jump assessments by professional physicians; match-play videos; training/match load data.
- Expert-labeled ARS ground truth (0–100), consensus-averaged across coaches/sports scientists; binary injury occurrence + body region labels.

## Findings (numbers and facts, not vibes)
- Overall wellness (Table I): XGBoost Regressor best — MAE 3.82, R² 0.838; baseline linear regression MAE 14.05, R² 0.009. **[OTHER]**
- Injury risk (Table II): XGBoost best — AUC-ROC 0.695, accuracy 0.852, F1 0.100; logistic regression F1 0.000; decision tree 0.075; random forest 0.092. **[TRUST-SIGNAL — demonstrates honest reporting of weak rare-event classification; sets the bar for credible injury-model evaluation]**
- Body-region (Table III): upper body AUC 0.712 / F1 0.132; lower body AUC 0.703 / F1 0.118. **[OTHER]**
- Physical capability (Table V): LSTM beats MLP (validation loss 0.6059 vs 0.6391). **[OTHER]**
- Limitations per the file: n=9 athletes; no player-wise holdout reported (temporal leakage possible); ARS labels are subjective expert consensus; code link referenced but URL string not legible in the fetched copy. **[OTHER]**

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- The w_style penalty (discount readiness for high-exposure playing styles) ports directly to NFL: discount dual-threat/rushing QBs and bellcow RBs for cumulative-hit exposure — a **QB-BEHAVIOR** signal (mobile QB cumulative-hit exposure adjustment).
- Readiness-score-gated lineup exposure and shading volume props toward the under when ARS < 60 applies to fantasy/prop decisioning — **OTHER** (availability modeling).
- The four-sub-model decomposition (wellness, injury-risk, physical-capability, style/exposure with learned integration weights against an expert-ish label like beat-vs-projection residuals) is the transferable template — **OTHER**.
- Honest weak-result reporting (F1 0.100 on imbalanced injury classes) is a calibration-integrity example — **TRUST-SIGNAL**.

## Engine-actionable? (yes/no + one-line what)
Yes — build a PART-style availability-discount module (four XGBoost/MLP sub-models on public proxies: practice participation, age, prior injuries, snap load, style-exposure penalty) and gate lineup exposure / fade volume props when the readiness score drops below a threshold; ADOPT for live use only if out-of-sample ARS-to-missed-games correlation ≥ 0.25.
