# docs/dataset-pull-commands.md
## What it is (1-2 sentences)
A computer-vision dataset intake runbook (K4): datasets are NEVER downloaded into the repo — they are pulled to a local directory outside version control (e.g. `~/data/cv/`) and ingested from local COCO exports, with license verification via a `DATASET_LICENSES.json` sidecar that the ingest functions enforce.
## Key metrics/methods (formulas where given, else "not specified")
Not specified. The ingest signature is shown but no metrics/formulas: `ingestRoboflowHelmet(cocoAnnotations, cocoCategories, licenses)` returns `{ positives, excludedSideline, hardCount }`; positives feed a "v2 training mix" and `excludedSideline` must stay empty of players.
## Data sources named
- Roboflow Universe NFL helmet competition set (Page-verified Public Domain; do NOT file as CC BY 4.0).
- HF mirror `keremberke/nfl-object-detection` (uploader-claimed Public Domain; prefer the Roboflow original).
- the-playmakers / wr-finder dataset (`ruidazeng/the-playmakers`, Roboflow Universe `cs-1430/wr-finder`, CC BY 4.0 with attribution required).
- GitHub repo `ruidazeng/the-playmakers` is RESEARCH-ONLY (dead MIT badge — no LICENSE file ever existed; do not copy its code).
- GSE hand-labeled 57-frame eval (internal only — never leaves the private corpus).
## Findings (numbers and facts, not vibes)
- Roboflow NFL helmet competition set: 9,947 images · 193,736 helmet boxes · classes: Helmet, Helmet-Blurred, Helmet-Difficult, Helmet-Sideline, Helmet-Partial. BibTeX from the dataset page, author "home", 2022, recorded in training-run notes not code. [OTHER]
- wr-finder: 443 images · 8 position classes · mAP@50 90.2%. Every training run and derived artifact must carry attribution: "WR Finder dataset by ruidazeng (Roboflow Universe, cs-1430/wr-finder), CC BY 4.0". [OTHER]
- Ingest functions refuse to run if a dataset's recorded license is missing or mismatched — verify before pulling. [OTHER]
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
Tagged inline. Aggregate: OTHER entirely (CV dataset inventory/license compliance for the vision pipeline). No QB-BEHAVIOR, COACHING, OL, SCHEME, or TRUST-SIGNAL content — though the helmet/WR bounding-box sets are the raw material for a future player-tracking/vision signal layer.
## Engine-actionable? (yes/no + one-line what)
yes — if the CV lane ever needs a player-tracking signal, this file gives the exact licensed datasets, pull commands, and ingest entry points to reproduce the training mix.
