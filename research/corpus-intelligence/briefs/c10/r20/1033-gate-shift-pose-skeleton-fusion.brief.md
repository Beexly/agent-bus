# arxiv-program/research/2026-09-21/arxiv-deep/1033-gate-shift-pose-skeleton-fusion.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2503.04470 (Bianchi & Lanz 2025), "Gate-Shift-Pose": adds skeleton pose (YOLO11-x-pose) to a Gate-Shift-Fuse RGB action-recognition network via early-fusion (Gaussian heatmap as 4th input channel) or late-fusion (two-stream + multi-head attention) for binary athlete fall classification in figure skating. Ledger verdict: ADAPT, with a numeric gate.
## Key metrics/methods (formulas where given, else "not specified")
- Early-fusion: X = [RGB; H(keypoints)], H = Σ_j exp(−||p−k_j||²/2σ²) (formalized from text, no numbered loss equations in paper).
- Late-fusion: z = MHA(concat(L2(f_RGB), L2(f_pose))), pose MLP 34-dim → FC64 → FC128 → FC128, then FC halve-dim → BN → ReLU → dropout twice (FC1 64, FC2 32) → FC classifier; cross-entropy loss.
- Backbones ResNet18/ResNet50 (ImageNet init); SGD momentum 0.9, wd 5e-4, LR 0.01 cosine annealing, batch {4,8}, segments {16,32}, 120 epochs.
- Design rule from results: early-fusion wins with large backbones, late-fusion wins with light backbones.
## Data sources named
- FR-FS dataset: 417 video samples (276 fall, 141 non-fall), 103 frames each, from the FIV dataset + PyeongChang 2018 Winter Olympics footage.
- YOLO11-x-pose (COCO, 17 keypoints; mAP 69.5% @ 0.5:0.95, 91.1% @ 0.5; 58.8M params); keypoints precomputed to disk.
- Project page: https://edowhite.github.io/Gate-Shift-Pose.
## Findings (numbers and facts, not vibes)
- ResNet18: RGB-only GSF best 67.79% → early-fusion best 81.25% → late-fusion best 95.19% (+27.4pp, ~40% relative per paper).
- ResNet50: RGB-only GSF best 81.73% → early-fusion best 98.08% (+16.35pp, ~20% relative) → late-fusion best 87.02%.
- Training notes: batch 4 > batch 8 on this small dataset; 32 segments > 16 consistently.
- Leakage flag: train/val split protocol not described (same athletes may appear in both splits); baselines likely undertrained, inflating gain claims.
- Numeric gate (ledger): both GSP variants must beat RGB-only by ≥10pp on athlete-disjoint folds, and the fusion/backbone ranking must hold, before the design rule ships.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Gaussian-heatmap-as-4th-channel is a cheap way to inject pose into any 2D video CNN without a graph network — applies to GSE binary technique-event classifiers (clean vs awkward landing, injury cues from broadcast).
- OTHER: fusion-strategy-vs-backbone rule (early-fusion heavy backbones, late-fusion light) — directly usable design rule for GSE RGB+pose classifiers; ResNet18 late-fusion for edge/latency-constrained deployment.
- TRUST-SIGNAL: split-hygiene warning — athlete-disjoint 5-fold CV required before trusting gains.
## Engine-actionable? (yes/no + one-line what)
yes — for any GSE binary motion-event classifier on broadcast clips: ResNet50-GSF early-fusion 4-channel when compute allows, ResNet18 late-fusion attention stream for edge; poses precomputed offline with YOLO11-pose, sweep segments {16,32} × batch {4,8}.
