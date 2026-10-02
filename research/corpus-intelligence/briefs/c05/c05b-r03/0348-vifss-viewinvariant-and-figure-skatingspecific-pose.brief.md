# arxiv-program/research/2026-09-21/arxiv-deep/0348-vifss-viewinvariant-and-figure-skatingspecific-pose.md
## What it is (1-2 sentences)
Research note on arXiv:2508.10281v1 (Tanaka et al., 2026): VIFSS, a two-stage pose-representation framework for figure-skating action segmentation — Stage 1 view-invariant contrastive pretraining on 3D pose data (JointFormer encoder, virtual-camera augmentation, pose/view embedding split), Stage 2 domain fine-tuning (BiGRU classifier on SkatingVerse), feeding the FACT transformer for temporal action segmentation. Verdict in-file: ADAPT the two-stage recipe (not the skating model) for any future GSE pose-from-video work.
## Key metrics/methods (formulas where given, else "not specified")
- Stage 1 pretraining: JointFormer (transformer 2D→3D lifter) as encoder. Preprocessing: RANSAC ground-plane alignment (lowest-z points, 50% assumed contact), facing-direction alignment (left hip→+x, right hip→−x), normalization (mid-hip centered; mid-hip→chest + chest→neck = 0.4). Augmentation: random virtual-camera 2D projections (azimuth ±180°, elevation ±30°, distance [5,10]), horizontal flip, Gaussian jitter (var 0.01), 1% joint masking to (0,0).
- Embedding split: `z ∈ R^d`, `z = [z_pose; z_view]`, d = d_pose + d_view.
- `L_pose = BarlowTwins(z_pose, z'_pose)`; `L_view = MSE(cossim(z_view, z'_view), cossim(v_c, v'_c))` (v_c unit vectors mid-hip→virtual cameras); `L_R = VarianceLoss(z) + VarianceLoss(z') + KLUniformLoss(z) + KLUniformLoss(z')`.
- `VarianceLoss(z) = (1/d) Σ_i (σ_i²(z) − σ_target²)²`, σ_target² = 1.0; `KLUniformLoss(z) = (1/d) Σ_i (z_i log z_i + (1−z_i) log(1−z_i))`.
- Total: `L_total = w_pose L_pose + w_view L_view + w_R L_R`, w_pose=1.0, w_view=10.0, w_R=1.0.
- Stage 2: encoder + 2-layer BiGRU → temporal max pooling → FC→dropout→ReLU→dropout→FC over 28 classes, cross-entropy. TAS: FACT transformer (Lu & Elhamifar 2024); baselines 2D-pose (DWPose), 3D-pose (MotionAGFormer), scratch-FSS (no pretraining).
- Annotation scheme: procedure-aware — entry = 3 steps before take-off, landing = blade contact through back-outside-edge glide; Set-level 13 labels (6 jump types + 6 entry types + shared landing), Element-level 30 labels (type × rotation).
- Metrics: frame-wise accuracy, F1@{10,25,50,75,90} (average jump 16.25 frames, so F1@90 needs ~15-frame overlap).
## Data sources named
- FS-Jump3D (new): 253 jump sequences, 4 expert skaters (A–D), 10 trials × 6 jump types incl. triples; 12 hardware-synced cameras (Miqus Video, Qualisys); markerless capture (Theia3D), mm-level accuracy; 83 joints/pose (head 16, torso 16, arms 30, legs 34); includes mistakes/falls.
- Pretraining co-datasets: Human3.6M, MPI-INF-3DHP, AIST++ (dance).
- Fine-tuning: SkatingVerse — 1,687 official videos → 19,993 train / 8,586 test clips, 28 classes (23 jump type×rotation + 4 spins + NONE).
- TAS dataset: 371 broadcast videos (Olympics 2010/2014/2018, Worlds 2017–2019), avg 4,265 frames/video, ~382 (8.96%) labeled; test = all 2018 Olympics + 2018 Worlds (year-based split).
- Code promised at https://github.com/ryota-skating/VIFSS (not public as of paper); funding JSPS 21H05300, 23H03282; JST PRESTO JPMJPR20CA.
## Findings (numbers and facts, not vibes)
- Set-level Acc/F1@10/F1@25/F1@50/F1@75/F1@90 — 2D: 78.55/85.12/84.93/84.17/81.52/35.83; 3D: 79.89/87.13/86.94/86.56/82.36/33.36; VIFSS: 89.91/95.44/95.44/94.68/93.16/51.71; scratch-FSS: 86.38/92.48/92.29/91.72/88.87/42.44.
- Element-level: 2D 71.34/78.97/78.97/78.78/75.74/35.39; 3D 70.17/77.71/77.33/76.57/71.62/29.52 (3D worse than 2D — fails on quads); VIFSS 85.82/92.75/92.75/92.56/90.65/49.62; scratch 82.72/89.65/89.65/89.65/86.42/41.03.
- FS-Jump3D ablation (Set F1@50): VIFSS 94.68→92.78 without it; 3D baseline 86.56→82.51.
- Annotation ablation (Set F1@50, proposed vs coarse): 2D 84.17 vs 76.42; 3D 86.56 vs 72.78; VIFSS 94.68 vs 93.93 (coarse labels only 1.50% of frames vs 8.96% proposed).
- Low-data (Fig. 9): at 1% fine-tuning data, no-pretraining models collapse to near-zero F1@50; with pretraining >70% (Set) / >60% (Element).
- Limitations flagged in-file: F1@90 collapse (51.71/49.62) — the fine-grained take-off/landing timing claim fails at the strict metric; metrics exclude entry/landing/NONE (91% of frames unscored); only 4 skaters; skater identity may leak across the year split; full-data pretraining gain only ~3 F1@50 points (94.68 vs 91.72 scratch) — the big story is only in the 1%-data regime; w_view=10.0 vs w_pose=1.0 muddies the "view-invariant" framing; 3D-pose baseline fails on quads (training-diversity bottleneck).
- In-file GSE port: use recipe for viewpoint-robust pose embeddings from multi-angle NFL film (broadcast/All-22/end-zone) for QB mechanics, OL posture, tackling form; exploit low-data finding (small high-quality NFL label set suffices); gate: pretrained encoder beats scratch by ≥5 cross-view accuracy points AND passes a same-action/different-view similarity check the paper never runs.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR — view-invariant pose embeddings are the recipe for QB throwing-mechanics features from heterogeneous film angles (gated on GSE first having a working 2D pose estimator on football).
- OL — same recipe ports to OL posture/lineman mechanics analysis.
- COACHING — procedure-aware annotation (entry→action→landing phases) is a template for phase-labeled football actions (stance→snap→engagement).
- OTHER — low-data lesson: pretraining shines only at 1% labeled data; at full data the gain is only ~3 points, so don't over-invest in pretraining when labels are plentiful.
## Engine-actionable? (yes/no + one-line what)
yes — When GSE builds pose-from-video features, adopt the two-stage view-invariant pretraining + NFL fine-tuning recipe with a small high-quality label set, gated on the in-file cross-view accuracy and similarity checks.
