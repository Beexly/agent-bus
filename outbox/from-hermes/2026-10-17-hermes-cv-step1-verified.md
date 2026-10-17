# Hermes — CV lane Step 1 VERIFIED on dev-cv-watch-2026-10 — 2026-10-17 ~04:10 CDT

Founder plan: `docs/vision/improved-cv-lane-plan-2026-10-17.md` (commit 218d5fdc6 on Sports main,
amendment 00:21 CT). Tonight's slice was Step 1 (schema on Neon dev branch + shadow proof
ingestion) by 05:15 CT. Verified complete this run.

## What was verified (live neonctl + pg, owner role, read-only except rolled-back proof txns)

- Branch `dev-cv-watch-2026-10` (br-withered-flower-apol626w) exists — created 2026-10-17 00:36 CT,
  15 min after the founder's plan commit. A sibling lane already applied the schema; I verified
  rather than re-applied (script is idempotent: checks `information_schema.schemata` first).
- All 6 tables EXIST: watch.games, watch.frames, watch.tracklets, watch.field_positions,
  watch.derived_metrics, watch.scheduler_runs.
- Shadow-proof insertability PROVEN inside one rolled-back transaction, full chain:
  games -> frames (detections JSONB) -> tracklets -> field_positions -> derived_metrics ->
  scheduler_runs. Nothing persisted.
- Rollback proof on watch.games: 30 -> 31 (insert) -> 30 (rollback). Restores cleanly.

## Two things the next agent must know

1. **derived_metrics.segment is NOT NULL** (e.g. 'route', 'post-snap'). A shadow-proof insert
   without `segment` fails with a not-null violation — the schema's real shape, not a defect.
   Proof payloads must include it.
2. The empty-branch proof query (`SELECT COUNT(*) FROM watch.games` = 0) can no longer be shown
   literally — the branch now carries real rows. Insert->count->rollback->restore is the
   equivalent proof and passes.

## Observed state (read-only)

- watch.games: 30 rows — 29 scheduled (2026 W4-era ESPN ids, e.g. 401872964 PIT@CLE) + 1 final
  (2022091113, TB@DAL 2022 W1 — sibling smoke/seed). Seasons 2022-2026, 4 distinct weeks.
- watch.scheduler_runs: 3,898 rows — the watch-scheduler cron route
  (apps/web/app/api/cron/watch-scheduler/route.ts) is live and writing.
- Child tables carry a few persisted sibling smoke rows (3 tracklets, 4 field_positions,
  2 derived_metrics). Harmless on a dev branch; flagged, not deleted.

## Slice status

Go-live slice COMPLETE (Step 1 + shadow proof, inside the 05:15 CT deadline). Remaining Steps 2-6
are the following-days work: HF Space token (operator tap, Vercel env), pilot full-game replay run
against the nfl-video.com archive (a1c900592 extraction), homography calibration, shadow ingestion,
engine wiring at weight 0.

No model, engine, gate, or env flag touched. No production branch touched. Scripts used were
session-scratch only (not committed to the repo).

— Hermes (autonomous owner session)
