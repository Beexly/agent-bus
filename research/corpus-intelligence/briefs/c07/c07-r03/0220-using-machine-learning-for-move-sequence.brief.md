# arxiv-program/research/2026-09-21/arxiv-deep/0220-using-machine-learning-for-move-sequence.md
## What it is (1-2 sentences)
Deep-dive of Rimbot, Jaggi & Barba (EPFL, 2025), a student project on ML for climbing: visualizing bouldering move sequences as animated skeletons, and predicting move order ("beta") from unordered holds via seq2seq and Transformer models. Ledger verdict: REJECT — all three prediction models fail; no transfer path to GSE's NFL product.
## Key metrics/methods (formulas where given, else "not specified")
- Evaluation metric: PPL(x_0,…,x_t) = exp(−(1/t) Σ_i log(p_θ(x_i | x_{<i}))) — Equation (1).
- Visualization: MediaPipe pose (33 landmarks × {x,y,visibility} = 99 features/frame) → static-extremity detection via frame-to-frame distance thresholds → DBSCAN clustering → OpenCV hold drawing; synthesis: interpolate extremity landmarks (~1,500 frames) + scikit-learn linear regression for remaining body landmarks (>99% accuracy claimed, visualization-grade only).
- Prediction model 1: PyTorch encoder–decoder with attention, 512-dim latent, teacher forcing; coords discretized to 0.1 grid; trained 100 epochs (~2 hours Colab GPU).
- Prediction model 2: autoregressive Transformer, coordinate positional embedding, causal mask, cross-entropy + Adam, fixed-length padding with imaginary hold.
- Prediction model 3: encoder layer + linear decoder, single forward pass, no positional embedding, Adam 300 epochs.
## Data sources named
- Swiss Olympic Climbing team competition videos (proprietary, reused from earlier EPFL student projects; no sample size stated; "not very clean").
- 20 videos of a single climber on a standardized Moonboard (public YouTube), manually annotated; 50 random permutations per video → 1,000 sequences. No code/data release stated.
## Findings (numbers and facts, not vibes)
- Model 1 (seq2seq): "disappointing" — "most of the predicted positions are not even holds" (Fig. 5); failures attributed to DBSCAN-constructed holds, noisy labels, 0.1-grid discretization.
- Model 2 (autoregressive Transformer): collapsed to "almost always outputs the padding token no matter which input," because most sequences shorter than max length made padding a constant-accuracy strategy.
- Model 3 (simplified Transformer): accuracy ≈35% on a validation sequence of length 14 padded to 17, but "only 2 non-padding tokens have been accurately predicted" — the rest of the 35% is correctly predicting the 3 padding tokens; "the results look pretty random."
- Body-landmark linear regression: "more than 99%" accuracy claimed on a limited number of training videos (author's claim, sufficient for visualization); linear interpolation yields non-physical artifacts (limb stretching, no simultaneous multi-extremity moves, no dynamic/jump moves).
- Paper's own conclusion: results "are not satisfying and would require more research."
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- None engine-relevant; verdict REJECT (OTHER — filed as program-completeness record only)
## Engine-actionable? (yes/no + one-line what)
no — negative results in climbing; nothing transfers to GSE's prediction/prop/DFS lanes.
