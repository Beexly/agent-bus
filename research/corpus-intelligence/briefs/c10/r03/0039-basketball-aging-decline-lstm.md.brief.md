# arxiv-program/research/2026-09-21/arxiv-deep/0039-basketball-aging-decline-lstm.md
## What it is (1-2 sentences)
Ledger read of Yao et al. (2025), arXiv:2509.25858: a two-stage NBA aging-curve model — autoencoder + K-means career-trend clustering (Stage 1), then a cluster-conditioned LSTM predicting Box Plus/Minus at ages 29–31 from the ages 22–28 sequence (Stage 2). Verdict ADAPT: the cluster-conditioned forecasting design ports to NFL age curves for props/DFS; the fitted NBA numbers do not transfer.

## Key metrics/methods (formulas where given, else "not specified")
- Autoencoder: 336-dim input (48 features × 7 years) → dense 128 (batch norm, dropout 0.1) → 64 (ReLU); embeddings Z ∈ ℝ^(N×64); K-means on embeddings, optimal K=2 by Silhouette (K=2 → 0.16, K=3 → 0.15, K=4 → 0.12, K=5 → 0.11, K=6 → 0.10, K=7 → 0.10, K=8 → 0.09).
- Reconstruction loss: L = (1/N) Σᵢ ‖xᵢ − decoder(encoder(xᵢ))‖₂².
- Stage 2: LSTM(64) over the 7-year sequence, concatenated with one-hot cluster vector; dense 32 → 16 (ReLU); Adam with early stopping (converges before 100 epochs); outputs 3 values = predicted BPM at ages 29, 30, 31.
- Baselines: linear/ridge regression, random forest, SVR, last-value, MLP, GRU, 1D CNN, CNN+LSTM, BiLSTM, standard LSTM without clustering.

## Data sources named
Kaggle dataset "NBA history | seasonal data 1995-2023" (B. F. Aas); 177 NBA players with complete career trends (141 train / 36 test); 222 players for star/regular category analysis (23 stars = 10.4%, 199 regulars = 89.6%). Named features: PTS, REB, AST, BPM, PER, TS (48 total, full list not enumerated).

## Findings (numbers and facts, not vibes)
- Proposed: test MAE 1.42 / R² 0.55 — best on both. Random Forest: 1.48 / 0.49; SVR: 1.81 / 0.17; Last Value: 1.71 / 0.36; GRU: 1.82 / 0.23; BiLSTM: 1.84 / 0.21; standard LSTM: 1.84 / 0.19; MLP: 1.93 / −0.01; CNN+LSTM: 1.93 / 0.03; 1D CNN: 2.14 / −0.20; Ridge: 5.63 / −7.46; Linear: 6.66 / −10.56.
- Paper-claimed deltas vs. random forest: 4.05% MAE reduction, 12.24% R² improvement; vs. standard LSTM: 22.83% MAE reduction, 189.47% R² improvement (paper arithmetic, not independently recomputed).
- Star players (n=23): standard LSTM MAE 4.83, R² −4.15; proposed MAE 1.78, R² 0.23. Regular players (n=199): standard LSTM MAE 1.96, R² −0.07; proposed MAE 1.45, R² 0.39. MAE reductions: 63.1% (stars), 26.0% (regulars) — computed from the table, consistent with paper claims.
- Unclustered LSTM collapses to near-zero predictions for everyone (LeBron at ages 29/30/31: actual 8.80/7.10/9.00 vs. standard LSTM 0.30/0.24/−0.29 vs. proposed 7.00/5.89/5.55; Curry actual 7.70/6.60/3.90 vs. proposed 6.35/5.43/4.71).
- Caveats from file: 36-player test set; silhouette 0.16 (very weak clustering, authors concede); not stated whether Stage 1 clustering was fit on train only (leakage risk); 177 vs. 222 sample denominator inconsistency unexplained; NBA aging structure (peak ~27) does not transfer to NFL positions.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Cluster-conditioned forecasting beats unconditioned sequence models on aging trajectories — core design insight: a plain sequence model collapses to the mean; conditioning on a learned career archetype preserves individual trajectory shape (OTHER).
- Elite (star) players have structurally different career-trend curves than regular players; biggest gains concentrated on the elite subsample (OTHER).
- Silhouette 0.16, test n=36, possible clustering-stage leakage, and omitted age-regression baseline — treat absolute numbers as unreliable; relative ordering vs. deep-learning baselines is the credible part (TRUST-SIGNAL).

## Engine-actionable? (yes/no + one-line what)
Yes — port the archetype-conditioned forecaster to NFL: autoencoder + K-means career-archetype clustering on nflverse seasonal efficiency time series by position, then archetype-conditioned LSTM predicting next-season efficiency, as age adjustments in prop projections and DFS content; file gives a full implementation spec (§11), reproducible test (§12), and acceptance gate (§13) including an improvement experiment (supervised/DEC-style joint clustering+forecasting).
