# docs/ops/DEPLOY_LAG.md
## What it is (1-2 sentences)
A 2026-08-06 ops finding: production `/api/health` was serving a stale deployment SHA (`2d0f3a2…`) while main already held the settlement-drain code, leaving settlement CRITICAL at 139/1478 overdue — the law "code on main is not live until Vercel serves that SHA."
## Key metrics/methods (formulas where given, else "not specified")
Numbers: settlement overdue 139/1478 (CRITICAL) because production had not redeployed the drain code. Operational remedy only.
## Data sources named
`/api/health`, `/api/ops/public-surface-truth` (deployment.sha), `https://www.galaxysportsedge.com/api/cron/settle-picks`.
## Findings (numbers and facts, not vibes)
- Live health endpoint reported SHA `2d0f3a2` while main contained: hourly settle-picks + overdue-first STP (#300), free-path CLV grade + repair (#302), durable public form rate limits (#301/#302), ops truth detail auth.
- Founder action (highest leverage): Vercel Redeploy of latest production from main → confirm `deployment.sha` advances → run settle-picks cron with CRON_SECRET → watch overduePending trend.
- Law: always probe `deployment.sha` before concluding settlement code "failed."
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Stale deploys masquerading as code failures: OTHER (deploy ops). Relevant to trust data freshness (stale-ingestion kill switch rationale).
## Engine-actionable? (yes/no + one-line what)
No — deploy-ops doc; nothing for the prediction engine.
