# docs/arxiv-program/research/2026-09-21/arxiv-deep/1031-video-pose-distillation-few-shot.md
## What it is (1-2 sentences)
Paper ledger (Hong et al., ICCV 2021, arXiv:2109.01305): Video Pose Distillation — a ResNet-34 student regresses a noisy pose teacher's joints AND joint velocities on unlabeled sport video, producing pose descriptors that beat both the teacher and end-to-end RGB models on few-shot, fine-grained sports action recognition. ADAPT verdict: VPD-NFL lane — distill on unlabeled All-22 broadcast video for few-shot QB-mechanics / fine-grained action recognition.

## Key metrics/methods (formulas where given, else "not specified")
- Distillation loss (Eq. 1): min_{Student, PoseDecoder} Σ_t || D(F(x_t, φ_t)) − [p_t; Δp_t] ||²₂ — student F on RGB crop x_t (128×128) + RAFT flow φ_t (5 channels) regresses teacher pose p_t and velocity Δp_t = p_t − p_{t−1} via 2-layer FC decoder D; D discarded after training.
- Two variants: 2D-VPD (d=26, HRNet joints), VI-VPD (d=64 view-invariant VIPE* embedding; d=128 on Diving48). Confidence gate: mean joint score < 0.5 (0.7 tennis) excluded; horizontal flips; 20% frames withheld for validation.
- Downstream: frozen F → 2-layer BiGRU (h=128), max-pool, BN-Dropout-FC head; DTW-NN retrieval.
- Few-shot protocol: k = 8/16/32/64 per class, 5 fixed subsets, mean top-1 on full test. Retrieval P@1/10/50; detection AP at tIoU 0.3–0.7.

## Data sources named
FSJump6 (371 figure-skating programs, 17 h, 6 jump classes, 2018 held out: 134 routines/520 jumps test); Tennis7 (9 singles matches, 7 swing classes; 2,509 test from 4 matches); FX35 (1,214 floor routines, 35 classes, 7,634 actions); Diving48 (16,997 dives, 48 classes). Public HRNet/RAFT/MS-G3D/TSN implementations; no paper-specific code released.

## Findings (numbers and facts, not vibes)
- Few-shot top-1: Diving48 VI-VPD beats next-best by 6.8–22.8 pp (k=8–64); FX35 by 5.0–10.5 pp; FSJump6/Tennis7 slight over teacher.
- Full-data top-1: FSJump6 97.4% (SOTA, +0.6 over VIPE*); Tennis7 93.3% (+1.5); FX35 94.6% (SOTA, +1.0 over GSM); Diving48 88.6% (trails GSM-no-crop 90.2 by 1.6 pp, +8.4 over MS-G3D ensemble 80.2).
- Ablations (16-shot): distillation alone +7.9/+19.9% (full/16-shot) Diving48, +2.7/+7.7% FX35 over teacher; motion decoder adds +1.5–3.9 pp (16-shot); distilling on uncut video beats action-only segments.
- Retrieval: Diving48 P@1 60.9 (VI-VPD) vs 36.1 (VIPE*), P@10 40.9 vs 24.1; FX35 P@1 80.8 vs 72.2. Detection tennis swings AP@0.5 58.6 vs VIPE* 51.2 (+7.4) vs pretrained R3D 29.9.
- Cost: student training ~8 h on one Titan V; downstream BiGRU 7–100 min/dataset; inference = ResNet-34 on 128×128 crops.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **QB-BEHAVIOR**: single-athlete start lane = QB throwing-mechanics descriptors; fine-grained action retrieval (route types, tackle technique, penalty motions) on All-22; few-shot head for novel fine-grained labels.
- **COACHING**: technique-breakdown content pipeline (mechanics analysis from broadcast video without hand labels).
- **OTHER**: highlight retrieval/detection — GSE's video/content pipeline faces exactly the generic-pose-model-fails-on-fast-sports-video problem this solves label-free.

## Engine-actionable? (yes/no + one-line what)
Yes — VPD-NFL: distill a ResNet-34 student on ~10 h unlabeled All-22 (HRNet/RTMPose teacher, 0.5 confidence gate, Eq. 1) then few-shot BiGRU heads for fine-grained QB-action recognition; numeric gate is ≥5 pp top-1 over raw teacher pose at 16-shot.
