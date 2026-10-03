# arxiv-program/research/2026-09-21/arxiv-deep/0383-motion-diffusionguided-3d-global-hmr-from.md
## What it is (1-2 sentences)
Deep-read of arXiv:2411.10582 (Heo et al. 2024), "DiffOpt": test-time optimization that recovers global 3D human mesh/motion (SMPL pose + world-frame root trajectory) from a single moving-camera video using a motion-diffusion-model prior and DROID-SLAM camera disentanglement. The reader's verdict in the file is REJECT for GSE purposes.
## Key metrics/methods (formulas where given, else "not specified")
- Representation: SMPL articulation θ_{1:T} ∈ R^{24×3×T}, root orientation φ_{1:T}, root translation x_{1:T}, parameterized by neural motion-field MLPs over normalized phase τ.
- MDM-SDS prior: L_Diff = E_{t,ε}[w(t)‖ε_φ(α_t x + σ_t ε, t) − ε‖²₂] (DreamFusion-style score distillation against AMASS-trained motion diffusion model).
- 3-stage optimization: (1) warm-up L2 fit to HMR2.0 init; (2) alternate human update (L_Diff + warm-up term) with camera update (learnable rotation bias, translation scale/bias, focal scale on DROID-SLAM outputs, minimizing 2D reprojection loss with Geman-McClure robust error); (3) joint fine-tune.
- Metrics: MPJPE/MPVPE (camera frame) and G-MPJPE/G-MPVPE (global, mm).
## Data sources named
EMDB (58 min / ~105,000 frames / 81 sequences, electromagnetic ground truth); Egobody (17 test sequences); off-the-shelf inputs HMR2.0, ViTPose, DROID-SLAM; baselines GLAMR, SLAHMR, WHAM, TRACE; MDM prior trained on AMASS.
## Findings (numbers and facts, not vibes)
- Trimmed EMDB (mm, G-MPJPE): DiffOpt 322.6 best in 5/7 sequences; paper claims 17% G-MPJPE / 18% G-MPVPE over third-best; WHAM returns NaN on 'soccer warmup' (complete optimization failure).
- Untrimmed EMDB: DiffOpt G-MPJPE 1776.2, 16% better than second-best GLAMR (2113.5); SLAHMR breaks down (5595.8); GLAMR wins local MPJPE (90.4 vs 102.5) but loses global badly.
- Egobody: DiffOpt G-MPJPE 459.8, claims 24.6%/26.7% over WHAM (572.7); SLAHMR NaN on all 17 sequences.
- Ablations: learnable tensors instead of motion fields +318.2 G-MPJPE; single-stage optimization +625.1 (catastrophic); no warm-up +262.1; no MDM step +145.2; no fine-tune +205.0.
- Limitations per file: single-human only, per-video test-time optimization (not season-scale), MDM trained on AMASS (ground-plane contact only) — contact-heavy motion (tackles) is out-of-distribution and acknowledged to degrade.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- No actionable connection — file verdict is REJECT: NGS chips already supply strictly better all-22 positional data at 10 Hz with no occlusion problem (OTHER).
- TRUST-SIGNAL (negative): even the strongest video-pose method fails on the exact failure modes that define NFL film (multi-person occlusion, contact-heavy motion) — do not trust vendor claims of broadcast-video tracking as an NGS substitute.
## Engine-actionable? (yes/no + one-line what)
No — single-subject, per-video optimization cannot process 22-player broadcast film at season scale, and GSE's NGS-derived tracking is strictly better data for everything its output could feed.
