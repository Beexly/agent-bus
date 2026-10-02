# research/2026-10-01/cv-corpus/deep-dive-chung-brown.md
## What it is (1-2 sentences)
Clean-room method description of John Chung's Brown honors thesis (May 2024, 30 pages) on automatic 2D field landmarks (yard lines + hash marks → intersection correspondences) from broadcast football video for homography-based formation extraction — read as the gap-(c) kernel source for GSE's CV pipeline.
## Key metrics/methods (formulas where given, else "not specified")
- Frame selection via OCR on the broadcast score bug (bug region located once per video; quarter+clock OCR'd per frame, penultimate frame of each stopped-clock window kept since the last frame ≈ ball snap); matching to play-by-play scans forward up to 40 s, first match wins; final n=450 manually verified frames.
- Preprocessing order (exact, matters): (1) score-bug crop FIRST (white bug text would inject false Hough votes); (2) field-boundary detection = HSV white filter → Canny → Hough → keep near-horizontal lines (average multiple candidates) → mask off-field content.
- Yard-line detection: same white→Canny→Hough but keep near-vertical lines.
- Hash-mark line detection (the thesis's key contribution): direct Hough fails because short segments make the accumulator noise-dominated; fix = Laplacian-of-Gaussian blob detection (∇² of Gaussian-smoothed image responds to compact bright/dark regions at scale σ) → keep small-radius blobs only (rejects players/yard lines) → Hough over blobs with horizontal angle filter.
- Correspondences: each yard-line ∩ hash-mark-line intersection = a 2D point correspondence (image pixel ↔ field template), non-colinear by construction, breaking the yard-lines-only DLT degeneracy; feeds `fitHomographyDLT`.
- Yard-line labeling = DOCUMENTED FAILURE: (1) template matching of painted numerals 10–50 failed (no rotation/scale invariance); (2) LOS anchoring via highest y-gradient region failed (noise). Thesis's proposed fix: detect the yellow first-down-line graphic (yard value = LOS + yards-to-go from play-by-play), label neighbors by relative distance.
- Results (10-fold CV, n=450, 52% run base rate): logistic regression 59.7%; VGG-16 on images 66.67%; VGG-16 + play-by-play 68.89%.
- PARAMETER GAP (honest, verified by search): the thesis gives NO numeric parameters — no rho/theta resolution, no Hough vote threshold, no Canny thresholds, no LoG σ, no blob radius cutoffs, no HSV white range, no angle tolerances. All implementation numbers marked [DERIVED]: HSV white S<40, V>200; Canny 50/150; Hough rho=1px, theta=π/180, votes ≈ 0.35×image-height; angle ±12°; LoG σ pyramid {2,3,4}px at 720p, blob radius <8px; line merging Δrho<6px, Δtheta<2°.
- Failure modes: Hough lines "often skewed" by scene objects; YOLOv3 missed players, esp. offensive linemen in dense clusters (location = midpoint of box bottom edge); no automated homography ever computed (labeling failure); one manual homography proves the geometry.
## Data sources named
8 Notre Dame home games 2021–2022 broadcast replays via NFL-Video + JDownloader (Skycam + sideline cameras); play-by-play from SportsDataStuff (124 raw features → 6 pre-snap: quarter, down, seconds remaining, yards from end zone, yards to go); thesis: cs.brown.edu/.../chungjohn.pdf (© 2024, not open-licensed — method description only, no text/code copied; broadcast footage must not be redistributed).
## Findings (numbers and facts, not vibes)
- 450 pre-snap frames; run/pass accuracies: 59.7% / 66.67% / 68.89% vs 52% base rate.
- The pipeline stops one step short of gap (c): correspondences are producible but labeling failed, so no automated homography exists — GSE must solve labeling (3 proposed options: LOS anchoring done right with our known LOS + 5-yard spacing propagation; yellow first-down-line anchor; rotation-normalized digit CNN for numerals).
- Transferable: score-bug mask FIRST in frame intake, LoG→small-blob→Hough for hash marks, intersection-based correspondences into the existing `Correspondence { xPx, yPx, xM, yM }` / `fitHomographyDLT` interface; hand-seed stays as fallback.
- Test bar defined: ≥4 intersections on synthetic frame, mean reprojection error <2.0 px over 20 points; degenerate yard-lines-only input must THROW `DegenerateCorrespondencesError`.
- NFL hash-mark geometry differs from college — needs validation on our footage; NFL yard lines spaced 5 yards, only every 10 numbered; hash marks 18 ft 6 in from sideline (fixed lateral constant).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: broadcast-CV method for field homography — the landmark-detection recipe (score-bug-first, LoG blob hash marks, intersections as non-degenerate correspondences).
- SCHEME: formation extraction from bird's-eye projection — the end goal of the homography pipeline.
- OTHER: documented failure taxonomy (labeling fails, Hough skew, YOLOv3 clustering misses) as known pit-avoidance.
## Engine-actionable? (yes/no + one-line what)
Yes — create `cv-field-landmarks.ts` per the implementation spec: implement landmark detection + labeling, feed intersections into `fitHomographyDLT` in `cv-pipeline.ts`, and green the 4 test assertions (reprojection <2.0 px, degenerate-guard throws, score-bug ablation, hash noise test).
