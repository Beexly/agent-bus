# arxiv-program/research/2026-09-21/arxiv-deep/1032-cross-block-fine-grained-semantic-cascade.md
## What it is (1-2 sentences)
A full-text read ledger for arXiv:2404.19383 (Liu et al., FG 2024), "Cross-Block Fine-Grained Semantic Cascade for Skeleton-Based Sports Action Recognition" — a plug-and-play module (CFSC) that cascades shallow-block features into deeper GCN blocks via short temporal convolutions to capture fine-grained, short-timescale joint motion in sports actions. The ledger gives a concrete tuning recipe for bolting CFSC onto GSE's skeleton GCN for technique classification (QB releases, route-running, tackling form).
## Key metrics/methods (formulas where given, else "not specified")
- ST-GCN spatial conv: f_out = Σ_k W_k (f_in A_k) ⊙ M_k (Eq 1).
- Cascade: F_v = TC_v(f_v ⊕ λ·F_{v−1}) (Eq 2), ⊕ = element-wise addition (beat avg/max/concat/multiply); TC_v = temporal convolution kernel (K_t,1) with stride aligning temporal dims; shallowest level = direct temporal convolution.
- Normalization: F'_M = (F_M − F_mean)/F_std (Eq 3) → ReLU → auxiliary feature F_dis; F_dis ⊕ f_10 (final block output) → global average pooling → softmax. Trained jointly with backbone; single-stream (joint+bone fusion degraded results on fast actions).
- Block selection criteria: cover ≥2 of {shallow, medium, deep}; avoid adjacent blocks; moderate M. HD-GCN joint stream best {1,10}, bone stream best {4,7,10}.
- Training: SGD Nesterov 0.9, weight decay 0.0004, cross-entropy, 90 epochs (5 warm-up), cosine LR 0.1→0.0001, batch 16.
## Data sources named
FD-7 (new, authors promise public release): 1,193 fencing clips, 20 professional athletes (10F/10M), 1920×1080@30fps, 1–5 s, 7 classes (step forward 192, two-step forward 188, step backward 189, thrust in place 114, lunge in place 179, step forward lunge 179, sprint 152), OpenPose 18 keypoints, T=150, train/val split by different athletes. FSD-10 (public): 1,484 figure-skating videos (2017–18 championships), 10 classes, 3–50 s, OpenPose 25 keypoints, T=1500. No code URL in the paper.
## Findings (numbers and facts, not vibes)
- FD-7 top-1 deltas: HD-GCN joint 93.6→95.7 (+2.1), bone 98.2→99.6 (+1.4); CTR-GCN joint 79.3→91.1 (+11.8), bone 52.1→57.5 (+5.4); 2S-AGCN joint 61.8→78.2 (+16.4), bone 51.1→63.6 (+12.5). FSD-10: HD-GCN joint 85.9→88.2 (+2.3), bone 88.2→90.1 (+1.9).
- λ sweep: joint peaks at λ=0.3, bone at λ=0.5 (rise then decline); auto-learned λ FAILED (joint 89.3, bone 94.6) — fixed λ required.
- K_t: joint best K_t=7 → 98.2%; bone best K_t=3 → 99.6% (degrades to 96.4 at K_t=11) — short kernels for fast sports motion.
- Blocks: joint {1,10} 97.9; bone {4,7,10} 99.6; 4-block {1,4,7,10} worse (94.3/97.5) — redundancy.
- Feature viz: holding-hand response in step-forward-lunge rose 0.099→0.279; foot responses strengthened in two-step-forward.
- Limitations: gains on strong HD-GCN modest (+1.4–2.3pp); big jumps only on older weak backbones; no latency/FLOP analysis; FD-7 is lab-recorded standardized actions, not real bouts; FD-7 validation-only (no separate test set).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (computer vision/engine): backbone-agnostic +1.4–2.3pp lever for any skeleton-based fine-grained technique classification GSE runs (throwing mechanics, route-running, tackling form, swings), with a concrete tuning recipe (fixed λ 0.3–0.5, short K_t 3–7, spaced blocks, single stream).
- QB-BEHAVIOR: QB release-type classification is a named GSE application — CFSC's short-timescale joint modeling fits release mechanics precisely.
## Engine-actionable? (yes/no + one-line what)
Yes — bolt CFSC onto GSE's skeleton GCN per the tuning recipe (blocks {shallow, mid, deep}, λ sweep 0.1–0.9, K_t 3–7, single stream, Eq-3 normalization + ReLU auxiliary feature); numeric gate: ≥+1.5pp top-1 on strong-backbone setting with ≤10% inference-cost increase, else drop.
