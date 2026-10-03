# docs/arxiv-program/research/2026-09-21/arxiv-deep/0396-observation-centric-and-central-distance-recovery.md
## What it is (1-2 sentences)
Ledger read (full text) of Huang et al. (2022), "Observation Centric and Central Distance Recovery on Sports Player Tracking" (arXiv:2209.13154v1, ECCV 2022 SportsMOT workshop): a motion-first multi-object tracking pipeline (OC-SORT + central-distance recovery + sport-specific ReID post-processing) that took 3rd place on SportsMOT 2022 at HOTA 73.968; verdict ADAPT as the image-plane (no field registration) broadcast-tracking template, complementing 0389's field-registered approach.
## Key metrics/methods (formulas where given, else "not specified")
- Base: OC-SORT (observation-centric online smoothing rebuilds virtual trajectory on re-association; observation-centric momentum for direction changes; observation-centric recovery to suppress spurious new tracklets). Config: detection conf 0.1, IoU thresh 0.3, track thresh 0.7, max tracklet age 30 frames.
- Central distance recovery: re-run recovery with Euclidean distance between detection centers and tracklets' last observations when IoU recovery fails (fast players' boxes don't overlap). Thresholds: basketball 200, football(soccer) 80, volleyball 80.
- Football (soccer) post-processing: three greedy association rounds; disappear/reappear location gating scaled by time gap (<100 frames → 100; 100–500 → 250; >500 → 400), then appearance cosine distance < 0.1 / 0.2 / 0.4 per round; tracklet embeddings averaged over frames. Basketball: hard 10-identity cap, EMA appearance updates, re-entry by argmax cosine similarity. Volleyball: cap 12, distance-only reassociation < 400, no appearance.
- Final step: linear interpolation over gaps. No explicit equations in text.
- Implementation: YOLOX-X detector (COCO-pretrained, fine-tuned 80 epochs, ~8 h on 4×Tesla V100, ByteTrack recipe); OSNet ReID backbone, 10 epochs, Adam lr 0.0003.
## Data sources named
SportsMOT (ECCV 2022 DeeperAction Challenge): 45 training clips (basketball, soccer, volleyball) from Olympic Games, NCAA Championship, NBA games on YouTube; 720p, 25 FPS, official recordings, manually cut to avg 485 frames, no shot changes; evaluation on challenge test set ranked by HOTA.
## Findings (numbers and facts, not vibes)
- HOTA: OC-SORT baseline 67.107 → +central distance recovery 71.764 → +ReID post-processing 73.968 (3rd place, SportsMOT 2022).
- Final: HOTA 73.968, AssA 63.460, DetA 86.316, MOTA 94.832, IDF1 78.271, IDS 2754, Frag 3592. Association (63.5) well behind detection (86.3) — association is the hard part.
- Leakage flag: central-distance thresholds "based on the evaluation performance on the Sportsmot testing set" — test-set tuned, so reported HOTA is optimistic.
- Paper's "football" is soccer; no shot-change handling — pipeline as written breaks at every broadcast cut.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Test-set-tuned thresholds + reported ablations on the same test set → TRUST-SIGNAL (accept only after reproduction with validation-tuned thresholds; expect a HOTA drop on unseen footage)
- AssA 63.5 vs DetA 86.3 (identity switches 2754 remain frequent) → TRUST-SIGNAL (association, not detection, is the accuracy bottleneck — don't over-credit "tracking works" claims)
- Image-plane tracking without field registration; football-gating bins + greedy rounds as NFL-adaptable recipe → OTHER (the right starting point when field registration is unavailable; add homography (cf. 0389) to reach field coordinates)
- No NFL broadcast footage without legal review; YouTube-rip provenance → TRUST-SIGNAL (legal gate before any NFL footage use)
## Engine-actionable? (yes/no + one-line what)
Yes — reproduce the YOLOX-X + OC-SORT + OSNet stack on SportsMOT with validation-tuned thresholds, then adapt to American football (shot-change hard termination, jersey-number OCR fused with ReID, field registration) as GSE's image-plane player-tracking baseline.
