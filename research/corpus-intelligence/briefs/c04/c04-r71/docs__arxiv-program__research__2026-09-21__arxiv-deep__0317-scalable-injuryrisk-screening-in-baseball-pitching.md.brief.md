# docs/arxiv-program/research/2026-09-21/arxiv-deep/0317-scalable-injuryrisk-screening-in-baseball-pitching.md
## What it is (1-2 sentences)
Video-based 3D pose pipeline (monocular pose → lifting → 18 biomechanical metrics → per-pitcher aggregates) feeding injury classifiers on 7,348 pitchers, with pose deployed over 119,561 professional pitch sequences. Ledger verdict: ADAPT — port the methodology to NFL-relevant movements with strict non-clinical labeling and prospective validation.
## Key metrics/methods (formulas where given, else "not specified")
- Pose pipeline: DreamPose3D/PitcherNet base + Pelvis-to-Global Lifting Module; overlapping temporal windows (commit first K=10 frames); bone-length enforcement from first N=30 frames (3 passes); joint-limited IK; Savitzky-Golay smoothing (window 15, polynomial order 3); bilateral symmetry constraints.
- Models: gradient boosting machine, balanced random forest, L1-penalized logistic regression; final score = averaged probabilities; stratified 5-fold CV with SMOTE.
- Features: 18 biomechanical metrics (knee flexion, shin X/Y, elbow flexion, pelvis/torso rotation, hip-shoulder separation, trunk tilt, shoulder abduction, COG x/y/z) → 90 per-pitcher aggregates (means, maxima, ranges, variability/CV) + 24 workload/demographic/medical features (text says 114 total; Table 2 V5 reports 144 — internal inconsistency).
## Data sources named
Pose validation: 13 pitchers, 156 pitches (8 RHP/5 LHP, all 8 pitch types, 75–102 mph) vs lab-grade reference. Injury modeling: 7,348 pitchers with workload/demographic/medical features; 119,561 professional pitch sequences (proprietary deployment data, not public).
## Findings (numbers and facts, not vibes)
- Tommy John AUC progression V1→V5: 0.503 → 0.633 → 0.734 → 0.776 → 0.811; final AUC 0.811 (Tommy John), 0.825 (significant arm injury).
- Variability/range/CV features carry 33–39% of model importance — movement inconsistency, not mean mechanics, drives the signal.
- Pose validation: knee/shin/elbow 0.2°–0.5° angular MAE; throwing shoulder abduction 6.2° MAE (r=0.912); glove shoulder abduction 21.4° MAE (r=0.743, below the paper's own r>0.95 gate); COG y 0.50 ft (above the 0.1 ft gate).
- Internal discrepancies: 114 vs 144 features; 167 vs 209 recent-2024+ TJ cases. No temporal holdout; SMOTE-inside-CV ordering unspecified.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Movement-inconsistency-as-signal (variability/CV features 33–39% of importance) transfers directly to QB throwing-mechanics degradation and skill-player injury-risk modeling: QB-BEHAVIOR.
- Methodological template (video → biomechanical metrics → variability aggregates → classifier) is a new injury-analytics application lane for GSE: OTHER.
## Engine-actionable? (yes/no + one-line what)
yes — implement the variability-aggregate recipe (means AND ranges/CVs of joint metrics) on QB throwing and skill-player cutting clips as injury-risk features, but only after forward-by-season validation with ≥0.10 AUC over a workload-only baseline (the paper's own CV lacks a temporal holdout).
