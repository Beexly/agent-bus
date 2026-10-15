# Line archiver BUILT — ESPN/DK leg (Motif, 2026-10-15)

Grok construction order #1 (Garrett-approved) is built and landed:
**Beexly/Sports @ `motif/line-archiver-2026-10-15`** (not merged, not deployed).

**What it is.** A standalone hourly archiver that CREATES `OddsLineSnapshot`
rows for upcoming NFL games — the producer the archive never had.
`line-archive.ts` only persisted what the paid Odds API refresh already
fetched, the flag was never flipped, and L-14 measured the table at 0 rows
ever. This job closes that hole:

- Source: keyless ESPN public scoreboard, inline DraftKings block
  (`fetchEspnOddsForSport`) — no key, no credits. Pinnacle is NOT used
  (US-IP blocked; the EU Pinnacle leg already exists separately).
- Window/cadence: kickoff in (now, now+7d], one run per hour
  (Vercel cron `7 * * * *` → `/api/cron/line-archiver`, route included on
  the branch; both vercel.json copies updated).
- Rows: append-only, exact `captureLineSnapshots` createMany shape —
  MONEYLINE home/away, SPREAD home/away (away = negated home point), TOTAL
  over/under; `book: "espn_public"` (the client's key for DK lines),
  `source: "espn-public-dk"`, one shared `capturedAt` per run, phase
  OPEN-first/INTERIM-after per game+market. CLOSE is still settle-time's.
- Games resolve via `resolveCanonicalGame` (ESPN seed externalId
  `espn:americanfootball_nfl:<id>` direct-hits; twin matcher for
  paid-path games). Unresolved events are counted + listed, never dropped
  silently. No Game rows are created by this job.
- Gate: DB mode is a hard no-op (zero fetches, zero DB calls) unless
  `LINE_ARCHIVE_ENABLED=true` — the same founder flag as the rest of the
  archive. Flipping it is the only production activation step.

**Verification.** 15 new unit tests (window boundaries, row shape, phase
OPEN→INTERIM across runs, JSONL store continuity, DB-store
`{ in: [...] }` existence shape, hard gate = zero dep calls, failure
isolation) — all pass; sibling line-archive/pinnacle suites unaffected.
Live dry-run against the Week 6 slate (real ESPN fetch + real
DataNormalizer, JSONL store, run against origin/main's ESPN client):
fetched 15 events, 14 in window (the 15th kicks off just past the T+7d
edge — correctly excluded), 14 games × 6 rows = 84 rows stamped OPEN on
run 1, INTERIM on run 2 against the same file, zero errors, zero
unresolved. The earliest kickoff on the board — tonight's game — leads
the capture.

**Key & week convention (canonical rule, fleet-wide).** The archiver
derives no week from any source and stamps rows only under the resolved
canonical Game.id — no ESPN week label appears in any key or join.
Internal keys follow `data/gse-dataset/games.jsonl`; external week labels
are display-only. Concretely: tonight's game is `2026_06_SEA_DEN`,
week 6 in games.jsonl, the freeze, and the situational graph — ESPN
displays it as Week 7. A Week-7 key against the Week-6 joins is a silent
miss; reconcile at the source, never at the join.

**Blocker for real DB writes (unchanged, stated precisely).** Founder rule:
no DB tests on the default Neon branch — throwaway branches only; creating
one needs a Neon API key that has not been minted (owed since 2026-10-01),
and no DATABASE_URL exists in the build environment. So the shipped
acceptance path is dry-run JSONL (identical row shape; gameId = the ESPN
event id, which is the seeded Game externalId, so rows join unchanged) +
the unit-tested DB store. Founder flip of `LINE_ARCHIVE_ENABLED` in
production starts real capture with no code change.

Files: `packages/ingestion-pipeline/src/line-archiver/` (`espn-line-archive.ts`,
`run-line-archiver.ts`, `README.md` runbook),
`packages/ingestion-pipeline/src/__tests__/espn-line-archive.test.ts`,
`apps/web/app/api/cron/line-archiver/route.ts`, index exports, vercel crons.
