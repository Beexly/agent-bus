# arxiv-program/research/2026-09-21/arxiv-deep/2072-diff-mts-conditional-diffusion-mts.md
## What it is (1-2 sentences)
Research ledger on Diff-MTS (arXiv:2407.11501), a conditional diffusion model for multivariate time-series generation with classifier-free Ada-MMD condition-consistency regularization and a TDR-UNet temporal-decomposition denoiser; verdict ADAPT as the lane's primary trajectory generator for season-long synthetic panels.
## Key metrics/methods (formulas where given, else "not specified")
- L_diff = (1−ω)L_{θ,xc} + ω·L_MMD(ε, ε_θ(x_t,t|x_c)) (Eq. 11): Ada-MMD regularizer with learnable ω aligning conditional/unconditional noise distributions; cosine noise schedule (s=0.008); TDR-UNet: X_Trend = AvgPool(Pad(X)), X_Peak = MaxPool(Pad(X)), conv-attention between UNet encoder/decoder.
- Evaluation suite: discriminative score (2-layer LSTM real-vs-synthetic accuracy, lower better), predictive score (train LSTM on synthetic, test on real, RMSE), DTW and Fréchet distances, plus Ada-MMD and TDR-UNet ablations.
## Data sources named
NASA C-MAPSS turbofan degradation (FD001–FD004, 14 sensors, generation lengths 24/48/96) and FEMTO bearing wear (lengths 80/160/320); baselines TTS-GAN, TimeGAN, GAN-LSTM, SSSD, DiffWave, TabDDPM; no code link in paper.
## Findings (numbers and facts, not vibes)
- C-MAPSS FD001-96: discriminative 0.611 vs DiffWave 0.904 (−32.4%) vs TimeGAN 0.935 vs TTS-GAN 0.987 (GAN samples near-perfectly distinguishable); predictive FD003-96 15.554 vs DiffWave 28.433 (−45.2%).
- DTW/Fréchet (avg): 5.000/1.317 vs DiffWave 5.442/1.412 vs GAN-LSTM 10.157 vs TTS-GAN 484.327.
- Ablations: removing Ada-MMD degrades predictive scores on all 4 FD sets (e.g., FD004-48 28.926 vs 27.072); TDR-UNet avg disc 0.726 vs original UNet 0.785 (−7.5%).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: conditional-consistent whole-season trajectory generation for the engine — sample full 18-week × 32-team metric panels conditioned on pre-game regime (Elo/strength tier), feeding season-simulation and late-season spread modules; NFL analogs of the paper's condition x_c (home/away, rest edge, dome, divisional).
## Engine-actionable? (yes/no + one-line what)
Yes — reimplement Diff-MTS on nflverse team-week panels and gate on discriminative <0.75, predictive RMSE within 15% of real-trained, and condition consistency ≥80%; it directly benchmarks above TabDDPM (2062) for sequential generation.
