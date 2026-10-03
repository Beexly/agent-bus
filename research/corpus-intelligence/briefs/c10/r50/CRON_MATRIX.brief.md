# docs/ops/CRON_MATRIX.md
## What it is (1-2 sentences)
A generated pointer file defining the canonical cron schedule truth for the GSE production system: Vercel cron schedules are the single source of truth (generated from `vercel.json`), with a GitHub-Actions external cron as backstop, plus the cron auth contract.
## Key metrics/methods (formulas where given, else "not specified")
not specified (no formulas). Schedules: `free-spine-health` `10,40 * * * *` (every 30m); `settle-picks` `20 * * * *`; `autonomy-cycle` `7,22,37,52 * * * *` (~15m); `calibration-metrics` `40 */6 * * *`; `refresh-odds` `*/30 * * * *`; `health-alert` `*/15 * * * *`. Backstop cadences in GH external cron: `5 */2 * * *` (2h), hourly `:15`, hourly `:22`. Auth contract: 500 if neither `CRON_SECRET` nor `CRON_SECRET_PREVIOUS` set; 401 on missing/wrong Bearer; 200 when Bearer matches primary or previous.
## Data sources named
`vercel.json` (cron SoT), `CRON_MATRIX.generated.md` (generated table), `.github/workflows/external-cron.yml` (sub-daily heartbeat), `apps/web/lib/cron/authorize.ts` → `cronAuthError` (auth SoT).
## Findings (numbers and facts, not vibes)
- Free-spine durable SLA = 120 minutes; Vercel 30m + GH 2h keep age under SLA.
- `calibration-metrics` writes versioned calibration maps + Brier/ECE/reliability bins, consumed by cockpit `/cockpit/calibration` and the path-to-verified flow.
- `settle-picks` writes graded WIN/LOSS rows (the sample fuel for the calibration load query).
- Routes under `app/api/cron/*` not in `vercel.json` are manual/workflow_dispatch only (e.g. backfill, backtest-calibration) — must not be re-added without ops decision.
- `gamma` is intentionally unscheduled (rights registry); re-enabling needs counsel-approved clearance.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- calibration-metrics Brier/ECE/reliability-bin writes → TRUST-SIGNAL
- settle-picks graded WIN/LOSS rows as calibration sample fuel → TRUST-SIGNAL
- SLA 120-min freshness bound on spine health → OTHER
- gamma unscheduled on rights grounds → OTHER
## Engine-actionable? (yes/no + one-line what)
No — pure ops/scheduling reference; nothing to wire into predictions.
