# docs/arxiv-program/research/2026-09-21/arxiv-deep/2106-passai-explainable-artificial-intelligence-algorithm-for-soccer-pass-analysis.md

## What it is (1-2 sentences)
PassAI (arXiv:2503.08945): a two-stream classifier for soccer pass success/failure fusing a rendered tracking-image (positions + velocity vectors + ball path) with a 15-d passer seasonal-stats vector, plus two-stage multimodal explainability — stage 1 attributes which modality mattered (image vs stats), stage 2 attributes within each (Grad-CAM on the image, per-feature gradients on stats). Read verdict in the file: **ADAPT** — "the most directly transferable paper in this lane," mapping ~1:1 onto NFL pass-completion modeling.

## Key metrics/methods (formulas where given, else "not specified")
- Input 1 — tracking image 224×224×3: player + ball positions and velocity vectors at pass moment; ball departure→arrival dotted line; offense/defense by color; open space white [255,255,255]; field scaled to x,y ∈ [−1,1]. Image-based (not graph-based) chosen to explicitly encode open space.
- Input 2 — passer stats vector (15-d, standardized): seasonal passing indexes; includes total×success-rate products to stabilize low-count passers; captures "hub" role in passing network.
- Architecture: ConvNeXt-Tiny (pretrained, fine-tuned) on image → 768-d; MLP with one 64-unit hidden layer on stats → 64-d; concatenated → FC → softmax over {success, failure}.
- Two-stage explanation: Stage 1 — C_B = Σ_{i,j,k} |∂y/∂x_{ijk}| (tracking image), C_S = Σ_i |∂y/∂v_i| (stats vector), each standardized to [0,1] across passes (cross-pass comparison only, not cross-modality). Stage 2 — Grad-CAM on last ConvNeXt conv layer: α_k^c = (1/Z)Σ_{i,j} ∂y^c/∂A^k_{ij}; L^c = ReLU(Σ_k α_k^c A^k); per-feature gradient magnitudes for stats.
- Training: 8:1:1 train/val/test, 10-fold CV; augmentation = horizontal/vertical flips; batch 128, max 10 epochs, lr 1e-4, Adam, cross-entropy; best-val-accuracy checkpoint; NVIDIA v2-8 TPU.

## Data sources named
95 games from Japan's J1 League 2023–2024 seasons (Data Stadium, Inc. — proprietary, not publicly shared). Tracking: player + ball positions at 25 Hz. Event data: pass action labels (frame, result). Seasonal passer stats scraped from the official J1 League site (jleague.jp). Analysis target: 6,349 passes arriving within 30 m of goal — 3,663 successful, 2,686 failed. No code/repo link in the paper.

## Findings (numbers and facts, not vibes)
- PassAI accuracy **77.6%** (best on all reported indexes). Confusion matrix: successful passes 83.0% correct, failed passes 70.8% (class imbalance 3,663 vs 2,686).
- Multimodal gain: PassAI vs Pure-ConvNeXt (image only) = **+2–4%** across indexes; abstract claims ">5%" over state-of-the-art algorithms.
- Baselines: ViT and ConvNeXt best among image methods; graph-based methods (GCN, CI-GNN) ≈70% on each index; CI-GNN higher F1/recall via better failed-pass accuracy.
- Explanations: stage-1 contributions vary per pass; example C_B = 1.0 / 0.89 (image-dominant), C_S = 0.84 / 0.82 (stats-dominant); aggregate: seasonal pass success rate (f2) the top stats contributor; f11/f12 (pass performance indexes) also high.
- Paper claims: "first study to process both tracking and stats data using an XAI algorithm and visualize the outcome rationale"; image-based > graph-based for open-space tasks.
- Limitations noted by the reader: random 10-fold CV over games, NOT time-ordered (player/team memorization inflates accuracy); single-frame input discards pre-pass dynamics; gradient "contribution" is sensitivity, not causal; 77.6% vs 57.7% majority baseline = +19.9 pp on a narrow task (final-third passes only).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR — per-dropback pass-outcome classification from tracking context + QB seasonal attributes; directly ports to NFL QB completion/explosive-pass modeling.
- TRUST-SIGNAL — two-stage explainability tells "whether the tracking context or the passer's attributes drove the decision" (e.g., "the model flagged the coverage, not the QB") — publishable rationale, and the Grad-CAM figures are content-lane graphics material.
- SCHEME — tracking images encode route stems/spacing/coverage context, so the same architecture can attribute success to scheme vs personnel.

## Engine-actionable? (yes/no + one-line what)
Yes — build "PassAI-NFL": classify NFL pass completion (and explosive-pass ≥15 yards) from (a) NGS tracking-frame image at throw instant + ball trajectory to catch point, rendered like the paper (team colors, white open space, LOS/first-down line), and (b) ~20-d QB seasonal stats vector (CPOE, EPA/dropback, pressure rate, aDOT, time-to-throw), with the same two-stage explanation; train on time-ordered splits (fixing the paper's random-CV leakage). Serve per-play completion probability into the props lane (QB completion% props); explanations feed the content lane. Effort ~3–4 weeks. ACCEPT if two-stream beats tracking-only by ≥2 pp accuracy and ≥0.015 AUC on held-out 2022 with stats-stream contribution (mean C_S > 0.2); improvement axis: temporal PassAI (5-frame sequence via TimeSformer/VideoSwin) to lift failed-pass recall from 70.8%.
