# arxiv-program/research/2026-09-21/arxiv-deep/0374-trackid3x3-a-dataset-and-algorithm-for.md
## What it is (1-2 sentences)
Full-paper ledger read of TrackID3x3 (arXiv:2503.18282v2): a public dataset + baseline algorithm for multi-player tracking, identification, and 2D pose estimation from fixed-camera footage in 3x3 basketball. Reader verdict: REJECT for GSE implementation — 6 players, half-court basketball, no football transfer path.
## Key metrics/methods (formulas where given, else "not specified")
- TI-HOTA metric: TI-HOTA = (1/19) Σ_{α∈{0.05,…,0.95}} √(DetA_α × AssA_α); DetA = |TP|/(|TP|+|FP|+|FN|); AssA = (1/|TP|) Σ_c A(c); A(c) = |TPA|/(|TPA|+|FPA|+|FNA|)
- Similarity: Sim(P,G) = LocSim × IdSim; LocSim = exp(ln(0.05)·‖P−G‖²/τ²) with τ = 0.5 m; IdSim = 1 iff all ID attributes match, else 0
- Baseline pipeline: BoT-SORT-ReID (pre-trained YOLOX) → homography to court coords → rule-based on-court classification → Detectron2 segmentation + temporal-median 8×8×8 color histograms → tracklet integration via Jensen-Shannon divergence
## Data sources named
TrackID3x3 dataset (155,797 frames total): Indoor (7,531 frames, 45,186 bboxes, 2,601 pose frames, Sony HDR-CX680 1280×720, 42 videos, 6 players), Outdoor (143,276 frames, 859,656 bboxes, 3,600 pose frames, iPhone 13 4K, 12 videos, 14 players/4 teams), Drone (4,999 frames, DJI Air 2S); 10-keypoint pose schema; stated release at github.com/open-starlab/TrackID3x3
## Findings (numbers and facts, not vibes)
- Track-ID TI-HOTA (mean±SD, τ=0.5 m): Indoor 80.75±13.16 (DetA 79.46±14.42, AssA 82.11±11.88); Outdoor 46.11±20.55 (DetA 42.94±20.87, AssA 49.81±20.54, FN 3695.74±4280.34, FP 3558.19±4154.12)
- Drone tracking: ByteTrack HOTA 47.92±5.98 (IDs 19.75±4.92); BoT-SORT-ReID HOTA 50.64±3.03 (IDs 15.5±1.91)
- Pose (mean PDJ at threshold 0.5): Outdoor RTMPose 89.43% (best); Drone HRNet 84.07% (best); Indoor RTMPose 73.28% (best; worst due to 720p resolution and forehead-vs-nose head annotation inconsistency, a disclosed dataset defect)
- Weak joints: elbows, wrists (occlusion, motion blur); stable: ankles, shoulders, center
- Authors admit bbox bottom-midpoint ≈ player position is not robust to arm/leg movement; suggest pose-informed positions as future work
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: video-tracking metric design — the TI-HOTA construction (LocSim × all-attributes-match IdSim) is a bankable evaluation template if GSE ever scores a video-tracking prototype (open-starlab org links to the 0377 OpenSTARLab soccer paper)
- OTHER: practice-film analysis lane — tracklet integration via histogram similarity is a reusable trick for jersey-number-less settings
## Engine-actionable? (yes/no + one-line what)
No — rejected as a build (basketball-specific geometry, 6 players); bank only the TI-HOTA metric definition as a template for any future GSE video-tracking lane.
