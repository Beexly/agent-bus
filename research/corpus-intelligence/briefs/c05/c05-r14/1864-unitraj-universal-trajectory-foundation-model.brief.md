# arxiv-program/research/2026-09-21/arxiv-deep/1864-unitraj-universal-trajectory-foundation-model.md
## What it is (1-2 sentences)
UniTraj (Zhu et al. 2024, arXiv:2411.03859): an MAE-style trajectory foundation model (~2.38M params, 8 RoPE encoder + 4 decoder blocks, d=128) pretrained with four masking strategies on WorldTrace (2.45M trajectories, ~8.8B GPS points, 70 countries) and evaluated zero-shot across regions, sampling rates, and four downstream tasks.
## Key metrics/methods (formulas where given, else "not specified")
- Dynamic resampling: R(n) = R_min if n ≥ n_max; = 1 if n ≤ n_min; = 1 − (1−R_min)φ(n) otherwise, with φ(n) = ln(n−n_min+1)/ln(n_max−n_min+1).
- Four masking strategies (mask ratio r): (a) random, (b) contiguous blocks of size b, (c) key-points via RDP (I_key = {p_k | d_max(p_k, overline{p_1 p_n}) > ε}), (d) last-N (prediction-style).
- Tokenizer: spatial normalized to origin (x_i,y_i) = (lng_i−lng_1, lat_i−lat_1) → Conv1D to h_i^s ∈ R^d; temporal Δt_i → Linear to h_i^t ∈ R^d; h_i = h_i^s + h_i^t; RoPE θ_i = i / 10000^{2k/d}.
- Training loss: L = (1/|I|) Σ_{i∈I} ||f_{θ,φ}(τ̃)_i − τ_i||² over masked positions only; Adam lr 1e-3, 200 epochs, batch 1024, on A100/L40s.
- Assumptions: masked coordinate reconstruction is a sufficient proxy for representation quality; mobility patterns transfer across regions; adapter heads suffice per task.
## Data sources named
WorldTrace (new, open ODbL via OpenStreetMap GPX): 1M train / 100K test high-quality subset; avg 358 points/trajectory, ~6 min, 5.73 km, 48.0 km/h. Eval: Chengdu (>1M taxi), Xi'an (millions of taxi), GeoLife (182 users), Grab-Posisi (84K ride-hailing), Porto.
## Findings (numbers and facts, not vibes)
- Recovery MAE (meters): Xi'an — UniTraj(ft) 6.50 vs TrajFM 18.86, DeepMove 27.31; GeoLife — UniTraj(ft) 23.23, "nearly halving TrajFM's error"; zero-shot UniTraj already beats all traditional baselines on every dataset.
- Prediction (5 future points): Chengdu — UniTraj(ft) MAE 28.78 / RMSE 32.44 vs TrajFM 77.82/80.48, DeepMove 36.31/39.10; zero-shot best on all three datasets.
- Classification: GeoLife — UniTraj(ft) 78.8%, head-only 71.3%; Grab-Posisi — UniTraj(ft) 79.3%, head-only 64.2%.
- Generation: Chengdu density error 0.0039 → 0.0037 (5.1% reduction); cross-city Chengdu→Xi'an 0.0171 → 0.0152 (11.1%).
- Data study: MAE decreases with scale; full 2.45M slightly higher MAE than curated 1M (quality > raw scale at margin). Encoder blocks: MAE ~40 at 2 → ~10 at 8, no gain beyond 8; mask ratio 50% best (5–10% under-trains, 75% destroys context).
- File's ledger verdict: ADAPT — the most complete MAE trajectory recipe; needs adaptation from single-agent GPS to multi-agent play data; masking strategies map to NFL regimes (random → dropped frames, block → occlusions, RDP key-points → route breaks, last-N → ball-carrier forecasting).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: NFL tracking foundation model — pretrain MAE on unlabeled 10Hz play-agent trajectories (~1M+, comparable to WorldTrace's 1M subset); tokenizer adapted to snap-relative coordinates + speed/accel channels; downstream heads for play-embedding retrieval, occlusion completion, receiver-separation-at-catch props.
- SCHEME: beyond-the-paper extension — cross-agent masking (reconstruct one player's trajectory from the other 21 + ball); nearest-neighbor retrieval grouping plays by coverage concept, testable against FTN charting labels.
- QB-BEHAVIOR: ball-carrier/route trajectory forecasting heads.
## Engine-actionable? (yes/no + one-line what)
Yes — implement the UniTraj-style MAE recipe on NFL 10Hz tracking with cross-agent masking; ADOPT iff recovery MAE ≥ 30% below linear interpolation OR frozen-encoder + linear-head outcome classification ≥ 8pp above a from-scratch GRU on held-out weeks.
