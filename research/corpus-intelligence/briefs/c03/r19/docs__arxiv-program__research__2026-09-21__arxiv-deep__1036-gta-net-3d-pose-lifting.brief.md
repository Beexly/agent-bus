# docs/arxiv-program/research/2026-09-21/arxiv-deep/1036-gta-net-3d-pose-lifting.md
## What it is (1-2 sentences)
Deep read of arXiv:2411.06725 (Yuan & Zhou 2024), GTA-Net: a Joint-GCN + Bone-GCN + hierarchical-attention TCN network for 2D→3D human pose lifting, framed for real-time sports posture correction in an IoT deployment.
## Key metrics/methods (formulas where given, else "not specified")
- Architecture: Joint-GCN (local joint graph) + Bone-GCN (global skeletal graph) + hierarchical-attention-augmented TCN (causal + dilated 1D convolutions, within-layer and across-layer temporal/spatial attention).
- Key equations: GCN layer H^(l+1)=σ(D^{-1/2}AD^{-1/2}H^(l)W^(l)); adjacency A'=A+I, normalized Â=D^{-1/2}A'D^{-1/2}; causal conv y_t=Σ_{i=0}^{k−1} w_i·x_{t−i}; dilated y_t=Σ_{i=0}^{k−1} w_i·x_{t−i·d}; residual Z=Y+X; attention e_ij=(h_i W_q)(h_j W_k)^T/√d_k, α_ij=softmax(e_ij), h'_i=Σα_ij h_j; training MSE ℒ=(1/N)Σ(Z_t−Ŷ_t)^2.
- Validation metrics: MPJPE Protocol #1 (mid-hip aligned) and #2 (rigid-transformation aligned), PCK, AUC; per-action breakdowns; FPS at receptive fields 32/64/128 in layer-by-layer and single-frame modes; full component ablation.
## Data sources named
Human3.6M (3.6M images, 11 actors, 15 activities, lab MoCap, standard splits); MPI-INF-3DHP (indoor+outdoor multi-camera; used zero-shot — trained on Human3.6M, tested directly); HumanEva-I (Walk/Jog, 5-fold CV); 2D keypoints from CPN detector (GT-keypoint variant also reported).
## Findings (numbers and facts, not vibes)
- Human3.6M Protocol #1 (avg 15 actions): GTA-Net(CPN) 41.8 mm, GTA-Net(GT) 35.1 mm — vs Shan et al. 42.8, Yu et al. 42.8, Zhao et al. 51.8, Pavllo et al. 51.8. Protocol #2: CPN 32.2 mm, GT 22.3 mm — vs Wehrbein et al. 32.4, Shan et al. 34.2, Yu et al. 34.8.
- HumanEva-I Protocol #2 avg 15.0 mm vs Yu et al. 15.4, Liu et al. 15.5, Zhang et al. 16.1.
- MPI-INF-3DHP zero-shot: PCK 95.2%, AUC 70.8%, MPJPE 48.0 mm — vs Yu et al. 98.19/76.53/31.36 (paper's "outperforms across all metrics" prose claim is contradicted by its own Table 3; trust the tables).
- Ablation MPJPE (H3.6M/HumanEva/MPI): full 32.2/15.0/48.0; −Joint-GCN 38.1/21.2/50.6; −Bone-GCN 37.8/20.8/50.1; −Attn-TCN 39.3/22.1/52.4 (largest degradation); −Hierarchical Attention 37.5/20.5/50.3.
- Speed (FPS, RF 32/64/128): layer-by-layer 1200/1050/900; single-frame 100/75/50 — vs VPoseNet 950/820/680 and 85/70/55; GraFormer 900/800/700 layer-by-layer. (Single-frame 100 FPS measured on A100-grade hardware, not IoT devices — the IoT framing is aspirational.)
- No code repository found; reproduction requires implementing from the equations.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Causal-only TCN structure = no-future-frame 3D pose estimation suitable for live-broadcast footage (OTHER)
- 2D→3D lifting backbone proven on rapid dynamic sports motion with occlusions — the architecture class for GSE's own sports-motion pose work (OTHER)
- NFL-combine-anthropometrics bone-length prior as a broadcast-domain constraint to close the generalization gap (OTHER)
## Engine-actionable? (yes/no + one-line what)
no — a computer-vision pose-lifting network with no direct prediction/betting application; ADAPT verdict is for the CV lane only (2D skeleton streams → 3D pose), gated on reproducing Protocol #2 ≈32.2/22.3 mm within 2 mm before any GSE integration.
