# docs/arxiv-program/research/2026-09-21/arxiv-deep/0375-towards-longterm-player-tracking-with-graph.md

## What it is (1-2 sentences)
Towards long-term player tracking with graph hierarchies and domain-specific features (arXiv:2502.21242v1, Koshkina & Elder 2025): SportsSUSHI extends the hierarchical graph tracker SUSHI with sports-domain edge features (jersey numbers, team IDs, field coordinates), evaluated on SoccerNet and a new 20-clip stationary-camera hockey dataset.

## Key metrics/methods (formulas where given, else "not specified")
- SUSHI: offline tracking-by-detection; hierarchy of graphs (level-0 nodes = detections, edges = associations); GNN message passing for binary edge classification; tracklets become next-level nodes; linear program → trajectories; K=10 edge pruning; sliding window + stitching.
- Jersey confidence: c(d_i d_j) = c_1(d_i)·c_2(d_j); c(d_i) = c_1(d_i)·c_2(EOL); 100-dim number encoding; pipeline: legibility classifier → pose-based torso crop → PARSeq scene-text-recognition.
- Edge features: cosine similarity (re-ID, jersey, team ID); absolute meter-distance (field coordinates).
- Team ID: one-hot {A, B, referee} via referee classifier + contrastively trained player embedding + per-clip clustering.
- Field coordinates: frame→field homography (CNN keypoint/line detector + RANSAC), bbox midpoint projected to meters, interpolation over failed frames.
- Metrics: HOTA, AssA (association), DetA. Training: level-by-level (500 iters each), then joint 250 epochs, Adam.

## Data sources named
- Hockey (new): 20 clips from 9 games, stationary camera, 5930×1080 @ 30 fps; 14 train / 6 test clips; avg 1,311 frames (longest 1,530); MOT annotations plus estimated bboxes for occluded players, jersey numbers, team IDs. Code/dataset at https://github.com/mkoshkina/sports-SUSHI.
- SoccerNet tracking: 57 train / 49 test clips, avg 750 frames @ 25 fps, 1920×1080 broadcast soccer.
- FastReID ResNet50-IBN (fine-tuned per dataset); YOLOX detections.

## Findings (numbers and facts, not vibes)
- Re-ID decay (Table 3, fine-tuned FastReID identity-match accuracy at frame gaps 1/50/100/300): soccer 99.1 → 79.1 → 72.2 → 62.2; hockey 99.63 → 38.2 → 26.8 → 26.6 — appearance alone collapses over long gaps, especially in hockey. [OTHER, TRUST-SIGNAL]
- SoccerNet ablation, GT detections (Table 2, HOTA/AssA/DetA): SUSHI baseline 85.79/75.55/97.42; +field position 89.22/84.25/94.82 (+3.4 HOTA / +8.7 AssA); +jersey (9 layers) 89.78/85.35/94.80 (+1.7 HOTA / +3.3 AssA over field-pos); +jersey (10 layers) 90.92/87.51/94.80. [OTHER]
- SoccerNet vs SOTA (Table 4): GT dets — SportsSUSHI 90.92/87.51/94.80 vs Maglo et al. 96.57/93.60/99.65, Mansourian 90.77/82.53/99.83 (competitive, not SOTA); YOLOX dets — 71.36/69.99/72.87 vs Maglo 73.29/73.42/73.26, ByteTrack 60.56/52.45/70.10. Maglo requires per-game retraining at inference; SportsSUSHI does not. [OTHER]
- Hockey (Table 5): SportsSUSHI 71.24/72.82/70.47 vs ByteTrack 67.51/64.63/71.36, FairMOT 61.56, CenterTrack 59.70, Tracktor++ 44.33 — best on HOTA/AssA. [OTHER]
- Failure cases (§5.5): jersey numbers often invisible/blurry; referees (identical uniforms) not re-identifiable; most errors = failed re-identification after long absence. [TRUST-SIGNAL]
- Limitations: team-ID clustering is per-clip (mild transductive leakage); hockey annotations include annotator-estimated occluded bboxes; 10-layer hierarchy (1024 frames) slightly exceeds 750-frame clip length. [TRUST-SIGNAL]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Jersey numbers are uniquely identifying in NFL — better than hockey — making the jersey-number-as-identity feature set directly relevant if a video-tracking lane ever starts; pair with team-ID and field-coordinate edges. (OTHER)
- Paper's own ablation: most gains come from the features (field coords + jerseys), not the GNN hierarchy — a simple reconnection on top of ByteTrack/BoT-SORT short tracks would capture most of the value. (OTHER)
- NFL caveat (INFERENCE from paper's hockey/soccer results): broadcast zoom/pan makes field registration the binding constraint, and it fails exactly on zoomed views. (TRUST-SIGNAL, OTHER)
- Improvement hook: add constant-velocity Kalman predictor on field coordinates as edge-creation gate + edge feature — motion is the cue that survives jersey illegibility. (OTHER)

## Engine-actionable? (yes/no + one-line what)
No — GSE has no video-tracking data; port only the jersey-number + team-ID + field-coordinate feature set (not the SUSHI hierarchy) if an NFL video lane starts, gated on jersey-OCR legibility ≥ 60% of player-frames in a pilot.
