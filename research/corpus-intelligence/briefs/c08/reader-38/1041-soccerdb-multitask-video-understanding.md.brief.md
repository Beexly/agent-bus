# docs/arxiv-program/research/2026-09-21/arxiv-deep/1041-soccerdb-multitask-video-understanding.md
## What it is (1-2 sentences)
Ledger read of "SoccerDB: A Large-Scale Database for Comprehensive Video Understanding" (MMSports 2020, arXiv:1912.04465v4): a 346-match / 171,191-segment soccer video corpus annotated for object detection, action recognition, temporal localization, and highlight detection, used to show joint task-correlation modeling beats isolated baselines. Verdict: ADAPT — blueprint for GSE's game-video understanding stack.
## Key metrics/methods (formulas where given, else "not specified")
MRTS (Mask-and-RGB Two-Stream): Faster R-CNN detections → per-class binary object masks as a second SlowFast stream, concatenated at FC layer. Metrics: COCO AP0.5:0.95 (detection), per-class AP (recognition), AR@AN + AUC (proposals), temporal mAP at IoU 0.3–0.7, AP for playback highlights. Focal loss (RetinaNet), cross-entropy (recognition), logistic loss on per-label sigmoids (multi-task). Notable: naive shared-trunk multi-task hurt recognition (−1.85), separate highlight branch helped (+1.46).
## Data sources named
SoccerDB dataset (github.com/newsdata/SoccerDB); 270 matches from SoccerNet (2014–2017), 76 from Chinese Super League (2017–2018), FIFA World Cups 18/19/20. Pre-trained backbones: ResNeXt-101-FPN via COCO (mmdetection), SlowFast/I3D via Kinetics.
## Findings (numbers and facts, not vibes)
- MRTS mAP 72.11 vs SlowFast-32 62.70: object-mask stream adds **+9.41 absolute points (+15% relative)** on action recognition.
- Detection (video): player 73.9–74.3, goal 70.5–71.2, ball 41.0–41.6 — small fast blurry objects are the hard case.
- Highlight detection AP: branched multi-task (mt-hl-branch) 78.50 vs full fine-tune 76.99 vs naive multi-task 74.65 vs fc-only 68.72.
- Temporal detection: SoccerDB-trained extractor mAP 54.30% vs Kinetics-pretrained 52.35%.
- INFERENCE: numbers support the file's own GSE implementation plan (GSE-VideoUnderstand) and numeric gates (≥+5 points for mask stream on NFL clips).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: detection+tracking-first CV pipeline feeding event classifiers (directly relevant to GSE's computer-vision program; identity-aware masks suggested for QB-vs-rusher geometry on sacks, which touches QB-BEHAVIOR geometry but is tagged OTHER as the paper is soccer video).
## Engine-actionable? (yes/no + one-line what)
yes — build MRTS-style RGB + object-mask two-stream event classifier on NFL broadcast (snap→whistle boundaries); use branched (not shared-trunk) multi-task head for event recognition + highlight scoring.
