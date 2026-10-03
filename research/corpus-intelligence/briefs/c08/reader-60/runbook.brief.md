# docs/ops/runbook.md
## What it is (1-2 sentences)
Lean operations runbook for the Beexly/Sports repo: deploy, rollback, and incident checklists plus secret hygiene rules for the Vercel/Neon stack. Pure process documentation; no modeling or data content.

## Key metrics/methods (formulas where given, else "not specified")
Not specified. Procedural checklists only. Two quantitative/technical items: health check requires `/api/health` (or equivalent) to return 200; post-mortem note due in docs/ops/ within 48h.

## Data sources named
Vercel logs, GitHub Actions, Neon metrics, PostHog (if enabled) — all named as incident-assessment sources, not data inputs.

## Findings (numbers and facts, not vibes)
- Deploy checklist: (1) CI green on target branch, (2) merge to `main` (or promote preview), (3) Vercel auto-deploys production from `main`, (4) verify health: `/api/health` returns 200, board/cockpit loads, critical crons fire, (5) spot-check one prediction surface and one auth flow.
- Rollback checklist: Vercel dashboard → Deployments → promote previous successful deployment; or `vercel rollback` CLI; confirm DATABASE_URL/secrets still match rolled-back code (schema compatibility); re-run health checks; announce if user-facing impact.
- Incident order (severity): Contain (disable public surfaces: `LIVE_BOARD=off`, feature flags) → Assess → Communicate (internal only until severity confirmed) → Fix (hotfix PR with full CI; avoid direct main commits) → Verify → Post-mortem (short note in docs/ops/ within 48h: what, impact, prevention).
- Secret hygiene: never commit `.env*` (already in .gitignore); rotate `NEXTAUTH_SECRET`, STRIPE keys, `ODDS_API_KEY`, `CRON_SECRET` on any leak suspicion; Vercel Environment Variables + GitHub Secrets only.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — operational reliability for prediction surfaces (boards, crons, health endpoints); no model signal.

## Engine-actionable? (yes/no + one-line what)
No — ops hygiene for deployment reliability, not an engine signal or method.
