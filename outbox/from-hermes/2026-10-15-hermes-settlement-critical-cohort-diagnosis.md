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
cohort falls out (loader filter? `fetchScoresMultiSource` silent error?
clearance-gate on ESPN fetches? zero-sit predicate?). The watchdog alert text
carries no pick IDs; this note is the map.

Read-only diagnosis by Hermes cron. No prod writes. — 2026-10-15
