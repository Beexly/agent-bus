# docs/arxiv-program/research/2026-09-21/arxiv-deep/0345-basketlidar-the-first-lidarcamera-multimodal-dataset.md
## What it is (1-2 sentences)
Releases BasketLiDAR, the first synchronized LiDAR-camera dataset for professional basketball multi-object tracking (4,445 frames, 397,757 boxes, 3,105 IDs), and proposes a fusion pipeline: LiDAR-only BEV tracking with ByteTrack as the backbone, plus an occlusion-triggered camera-ReID repair module that fires when the active-ID count drops. The ledger verdict is ADAPT — not the basketball dataset or the specific pipeline, but the portable occlusion-triggered LiDAR→camera ReID-repair design pattern for any multi-sensor player-tracking stack.
## Key metrics/methods (formulas where given, else "not specified")
- Recovery rate: R_ID = N_re / N_dis (recovered IDs over disappeared IDs).
- LiDAR-only: calibrated multi-LiDAR merge → court/height filtering → BEV projection → YOLOv11 detection on BEV → ByteTrack association.
- Fusion repair: occlusion trigger = drop in active-ID count from LiDAR tracker; pre/post-occlusion crops selected by projecting BEV voxels into camera views; ResNet-50 (Market1501-trained) ReID embeddings; cosine-similarity identity repair.
- Hardware: three synchronized camera/LiDAR units at 10 fps; camera 4K, FOV 95°×78°; LiDAR Livox HAP (0.18°×0.23° resolution, 144 lines, 452k pts/s, FOV 125°×25°, 150 m range).
## Data sources named
BasketLiDAR: 4,445 frames, 397,757 bounding boxes, 3,105 IDs, 34 sequences (avg 13.1 s); professional B.League players; 5v5 and 3v3 games over two days; 24 train / 10 test clips, difficulty-balanced. Access "available upon request" (gated; open-source release promised but not delivered as of the paper).
## Findings (numbers and facts, not vibes)
- Fusion: HOTA .917, IDF1 .930, AssA .881, MOTA .957, DetA .955, 6.34 fps (OTHER).
- LiDAR-only: HOTA .917, IDF1 .918, AssA .877, MOTA .957, DetA .955, 28.4 fps (OTHER).
- Camera-only: HOTA .831, IDF1 .868, AssA .810, MOTA .842, DetA .853, 0.218 fps (OTHER).
- Fusion and LiDAR-only are nearly identical on headline metrics (HOTA .917 both; MOTA .957 both) — the fusion gain is in association: IDF1 .930 vs .918, AssA .881 vs .877, and R_ID 0.241 vs. 0.158 (OTHER).
- Latency per frame: camera 4582.5 ms (628.0 detection+tracking + 3954.5 triangulation); LiDAR-only 35.2 ms; fusion 157.8 ms (including 122.6 ms for ReID) — fusion costs 4.5× the LiDAR-only latency for a modest association gain (OTHER).
- TRUST-SIGNAL: confounded attribution — the three pipelines differ in tracker/association logic, not just sensor input, so the fusion-vs-LiDAR comparison does not isolate the sensor contribution; tiny test set (10 clips ~13.1 s), no confidence intervals.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Portable design pattern — occlusion-triggered ReID repair (primary tracker on wide view, trigger on track-count drops, ReID repair from alternate view) for GSE's film-analysis tooling, especially college film where NGS tracking is unavailable; the full LiDAR stack is NOT recommended (cost, stadium logistics, NGS already covers the NFL).
- SCHEME: The occlusion-trigger concept maps to football pile-up / line-of-scrimmage congestion ID-switch problems — repair player identities across occlusion events using broadcast + All-22 synchronized multi-view film.
- TRUST-SIGNAL: Assumptions are unvalidated — ID-count drops cannot distinguish occlusion from detection failure (false triggers waste the 122.6 ms ReID budget); Market1501 pedestrian ReID embeddings on basketball/football uniforms are unproven; 10 fps is too slow for NFL-speed collisions; gated data limits reproducibility.
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the occlusion-triggered cross-view ReID-repair pattern as a module on top of a future camera-only college/broadcast film tracking stack, gated on ≥30% ID-switch reduction vs. single-view baseline with ≤2× latency overhead on a 50-play occlusion test.
