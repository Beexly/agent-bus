# arxiv-program/research/2026-09-21/arxiv-deep/0030-tracknetv5-residualdriven-spatiotemporal-refinement-and-motion.md
## What it is (1-2 sentences)
A full-text deep read of arXiv:2512.02789v4 (Tang et al., 2026) — TrackNetV5, a real-time CV architecture for high-speed small-ball (tennis/badminton) tracking that fixes TrackNetV4's directional ambiguity via signed polarity decoupling and residual spatio-temporal refinement; verdict REJECT for GSE — pure CV infrastructure with no sports-analytics modeling or NFL applicability.
## Key metrics/methods (formulas where given, else "not specified")
- MDD (Motion Direction Decoupling): P⁺(Δ)=ReLU(Δ), P⁻(Δ)=ReLU(−Δ); attention A = 1/(1+exp(−k(α)(|x|−m(β)))) with k(α)=5.0/(0.45|tanh(α)|+ε), m(β)=0.6·tanh(β); 13-channel input X_in = Concat(I_{t−1}, A_{t−1,t}, I_t, A_{t,t+1}, I_{t+1}).
- R-STR: residual correction Δ from a TSATTH head (TimeSformer-style factorized attention + PixelShuffle); H_final = σ(Draft_MDD + Δ); stochastic context masking (dropout ρ=0.1 on drafts, training only).
- Loss: weighted BCE with Gaussian ROI mask Y=1 inside radius r (r=30 TrackNetV2, r=40 Loveall); TP criterion = predicted center within 4 px of ground truth.
- Training: PyTorch, single RTX 4090, AdamW, batch 2, lr 1e−4, 30 epochs, multi-step decay γ=0.1 at epochs 20/25; 114 FPS inference (38.12×3) on NVIDIA T4; 14.77M params vs 11.33M (V4); +3.7% FLOPs (117.09G vs 112.89G).
- TrackNetV5 results: Acc 0.9733, Precision 0.9923, Recall 0.9797, F1 0.9859 — beats V4 F1 0.9581 by 2.78%; FN 1,317 (V4) → 344 (V5), a 73.9% drop; Loveall F1 0.9878 vs V4 0.9731.
## Data sources named
TrackNetV2 public dataset (tennis broadcast, 1280×720, 17,682 eval frames, 7:3 split, resized 512×288); internal proprietary Loveall dataset (1920×1080 low-angle, 11,313 eval frames, more occlusions).
## Findings (numbers and facts, not vibes)
- Ablation: V2+MDD → F1 0.9677→0.9695, FN 937→861; V2+R-STR alone → F1 0.9866 (slightly above final V5 0.9859, but 65 more FPs and precision 0.9885 vs 0.9923) — combined V5 chosen for the precision/robustness trade-off.
- No code or weights released; no seeds, no hyperparameter search, single-run numbers, no variance; proprietary Loveall generalization claim unverifiable.
- Tennis/badminton ball-only; nothing demonstrated on player tracking or team sports with large occluding objects.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: none for the predictive engine. If GSE ever built an in-house video pipeline (out of scope), TrackNetV5 would be a ball-tracker candidate — but NGS already provides tracked NFL trajectories. (Note: this REJECT is consistent with Garrett's CV lane reality — vision plumbing, not engine signal.)
## Engine-actionable? (yes/no + one-line what)
No — correctly rejected: object tracker, no prediction, no NFL applicability.
