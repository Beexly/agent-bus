# arxiv-program/research/2026-09-21/arxiv-deep/0455-enhancing-soccer-camera-calibration-through-keypoint.md
## What it is (1-2 sentences)
MMSports'24 paper (Falaleev & Chen, arXiv:2410.07401v1) improving broadcast soccer camera calibration by detecting 57 pitch keypoints (line-line/line-conic intersections, conic tangents, structural points) with HRNetV2-w48 heatmap regression, then calibrating a pinhole model via an iterative "voter" subset-selection heuristic. Program verdict: REJECT — broadcast-video soccer CV with no transfer path to GSE's tabular probability engine (no video-ingest lane in GSE).
## Key metrics/methods (formulas where given, else "not specified")
- Acc@t = TP@t / (TP@t + FN@t + FP@t), t = 5 px (polyline matching; eq. 1); Score = Acc@5 × CR (completeness ratio; eq. 2)
- Halir-Flusser direct least-squares ellipse fitting; analytic ellipse–line intersection; tangent-from-external-point construction (projective tangency preserved)
- Point model: HRNetV2-w48, Gaussian peaks σ=3px, MSE then Adaptive Wing Loss fine-tune, Adam LR 0.001 halved after 8 stagnant epochs; 57 keypoint channels + 23 line heatmap channels (σ=4px, 2 extremity peaks per line)
- Calibration: OpenCV 4.7 calibrateCamera pinhole (zero distortion, principal point fixed at frame centre); "Multiplane" variant adds two vertical goal planes; iterative voter over keypoint subsets (all / line-line only / RANSAC-5px / ground-plane only), Optuna-tuned thresholds, sanity rejects (below ground, >100 m high, >250 m from pitch centre, focal length outside [10, 20000] px); final by lowest pitch-pattern reprojection RMSE (<5px prefers all-points)
## Data sources named
- SoccerNet-Calibration-2023: 25,506 images at 960×540 px from 500 games, field-marking annotations (Magera et al. 2024); public; private challenge split on eval.ai
- Code: github.com/NikolasEnt/soccernet-calibration-sportlight (not fetch-verified)
## Findings (numbers and facts, not vibes)
- Valid-split keypoint ablations (3-plane calibration): intersections only → L2 4.46px, Acc@5 0.7711, CR 0.6034, Score 0.4653; +tangent → Acc@5 0.7527, CR 0.6731, Score 0.5067; +extra → Acc@5 0.7446, CR 0.7245, Score 0.5395 (extra points hurt raw accuracy, win on completeness)
- Test-split calibration algorithms: OpenCV ref Score 0.5297; Multiplane 0.5484; Voter 0.5566; Iterative Voter 0.5630; Iterative Voter + Lines 0.5638
- SoccerNet Challenge 2023 leaderboard: 1st "Our" — Acc@5 0.7322, CR 0.7559, Score 0.5535; 2nd Spiideo 0.5293; 3rd SAIVA 0.5262; 4th BPP 0.5014; 5th ikapetan 0.4287; baseline 0.0833
- Speed: 44.1 ms/image (batch 1) / 3.1 ms (batch 128) point model on RTX 3090; line model 33.6 ms/image
- Distortion-parameter optimization was tried and *reduced* accuracy (zero-distortion assumption retained)
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- None in the QB-behavior, coaching/scheme, OL, or trust-signal lanes — pure broadcast-CV. OTHER: voter-ensemble-over-heuristic-subsets is generic robust-estimation practice, not a transferable mechanism; conceptually adjacent to sensor-fusion voting if GSE ever ingests video (not planned).
## Engine-actionable? (yes/no + one-line what)
No — rejected paper; GSE has no video-ingest lane, and the keypoint set is soccer-marking-specific (would need re-derivation for NFL fields) with zero-distortion assumptions untested on broadcast wide-angle cameras.
