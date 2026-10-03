# ops/LAUNCH_PREFLIGHT.md
## What it is (1-2 sentences)
Preflight checklist semantics for the GSE launch readiness script `node scripts/ops/launch-preflight.mjs`: how to run it, how to read its OK/!! hard/!! soft output, the six check steps, platform constants, and ingestion-503 recovery.
## Key metrics/methods (formulas where given, else "not specified")
Operational thresholds (no formulas): exit 0 = no hard blockers, 1 = hard !! present; ingestion stale if last SUCCESS > 240m (`REFRESH_STALE_AFTER_MINUTES`); settlement grace 6h (`SETTLEMENT_DEFAULT_GRACE_HOURS`); critical overdue threshold 5; health-alert ingestion age >90m (stricter than 240); webhook paging on CRITICAL only; 4h quiet window for re-alerts.
## Data sources named
None external. Script probes `GET /api/health`, `GET /`, `GET /api/ops/public-surface-truth`, `/api/picks` (must 503), `/api/cron/settle-picks` (unauth must 401), trust/SEO files (security.txt, ads.txt, humans.txt, llms.txt, robots.txt, sitemap).
## Findings (numbers and facts, not vibes)
- Hard blockers: health ok≠200, ingestion error, missing CSP default-src, overdue settlement >0, `/api/picks` not 503, unauth settle not 401, missing trust/SEO routes.
- Soft: free-lane/Jynx off, revenueLadder missing (hard only if monetize true early), thin founderNextSteps.
- Do-not-confuse rule: `ok`/503 = uptime; `status` = operator state incl. settlement.
- Ingestion 503 recovery: free-spine-health cron every 2h (`0 */2 * * *`); manual curl with CRON_SECRET resets age after SUCCESS IngestionRun.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: ops runbook, not football intelligence.
## Engine-actionable? (yes/no + one-line what)
No — launch-ops checklist; no model content.
