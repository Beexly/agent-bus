# arxiv-program/research/2026-09-21/arxiv-deep/0388-gst-precise-3d-human-body-from.md
## What it is (1-2 sentences)
Ledger [0388]: GST (arXiv:2409.04196, Prospero et al. 2024, Oxford Podium Institute) — precise 3D human body (pose+shape+appearance) from a single image at 47 fps, via SMPL-anchored Gaussian splats trained on multi-view images without 3D ground truth. Verdict: REJECT for GSE — single-human mesh reconstruction is not a GSE product input; NGS already supplies 22-player positional data.
## Key metrics/methods (formulas where given, else "not specified")
- Representation: one Gaussian per SMPL vertex (6890 total): G_n = (μ_n, Σ_n, α_n, c_n); covariance factorized rotation×diagonal (9→6 DoF); G_n ∈ R^14. μ_n = v_n + δ_n (Eq. 1).
- Architecture: frozen HMR2 ViT + extended decoder with 5K+1 tokens (26 groups of 265 Gaussians, 5 params/group + 1 SMPL-shape token) → linear → Gaussian params.
- Losses: L_img = (1/M)Σ(‖Î_i−I_i‖²₂ + λ_perceptual·LPIPS(Î_i, I_i) + λ_α‖M̂_i−I_i^α‖²₂) (Eq. 2); L_tight = (1/V)Σ‖δ_n‖₂, V=6890 (Eq. 3); L = L_img + λ_tight·L_tight (Eq. 4). Weights: L_perceptual=0.01, L_α=0.1, L_tight=0.1.
- Training: 256-px crops, single A6000, batch 32, 3 days. Inference 47 fps, single forward pass.
## Data sources named
- THuman (90 train / 10 test), RenderPeople (450/30), ZJU MoCap (SHERF split), HuMMan (317 train / 22 test seqs, 17 frames), TH21 (2,500 3D scans, 200 eval), CMU Panoptic single-human (9 seqs, 31 HD views), Human3.6M (sparse-view: PSNR 18.68). Code: https://github.com/prosperolo/GST.
## Findings (numbers and facts, not vibes)
- 3D keypoints MPJPE (RenderPeople / HuMMan): HMR2 101.0/133.4; HMR2 2D-only FT 127.40/163.77 (worse than pretrained); HMR2 3D FT 57.33/61.20; TokenHMR 77.9/91.4; GST 67.6/64.6 — no 3D supervision, only 7/6 mm worse than full-3D-GT HMR2, beats TokenHMR.
- Novel view RenderPeople: GST 17.80/0.81/0.25 vs SHERF 13.55/0.62/0.37 (PSNR/SSIM/LPIPS); HuMMan: 18.40/0.87/0.14 vs 18.00/0.85/0.18. ZJU: GST 21.26/0.85/0.16 vs SHERF 19.11/0.81/0.21; THuman: SHERF wins 17.27/0.85/0.16 vs GST 16.34/0.84/0.20. TH21: GST 22.20/0.90/0.09 vs Splatter Image 23.74/0.91/0.10 (Splatter on PSNR/SSIM, GST on LPIPS, plus predicts 3D body).
- Ablation (HuMMan MPJPE): all losses 50.8 mm; minus transparency 52.3; minus tightness 53.6; LPIPS only 82.3 — tightness regularization has largest 3D-precision impact.
- Limitations: calibrated multi-view training required (NFL broadcast cuts are unsynchronized, not calibrated multi-view); single human per crop (22-player problem); mask quality load-bearing (Human3.6M failure bakes background into human); subject-diversity blurriness on small datasets.
- Banked for future: multi-view-without-3D-GT training paradigm if a biomechanics/injury lane ever opens; only pose paper (vs 0383 DiffOpt) that could run at video scale.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER** (REJECT, banked only): per-player 3D mesh reconstruction — no current GSE product consumes it; NGS 10 Hz 22-player positions strictly dominate for every engine use.
## Engine-actionable? (yes/no + one-line what)
no — REJECT; bank the multi-view-without-3D-GT training recipe only if a future biomechanics/injury product lane opens.
