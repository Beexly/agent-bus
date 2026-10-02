# docs/arxiv-program/research/2026-09-21/arxiv-deep/0385-pose2trajectory-using-transformers-on-body-pose.md

## What it is (1-2 sentences)
Pose2Trajectory (arXiv:2411.04501, AlShami, Boult & Kalita 2024): an encoder-decoder Transformer predicting a tennis player's future image-plane centroid from body-pose joints, past trajectory, and ball position — built to automate broadcast camera tracking, not analytics. Ledger verdict: REJECT.

## Key metrics/methods (formulas where given, else "not specified")
- Time2Vec: t2v(τ)[i] = ω_i τ + φ_i if i = 0; F(ω_i τ + φ_i) if 1 ≤ i ≤ k, F = periodic activation.
- MEDE = (1/T) Σ_{t=1}^{T} √((x_t − x̂_t)² + (y_t − ŷ_t)²) — mean Euclidean distance error in pixels.
- Pipeline: Faster R-CNN (players) + TrackNet (ball) + ViTPose (2D joints) → 2-layer Transformer encoder, decoder with masked self-attention + cross-attention, LSTM smoother, teacher forcing, causal mask, MSE loss, Adam (β1=0.9, β2=0.98, ε=1e−9), 30 epochs.
- Four model families: F1 trajectory only; F2 + joints (both players); F3 + decoder mask; F4 + ball position. 74 values/frame. Horizons 50 ms → 1 s.

## Data sources named
- Self-collected TennisTV YouTube dataset (Vienna Open, indoor hard court); each video = one point; 60 fps; per-frame Faster R-CNN boxes, ViTPose 2D joints, TrackNet ball at 640×360. Ball invisible 100+ frames when hit upward — interpolated with polynomial regression using 10 points before AND 10 after the gap. "Available for research" (no URL). Train/test split not stated in the extract.
- Code: https://github.com/alshami52/Pose2Trajectory.git.

## Findings (numbers and facts, not vibes)
- F1 (trajectory only), 500 ms training (MEDE px at 50/100/150/200/250/500 ms / 1 s): 79 / 95 / 110 / 90 / 91 / 102 / 93 — worst family. [OTHER]
- F2 (+ joints): 36 / 50 / 47 / 71 / 84 / 91 / 109 — best at 50/100/150 ms; joints beat trajectory-only 36 vs 79 px at 50 ms (2.2×). [OTHER]
- F3 (+ mask): 46 / 52 / 57 / 53 / 64 / 83 / 86 — mask best at 200/250 ms. [OTHER]
- F4 (+ ball): 58 / 46 / 60 / 66 / 77 / 48 / 67 — best at 500 ms (48) and 1 s (67); ball context wins long horizons 48 vs 91 px at 500 ms (F4 vs F2). [OTHER]
- No external baselines (no Kalman, no Social-LSTM, no published SOTA); the "impressive accuracy" claim is unanchored. [TRUST-SIGNAL]
- Interpolation leakage risk: polynomial ball-gap fill uses 10 points *after* the gap — future information in inputs. [TRUST-SIGNAL]
- Pixel-space MEDE is camera-dependent and not comparable across setups; no field-coordinate error. [TRUST-SIGNAL]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Banked insight (the only transferable finding): pose/joint features beat centroid-only inputs 2× at short horizons; ball context dominates long horizons — if GSE's NGS-replacement video lane ever produces joint positions, trajectory forecasters should ingest joints + ball position, not centroids alone, with a causal decoder mask. (OTHER)
- No GSE product counterpart exists for image-plane centroid forecasting; GSE trajectory work (if any) runs on NGS chip positions in field coordinates. (OTHER)

## Engine-actionable? (yes/no + one-line what)
No — REJECT: tennis camera-automation paper with no GSE product equivalent and an unanchored metric; bank the joints-beat-centroids insight for the NGS-replacement video lane only.
