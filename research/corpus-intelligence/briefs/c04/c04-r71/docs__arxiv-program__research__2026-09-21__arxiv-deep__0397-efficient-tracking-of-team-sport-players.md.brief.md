# docs/arxiv-program/research/2026-09-21/arxiv-deep/0397-efficient-tracking-of-team-sport-players.md
## What it is (1-2 sentences)
Offline, annotation-efficient player-tracking system: Faster R-CNN + IoU/Kalman tracklets split at IoU>0.5, then a few-shot incremental identity classifier (Market1501-pretrained ResNet-50 ReID → 16-layer Transformer tracklet encoder → per-tracklet identity scores) that bootstraps full-game identities from ~3.5–6 human annotations per player; beats ByteTrack by +26 pp IDF1 on rugby sevens. Ledger verdict: ADAPT — the few-shot identity bootstrapping layer the other tracking ledgers assume away; also releases the only public moving-camera team-sport tracking dataset in this wave.
## Key metrics/methods (formulas where given, else "not specified")
- Tracklet generation: Faster R-CNN ResNet-50 (COCO) → SORT-style IoU bipartite matching + Kalman filter; tracklets intersecting with IoU > μ=0.5 split as ambiguous; length < 10 frames discarded.
- Incremental tracklet classification: Luo et al. bag-of-tricks ResNet-50 ReID (2048-d) → FC to 128-d → Transformer (16 encoder layers, 1 decoder layer, 16 heads; N_q=32 learned queries; tracklets resampled to 10 frames) → batch norm → class scores over N_c = 1 + N_p classes (class 0 = don't-track).
- Loss: L = L_ID + α·L_Triplet (batch-hard triplet); 120 epochs, AdamW lr 9e-5, wd 1e-4; R_img frozen (interactive, ~0.8 s/annotation, 4M params) vs fine-tuned (28 s → 25 min for 32 annotations, 25M params, non-interactive).
- Association: iterative (greedy max-score, no frame overlap) vs RNMF on S(u,v) = clip(Ψ_app) + clip(Ψ_loc); Ψ_app = 1 − d_cos(F_u,F_v)/0.35; Ψ_loc = (1+0.43)·IoU − 0.43 if gap ≤ 0.5 s else 0.
## Data sources named
New public rugby sevens dataset (https://kalisteo.cea.fr/index.php/free-resources/): three 40-second extracts (Argentina/France, France/Chile, France/Kenya; 2021 Dubai tournament), 1920×1080 @ 50 fps moving camera; 58,193 annotated person boxes; ~346 generated tracklets per 40 s clip (avg length ~1 s, covering ~89% of detections). Full-game eval: 32 sampled frames (France/Kenya; 12 French players incl. substitutions).
## Findings (numbers and facts, not vibes)
- Metrics saturate above ~3.5 annotations/player; annotation rounds 1→3 (frozen + iterative): IDF1 and MOTA +11/+9 pp, ID switches ÷5; at 3rd round: IDF1 ≈75%, MOTA ≈66%.
- vs generic trackers: ours IDF1 76.8/84.3/82.2 vs ByteTrack 48.8/54.9/60.3 → +26 pp IDF1 on average; TWBW and MOT neural solver IDF1 22–48.
- RNMF: +12 pp MOTA but −1 pp IDF1 and +25 ID switches vs iterative — iterative preferred for identity purity. Fine-tuning R_img: +3/+2 pp IDF1/MOTA, −3 ID switches.
- Full game, 70 annotations (~6/player): total recall 53.6±1.8% best (R_img trained + RNMF); well-visible players (box area > 25,214 px²): 67.9±2.6% total recall (detection 90.8±0.9%, team 83.5±3.4%). Failures concentrate on small/occluded players.
- INFERENCE: 67.9% recall on best-case players means ~1 in 3 player-instances missed/misidentified — aggregate analytics only, not play-level adjudication.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Few-shot identity bootstrapping is the practical answer to "identified tracks for a team/league with zero labeled data" (college, historical NFL, new sports) — the layer that tracking ledgers 0389/0396 assume away; complements without duplicating: OTHER (tracking/labeling infrastructure).
- Standing gates: legal review before any NFL broadcast footage; never present semi-automatically labeled tracks as ground truth — report recall bounds.
## Engine-actionable? (yes/no + one-line what)
yes — reproduce the annotation-saturation curve (IDF1 plateau at ~3–4 annotations/player) on the public rugby data, then pilot the annotation loop on college/public football footage with jersey-number OCR augmentation; accept as a labeling pipeline only if total recall ≥60% on well-visible players.
