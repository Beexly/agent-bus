# arxiv-program/research/2026-09-21/arxiv-deep/1039-three-stream-ttstroke.md
## What it is (1-2 sentences)
A three-stream 3D/1D CNN (RGB + optical flow + pose) for fine-grained action classification and segmentation of table-tennis strokes, fusing modalities late with bilinear layers and attention. It adds a 1D-temporal-convolution pose stream to the standard two-stream 3D-CNN on the TTStroke-21 dataset.
## Key metrics/methods (formulas where given, else "not specified")
- Streams: RGB cuboids (120×120×100) + foreground optical flow cuboids through 3D convs (30/60/80 filters 3×3×3, max-pool 2×2×2, attention, FC-500); pose stream: 1D temporal convs over 14×(x,y,score) descriptor (13 joints + center)
- Bilinear fusion y = x₁ᵀAx₂ + b summed across modality pairs, softmax
- Training: SGD+Nesterov 0.5, weight decay 0.05, batch 5, cross-entropy, ≤1500 epochs, warm-restart LR (0.01→1e-5)
- ROI center x_roi = 0.6·f(x_max OF) + 0.4·f(x_gravity); OF normalized v/(μ+3σ) clipped
- Segmentation: sliding-window decision fusion (vote/average/Gaussian, windows 150/150/201)
## Data sources named
TTStroke-21: 129 videos, 1,048 annotated strokes + 106 negatives, 120 FPS, 21 classes (8 services, 6 offensive, 6 defensive, 1 negative); train/val/test 0.7/0.2/0.1; pose via PoseNet/PersonLab (25% miss rate filled with ROI center + score 0)
## Findings (numbers and facts, not vibes)
- Pure classification (test %): Three-Stream 87.3 vs Twin-STCNN 81.9 vs RGB+Flow-I3D 75.9 (I3D overfits: 99.2 train → 75.9 test); three-stream converges faster (epoch 1176 vs 1400+)
- Detection+classification without negative class: 85.6 vs twin 67.9 — up to +18 points from the pose stream
- Negative result: pose alone cannot converge — 22% test accuracy; attention on all three branches slightly worse than on RGB+OF only
- Negative-class frame precision 0.99, recall 0.42 (F 0.59) — model over-fires stroke labels
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: fine-grained play-type classification (RPO vs play-action vs dropback, route types) shares TTStroke's high-intra-class-similarity structure — pose-only fails, always fuse RGB+motion+pose
- OTHER: CV design lessons — bilinear late fusion, warm-restart LR scheduling for small fine-grained sets, sliding-window Gaussian decision fusion for untrimmed broadcast segmentation
## Engine-actionable? (yes/no + one-line what)
Yes — adapt as PlayType-Fusion-GSE: RGB+flow+1D-temporal skeleton streams with bilinear fusion for NFL play-type/route classification; numeric gate: ≥10 points gain on detection+segmentation vs two-stream baseline before keeping the pose stream.
