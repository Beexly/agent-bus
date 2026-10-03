# research/2026-10-01/cv-corpus/deep-dive-harshraj-linkedin.md
## What it is (1-2 sentences)
A claim-by-claim deep read of Harsh Raj's LinkedIn post (~Aug 2026) on tracking American football players with computer vision, extracting a clean-room CV method blueprint aimed at GSE's three open vision gaps: (a) detector recall on piles/ground players, (b) motion-aware tracklet association, (c) automatic 2D field-landmark detection for homography.
## Key metrics/methods (formulas where given, else "not specified")
- Stack: RF-DETR instance segmentation (~30 semi-supervised Roboflow annotated frames) → OpenCV classical geometry camera-motion cancellation (field-plane homography, RANSAC, no learning) → identity from motion continuity via reachable-set gating (radius = v_max × dt, v_max ≈ 10 m/s sprint ceiling; constant-velocity prediction with exponential smoothing 0.7/0.3) → through-pile pixel following (SAM 2, adapted memory bank) → long-gap re-ID via jersey-digit OCR on sharpness-gated crops (Laplacian variance) matched against roster numbers, fail-closed → 3D mesh + per-frame joint angles as output layer.
- Numeric parameters beyond the author's words are [DERIVED]/clean-room, not stated in the post: COAST_FRAMES=15 (up from legacy maxGapFrames 5), inlier threshold 3px for RANSAC homography, gate factor 1.5×.
## Data sources named
No dataset or code released — method intel only. Component licenses noted for later verification: RF-DETR (Apache-2.0), SAM 2 (Apache-2.0), OpenCV (Apache-2.0). Comments were unreadable (LinkedIn HTTP 999); embedded video could not be watched.
## Findings (numbers and facts, not vibes)
- All 10 extracted claims verified verbatim against the post text; post's own stated limitation is that opening frames (worst camera motion) are still future work.
- Core insight quoted: "Appearance was the first dead end. Everything I tested confuses two same-uniform players... So identity came from motion and continuity instead." and "a player buried in a pile-up never left the frame, so follow his pixels through it instead of trying to recognize him after."
- Works on broadcast footage ("the hardest possible angle"); All-22 is "the easy case for this pipeline."
- Internal GSE state documented here: `buildTracklets` (cv-tracklet-association.ts) is greedy IoU with minIou 0.3, maxGapFrames 5; it fragments to 52–65 tracklets from ~6 players with 0.6–0.8s median life because broadcast pan breaks inter-frame IoU.
- Test targets specified: pan fixture asserting new path yields exactly 6 tracklets vs legacy ≥20; pile-coast fixture (10-frame occlusion gap) surviving as 1 tracklet vs legacy 2; camera-compensation unit test (known translation (40,-15)px recovered within 2px; rotation within 0.5°); crossing-player fixture asserting zero ID switch.
- RF-DETR eval decision rule: promote to detector contract only if pile-subset recall beats v2 box detector by ≥ 5 points at comparable FPS.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: computer-vision pipeline method intel for GSE's broadcast-tracking lane; the reachable-set gating and per-frame field-plane homography are the bridge between broadcast tracking and field-coordinate player positioning that feeds all downstream modeling.
## Engine-actionable? (yes/no + one-line what)
Yes — the implementation spec names exact repo files and test assertions for the two Tier-1 builds (motion-compensated association replacing greedy IoU, jersey-OCR fail-closed re-ID).
