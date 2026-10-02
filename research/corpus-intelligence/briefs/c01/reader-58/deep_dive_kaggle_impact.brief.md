# research/2026-10-01/cv-corpus/deep-dive-kaggle-impact.md
## What it is (1-2 sentences)
Deep-dive (2026-10-01, HIGH confidence on facts) into the Kaggle "NFL 1st and Future: Impact Detection" 2020 competition — documents competition facts, label schema, evaluation metric, winning solution patterns, license verdict (RESEARCH-ONLY for the Kaggle bundle), and direct applicability to GSE's pile-recall CV gap.
## Key metrics/methods (formulas where given, else "not specified")
- Evaluation metric: F1 score at IoU threshold 0.35, with ±4 frame tolerance (prediction within 9 frames of a ground-truth impact in the same play counts without score degradation); optimal one-to-one prediction↔ground-truth assignment; "definitive helmet impacts" = impact=1 AND confidence>1 AND visibility>0.
- Winning 2-stage pattern: detection (e.g., DetectoRS via MMDetection) → classification (crop box ±N frames, concatenate 2N+1 boxes in channel dimension, ResNet-50 → impact-or-not).
- Imbalance fix from a top solution: positives were only 0.18% of samples — over-sampling of positives + LR flip, color jitter, bbox position/size jitter augmentation; no cross-validation (compute limits).
- GSE implementation spec carried: cv-temporal-window-classifier.ts contract (score(WindowSample)=P(person|box, window), rescore detections below PILE_THRESHOLD default 0.5 via max(confidence, p)); test assertions: [0.3,0.6,0.2]→[0.9,0.6,0.9] rescored flags [true,false,true]; N=2 on frame 0 of 3 gives 5 crops with frame-0 padding; cost guard asserts score called 0 times when all above threshold. Promotion gate: pile recall ≥0.85 without dropping FPS below detector budget; N sweep ∈ {1,2,3} on 57-frame eval.
## Data sources named
- Kaggle NFL Impact Detection (2020), host NFL, Featured Code Competition, Nov 16 2020–Jan 4 2021, $75K prizes, 2,849 entrants / 573 participants / 459 teams / 7,795 submissions.
- Images: 9,947 stills (4,958 sideline + 4,989 endzone; 193,736 helmets; 9,825 unique plays) — same set as Roboflow NFL-competition dataset, independently Public Domain (clean ingestion path).
- Videos: 60 plays × 2 views (sideline + endzone) = 120 videos, ~10s each at 59.94 fps; per-frame labels: gameKey, playID, view, video, frame, label (player number, e.g., 'H67'/'V9'), left/width/top/height, impact ∈{0,1}, confidence 1–3 (Possible/Definitive/Definitive-and-Obvious), visibility 0–3 (Not Visible/Minimum/Visible/Clearly Visible), impactType (helmet/shoulder/body/ground/...).
- Tracking data: per-player at 10 Hz — time, x (long axis), y (short axis), s speed (yards/s), a acceleration (yards/s²), dis distance-from-prior (yards), o orientation (deg), dir motion angle (deg), event (snap, whistle, etc.).
- Winners: Dmytro Poplavskiy 1st; 2021 follow-up won by Kippei Matsuda ($50K) / Takuya Ito ($25K).
## Findings (numbers and facts, not vibes)
- Exact license/terms text is GATED (Rules page needs Kaggle login + rules acceptance; JS shell only via public fetch); verdict is conservative RESEARCH-ONLY for the video+label+tracking bundle until verified — the images bypass this via the Public Domain Roboflow copy.
- Label taxonomy (Blurred/Difficult/Partial/Sideline helmets) is a built-in hard-negative/positive taxonomy that transfers to GSE's pile-frame disambiguation.
- The 2N+1 temporal-window classifier directly targets GSE's measured 0.74 pile recall (P=1.00, R=0.74 from real-footage eval in cv-game-scheduler.md); cheaper than SAM-2; only re-scores sub-threshold detections (cost guard).
- The ±4-frame tolerance idea generalizes to GSE's tracklet birth/death logic: tolerate ±N-frame detection jitter near piles rather than fragmenting.
- The per-frame labels + 10 Hz tracking give the "detections ↔ field coordinates ↔ identity" join the association layer needs; the competition's test-time constraint (can't map tracking to detections) matches GSE's production constraint — identity must be inferred (supports the Harsh Raj motion-continuity argument).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- impactType taxonomy (helmet/shoulder/body/ground) — OTHER (injury-relevant impact detection; feeds player-health awareness, not scheme).
- 10 Hz tracking schema (x/y/s/a/dis/o/dir/event) as the reference join format for detections↔field coordinates↔identity — OTHER (CV/tracking infrastructure).
- No QB-behavior, coaching, OL, scheme, or trust-signal findings.
## Engine-actionable? (yes/no + one-line what)
Yes — the 2N+1-frame temporal-window classifier spec with concrete test assertions and a pile-recall≥0.85 promotion gate is directly implementable against GSE's measured 0.74 pile recall, and the ±4-frame tolerance generalizes to tracklet birth/death jitter handling.
