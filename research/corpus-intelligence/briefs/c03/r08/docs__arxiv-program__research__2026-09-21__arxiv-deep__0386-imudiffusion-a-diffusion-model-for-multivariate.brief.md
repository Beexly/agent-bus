# docs/arxiv-program/research/2026-09-21/arxiv-deep/0386-imudiffusion-a-diffusion-model-for-multivariate.md
## What it is (1-2 sentences)
Ledger read (full text) of Oppel & Munz (2024), "IMUDiffusion" (arXiv:2411.02954): a DDPM adapted from images to synthesize multivariate IMU (accelerometer+gyroscope) time series, lifting a 4-class wearable human-activity classifier to macro F1 = 1.0 on 8/12 held-out participants; verdict REJECT — GSE has no IMU/wearable data (NGS = RFID position), so nothing transfers, though the minority-class-augmentation technique is noted.
## Key metrics/methods (formulas where given, else "not specified")
- Forward diffusion: x_{k,t} = √(1−β_{k,t}) x_{k,t−1} + √(β_{k,t}) ε, ε ~ N(0,I), t ∈ {N | 0 < t < 3000}, k ∈ {Acc, Gyro}; separate linear schedulers β_Acc = 9e−4, β_Gyro = 6e−4 (Eq. 2).
- Sinusoidal step embedding: TE_t = [sin(t/10000^{i/t_dim}), cos(t/10000^{i/t_dim})], t_dim = 128 (Eq. 1).
- T = 3000 diffusion steps (vs 1000 in Ho et al. — needed for smooth noise→motion transition); 3-block U-Net (Down/Mid/Up, 2 ResNet + 2 multi-head attention each, skip connections), base channels 32, downsampling along time only.
- Training: 4500 epochs, Adam lr 4e−4, smooth-L1 loss (β_L1 = 1.0); ~8 min/class/participant training + 3 min per 128 sequences (RTX 3090); 78.4 GPU-hours total; 3840 synthetic sequences/class/LOSOCV-step.
- Input: single right-thigh IMU at 50 Hz, 160-timestep windows (shift 40); STFT (Hanning, length 22, overlap 20) → 12 freq bins × 80 time steps × 12 channels (6 axes × real/imag); per-axis standardization.
- Downstream classifier: CNN (3 conv 5×1 time-only kernels, MaxPool, 3 linear, dropout 0.3, L2 λ=1e−4); evaluation LOSOCV over 12 participants; conditions 2 Sample (88 real sequences) / Full-Set / 2 Sample + all synth.
## Data sources named
Banos et al. benchmark (33 activities, 17 participants, 9 Movella IMUs; authors use ideal placement, single thigh IMU, 4 classes: Walking 72.55±16.42 s, Running 52.59±5.03 s, Jump Up 11.12±0.91 s [minority, 20 jumps each], Cycling 69.57±15.66 s). 12 participants retained (PIDs 1,2,3,5,8,9,10,11,12,13,14,16).
## Findings (numbers and facts, not vibes)
- 2 Sample Full Synth: macro F1 = 1.0 on 8/12 participants; exceptions PIDs 1, 3, 12, 13; PID 1 dropped BELOW 0.6 — synthetic data hurt (idiosyncratic Cycling style misclassified as Jump Up; cluster analysis Fig. 8).
- Full-Set baseline: 1.0 on 6/12; synth lifted PIDs 2, 5, 9, 16 to 1.0, beating Full-Set. Conclusion's claim: ≥11 ppt improvement except PID 1; abstract claims "almost 30%" in some cases.
- Class-level: 2 Sample baseline confused Running↔Walking in all 12 participants (Running→Walking in 12/12, Walking→Running in 9/12); with synth, confusion in only 1. Minority class Jump Up: zero misclassifications with synth.
- Dose response (Fig. 9): scores fluctuate ±0.3 with <1500 synth sequences/class (PID 14); ≤0.15 at full dose, but 15–20% drops persist for some participants even at 100% dose.
- No GAN/VAE baseline run (asserted, not compared). UMAP: synth sequences form 2 tight clusters vs broad real-data spread — less visual diversity than claimed.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- PID-1 failure: synthetic augmentation degrades the most atypical subject → TRUST-SIGNAL (direct caution for any GSE synthetic-data use: synthetic data bakes in training-distribution bias; atypical cases like injury-return players are exactly where it hurts)
- ±0.3 dose-response fluctuations with <1500 synthetic sequences/class → TRUST-SIGNAL (synthetic-data benefit is unstable at low doses)
- Diffusion machinery duplicates already-absorbed trajectory-diffusion work in the corpus map → OTHER (no new technique contribution for GSE)
## Engine-actionable? (yes/no + one-line what)
No — GSE has no IMU/wearable time series in its stack (NGS is RFID position data); the paper's inputs don't exist in GSE. Retain only the PID-1 lesson as a stress-test principle for any future synthetic augmentation (rare-event/injury classifiers).
