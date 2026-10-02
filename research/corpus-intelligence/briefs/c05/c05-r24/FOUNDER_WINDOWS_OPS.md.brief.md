# docs/ops/FOUNDER_WINDOWS_OPS.md
## What it is (1-2 sentences)
Windows runbook for the founder: CMD/PowerShell equivalents for health checks and firing the GitHub `external-cron.yml` workflow, plus the env-var checklist for the 5-minute money unblock.
## Key metrics/methods (formulas where given, else "not specified")
not specified (no metrics or formulas; command snippets only)
## Data sources named
- `https://www.galaxysportsedge.com/api/health`
- GitHub Actions `external-cron.yml` on `Beexly/Sports`
- `docs/ops/MONEY_PATH_LIVE_2026-08-06.md` (live Stripe price IDs)
- Sentry project `gse-web` DSN
## Findings (numbers and facts, not vibes)
- Two reasons bash snippets fail on Windows CMD: `gh workflow run` needs `--repo Beexly/Sports`, and CMD does not treat single quotes as string wrappers — use double quotes for jq.
- Health via `curl -sS https://www.galaxysportsedge.com/api/health` (plain, or piped to jq; PowerShell must use `curl.exe` to avoid the `curl` alias).
- Workflow targets: `free-spine-health`, `refresh-player-stats`, `settle-picks`, `jarvis-snapshot`, `refresh-odds`; monitor with `gh run list --repo Beexly/Sports --workflow=external-cron.yml --limit 5`.
- Authenticated free-spine uses `Authorization: Bearer %CRON_SECRET%` (Production CRON_SECRET from Vercel).
- Money-unblock env table: `SENTRY_DSN` + `NEXT_PUBLIC_SENTRY_DSN` same DSN from Sentry project `gse-web`; `GSE_WAITLIST_GATE_ENABLED=false` or delete opens `/waitlist` for leads; six `STRIPE_*_PRICE_ID` vars live in MONEY_PATH_LIVE_2026-08-06.md; free lane = `CONTENT_FREE_LANE_ENABLED=true` + Cerebras key; Claude credits = `CLAUDE_PROVIDER=auto` + cloud maps. Redeploy (or wait for next main deploy) after changes.
- Already green (do not re-debug): `/api/health` ok when free-spine/External Cron fired recently; Stripe GSE webhook enabled; medusa foreign endpoint disabled.
- #258 brand / LIVE_BOARD / rights fork = founder product calls only.
- Repo path for `gh` without `--repo`: `C:\Users\Garrett\Sports`, works only if origin points to `Beexly/Sports`.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: pure ops runbook, no football signal.
- TRUST-SIGNAL: #258 brand, LIVE_BOARD, and rights fork are founder-only calls — honors the public/private gate discipline.
## Engine-actionable? (yes/no + one-line what)
No — founder ops runbook; nothing the prediction engine can consume.
