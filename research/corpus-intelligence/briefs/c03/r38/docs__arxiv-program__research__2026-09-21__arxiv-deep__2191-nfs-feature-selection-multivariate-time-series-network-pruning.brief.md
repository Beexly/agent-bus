# docs/arxiv-program/research/2026-09-21/arxiv-deep/2191-nfs-feature-selection-multivariate-time-series-network-pruning.md
## What it is (1-2 sentences)
A full-text-read ledger (verdict: ADAPT, completed 2026-09-22) of NFS (Gu, Vosoughi & Prioleau 2021, Dartmouth, arXiv:2102.06024v3): a neural feature selector for multivariate time series that reuses per-stream batch-norm affine scales as importance scores under an L1 penalty, selecting top-k streams end-to-end with the downstream task.
## Key metrics/methods (formulas where given, else "not specified")
- Architecture: decomposed convolution — each of d univariate streams through its own temporal CNN, then an aggregating CNN merges streams for the downstream network.
- Importance score per stream = batch-norm affine scale α_i (no extra parameters): z_norm^i = (z_in^i − μ_i)/√(σ_i² + ε); z_out^i = α_i·z_norm^i + β_i.
- Training objective: L = Σ_{x,y} l(f(x,W),y) + γ Σ_i |α_i|, γ = 0.001; l = MSE (regression) or cross-entropy (classification); plus L2 coefficient 0.01 on weights.
- Selection: top-k α_i retained; k set per dataset (OhioT1DM 5/19, Favorita 5/15, PhysioNet 16/37, Face Detection 32/144). Plug-in to LSTM, ResNet, MCNN, MCDCNN, t-LeNet, Transformer downstream.
## Data sources named
OhioT1DM (8 weeks, 5-min, 19 vars, diabetes CGM), Favorita (365 days, daily, 15 vars, retail unit sales), PhysioNet 2012 (48 h, hourly, 37 vars, ICU mortality), Face Detection (1.5 s MEG, 144 channels). All four public. Every model trained 5× and averaged.
## Findings (numbers and facts, not vibes)
- OhioT1DM (5/19 streams): NFS+LSTM RMSE 17.50 vs full 17.80 vs AgnoS 19.52 vs published SOTA NPE+LSTM 17.80 — beats SOTA by 0.30 with 26% of streams. NFS+t-LeNet 22.33 vs 28.05 full (−5.72). Beat AgnoS on 4/6 downstream models, avg margin 0.86 RMSE.
- Favorita (5/15): Δ=2d MAE 4.441 vs 4.877 full vs 5.044 AgnoS; Δ=4d 4.584 vs 4.900; Δ=8d 4.791 vs 5.112. Avg margin over AgnoS 0.60 MAE.
- PhysioNet 2012 (16/37): NFS+t-LeNet AUC 0.9179 vs 0.9045 full vs 0.9032 AgnoS vs GRU-D 0.8424 (+0.075 over prior SOTA); best on all 7 downstream models.
- Face Detection (32/144): NFS+MCDCNN accuracy 0.636 vs 0.629 full vs 0.598 AgnoS vs SNN 0.57; best on all models, avg 0.595 vs AgnoS 0.545.
- Consistent pattern: NFS ≥ full-set on every model/dataset (pruning never hurts, usually helps); supervised gradient selection ≫ unsupervised AgnoS.
- Limitations (from the ledger's adversarial read): α_i couples to batch statistics (noisy on small/non-stationary batches); per-stream independence can prune jointly-useful streams; k is hand-set; MCNN "did not converge" on Face Detection (dropped baseline).
- Ledger verdict: ADAPT — as the supervised pruning stage downstream of the tsflex/signature/TCTO feature factories (GSE spec: per-stream 1D-CNN over trailing-17-game windows, train 2015–2022, accept iff 2024 log-loss improves ≥ 0.003 with k ≤ 40; ~4 engineer-days).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: feature-selection methodology for the engine's time-series feature pipeline; the α ranking itself is a "which stats actually matter" artifact (INFERENCE: could feed QB-BEHAVIOR/TRUST-SIGNAL content once applied to QB/game streams).
## Engine-actionable? (yes/no + one-line what)
yes — reimplement NFS as the learned gate at the end of the feature factory (per-stream temporal CNNs, BN-α importance, L1 γ=0.001), accept iff best top-k improves 2024 spread/total held-out log-loss ≥ 0.003 over all-streams and hand-picked baselines with k ≤ 40.
