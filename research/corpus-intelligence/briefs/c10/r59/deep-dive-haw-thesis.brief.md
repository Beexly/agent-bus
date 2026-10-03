# research/2026-10-01/cv-corpus/deep-dive-haw-thesis.md
## What it is (1-2 sentences)
GATED abstract-only deep dive on Linus Paul Teklenburg's 2024 HAW/THI Bachelor thesis "AI-based classification of American football plays combining computer vision and historical play-by-play data": a two-stream (vision + XGBoost-on-play-by-play-text) multimodal pass-vs-run classifier (74.13% test accuracy) whose CV-lane value is in its pre-snap feature extractors (OCR, line extraction, YOLOv8) — full text not obtained ("Open Access: nein" / full copyright protection, no download, no author-posted copy found).
## Key metrics/methods (formulas where given, else "not specified")
- Two-stream multimodal pipeline: vision stream (pre-snap NFL images → visual features via OCR, line extraction, YOLOv8 object detection: player positions, formations, field dynamics) + text stream (XGBoost on historical play-by-play descriptions) → fused pass-vs-run prediction. No fusion formula quoted (abstract-level only).
- Evaluation metrics: accuracy, precision, recall, F1. No formulas in the file; no invented formulas.
- Proposed clean-room spec in file: `cv-scoreboard-ocr.ts` (new) — crop scoreboard-bug ROI (default heuristic: top-left 320×90 + edge-density search) → grayscale → adaptive threshold → 2× upscale → OCR (Tesseract or cloud OCR behind interface, local-first) → strict regexes: `/(\d)(?:ST|ND|RD|TH)\s*&\s*(\d+)/` down & distance, `/(\d):(\d\d)/` clock, `/(\d+)\s*-\s*(\d+)/` score → cross-check OCR LOS vs homography LOS (mismatch > 2 yards → LOW confidence, not failure). Synthetic test fixture: parses "3RD & 7", "Q2", "08:41", "17 - 14" → `{down:3, distance:7, quarter:2, clockSec:521, scoreHome:17, scoreAway:14}`, confidence ≥ 0.9; garbage crop → all-null, confidence 0, never throws.
- File is abstract-only: exact line-extraction algorithm (Hough vs LSD vs learned), YOLOv8 variant/training recipe, fusion architecture, dataset sizes/splits — all inside the gated text, NOT claimed.
## Data sources named
- Thesis dataset: NFL pre-snap images + historical play-by-play data, preprocessed by the author — sizes, sources, labeling protocol, splits unknown (gated); no license info; treat as unavailable.
- Repository metadata: `https://opus4.kobv.de/opus4-haw/frontdoor/index/index/docId/4745`; URN `urn:nbn:de:bvb:573-47451`; XII + 58 pages; first publication 2024/04/21; reviewers Torsten Schön and Marc Aubreville; Technische Hochschule Ingolstadt, Fakultät Informatik, Künstliche Intelligenz (B.Sc.). Non-open PDF URL attempted: `https://opus4.kobv.de/opus4-haw/files/4745/I001915178Thesis.pdf` (does not serve). No GitHub repo by Teklenburg found.
## Findings (numbers and facts, not vibes)
- Reported results: **74.13% test accuracy, 73.78% validation accuracy** on pass/run classification.
- The thesis uses **YOLOv8** as its detection architecture — same family as GSE's YOLOv8n player detector (architecture corroboration).
- Line extraction is independently corroborated across two sources: this thesis + Sloan Hough-line direction (deep-dive-sloan2018.md, Kernel S1).
- Novel kernel vs. other sources: OCR on the broadcast frame — reading the scoreboard bug gives structured game-state (down, distance, quarter, clock, score) for free; none of the other papers use OCR.
- One citing paper mislabels it "Ph.D. Thesis" — repository metadata is authoritative: Bachelor thesis.
- Single highest-value gated item flagged in file: the thesis's YOLOv8 training-data composition and operating point for pre-snap NFL images → process action: polite author email requesting the training-data recipe section (NOT the PDF, respecting copyright).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Broadcast-bug OCR → free structured pre-snap game state (down/distance cross-checks homography LOS; play clock gates pre-snap labeling; snap-timing segmenter): (SCHEME).
- YOLOv8 architecture corroboration for player detection + gated training recipe (the pile/ground-player recall problem): (OTHER).
- Line-extraction corroboration with Sloan Hough direction for field-landmark geometry: (OTHER).
- Vision+XGBoost-text fusion as template for GSE's multimodal play-type prior (replace their text stream with GSE play-by-play + market features): (SCHEME).
## Engine-actionable? (yes/no + one-line what)
Yes — build `cv-scoreboard-ocr.ts` per the file's clean-room spec (synthetic-fixture tests green, one real broadcast frame manually verified) and request the YOLOv8 training recipe from the author.
