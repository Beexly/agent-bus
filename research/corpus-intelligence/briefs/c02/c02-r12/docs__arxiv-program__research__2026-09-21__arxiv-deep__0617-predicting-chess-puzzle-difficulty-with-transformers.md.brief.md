# docs/arxiv-program/research/2026-09-21/arxiv-deep/0617-predicting-chess-puzzle-difficulty-with-transformers.md

## What it is (1-2 sentences)
An arXiv:2410.11078v2 paper (IEEE BigData 2024 Cup, 11th place) building GlickFormer, a factorized spatio-temporal transformer that predicts human-perceived chess puzzle difficulty (Glicko-2 rating) from board-position sequences, with uncertainty-aware target sampling during training. The chess architecture is domain-locked, but the label-uncertainty training machinery and the RD-normalized error metric port to GSE's calibration lane.

## Key metrics/methods (formulas where given, else "not specified")
- Puzzle encoding: sequence P = {B_1, B_3, B_5, …, B_N} of every-alternate board positions, B_n ∈ R^{16×8×8}: 12 piece channels (6 mover's + 6 opponent's, mover-perspective) + 4 move channels (previous-move from/to, next-move from/to); N_max = 5.
- Spatial backbone ChessFormer with Smolgen learnable per-square attention bias: A^(j) = Q^(j)(K^(j))ᵀ/√d_k + B^(j), where B^(j) ∈ R^{64×64} is derived from chess-movement topology, not Euclidean distance.
- Two temporal variants: (1) Factorized Encoder (late fusion) — L_t = 16 temporal transformer layers on board embeddings s_n ∈ R^{d_e}; (2) Factorized Self-Attention — spatial and temporal attention interleaved in L = 16 blocks.
- Training objective: MSE L = (1/M)Σ(ŷ_i − y_i)²; standardized labels μ_i = (r_i − 1516)/543, φ_i = RD_i/543; uncertainty-aware target sampling y_i ∼ N(μ_i, φ_i²) clipped to [μ_i − 3φ_i, μ_i + 3φ_i] (data augmentation + regularization, no dropout/weight decay).
- Evaluation metrics: MAE = (1/N)Σ|r_i − r̂_i|; MAZ = (1/N)Σ|r_i − r̂_i|/RD_i (error normalized by per-sample label uncertainty); Accuracy-within-kRD = (1/N)Σ𝟙(|r_i − r̂_i| ≤ k·RD_i), k = 1,2,3.
- Mish activation f(x) = x·tanh(ln(1+e^x)); dims d = 256, d_c = d/32, d_z = 32, d_e = 2d = 512, h = 16 heads.
- Training: TensorFlow 2.13, NVIDIA Quadro RTX 6000 GPUs, 28,000 steps, RMSprop, lr 1×10⁻⁶, ρ = 0.99, batch size 4096; cyclical optimizer-state restarting, cycle length 1000k steps; Adam or higher LRs collapsed to predicting the dataset mean with zero variance.

## Data sources named
4.2 million chess puzzles from Lichess.org (beginner → grandmaster); 4,158,000 train; 42,000 test/validation (~1%). Per puzzle: starting FEN, solution move sequence, Glicko-2 rating r (label; mean 1516, std 543), rating deviation RD (label reliability; most RD in [80, 90], infrequently-solved puzzles RD > 200), metadata (themes, plays, popularity, game tags). Public source; exact 4.2M export not linked (IEEE BigData 2024 Cup competition data).

## Findings (numbers and facts, not vibes)
- **Test MAE (Table I):** ChessFormer baseline 227.00; Factorized Self-Attention 221.80; Factorized Encoder 217.71 (best; −9.29 Elo points vs baseline, ~4.1% relative). [TRUST-SIGNAL, OTHER]
- **Test MAZ (Table I):** baseline 2.68; Self-Attention 2.62; Factorized Encoder 2.57. [TRUST-SIGNAL]
- **Accuracy within 1RD / 2RD / 3RD (Table II, %):** baseline 25.42 / 48.21 / 65.29; Self-Attention 26.13 / 48.54 / 66.08; Factorized Encoder 27.00 / 50.45 / 67.66 — 73% of best-model predictions miss the label's own 1-σ band; MAE 217.71 vs label std 543. [TRUST-SIGNAL]
- **Competition:** 11th place IEEE BigData 2024 Cup; prototype Factorized Encoder MSE — preliminary test set 75,995 vs final test set 158,292 (paper gives no explanation for the >2× gap). [OTHER]
- **Multi-move vs single-move (Fig. 4):** GlickFormer variants beat baseline across multi-move puzzles, except single-move puzzles where Factorized Self-Attention performs worse than the ChessFormer baseline. [OTHER]
- **Label noise sensitivity:** sampling-based target augmentation was sufficient regularization — no dropout or weight decay needed. [TRUST-SIGNAL]
- **Potential label leakage:** input includes "next-move" channels taken from the ground-truth solution sequence; the paper does not address whether this exposes solution structure as input. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Uncertainty-aware target sampling (train on y_i ∼ N(μ_i, φ_i²), clipped ±3φ): TRUST-SIGNAL — port to GSE spread/total regression with per-game label uncertainty (e.g., rating RD or σ ∝ 1/√n_games) as train-time augmentation for noisy early-season labels.
- MAZ metric (error normalized by per-sample label uncertainty): TRUST-SIGNAL — add to the calibration stack for rating/probability outputs alongside ECE.
- Smolgen chess-topology attention / factorized spatio-temporal transformer: OTHER — domain-locked to chess boards, explicitly rejected for NFL porting.
- Accuracy-within-kRD bands (empirical-rule evaluation): OTHER — uncertainty-band framing, not directly a GSE output format.

## Engine-actionable? (yes/no + one-line what)
Yes — the uncertainty machinery only: test per-sample noise-injected training targets on GSE's margin model (nflverse 2015–2021 train, 2022 validate, 2023–2024 test), adopt iff held-out MAE drops ≥ 0.15 points or the MAZ analogue improves ≥ 3% relative without MAE worsening; the transformer architecture itself is not portable.
