# arxiv-program/research/2026-09-21/arxiv-deep/0318-adaspot-spend-resolution-where-it-matters.md
## What it is (1-2 sentences)
Research note on arXiv:2602.22073v1 (Xarles et al., 2026): AdaSpot, a dual-branch precise-event-spotting architecture — low-res full-frame branch (RegNetY + GSF) for global context + training-free saliency ROI selector feeding one high-res crop/frame to a detail branch, fused (max) into a bidirectional GRU per-frame classifier. Verdict in-file: ADAPT as the event-spotting front end of GSE's film-analysis pipeline (snap, pass release, catch, tackle localization).
## Key metrics/methods (formulas where given, else "not specified")
- Architecture: low-res RegNetY + GSF temporal module; training-free ROI selector (replicate padding → channel-averaged saliency → upsampling → spatiotemporal Gaussian smoothing → adaptive rectangle over cumulative saliency ≥ τ, minimum 112×112); high-res branch on single ROI; per-branch 2-layer MLP projections, max fusion, BiGRU, per-frame classifier.
- Loss: `L = λfLf + λlLl + λhLh` with all λ = 1/3 (frame/global, low-res, high-res); positive-class weight 5.
- Training: 100-frame clips, batch 4, AdamW lr 8e−4, 5 warmup epochs, cosine decay, RTX 6000 Ada; epochs 25 (FineDiving), 50 (Tennis, SN-BAS), 100 (FineGym, F3Set).
- Sizes: small 7.58M params / 29.78 GFLOPs; big 10.63M params / 56.78 GFLOPs; inference memory 1.97 GB.
- Metric: mAP at temporal tolerances δ (mAP@0 strictest … mAP@2); postprocessing Soft-NMS with window ω.
- Code: https://github.com/arturxe2/AdaSpot (stated in paper).
## Data sources named
Five public PES benchmarks: Tennis (3,345 clips, 28 matches, 33,791 events, 6 classes); FineDiving (3,000 clips, 7,010 events, 4 classes); FineGym (5,374 videos, 80,166 events, 32 classes); F3Set table tennis (11,584 clips, 114 matches, 75 players, 42,846 events, 365 classes); SN-BAS figure skating (7 matches, 12,422 events). All with frame-level event annotations.
## Findings (numbers and facts, not vibes)
- mAP@0: AdaSpot-small — Tennis 73.49±1.2, FineDiving 27.26±1.9, FineGym 17.52±0.1, F3Set 53.55±1.2; AdaSpot-big — 74.02±1.4, 27.07±1.8, 18.21±0.2, 55.38±0.3; SN-BAS small 53.12±1.4, big 56.24±0.3.
- F3Set mAP@0/1/2: F3ED 24.8/60.7/64.8 vs AdaSpot-small 53.55/67.76/68.41, big 55.38/69.37/69.94 (large strict-tolerance win).
- Ablations (Tennis/SN-BAS mAP@0): full 73.30/53.02; low-res-only 71.18/47.98; no smoothing 71.67/49.99; two ROIs 72.06/49.19 (worse than one — multi-ROI warning); param reuse −37% params for −1.60/−1.12 mAP; learnable crop (AF-v2) SN-BAS high-res-only 23.1±15.1 vs AdaSpot 52.1±0.7 (training-free saliency far more stable).
- Postprocessing sensitivity: Soft-NMS ω=1 gives Tennis mAP@0 75.05 vs ω=2's 73.30 (~1.75 points ride on NMS window).
- NFL port risks flagged in-file: single-ROI assumption breaks on 22-actor football (two-ROI ablation hurts in paper); no dense team-sport eval; FineGym mAP@0 only 17.52–18.21 (fine-grained dense vocabularies struggle); suggested fix = ball-detection-conditioned ROI or K ROIs with learned selector.
- In-file gate: adopt only if held-out NFL game mAP@1 ≥ 70 for snap + pass release (ω fixed on validation), ball-conditioned/multi-ROI beats single-ROI by ≥3 mAP@1, results hold within ±2 across two ω values.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — film-analysis pipeline: natural event-spotting front end feeding play segmentation into the 0313/0316 pipeline stages (composes with COACH-style multi-agent video QA).
- OTHER — efficiency template: "spend resolution where it matters" (low-res global + high-res ROI) is a general compute pattern for any per-frame football vision work.
## Engine-actionable? (yes/no + one-line what)
yes — Port the dual-branch recipe as the NFL event-spotting front end (snap/pass-release/catch/tackle) with ball-conditioned ROI to fix the single-ROI multi-actor failure, per the in-file spec and gate.
