# arxiv-program/research/2026-09-21/arxiv-deep/2108-multimodal-action-quality-assessment.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2402.09444 (Zeng & Zheng 2024), "Multimodal Action Quality Assessment," proposing PAMFN — a progressive adaptive multimodal fusion network that learns per-segment fusion policies (PolicyNet choosing among ranked FusionNets) over RGB, optical flow, and audio branches. Verdict: ADAPT, with the transferable insight being adaptive per-phase fusion (not naive weighted fusion, which the paper shows can underperform single modalities).

## Key metrics/methods (formulas where given, else "not specified")
- Decoder: Q=W^q f^m, K=W^k f^{ms}, V=W^v f^{ms}; f̄^{ms}=softmax(−QKᵀ/√d)V (negative-sign attention extracting dissimilar/neglected info).
- FusionNet: f̄^cs_{i,t,k} = α^v f^v_{i−1,t} + α^f f^f_{i−1,t} + α^a f^a_{i−1,t}; PolicyNet outputs a_{i,t}=c meaning "enable the top-c ranked FusionNets."
- Metric: Spearman's ρ = Σ(x_i−x̄)(y_i−ȳ)/√[Σ(x_i−x̄)²Σ(y_i−ȳ)²], Fisher z-averaged across actions.
- Training: two-phase (modality branches SGD, fusion AdamW); RGB/flow pretrained+frozen, audio fine-tuned.

## Data sources named
Rhythmic Gymnastics (1,000 videos, 4 apparatuses, ~1m35s @ 25fps; referee difficulty/execution/total scores) and Fis-V (500 figure-skating videos, ~2m50s; TES/PCS from referees). Feature extractors: Video Swin Transformer (Kinetics-600), I3D (Kinetics-400), Audio Spectrogram Transformer (AudioSet). Code: github.com/qinghuannn/PAMFN.

## Findings (numbers and facts, not vibes)
- PAMFN Spearman RG avg 0.819 (Ball 0.757, Clubs 0.825, Hoop 0.836, Ribbon 0.846) vs GDLT 0.765 (+0.054); Fis-V avg 0.822 (TES 0.754, PCS 0.872) vs GDLT 0.761 (+0.061). Prior RGB-only ACTION-NET 0.728/0.744.
- Audio-only unimodal = 0.317 (RG avg) but 0.575 on Fis-V — music correlates with skating scores.
- Weighted late fusion of all three modalities scored 0.703/0.798 — WORSE than PAMFN (0.819/0.822) and sometimes worse than unimodal ("most multimodal methods using Weighted Fusion achieve worse results than unimodality methods on RG").
- Inference 33 ms, 18.06M params (excludes feature-extraction cost).

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Naive weighted fusion underperforming single modalities → cautionary design constraint for any GSE multimodal engine work (TRUST-SIGNAL).
- Per-phase modality weighting idea (pre-snap audio/crowd vs at-catch tracking) as an interpretable "which signal mattered when" readout → potential content/graphic angle (OTHER).
- Audio's value in judged artistic sports is music-rhythm correlation; NFL transfer (crowd noise, snap cadence) is plausible but unproven and likely weaker (OTHER).

## Engine-actionable? (yes/no + one-line what)
Yes — ADAPT template for play-EPA quality regression fusing broadcast-video features, tracking-derived "flow," and stadium audio with phase-anchored fusion policies; pre-registered gate: accept only if adaptive fusion beats both tracking-only (Spearman +0.03) and naive fusion (+0.02) on a 2024 test.
