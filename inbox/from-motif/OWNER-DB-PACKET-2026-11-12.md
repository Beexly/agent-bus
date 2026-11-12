# OWNER DB PACKET — Plan v4 (2026-11-12, from Motif)

**Nothing in this packet has been executed. Nothing executes without your explicit SQL sign-off below.**

---

## A. VOID SQL — the 14 published Week 10 picks (Hermes, prepared, not executed)

Source: Beexly/Sports, branch `claude/keen-goodall-o6kuy1`, commit `dedb0f82cba1`, file `docs/engine/research/2026-11-12/void-week10-published-picks.sql` (blob `13c4c43d`). Built from Hermes' read-only Neon baseline: exactly 14 published rows, all `modelVersion = v5.3.1`, all `result = PENDING`, written by Path P (refresh-odds cron → process-sport.ts → scoreGames), which never consults the emission gate. Includes NYG -1.5 and UNDER 43.5 (tonight, WSH @ NYG) and the two 2026-08-22 preseason lookahead rows JAX -10.5 and BAL -4.5. The script asserts the set is exactly 14 before touching anything, marks VOID with reason + timestamp, deletes nothing, and ends in ROLLBACK with COMMIT commented out.

```sql
-- VOID the 14 published NFL Week 10 picks.
-- Prepared 2026-11-12 by Hermes from a read-only Neon baseline.
-- NOT EXECUTED. Owner approval (Decision 1) covers marking VOID with reason and
-- timestamp; it does not cover deletion. Nothing here deletes a row.
--
-- Baseline that produced this list (read-only, hermes_ro):
--   sportId cmpg6t7v900031heri45v3d8s, commenceTime 2026-11-12 .. 2026-11-18
--   14 games, 17 picks, 14 published. All modelVersion v5.3.1, all result PENDING.
--   PickResult enum has VOID. No schema change needed.
--
-- Why: these were written by Path P (refresh-odds cron -> process-sport.ts ->
-- scoreGames v5.3.1) which never consults the walk-forward emission gate. They
-- are not engine verdicts and must not stand as public record.

BEGIN;

-- 1. Confirm the target set is exactly 14 rows before touching anything.
SELECT count(*) AS target_rows
FROM picks p
JOIN games g ON g.id = p."gameId"
WHERE g."sportId" = 'cmpg6t7v900031heri45v3d8s'
  AND g."commenceTime" >= '2026-11-12'
  AND g."commenceTime" <  '2026-11-18'
  AND p."isPublished"
  AND p.result = 'PENDING';
-- Expect: 14. If it is not 14, ROLLBACK and re-baseline.

-- 2. Mark VOID. Reason and timestamp go in the existing text/timestamp columns.
UPDATE picks p
SET result      = 'VOID',
    "settledAt" = now(),
    reasoning   = COALESCE(p.reasoning, '') ||
                  E'\n[VOID 2026-11-12] Written by Path P (refresh-odds cron -> process-sport.ts -> scoreGames v5.3.1), which does not consult the walk-forward emission gate. Not an engine verdict. Owner-approved Decision 1.'
WHERE p.id IN (
  'cmw8j1mtu1jvr229n73cxntyp', -- WSH @ NYG  SPREAD  NYG -1.5
  'cmw8urf40001y74il5elw2dyj', -- WSH @ NYG  TOTAL   UNDER 43.5
  'cmt4fffis091neat5ddon7kmi', -- JAX @ TEN  SPREAD  JAX -10.5
  'cmwbsopmw009x6uitf0ipjzt7', -- BUF @ NYJ  SPREAD  BUF -8.5
  'cmwbsopka009l6uitiynm6noc', -- CAR @ NO   TOTAL   OVER 48.5
  'cmwbsophq00996uitcctlxz3r', -- JAX @ TEN  TOTAL   OVER 46.5
  'cmwd09etm1jix14c48h0bviun', -- KC @ ATL   TOTAL   OVER 47.5
  'cmwcmbu2w00hdyqob8myne03b', -- MIN @ GB   TOTAL   UNDER 42.5
  'cmwcojt1902gmtvng22bm4hnq', -- BUF @ NYJ  TOTAL   OVER 50.5
  'cmwbsopj1009f6uitaomnxwt1', -- MIA @ IND  TOTAL   UNDER 38.5
  'cmwcfmh4f1lh413tj686v4kjl', -- HOU @ CLE  TOTAL   OVER 40.5
  'cmwbsopdj008s6uitj2d5lmyc', -- SF @ DAL   SPREAD  SF -4.5
  'cmwbsoplk009r6uitkroparkh', -- SF @ DAL   TOTAL   OVER 55.5
  'cmt4fffmb0925eat5fhwwkf91'  -- LAC @ BAL  SPREAD  BAL -4.5
)
  AND p.result = 'PENDING';

-- 3. Verify: 14 rows now VOID, 0 PENDING in the set.
SELECT p.result, count(*)
FROM picks p
JOIN games g ON g.id = p."gameId"
WHERE g."sportId" = 'cmpg6t7v900031heri45v3d8s'
  AND g."commenceTime" >= '2026-11-12'
  AND g."commenceTime" <  '2026-11-18'
  AND p."isPublished"
GROUP BY 1;

-- COMMIT;   -- left commented: the owner runs this, not an agent.
ROLLBACK;
```

Verified by Motif against the committed file: the IN list carries exactly 14 pick IDs, and step 1 asserts the live target set is exactly 14 before the UPDATE — if the count is not 14, the script's own instruction is ROLLBACK and re-baseline.

## B. SettlementRun stall — root cause + fix plan

Facts (repo + Hermes' read-only baseline): last NFL SettlementRun 2026-10-20 12:34 UTC (source the-odds-api, window 2026-10-20T12Z). 23 days, no new runs. 11 Week 9 published NFL picks still PENDING.

**What the code proves:**
- The trigger still exists: `vercel.json` on main schedules `/api/cron/settle-picks` hourly at :20. Nothing removed it. settle-sport.ts last changed 2026-10-22, after the last run; the credit ledger file is unchanged since before Oct 1. No commit deleted settlement.
- `SettlementRun` rows are written only inside `settleSport` (the paid Odds API pass), downstream of two early-return gates: (1) the C-109 spend guard, which refuses unless the free pass's RCA left an overdue NFL pick coded OVERDUE_NO_SCORE or NO_TRUSTED_FINAL; (2) the credit governor, which refuses when the latest recorded Odds API credit observation fails the reserve-pace rule (a fresh zero reading holds every call). Either refusal returns before any SettlementRun row exists. The free grader never writes SettlementRun rows.
- So the empty table proves only that no paid scores call has cleared both gates since Oct 20. It does not, by itself, prove the free grader stopped.

**What is unproven (needs one production cycle + DB reads to settle):** why the 11 Week 9 picks are still PENDING. If the hourly route completed its lanes, the free pass would grade them or the zero-sit lane would VOID them (>24h past kickoff). Candidate failure points visible in code: the route awaits `persistFreeScores` and `runFreePathSettlement` with no try/catch, so one throw kills the cycle before backfill and zero-sit run; cron auth (CRON_SECRET) state is not readable from the repo; production deployment staleness is the same skip-build problem as OPS-1. Which gate or failure fired on Oct 20 is not determinable from files alone.

**Fix plan (ordered):**
1. Hermes (read-only): pull the latest Odds API credit observation (remaining, observedAt) and the free-pass RCA codes for NFL since Oct 20. Name the refusing gate.
2. Motif: one authenticated manual hit of `/api/cron/settle-picks?sport=americanfootball_nfl` in Production; the JSON response (`paidSupplement.results[].note`, `starved`, `zeroSit`, advisories) names the failing stage in one cycle.
3. Owner: if credits are the hold, renew The Odds API or accept free-path-only and re-point the Stage H health check at the free pass instead of the paid SettlementRun table.
4. Hermes (branch + PR): wrap route step 1 in try/catch like steps 3–5, and add a per-cycle heartbeat so a stall alarms in hours, not 23 days.
5. Backfill: one clean cycle lets stale backfill + zero-sit settle or VOID the 11 Week 9 picks automatically.

**Proof settlement resumed:** a new NFL SettlementRun row after the fix (or, if free-only by your decision, a settle-picks response with ok=true and picksSettled/picksVoided > 0), Week 9 published NFL PENDING count = 0 with settledAt set on every row, and two consecutive hourly cycles with starved=false.

## C. Sign-off

Reply with one line each. Nothing executes without your explicit sign-off.

- APPROVE VOID SQL — the 14-row script in section A runs, COMMIT uncommented, by the owner or on your word.
- APPROVE SETTLEMENT FIX — steps 1–5 in section B proceed (step 4 is a PR; it merges under the standing agents-agree + CI-green rule).
- HOLD — packet stays on file, nothing runs.
