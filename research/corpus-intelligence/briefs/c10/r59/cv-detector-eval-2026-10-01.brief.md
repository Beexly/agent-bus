# research/2026-10-01/cv-detector-eval-2026-10-01.md
## What it is (1-2 sentences)
First real-footage CV detector evaluation (2026-10-01) answering whether the YOLOv8n detector sees players in real football footage: precision 1.00 / recall 0.74 on a manual audit; heavy tracklet fragmentation on broadcast footage and a negative homography result naming field-landmark detection (not line detection) as the open sub-problem.
## Key metrics/methods (formulas where given, else "not specified")
- Detector: YOLOv8n (open weights, COCO person class) via `packages/prediction-engine/src/tracking/yolo-detect.py`, contract JSONL → `yolo-adapter.ts`; confidence threshold 0.35, 5 fps sampling.
- Detections/frame (mean): et_b (CBS broadcast) 5.8 (~6 on-field players); et_a (Prime sideline) 5.1 (players + sideline staff); et_c (FOX broadcast) 7.2; nflfilms (cinematic) 2.1–6.5. Clips: ~10s each, 640×360, 251 frames total (3 broadcast + 2 NFL Films).
- Manual audit (8 frames, 57 visible people): precision **1.00 (42/42)**, recall **0.74 (42/57)**; zero false positives. Misses: tackle piles / players on ground (non-upright poses, heavy occlusion), edge partials, one merged box over two adjacent players. Auto-labels tried first, rejected (crowd confusion, degenerate whole-image boxes).
- Tracklet association (real `buildTracklets`: IoU 0.3, maxGap 5): et_a 253 dets → 53 tracklets, median len 3 (0.6s), max 15, 30 ≤3-frame; et_b 291 → 52, median 4 (0.8s), max 12, 22 ≤3-frame; et_c 359 → 65, median 3 (0.6s), max 26, 40 ≤3-frame; nflfilms 107/323 → 14/35 tracklets, medians 4/6. Diagnosis: at 5 fps sprinting players move >70% box width between frames + broadcast camera pans shift every box → pure-IoU linking at minIou 0.3 cannot hold; camera-motion compensation exists in pipeline but `buildTracklets` doesn't use it. Fix direction: motion-aware association (predict + compensate) or higher fps. Usable today for counts/heatmaps; not per-player tracking.
- Homography (real `fitHomographyDLT`): negative result — fitting on yard-line × frame-edge intersections from a real broadcast frame threw "singular normal equations (degenerate correspondences?)"; all usable points lay on just two image lines (top/bottom frame edges) — degenerate for DLT. Consequence: watch loop needs true 2D field landmarks (yard-line ∩ sideline intersections, hash marks); v1 fallback = hand-seed homography per broadcast view (~30s of Garrett's time or per-network preset).
## Data sources named
- Internal-only eval clips (~10s each, 640×360): "Best Play From EVERY Team In Week 3" and "Top Sunday Plays" reels (broadcast angle), 2 cinematic NFL Films shots. Short, internal-only, deleted after evaluation — nothing published, licensed, or redistributed.
- Code: `packages/prediction-engine/src/tracking/yolo-detect.py`, `yolo-adapter.ts`, `yolo-adapter.test.ts` (4 tests). Tests: 48/48 green under real vitest (44 existing + 4 new).
## Findings (numbers and facts, not vibes)
- Detector ready: precision 1.00, recall 0.74 (42/57); caveat: 360p source, watch loop captures at 960px+ which should lift recall.
- Person-class includes sideline staff/coaches (4 of 6 detections in one sideline frame) — player-vs-staff separation is follow-up work.
- ~6 concurrent players produce 52–65 tracklets on broadcast footage (heavy fragmentation); cinematic clips (slow camera) associate far better.
- DLT math proven on fixtures (unit tests green); the gap is purely correspondence-supply.
- Verdict in file: "converted 'CV pipeline' from scaffolding into measured reality with named gaps."
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Player-position detection with precision 1.00 = foundation for formation/alignment features feeding scheme/OL models: (SCHEME), (OL).
- Tracklet fragmentation on broadcast pace → per-player tracking not yet viable; counts/heatmaps viable today: (OTHER).
- Tackle piles / ground players are the miss concentration — same pile/ground-player recall problem named in the HAW thesis brief: (OTHER).
- Field-landmark detection (yard-line ∩ sideline, hash marks) is the open research gap for homography: (OTHER).
## Engine-actionable? (yes/no + one-line what)
Yes — wire camera-motion compensation into `buildTracklets` (or raise fps) to fix broadcast fragmentation, and stand up field-landmark detection (yard-line/sideline intersections, hash marks) with hand-seeded homography per broadcast view as v1 fallback.
