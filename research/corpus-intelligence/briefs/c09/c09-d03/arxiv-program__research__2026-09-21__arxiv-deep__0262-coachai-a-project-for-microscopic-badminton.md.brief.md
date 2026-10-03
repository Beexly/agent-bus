# arxiv-program/research/2026-09-21/arxiv-deep/0262-coachai-a-project-for-microscopic-badminton.md
## What it is (1-2 sentences)
Deep read of Hsu et al. (2019), arXiv:1907.12888: CoachAI, an end-to-end system proposal for microscopic badminton analytics — broadcast video → shuttlecock tracking (TrackNet), player detection (YOLOv3), pose estimation (OpenPose), smart-racket inertial sensing, cloud warehouse, AR/VR presentation. Verdict in file: ADAPT — the staged video→structured-data pipeline architecture is reusable; no models or numbers transfer.
## Key metrics/methods (formulas where given, else "not specified")
- TrackNet: 3-frame input clips; 13 VGG16-style encoder layers + 11 DeconvNet-style decoder layers; output 640×480×256 pre-softmax feature map; training objective = pixel-wise cross-entropy vs Gaussian heatmap target with σ² = 10.
- YOLOv3 player detection: quoted literature figures 22 ms/image at 320×240, 28.2 mAP (not measured by authors).
- OpenPose: 15-keypoint MPII-format skeleton per player.
- Smart racket: MPU9250 (accel/gyro/mag) + Nordic nRF52 SoC over Bluetooth 4.0; stroke taxonomy of 7 classes: cut, drive, lob, long, netplay, rush, smash.
- Pipeline stages: detect → track → pose → classify → warehouse.
## Data sources named
- ~150,000 frames across 2 matches of Tai Tzu-Ying (2018 All England Open), 1280×720 downsampled to 640×480; dataset proprietary, no download, no code, no model weights.
## Findings (numbers and facts, not vibes)
- The authors measured NOTHING on their own data: no train/test split, no detection accuracy, no stroke-classification accuracy, no baselines — the only numbers (22 ms, 28.2 mAP) are quoted from YOLOv3 literature.
- 2019-era components (TrackNet/YOLOv3/OpenPose) all superseded; video-to-structure front end is the only new-to-GSE-corpus pattern (GSE tracking work starts from already-structured NGS data).
- File's suggested modernized prototype: single-task video front end (e.g., ball tracking on broadcast video) with success bar ≥ 90% ball-detection recall at ≥ 95% precision and < 0.5 ID switches per play on a 1-game All-22 sample vs 500 hand-labeled frames.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: video→structured-event/pose pipeline architecture — staged design (detect→track→pose→classify→warehouse) with landings keyed on game/play id to join nflverse/FTN data.
- SCHEME: narrow single-task perception prototype (pass-rush move classification, receiver-route typing) feeding existing pressure/route lanes — INFERENCE: a route-typing video stage would directly support SCHEME lane (route classification 2.0) and QB-BEHAVIOR trust-signal work.
- OTHER: improvement experiment — joint training with a tactical loss (route-classification loss backpropagated into tracker; train ball-carrier/route embeddings against EPA outcomes rather than intermediate pose accuracy).
## Engine-actionable? (yes/no + one-line what)
Yes (conditional) — adopt only the staged pipeline architecture as a pattern; adapt if the single-game All-22 prototype clears the quality bar, targeting one high-value perception task (pass-rush move classification or receiver-route typing) that structured data does not cover.
