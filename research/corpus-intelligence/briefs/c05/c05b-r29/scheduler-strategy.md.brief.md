# scheduler-strategy.md
## What it is (1-2 sentences)
The scheduler/cron architecture for GSE data refresh (last updated 2026-05-21): daily per-sport refresh on Vercel cron (Hobby tier), 30-minute odds refresh via GitHub Actions, and hourly pick settlement — with Vercel daily crons kept as belt-and-suspenders backstop.
## Key metrics/methods (formulas where given, else "not specified")
Not specified. Cadence table: daily per-sport refresh (Vercel cron, declared in vercel.json); 30-minute refresh (GitHub Actions `.github/workflows/external-cron.yml`, schedules `*/30 * * * *` and `15 * * * *`); hourly pick settlement at :15 past the hour; `jarvis-snapshot` daily at 13:00 UTC. Auth model: routes check `Authorization: Bearer ${CRON_SECRET}`; concurrency disabled via `concurrency.group`.
## Data sources named
None (infra doc). Secrets: `CRON_SECRET` (matches Vercel Production env), `CRON_TARGET_URL` = `https://www.galaxysportsedge.com` (no trailing slash). Fallback: cron-job.org.
## Findings (numbers and facts, not vibes)
- Vercel Hobby cron cap is once per day; Pro unlocks unlimited cron at $20/mo per member — pre-launch traffic didn't justify the spend; no paying accounts (memory `sports-launch-decisions`).
- GitHub Actions schedule can drift up to ~10 minutes under heavy GHA load; acceptable for odds refresh, constraint is not going a full day without refresh.
- No retry loop — GitHub's next scheduled tick is the retry; failed HTTP call fails the job, visible in Actions tab.
- No persistent state in GHA; all state in the database; cron route is idempotent.
- Concurrent runs disabled so two half-hour overlaps don't double-write.
- Setup: add CRON_SECRET + CRON_TARGET_URL to repo Actions secrets; push workflow to main; manually trigger `refresh-odds` and confirm a 200 response.
- Upgrade path: Vercel Pro → replace daily entries in vercel.json with `*/30 * * * *` → disable or remove external-cron.yml; no application code change needed.
- Cron routes are write-side only: they expose no picks, performance numbers, EV claims, or stake recommendations publicly — launch-gate posture documented in `docs/launch-qa-checklist.md`.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: infra/ops architecture for data-freshness and pick-settlement cadence (30-min odds refresh supports engine signal freshness).
## Engine-actionable? (no — ops strategy doc, no engine logic)
