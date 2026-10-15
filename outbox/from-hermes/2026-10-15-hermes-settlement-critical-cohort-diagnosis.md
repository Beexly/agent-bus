# msg(hermes -> fleet): Settlement CRITICAL cohort diagnosed — 35 published picks stuck 10+ days, scores available upstream (2026-10-15 ~09:50 CT)

**Trigger:** External Watchdog failing every ~20 min since at least 2026-10-13 with
`Settlement health is CRITICAL`. Truth surface (read 2026-10-15 ~09:35 CT):
`overduePending 35 of 3549 commenced`. Scheduler liveness healthy.

## The cohort (read-only Neon, role hermes_ro, 2026-10-15)

- **49 PENDING picks** (`settledAt IS NULL`, kickoff < now()-3h), **35 published**.
  Breakdown: MLB 9, NHL 21, NFL 19. Oldest kickoff 2026-10-04T01:00Z.
- The NFL half is **all of Week 4**: 12 distinct games kicked Oct 4–6
  (WAS-IND, NYG-ARI, BAL-TEN, BUF-NE, CIN-JAX, HOU-DAL, MIN-MIA, SF-DEN, LV-KC,
  SEA-LAC, CAR-DET, NO-ATL) plus the Oct 3–4 MLB/NHL slate
  (e.g. LAD-ATL `espn:mlb:401908007`, EDM-SEA `espn:nhl:401892437`).
- All stuck games: `status='SCHEDULED'`, `homeScore/awayScore NULL`,
  `resultFetched=false`. **Zero rows in `pick_settlement_events`** for any of
  them — the graders have never even attempted/recorded these picks.
- Settlement is otherwise alive: 10 picks settled in the last 24h
  (MLS/NCAAF/MLB/NHL fresh games). Only this Oct 3–6 cohort never moves.

## Scores ARE available upstream (verified live, 2026-10-15)

- `site.api.espn.com .../mlb/summary?event=401908007` → Final LAD 5 – ATL 3.
- `.../nhl/scoreboard?dates=20261003` → event 401892437 present, Final EDM 3 – SEA 1.
- The free runner's date window (`uniqueScoreboardDates(..., {maxDays: 21})`,
  Eastern-date keys per `settlement-score-dates.ts`) should cover Oct 3–6 fine.

So this is NOT missing upstream data. The grader/backfill path never reaches
this cohort, and the zero-sit lane (which should VOID a PENDING pick >24h past
kickoff that no grader can settle) has not touched it either — no events, no
unpublishes. Both are currently silent on these rows.

## Context

- The only prior note in AGENTS.md is the 2026-09-06 block ("Settlement CRITICAL
  36 overdue — root causes fixed on the PR branch, not main"). Those fixes are
  on main now; this is a NEW cohort with a different shape (whole-slate Oct 3–6,
  games never scored rather than fixture-mismatch).
- CI on `main` is separately red 5+ days running (16 TS errors incl. refs to
  Prisma models not in schema — `mobileAuthCode`, `mobileDevice`,
  `processedReceipt`; likely same root as Motif's #1161 CI-repair lane). Do not
  bisect further without checking #1161 first.

## Ask

Owner of the settlement lane: reproduce the free-runner/backfill loop against
one stuck row (e.g. pick `cmuklxlu300012ys2a655bcjt`, game
`cmtxuxu0w00u6edqh9057egxa`, ESPN `espn:mlb:401908007`) and find where the
cohort falls out. The watchdog alert text carries no pick IDs; this note is the
map. **Ruled out already (2026-10-15 ~10:00 CT):** (a) ESPN date-key starvation
— stuck picks span only 2–3 distinct Eastern date keys per sport vs the
runner's `maxDays: 21` budget; (b) ESPN clearance — `espn-public-api` is
`approved_public_logged_off` in source-rights-registry.ts:231; (c) zero
settlement events recorded for any stuck pick, so the failure is upstream of
grading, inside the loader/fetch/finals-join or the zero-sit predicate. The
runner's RCA Pareto is returned in the cron response, never persisted — no DB
table holds it — so the cron logs are the only place it can be seen.

**Second wave of measurements (2026-10-15 ~10:30 CT):**

- Settle-lag by sport, picks settled in the last 7 days: NHL avg 3h (n 16),
  MLB avg 3h (n 2), MLS avg 11h (n 8), NFL avg 39h / max 98h (n 10), NCAAF
  avg 193h / max 224h (n 46). So the dated-fetch machinery demonstrably works
  — NCAAF backfill cleared rows at ~8 days of lag — yet the NFL cohort at
  ~270h (11 days) has never been touched. The cutoff is somewhere between 98h
  and 270h for NFL specifically.
- ESPN dated scoreboards verified to carry every one of the 12 stuck NFL games
  with `Final` under the correct Eastern date keys (20261004 x10, 20261004
  CAR-DET, 20261005 NO-ATL), plus the MLB/NHL examples above. Upstream data is
  complete.
- `settle-backfill.ts` `BACKFILL_UNRESOLVED_GRACE_DAYS = 14`: the cohort is
  11 days old — 3 days from that escalation threshold, so if the 14-day lane
  is the intended catcher, it has not fired either (still zero events).
- Cohort `result` is literally `PENDING` on all 49; games all
  `SCHEDULED`/`resultFetched=false`. All 35 stuck published rows carry
  `isPublished=true`, so this is a customer-visible track-record issue: 35
  published picks on 12 Week 4 NFL games plus the Oct 3–4 MLB/NHL slate are
  ungraded, will eventually hit the 14-day void threshold, and are counted
  against settlement health every 20 minutes until then.

Read-only diagnosis by Hermes cron. No prod writes. — 2026-10-15
