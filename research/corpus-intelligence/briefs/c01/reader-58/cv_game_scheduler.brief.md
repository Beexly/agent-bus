# research/2026-10-01/cv-game-scheduler.md
## What it is (1-2 sentences)
Spec (2026-10-01) for the CV game-window scheduler and per-game learning store — the autonomous watch loop that arms itself for every NFL game, captures one feed at a time, and accumulates film knowledge in Postgres; includes verified schedule facts and a Steelers@Browns readiness checklist for 2026-10-01 evening.
## Key metrics/methods (formulas where given, else "not specified")
- Window arithmetic: windowStart = kickoff − 15 min; windowEnd = final + 30 min (final from polling scoreboard status.type.name == "STATUS_FINAL" every 5 min in-window; ~4.5h fallback if no final); cron ticks every 10 min.
- Scheduler state per game: {espnEventId, season, week, away, home, kickoffTs, windowStart, windowEnd, status}; wake logic: if any window active now or starts within 15 min → ensure ingest worker up + capture client armed (push notification if client not reporting); else worker stays down.
- Learning store schema (watch schema, Postgres/Neon): games (game_id PK = ESPN event id, season, week, away, home, kickoff_ts, window_start, window_end, status scheduled|live|final, frames_ingested); frames (game_id, frame_ts, frame_idx, detections JSONB; raw JPEGs kept only 24h debug window); tracklets (tracklet_id, start/end_ts, n_frames); field_positions ((x, y) in yards per tracklet per t); v2+: watch.plays, watch.formations, watch.tendencies.
- Detector measurement: YOLOv8n, P=1.00, R=0.74 on real-footage eval, 48/48 tests green; association fragments on broadcast pace (52 tracklets/~6 players); hand-seed homography fallback ~30s one-time.
- All CV-derived signals land at weight 0 (shadow) per research→wire→weight→calibrate→test→polish; retention: positions/tracklets/detections kept for the season, raw frames dropped after 24h.
## Data sources named
- ESPN scoreboard API (no key): site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?dates=YYYYMMDD (verified live 2026-10-01; nflverse schedules as fallback).
- Capture sources (Garrett's own subscriptions): YouTube TV Sunday Ticket / NFL app / NFL+; NFL+ Premium All-22 coaches film (morning-after deep study lane into watch.plays/formations/tendencies).
## Findings (numbers and facts, not vibes)
- Tonight's window verified: event 401872964, PIT@CLE, 2026-10-02T00:15Z = 7:15 PM CT; scheduler window 7:00 PM → ~10:45 PM CT.
- Sunday 10-04: 14 games — 8:30 AM CT international (IND@WSH, event 401872965, London, 13:30 UTC), 8× 12:00 PM CT (documented "9 games" at 12:00 window incl. London game), 4× 3:05/3:25 PM CT, SNF 7:20 PM CT (DET@CAR).
- Pattern: TNF Thu 7:15 PM CT, Sun 12:00/3:05/3:25/7:20 PM CT, MNF Mon 7:15 PM CT, occasional Saturday late season + 8:30 AM CT international; all converted to America/Chicago.
- Modes with one capture input (v1 = autonomous watcher on Garrett's Windows box): (a) priority-game mode (highest engine edge or preset priority list); (b) RedZone/multiview mode (frames tagged by game — v1 time-range heuristics, v1.5 OCR the score bug).
- True all-games-simultaneous coverage needs more capture inputs than one box — a hardware/money decision for Garrett later; ingest endpoint + learning store are already multi-game keyed so scaling is additive.
- Readiness for tonight: schedule known ✓, detector ready ✓, autonomous watcher ✗ (spec'd only), VM ingest endpoint + worker ✗ (sketched only), scheduler ✗ (spec'd, ~60-line core), homography ⚠ (hand-seed), association ⚠ (fragments). Garrett's one-time setup: leave Windows box on, logged into subscriptions, watcher as boot service.
- v1 cost: his existing Windows box + subscriptions he already pays for; no new purchases or subscriptions.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- watch.formations / watch.tendencies (v2+) — formation/coverage extraction from All-22 feeds SCHEME tendency data over time.
- Field-position heatmaps and per-game detection keying — OTHER (film-knowledge accumulation infrastructure).
- No QB-behavior, coaching, OL, or trust-signal findings.
## Engine-actionable? (yes/no + one-line what)
Yes — the watch.plays/formations/tendencies per-game store is the future SCHEME-tendency data source (formation/coverage rates game-over-game) once the unbuilt watcher/ingest/scheduler components land; the ESPN scoreboard API endpoint + window arithmetic is immediately usable for any time-windowed game logic.
