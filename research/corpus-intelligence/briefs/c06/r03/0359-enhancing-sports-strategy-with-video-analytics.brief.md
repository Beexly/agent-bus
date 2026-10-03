# arxiv-deep/0359-enhancing-sports-strategy-with-video-analytics.md
## What it is (1-2 sentences)
Dissertation-length tennis-doubles framework (arXiv:2507.02906, Chen Jia Wei 2025): a standardized annotation taxonomy, a React/Flask annotation tool (manual + semi-automated), and transfer-learned CNN / pose-GCN classifiers for shot type, side, direction, formation, and outcome — a full pipeline for producing labeled tracking-style data from video. Verdict in file: ADAPT — the annotation-tool + taxonomy + transfer-learning pipeline is a working blueprint for a GSE "labelling factory"; the tennis results themselves do not transfer to football.
## Key metrics/methods (formulas where given, else "not specified")
- Single-Pose GCN propagation: H^(l+1) = σ(D^(−1/2) A D^(−1/2) H^(l) W^(l)) (17-node skeleton graph).
- MotionAGFormer 2D→3D (exploratory, not integrated): input X ∈ R^(T×J×3); loss = position loss + velocity loss.
- Classifiers: Single/Double-Pose GCN vs Single/Double-Image CNN (ResNet-50 ImageNet backbone, 224×224, differential LR 1e-5 backbone / 1e-4 head, class-weighted CrossEntropy, AdamW, early stopping patience 20); Double-Image = dual ResNet-50 2048-d concat + MLP 512/ReLU/dropout 0.3.
- Detection/tracking: GroundingDINO zero-shot phrase grounding ("tennis player") → YOLO-Pose per box, fine-tuned on 10–30 annotated frames per player via text prompts.
## Data sources named
8 doubles matches: 4 professional YouTube matches (Granollers/Zeballos vs Arevalo/Rojer Toronto 2023 SF; Kyrgios/Kokkinakis vs Sock/Isner Indian Wells 2022; Ram/Salisbury vs Puetz/Venus Cincinnati 2022 F; Salisbury/Ram vs Krawietz/Puetz Toronto 2023 SF) + 4 semi-pro NCAA doubles videos from LSU (anonymized IDs). ~2,055 annotated events (train/val); test = 88 pro + 177 NCAA events (2 videos held out at video level). Prediction code: https://github.com/jiaawe/tennis-prediction; dataset tool links present but URLs not in extract.
## Findings (numbers and facts, not vibes)
- Tracking (NCAA 952-frame rally): YOLOv11+DeepSORT P1 100%/P2 95.6%/P3 43.4%/P4 0.1% (130 s); Florence-2 Large P1 87.3%/P2 85.6%/P3 0.1%/P4 0.0% (2150 s); YOLO-Pose P1 100%/P2 94.3%/P3 0.0%/P4 0.0% (170 s); GroundingDINO+YOLO-Pose P1 100%/P2 100%/P3 69.8%/P4 64.3% (1436 s) — only pipeline with player identity support.
- Classification (Pro / NCAA): Single-Image CNN side accuracy 75.00%/70.06% (AUC 75.75%/71.82%); serve-vs-nonserve 100.00%/90.40% (small-sample luck noted); shot-type-all accuracy 80.68%/75.71% (AUC 86.65%/83.11%); direction AUC 74.05%/73.75%; formation Double-Image CNN accuracy 94.28%/87.57% (AUC 99.25%/96.92%); outcome Double-Image CNN AUC 69.41%/65.56%.
- Pose-GCNs trained from scratch mostly underperform (serve-vs-nonserve GCN AUC 42.72%/57.22%, worse than random on pro); paper's conclusion: transfer-learned CNNs beat from-scratch GCNs on tiny data.
- Tool optimization: CNN hot-loading on 54 rallies — cold start 12 min 35 s → hot-load 54 s inference (startup 20 s vs 5 s; GPU 3.2 GB vs 0.8 GB).
- Limitations: tiny dataset (~2,055 events, 8 videos; 2-video test); human annotators mark hitting-moment frames (models get temporal localization solved for them); pro data are YouTube highlights (selection bias); ball trajectory unused (direction/outcome capped at AUC ~0.70); far-player pose collapses in NCAA video (up to 16% missing for P4).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — labelling-factory infrastructure: taxonomy → annotation tool (fork CVAT, don't rebuild) → auto-labelling stack (detector + pose + tracking) → human-in-loop confirmation, to label what FTN doesn't (pre-snap OL splits, DB technique at snap, pressure-path geometry, pass-rush moves, blocking schemes).
- OL — pre-snap OL splits and pressure-path geometry are the paper's explicit NFL label examples the factory would produce.
- SCHEME — formation/personnel/personnel-group classifiers feed scheme features.
## Engine-actionable? (yes/no + one-line what)
No — it's infrastructure, not an engine input; build the labelling factory only if a transfer-learned CNN pilot reaches macro AUC ≥ 0.80 on held-out-game personnel/formation classification with ≥2× annotation throughput, otherwise keep buying charting.
