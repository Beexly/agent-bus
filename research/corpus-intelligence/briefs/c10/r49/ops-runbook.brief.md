# ops-runbook.md
## What it is (1-2 sentences)
Deployment and operations runbook for the Sports OS platform, with a 2026-06-30 correction block documenting how the actual Vercel production topology differs from the older self-hosted documentation.
## Key metrics/methods (formulas where given, else "not specified")
Prerequisites: PostgreSQL 15+, Redis 7+, Node.js 20+. Production runs on Vercel with daily crons (not a 30-minute loop): `/api/cron/refresh-odds` at `0 10 * * *`, `/api/cron/settle-picks` at `0 7 * * *`. Health route (`GET /api/health`) checks DB (`SELECT 1`) and last SUCCESS ingestion run only — no Redis probe. Refresh SLA: `REFRESH_STALE_AFTER_MINUTES = 240` (4h, the /api/health 503 trigger), `REFRESH_WARN_AFTER_MINUTES = 120` (2h warn). Alerts: error rate >5% on any endpoint → warning; API response target <500ms p95. Worker run commands: `workers:refresh` → `node workers/data-refresh/dist/index.js` (the documented `node workers/data-refresh/index.js` path does not exist).
## Data sources named
The Odds API; Stripe webhooks (`customer.subscription.*`, `invoice.payment_*`); `ingestion_runs`, `picks`, `subscriptions` tables.
## Findings (numbers and facts, not vibes)
- Prod is Vercel (daily crons), not the documented self-hosted `npm start` + standalone workers; the 30-minute `REFRESH_INTERVAL_MS` setInterval applies only to the optional standalone worker. [OTHER]
- The old "no ingestion run in > 2 hours → critical alert" is stale; 2h is now a WARN and the 503/critical threshold is 4h per the shared Refresh SLA. [OTHER]
- The "Redis connectivity" health probe is stale — the health route does not check Redis. [OTHER]
- Incident response for ingestion failure: check `IngestionRun` table, verify `THE_ODDS_API_KEY` validity/rate limits, The Odds API status page, manual trigger via `POST /api/admin/trigger-refresh`. [OTHER]
- Useful queries include a win-rate-by-sport SQL over `picks` (wins/losses/pct), but no sample-size floor is stated here. [TRUST-SIGNAL]
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
Findings tagged OTHER and TRUST-SIGNAL; no QB-BEHAVIOR, COACHING, OL, or SCHEME content present.
## Engine-actionable? (yes/no + one-line what)
No — pure ops/infra documentation; no prediction modeling, metrics, or signals content.
