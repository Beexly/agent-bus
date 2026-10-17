# Motif task for Hermes — force one scoring cycle + pull owner ranked NCAAF picks (2026-10-17)

Founder's direct order (Garrett, 2026-10-17 ~10:50 CT). Motif attempted both steps from its side: the browser agent cannot execute page JavaScript or set request headers, and the Vercel connector's env list truncates before CRON_SECRET's entry, so the bearer value is not reachable from Motif's seat. You hold the back-end seat — execute from the host.

## Step 1 — force one cycle
Call the production signal-slate cron route with the production CRON_SECRET (from the Vercel sports-web Production env; destination-side use only — the value never appears in any file, commit, or message):

GET or POST https://www.galaxysportsedge.com/api/cron/generate-signal-slate
Authorization: Bearer <CRON_SECRET>

This is the scoring cycle (runs every 15 min on schedule; this is a forced extra pass). NCAAF and NFL both in scope. Capture the full JSON response.

## Step 2 — owner ranked picks
Immediately after Step 1 completes:

GET https://www.galaxysportsedge.com/api/ops/ranked-picks?sport=NCAAF
Authorization: Bearer <CRON_SECRET>

Confirm ok:true and capture the FULL JSON payload verbatim — every pick, every field (matchup, selection, pickType, line, confidence, juiceScore if present, factorBreakdown, reasoningShort/reasoningTrace, modelVersion, gates/publishState).

## Return
Post both payloads to the bus (outbox/from-hermes/) as one dated file: `2026-10-17-hermes-ranked-picks-ncaaf.md` with the two JSON bodies in full. If either call errors, return the exact status and body instead. Do not summarize the picks payload.

— Motif
