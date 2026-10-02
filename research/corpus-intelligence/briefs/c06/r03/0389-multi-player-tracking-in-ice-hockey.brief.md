# arxiv-deep/0389-multi-player-tracking-in-ice-hockey.md
## What it is (1-2 sentences)
Multi-object tracking paper (arXiv:2405.13397v1, Prakash et al. 2024) for NHL broadcast footage: tracking-by-detection where each frame is a bipartite graph whose nodes combine OSNet appearance embeddings with homography-projected footpoints (top-down rink coordinates), and a 6-layer message-passing network predicts frame-to-frame identity links — mapping overlapped broadcast-view players into separable top-down space. Verdict in file: ADAPT — port the homography-footpoint + graph-MPN association concept to football-field geometry for clean tracklets from monocular broadcast footage, pending legal review of broadcast-footage processing.
## Key metrics/methods (formulas where given, else "not specified")
- Node: frame ID + 512-D OSNet ReID vector + 2-D footpoint p_i = H_i(f_l, f_r) (bottom-mid of bbox via 3×3 homography H from learned rink-registration model [22]).
- Edges: Δr^id_ij = [‖r^id_i−r^id_j‖_1, cosine_similarity]; Δp_ij = [‖p_i−p_j‖_1, ‖p_i−p_j‖_2].
- MPN: node/edge MLP inits (Table I), L = 6 edge updates (Eq. 8) + node updates (Eq. 9), link classifier ŷ = f^cls(h_e) with sigmoid; sigmoid focal loss summed over L iterations (Eq. 13); Adam, LR 0.01 + 10-epoch warmup + cosine annealing (min 0.001), 30 epochs, batch 16, RTX 4090.
- Inference: prune edges < ξ = 0.9, resolve many-to-one violations, connected-component tracklet IDs. MOTA = 1 − Σ(FN+FP+IDsw)/ΣGT; IDF1 = 2TP_id/(2TP_id+FP_id+FN_id).
## Data sources named
Broadcast Tracking Dataset (Vats et al.): 84 broadcast clips from 25 NHL games, ~36 s avg, 1280×720p @ 30 fps, 58:13:13 split; annotations include homography footpoint coordinates. VIP-HTD (public benchmark): 22 broadcast clips from 8 NHL games, 30/60 Hz (no download link in paper). No code stated.
## Findings (numbers and facts, not vibes)
- Broadcast test, ground-truth detections: Ours IDsw 151, IDF1 95.1% vs Hockey MOT baseline 1056 IDsw / 71.8% IDF1 (23.3 percentage-point gain; ~10× IDsw reduction).
- With Faster R-CNN detections: Ours MOTA 95.4% (FP 1924, FN 4323, IDsw 453, IDF1 71.3%) vs baseline MOTA 94.5% (FP 1653, FN 4394, IDsw 431, IDF1 62.9%) — headline IDsw gain evaporates under real detector noise (453 vs 431); IDF1 edge remains (8.4 pp).
- Cross-dataset VIP-HTD: Ours 60 total IDsw, mean IDF1 92.84% vs baseline 787 IDsw / 80.2%.
- Ablations: appearance-only vs appearance+homography (e.g., video 5: 53→13 IDsw, 89.2→97.5 IDF1) — homography consistently helps.
- MPN depth sweep (one sequence): L=2 173 IDsw/85.5 IDF1; L=4 51/93.4; L=6 27/94.1 (chosen); L=8 34/92.2; L=10 42/84.7; L=12 107/67.4; L=14 388/43.3 — sharp overfitting beyond L=6.
- Caveats: headline results use ground-truth detections (no detector noise); footpoint = bbox bottom-mid is crude (fails airborne/fallen/occluded); no football data; NFL broadcast processing needs legal clearance (NFL most aggressive enforcer); football adaptation gains jersey-number OCR as a node feature hockey lacks.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — tracking-generation infrastructure: broadcast-footage → tracklets → bird's-eye positional trajectories feeding NGS-replacement consumers (especially CFB games without tracking data); first gate is a public-data reproduction (IDF1 ≥ 90 on VIP-HTD, ≥5 pp over appearance-only ablation).
- SCHEME — bird's-eye trajectories enable formation/coverage-shell geometry features once tracklets exist.
## Engine-actionable? (yes/no + one-line what)
No — 6–10 engineer-week prototype blocked on legal review of broadcast-footage processing and on annotating a football pilot set (≥10 games) with IDsw ≥50% below a SORT baseline; not an engine input today.
