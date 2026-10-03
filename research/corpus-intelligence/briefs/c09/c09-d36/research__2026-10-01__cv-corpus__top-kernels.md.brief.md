# research/2026-10-01/cv-corpus/top-kernels.md
## What it is (1-2 sentences)
The ranked synthesis of the 2026-10-01 CV corpus: 10 implementable kernels plus calibration doctrine, ordered by verification strength × impact on the three open vision gaps (a) pile/ground-player detector recall, (b) motion-aware tracklet association, (c) automatic 2D field-landmark detection for homography — targeting PR #986 (`motif/cv-pipeline-2026-09-30`).
## Key metrics/methods (formulas where given, else "not specified")
- K1: yard-line ∩ hash-mark intersections as non-colinear 2D correspondences → existing DLT homography; Mendez guard `checkCorrespondenceGeometry()` (≥4 points, 2×2 covariance eigenvalue ratio l2/l1 ≥ 1e-3, spread floors, convex-hull backstop) raising named `DegenerateCorrespondencesError`; labeling via LOS-anchor propagated at 5-yard intervals, 50-side resolved by play direction.
- K2: camera-motion cancellation + reachable-set gating (from Harsh Raj deep-dive).
- K3: occlusion-stratified eval — AWS 5-axis error stratification (occlusion high/low, box size, aspect, camera angle, contrast) on the 57-frame eval to split the 0.74 recall number; MDPI matching protocol GT↔detection at 20-px center threshold, confidence sweep 0.05→0.95, operating point at max F1; baseline must reproduce precision 1.00 / recall 0.74 before tuning; MDPI YOLOv3 single-class operating point (0.35, swept 0.05–0.95).
- K4: Roboflow helmet dataset — 9,947 images, 193,736 helmet boxes, 33% hard labels (Blurred/Difficult/Partial/Sideline), Public Domain; exclude Helmet-Sideline (7.76% = sideline personnel), oversample hard labels 3:1. the-playmakers: 443 images, 8 position classes, CC BY 4.0 (code is RESEARCH-ONLY).
- K5: per-frame yard-scale affine fallback + arccosine rotation rectification (Sloan); test: 7.3° rotation recovered within ±0.5°, yard scale within 1%.
- K6: temporal-window rescoring — 2N+1 frame-stack pile classifier re-scoring sub-threshold detections; Kaggle NFL impact-detection recipe: 2-stage detector, positives 0.18% oversampled, metric F1@IoU0.35 ±4 frames.
- K7: exactly-one-QB + exactly-11 count guardrails (MDPI measured +4pp); K8: 12→8 position-label coarsening; K9: formation→play two-stage classification with voting (Sloan CART baseline: 86.5% QB position / 72.3% formation over 29 classes; related work: Craig 75% on 130k NFL plays, Goyal 80%, Newman 85% formation on Madden, Atmosukarto 67% real footage, Siddiquie 72%, Li 70%); K10: per-frame meters-per-pixel + reprojection error → claimablePrecisionM; accuracy ladder GNSS ±12" / LPS-UWB ±4" / CV ±0.1" @300+fps / Zebra RFID ±6"; Hawk-Eye measures line-to-gain, NOT ball spotting.
- K13 (doctrine): break-angle precision as measurable WR trait — Garçon 1.3 fewer yards than Jackson on mirrored comebacks (Sloan).
## Data sources named
Chung Brown thesis (FULL read, 30 pages — zero numeric parameters, all specs [DERIVED]); Sloan 2018 (two hosts cross-checked, All-22); MDPI Electronics §5.1; AWS SageMaker blog; Roboflow helmet dataset + the-playmakers; Kaggle NFL impact detection; Harsh Raj LinkedIn (comments gated HTTP 999); zacyauney Madden page; Geeklocker Hawk-Eye. GATED/corrected exclusions: HAW thesis (OPUS4 closed), MDPI 2673-8392/6/10/213 (survey, not methods), HuddleVision/Genius Sports (proprietary), NGS pose / Digital Athlete (NFL-internal).
## Findings (numbers and facts, not vibes)
- Baseline CV state pinned: 57-frame eval, precision 1.00 / recall 0.74; legacy matcher fragments 6 players into 52–65 tracklets, median life 0.6–0.8s.
- K1 Tier-1 priority: "THE binding-gap fix" — intersections are non-colinear by construction, reusing `fitHomographyDLT` unchanged; done-criteria: six tests green + end-to-end on a real clip with zero hand-seeded points, held-out reprojection < 3 px.
- Mendez guard regression test: 4 colinear points → throws `colinear-src` (current DLT failure mode).
- Done-criteria for K2 on real clip: tracklet count 52–65 → ~6–12 per play, median life 0.6–0.8s → >3s.
- Doctrine adoption: RF-DETR ~30-frame annotation eval (K11), SAM-2 through-pile propagation as R&D item (K12), break-angle precision as WR metric shape (K13).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: K9 formation→play two-stage classification (per-frame voting → Inside Zone / Y-Sail / Mesh Spot / scramble) is a playcalling-tendency layer.
- SCHEME: K7/K8 formation guardrails and position coarsening support formation/tendency extraction.
- QB-BEHAVIOR: Sloan's 86.5% QB-position / 72.3% formation CART baseline is a QB-positioning signal benchmark; K13 break-angle precision is a WR-route-running metric shape.
- OTHER: K1–K6/K10 are CV infrastructure for the broadcast-tracking lane that converts video into field-coordinate player data.
## Engine-actionable? (yes/no + one-line what)
Yes — K1–K6 name exact new/modified repo files, test assertions with numeric thresholds, and done-criteria; the occlusion-stratified eval (K3) is the prerequisite decision procedure for every detector change.
