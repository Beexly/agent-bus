# arxiv-program/research/2026-09-21/arxiv-deep/0065-sportstraj-a-unified-trajectory-generation-model.md
## What it is (1-2 sentences)
Deep read of Xu & Fu (2025, arXiv:2405.17680v2, ICLR 2025): UniTraj, a single conditional-VAE model treating prediction, imputation, and spatiotemporal recovery as one masked-trajectory generation task, with Ghost Spatial Masking + Bidirectional Temporal Mamba, benchmarked on basketball/soccer and NFL Big Data Bowl tracking. Verdict in file: ADOPT — strongest trajectory-generation paper in the batch; open code/datasets/checkpoints.
## Key metrics/methods (formulas where given, else "not specified")
- CVAE: masked-trajectory encoder (spatial Transformer with GSM + Bidirectional Temporal Mamba with BTS mask-scaling) → latent Z (dim 128) → MLP decoder; total loss = MSE reconstruction + KL-type latent + winner-take-all (only closest of K=20 backpropagated), λ1=λ2=λ3=1. (Printed equations Eqs. 2/4/6–8/11 garbled in extraction — implement from code, not paper math.)
- GSM: max-pool mask over agent dimension → ghost mask embedding, elementwise combined with agent embedding.
- Config: Transformer dim 64, 8 heads, 1 layer; Mamba state dim 64, depth L=4; ~1.77M params; Adam lr 0.001 ×0.9/20 epochs, 100 epochs, batch 128.
- Inputs per agent-timestep: (x, y), relative velocity, visibility mask, category one-hot (ball/offense/defense).
## Data sources named
Curated: Basketball-U (Stats Perform, 93,490 train / 11,543 test after cleaning, 6.25 Hz, feet); Football-U (NFL Next Gen Stats, Big Data Bowl, 2017 weeks 1–6, 91 games: 10,762 train / 2,624 test sequences, yards, 1 ball + 11 offense + 11 defense); Soccer-U (SoccerTrack, 9,882 / 2,448, pixels). Five masking strategies (~50% masked rate). Code: https://github.com/colorfulfuture/UniTraj-pytorch (datasets + checkpoints via Google Drive in README). Raw: NFL Big Data Bowl / nflfootballops GitHub, nextgenstats.nfl.com.
## Findings (numbers and facts, not vibes)
- minADE20: Basketball-U 4.77 vs GC-VRNN 5.81 (17.9% better); Football-U 3.55 vs 4.95 (28.3% better); Soccer-U 94.59 vs 105.87 (10.7% better). OOB lowest among non-trivial methods (Football-U 1.12e-04).
- Ablations: removing GSM → 4.86/3.92/119.43; unidirectional Mamba → 5.86/4.09/106.22; removing BTS → 4.86/3.60/105.47; ghost pooling max beats mean/sum/global/learnable.
- Mamba depth L=4 optimal (L=5: 4.81; L=3: 4.85); temporal swap: full Mamba 4.77 beats LSTM 5.32, VRNN 5.29, Transformer 4.99.
- Generalization: ETH-UCY 0.23/0.36 (slightly worse than MemoNet 0.21/0.35); Traffic-Guangzhou RMSE 3.942 vs BayOTIDE 3.820 (slightly worse, better than CSBI).
- Limitations (stated): simple MLP decoder; fixed agent count (11+11+ball); 2017 NFL data is dated (modern NGS is 10 Hz, different schema).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: trajectory forecasting of all 22 players + ball from first ~0.5 s of a play → expected separation, P(tackle within d yards), route-type confidence — directly feeds receiver/QB process features.
- OL: defender-trajectory generation supports OL-relevant context (pass-rush arrival, pocket-collapse timing) as generative features.
- OTHER: complementary to MambaTrack/MambaMOT (online association) — track with those, generate/impute with UniTraj; replaces Kalman single-track smoothing with joint interaction-aware multi-hypothesis generation.
## Engine-actionable? (yes/no + one-line what)
yes — reproduce on Football-U (gate: minADE20 ≤ 3.73 yards), build a modern-NGS 10 Hz adapter, fine-tune on 2023–2025 NGS, and adopt if it beats the Kalman rollout baseline by ≥15% on time-ordered minADE20; INFERENCE: keep imputation-only use if it wins only on imputation masks.
