# arxiv-program/research/2026-09-21/arxiv-deep/0338-exposureengine-oriented-logo-detection-and-sponsor.md
## What it is (1-2 sentences)
Research note on arXiv:2510.04739v1 (Sarkhoosh et al., 2025): ExposureEngine, an end-to-end sponsor-visibility system combining oriented-bounding-box (OBB) logo detection (YOLOv11 + angle-regression head, Varifocal loss) with polygon-based exposure metrics and a LangGraph agentic layer, demonstrated on Swedish elite soccer. Verdict in-file: REJECT — no GSE product lane needs sponsor-visibility measurement; retain two reusable fragments (OBB Tightness Ratio formalism, event-weighted exposure idea).
## Key metrics/methods (formulas where given, else "not specified")
- Detector: YOLOv11 (+ angle-regression head); six configs (v8/v11 × nano 2.7M / small 9.7M / medium 26.4M / large 44.5M); 1280×720 input, batch 32, AdamW lr 0.001, 200 epochs on 3× NVIDIA A100 80GB; augmentation rotation/scaling/contrast.
- Loss: Varifocal `L_VFL = (αp^γ(1−y) + qy) × BCE(p,q)`, (γ,α) = (2.0, 0.75), replacing BCE classification term; total `L = λ_box L_box + λ_cls L_cls + λ_dfl L_dfl` (oriented-box IoU + distribution focal loss).
- Coverage: `c_{ℓ,i} = min(1, A_{ℓ,i}/A_f)` (clipped OBB polygon area / frame area); visibility `z_{ℓ,i} = 1 if c_{ℓ,i} > 0 else 0`.
- Exposure: `E_ℓ = Δt Σ_i z_{ℓ,i}`, Δt = 1/r; avg coverage `C̄^present_ℓ = 100·Σ_i z_{ℓ,i}c_{ℓ,i} / Σ_i z_{ℓ,i}`; `C̄^overall_ℓ = 100·Σ_i z_{ℓ,i}c_{ℓ,i} / N`; max coverage = max_i c_{ℓ,i}; detection count = total OBBs per brand.
- Tightness Ratio: `TR = area(OBB)/area(HBB)` (shoelace); Orientation Necessity = |angle vs horizontal| binned 0–90° in 5° steps.
- Pipeline: frame-wise OBB detections → temporal/spatial filtering → standardized metrics → dashboard (two synchronized players + brand rankings) + LangGraph agents (Analysis, Highlight, Sharing, Coordinator).
## Data sources named
New dataset: 1,103 frames @1 FPS (near-duplicates removed) from 97 professional soccer highlight clips (32 matches, 16 teams, 2024 Swedish men's elite league; events: goals, shots, yellow cards, offsides, substitutions); 670 unique sponsor logo classes with OBB annotations (Label Studio, four-corner polygons, YOLO OBB format); long-tail distribution (dominant sponsors >500 instances); 80-10-10 split. Public: https://huggingface.co/datasets/SimulaMet-HOST/ExposureEngine. Demo: https://youtu.be/tRw6OBISuW4.
## Findings (numbers and facts, not vibes)
- Best config YOLOv11-Medium: mAP@0.5 0.859, precision 0.96, recall 0.87; v8-Large 0.853/0.96/0.88; v11-Large 0.847/0.95/0.88; v8-Medium 0.846/0.96/0.88; v11-Small 0.817/0.96/0.86; v11-Nano 0.781/0.95/0.85. Larger capacity didn't improve precision-recall balance.
- OBB vs HBB: 0.859 vs 0.865 mAP@0.5 (HBB +0.6%), precision 0.96 vs 0.95, recall 0.87 vs 0.88 — within ±1%, no statistically significant detection difference; OBB advantage is geometric precision, not detection accuracy.
- OBB-IoU: 96.8% of predictions ≥0.5, 83.8% ≥0.7, 63.4% ≥0.9.
- TR: highest near-horizontal, minimum ~0.40 at 55–60° orientation; predicted TR curve tracks ground truth.
- Inference: GPU 50.0 ms/frame (19.98 FPS); CPU 148.7 ms (6.72 FPS).
- Limitations: long-tail (670 classes, poor rare-sponsor recall); no temporal tracking (flicker-prone); single league/season; presence ≠ value (goal-celebration exposure worth more — unweighted); agent layer needs deterministic tool graphs + audit logs + approval gates.
- Reusable fragments per in-file spec: (1) Tightness Ratio as a generic geometric-precision diagnostic for any rotated-object detection (e.g., yard-line/pylon detection); (2) event-weighted exposure (weight per-frame metrics by event importance and 9:16 vertical ROI) for clip analytics; (3) agent approval-gate governance pattern.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — vision-methods fragment only: Tightness Ratio diagnostic + event-weighted exposure weighting idea, applicable to any future GSE rotated-object detection or clip-analytics work.
- OTHER — product-fit REJECT: sponsor measurement serves a customer class GSE doesn't have (no overlap with picks/props/fantasy/content lanes).
## Engine-actionable? (yes/no + one-line what)
no — System rejected for product-lane fit; keep only the Tightness Ratio diagnostic and event-weighted exposure fragments if GSE ever builds rotated-object detection or on-screen prominence analytics.
