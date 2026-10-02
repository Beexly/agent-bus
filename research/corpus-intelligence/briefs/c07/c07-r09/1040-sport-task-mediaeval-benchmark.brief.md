# arxiv-program/research/2026-09-21/arxiv-deep/1040-sport-task-mediaeval-benchmark.md
## What it is (1-2 sentences)
Full read of arXiv:2301.13576v1 (Martin et al., MediaEval 2022): a **benchmark-task definition paper** (not a method paper) specifying two subtasks on TTStroke-21 table-tennis video — (1) stroke classification from trimmed clips, (2) temporal stroke detection from untrimmed video — with exact datasets, splits, submission formats, and metrics. Baseline code: https://github.com/ccp-eva/SportTaskME22. Verdict in file: **ADAPT** — adapt the benchmark design itself as GSE's internal action-evaluation protocol.

## Key metrics/methods (formulas where given, else "not specified")
- Subtask 1: global + per-class accuracy on trimmed clips (20 stroke classes: 8 services, 6 offensive, 6 defensive; Forehand/Backhand super-classes + non-stroke).
- Subtask 2: COCO-style temporal mAP — AP averaged over temporal IoU thresholds {0.50, 0.55, …, 0.95} (20 thresholds); detection = True when temporal IoU ≥ threshold; frame-wise temporal IoU as secondary metric.
- Protocol: up to 5 runs per subtask via XML submission; fully automatic; working-notes paper required; pre-trained models on prior years' TTStroke-21 forbidden.
- Assumptions: stroke temporal boundaries well-defined enough for IoU scoring; trimmed clips contain exactly one stroke or none.

## Data sources named
Classification: 1,155 trimmed videos (>210K frames), 807 train / 230 val / 118 test. Detection: 28 untrimmed videos, 100 minutes, >718K frames at 120 FPS, 16/6/6 train/val/test (videos disjoint; players may repeat). 1920×1080, 46.1 GB total. Faces blurred (SSD+ResNet + tracking). Annotations by professional players on a crowdsourced platform. Terms: usage agreement with University of Delft; data destruction required by 2023-01-30 (license window expired — fresh access terms needed).

## Findings (numbers and facts, not vibes)
- 2021 reference: classification best 74.2% global accuracy (Qian et al., SWIN, long-tail-aware) vs ResNet-50 68.8% vs baseline 20.4%; detection: baseline mAP unbeaten; best frame-wise IoU 0.247 (YOLOv5) vs baseline 0.144.
- 2022 dataset enriched so all strokes represented in every split; same TTStroke-21 split as Martin et al. [1,2] for cross-paper comparison.
- Long-tail-aware training decides fine-grained sports classification (74.2% vs 20.4% baseline).
- Limitations: benchmark only (zero novel architecture); single-sport, fixed camera, single player; 2021 detection far from solved; license expired/restrictive; class imbalance + long-tail dominate.
- Verdict: **ADAPT**; numeric gate: trivial baseline must score near chance on classification and strong model must show per-class accuracy spread ≥ 30 points between head and tail classes (mirroring 2021 74.2-vs-20.4 dynamic).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: GSE-ActionBench — define an internal benchmark with the same two subtasks for an NFL event (e.g., pass-play type from trimmed clips; drive segmentation from full game video), scored with global+per-class accuracy and COCO-style temporal mAP (0.5–0.95) + frame-wise IoU; adopt the "forbid pre-training on prior benchmark years" rule and require working-notes-style method documentation per model version.
- OTHER: 2021 lesson — long-tail-aware training (SWIN 74.2% vs baseline 20.4%) transfers directly to NFL play-type distributions.

## Engine-actionable? (yes/no + one-line what)
Yes — adopt the two-subtask benchmark protocol (COCO-style temporal mAP + frame-wise IoU) plus a third boundary-precision subtask (mean absolute boundary error in frames) for GSE's own fine-grained play/event model evaluation.
