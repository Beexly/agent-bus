# arxiv-program/research/2026-09-21/arxiv-deep/1577-knee-injury-detection-explainable-ml.md

## What it is (1-2 sentences)
Research ledger on "Explainable Machine-Learning based Detection of Knee Injuries in Runners" (Fuentes-Jiménez et al. 2026, arXiv:2602.11668) — supervised injury-pattern detection (PFPS/ITBS vs healthy) from full stance-phase joint-angle time series with a hybrid CNN and triple explainability (SHAP/saliency/Grad-CAM) under strict volunteer-separated CV. The ledger's verdict is ADAPT: portable, interpretable injury-screening pipeline adaptable to NGS-derived stride kinematics for soft-tissue (hamstring) risk.

## Key metrics/methods (formulas where given, else "not specified")
- Three binary tasks (PFPS+ITBS / PFPS / ITBS vs healthy) × three input regimes (time series only, point values only, hybrid); 10 models (KNN, linear/poly SVM, GP, DT, AdaBoost, RF, ANN, CNN, LSTM); 5-fold CV with strict volunteer separation (80/20 volunteers); standard ACC/PRE/REC/F1 definitions.
- CNN: two-branch — temporal branch (joint-temporal tensor (T,A,C) → Gaussian noise 0.05 → 2× Inception-residual blocks (64 filters) + SE modules + dropout 0.3) + point-value branch (dense 8→16, BN/SiLU/dropout 0.3); fusion → dense 16 → sigmoid; RMSprop 1e-4, binary crossentropy, class-imbalance data generators. Explainability: SHAP (SVM_L) + saliency + Grad-CAM as 2D joint×time heatmaps with cross-method consistency check.

## Data sources named
Ferber et al. 2024 public database: 1,798 runners, treadmill, high-speed Vicon optoelectronic mocap; analyzed 137 PFPS + 126 ITBS + 576 healthy records; per sample: demographics + raw marker trajectories of 7 structures; X-Y-Z Cardan angles for 6 joints + 3 segments; stance phase via PCA-based touch-down/toe-off (Osis et al. 2014); cubic interpolation to 101 samples. No model-code link.

## Findings (numbers and facts, not vibes)
- CNN best accuracy: PFPS 77.9% (hybrid), ITBS 73.8% (time series), PFPS+ITBS 71.4% (time series). Classical best: SVM_L (PFPS hybrid 71.7%, F1 73.5), GP (PFPS+ITBS hybrid 66.0%).
- CNN high-recall screening profile: PFPS recall 90.3% / precision 41.3% / F1 56.5; ITBS recall 81.9% / precision 34.3%.
- Hybrid helps PFPS (+1.7pp over time series alone) but slightly hurts ITBS (−0.5pp); full temporal dynamics beat point-value reduction (Phinyomark et al. 2017).
- SHAP (SVM_L): longer stance time (both feet) → injury risk in all three tasks; PFPS adds lower stride rate + high MF/HF power (foot/ankle/pelvis); ITBS adds stride length (longer = protective) + lower knee abduction peak velocity (protective). CNN heatmaps: midstance 20–60% most relevant; three explainability methods consistent.
- Limitations in file: treadmill (not overground) gait; retrospective case-control — detects correlates, not predictors of future injury; CNN precision 34–52% limits clinical use; authors state the maps "do not allow for the determination of a clear specific running pattern."

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — injuries-lane method paper; three portable assets per the ledger: (a) hybrid temporal-CNN recipe + finding that full temporal dynamics beat point-value reduction — directly relevant to GSE feature engineering on NGS tracking (keep full stride time series, don't aggregate to per-play means); (b) strict player-separated CV discipline — honest-split metrics drop vs leaky splits; (c) triple-explainability consistency protocol as a template for GSE's own injury-risk models.
- TRUST-SIGNAL — the volunteer-separated CV honesty test (metrics decreased under honest splits; authors reported it anyway) is the standard to demand of any GSE injury model.
- QB-BEHAVIOR — N/A (INFERENCE: stride proxies like deceleration spikes are for skill players broadly; ledger's spec targets soft-tissue injury plays).

## Engine-actionable? (yes/no + one-line what)
Yes — build `gse_injury_screen.py`: hybrid CNN on NGS-derived stride-kinematic time series (speed/acceleration/jerk, stride length/rate proxies, stance-time proxies) classifying pre-injury windows vs matched healthy plays under strict player-separated CV, gated on hybrid-CNN AUC ≥0.65 vs ≤0.60 point-values-only logistic baseline.
