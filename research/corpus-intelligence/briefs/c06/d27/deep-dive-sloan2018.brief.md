# research/2026-10-01/cv-corpus/deep-dive-sloan2018.md
## What it is (1-2 sentences)
Full-text deep read (9 pages, all sections, all tables 1–6) of the 2018 Sloan Sports Analytics Conference paper by Omar Ajmeri Ali Shah — "Using Computer Vision and Machine Learning to Automatically Classify NFL Game Film and Develop a Player Tracking System" — a clean-room CV+ML pipeline that turns All-22 screenshots into formation labels and tracked player speeds, with an implementation spec for 4 kernels transferable to GSE's tracking code.

## Key metrics/methods (formulas where given, else "not specified")
- Stage 1 geometric standardization: Hough line transform over screenshots → heuristic filter keeps long full-field white yard lines; LOS = yard line nearest the offensive line; camera rotation from LOS direction and its perpendicular via an arccosine formulation; rotate so lines are axis-aligned; crop logo regions.
- Stage 2 player localization: jersey-color (burgundy RGB) seeded near the LOS, X/Y recorded relative to QB; special handling for tightly clustered OL (merged color regions). Yielded 500+ auto-tagged formation images.
- Stage 3 formation classification (two levels). Level 1 — QB position accuracy: CART 86.5%, Naive Bayes 67.5%, SVM 56.1%, k-NN 49.8%, Logistic Regression 42.9%. CART classification report: Center P 0.82 / R 0.92; Shotgun 0.90 / 0.84; Pistol 0.50 / 0.12 (Pistol starved of training data); averages 0.84 / 0.85. Level 2 — formation label (29 formations): CART 72.3% (NB 68.8%, SVM 64.6%, kNN 64.1%, LR 55.6%). Top-5 formations by sample: Singleback Ace (P 0.86 / R 0.90), Singleback Ace Pair Slot (0.84 / 0.74), Spread Center (0.81 / 0.88), Spread Gun (0.81 / 0.86), Empty Trips Gun (0.76 / 0.70).
- Stage 4 play-by-play fusion: NFL Gamepass descriptions parsed into down, distance, LOS, time, play type, direction, run location/pass type, completion, intended receiver, yards; LOS standardized to 1–99 scale (own 1 = 1 … opponent's 20 = 80). Findings: McVay 2015 ~60% more likely to run on 1st-&-6+ on own half with 2+ min left; Singleback Ace Pair Slot splits — 65% of runs right, 81% of passes short, 4.6 yds/pass vs 2.5 yds/run.
- Stage 5 tracking + speed: Euclidean distance d(p,q) = sqrt((q1−p1)² + (q2−p2)²). Per-screenshot yard calibration from full-field white-line spacing (5 yards known apart): worked example 5 yds ≈ 410 units → 1 yard ≈ 82 units. Camera-follow drift correction: frame-1 highest point of a full white line saved as reference anchor; later frames adjusted against it. Speed chain: units→yards→yd/s→ft/s (×3)→mph (÷5280, ×3600). Worked example (DeSean Jackson): 215.5 units / 0.2 s × (1 yd / 82 units) = 12.8 yd/s = 26.2 mph. Authors explicitly note this reads high vs Next Gen Stats — use only for relative comparisons (Jackson 22.4 mph vs Maurice Harris 19.3 mph in first 0.6 s off the line; Garçon's comeback route 1.3 fewer yards than Jackson's due to tighter 180° break).
- Throughput claim: formations for a full game (~50 offensive plays) in under 5 minutes.
- Author-stated limitations: small training set; jersey-color RGB fragile to shadows/sunlight; no RFID ground truth.

## Data sources named
- Washington Redskins home-game All-22 screenshots at 5 fps (hand-built, from NFL Gamepass footage; 500+ auto-tagged formation images) — NOT publicly released (NFL rights issue); method replicable only on GSE's own footage.
- Paper sources: fourtverts.s3.amazonaws.com PDF and the Sloan conference's own CDN (byte-identical, cross-checked); text extracted via pdftotext (349 lines).
- No RFID/NGS ground truth (stated limitation).

## Findings (numbers and facts, not vibes)
- On small, coordinate-feature datasets a tuned CART tree beat SVM/k-NN/LR at both formation-classification levels (86.5% QB-position, 72.3% on 29 formations) — cheap classical baselines can precede learned models.
- Pistol class collapsed (precision 0.50 / recall 0.12) purely from training-data starvation — a class-imbalance caution for GSE formation fixtures.
- Per-screenshot yard calibration from 5-yard line spacing is the mechanism that converts pixel distances to real distances without a homography.
- Their speed numbers were inflated (26.2 mph) because pixel noise × per-frame differencing amplifies error; the paper never smooths trajectories (improvement path: Savitzky–Golay or Kalman before differencing).
- Labeling 50 offensive plays in <5 minutes demonstrates the automation-throughput value of the approach.
- Frame-1 reference-anchor drift correction is a cheap camera-motion compensation that validates the design direction already in GSE's `cv-pipeline.ts` (estimateCameraMotion/compensateCameraMotion) — anchor-based correction is less general than dense motion fields, so it corroborates rather than replaces.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [SCHEME] Formation classification pipeline (29 formation labels; QB-relative coordinate features; Singleback Ace Pair Slot tendency splits — 65% runs right, 81% passes short, 4.6 yds/pass vs 2.5 yds/run) is directly a scheme-tendency engine: personnel + alignment → play-type/direction prediction.
- [COACHING] McVay 2015 play-calling tendency mining (filtered by down/distance/field/time; ~60% more likely to run on 1st-&-6+ own half with 2+ min left) is a worked example of coach-tendency extraction from play-by-play + formation fusion.
- [TRUST-SIGNAL] Relative-speed comparisons (Jackson 22.4 mph vs Harris 19.3 mph first 0.6 s) only trusted as relative metrics — an honest calibration-state lesson: ship relative metrics, not absolute speeds, until validated against ground truth.
- [OTHER] Hough→LOS→arccosine-rotation→per-screenshot-yard-scale Stage 1 is the closest public recipe for GSE's homography gap (cv-homography.ts DLT fails on yard-lines-only input): yard-line endpoints as true 2D landmarks, plus an affine failsoft when <4 landmarks survive.
- [OTHER] Clustered-OL blob-splitting is the classical ancestor of a pile-splitting post-processor for the detector; jersey-color-in-box → `teamHint` field is a cheap explainable team prior before learned re-ID.
- [QB-BEHAVIOR] INFERENCE — QB-position 3-class (Shotgun/Under Center/Pistol) is a QB-alignment descriptor, not behavior; no behavioral metrics in this file.

## Engine-actionable? (yes/no + one-line what)
Yes — the file ships a 4-kernel implementation spec for the tracking pipeline: S1 `cv-field-lines.ts` (Hough yard-line detector → rotation + per-screenshot yard scale → 2D landmarks for DLT); S2 frame-1 anchor drift correction as camera-motion fallback; S3 color-based `teamHint` prior; S4 CART-over-coordinates formation baseline experiment.
