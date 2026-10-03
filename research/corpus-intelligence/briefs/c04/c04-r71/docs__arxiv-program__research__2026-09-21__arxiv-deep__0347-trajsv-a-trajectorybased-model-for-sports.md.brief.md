# docs/arxiv-program/research/2026-09-21/arxiv-deep/0347-trajsv-a-trajectorybased-model-for-sports.md
## What it is (1-2 sentences)
Unsupervised trajectory+visual fusion representation learner (CRNet clip encoder + VRNet video encoder + triple contrastive loss) that turns broadcast sports video into clip/video vectors for retrieval, action spotting, and captioning, served via HNSW approximate-nearest-neighbor search. Ledger verdict: ADAPT the CRNet/VRNet + triple-contrastive design for a "find plays like this one" retrieval layer, rebuilt on NGS tracking data GSE already has — not the paper's broadcast-MOT pipeline.
## Key metrics/methods (formulas where given, else "not specified")
- CRNet: play trajectories rasterized to binary field-grid segment matrices (3 m cells, 1 s segments), Jaccard-tokenized (threshold 0.3), token+positional embedding `x_i = s_i + p_i`, 2-layer 2-head Transformer (d=128), FFN → 128-d trajectory vector; fused with X-CLIP 512-d visual vector → 640-d clip representation.
- VRNet: MSB encoder (640→1280) + seed-vector MAB decoder → 128-d video vector.
- Triple contrastive loss: `L = αL(V1,V2) + βL(V1,V3) + (1−α−β)L(V2,V3)` with symmetric InfoNCE, α=0.5, β=0.3, τ=0.1; positives = noise-corrupted variants (intra-clip trajectory replacement / inter-clip clip replacement at δ~U(0,0.2)); SGD lr 0.01, momentum 0.7, 100 epochs.
## Data sources named
YouTube (3,261 soccer videos, 13–962 s), SoccerNet (550 broadcast games; 17 action classes; 36,894 captions), SportsMOT (240 videos, soccer/basketball/volleyball). All public. Trajectory frame: [-52.5,+52.5]×[-34,+34] m soccer coordinates applied unchanged to all sports.
## Findings (numbers and facts, not vibes)
- Retrieval HR@1 at noise δ=0.6: YouTube 0.475 (vs ResNet(MLP) 0.231), SoccerNet 0.250 (vs X-CLIP(MLP) 0.141), SportsMOT 0.614 (vs ResNet(MLP) 0.347).
- Action spotting Avg-mAP: Baidu-AS+TrajSV 73.7 vs Baidu-AS 73.2 (negligible +0.5 pp; authors admit vision dominates).
- Captioning commentary spotting mAP@30: 53.07 vs 49.40 (+7.4%).
- Ablation: dropping any loss term costs 0.027–0.042 HR@1; w/o VRNet (Mean pooling) HR@1 falls to 0.239 from 0.475.
- Zero-shot SN→YT transfer: HR@1 0.139 at δ=0.6 (weak). HNSW retrieval: 10.70 s (500 videos) → 13.75 s (3,000).
- INFERENCE: retrieval "ground truth" is synthetic (noise-corrupted copies of database videos) — a closed-world corruption-robustness test, not validated open-world similarity search.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Similar-play retrieval layer over GSE's play archive (tactically similar historical plays for matchup prep / edge-sheet content) — the portable asset is the trajectory contrastive-representation design, rebuilt on NGS coordinates with football-scale field grids (~2-yard cells, 0.5 s segments): SCHEME, OTHER (retrieval infrastructure).
- GSE acceptance gate: ≥15% relative MRR over raw-tracking kNN and visual kNN on a 200-query expert-labeled set, with ≥60% of top-5 retrievals scout-rated "tactically similar."
## Engine-actionable? (yes/no + one-line what)
yes — prototype a TrajSV-style contrastive trajectory embedding + HNSW index over historical NGS tracking plays to power "find plays like this one" scouting retrieval, skipping the paper's video pipeline entirely.
