# arxiv-program/research/2026-09-21/arxiv-deep/0066-mambamot-statespace-model-as-motion-predictor.md
## What it is (1-2 sentences)
A learned Mamba (selective state-space model) motion predictor that replaces the Kalman filter inside tracking-by-detection MOT pipelines, with MambaMOT+ adding a trajectory-embedding head that merges fragmented tracklets in O(N) via cosine similarity + hierarchical clustering. Verdict in the source: ADAPT — take the MambaMOT+ O(N) tracklet merger; defer to sibling paper 0063 (MambaTrack, SportsMOT HOTA 72.6 vs MambaMOT+ 71.3) for the motion model itself.
## Key metrics/methods (formulas where given, else "not specified")
- SSM: y(t) = C·h(t); h(t) = A·h(t−1) + B·x(t) (Eqs. 1–2); selective discretization Eqs. 3–4 per paper's shorthand: A-bar_t = 1 − sigma(Linear(x_t)); B-bar_t = sigma(Linear(x_t)) — source flags these as uncertain shorthand; reimplement from mamba-ssm reference instead.
- Prediction head: Y_t = MLP_pred(y_t) (Eq. 6); loss L_pred = L_giou + L_mse.
- MambaMOT+ embedding head: f_t = MLP_emb(y_t) (Eq. 7); cosine embedding loss L_cos(i,j) = 1 − cos(f_i,f_j) if i=j; max(0, cos(f_i,f_j)) if i≠j (Eq. 8); L_total = L_pred + L_cos.
- Tracklet merging: per-tracklet embeddings → cosine similarity → hierarchical clustering; veto gates temporal 50 frames / spatial 50 pixels. O(N) vs O(N²) Siamese mergers.
- Training: Adam lr 1e-4, 500 epochs, batch 32; 2 Mamba blocks, hidden dim 64, expansion factor 2; input box history {B_{t−n},…,B_{t−1}} in R^{n×[x,y,w,h]}; tracklets sampled with random lengths in (2,n), padded; pooled MOT17+DanceTrack+SportsMOT trajectories; one RTX 4080.
## Data sources named
DanceTrack (ByteTrack YOLOX detections), SportsMOT (own YOLOX trained per ByteTrack recipe; identical detections for all methods, marked *); baselines FairMOT, SORT, DeepSORT, ByteTrack, OC-SORT, CenterTrack, TraDes, QDTrack, TransTrack, MOTR, GTR, MotionTrack. No NFL/NGS data. No code link stated in the paper.
## Findings (numbers and facts, not vibes)
- DanceTrack test: MambaMOT HOTA 55.5, DetA 80.8, AssA 38.3, IDF1 53.9, MOTA 90.1; MambaMOT+ 56.1/80.8/39.0/54.9/90.3. ByteTrack 47.3 (+8.2 HOTA for MambaMOT); OC-SORT 54.6 (MambaMOT +0.9); MOTR 54.2.
- SportsMOT test (same detections): MambaMOT* 70.4/86.7/57.2/69.5/94.7; MambaMOT+* 71.3/86.7/58.6/71.1/94.9; ByteTrack* 62.0 (+8.4 HOTA); OC-SORT* 70.2; TransTrack 68.9. Claimed +8.2% HOTA and +7.3% AssA over ByteTrack under identical association/detector.
- Inference: 28.8 FPS single GPU (real-time) vs <10 FPS for transformer trackers like MOTR.
- Superseded within batch: MambaTrack (0063) reports SportsMOT HOTA 72.6 vs MambaMOT+ 71.3.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — player-tracking pipeline: Mamba-for-Kalman motion predictor + O(N) trajectory-embedding tracklet merger for stitching fragmented player tracklets across broadcast camera cuts and occlusion-heavy pile-ups.
- SCHEME — INFERENCE: merged full-trajectory tracklets are the input feed for formation-extraction and opponent-scheme identification from All-22/broadcast video.
- QB-BEHAVIOR — INFERENCE: per-tracklet motion embeddings on QB/scramble and route-runner tracks could extend from box geometry to QB movement profiling, but the paper inputs are boxes only — this extension is not demonstrated.
## Engine-actionable? (yes/no + one-line what)
Yes — ADAPT the MambaMOT+ trajectory-embedding merger (adopt if fragmentation drops ≥20% at equal/better IDF1 vs GSE's Kalman baseline on GSE-labeled NFL broadcast tracking); defer the motion predictor to paper 0063's bidirectional MTP unless it wins head-to-head.
