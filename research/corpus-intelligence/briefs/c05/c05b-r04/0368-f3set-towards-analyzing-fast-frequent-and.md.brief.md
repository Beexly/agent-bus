# arxiv-program/research/2026-09-21/arxiv-deep/0368-f3set-towards-analyzing-fast-frequent-and.md
## What it is (1-2 sentences)
Ledger [0368]: F³Set benchmark + F³ED baseline model (arXiv:2504.08222v2, Liu et al. 2025) for detecting fast, frequent, fine-grained events (1–2 frames, ~1,000 combinatorial types) at ±1-frame tolerance from video. Verdict: ADAPT — port the multi-label event factorization + CTX sequence-refinement architecture (not tennis weights) to frame-precise NFL play-phase event detection.
## Key metrics/methods (formulas where given, else "not specified")
- F³ED architecture: RegNet-Y 200MF + TSM (¼-channel shift) + BiGRU encoder → Event Localizer (FC+Sigmoid dense binary per frame, BCE L_LCL) → Multi-label Event Classifier (FC+Sigmoid over K elements, BCE L_MLC on event frames only) → CTX (BiGRU over predicted event sequence, BCE L_CTX). Composite loss L = L_LCL + L_MLC + L_CTX.
- Equations: L_LCL = (1/N)Σ[p_i·log(p̂_i) + (1−p_i)·log(1−p̂_i)]; Ê_i = Sigmoid(MLC(f_i)) = [ê_{i,1}…ê_{i,K}]; L_MLC = (1/M)Σ[(1/K)Σ e_{i,j}·log(ê_{i,j}) + (1−e_{i,j})·log(1−ê_{i,j})]; (𝔼_1…𝔼_M) = CTX(Ê_1…Ê_M).
- Training: 96-frame clips, stride 2, batch 4, 224×224 crops; foreground loss weight ×5 (events < 3% of frames); AdamW lr 0.001, cosine annealing + 3 linear warm-ups, 50 epochs, ~10 min/epoch on RTX 4090.
- Metrics: Edit score (Levenshtein-based sequence similarity), mean F1 at ±1-frame tolerance — F1_evt (across event types) and F1_elm (across elements).
## Data sources named
- F³Set (tennis): 114 broadcast matches, 11,584 rallies, 42,846 shots; 8 sub-classes / 29 elements / 1,108 event types (G_high); G_low (38 types), G_mid (365 types). Badminton (10 matches, 1,692 shots), table tennis (5 matches, 361 shots), tennis doubles (8 matches, 645 shots).
- Annotation: PySceneDetect → Siamese-network clip selection → expert frame-level annotation (8 annotators, ~1,450 clips, ~30 hrs each). Code+data: https://github.com/F3Set/F3Set (YouTube URLs only).
## Findings (numbers and facts, not vibes)
- F³ED (TSM) best at all granularities: G_high F1_evt 40.3 / F1_elm 75.2 / Edit 74.0; G_mid 48.0/76.5/82.4; G_low 68.4/80.0/87.2. Best baseline TSM+E2E-Spot: 31.4/71.4/68.7 (high).
- Ablations (G_high F1_evt): baseline 31.4 → multi-label 37.9 (+6.5 pp) → +CTX(Transformer) 39.0 → +CTX(BiGRU) 40.3. Dense sampling critical: stride 4 → 25.9, stride 8 → 14.0. Removing GRU → 27.6. Clip-wise I3D 22.7, VTN 14.8. Skeleton ST-GCN++ 25.4, PoseConv3D 20.1 (blind to direction/outcome).
- Semi-F³ transfer (F1_evt/Edit): ShuttleSet 70.7/77.1, FineDiving 77.6/95.1, FineGym 70.9/70.7, SoccerNetV2 48.1/76.6, CCTV-Pipe 37.0/39.5 — F³ED wins everywhere.
- Efficiency: 5.6M params, 10.6 ms/frame on RTX 4090; resolution 336 → 43.2, 448 → 44.4 F1_evt (diminishing returns).
- GPT-4-vision-preview preliminary: read sport/scoreboard/tournament from 12-frame strips but failed fine-grained shot sequencing — evidence against VLM shortcuts.
- Key GSE spec: 2-week NFL F³ taxonomy design + 50-play pilot; acceptance = F³ED beats multi-class baseline by ≥5 pp F1_evt with zero invalid sequences; reject if annotation exceeds 30 min/play.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **SCHEME**: fine-grained intra-play event decomposition (snap→dropback→release→catch→tackle) via composable multi-label taxonomy — the event grammar inside plays.
- **QB-BEHAVIOR**: dropback depth / throw side / target zone / placement elements map to QB execution primitives.
- **OTHER** (CV/ML method): CTX learned sequence-refinement pattern — enforce play-grammar validity (e.g., touchdown only after catch/run) in any GSE event pipeline; multi-label factorization to avoid combinatorial class explosion; foreground-loss weighting ×5 for sparse events; stride-2 dense sampling is load-bearing.
## Engine-actionable? (yes/no + one-line what)
yes — build the NFL F³ taxonomy (elements: personnel, formation family, motion, snap type, dropback depth, throw target zone, catch result, tackle type) and train F³ED end-to-end from G_low upward, per the §11 spec; annotation toolchain pattern is reusable.
