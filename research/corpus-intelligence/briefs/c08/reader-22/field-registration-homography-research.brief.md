# docs/engine/research/2026-09-26/field-registration-homography-research.md
## What it is (1-2 sentences)
Implementation-complete research spec for the camera-geometry piece of a football video-to-tracking pipeline (pixels → field x/y): standard pipeline, available models/code with licenses, shot detection, pan/zoom handling, NFL/NCAA geometry parameters, QC gates, and a per-stage sub-pipeline design.
## Key metrics/methods (formulas where given, else "not specified")
- Standard pipeline: landmark detection → 2D↔2D correspondences → homography via normalized DLT + RANSAC (10 px reprojection threshold per Nie et al.) → ground-contact point (bbox bottom-center, never box center/helmet) projected through H⁻¹.
- Conditioning trap (verified in practice): hash-band-only correspondences gave **1.31 px in-band residual but the projected grid visibly drifted off painted lines** away from hashes — require vertically-spread landmarks (sidelines, endzone corners).
- Hybrid recommendation: learned keypoint model names the lines (Roboflow `football-field-key-points-mvmjf/2`: identity correct 16/20 frames, RANSAC residuals 1–3 px, localization coarse ±3–30 px) + classical white-paint/Hough for geometry.
- Temporal: 9-DoF Kalman on vec(H_t) with regime-tuned process noise (fixed cam σ_q≈0.001, follow/drone σ_q≈0.02); EMA fallback α≈0.35 + jump rejection (>~170 px @1080p); min-shot merge ~1 s; TransNetV2 (MIT) primary / PySceneDetect (BSD-3) fallback for shot detection; Nie-style temporal loss λ_feat 0.9 / λ_track 0.1, Adam 50 iters.
- QC gates (720p): ≥6–8 non-collinear vertically-spread correspondences; RANSAC ≤10 px; held-out reprojection <5 px; inlier ratio ≥0.6; completeness target CR >90% on live-play shots; fit on ≥6, withhold ≥2–3 for QC.
- Benchmark reference (soccer, no public football benchmark): SOTA MRE 4.47 px, JaC10 92.84 (Broadcast2Pitch); Nie et al. SportsFields dataset — 192 clips across 5 sports incl. American football, rain/snow/glare variation, claims real-time HD.
- Field geometry (template): NFL hash gap 18'6" (3.0833 yd half-width) vs NCAA 40' (6.6667 yd) — using the wrong template shifts every hash keypoint **3.58 yd**, a silent systematic bias; competition must be explicit validated input. Virtual 1st-&-10/LOS overlays are never real landmarks; radial distortion can disagree with homography-only models by >2.5 m at field edges.
## Data sources named
TVCalib (WACV'23, MIT, weights train_59.pt); PnLCalib (arXiv 2404.08401, license unverified); Nie et al. WACV'21; soccer benchmarks (SoccerNet-Calibration 25,506 imgs, WC14); nflgsplat, football-cv, football-tracking, football-iq repos; no public American-football keypoint dataset exists — building 200–500 labeled broadcast frames called the highest-leverage data investment.
## Findings (numbers and facts, not vibes)
- All keypoint models from soccer are re-fit-only; the only football-specific pretrained option is Roboflow's keypoint model with verified 16/20 identity accuracy.
- Open risks named: (1) no public football keypoint dataset, (2) hash-band conditioning trap, (3) competition misconfiguration = silent 3.58-yd bias, (4) virtual-line ingestion.
- Policy: `< min_correspondences` or RMS above threshold → registration `None` (a gap), never a guess; long gap runs fail-loud with frame ranges.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: fail-loud-not-guess policy, held-out QC (never score the fit on training points), per-frame confidence weights, per-shot completeness reporting — directly portable to the engine's evidence doctrine.
- OTHER: computer-vision pipeline spec for the tracking lane (speeds/accel QC note: homography-only model absorbs radial distortion imperfectly, matters at frame edges).
## Engine-actionable? (yes/no + one-line what)
Yes — spec is build-ready for the tracking lane (stages A–E with gates); highest-leverage next move is labeling the 200–500-frame football keypoint dataset since no public one exists.
