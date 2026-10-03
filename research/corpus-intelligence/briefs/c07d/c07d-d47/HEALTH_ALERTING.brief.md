# ops/HEALTH_ALERTING.md
## What it is (1-2 sentences)
The health-alerting runbook (updated 2026-07-31, related to the "Launch Readiness Audit — 5-day silent ingestion outage"): `GET /api/cron/health-alert` (Bearer `CRON_SECRET`) on a `*/15 * * * *` Vercel schedule, firing on healthy→unhealthy transitions or every 4 hours while unhealthy, plus a zero-code external backup via UptimeRobot/Better Stack/Cronitor against `/api/health?strict=1`.

## Key metrics/methods (formulas where given, else "not specified")
Formulas: not specified. Alert logic (verbatim conditions):
- Unhealthy if ANY of: any live check status ≠ `ok`; ingestion last-success age **> 90 minutes**; settlement capability is `unavailable` / critically behind
- Alert fires on: transition healthy → unhealthy, **or** every **4 hours** while still unhealthy
- Internal cron cadence: every **15 minutes** (`*/15 * * * *`); external watchdog (`.github/workflows/external-watchdog.yml`) every **30 minutes** from outside Vercel
- External monitor: alert when HTTP status ≠ 200 (or body `ok === false`) against `https://www.galaxysportsedge.com/api/health?strict=1`
- Equivalent body check: `capabilities[?(@.capabilityId=="settlement")].status != "healthy"`
- Alert dedupe state is **process-local** — a new serverless isolate may re-alert within the quiet window once (acceptable for v1)

## Data sources named
- Slack/Discord/generic webhook at `HEALTH_ALERT_WEBHOOK_URL` (must also be a GitHub Actions repository secret of the same name for the external watchdog)
- Vercel cron logs (`[health-alert] ALERT: ...` when webhook unset)
- `/api/health` route (and its deployment sha + ingestion age fields)

## Findings (numbers and facts, not vibes)
- The document's origin story: production "sat red for five days in August 2026" — the external watchdog workflow existed but nobody was paged because the `HEALTH_ALERT_WEBHOOK_URL` GitHub secret was missing (workflow failed visibly but paged nobody).
- `strict=1` is load-bearing: without it the route **deliberately stays HTTP 200 while settlement is DEGRADED/CRITICAL** (so the Nightly Sentinel doesn't page on settlement lag). This is why a status-only monitor slept through the **2026-09-02 backlog: 92 overdue picks**, `capabilities[].settlement = unavailable`, HTTP still 200.
- With `strict=1`, a degraded or unavailable settlement capability fails the request too — so the external monitor catches settlement outages.
- If the webhook env var is unset, the cron still runs and logs the alert to Vercel logs (no page).
- Alert dedupe is process-local (same pattern as free-spine cache) — duplicate alerts possible on isolate churn, accepted for v1.
- Related docs named: `docs/ops/cost-controls.md`, `runbook.md` (referenced in the sibling free-stack file; not in this file's own text — noted here only as sibling context, INFERENCE).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **[OTHER — trust/signal integrity]:** The 2026-09-02 incident (92 overdue picks, settlement `unavailable`, HTTP 200 with no alert) is a direct threat to the pick-publication pipeline: unpublished/unsettled picks rot the track record. The `strict=1` monitor on `/api/health` is the documented guard; serves the **tracking lane** and the **calibration/sizing lane** (stale settlement poisons calibration).
- **[OTHER — calibration integrity]:** Settlement lag is a first-order data-quality risk for any calibration metric — picks settled late or never settled feed wrong outcomes into calibration. The 90-minute ingestion-age threshold and settlement-unavailable alert are the tripwires that keep the engine's ground-truth feed trustworthy.
- **[OTHER — operational lesson for the watch lane]:** The process-local dedupe accepting one duplicate alert per isolate churn is a concrete pattern reference if the engine's own watch loops (e.g. the deployed CV watch loop) need alert dedupe — don't over-engineer v1 dedupe, but do require `strict=1` semantics (alert on degraded, not just down).

## Engine-actionable? (yes/no + one-line what)
**Yes** — any settlement/ingestion health check feeding calibration must use the `strict=1` semantics (fail on DEGRADED/CRITICAL settlement), never the raw 200; verify the external watchdog's webhook secret is set so the five-day-silent-red failure mode can't recur.
