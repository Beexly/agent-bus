# docs/arxiv-program/research/2026-09-21/arxiv-deep/2102-perceiver-general-perception-iterative-attention.md
## What it is (1-2 sentences)
Ledger deep-read of arXiv:2103.03206v2 (DeepMind, 2021) introducing the Perceiver — a Transformer that distills arbitrary high-dimensional multi-modal inputs into a fixed-size latent array via iterative asymmetric cross-attention. Verdict: ADAPT — canonical architecture for fusing NGS tracking + broadcast video + commentary/audio + play-by-play text into one modality-agnostic representation for GSE.
## Key metrics/methods (formulas where given, else "not specified")
- Cross-attention with latent queries Q ∈ ℝ^{N×D}, K,V ∈ ℝ^{M×C}, N ≪ M → O(MN) instead of O(M²); total architecture cost O(MN + LN²) (L = depth).
- Fourier position features: [sin(f_k π x_d), cos(f_k π x_d)], k-th band f_k from K equally spaced frequencies between 1 and μ/2 (Nyquist); x_d ∈ [−1, 1]; concatenated with raw x_d → encoding of size d(2K+1).
- Modality encodings concatenated (not added) for low-dimensional dense modalities.
- Iterative attention: latent array re-queries input with up to 8 cross-attend modules; optional weight sharing across cross-attends and Transformer towers.
- Training: LAMB optimizer, lr 0.004 decayed ×0.1 at epochs [84, 102, 114], 120 epochs (ImageNet); ImageNet config: 8 cross-attends, 512 latents × 1024 channels, 64 Fourier frequency bands, ~45M parameters with weight sharing.
- Video dropout: zero the video stream with 30% probability per example (spectrogram tuned variant: drop spectrogram 10% + turn off SpecAugment).
## Data sources named
ImageNet (ILSVRC 2012, ~1.28M train / 50k val); AudioSet (1.7M 10-second training videos, 527 multi-label classes); ModelNet40 (9,843 train / 2,468 test point clouds, 40 categories). All public. GSE application data named: nflverse (pbp, rosters, injuries), NGS-style tracking (public 2018–2022 Big Data Bowl releases as proxy), game video, beat-writer text embeddings.
## Findings (numbers and facts, not vibes)
- ImageNet top-1 val accuracy: Perceiver (FF) 78.0 vs ResNet-50 77.6 vs ViT-B-16 77.9 (beats both strong baselines).
- Permuted ImageNet: Perceiver (FF) 78.0 vs ViT-B-16 (FF) 61.7 vs ResNet-50 (FF) 39.4 — demonstrates robustness to loss of grid structure.
- AudioSet mAP: Perceiver mel (tuned) A+V 44.2 vs late-fusion SOTA Attention AV-fusion 46.2 (paper concedes early fusion is not yet dominant); Perceiver raw audio A+V 43.5, video-only 25.8, audio-only 38.3–38.4.
- Video dropout alone: spectrogram model A+V 39.9 → 43.2; raw audio 39.7 → 43.5 (>3% mAP gains).
- ModelNet40 top-1: Perceiver 85.7 vs PointNet++ 91.9 (specialized wins; Perceiver beats all generic baselines).
- Limitations noted: ModelNet40 used test-set score for model selection (test-set snooping); paper's own words "with great flexibility comes great overfitting" — weight sharing gave ~10× parameter reduction needed on ImageNet.
- Proposed GSE acceptance gate: multimodal fusion beats tracking-only baseline by ≥0.003 log-loss on held-out 2025 season AND on 2024 backtest, with ECE no worse than baseline +0.005.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Single architecture fusing tracking sequences + video frames + audio/commentary + text into one latent representation for game prediction — the technical basis for total-signal ingestion: OTHER.
- Modality dropout (30% video drop) as a training discipline to prevent dominant-modality overfit — directly applicable to preventing a dominant modality (e.g., tracking) from swamping text signals: OTHER.
- Per-play streaming variant with recurrent latent state updating play-by-play for live in-game win probability: OTHER.
- No QB, coaching, OL, trust-signal, or scheme content present.
## Engine-actionable? (yes/no + one-line what)
Yes — implement a Perceiver-style multimodal fusion model (tracking + video + text + meta with concatenated modality encodings, N=256–512 latents, modality dropout) with win-prob/spread heads calibrated via temperature scaling, gated on ≥0.003 log-loss improvement over tracking-only baseline on held-out 2025.
