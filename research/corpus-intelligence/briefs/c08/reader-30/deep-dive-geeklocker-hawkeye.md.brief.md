# docs/research/2026-10-01/cv-corpus/deep-dive-geeklocker-hawkeye.md
## What it is (1-2 sentences)
Deep-dive (2026-10-01, confidence HIGH) on a Geeklocker Substack article about the NFL's decision to call first downs with computer vision (Sony Hawk-Eye), covering an accuracy ladder across tracking systems and a full calibration/triangulation doctrine with an implementation spec for a GSE per-frame calibration report.
## Key metrics/methods (formulas where given, else "not specified")
- Accuracy ladder (article's claims): MLB ball/strike calling (2020) ±0.25"; Wimbledon Hawk-Eye (2020) ±0.10"; FIFA semi-automated offside (2024) est. ±1.6"; NFL Zebra RFID (2024, per NFL) ±6"; CV in general ~0.1" at 300+ fps. Tech classes: GNSS ~12" max, 10–18 Hz; LPS (UWB/Zebra) ~4" max, 10–20 Hz; CV ~0.1", camera-dependent, 300+ fps.
- Hawk-Eye accuracy arithmetic: 6 8K cameras/stadium, ring pattern, high elevation; 75 yards (2,700") per camera ÷ 7,680 px = **≈0.35 inches per pixel** theoretical floor; NFL told ESPN it expects "half an inch" (consistent).
- GSE transfer: per-frame accuracy floor `meters_per_pixel = field_width_covered / frame_width_px` computed from the estimated homography; honest claim rule: never state precision better than max(pixel floor, reprojection error). Sanity anchor: 1920px → 53.3 yards wide gives ~1.0 inch/px (0.02539 m/px).
- Motion limit: player at max ~20 mph ≈ 350 inches/second; at 100 FPS the camera sees the ball once every ~3 inches, requiring interpolation; occlusion (pile) defeats line-of-sight CV — the article's long-term call is a hybrid CV+UWB system.
## Data sources named
Geeklocker Substack article (newsletter — intel only); the NFL press release via the article; ESPN (NFL's "half an inch" quote); league internal testing / academic studies (via article). ≥3-camera triangulation; YOLO mentioned as a detector option.
## Findings (numbers and facts, not vibes)
- Cost note: 8K cameras >$8,000 each; 16K "extremely expensive today" — explicit cost-vs-accuracy tradeoff.
- Honest-limit distinctions: (1) Hawk-Eye measures line-to-gain on a STATIC ball with clear multi-camera view, NOT ball spotting; chain gang stays as backup. (2) Frame sync across cameras is critical — without it the system analyzes contradicting images. (3) UWB chosen first because radio travels through bodies/pads, no line of sight needed — exactly what visual systems lack in a pile. (4) Smaller objects occupy fewer pixels → harder to track (applies to GSE's distant-player recall problem).
- Implementation spec: new `cv-calibration-report.ts` in `packages/prediction-engine/src/tracking/` computing per-frame theoretical accuracy floor, attached to every tracklet batch as provenance; 4 test assertions with expected values (1.0 in/px anchor, reprojection-error-dominance behavior, 'single broadcast camera' literal note).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: computer-vision calibration doctrine for GSE tracking — per-frame accuracy floor as provenance for every published speed/distance number.
- TRUST-SIGNAL: the "never state precision better than the floor" rule is an honest-limits reporting doctrine; "line-to-gain ≠ ball spotting" is the kernel for honest officiating-adjacent claims.
- COACHING: independent validation that occlusion is THE hard visual-tracking problem (validates prioritizing detector recall on piles over association tuning).
## Engine-actionable? (yes/no + one-line what)
Yes — land the per-frame calibration report (accuracy floor = field-width-per-frame ÷ pixels, max with reprojection error) so every tracking-derived number carries an honest, test-pinned precision claim.
