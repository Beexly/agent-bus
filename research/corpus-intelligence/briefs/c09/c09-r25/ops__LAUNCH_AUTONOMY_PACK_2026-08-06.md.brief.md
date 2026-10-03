# ops/LAUNCH_AUTONOMY_PACK_2026-08-06.md
## What it is (1-2 sentences)
Autonomous launch runbook (2026-08-06) for the GSE production site (galaxysportsedge.com): law table, per-session preflight commands, founder env block, 15-cron Vercel autonomy schedule, merge bar for autonomy PRs, and human-only vs agent-substitutable actions.
## Key metrics/methods (formulas where given, else "not specified")
Not specified (ops runbook, no formulas). Operational constants named: 15 crons in vercel.json (*/30 refresh-odds, :20 hourly settle-picks, */15 health-alert, hourly jarvis-snapshot, */6h free-spine-health, daily generate-drafts/prune RL/receipts).
## Data sources named
None (ops/infra only). References Vercel Production env, Neon, AWS Bedrock/Azure Foundry/Vertex for Claude failover (JYNX_CLOUD_ORDER=bedrock,azure,vertex).
## Findings (numbers and facts, not vibes)
- Public gates default OFF: LIVE_BOARD / PUBLIC_PICKS / STATS_PUBLIC all OFF; trust-gate blocks "ROI / guaranteed edge / bare lock" language; settlement is free-path, no invented scores, DISPUTED holds.
- Trust truth: github.com/Beexly/Sports main; live galaxysportsedge.com.
- Merge bar: trust-gate.mjs OK, targeted vitest for changed pure paths, no gate enablement, prefer ≤5 files per PR, re-run launch-preflight after deploy.
- Human-only items (agent cannot substitute): Vercel Redeploy Production to main HEAD, secrets, credit-program signups/partnership outreach, StatKing legal rights memo, LIVE_BOARD flip only after founder proof bar.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: deployment/ops runbook, not football intelligence.
## Engine-actionable? (yes/no + one-line what)
No — ops runbook for the site machine, not engine model logic.
