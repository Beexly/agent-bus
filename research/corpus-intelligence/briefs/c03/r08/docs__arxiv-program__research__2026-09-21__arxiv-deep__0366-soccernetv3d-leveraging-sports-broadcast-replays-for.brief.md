# docs/arxiv-program/research/2026-09-21/arxiv-deep/0366-soccernetv3d-leveraging-sports-broadcast-replays-for.md
## What it is (1-2 sentences)
Ledger read (full text) of Gutiérrez-Pérez & Agudo (2025), "SoccerNet-v3D" (arXiv:2504.10106): a pipeline that mints 3D ball-localization annotations from broadcast + replay soccer footage via field-line camera calibration (PnLCalib), multi-view triangulation, and a closed-loop bounding-box optimizer; verdict ADAPT for an NFL annotation-mining recipe.
## Key metrics/methods (formulas where given, else "not specified")
- Calibration quality: JaC_γ = TP_γ/(TP_γ+FN+FP) (Eq. 3), TP iff every pitch-segment point reprojects within γ (% of image diagonal) of annotation; computed at γ ∈ {0.5, 1, 2}%. Acceptance gate used: JaC_0.5% > 0.75.
- Triangulation fusion: p = (1/N)Σ_{i,j}(p_ij | e_ij < τ) (Eq. 4) — pairwise triangulations averaged over reprojection error e_ij < τ; parallax-angle β caveat (small parallax → high uncertainty).
- Monocular 3D from ball-size prior: p = R^⊤ (φ p_c)/‖p_c^+ − p_c^−‖ + t (Eq. 7), φ = true ball diameter in meters (sphere prior).
- Box optimization: argmin_d ‖p − R^⊤ φ p_c/‖p_c^+(d) − p_c^−(d)‖ − t‖ (Eq. 8), solved by local minimization; optimal d_opt centers box on the 3D ray with width/height = d_opt.
- Baseline: YOLOv11-l 2D detection + PnLCalib + Eq. 7 monocular 3D.
## Data sources named
SoccerNet-v3 (33,986 images, 12,764 main+replay multi-view systems) → SoccerNet-v3D (4,051 images; train 3,240 / test 811); ISSIA (six static synchronized 1920×1080 cameras, 25 FPS, 2-min sequence) → ISSIA-3D (10,544 images; train 8,686 on cameras 3–6 / test 1,858 on cameras 1–2); ~10% manual re-annotation for box validation. Code: https://github.com/mguti97/SoccerNet-v3D.
## Findings (numbers and facts, not vibes)
- Box optimization vs ~10% manual re-annotation: IoU 0.57→0.66; size error 19.01%→7.27% of annotated diagonal.
- SoccerNet-v3D test (oracle calibration): YOLO_opt AP@0.5 0.81 vs YOLO_base 0.65; 3D MAE 0.81 m vs 15.3 m; MAE_% 5.5 vs 18.3; P_2m 0.30 vs 0.03. With estimated (non-oracle) calibration: MAE_m 4.2 m, P_2m 0.26.
- ISSIA-3D: YOLO_base AP@0.5 0.04 (total distribution-shift failure); YOLO_ISSIA (fine-tuned on generated boxes) AP@0.5 0.65, MAE_m 4.2 m, MAE_% 4.8, P_2m 0.35.
- Sensitivity: ±10% pixel-size variation → 6–14 m 3D error (grows with camera distance); ±2% diagonal center shift → only 0.6–1.6 m. Size error dominates.
- Filters: replay pairs with < 1 m camera displacement discarded as unreliable; calibration required ≥ JaC_0.5% > 0.75 (4,297 of 12,764 systems passed).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- 6–14 m size-error sensitivity vs 0.6–1.6 m center-error sensitivity → OTHER (CV engineering directive: optimize detector size accuracy, not center accuracy)
- SoccerNet-trained detector AP@0.5 0.04 on ISSIA (cross-broadcast-package distribution failure) → TRUST-SIGNAL (detectors trained on one broadcast package silently fail on another; per-source box generation + fine-tuning is a budget item)
- Triangulation pipeline (PnLCalib → reprojection-filtered triangulation → box optimization) as broadcast-video annotation-mining recipe → OTHER (direct input to GSE's NGS-replacement / camera-based tracking lane; reader verdict ADAPT)
- Sphere prior (Eq. 7) invalid for prolate-spheroid football → OTHER (blocks direct NFL reuse until orientation-aware football shape prior is derived)
## Engine-actionable? (yes/no + one-line what)
Yes — replicate the annotation-mining pipeline for NFL (yard-line calibration, triangulation, box optimization with a football shape prior) to generate tracking-grade 3D ground truth from broadcast/All-22 video without wearables; first step is measuring what fraction of NFL frames pass the JaC_0.5% > 0.75 gate.
