# arxiv-program/research/2026-09-21/arxiv-deep/2113-skating-mixer-long-term-audio-visual-mlps.md
## What it is (1-2 sentences)
Research ledger for Skating-Mixer (arXiv:2203.03990), a pure-MLP multimodal architecture for long-sequence action quality assessment that processes figure-skating videos clip-by-clip, carrying a learnable [MEM] token forward through a Memory Recurrent Unit (MRU) with linear (not quadratic) complexity. Ledger verdict: ADAPT as game-level recurrent modeling — treat a GAME as the long video, quarters/drives as clips, and carry a persistent [MEM] "game-state" token (momentum, adjustments, fatigue) forward instead of aggregating independent per-play predictions.
## Key metrics/methods (formulas where given, else "not specified")
- Eq. 1: [MEM]_{t−1} → two bottleneck MLPs → A_t^{prev}, V_t^{prev}; Ã_t = [A_t^{prev} A_t] + PE_a, Ṽ_t = [V_t^{prev} V_t] + PE_v (memory-conditioned clip features).
- Audio-Mixer / Video-Mixer: separate MLP-Mixer blocks (token-mixing + channel-mixing MLPs) fuse along the time dimension per modality.
- Multimodal Mixer: [CLS] concatenated with Â_t, V̂_t → cross-modal mixing; [CLS]_t represents the clip.
- Memory-Mixer: [CLS]_t concat [MEM]_{t−1} → updated [MEM]_t (skip connections mitigate vanishing/exploding gradients without LSTM gates).
- CLS Mixer (Eq. 2): C̃ = [CLS_1 … CLS_T] + PE_c → averaged and concatenated with [MEM]_T → linear layer → score.
- Bi-directional Mixer: backward pass (last clip first); average forward/backward [CLS] per clip and [MEM] for scoring. Front-ends: TimeSformer (video patches) + AST (audio spectrogram). GSE transfer: quarter-level features (score diff, EPA totals, pace, turnovers, injuries) with [MEM] token; bidirectional variant answers "when did the game actually get decided."
## Data sources named
- FS1000 (new, collected by authors): 1,000+ figure skating videos, 8 program types, 7 scores per video (TES, PCS, SS, TR, PE, CO, IN); largest/most diverse skating dataset at the time.
- Fis-V: 500 videos (400/100 split), TES + PCS labels. Beijing 2022 Winter Olympics competitions as real-world demonstration.
## Findings (numbers and facts, not vibes)
- Fis-V: MSE TES 19.57 / PCS 7.96 (best; next S-LSTM 22.31/10.21, MS-LSTM 22.64/9.84); Spearman TES 0.68 / PCS 0.82 (S-LSTM 0.57/0.74, MS-LSTM 0.59/0.73). Baselines: C3D-LSTM, MSCADC, M-LSTM, S-LSTM, MS-LSTM, M-BERT.
- FS1000: MSE TES 81.24 / PCS 9.47 (best; S-LSTM 83.79/10.90); Spearman across all 7 metrics 0.88/0.82/0.80/0.81/0.80/0.81/0.81 — best on every metric vs. all baselines.
- Efficiency claim: MLP-Mixer blocks give linear complexity vs. Transformer quadratic — trainable on the small datasets where ViTs "hardly" work.
- Limitations from file: single [MEM] vector is a narrow bottleneck for a 5-minute video (information loss unquantified); no ablation of memory vs. plain clip-averaging in extracted text; judge-score bias unexamined; FS1000 availability/code unverified.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — game-level path-dependence modeling: per-play models assume conditional independence given features; the MRU explicitly models path dependence (a 14-point comeback has a different memory trace than a wire-to-wire lead with the same per-play EPA sum); the backward-memory variant identifies "when the game actually got decided" — candidate "game-deciding moment" content.
## Engine-actionable? (yes/no + one-line what)
Yes — build "Game-Mixer": quarter-level feature vectors (score diff, EPA totals, pace, turnovers, injuries) with [MEM] recurrence predicting final winner at each quarter boundary vs. a memoryless logistic baseline and per-play EPA aggregation (train 2022–2023, test 2024); accept iff Game-Mixer beats the memoryless baseline by ≥0.02 log-loss at halftime on 2024 games AND the no-memory ablation is worse; improvement experiment: event-triggered memory writes — a learned write gate [MEM]_t = g_t·Memory-Mixer + (1−g_t)·[MEM]_{t−1} so only high-leverage events (turnovers, 4th-down conversions, injuries, scores) rewrite game state, preventing memory washout over a 60-minute game and making writes interpretable.
