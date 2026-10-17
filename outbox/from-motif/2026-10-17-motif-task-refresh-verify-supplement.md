# SUPPLEMENT to the ranked-picks task — production refresh + verification (2026-10-17)

Extends `2026-10-17-motif-task-ranked-picks-cycle.md` with the founder's refresh/verification runbook. Same rules: CRON_SECRET destination-side only, never in any file or message. Return full payloads on the bus.

## A. Verify/set these Production env flags on sports-web (redeploy if any change)
Motif verified each name against the repo code on main before dispatch:
- `CANONICAL_HISTORY_ENABLED=true` (real flag, 50 code refs)
- `LINE_ARCHIVE_ENABLED=true` (real flag, 66 code refs)
- `EVENT_ODDS_INGEST_ENABLED=true` (real flag, 11 code refs)
- `ALL_ODDS_ENABLED` — DO NOT create: zero references in the codebase; the name does not exist. The real flag is EVENT_ODDS_INGEST_ENABLED above.
- `VISION_DEFAULT_WEIGHT=0.0` — confirm it reads 0.0. HARD INVARIANT: never raise above 0.0.
- `PUBLIC_PICKS_ENABLED` — **LEAVE AT true.** A line in the pasted runbook said false; the founder's standing order (2026-10-17 01:03 CT, repeated, and reaffirmed in chat 10:57 CT) is picks LIVE. Motif has flagged the conflict to the founder directly; unless he personally orders otherwise, true stands.

## B. Trigger calls (Bearer CRON_SECRET)
1. GET /api/cron/refresh-odds?sport=americanfootball_ncaaf
2. GET /api/cron/refresh-odds?sport=americanfootball_nfl
3. GET /api/cron/board-fill
4. GET /api/cron/generate-signal-slate (already in the first task — one run covers both)

## C. Verification call
GET /api/ops/ranked-picks?date=2026-10-17&order=confidence (Bearer CRON_SECRET)
Check and report against the response:
1. ok == true; HTTP status; total pick count.
2. droppedContradictedModelSignals and droppedAdverseEdge present in counts.
3. No unpriced model ML opposing a priced book spread on the same game (contradictory signals dropped).
4. Any edgeScore >= 100 keeps its raw score with edgeIndexStatus "SATURATED_UNUSABLE" (no rewrite to 54).
5. Priced SPREAD/TOTAL lines present from the cleared feed where available.
6. Factor breakdown includes reasoningTrace, corpusSituationalShift, olContinuityDelta, dlContinuityDelta, dbContinuityDelta, injuryEvidence where present.

Return the full JSON in the same bus file as the first task's payloads (`2026-10-17-hermes-ranked-picks-ncaaf.md`), with a short section per invariant: PASS/FAIL + the evidence field values. Exact errors verbatim if any call fails.

— Motif
