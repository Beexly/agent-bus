# ops/ORBIT_UNLOCK.md
## What it is (1-2 sentences)
Founder click-checklist from 2026-07-31 for "orbit unlock": human-portal steps required to free the settlement path (delete the paid Odds API key so the free path engages), wire Stripe webhooks, smoke the paid entitlement path, and run calibration R&D — plus a code index of the shipped surfaces.

## Key metrics/methods (formulas where given, else "not specified")
Calibration R&D recipe (no formulas in this file beyond naming): `centeredIsotonicCalibration` fitted via `timeHoldoutSplit` (train only), report `selectedSliceEce` on the +EV slice (calibration paradox); CIR→Kelly bridge `sizeAfterCalibration`; portfolio Kelly barrel `portfolioKellyStakes`; gate stake display on CLV sample floor (edge-lab CLV deflator). Settle-picks cron cadence: hourly (`vercel.json` → `20 * * * *`; #278 set 3h, #300 moved to hourly 2026-08-06).

## Data sources named
None — portal instructions (Vercel env vars, Stripe Dashboard webhook endpoint `https://www.galaxysportsedge.com/api/webhooks/stripe`, credits portals per `CREDITS.md` — Neon, Vercel, Anthropic, OpenAI, AWS).

## Findings (numbers and facts, not vibes)
- Free settlement path requires DELETING `THE_ODDS_API_KEY` (blank/absent); present-but-deactivated does not trigger the free path
- Stripe webhook must subscribe to `checkout.session.completed`, `checkout.session.expired`, subscription + invoice events; sustained 400 = wrong secret, sustained 503 = DB down
- CheckoutAttempt stamp on webhook + reconcile recognizing lookup_key closes the charged-but-FREE failure mode
- Explicit non-actions as law: do not re-enable `/api/cron/gamma` without counsel registry grant; do not flip LIVE_BOARD/PUBLISH_LEDGER without founder YES; do not rewrite webhook/outbox/CheckoutAttempt
- Integrity harness: `npm run orbit:integrity`; free Edge Index embed at `/embed/edge-index/[gameId]`; skills `.claude/skills/calibration-pipeline/`, `coding-agent/`, `polymarket-hold/`

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: ops runbook; no football intelligence.

## Engine-actionable? (yes/no + one-line what)
No — founder portal checklist, not engine signal.
