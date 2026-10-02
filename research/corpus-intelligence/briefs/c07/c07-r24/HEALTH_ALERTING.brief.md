# ops/HEALTH_ALERTING.md
## What it is (1-2 sentences)
Operational spec for GSE's health alerting loop: a 15-minute Vercel cron on `GET /api/cron/health-alert` plus an external GitHub Actions watchdog (every 30 min) that pages via Slack/Discord webhook on unhealthy transitions, with `strict=1` health semantics for settlement status.
## Key metrics/methods (formulas where given, else "not specified")
Unhealthy = any live check ≠ `ok`, OR ingestion last-success age > 90 minutes, OR settlement capability `unavailable`/critically behind. Alert fires on healthy→unhealthy transition or every 4 hours while still unhealthy. `strict=1` flips degraded/unavailable settlement to a failing request (default route returns HTTP 200 to avoid Nightly Sentinel pages on settlement lag); equivalently alert on `capabilities[?(@.capabilityId=="settlement")].status != "healthy"`. Alert dedupe state is process-local (a new serverless isolate may re-alert once within the quiet window — acceptable v1).
## Data sources named
Vercel logs (`[health-alert] ALERT:` lines), `HEALTH_ALERT_WEBHOOK_URL` (Slack/Discord/generic webhook), `/api/health?strict=1`, `/api/health` link in payload, `vercel.json` cron schedule (`*/15 * * * *`), `.github/workflows/external-watchdog.yml` (30-min external watchdog), UptimeRobot / Better Stack / Cronitor as zero-code backups.
## Findings (numbers and facts, not vibes)
- Health-alert cron runs every 15 min (`*/15 * * * *` in vercel.json); external watchdog every 30 min.
- Ingestion staleness threshold: 90 minutes.
- The doc's headline lesson: the external watchdog workflow "fails visibly but pages nobody" without the `HEALTH_ALERT_WEBHOOK_URL` GitHub Actions secret — "that is how production sat red for five days in August 2026."
- On 2026-09-02 a 92-pick overdue settlement backlog showed `capabilities[].settlement = unavailable` while the non-strict route still returned HTTP 200 — a status-only monitor would have slept through it.
- Payload fields: status, reason, ingestion age, deployment sha, link to `/api/health`.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] The 92-overdue-pick blind spot: alerting semantics can hide pipeline degradation; settlement-health staleness monitoring is a trust prerequisite before any public track-record claim.
- [OTHER] Ops-only document; no QB/coaching/OL/scheme content.
## Engine-actionable? (no — ops-only alerting spec with no model inputs)
