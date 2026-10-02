# docs/arxiv-program/research/2026-09-21/arxiv-deep/0376-metamorphic-testing-for-pose-estimation-systems.md
## What it is (1-2 sentences)
Ledger read (full text) of Duran, Laurent, Rushe & Ventresque (2025), "Metamorphic Testing for Pose Estimation Systems" (arXiv:2502.09460v1): the MeT-Pose framework — a label-free QA protocol for pose estimators using metamorphic rules (input transformations with known output relations) to catch faults without keypoint ground truth; verdict ADAPT as the regression-test standard for any future GSE pose lane.
## Key metrics/methods (formulas where given, else "not specified")
- Rule: ℳ = (ℳ.trans, ℳ.rel); img_mod = ℳ.trans(img_orig); check rel between SUT outputs; pass iff Err_lmks < t_err.
- Err_lmks: ∞ if landmarks detected on only one of the pair; 0 if on neither; else MEDIAN of per-landmark L2_MP (Euclidean normalized: shoulder distance for body, iris distance for face, wrist–middle-finger-joint for hands).
- Rule families: Spatial (Id, Stretch, Mirror h/v/both, Rotation ω), Image quality (Res downscale, Gamma γ, Bright a+m·v, Bilateral filter, Motion blur), Colour-space (Grey, hue rotation CWheel θ, per-channel scaling, zone-filtered Flt, Cfill).
- Subsumption: SubRate(ℳ1,ℳ2) = #(violating both)/#(violating ℳ1), or 1 if ℳ1 never violated.
- Assumptions: transformations change only landmark positions (not which landmarks should be detected); no "correct" global t_err — must be user-set per application.
## Data sources named
PHOENIX (sign-language; 947,756 frames, dev subset 55,775 images, no keypoint ground truth); FLIC (human pose; 4,552 movie frames, 11 keypoints via Mechanical Turk; test subset 835 images). SUT: MediaPipe Holistic (BlazePose GHUM 3D) in deterministic static-image mode. Code: https://github.com/MatoFD/MeT-Pose.
## Findings (numbers and facts, not vibes)
- Body landmarks at t_err=0.2 (% images with ≥1 violation): AllRels — PHOENIX 66.35, FLIC 83.83; SubRels — PHOENIX 25.08, FLIC 61.44; {Grey, Mirr_h} — PHOENIX 0.01, FLIC 43.11. Infinite errors (detection on only one image) persist even at high thresholds — always violations.
- RQ2 (FLIC, vs classic GT testing): at higher thresholds MeT-Pose finds MORE failures than classic testing (SubRels at t_err=0.2: MeT-Pose-only ≈76.6% of stacked failures vs classic-only ≈19.9%); MeT-Pose finds larger-magnitude errors that classic testing misses; partial overlap — each finds failures the other misses.
- RQ3: rule-subsumption matrices strongly dataset-dependent (rules not redundant across domains); stronger motion blur does NOT cleanly subsume weaker blur (Holistic nonlinearity); most violating images fail only a small number of rules → different rules expose different fault types.
- Hand landmarks (PHOENIX, Mirr_h/Grey) expose far more faults than body landmarks — rule/landmark subset must match the use case.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Label-free regression suite for any GSE pose model (QB mechanics skeletons, tackle form, route-running pose) → QB-BEHAVIOR
- Mirr_h rule as a concept probe for asymmetric poses (e.g., left/right-handed QBs) → QB-BEHAVIOR
- Violation ≠ ground-truth error (can't tell which of the two outputs is wrong without labels) → TRUST-SIGNAL
- Proposed acceptance gate: zero infinite-errors and <5% violation rate at pilot-calibrated t_err before any pose model feeds EPA/prop models → TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
Yes — port the rule taxonomy (Id, Mirr_h, Rot, Res, Gamma, Motion blur, Grey) + median-aggregation Err_lmks as the regression suite for any GSE pose model (tackle form, QB mechanics, route skeletons) on NFL film, calibrating t_err with a 50-frame hand-labeled pilot.
