# docs/arxiv-program/research/2026-09-21/arxiv-deep/1863-t-jepa-joint-embedding-predictive-architecture-trajectory.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2406.12913 (Li et al., UNSW, 2024): T-JEPA, a Joint-Embedding Predictive Architecture for trajectory similarity that predicts masked trajectory segments in representation space (not data space), plus AdjFuse — a learnable 3×3 neighborhood-fusion module that stabilizes embeddings under low/irregular GPS sampling. Verdict: ADAPT; AdjFuse is the separable reusable block for noisy NFL tracking sequences, and T-JEPA is the single-scale base later extended by HiT-JEPA (ledger 1862).

## Key metrics/methods (formulas where given, else "not specified")
- AdjFuse: W' = softmax over node neighborhood N(i)∪{i}: w'_j = exp(w_j)/Σ_{k∈N(i)∪{i}} exp(w_k); h̃ = σ(Σ w'_j·h_j + b); residual h'_i = h_i + W̃·h̃.
- JEPA: target encoder E_{θ̄} (EMA of context encoder); M=4 targets resampled with replacement, masking ratios {10%,20%,30%} per iteration, successive sampling prob p=50%; context mask p_γ ∈ [85%,100%]; predictor D_φ = 2-layer Transformer decoder (8 heads); loss = SmoothL1(predicted, target) summed over positions.
- Encoders: 3-layer Transformer (4 heads), learnable positional encoding, d=256; Adam lr 1e-4 halved every 5 epochs, ≤20 epochs, batch 64, early stop after 5 stagnant epochs.
- Cell representation: study area partitioned into equal grid cells; node2vec pretrained on cell-adjacency graph; trajectory → H=(h_{δ(p1)},…,h_{δ(pn)}).
- Inference: F(T_i) = E_θ(g_W(T_i)); similarity by distance; encoder backbone concatenable for transfer learning.
- Validation metrics: self-similarity mean rank (lower better) across DB fractions {20%,40%,60%,80%,100%}; robustness under downsampling ρ_s ∈ [0.1,0.5] and distortion ρ_d ∈ [0.1,0.5]; frozen-encoder fine-tune approximating EDR/LCSS/Hausdorff/Fréchet with HR@5, HR@20, R5@20.

## Data sources named
Porto (PKDD'15, Kaggle: 1.7M trajectories, 442 taxis, Jul 2013–Jun 2014; train 200k, DB 100k, queries 1k); T-Drive (MSR Beijing: 10,357 taxis, Feb 2–8 2008, avg sampling 3.1 min; train 70k, DB 10k, queries 1k); GeoLife (MSR, 182 users, Apr 2007–Aug 2012, 1–5 s sampling, "17,6212" trajectories per paper; train 35k, DB 10k, queries 1k); FourSquare-TKY (573,703 check-ins) / FourSquare-NYC (227,428 check-ins, Apr 2012–Feb 2013; Porto-weight warm start; DBs 500/147). Baselines: t2vec, TrajCL (open-source repos). Proposed NFL data: NFL 10Hz tracking (nflverse/BDB), ~500K+ per-player per-play sequences.

## Findings (numbers and facts, not vibes)
- Self-similarity mean rank: T-JEPA beats TrajCL on 4 of 5 datasets; T-Drive +0.114, GeoLife +0.158 (mean-rank units); TrajCL better on Porto by 0.044. Sparse check-ins: TKY 6.88× better than t2vec, 2.92× better than TrajCL; NYC 8.05× better than t2vec, 2.51× better than TrajCL.
- Downsampling: T-Drive — T-JEPA wins at ρ_s=0.1–0.3, loses at 0.4–0.5 (TrajCL trained with downsampling augmentation); best at all rates on the other 3 sparse datasets.
- Distortion: T-JEPA beats TrajCL 1.62× on T-Drive, 10.92× on GeoLife, 3.04× on TKY, 2.53× on NYC; Porto 0.073 worse than TrajCL.
- Frozen-encoder fine-tune + 2-layer MLP: Porto — T-JEPA avg 4.1% above TrajCL across 4 heuristics × 3 metrics (top HR@5/HR@20/R5@20 in Porto and GeoLife except HR@20 on Fréchet); T-Drive — avg 1.1% above TrajCL (wins EDR/LCSS, loses Hausdorff/Fréchet); t2vec collapses when its encoder is frozen.
- Ablations: removing AdjFuse → downsample mean rank 6.7, 74% worse with AdjFuse removed (DB-size case improves 0.05 without it); ratios {10%,20%,30%} most robust; {30%,40%,50%} drops downsample performance 12.19%.
- Caveats recorded in file: NYC/TKY gains measured on tiny DBs (147/500); no code link in paper; odd/even query-DB construction makes retrieval near-duplicate matching; fine-tune targets are deterministic functions of inputs (formula approximation, not semantic generalization); single-agent trajectories only.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- AdjFuse as a tracking denoiser for NFL 10Hz sequences with interpolated/filled frames — route-shape embeddings feeding rushing/receiving prop models: OTHER (tracking-infra method; no QB/coach/OL/scheme content in the paper itself).
- GSE application note proposes play-phase-conditioned mask tokens (pre-snap/snap/post-snap) and relative coordinates (player vs ball/line of scrimmage) as improvement experiments — INFERENCE from paper structure: SCHEME-adjacent (play-phase structure is scheme-tinged, but this is a ledger-author proposal, not a paper finding).
- No QB behavioral patterns, coaching tendencies, OL unit play, trust-target quotes, or scheme matchup findings in the paper itself: all OTHER.

## Engine-actionable? (yes/no + one-line what)
Yes — build AdjFuse as a standalone preprocessing/denoiser module over NFL tracking (1-yard field-graph cells, 3×3-equivalent kernel, residual fusion) with the ledger's reproducible test: ≥15% lower masked-frame position RMSE than linear interpolation on held-out weeks 13–18, or T-JEPA embeddings ≥35% same-play-concept top-1 accuracy.
