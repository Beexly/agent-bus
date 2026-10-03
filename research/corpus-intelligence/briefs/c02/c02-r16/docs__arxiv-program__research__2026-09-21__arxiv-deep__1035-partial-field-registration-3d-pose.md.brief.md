# docs/arxiv-program/research/2026-09-21/arxiv-deep/1035-partial-field-registration-3d-pose.md

## What it is (1-2 sentences)
Ledger deep-read of Baumgartner & Klatt (CVsports 2023 workshop), arXiv:2304.04437 — recovers kinematically valid 3D running kinematics from close-up broadcast footage via partial sports-field registration: deriving camera calibrations consistent with visible line markings up to one DoF, then jointly optimizing calibration + ray-cast 3D pose. Verdict in file: ADAPT.

## Key metrics/methods (formulas where given, else "not specified")
- Pipeline: (1) partial field registration — detect visible lane lines (OpenCV Hough), compute one vanishing point, construct dense candidate camera calibrations consistent with it (1° azimuth increments; elevation/roll/FoV solved to match; translation fitted to lane positions; residual 1-DoF per frame resolved via static-camera constraint across the sequence); (2) ray-cast lifting — from ground-contact frames, ray-cast foot pixel to ground plane for athlete location, interpolate ground projection between contacts to define sagittal plane, cast pelvis ray onto that plane, then walk skeleton outward (torso→limbs), intersecting each joint's camera ray with a sphere of radius = limb length (limb lengths from off-the-shelf 3D HPE averaged over scene), pruning 2^3 configurations per segment via range-of-motion + frame-to-frame consistency.
- Geometric relations: projection matrix P^C = K^C · (R^C | t^C) (§3.2); joint = ray ∩ sphere(limb_len) around parent joint.
- Fundamental ambiguity result (Figure 2): identical image pixels produced by 3D skeletons whose right-leg angle differs by 7.8° — provably unrecoverable without scene geometry.
- Baselines: MeTRAbs (Sárándi et al., SOTA) and MeTRAbs + rotation (their calibration injected).
- Metrics: reprojection error (px, estimated pose re-rendered with GT calibration), 3D Euclidean error (cm, pelvis-aligned), knee-angle error (°).

## Data sources named
- Synthetic: 10,571 frames, 31 sequences — Unreal Engine 5 + Mixamo (marker-based MoCap animations) + MetaHumans (varied height, body composition, limb length, running style); athlete runs the straight of a 400m track; static camera pans/tilts/zooms like a broadcast; ground truth: rendered images + 2D joint pixels (Human3.6m joint defs) + absolute 3D world coordinates + complete camera calibration.
- Anecdotal real-world footage from a world-class track event (qualitative demo only).
- Code/data public: https://github.com/tobibaum/PartialSportsFieldReg_3DHPE.

## Findings (numbers and facts, not vibes)
- Table 1 mean (std): MeTRAbs — reprojection 6.36 (4.08) px / 3D 10.33 (1.69) cm / knee 20.31 (9.74)°; MeTRAbs+rotation — 5.01 (2.96) / 7.92 (2.12) / 12.41 (7.94)°; their method — 2.76 px / 6.41 (1.65) cm / 9.91 (9.00)°; their method +context (GT 2D joints + cyclical step-frequency consistency, idealized) — 3D 2.44 (0.58) cm / knee 2.87 (3.27)°. [OTHER: vision-geometry method]
- Camera calibration errors vs GT: lane endpoints 21.98±24.42 px off; vanishing point 2.58±1.89%; camera location 0.85±0.72 m (3.97±3.10% of lane distance); FoV 3.07±0.88°; MeTRAbs-XL 2D error 4.66±0.87 px (COCO defs). [OTHER]
- Lens-distortion ablation (real broadcast calibration): error 7.05→5.78 cm (undistorted), 9.88→8.08 cm (distorted). [OTHER]
- Running literature reports meaningful knee-angle differences of 3–4° between conditions — so MeTRAbs' 20.31° is two orders of magnitude too coarse for real kinematic analysis, and even the base 9.91° only approaches usefulness with the idealized +context (2.87°).
- Numeric gate in file: ray-cast method must beat MeTRAbs by ≥3 cm on 3D error AND ≥8° on knee-angle error on a synthetic football-field set (matching paper's margins: 10.33→6.41 cm, 20.31→9.91°) with reprojection error ≤3 px before any real-broadcast pilot.
- Limitations: narrow domain (middle-distance running on straight track; single athlete per shot; static camera); +context highly idealized; 9.91° knee error still exceeds 3–4° effect sizes of interest; Unreal renderings ≠ real broadcast; requires visible lane markings and static camera.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- NFL broadcast/sideline and All-22 video is the target use case — football field has the richest marking geometry in sports (yard lines every 5, hash marks, numbers, sidelines), even better than a 400m track for partial registration: SCHEME/OTHER — the missing primitive for recovering 3D player kinematics from existing footage (tackling form, running gait, QB throwing kinematics).
- Anchoring ray-cast lifting with Next Gen Stats player (x,y) positions as hard positional constraints (GSE-exclusive data the paper never had): QB-BEHAVIOR / OTHER — unique GSE data moat to unlock the kinematic validity the paper was chasing; the improvement experiment to run.
- 7.8° right-leg ambiguity result: TRUST-SIGNAL — provable limits on what broadcast pixels alone can resolve; honest calibration-state labeling for any kinematics content.
- Method requires visible field markings + static camera; won't apply to handheld or crowd-dense team-sport closeups: OTHER — scope constraint for NFL close-up broadcast shots.

## Engine-actionable? (yes/no + one-line what)
Yes — build the NFL-FieldReg-3D pipeline: detect yard lines + hash marks per broadcast frame → vanishing point(s) → candidate calibration family per shot → ray-cast lift from a 2D pose estimator (RTMPose/HRNet) → NGS player (x,y) positions as hard positional anchors; gate on beating MeTRAbs off-the-shelf by ≥3 cm 3D error and ≥8° knee-angle error on a synthetic football-field set first.
