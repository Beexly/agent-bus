# arxiv-program/research/2026-09-21/arxiv-deep/0313-field-converter-geometryinitialized-temporal-residual-refinement.md
## What it is (1-2 sentences)
Deep-read ledger of Khan et al. (2026), arXiv:2609.10498v1, "Field Converter: Geometry-Initialized Temporal Residual Refinement for World-Grounded Player Pose Estimation from Soccer Broadcasts." Two-stage pipeline: per-player root position initialized by calibrated ray–ground-plane intersection from broadcast cameras, then a temporal network (MLP/TCN/Transformer) that predicts only the residual correction on top of that geometric initialization. Verdict: ADAPT — the geometry-initialized residual-refinement pattern is the template for GSE's NGS-replacement lane deriving world-grounded player movement from NFL broadcast film.

## Key metrics/methods (formulas where given, else "not specified")
- Stage 1 (geometry init): cast ray from camera center through detected root keypoint, intersect with the pitch plane → metric root initialization per player per frame; relative pose from SAM 3D Body; outputs transformed to shared world coordinates.
- Stage 2 (temporal residual refinement): TCN with 41-frame windows, stride 8, five residual blocks, dilations (1,2,4,8,16), 1.278M parameters; Transformer variant 2 layers, 4 attention heads, 1.252M parameters. Network predicts only the camera-space residual correction, not absolute position.
- Throughput (single NVIDIA L40S, PyTorch 2.6, CUDA 12.4): MLP/TCN/Transformer train at (2.95±0.03)×10³ / (25.5±20.8)×10³ / (61.4±25.5)×10³ player-frames/s; end-to-end batched eval 530±290 / 467±107 / 551±141 video frames/s (excluding upstream tracking, calibration, SAM3DBody).
- Evaluation metrics: root translation error (cm), world MPJPE (cm), local MPJPE (cm), reprojection error (px), root velocity error (cm/s), root acceleration error (m/s²).

## Data sources named
- FIFA Skeletal Tracking Light 2026: 89 clips from 8 matches, ~2.41M valid player-frame observations; per-frame broadcast video, 2D pose keypoints, bounding boxes, per-clip camera calibration; relative 3D pose reference from SAM 3D Body. Match-disjoint split: 62 clips/6 matches train, 12 clips (BRA_KOR) val, 15 clips (ENG_FRA) test. Public availability/licensing not stated in the paper — treat as restricted.

## Findings (numbers and facts, not vibes)
- Test-set (Table 3): geometry-only init root error 48.58 cm → MLP residual 13.63 → TCN residual 10.12 → Transformer residual 11.04 cm. World MPJPE: 48.36 → 15.76 / 13.20 / 13.21. Reprojection: 5.39 → 3.69 / 3.49 / 3.43 px. Local MPJPE identical 7.74 cm across all variants (paper's contribution is purely global localization, not pose quality).
- Direct absolute-root prediction without geometric init: MLP 256.00 cm, TCN 63.05 cm — the geometric initialization does most of the work.
- Temporal consistency: root velocity error 131.9 [124.1,142.2] (MLP) → 100.6 [95.3,107.6] cm/s (TCN); root acceleration error 48.3 → 39.6 m/s².
- Airborne degradation: ~37 cm error in the highest foot-clearance interval vs grounded frames; geometry-only ~1 m. Depth (camera z-axis) remains the dominant error component after refinement.
- Validation is genuinely clean (match-disjoint); but upstream tracking/calibration/SAM3DBody errors are excluded, so end-to-end error on raw broadcast will be larger than reported.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Geometry-init-does-most-of-the-work finding (48.58→10.12 cm with cheap TCN) is a build-template for NGS-replacement broadcast-film movement features (speed, separation, route geometry) without licensed tracking data — OTHER (CV/tracking lane).
- Airborne/contact frames are the dominant residual error source (~37 cm); for NFL, airborne/contact phases (jump balls, tackles) are exactly the high-leverage moments — OTHER (failure mode to design around; improvement experiment proposes a grounded/airborne regime-switching initializer with ballistic-motion prior).
- Flat-plane assumption breaks for NFL: denser formations, heavier occlusion, no fixed pitch plane; NFL analog is field-marking-based calibration (yard lines/hash marks give plane + scale) — OTHER (NFL adaptation requirement).
- Dataset licensing unclear; FIFA data may not be commercially usable — TRUST-SIGNAL (verify film licensing before building; GSE needs licensed NFL broadcast clips + a small hand-annotated ground-truth set).

## Engine-actionable? (yes/no + one-line what)
Yes — port the ray–field-plane-init + TCN residual-refiner pattern to NFL broadcast film (field-marking calibration, valid-joint masking for occlusion, game-disjoint splits) as the NGS-replacement feature factory, gated on ≤20 cm median root error, r≥0.90 correlation with NGS values, and cleared film licensing.
