# docs/arxiv-program/research/2026-09-21/arxiv-deep/0237-performance-prediction-in-major-league-baseball.md
## What it is (1-2 sentences)
Deep read of arXiv:2206.09654v1 (Sun, Lin, Tsai): LSTM networks predicting MLB players' next-season home run totals from 5-season moving windows, vs linear regression, SVM, random forest, 3-layer NN, and ZiPS. Ledger verdict: ADAPT — port the 5-season moving-window sequence architecture and the elite-underestimation bias analysis to NFL season-long player-total projections; the baseball models do not transfer.
## Key metrics/methods (formulas where given, else "not specified")
- LSTM gates (Eqs. 1–6): f_t = σ(W_hf h_{t−1} + W_xf x_t + b_f); i_t = σ(W_hi h_{t−1} + W_xi x_t + b_i); o_t = σ(W_ho h_{t−1} + W_xo x_t + b_o); C̃_t = tanh(W_hc h_{t−1} + W_xc x_t + b_c); C_t = f_t·C_{t−1} + i_t·C̃_t; h_t = o_t·tanh(C_t).
- RMSE(θ) = √(Σ(y_i − f_θ(x_i))²/k) (Eq. 7); MAE(θ) = Σ|y_i − f_θ(x_i)|/k (Eq. 8).
- Five LSTM architectures (A–E): stacked LSTMs (32–128 cells, ≤3 layers) → dropout/batch-norm → timestep-wise dimension reduction (model D) → FC (512→64) → single ReLU output; 64,737–865,793 params. Also GRU (2×64), BiLSTM (2×64 bidir), AT-LSTM.
- Training: 1,000 epochs, lr 10⁻³, MSE loss, Adam. Data: moving window ({x_t}_{t=j}^{j+4}, y_{j+5}), x ∈ R²¹, 1961 ≤ j ≤ 2014. Hyperparameter finding: >128 cells or >3 layers → overfit; 2 FC layers sufficient.
## Data sources named
5,401 MLB players, 1961–2019, Baseball-Reference.com (21 features/player-year: Age, Height, Weight, Season, HR, Hits, Games, BB, SO, Runs, Doubles, Triples, SB, CS, RBI, SF, SH, IBB, GIDP, HBP, PA); players with <50 PA and 0 HR excluded; ZiPS predictions via FanGraphs. 9,828 train (1961–2017), 184 test (2018), 191 test (2019); expanding-window retraining for 2019.
## Findings (numbers and facts, not vibes)
- 2018: LSTM E best MAE 5.176; LR best RMSE 6.587 (LSTM E 6.908, close); ZiPS 6.704/8.27; RF 7.332/9.404; NN worst 13.293/16.537.
- 2019: LSTM C best MAE 6.138/RMSE 8.269; 4 of 5 LSTMs beat all baselines; ZiPS 6.737/9.381; LR 6.703/8.931.
- Small-interval accuracy: LSTMs ~10%+ exact, ~20% within ±1 (LSTM B 2019: 30.94% within ±1); ZiPS/LR only competitive at ±3 and above.
- Elite failure: predictions concentrate <30 HR; no method correctly predicts 40+ HR players; LSTM conservative on elites (Khris Davis GT 48 → LSTM 21–27).
- Bias asymmetry: 2018 — LSTMs underestimate 75–97 vs overestimate 65–86; ZiPS overestimates 343 vs underestimates 92; NN underestimates 179, overestimates 0. Paper framing: SVM/ZiPS = "maximum power" upper bound, LSTM/RF = lower bound for elites.
- Architecture: fewer cells better (C/E beat A/D); dropout ≈ batch-norm; timestep-wise dimension reduction helps; GRU/BiLSTM/AT-LSTM land between ML baselines and LSTMs.
- Caveats: ZiPS evaluated on different larger samples (449/485 vs 184/191); test sets tiny; height/weight constant over careers; no advanced stats; no uncertainty quantification.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: season-total projection architecture (5-season LSTM) for NFL passing/rushing/receiving yards and TDs; accuracy-within-±k evaluation for season totals (decision-relevant for futures/award markets); elite-bias asymmetry diagnostic as a standard check on GSE season-long projections.
## Engine-actionable? (yes/no + one-line what)
Yes — build 5-season LSTM season-total models (NFL yards/TDs) vs GSE's regression baseline with the full scorecard (MAE/RMSE + ±k accuracy + elite-tier bias); adopt a conservative/aggressive two-model ensemble for futures pricing if the elite-bias diagnostic reveals a correctable asymmetry; reject if LSTM merely matches regression (≥3% MAE win required on ≥2 of 3 yardage categories).
