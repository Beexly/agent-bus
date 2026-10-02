# arxiv-program/research/2026-09-21/arxiv-deep/0374-trackid3x3-a-dataset-and-algorithm-for.md
## What it is (1-2 sentences)
Full-paper deep read of arXiv:2503.18282v2 (Hu et al., 2025): a public dataset + baseline algorithm for multi-player tracking with identity attribution and 2D pose estimation from fixed cameras in 3x3 basketball. Verdict in-file: REJECT for GSE — basketball-only, no football transfer path; only the TI-HOTA metric design is banked as an evaluation template for any future GSE video-tracking lane.

## Key metrics/methods (formulas where given, else "not specified")
- **TI-HOTA metric:** TI-HOTA = (1/19) × Σ_{α∈{0.05…0.95}} √(DetA_α × AssA_α); DetA = |TP|/(|TP|+|FP|+|FN|); AssA = (1/|TP|) Σ_c A(c); A(c) = |TPA|/(|TPA|+|FPA|+|FNA|); similarity = LocSim × IdSim with LocSim = e^{ln(0.05)·‖P−G‖²/τ²} (τ = 0.5 m) and IdSim = 1 iff ALL identity attributes match else 0.
- **Track-ID task:** per-frame (court_x, court_y, team, initial_position or jersey_number), ≤6 players; Indoor ID = (team ∈ {offense, defense}, initial_position ∈ {top, left, right}); Outdoor ID = (team, jersey_number); positions from homography of manually annotated court keypoints (bbox bottom-edge midpoint).
- **Baseline pipeline:** BoT-SORT-ReID (pre-trained YOLOX, no fine-tuning) → homography → rule-based on-court classification → Detectron2 segmentation + temporal-median 8×8×8 color histograms (Indoor) or jersey-number recognition + torso color histograms (Outdoor) → tracklet integration via Jensen–Shannon divergence → team assignment from opening-frame geometry.
- **Pose baselines:** RTMPose, HRNet, SwinPose (top-down, no fine-tuning); 10 keypoints/player; PDJ at 0.5 torso-normalized threshold + AUC of PDJ curve (0–0.5, max 0.5).
- Portable adaptations noted in-file: TI-HOTA with τ ≈ 1.0 m for football field scale; tracklet integration via histogram similarity for jersey-number-less settings.

## Data sources named
- **TrackID3x3** (released, claimed at github.com/open-starlab/TrackID3x3): 155,797 frames total. Indoor: 7,531 frames, 45,186 bboxes, 2,601 pose frames; university gym (9.50×15.05 m), Sony HDR-CX680 (1280×720), 42 videos, 6 female players, fixed roles, no jersey numbers. Outdoor: 143,276 frames, 859,656 bboxes, 3,600 pose frames; iPhone 13 (3840×2160), 12 videos, 14 male players/4 teams, double round-robin 5-min games, FIBA 3x3 rules, 11.05×15.05 m court. Drone: 4,999 frames (from 92 min), 29,994 bboxes, 500 pose frames; DJI Air 2S (3840×2160), 16 male players/4 teams.
- 10-keypoint pose schema (head, shoulders, elbows, wrists, ankles, hip-midpoint), reduced from COCO-17; 6,701 pose frames total. Ethics: written informed consent; approvals from Nagoya University, Ryutsu Keizai University, Anhui Normal University.

## Findings (numbers and facts, not vibes)
- Track-ID TI-HOTA (mean±SD at τ=0.5): Indoor 80.75±13.16 (DetA 79.46±14.42, AssA 82.11±11.88, FN 155.81±140.10, FP 133.81±135.11; 8.98±3.24 s clips); Outdoor 46.11±20.55 (DetA 42.94±20.87, AssA 49.81±20.54, FN 3695.74±4280.34, FP 3558.19±4154.12; 40.11±34.23 s clips). ID switches cascade into DetA failure for remainder of video.
- Drone baselines: ByteTrack HOTA 47.92±5.98 (IDs 19.75±4.92); BoT-SORT-ReID HOTA 50.64±3.03 (IDs 15.5±1.91) — ReID reduces ID switches.
- Pose PDJ/AUC: Outdoor — RTMPose 89.43%/45.12% (best), HRNet 88.51%/45.21%, SwinPose 89.27%/45.03%; Indoor worst (720p + forehead-annotated heads): RTMPose 73.28%/36.90%; stable joints = ankles, shoulders, center; weak = elbows, wrists.
- Indoor roles were fixed by experimental design (memorization risk); Outdoor real jersey-number recognition collapsed to 46.11. Manual court annotation + manual non-player filtering in drone eval — not fully automated.
- Org connection: open-starlab = same group as the OpenSTARLab soccer paper (0377 in this wave).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] No NFL/football content of any kind. Single salvageable artifact: the TI-HOTA metric construction (LocSim × all-attributes-match IdSim) as an evaluation template if GSE ever scores a fixed-camera tracking prototype (e.g., practice-film analysis) — <1-day port, τ ≈ 1.0 m.

## Engine-actionable? (yes/no + one-line what)
No — no football content, no transferable model; the only adoptable artifact (TI-HOTA metric definition) applies only if a future GSE video lane needs a tracking+ID evaluation score.
