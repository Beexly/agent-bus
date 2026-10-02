# arxiv-program/research/2026-09-21/arxiv-deep/0189-muybridge-mobile-center-of-mass-video.md
## What it is (1-2 sentences)
Deep read of Bradshaw et al. (2026, arXiv:2609.02854v1): MuyBridge — metric 3D human center-of-mass estimation from a single phone camera without any 3D/CoM supervision, fusing a compact 2D pose network with sparse monocular depth through analytic anthropometric + physical priors. Verdict in file: ADAPT — port the analytic metric-fusion recipe to NFL broadcast footage for metric player localization and landing/cutting biomechanics; replace the phone stack with an offline pipeline.
## Key metrics/methods (formulas where given, else "not specified")
- Segment center c_s = p^{prox}_s + ρ_s(p^{dist}_s − p^{prox}_s); whole-body CoM C = (Σ m_s c_s)/(Σ m_s), m_s = sex-specific de Leva mass fractions.
- Camera ray d_{f,j} ∝ K^{−1}[u,v,1]^⊤; robust range z̃_f = median of sparse depth samples at keypoints.
- Anthropometric range t^{size}_{f,k} = L_k/‖d_{f,i}−d_{f,j}‖; depth anchoring (α,β) = argmin Σ w_f(αz̃_f+β−t^{anchor}_f)²; fused with constant-velocity range model.
- Physical cues: ground contact via ray–ground intersection, airborne via image-acceleration-vs-gravity.
## Data sources named
AthletePose3D (~1.3M frames, 8 athletes, running/track&field/figure skating; test 1,028 sequence-camera pairs, 235,183 frames); pose trained on COCO-WholeBody + HICO-DET; depth on ~1.2M synthetic pairs (Hypersim + Virtual KITTI 2). Code: https://github.com/Abradshaw1/Muybridge. Reference CoM is markerless-computed (not mocap) — a stated limitation.
## Findings (numbers and facts, not vibes)
- Vertical CoM error 33–41 mm across regimes; depth axis dominates: running 166/187 mm (mean range 4.4 m, 3D MAE 187, AbsRel 3.6%), T&F 117/185 mm, skating 672/707 mm (10.1 m, 6.6%).
- Baselines (absolute 3D MAE run/T&F/skate): MuyBridge 187/185/707 vs MeTRAbs-S 224/120/231, CameraHMR 392/180/534, NLF 52/209/646; root-relative: 45/118/76 vs MotionAGFormer 45/79/90 (with GT scale).
- Ablations: constant range → 721/235/1890 (kills it); no ground-contact → 355/808/1220; no keypoint-depth → 387/316/939; flight-phase error 1.5–2.3× worse than contact (7.0–8.7% vs 3.6–5.6% of range); jump height 62 mm MAE, r=0.84, +12 mm bias (n=719).
- Deployment: pose 63 FPS (15.58 ms), depth 2.86 Hz, full pass 638.4 mJ, 946 MB model on iPhone 15.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: analytic (non-learned) fusion approach complementary to learned broadcast-localization (ledger 0188 Field Converter) — could serve as prior/fallback/cross-check for metric player trajectories feeding landing/cutting biomechanical features → injury-risk signals for the props lane.
## Engine-actionable? (yes/no + one-line what)
yes — build the offline NFL port (pose + distilled depth + roster-adaptive anthropometry + field-plane anchors); adopt only if ≥30% range-AbsRel reduction vs depth-only and vertical CoM error < 60 mm on held-out games.
