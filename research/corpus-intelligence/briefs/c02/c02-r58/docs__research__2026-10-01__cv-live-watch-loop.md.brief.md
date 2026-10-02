# docs/research/2026-10-01/cv-live-watch-loop.md

## What it is (1-2 sentences)
A 2026-10-01 architecture spec for an autonomous live computer-vision watch loop: Garrett's always-on Windows box auto-tunes his licensed viewing app per game window, screen-captures at 1-5 fps, and POSTs JPEG frames to this VM, which runs YOLO detection → tracklet association → field homography → movement metrics → a per-game learning store at weight 0 (shadow).

## Key metrics/methods (formulas where given, else "not specified")
- Capture cadence: 1-5 fps (v1 default 2 fps); preprocess downscale to ≤960px wide, JPEG quality ~70, ~60-100 KB per frame, ~200 KB/s upstream at 2 fps.
- Pipeline: `yolo-detect` (YOLOv8 person class) → `buildTracklets()` (IoU) → field homography (DLT, fit per broadcast view from yardlines) → `deriveMovementMetrics()` → shadow signals `cv.watch.player_speed_p95`, `cv.watch.play_tempo` at weight 0.
- Ingest: `POST /api/ops/watch-frame` (shared-secret header, CRON_SECRET pattern), multipart JPEG + JSON `{clientTs, fps, width, height, gameId, source: "screen"}`; in-memory ring buffer of last ~300 frames (≈2.5 min at 2 fps); `GET /api/ops/watch-status` health readout.
- Detector benchmark: P=1.00 / R=0.74 at 360p (n=57); tracklet fragmentation: 52 tracklets / ~6 players, median life 0.8s with pure-IoU association.
- Game scheduler: arm at kickoff−15 min, stand down 30 min after final, driven by ESPN scoreboard API; readiness checklist for Steelers @ Browns 7:15 PM CT (2026-10-01).
- Formulas: not specified.

## Data sources named
- Garrett's own licensed viewing: YouTube TV, NFL app, NFL+ (NFL+ Premium All-22 coaches film for next-day study), NFL RedZone (multiview mode).
- In-repo pipeline functions: `yolo-detect`, `buildTracklets()`, `deriveMovementMetrics()`; yard-line/hash-mark detection is named as the open sub-problem.
- Eval companion doc: `cv-detector-eval-2026-10-01.md`; scheduler companion: `cv-game-scheduler.md`.

## Findings (numbers and facts, not vibes)
1. The whole autonomous chain (auto-tune → capture → relay → ingest → worker) is spec'd, not built; none of it is blocked except build time + Garrett's one-time setup (box on, logged into apps). [OTHER]
2. Screen capture is explicitly framed as Garrett's own licensed viewing, his own hardware, private analysis only; no DRM stripping, no credential stuffing, no scraping of NFL/streaming servers, no restreaming or publishing video; every CV-derived signal lands at weight 0 in shadow until validated. [TRUST-SIGNAL]
3. RedZone mode: one capture input learns from all games' scoring plays simultaneously via the whip-around feed, with v1 game-tagging via scheduler time-range heuristics and v1.5 OCR of the on-screen score bug. [SCHEME]
4. All-22 lane: NFL+ Premium posts coaches film after games; spec'd as the next-day film-study lane with full formation/coverage extraction into `watch.plays` / `watch.formations` / `watch.tendencies`; live Sunday is the RedZone/priority feed, Monday is All-22 study. [SCHEME]
5. Detector at broadcast distance: P=1.00/R=0.74 at 360p (n=57), misses concentrate in piles/occlusions; 960px+ watch-loop capture should help; larger model (v8m) is the fallback. [OTHER]
6. Motion-aware association is an open gap: pure-IoU `buildTracklets` fragments at broadcast pace (52 tracklets / ~6 players, median life 0.8s); usable today for counts/heatmaps, not per-player tracking; fix direction is camera-motion compensation + prediction or higher fps. [SCHEME]
7. Field-landmark detection for the homography is the largest open gap: DLT math is proven on fixtures, but live broadcast needs automatic 2D correspondences (yard-line ∩ sideline, hash marks); yard lines alone are a degenerate configuration (proven in the eval); v1 fallback is hand-seeding per broadcast view. [SCHEME]
8. Tracklets are anonymous boxes; jersey-color clustering for team assignment is listed as follow-up work. [SCHEME]
9. Privacy line: the VM keeps detections/tracklets, not raw screen images, beyond a short debug window. [TRUST-SIGNAL]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Movement-metric signals (`cv.watch.player_speed_p95`, `cv.watch.play_tempo`) — SCHEME, COACHING (tempo and player-speed features for scheme/coaching reads once weighted).
- Formation/coverage extraction into `watch.plays` / `watch.formations` / `watch.tendencies` from All-22 — SCHEME, COACHING (scheme/tendency learning store).
- Explicit weight-0 shadow landing and "no published picks change" policy — TRUST-SIGNAL.
- RedZone multi-game scoring-play learning — SCHEME.
- Honest legal/brittleness caveats (no DRM stripping; tune logic is the most brittle part, flag degraded windows rather than dying silently) — TRUST-SIGNAL.

## Engine-actionable? (yes/no + one-line what)
Yes — the weight-0 shadow signal schema (`cv.watch.*` + per-game learning store) is the live-movement-data ingestion spec; wiring ingest + homography closes the largest CV feature gap.
