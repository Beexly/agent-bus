# arxiv-program/research/2026-09-21/arxiv-deep/0353-light-future-multimodal-action-frame-prediction.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2507.14809v2 ("Light Future") — fine-tuning InstructPix2Pix as a lightweight future-frame predictor (100 frames ahead) on RoboTwin robot-manipulation simulation. Verdict in the file: REJECT — synthetic robotics paper, zero sports experiments, and the headline SOTA table compares every baseline on a different dataset.
## Key metrics/methods (formulas where given, else "not specified")
- Objective: θ* = argmin_θ E[L(f_θ(I_t, T), I_{t+Δt})], Δt = 100 frames.
- Loss: L = λ_1 L_diff + λ_2 L_perc + λ_3 L_adv; λ_1 = 1.0, λ_2 = 0.1, λ_3 = 0.01.
- Classifier-free guidance: ε_θ(z_t,c) = w·ε_θ(z_t,c) + (1−w)·ε_θ(z_t,∅); 100-step DDIM inference.
- PEFT scope: cross-attention layers of U-Net + partial self-attention + last layers of image encoder; backbone InstructPix2Pix (Stable Diffusion v1.5, ~1.5B params).
- Training: AdamW (lr 1e-4, wd 0.01), batch 8, FP16, progressive 64×64 → 128×128, 1000 diffusion timesteps; 1× A100 40GB ≈ 8 h/50 epochs (stage 1), ~1 h/epoch (stage 2).
## Data sources named
- RoboTwin simulator (Mu et al. 2025); three tasks (block_hammer_beat, block_handover, blocks_stack_easy).
- Stage 1: 300 samples; stage 2: 10,491 image pairs (every 10th frame paired with frame +100).
- No code or dataset release link stated.
## Findings (numbers and facts, not vibes)
- Stage 1, 50 epochs: SSIM 0.9794, PSNR 59.19. Stage 2, 10 epochs: SSIM 0.9823, PSNR 59.41. (OTHER)
- Zero-shot baseline (own backbone): SSIM 0.65–0.85, PSNR 11–16 → fine-tuning gains are real within the sim domain. (OTHER)
- Table 4 "comparison" is void: ConvLSTM 0.75/28.5 (Moving MNIST), VDM 0.87/35.7 (UCF-101), MAGVITv2 0.91/37.2 (BAIR), InstructPix2Pix(FT) 0.98/59.0 (RoboTWin) — every model on a different dataset, no same-task same-dataset evaluation. (TRUST-SIGNAL)
- Stage-2 pairs sampled every 10 frames from same ~400-frame episodes (0→100, 10→110, …) → near-duplicate train/test frames; 0.98 SSIM / ~59 dB PSNR consistent with memorized backgrounds, not prediction skill. (TRUST-SIGNAL)
- Paper claims motion-trajectory precision is the priority, then measures only SSIM/PSNR — trajectory accuracy never quantified. (TRUST-SIGNAL)
- Inference (15 frames): FT model 38 s vs VDM 6–8 min, LVD 10–12 min, Flamingo-3B 15+ min — efficiency claim legitimate within sim task. (OTHER)
- Sports content: a single unsupported "football trajectory" sentence in the conclusion; no sports data, experiments, or results. (OTHER)
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
Tagged inline above.
## Engine-actionable? (yes/no + one-line what)
No — REJECT verdict in-file; generative pixel-frame prediction has no mapping to any GSE quantity, and Garrett's standing video rule requires real footage, making generative sports video a non-starter.
