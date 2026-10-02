# arxiv-program/research/2026-09-21/arxiv-deep/0024-timearchival-camera-virtualization-for-sports-and.md
## What it is (1-2 sentences)
A computer-vision/neural-rendering paper on photorealistic novel-view synthesis of fast multi-subject sports scenes using per-timestep independent implicit neural radiance fields, no 3D Gaussian Splatting point-cloud init. Verdict in the source: REJECT — no predictive modeling, no betting relevance, no released code.
## Key metrics/methods (formulas where given, else "not specified")
- Radiance field per timestep: F_t(x,d; Theta_t) = MLP(gamma(x), gamma(d); Theta_t) (eq. 4), Instant-NGP-style multiresolution hash encoding, shallow MLP (2–3 hidden layers); ~12.7M params per timestep (~48.8 MB).
- Volume rendering: C-hat(r,t) = integral T_t(s) sigma_t(r(s)) c_t(r(s),d) ds, T_t(s) = exp(-integral sigma_t du) (eq. 6); discretized (eq. 7).
- Loss: L(Theta_t) = sum_i sum_{r in R_i} ||C-hat(r;Theta_t) - C(r)||^2 + kappa||Theta_{t+1} - Theta_t||^2 (eq. 8); temporal term dropped in experiments (fully independent per-step).
- Plenoptic: Phi(x, Omega_theta, Omega_phi, lambda, t), x in R^3. Rendering 4–5 FPS. Note: several equation forms were PDF-extraction reconstructions flagged uncertain in the source.
## Data sources named
Author-created synthetic multiview dataset (Blender 4.0 renders): Dancing-Walking-Standing (65 instances x 100 cameras, 1920x1080, fx=fy=2666.67), Soccer Penalty Kick (109 x 60), Soccer Multiplayer (83 x 60); CMU Panoptic Studio (Baseball Bat: 100 frames, 31 cameras; Hand Gesture: 201 frames), foreground via YOLOv8 + SAM-HQ. Baselines: D-NeRF, D-3DGS, 4DGS, ST-GS, Tensor4D, HexPlane, K-Planes, StreamRF. PyTorch 2.5.1, CUDA 11.8, NVIDIA A40/H100.
## Findings (numbers and facts, not vibes)
- Synthetic PSNR / LPIPS (paper claims): DWS — ours 34.28/0.027 vs 4DGS 28.17/0.08, D-3DGS 18.45/0.139; Soccer Penalty Kick — ours 33.81/0.028 vs D-3DGS 26.45/0.071; Soccer Multiplayer — ours 31.85/0.039.
- CMU Panoptic: Baseball Bat 29.43/0.066 (D-3DGS/4DGS/ST-GS failed); Hand Gesture 29.19/0.050.
- Memory per timestep: ours 48.8 MB vs 3DGS random-init 91 MB / GT-points 77 MB + ~6.2 GB point-cloud folder; per-timestep 3DGS for time archival would be 200–300 MB per step (20–30 GB per 100 frames) vs their ~25–50 MB.
- Training ~5.65–8.90 h/sequence on single A6000, fully parallelizable across time; PSNR 31.9–34.3.
- Warm-start chaining (15-frame soccer): GT-init PSNR 28.94 vs noisy-init 26.20 — ~2.74 dB gap persisted across frames 1–15.
- Limitations: 4–5 FPS rendering; synthetic-data home advantage (perfect sync/calibration); no unseen-timestep evaluation; "code and dataset will be available" but no link given.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — neural rendering / novel-view synthesis; out of the prediction engine's scope.
## Engine-actionable? (yes/no + one-line what)
No — graphics/broadcast-production paper with no predictive model, no code released, and no multiview video corpus in GSE's pipeline.
