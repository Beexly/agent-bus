# research/2026-10-01/cv-corpus/deep-dive-fourtverts-sloan.md
## What it is (1-2 sentences)
A full read (2026-10-01) of Ajmeri & Shah's 2018 MIT Sloan Sports Analytics Conference paper on computer vision + ML for automatic NFL game-film classification and player tracking (9 pages), extracting three reusable kernels for GSE's broadcast-tracking lane.

## Key metrics/methods (formulas where given, else "not specified")
- Input: All-22 film screenshots at 5 fps (Washington home games, 2015 season).
- Standardization: Hough Lines → heuristic filtering of full-field white lines; LOS = detected line nearest O-line pixel mass; camera rotation via arccos using LOS + perpendicular field-axis line; NFL-logo fixed-mask removal.
- Rotation math (RECONSTRUCTED — paper underspecifies): φ = arccos(v_axis · e_x), sign from cross product (v_axis × e_x)_z; deskew = rotate image by −φ; optionally average φ from axis line with (φ from LOS − 90°).
- Per-screenshot yard calibration: detect adjacent full-field lines, d_5yd pixel separation → px_per_yard = d_5yd / 5 (worked example ~82 distance-units/yard).
- Frame-1 reference-point drift correction: save highest point of a full-field white line in frame 1; subtract its displacement in later frames (translation-only camera-motion compensation).
- Speed: d(p,q) = √((q1−p1)² + (q2−p1)²... [INFERENCE: standard Euclidean]; worked example DeSean Jackson: 215.5 units / 0.2 s × (1 yd / ~82 d) = 12.8 yd/s → 38.4 ft/s → 26.2 mph; paper notes this reads high vs NGS and recommends relative comparison only.
- Acceleration: finite-difference velocity; first 0.6 s off the line — Jackson 22.4 mph vs Harris 19.3 mph.
- Formation classifiers on coordinate features: CART best — 86.5% QB position (Center/Shotgun/Pistol; Pistol precision .50/recall .12 on tiny samples), 72.3% formation over 29 classes; 500+ auto-tagged formation images.

## Data sources named
MIT Sloan Sports Analytics Conference 2018 paper (#5571, authors Omar Ajmeri, Ali Shah); underlying film was NFL Game Pass content (NOT released — method only); play-by-play scraped from NFL Game Pass UI.

## Findings (numbers and facts, not vibes)
- Three extractable kernels for gap (c), prioritized: (1) rotation deskew via arccos as a preconditioner for Chung's pipeline — tightens yard/hash angle filters from ±12°+ to ±6–8°; (2) per-frame px/yard from 5-yard line spacing as an independent, label-free homography validator (cross-check H's local scale vs measured, tolerance start 10% [DERIVED] — rejects bad fits that pass reprojection on mislabeled points); (3) reference-point pattern → temporal landmark smoothing (exponentially-weighted yard-line parameters across frames within a shot).
- NOT transferable: LOS-from-O-line-proximity assumes All-22's clean horizontal O-line band (broadcast sideline views foreshorten it — use play-context LOS); jersey-color player finder (carries documented RGB-variance fragility); formation classification (separate lane).
- Documented limitation (§5.2): jersey-color tracking breaks under shadows/sunlight RGB variance — do not hard-code one HSV range; use adaptive thresholds or per-frame white-point normalization.
- Implementation spec: new cv-rotation-deskew.ts (estimateRollAngle, deskewFrame), calibrateYardScale() in cv-field-landmarks.ts, validateHomographyScale() guard; pipeline order maskScoreBug → whiteMask → Hough → estimateRollAngle → deskew → Chung filters → landmarks → guard → fitHomographyDLT → scale cross-check.
- Test assertions: synthetic 12° rotation recovered within 0.5°; known 19.2 px/yard within 5%; deliberately mislabeled H rejected by scale check; shadow-gradient frame flags lightingVariance instead of silently skewing.
- Improvement path: log φ per frame — sudden φ jumps = free shot-change detector; adaptive white filtering; 2–3 persistent landmarks as running H quality metric; speed-sanity harness (synthetic constant-velocity tracklet must recover speed within 5%).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] Independent, label-free homography validation (geometric cross-check via line spacing) as a trust primitive — catches bad fits that residuals miss; composes with Mendez's photometric warp overlay.
- [TRUST-SIGNAL] Flag-don't-silently-skew rule for lighting variance — inherited from the paper's honest calibration caveats (26.2 mph "reads high vs NGS").
- [SCHEME] Formation-classification results (CART 86.5% QB-position, 72.3% over 29 classes) — separate formation lane, not gap (c).
- [OTHER] Shot-change detection from φ jumps; temporal landmark smoothing within a shot.

## Engine-actionable? (yes/no + one-line what)
Yes — implement cv-rotation-deskew.ts + calibrateYardScale() + validateHomographyScale() in packages/prediction-engine/src/tracking/ with the 4 test assertions green, then log per-frame px/yard on a real clip.
