# docs/ops/odds-insert-blackout.md
## What it is (1-2 sentences)
A read-only diagnostic (2026-09-29) proving that production's odds pipeline had never recorded a successful odds insert — not an odds problem but a dead production Postgres database, with every alternative hypothesis systematically ruled out.
## Key metrics/methods (formulas where given, else "not specified")
not specified (diagnostic reasoning; no formulas).
## Data sources named
Live read-only GETs on 2026-09-29: `https://www.galaxysportsedge.com/api/ops/public-surface-truth` (200), `/api/health` (503), `/api/picks` (503); two read-only ESPN GETs testing the governor's query shape; repo code at working-tree SHA ecbde527b2, diffed against prod SHA f61ef8e38c22 (11 commits behind HEAD).
## Findings (numbers and facts, not vibes)
- Root cause CONFIRMED: production Postgres unreachable. Three independent endpoints agree: `/api/health` 503 with `checks.database.status="error"`, `detail="database unreachable"` (bare `SELECT 1` probe throws); `public-surface-truth` `schedulerLiveness` shows the CATCH arm "Failed to query IngestionRun" (query threw, table not merely empty); `/api/picks` 503 `rate_limit_store_unavailable` (durable Postgres limiter store); capabilityGraph marks `db:primary: unavailable` and `engine:settlement: unavailable` via `hard_dep_unavailable:db:primary`.
- The first statement of `process-sport.ts:340-342` (`db.ingestionRun.create`) sits ABOVE the try block that opens at line 384 — with the DB down it throws before the try, so not even a FAILED row is recorded; the paid `client.getOdds(...)` call at lines 419-424 is never reached; zero credits spent.
- `null` is the signature of "never ran," not "ran and got nothing": `remaining`/`used` are null (not 0); `lastZeroOddsSuccessAt` is also null — no SUCCESS row of any kind exists. This rules out provider-side explanations.
- Ruled out with evidence: missing/mismatched API key (`oddsKeyPresent:true`, 17-alias key resolution); credit budget exhausted (null ≠ 0; `dailyBudget:600` is a constant); governor denying sports (fails open; ESPN range-query 400 → null → allow); no sports in season (4 in season at UTC month 9: NFL, NCAAF, MLB, MLS); empty slate/429 (would leave SUCCESS rows with oddsInserted:0); 402 circuit breaker (in-memory, resets per cold start); prod SHA lag (git diff on all 6 odds-path files prod vs branch: byte-identical, non-causal).
- Separate live bug filed (not the blackout cause): ESPN returns HTTP 400 for the range shape `?dates=20260929-20261001&limit=300` on all four tested sports, while single-day and no-dates forms return 200 — this silently disables the free cost-control, so it will cause credit overspend (opposite direction) once the DB is back.
- Likely underlying trigger (hypothesis, not asserted fact): standing migration-ledger divergence — `prisma migrate deploy` failing P1001, `DIRECT_URL` pointing at a dead endpoint post password rotation/compute change.
- Recommended hardening: move the `ingestionRun.create` inside the try so outages yield FAILED rows instead of invisibility (would have made the outage self-diagnosing).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- All items: OTHER (infrastructure/ops diagnosis — odds ingestion pipeline, DB liveness, ESPN API shape; no football, coaching, OL, or scheme content).
## Engine-actionable? (yes/no + one-line what)
yes — once DB is restored: watch `oddsInserting.lastSuccessAt` to populate within one */15 cycle and `credits.remaining` to go from null to a number; file the ESPN range-query 400 fix (per-day requests) to stop silent credit overspend; move `ingestionRun.create` inside the try for self-diagnosing outages.
