# docs/arxiv-program/research/2026-09-21/arxiv-deep/0256-highthroughput-cotton-phenotyping-big-data-pipeline.brief.md
## What it is (1-2 sentences)
Deep read (2026-09-21, verdict: REJECT) of Issac et al. (2023, arXiv:2305.05423) on a Lambda-architecture Azure big-data pipeline for cotton bloom detection with YOLOv5 — a precision-agriculture vision paper correctly triaged as having nothing that transfers to GSE's NFL/NBA modeling, data infrastructure, or content operation.
## Key metrics/methods (formulas where given, else "not specified")
- precision = TP/(TP+FP); recall = TP/(TP+FN); F1 = 2·precision·recall/(precision+recall); IoU = overlap/union, correct iff IoU ≥ 0.55.
- YOLOv5 "large" (46.5M params) trained via Azure AutoML (early stop at 30/70 epochs, lr 0.01, batch 10); 1,300 hand-labeled images (80/20 split); pipeline: Blob → Data Lake Gen2 → Databricks/Spark batch (3-min scheduled) + Event Grid stream → AKS REST serving.
## Data sources named
Custom cotton-field dataset, University of Georgia Tifton farm, June–October 2021: 765 stereo frames (1,530 lens views, five-tile slices, inner-2-rows), 9,018 RGB images (530×144) from 10 collection days (July 8–Sept 9, 2021); ZED RGB camera on autonomous rover (Nvidia Jetson Xavier). No code or dataset link given.
## Findings (numbers and facts, not vibes)
- Model: mAP 0.96, precision 0.84, recall 0.99, F1 0.904 at IoU 0.55; training 1h10m on 6 cores/1 GPU. [OTHER]
- Pipeline: 9,000 images in 3h50m synchronous → 34 min async; batch ingestion 2 min → 8.62 s; stream ingestion 12 s → 150 ms; interactive-cluster reuse saves ~3 min restart per trigger. [OTHER]
- Cost: training ~$3.56 VM (~$8.6 all-in); AKS deployment ≈ $70/month (~$1,000/month at scale); 2023 Azure pricing. [OTHER]
- mAP 0.96 on a single farm, single season, single cultivar set — no external test, generalization unproven. [OTHER]
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- None — no finding maps to any intelligence tag; the only generic lessons (async beats sync for I/O-bound batch work; reuse warm compute clusters) are standard engineering, not research findings worth ledgering [OTHER].
## Engine-actionable? (yes/no + one-line what)
No — the model detects cotton blooms and the pipeline pattern is domain-specific Azure ETL with no sports-statistics analogue; nothing to implement.
