# arxiv-program/research/2026-09-21/arxiv-deep/1040-sport-task-mediaeval-benchmark.md
## What it is (1-2 sentences)
Full-text ADAPT verdict on arXiv:2301.13576v1 [cs.AI] (31 Jan 2023), Martin et al., "Sport Task: Fine Grained Action Detection and Classification of Table Tennis Strokes from Videos for MediaEval 2022" (6 pages, PDF parsed in full) — a benchmark-task DEFINITION paper, not a method paper: it specifies the two-subtask evaluation protocol (trimmed stroke classification + untrimmed stroke detection) on TTStroke-21 table-tennis video with exact datasets, splits, submission formats, and metrics.

## Key metrics/methods (formulas where given, else "not specified")
- Subtask 1 (classification): global + per-class accuracy on trimmed clips; 21 classes (20 stroke classes — 8 services, 6 offensive, 6 defensive; Forehand/Backhand super-classes — + non-stroke).
- Subtask 2 (detection): COCO-style temporal mAP — AP averaged over 20 IoU thresholds {0.50, 0.55, …, 0.95} (step 0.05); detection = True when temporal IoU ≥ threshold. Frame-wise temporal IoU (overlap of predicted vs GT stroke frames across all videos) as secondary metric.
- Protocol: up to 5 runs per subtask via XML submission; fully automatic; working-notes paper required; pre-trained models on prior years' TTStroke-21 FORBIDDEN (keeps yearly comparisons honest).
- Assumptions: stroke temporal boundaries are well-defined enough for IoU-based detection scoring; trimmed classification clips contain exactly one stroke or none.
- Baseline code public: https://github.com/ccp-eva/SportTaskME22.

## Data sources named
- TTStroke-21 table-tennis video dataset: classification — 1,155 trimmed videos (>210K frames), 807 train / 230 val / 118 test; detection — 28 untrimmed videos, 100 minutes, >718K frames at 120 FPS, 16/6/6 train/val/test (videos disjoint across sets; players may repeat). 1920×1080, 46.1 GB total.
- Faces blurred (SSD+ResNet detector + tracking). Annotations by professional players on a crowdsourced platform.
- Terms: usage agreement with the University of Delft (MediaEval 2022 Research Collections); data destruction required by 2023-01-30 — the license window has EXPIRED; fresh access terms would be needed for reuse.

## Findings (numbers and facts, not vibes)
- 2021 edition reference results: classification — best 74.2% global accuracy (Qian et al., SWIN-Transformer, long-tail-aware), ResNet-50 68.8%, baseline 20.4%; detection — NO submission beat the baseline mAP; best frame-wise IoU 0.247 (YOLOv5) vs baseline 0.144.
- 2022 dataset enriched so all strokes represented in every split; same TTStroke-21 split as Martin et al. [1,2] for cross-paper comparison.
- Limitations (file): benchmark paper, not a method paper — zero novel architecture to adopt; single-sport (table tennis), fixed camera, single player; 2021 detection results show the task is far from solved (mAP baseline unbeaten, IoU 0.247); license terms expired/restrictive — dataset not freely reusable today; class imbalance and long-tail effects dominate (2021's best method explicitly targeted long-tail bias).
- Leakage: pre-trained models on prior years' TTStroke-21 explicitly forbidden for the 2022 edition; trimmed clips drawn from the same untrimmed videos at non-overlapping moments (a mild within-video correlation); detection sets use disjoint videos.
- GSE implementation spec (from file): GSE-ActionBench — internal benchmark with the same two subtasks for an NFL event (e.g., pass-play type from trimmed clips; drive segmentation from full game video), scored with global+per-class accuracy and COCO-style temporal mAP (0.5–0.95) + frame-wise IoU. Adopt the "forbid pre-training on prior benchmark years" rule to keep yearly comparisons honest; require working-notes-style method documentation per model version.
- Numeric gate: GSE's internal action benchmark is only useful if it reproduces the paper's metric behavior — a trivial baseline must score near chance on classification (validating task difficulty) and a strong model must show the long-tail gap (per-class accuracy spread ≥ 30 points between head and tail classes), mirroring the 2021 74.2-vs-20.4 dynamic.
- Reproducible test: re-run the public baseline (github.com/ccp-eva/SportTaskME22) on the 2022 classification split and reproduce ≈20% (2021 baseline figure) to validate the evaluation harness before extending it to NFL data.
- Improvement experiment: add a third subtask the paper lacks — boundary-precision scoring (mean absolute boundary error in frames) for the detection task, since GSE's downstream products (clip extraction, highlight boundaries) care about exact cut points, not just IoU-thresholded mAP.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — The benchmark DESIGN is what GSE adapts: the two-subtask split (trimmed classification with known boundaries vs untrimmed detection+classification) and the COCO-style temporal mAP + frame-wise IoU metric pair are exactly the evaluation protocol GSE needs for its own fine-grained play/event benchmarks (e.g., route-type classification from trimmed clips vs play segmentation from full broadcast). Serves the tracking lane and the CV program's evaluation discipline.
- OTHER — The 2021 lesson — long-tail-aware training decides fine-grained sports classification (SWIN 74.2% vs baseline 20.4%; ≥30-point per-class head-vs-tail spread as the health check) — transfers directly to NFL play-type distributions (rare route types, rare formations). Any GSE fine-grained classifier must be judged on per-class accuracy, not just global accuracy.
- QB-BEHAVIOR — QB-adjacent: a GSE-ActionBench instance for pass-play/route-type classification from trimmed clips vs play segmentation from full broadcast is the evaluation substrate for QB-behavioral profiles built from video (route-running detail, play-type recognition). The trimmed-vs-untrimmed distinction mirrors film-room clip labeling vs full-game charting.
- TRUST-SIGNAL — The "forbid pre-training on prior benchmark years" rule plus mandatory working-notes documentation is a governance template for honest year-over-year model comparison — maps to Garrett's audit-receipts doctrine (every model version documents its method; no quiet contamination across seasons).
- OTHER — The third-subtask improvement (boundary-precision scoring, mean absolute boundary error in frames) matters for any GSE product that cuts clips: mAP-thresholded IoU doesn't guarantee clean cut points, and the standing video rule needs seconds-long exact clips.

## Engine-actionable? (yes/no + one-line what)
Yes — adopt the two-subtask (trimmed classification + untrimmed detection) evaluation protocol with COCO-style temporal mAP and the long-tail per-class-accuracy-spread (≥30 points) health check as GSE-ActionBench for all CV action models.
