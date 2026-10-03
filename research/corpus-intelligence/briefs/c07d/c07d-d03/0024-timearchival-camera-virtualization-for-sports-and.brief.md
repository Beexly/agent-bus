# arxiv-program/research/2026-09-21/arxiv-deep/0024-timearchival-camera-virtualization-for-sports-and.md
## What it is (1-2 sentences)
A neural-rendering paper (Texas A&M, arXiv:2602.15181v1) on photorealistic novel-view synthesis of dynamic sports scenes via independent per-timestep implicit radiance fields, dropping 3D Gaussian Splatting's dependence on per-frame SfM point clouds. Verdict in the file: REJECT — no predictive modeling, no code/dataset link, zero betting relevance.

## Key metrics/methods (formulas where given, else "not specified")
- Plenoptic function: Φ(x, Ω_θ, Ω_φ, λ, t) (eq. 1), x ∈ ℝ³, Ω_θ ∈ [0,π], Ω_φ ∈ [0,2π); λ assumed constant (RGB only). File flags: "Notation cleaned; subscript extraction was noisy — flagged as reconstruction-uncertain."
- Multiview capture: I_t = {I_t^(i)}, I_t^(i) ∈ ℝ^{H×W×3} (eq. 2).
- Per-timestep radiance field: F_t: (x, d) → (c, σ); F_t(x,d; Θ_t) = MLP(γ(x), γ(d); Θ_t) (eqs. 3–4), γ(·) = Instant-NGP-style multiresolution hash encoding, shallow MLP (2–3 hidden layers). Each timestep gets its own parameter set Θ_t — deliberately no temporal coupling.
- Volume rendering: Ĉ(r,t) = ∫ T_t(s) σ_t(r(s)) c_t(r(s),d) ds, T_t(s) = exp(−∫ σ_t du) (eq. 6, standard NeRF integral); discretized into M samples (eq. 7). File flags: "exact discrete form garbled in extraction (sums over T_t(j)(1−e^{−σ_j δ_j})c_j)."
- Training loss: L(Θ_t) = Σ_{i=1}^{N} Σ_{r∈R_i} ‖Ĉ(r;Θ_t) − C(r)‖² + κ‖Θ_{t+1} − Θ_t‖² (eq. 8) — photometric MSE plus optional temporal weight regularization; in experiments the temporal term is dropped (fully independent per-step optimization).
- Key assumptions: (i) N synchronized static calibrated cameras with known/estimable K_i, R_i, t_i; (ii) at fixed t the dynamic scene is "already strongly constrained by geometry" so no temporal coupling or point-cloud init is needed; (iii) sports motion too abrupt for temporal smoothness — independent per-timestep optimization is valid; (iv) photometric loss suffices, no depth supervision; (v) evaluation cameras held out from training.
- Model size: ~12.7M params per timestep (~48.8 MB); rendering 4–5 FPS. Impl: PyTorch 2.5.1, CUDA 11.8, NVIDIA A40 (50 GB) and H100.

## Data sources named
- New synthetic dataset (this paper; Blender 4.0 renders from public internet 3D assets): (i) Dancing-Walking-Standing: 65 time instances × 100 calibrated cameras (hemisphere Fibonacci sampling, R radius), 95 train / 1 val / 4 test cameras → 6,175 train / 65 val / 260 test images, 1920×1080; (ii) Soccer Penalty Kick: 109 instances × 60 cameras → 5,995 train / 109 val / 436 test; (iii) Soccer Multiplayer: 83 instances × 60 cameras → 4,565 train / 83 val / 332 test. Intrinsics: fx=fy=2666.67, (cx,cy)=(960,540), zero distortion.
- CMU Panoptic Studio (public): Baseball Bat (Sports1, 100 frames, 31 HD cameras → 29 train / 2 test; 2,900 train / 200 test images) and Hand Gesture (Hands2, 201 frames, 5,829 train / 402 test); foreground via YOLOv8 + SAM-HQ, RGBA.
- Code/dataset: "Code and dataset will be available at link." (§4) — no actual link or URL given in the text. Effectively none stated.

## Findings (numbers and facts, not vibes)
- Synthetic (Table 1), PSNR↑ / LPIPS↓ — DWS: D-NeRF 6.44/0.572, D-3DGS 18.45/0.139, 4DGS 28.17/0.08, ST-GS 20.03/0.112, **Ours 34.28/0.027**; Soccer Penalty Kick: D-NeRF 10.64/0.407, D-3DGS 26.45/0.071, 4DGS 26.25/0.045, ST-GS 25.99/0.077, **Ours 33.81/0.028**; Soccer Multiplayer: D-NeRF 6.15/0.533, D-3DGS 26.43/0.087, 4DGS 26.20/0.061, ST-GS 25.92/0.104, **Ours 31.85/0.039**.
- CMU Panoptic (Table 2): Baseball Bat — D-NeRF 6.35/0.605, **Ours 29.43/0.066** (D-3DGS/4DGS/ST-GS failed — ♣); Hand Gesture — D-NeRF 12.99/0.135, **Ours 29.19/0.050**.
- Memory per timestep (Table 4, DWS): 3DGS w/ GT points 36.47 PSNR / 77 MB model + ~6.2 GB point-cloud folder; 3DGS random init 16.33 / 91 MB; **Ours 34.28 / 48.8 MB, no point cloud**. Per-timestep 3DGS for time archival: "1–5 million Gaussians per scene … 200–300MB per time step … 100 frames: 20–30 GB" vs. theirs "12.7M parameters (approx. 25-50MB)" per step.
- Training (Table 5): 4DGS ~0.30–3.0 h sequential, ST-GS ~0.46–0.71 h, D-3DGS ~1.40 h, **Ours ~5.65–8.90 h per sequence on a single A6000 but fully parallelizable across time**; PSNR 31.9–34.3, LPIPS 0.027–0.039 (best).
- Warm-start chaining (15-frame soccer): GT-init PSNR 28.94/SSIM 0.851 vs. noisy-init 26.20/0.812 — "∼2.74 dB PSNR gap persisted consistently across frames 1–15."
- Rendering speed: "our current implementation provides 4-5 FPS, i.e., near realtime performance, a limitation nonetheless."
- All numbers are paper claims on author-generated synthetic data + CMU Panoptic; no confidence intervals reported.
- Limitations (§6, quoted): synthetic-data home advantage (perfect sync/calibration); baselines handicapped (4DGS/ST-GS run with random 3D-point init; D-3DGS needs absent depth data); no temporal test split — time-archival quality at *unseen* timesteps never evaluated (archival claim is architectural, not empirically validated); small foreground objects (grass, bottles) and mixed lighting produce artifacts; near-real-time claims depend on "tens or hundreds of GPUs" — cost not quantified.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (none, by design): the file explicitly documents zero GSE overlap — this is a graphics/broadcast-production paper with no predictive model, no features, no calibration, no market application. The only conceivable touchpoint — generating novel-view replay content for @GalaxySportsHQ — is foreclosed by (a) no multi-camera arrays in Garrett's pipeline, (b) no code released, (c) the standing video rule requiring real footage, not synthesized renders. Serves no program. Verdict: intake-only record, do not revive.

## Engine-actionable? (yes/no + one-line what)
No — no predictive model or transferable feature; novel-view synthesis is out of scope for the prediction engine and foreclosed for content by the standing real-footage rule.
