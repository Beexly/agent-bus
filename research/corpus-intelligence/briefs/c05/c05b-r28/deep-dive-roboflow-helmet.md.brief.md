# research/2026-10-01/cv-corpus/deep-dive-roboflow-helmet.md
## What it is (1-2 sentences)
Dataset dossier on the Roboflow NFL-competition helmet dataset (home-mxzv1/nfl-competition): 9,947 NFL-game images with 193,736 helmet bounding boxes across 5 classes, verified Public Domain license, evaluated as hard-positive training material for fixing GSE's person-detector recall gap (v1: precision 1.00, recall 0.74 on 57 hand-labeled frames).
## Key metrics/methods (formulas where given, else "not specified")
- 9,947 images (4,958 sideline + 4,989 end zone), 193,736 helmet boxes (114,986 sideline + 78,750 end zone), ~19.5 boxes/image, 9,825 unique plays; boxes stored as left/width/top/height in `image_labels.csv`.
- Class taxonomy (the payload): Helmet 66.98%, Helmet-Blurred 17.31%, Helmet-Sideline 7.76%, Helmet-Partial 4.55%, Helmet-Difficult 3.39% — **33.02% of labels are pre-labeled hard subsets** (motion blur / partial / occluded), exactly GSE's pile/occlusion recall problem, already annotated.
- TRAP documented: Helmet-Sideline (7.76%) = sideline personnel, NOT players — EXCLUDE from person positives or it trains false positives.
- Training mix recipe: batch sampler 40% our 57 frames (internal), 30% wr-finder v3 (CC BY 4.0), 30% helmets; within helmets, oversample hard classes 3:1; helmet boxes → person-present positives (expand to torso or use as helmet-head detector stage); focal-loss weighting on hard classes.
- Helmet-head stage option: small YOLO head trained on helmet boxes, run only on frames where person-detector confidence is low (piles) — cheap mask-free alternative to RF-DETR/SAM-2 pile approaches; Helmet-Difficult boxes that persist across frames = through-pile track anchors for long-tail re-ID.
- HF mirror (keremberke/nfl-object-detection): 1280×720 resize, splits train 6,963 / valid 1,989 / test 995 — uploader's claim, unverified; prefer Roboflow original.
## Data sources named
Roboflow Universe home-mxzv1/nfl-competition (Public Domain — verbatim "Task: Object Detection License: Public Domain", updated 4 years ago; free-tier account + API key required to download; BibTeX block author "home", year 2022); AWS SageMaker blog "Helmet detection error analysis in football videos" (label-distribution source); cross-ref deep-dive-aws-sagemaker.md (error stratification), deep-dive-harshraj-linkedin.md (RF-DETR/SAM-2 pile approach), deep-dive-the-playmakers.md (license sidecar).
## Findings (numbers and facts, not vibes)
- FINAL LICENSE VERDICT: USABLE — Public Domain, no attribution legally required (record BibTeX anyway).
- GSE detector v1 recall 0.74, misses concentrate in piles / ground players / edge partials; done/verified bar = v2 recall ≥ 0.85 on the pile/ground-player subset with zero Helmet-Sideline leakage (audited by ingestion test asserting 8 positives / 4 hard from a 10-annotation fixture).
- 33.02% hard-label mass gives a ready-made prior for the error-stratification protocol: if our 57-frame eval shows a different hard-label rate, our eval set is too easy.
- One item to verify at pull time: actual export class distribution vs the AWS blog's percentages (mismatch = export differs).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: CV training data + hard-positive mining recipe for occlusion/pile recall — the detector-v2 fix.
- TRUST-SIGNAL: dataset license verification practice — verified verbatim, not assumed (explicitly corrects a would-be CC BY 4.0 misfiling).
- OTHER: error-stratification calibration (hard-label-rate prior).
## Engine-actionable? (yes/no + one-line what)
Yes — pull the Roboflow dataset, run the ingestion/sampler/license-sidecar tests, and train detector v2 on the 40/30/30 mix with 3:1 hard oversampling to push pile-subset recall from ~0.74 to ≥0.85.
