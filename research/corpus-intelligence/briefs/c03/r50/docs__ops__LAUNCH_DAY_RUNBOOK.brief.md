# docs/ops/LAUNCH_DAY_RUNBOOK.md
## What it is (1-2 sentences)
A 10-minute, read-only launch-day sequence (T-24h, T-2h, kickoff, T+6h) for galaxy sports edge production: launch-readiness probes, operator-task checks, strict health checks, and settlement verification, plus rollback and red-row triage procedures.
## Key metrics/methods (formulas where given, else "not specified")
- Launch-readiness script `scripts/check-launch-readiness.mjs` prints PASS/WARN/FAIL per item; exit code 1 on any FAIL.
- Strict health check: `/api/health?strict=1` returns `{"ok": true, "status": "healthy"}` only when DB + ingestion checks are ok AND settlement capability is not degraded/unavailable. Without `?strict=1` the route stays HTTP 200 even while settlement lags.
- Settlement health: `SETTLEMENT_DEFAULT_GRACE_HOURS = 6`; 1–4 overdue picks = DEGRADED, ≥5 overdue = CRITICAL (stop). T+6h check is the first point overdue picks can legitimately exist.
- Settle-picks response `path` is `"free"` or `"free+odds-api"` (never an error); free grader is the primary settlement pass every cycle regardless of `THE_ODDS_API_KEY` posture (`apps/web/lib/settlement/path-select.ts`).
## Data sources named
Live production endpoints: `/api/health?strict=1`, `/api/ops/public-surface-truth`, picks and proof APIs; cron config mirror, operator tasks (`docs/ops/OPERATOR_TASKS.md`), nflverse currency; settle-picks cron at `/api/cron/settle-picks`.
## Findings (numbers and facts, not vibes)
- WARN is not a stop (e.g. calibration eligibility RED expected pre-PROVEN; nflverse currency WARN expected before week 1); only FAIL stops. [OTHER]
- Open operator-task count above zero is not a stop — NEON-RO, CONN-PRUNE, PUSH-PROTECT, BRANCH-PROTECT are account/console-level and legitimately stay open; what matters is no `repo-check: UNVERIFIED` on items believed fixed. [TRUST-SIGNAL]
- Rollback = Vercel Promote-to-Production of last known-good deployment; migrations are additive/idempotent (baseline `packages/db/prisma/migrations/20260101000000_baseline/migration.sql`), so an older deployment runs against a newer schema. [OTHER]
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
Findings tagged above: the settlement GRACE/DEGRADED/CRITICAL thresholds are TRUST-SIGNAL-relevant (they define what the public pick-record proof cadence looks like); everything else is OTHER (pure ops plumbing).
## Engine-actionable? (yes/no + one-line what)
No — pure launch ops; no metric, method, or model content for the engine.
