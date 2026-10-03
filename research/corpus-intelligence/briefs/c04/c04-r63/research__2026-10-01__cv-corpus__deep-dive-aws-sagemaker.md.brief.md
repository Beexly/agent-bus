# docs/research/2026-10-01/cv-corpus/deep-dive-aws-sagemaker.md
## What it is (1-2 sentences)
Deep-dive read of the AWS blog "Football tracking in the NFL with Amazon SageMaker" (written for the 2020 season kickoff, MXNet/Gluon 1.6.0 stack), authors Michael Lopez (NFL Director of Football Data and Analytics), Colby Wise and Divya Bhargavi (Amazon ML Solutions Lab) — a dated stack, but the experimental method (HPO discipline + five-axis error stratification) is the extractable kernel. Targeted at GSE's gap (a): detector recall on piles/ground players.
## Key metrics/methods (formulas where given, else "not specified")
- mAP defined in the article as the area under the precision–recall curve (precision/recall pairs from sweeping confidence thresholds, interpolated), mean across classes for K>1. No per-architecture mAP numbers given.
- Single-class detection: human annotators draw bounding boxes around the football in a SageMaker Ground Truth UI over S3 image sequences → `output.manifest` with S3 path, (x, y) box coordinates, class label `football`; annotations converted to RecordIO.
- Transfer learning: pre-trained Gluon Model Zoo nets fine-tuned. Worked example uses SageMaker built-in SSD with ResNet50 backbone; Script Mode path names YOLOv3 and Faster-RCNN with several backbone combinations. Worked training snippet: `train_instance_type="ml.p3.16xlarge"`, `epochs: 15`, parameter-server distribution.
- Overfitting controls: MXNet Gluon image normalization + randomized image flipping and cropping.
- HPO: SageMaker Automatic Model Tuning (Bayesian + random search), >100 jobs, `max_jobs=100`, `max_parallel_jobs=10`; worked ranges: `lr` continuous [0.001, 0.1], backbone categorical {resnet50_v1b, resnet101_v1d}; objective = highest mAP on held-out test data (regex-captured from the script's "Validation: " printout). Note: the article's HPO discipline is "optimize held-out mAP, not train mAP."
- Five-axis error stratification (binary qualitative pairs, no numeric cutoffs given): occlusion of football (high/low), bounding-box size (small/large), aspect ratio (tall/wide), camera angle (endzone/sideline), contrast football vs background (high/low). Stated purpose: produce a per-stratum mAP table that directs strategic data collection — "we understood which qualitative aspect of image the model was struggling to predict, and these findings led us to strategically gather additional data to target and improve upon these areas."
- Proposed GSE stratification module spec: `cv-eval-stratification.ts` — match detections to GT at IoU ≥ 0.5; occlusion = fraction of GT box overlapped by other GT boxes, high if > 0.4; size = GT area < area median → small; aspect = width/height > 1.5 → wide; contrast = std(ring)/(mean(box)+eps) > contrastMedian → high; 32 stratum cells, TP/FP/FN per cell, top-3 lowest-recall cells (n≥5) drive the "gather N more frames matching <worst-cell descriptor>" recommendation. Test assertions: 10-GT synthetic set (6 pile boxes found 2, 4 clean found 4) → assert high-occlusion recall ≈ 0.3333 (tol 1e-9) and low-occlusion recall 1.0; empty eval set → 32 cells n=0, worstCells empty.
## Data sources named
- NFL broadcast play segments → football bounding boxes: internal to the NFL, NOT released. Not usable for GSE training. No dataset size stated in the article.
- Verdict in file: method intel only, no data asset for the repo.
## Findings (numbers and facts, not vibes)
- SSD predicts relative offsets to a fixed set of boxes at every feature-map location; the article states: "Empirically, SSD underperforms other object detector algorithms on small objects like football."
- YOLOv3 (DarkNet-53, concatenating multiple feature maps) → "improved performance on smaller objects" relative to SSD.
- Faster-RCNN (shared deep network predicting region proposals from feature maps, aggregated downstream for classification + box prediction) "empirically outperformed other networks on small objects in our use case."
- Inference-time tradeoff stated qualitatively: SSD and YOLOv3 fast (FPS-critical for real-time); Faster-RCNN slower. No FPS numbers given.
- Article does NOT establish: per-architecture mAP values, per-stratum mAP values, FPS numbers, or training-set size.
- GSE current state per the file's task brief: YOLOv8n file detector, precision 1.00, recall 0.74 on 57 hand-labeled people; misses concentrate in piles / ground players / edge partials.
- File's applicability caveat: GSE pile misses are partly occluded-large objects, so the AWS "small object" architecture finding does not transfer directly — the protocol transfers exactly; stratify before switching architectures.
- Follow-on detector-v2 eval justified: YOLOv8n (current) vs Faster-RCNN (ResNet50-FPN, torchvision reference weights) vs RT-DETR behind the `cv-detector-contract.ts` `Detector` interface; compare per-stratum recall; decision rule = promote the architecture that wins the worst 3 cells, subject to measured FPS on the same harness.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Five-axis detector error stratification protocol + worst-cell "strategic gathering" rule → **OTHER** (CV/infra method, no football behavior signal)
- Two-stage (Faster-RCNN) vs one-stage (SSD/YOLO) small-object finding and the "stratify before switching architectures" caution → **OTHER**
- HPO discipline (optimize held-out mAP, not train mAP) as detector-selection gate → **OTHER**
- YOLOv8n recall 0.74 / 57-frame eval state and Roboflow Public Domain helmet set as occluded-positive labeling source → **OTHER**
## Engine-actionable? (yes/no + one-line what)
Yes — implement `cv-eval-stratification.ts` (32-cell occlusion/size/aspect/angle/contrast recall table) and run it against the 57-frame eval set to convert the 0.74 recall into a named worst-cell data-collection order before any detector-architecture switch.
