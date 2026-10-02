# arxiv-program/research/2026-09-21/arxiv-deep/1034-videobadminton-benchmark-fine-grained.md

## What it is (1-2 sentences)
A full-paper deep-read ledger (arXiv:2403.12385, Li et al. 2024) benchmarking 7 video/skeleton architectures on VideoBadminton, a new fine-grained dataset of 7,822 clips across 18 badminton stroke classes, including low-sample (10- and 50-shot) regimes. Verdict recorded: ADAPT — the architecture ladder (skeleton vs RGB vs transformer) and dataset-construction recipe are a template for GSE's own fine-grained sports video benchmarks.

## Key metrics/methods (formulas where given, else "not specified")
- Metrics: Top-1 accuracy, Top-5 accuracy, Mean Class Accuracy on held-out test.
- Dataset characterization: frame entropy p(i)=h(i)/N (Eq 1); Entropy = −Σ p(i) log2 p(i) (Eqs 2–3); mean consecutive-frame ResNet-50 feature distance f=F'(I) (Eq 4), d(f_i,f_{i−1})=√(Σ_j(f_ij−f_{(i−1)j})²) (Eq 5).
- Architectures benchmarked via MMAction2, 8:1:1 train/val/test: R(2+1)D, SlowFast, TimeSformer, Swim (Video Swin Transformer), MViT-V2 (RGB); ST-GCN, PoseC3D (skeleton).
- Model equations recapitulated per method (Eqs 6–16).
- Labeling: Shot-By-Shot (S²) tool — rally/shot segmentation, shuttlecock trajectory detection, per-shot labels; 5 student labelers, reviewed by head coach; rare classes augmented via controlled ball-feeding under same camera.

## Data sources named
- **VideoBadminton**: 7,822 clips, 18 classes, 145 minutes total, self-recorded; 19 adept players (15M/4F, National Central University badminton school team); 18 BWF-standard stroke types (Short Serve, Cross-Court Flight, Lift, Tap Smash, Block, Drop Shot, Push Shot, Transitional Slice, Cut, Rush Shot, Defensive Clear, Defensive Drive, Clear, Long Serve, Smash, Flat Shot, Rear Court Flat Drive, Short Flat Shot).
- Camera: Imaging Source DFK 37AUX273, 1280×960 @ 60fps; 2 m behind baseline, 4.5 m high, 30° tilt; wide-angle radial distortion corrected via OpenCV chessboard calibration.
- Comparators: Badminton Olympic dataset (10 videos, 751 point instances, 12 stroke classes); ShuttleNet (43,191 clips, 10 classes, stroke-forecasting).
- Balanced subsets evaluated: VideoBadminton-10 and VideoBadminton-50 (10/50 clips per class).

## Findings (numbers and facts, not vibes)
- Full dataset (Table 3, top1/top5/mean-cls): SlowFast 82.80/97.54/73.80 (best); Swim 81.99/96.52/69.93; PoseC3D 80.76/96.01/67.18; R(2+1)D 79.53/96.11/66.97; ST-GCN 74.41/93.76/61.44; TimeSformer 73.18/94.78/57.70; MViT-V2 14.23/62.23/10.76 (catastrophic failure — would not converge under authors' configs).
- VideoBadminton-10: ST-GCN 28.05/68.58/23.59 (best top-1); PoseC3D 23.03; Swim 19.86; TimeSformer 19.45; R(2+1)D 13.10; SlowFast 12.79; MViT-V2 13.10.
- VideoBadminton-50: ST-GCN 60.70/89.25/54.86 (best); PoseC3D 59.98; Swim 53.53; TimeSformer 45.45; R(2+1)D 40.84; SlowFast 12.28; MViT-V2 12.69.
- Key finding: skeleton methods (ST-GCN, PoseC3D) are the most sample-efficient; heavy RGB models need the full dataset.
- Leakage caveat: no player-disjoint splits (19 players across 7,822 clips) — identity leakage likely inflates absolute accuracies; relative architecture ranking is the durable finding.
- Imbalance effects: SlowFast mean-class 73.80 vs top-1 82.80.
- Dataset + code promised public but no URL in the paper text.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (CV program): architecture-selection ladder for fine-grained sports action classification — run ST-GCN/PoseC3D/SlowFast/Swin on 10-, 50-, and full-shot subsets when a new fine-grained action task arises; skeleton-first at low sample counts.
- OTHER (data pipeline): dataset-construction recipe — fixed broadcast-like camera + distortion correction + expert-verified shot labeling + staged rare-class capture — is the blueprint for GSE's first fine-grained NFL-adjacent action dataset (e.g., tackling forms, route variants).
- OTHER (diagnostics): frame entropy (Eqs 1–3) + consecutive-frame feature distance (Eqs 4–5) as difficulty diagnostics for any new GSE video corpus.
- COACHING (weak, INFERENCE): coach-verified labeling protocol shows fine-grained technique classification depends on expert ground truth — applies to any GSE video-labeling effort for technique/fundamentals analysis.

## Engine-actionable? (yes/no + one-line what)
Yes — adopt the ST-GCN/PoseC3D/SlowFast/Swin architecture ladder + sample-efficiency protocol as GSE's model-selection harness for fine-grained sports action classification, and reuse the frame-entropy/dataset diagnostics for video-corpus construction; numeric gate: reproduced ranking within ±3pp of the paper's.
