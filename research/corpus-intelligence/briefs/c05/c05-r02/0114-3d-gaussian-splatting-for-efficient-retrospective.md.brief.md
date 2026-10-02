# arxiv-program/research/2026-09-21/arxiv-deep/0114-3d-gaussian-splatting-for-efficient-retrospective.md
## What it is (1-2 sentences)
3D Gaussian Splatting paper (Zhang & Kumar, Texas A&M, arXiv:2605.12437, 2026) arguing that in synchronized calibrated multi-view capture, warm-starting each frame's Gaussians from the previous frame achieves efficient retrospective dynamic-scene novel view synthesis with no temporal deformation constraints — plus a Blender-based standardized dynamic multi-view benchmark framework. The reader's verdict was REJECT — GSE has no calibrated synchronized multi-camera NFL capture, broadcast footage is explicitly excluded, and AI-synthesized video conflicts with the standing video rule.
## Key metrics/methods (formulas where given, else "not specified")
- Time-indexed fixed-size 3D Gaussian representation G_t = {g_{t,k}}, covariance Σ_{t,k} = R(q_{t,k}) diag(s_{t,k}²) R(q_{t,k})ᵀ; densification DISABLED (‖G_t‖ = K ∀t).
- Per-frame objective (Eq. 15, reconstructed — notation uncertain): L_t(Θ_t) = Σ_i L_img(Θ_t; I_t^{(i)}) + λ_reg R(Θ_t), R = Σ_k (‖s‖² + α² + ‖b‖²).
- Warm-chain: Θ_t^{(0)} ← Θ*_{t−1} (forward) or Θ*_{t+1} (backward); init ONLY, no temporal constraint.
- Blender API: parameterized rig synthesis (hemisphere/sphere/ellipse/stadium); OpenCV/COLMAP conventions; A/B static-dynamic decomposition (stadium static + player residuals via RGB differencing + multi-view voting).
- Assumptions: accurate calibration, temporal sync, locally smooth motion, static rigs (moving/zooming cameras NOT addressed).
## Data sources named
All synthetic Blender 4.0 renders: D-WS (65×100 views, 6,175 train/65 val/260 test), S-PK (109×60, 5,995/109/436), S-MP (83×60, 4,565/83/332), weather soccer fields (Cloudy/Snow/Sunny, 120×60, 1920×1080). Deterministic camera-name splits.
## Findings (numbers and facts, not vibes)
- TA-3DGS vs baselines (PSNR/LPIPS): D-WS 42.50/0.0110 vs TACV 34.28/0.0275, 4DGS 28.17/0.0800, D-3DGS 18.45/0.1396, D-NeRF 6.44/0.5726; S-PK 44.59/0.0023; S-MP 43.84/0.0023.
- Ablation: Warm+Densify splats grow 188,393→846,094 over 5 frames (44.56→200.11 MB) vs Warm+NoDensify fixed 100,000 splats (23.65 MB, ~194–202 s/frame).
- Weather (H100): Cloudy 28.15/0.370 (886 MB), Snow 35.00/0.270 (478 MB), Sunny 28.51/0.337 (888 MB).
- Compute: A40 50GB / H100-class, hours per sequence; code/API links not recoverable from PDF extraction.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Per-Gaussian temporal-persistence score idea (freeze near-static Gaussians, warm-chain only dynamic ones) — a generic compression motif for sequence models — OTHER.
- Blocked by policy: standing GSE video rule (real footage only, never generated substitutes) — OTHER.
## Engine-actionable? (yes/no + one-line what)
No — rejected; requires calibrated synchronized multi-camera capture GSE doesn't have, A40/H100 compute, and its output (synthesized video) is blocked by the standing video rule.
