# research/2026-10-01/cv-corpus/deep-dive-the-playmakers.md
## What it is (1-2 sentences)
A license-resolution + training-recipe evidence record (2026-10-01) for the Brown CS 1430 final project "the-playmakers" (ruidazeng) — a YOLOv8 NFL pre-snap position detector — resolving a MIT-badge-vs-no-LICENSE contradiction and extracting the recipe for GSE's detector-v2 comparison.

## Key metrics/methods (formulas where given, else "not specified")
- Task: classify NFL player positions from pre-snap formations via YOLOv8 — model learns from spatial context/positioning, not appearance.
- Data: 503 annotated images from Super Bowl LVIII + 2024 AFC/NFC championship games; 8 classes — CB (0), FB (1), LB (2), QB (3), RB (4), Safety (5), TE (6), WR (7).
- Model: YOLOv8 (ultralytics ≥ 8.0.196), single-pass detection, NMS; YOLOv5 50-epoch alternative also exists.
- Results (authors' claims, not independently validated): mAP@0.5 = 0.759; F1 = 0.62 @ conf 0.229; best class WR 94.2% precision, CB 88.5%, Safety 87.9%.
- Roboflow hosted-model page claims mAP@50 90.2% / Precision 87.5% / Recall 82.7% — treated as unverified marketing metric; cite only README numbers.
- Authors' known limitation: color-matching approach (LAB, jersey colors, formation width) "sensitive to lighting, logos, end zones" — independent convergence with the corpus finding that jersey-color ID breaks under sunlight/shadow variance.

## Data sources named
github.com/ruidazeng/the-playmakers (repo contents: README, Final Report.pdf, notebooks, poster); cs-1430/wr-finder on Roboflow Universe (dataset); Brown University CS 1430 (authors John Michael Slezak, Atif Khan, Chenhao Lu, Ruida Zeng; TA Joel Manasseh; Prof. Srinath Sridhar); related corpus docs deep-dive-mdpi, deep-dive-aws-sagemaker, deep-dive-roboflow-helmet.

## Findings (numbers and facts, not vibes)
- **License verdict: RESEARCH-ONLY.** README line 16 has an MIT badge hyperlinked to a LICENSE file; no LICENSE file exists in branch main; GitHub API license field = null; all 5 commits show no LICENSE ever added/removed; author's other repos show he attaches licenses when he intends to — the badge is aspirational/broken (dead 404 link), no license grant exists. Do NOT copy notebooks/scripts/figures.
- **Dataset verdict: USABLE.** cs-1430/wr-finder on Roboflow has explicit "License: CC BY 4.0" — usable with attribution to "CS 1430 / wr-finder" + license link; 443 images / 3 versions (README claims 503 — discrepancy noted; v3 is the download recipe target); requires Roboflow account + API key.
- Training-recipe value: nearest public analog to GSE's 57-frame hand-labeled set at NFL scale — 0.759 mAP@0.5 sets the detector-v2 bar (if v2 on {57 ours + 443 CC-BY} can't clear ~0.75 mAP@0.5 held-out, the bottleneck is labeling budget, not architecture).
- Label-design convergence: both this project and the MDPI paper land on 8 coarse position classes as the workable granularity for small data — do not invent a finer taxonomy on 57+443 images.
- Improvement path: email authors (via GitHub Issues, README invites) asking for an explicit LICENSE — if added, notebooks become USABLE; until then RESEARCH-ONLY stands.
- Detector-v2 experiment protocol spec'd: pull wr-finder v3 (CC BY 4.0, attribution recorded) → merge with 57 hand-labeled frames (person-only boxes → 9th 'player' class) → train A: YOLOv8n fine-tune vs B: Faster-RCNN ResNet50-FPN on identical splits → 5-axis stratified eval from deep-dive-aws-sagemaker.md → decision rule: promote B only if it beats A by ≥ 5 points recall in worst-3 occlusion cells AND FPS stays within budget.
- Test assertions: recall/precision fixtures hand-computed (6 TP/1 FP/2 FN → recall 0.75, precision ≈ 0.8571, tol 1e-9); license-gate test failing if any training dataset lacks an explicit license entry in DATASET_LICENSES.json sidecar (the process fix for this incident); stratified-report test.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] The license-gate test pattern (DATASET_LICENSES.json sidecar, CI fails on unlicensed training data) as a standing process fix for the whole CV corpus — method-only posture for unlicensed material.
- [TRUST-SIGNAL] 0.759 mAP@0.5 as an honest public small-data benchmark for detector-v2 acceptance.
- [OTHER] Pre-snap formation geometry is learnable — position-head insight relevant to GSE's tendency layer.
- [OTHER] 8-coarse-class taxonomy convergence (MDPI paper + this project) as the small-data labeling discipline.

## Engine-actionable? (yes/no + one-line what)
Yes — pull wr-finder v3 (CC BY 4.0, attributed) and run the detector-v2 comparison per the spec'd protocol with the license-gate test adopted as a standing CV-corpus process fix.
