# arxiv-program/research/2026-09-21/arxiv-deep/1874-atscc-aircraft-trajectory-segmentation-contrastive-coding.md
## What it is (1-2 sentences)
ATSCC (KAIST 2024, arXiv:2407.20028): self-supervised contrastive trajectory encoder where positive pairs are defined by geometric segmentation (iterative Ramer–Douglas–Peucker significant points) instead of data augmentation; causal Transformer encoder supports real-time monitoring of incomplete, variable-length trajectories. Code: github.com/petchthwr/ATSCC; data: huggingface.co/datasets/petchthwr/ATFMTraj.
## Key metrics/methods (formulas where given, else "not specified")
- Iterative RDP: significant points recursively where max perpendicular distance d(x_{i,k},x_{i,s},x_{i,e}) = ‖x_{i,k}−x_{i,s}‖ if x_{i,s}=x_{i,e}, else |(x_{i,e}−x_{i,s})×(x_{i,s}−x_{i,k})|/‖x_{i,e}−x_{i,s}‖ exceeds ε; each timestep gets a segment ID υ_{i,t}.
- Per-step features (9): ENU (x,y,z), directional unit vector (u^x,u^y,u^z), polar (r, sinθ, cosθ).
- Causal Transformer: 12 layers, d=768, FFN 3072 (GELU), 12 heads, dropout 0.35, NoPos (no positional encoding); binomial timestamp masking p=0.2 before input projection (mimics missing states); representation dim 320.
- Soft Nearest Neighbor loss: L_snn = −E[log Σ_{j:υ_i=υ_j} exp(z_iᵀz_j/τ) − log Σ_{k:υ_i≠υ_k} exp(z_iᵀz_k/τ)] — positives = same segment (within/across instances); positives excluded from negative sum.
- Batch: 16 trajectories × ~500 steps ≈ 8,000 representation vectors per update.
## Data sources named
Four manually labeled airport datasets from AIPs (labels for evaluation only): Incheon RKSI arrivals + departures (ADS-B/Opensky 2018–2023), Stockholm Arlanda ESSA arrivals (SCAT + flight plans), Zurich LSZH arrivals; resampled every 5 s, cleaned, smoothed, scaled.
## Findings (numbers and facts, not vibes)
- ATSCC outperforms ALL baselines (SPIRAL, TCN-AE, TF-AE, T-Loss, TNC, TS-TCC, TS2Vec, InfoTS) in SVM accuracy on all four datasets; largest gains on Incheon arrivals (complex 4-parallel-runway config); departures slightly easier (straighter).
- Clustering (NMI/ARI): ATSCC best — label-faithful representations without label supervision.
- Exact accuracy/NMI/ARI numbers are table-rendered and not text-recoverable from the HTML read — only rankings and qualitative margins were captured.
- File's ledger verdict: ADAPT — most reproducible paper in the lane (public code + data); football analog: WR trajectory "significant points" ARE the route breaks; needs careful RDP ε tuning (football is adversarial/discontinuous, not waypoint-driven).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: unsupervised movement-primitive vocabulary — RDP segments = route stems/breaks; segment embeddings for unsupervised route-break detection, play-concept clustering, and segment-level similarity search ("find all corner routes run like this"); cross-player segment contrast (all "post breaks") yields a position-agnostic break vocabulary for few-shot route classification.
- OTHER: causal encoder fits real-time in-game use (each frame's embedding uses only past frames).
## Engine-actionable? (yes/no + one-line what)
Yes — run iterative RDP on NFL 10Hz player trajectories (ε start 0.5 yd), train the causal SNN-contrastive encoder on public ATSCC code, and apply to route-break detection / concept clustering; ADOPT iff segment embeddings reach NMI ≥ 0.40 against charted route concepts (vs ≤ 0.30 TS2Vec) AND boundary-F1 ≥ 0.50 vs charted break points.
