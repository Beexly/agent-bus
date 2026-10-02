# docs/arxiv-program/research/2026-09-21/arxiv-deep/0387-a-simple-and-effective-temporal-grounding.md
## What it is (1-2 sentences)
Simple open-source recipe for temporally aligning broadcast sports video to play-by-play logs: fine-tuned YOLOv8l detects semantic scorebug text regions (quarter, time-remaining), PaddleOCR reads them, linear-trend denoising + interpolation fills gaps. Ledger verdict: ADAPT — the stage-0 data-infrastructure step GSE's NGS-replacement video lane needs; adapt ROI classes to the NFL scorebug.
## Key metrics/methods (formulas where given, else "not specified")
- YOLOv8l fine-tuned 130 epochs (Ultralytics defaults, heavy augmentation, ~8 h on single T4) to detect semantic text ROIs directly (not generic clock detection); confidence gate C = Pr(object) × IoU > T.
- OCR: PaddleOCR out-of-the-box (own text detection disabled), crops resized to 90 DPI; author claims "far better in practice for digital text recognition than PyTesseract and EasyOCR."
- Denoising: expected clock trend `T = T₀ − (1/30)·n` (30 fps); outlier removal `T′ = {t ∈ T : |t − t̂| < θ}`; interpolation `T_interp = interp(T′, x)` over monotonic decreasing values.
- Parallelization: linear speedup — 2 workers → 50% runtime reduction, 4 workers → 75% (MacBook M3).
## Data sources named
Custom ~30,000-frame text-ROI dataset from Hudl basketball broadcasts (NBA, WNBA, Euroleague, NCAA, WNCAA, US high school; CVAT-labeled; not stated to be released). Evaluation: 97 randomly sampled frames from a pre-segmented 30 fps broadcast corpus. Code: https://github.com/leharris3/contextualized-shot-quality-estimation/tree/temporal-grounding-pipeline.
## Findings (numbers and facts, not vibes)
- 91/97 (≈93.81%) of sampled frames yield perfectly extracted text before post-processing — the paper's single headline accuracy figure; no detection mAP, no OCR character-error rate, no end-to-end alignment accuracy reported.
- Author explicitly states the work is not SOTA advancement; validation is the 91/97 figure plus visual inspection.
- Trained across 6 league levels (broadcaster-agnostic by design) — encouraging for NFL's multi-network scorebugs, but NFL needs down/distance/play-clock ROI classes the basketball model doesn't have.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Stage-0 pipeline for the NGS-replacement video lane: no video↔PBP alignment → no labeled video → no video analytics; everything downstream (tracking, pose, action labels) consumes the alignment this produces: OTHER (data infrastructure).
- INFERENCE: an event-driven variant (change-detection front end → only OCR frames where the scorebug region changes → emit discrete event stream like "Q2, 3:42, 3rd&7") could cut OCR compute ~10× and emit play boundaries directly for NFL.
## Engine-actionable? (yes/no + one-line what)
yes — build the alignment stage first for the NGS-replacement video pipeline: annotate ~5–10k NFL scorebug frames (quarter, game clock, play clock, down, distance), fine-tune YOLOv8l + PaddleOCR + trend denoising, accept only if ≥90% of plays align within ±2 s of nflverse timestamps on a held-out network.
