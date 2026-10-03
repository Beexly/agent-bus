# docs/arxiv-program/research/2026-09-21/arxiv-deep/2071-tts-gan-transformer-time-series-gan.md

## What it is (1-2 sentences)
TTS-GAN (arXiv:2202.02691, Texas State University): a *pure transformer* GAN (no RNN anywhere) for fixed-length multivariate time-series synthesis — generator and discriminator are each 3-block transformer encoders, trained LSGAN-style, positioned as the cheap bulk trajectory generator opposite TimeGrad's diffusion. Read verdict in the file: **ADAPT** — its missing piece (a downstream train-synthetic-test-real utility test) is exactly what an NFL bridge must add.

## Key metrics/methods (formulas where given, else "not specified")
- Architecture: G and D = 3 transformer encoder blocks each (multi-head self-attention + feed-forward MLP with GELU, pre-norm, dropout, residuals — standard Vaswani block); time series treated like a ViT image: input (BatchSize, C, 1, W), W axis split into W/N patches with learned soft positional encoding; generator: noise z ∈ R^100, z_i∼U(0,1) → mapped to sequence → 3 blocks → Conv2D 1×1 output head.
- Losses: d_loss = MSE(D(real),1) + MSE(D(G(z)),0); g_loss = MSE(D(G(z)),1); soft labels and label flipping as stabilization; Adam (β1=0.9, β2=0.999), lr_G=1e−4, lr_D=3e−4, batch 32; trained on 2× Nvidia 1080.
- Fidelity metrics (Appendix 0.B): 7 signal features per channel (median, mean, std, variance, RMS, max, min) → feature vector f; avg_cos_sim = (1/n)Σ cos_sim(f_real, f_synth) (higher better); avg_jen_dis = Σ_i √[(D(f_i,real‖m) + D(f_i,syn‖m))/2], m = pointwise mean (lower better).
- Assumptions: fixed-length sequences; separate GAN per class (no class conditioning inside one model); fidelity = feature-distribution match, not downstream utility.

## Data sources named
Three datasets: (1) simulated sinusoids — 10,000 samples, 24 timesteps, 5 dims; (2) UniMiB SHAR human activity — Jumping (600) and Running (1,572) samples, 150 timesteps × 3 accelerometer channels; (3) PTB Diagnostic ECG — normal (4,046) and abnormal (10,506) heartbeats at 125 Hz (original length 188 zero-padded, timesteps 5–55 used). Code: https://github.com/imics-lab/tts-gan.

## Findings (numbers and facts, not vibes)
- Table 1 — TTS-GAN beats Time-GAN (Yoon et al. 2019) in 7/10 comparisons (5 classes × 2 metrics). TTS-GAN avg_cos_sim: sinusoid 0.9936, Jumping 0.9982, Running 0.9988, Normal ECG 0.9855, Abnormal ECG 0.9768; avg_jen_dis: 0.0980, 0.0870, 0.0497, 0.1861, 0.2911. Loses: Running cos_sim 0.9988 vs 0.9989, Running jen_dis 0.0497 vs 0.0470, Normal ECG cos_sim 0.9855 vs 0.9878.
- Honest read from the file: parity-with-a-slight-edge over Time-GAN, not dominance; margins small — the training/eval protocol matters more than the architecture choice. The "arbitrary length" claim weakly tested: max 150 timesteps.
- Biggest gap: NO TSTR (train-synthetic-test-real) utility test — fidelity scores alone don't prove synthetic data helps a downstream model.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — synthetic sequential data augmentation (18-week team stat trajectories per matchup regime); the 7-feature fidelity protocol (cosine sim + JS distance) is reusable as a cheap acceptance check for any sequential generator.

## Engine-actionable? (yes/no + one-line what)
Yes — build a regime-conditional TTS-GAN (single model with regime class embedding replacing the paper's per-class models) for bulk 18-week trajectory augmentation, gated on: (a) ≥7/10 fidelity wins vs Time-GAN on NFL data, (b) TSTR AUC ≥90% of real-trained on held-out seasons, (c) real+synthetic spread log-loss beats real-only by ≥0.003, (d) ≥100 trajectories/sec on one GPU. REJECT on mode collapse (avg_jen_dis worse than Time-GAN by >20% or TSTR AUC <85% of real).
