# arxiv-program/research/2026-09-21/arxiv-deep/1865-start-trajectory-representation-temporal-regularities-travel-semantics.md
## What it is (1-2 sentences)
START (arXiv:2211.09510): self-supervised trajectory representation learning that injects spatiotemporal domain structure — a road-network GAT for travel semantics plus a time-aware encoder with irregular-interval decay — pretrained with span-masked recovery and contrastive learning, transferring across cities (BJ-pretrained → GeoLife fine-tune beats Geolife-pretrained). Adjudicated ADAPT to NFL tracking: the mask+contrastive recipe and interval-aware attention transfer; the road-network stage must be replaced with a field graph.
## Key metrics/methods (formulas where given, else "not specified")
- Stage 1 TPE-GAT: e_ij = (h_i W_1 + h_j W_2 + p^trans_ij W_3) W_4ᵀ, p^trans_ij = count(v_i→v_j)/count(v_i); α_ij = softmax(LeakyReLU(e_ij)).
- Stage 2 TAT-Enc: x_i = r_i + t_{mi(t_i)} + t_{di(t_i)} + pe_i (minute-of-day + day-of-week embeddings); TA_h = softmax(Q_h K_hᵀ/√d' + Δ̃) V_h with learned decay δ'_{ij} = 1/log(e + |t_i − t_j|), δ̃_ij = LeakyReLU(δ'_ij ω_1) ω_2ᵀ; [CLS]-style placeholder at position 0.
- SSL: span-masked recovery (mask consecutive spans l_m=2, p_m=15%, cross-entropy L^mask) + NT-Xent contrastive (τ=0.05, trimming/temporal-shift/mask/dropout augmentations); L^pre = λL^mask + (1−λ)L^con, λ=0.6; AdamW lr 2e-4, batch 64, 30 epochs, d=256; L1=3 GAT layers (heads 8,16,1), L2=6 encoder layers, 8 heads.
## Data sources named
BJ Beijing taxi trajectories (Nov 2015, chronological 18/5/7-day split), Porto PKDD'15 (15 s sampling, monthly 6:2:2 splits), GeoLife transfer test (5,760 trajectories, 882 Car/Taxi used); all map-matched to OSM road networks. Code footnote-link stated (URL not extracted).
## Findings (numbers and facts, not vibes)
- Best on all metrics on both datasets across all three tasks (travel time MAE/MAPE/RMSE; passenger/driver-ID classification; detour similarity MR/HR@1/HR@5) vs 8 baselines (traj2vec, t2vec, Trembr, PIM, PIM-TF, Toast, Transformer+MLM, BERT); exact Table II values not recoverable from HTML (figures rendered as images) — "best on all metrics" level only.
- Largest travel-time gaps in the 16:00–21:00 peak slice and 20–100-hop trajectories; similarity k-NN precision degrades slowest as detour proportion goes 0.1→0.5.
- BJ-pretrained START → GeoLife fine-tune beats Geolife-pretrained START; Porto-pretrained also transfers; Trembr transfer to GeoLife is WORSE than its baseline.
- Efficiency: 25.8 s to encode 100,000 trajectories (RTX 3090); deep similarity is O(d) vs O(L²) classical — ≥10× faster per query than DTW/LCSS/Fréchet/EDR.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (QB-BEHAVIOR) INFERENCE — learned player-movement embeddings from NFL tracking: replace TPE-GAT with a field-graph GNN (1-yd cells, field-region nodes, cell-transition transfer probabilities from the tracking corpus), minute/day embeddings with play-clock/game-clock/down-distance embeddings; downstream route-family classification and frozen-embedding play retrieval.
- (COACHING) INFERENCE — the improvement experiment's coverage-contrastive hard negatives ("same play, different coverage" from FTN charting) would organize the embedding space by defensive concept, directly usable as a coverage classifier for prop matchup analysis.
## Engine-actionable? (yes/no + one-line what)
Yes — pretrain a START-style field-graph + time-aware encoder on NFL tracking; adopt only if frozen-embedding route classification beats a from-scratch Transformer by ≥15pp, or same-concept retrieval top-1 ≥40%, or play-outcome MAE ≥5% below baseline.
