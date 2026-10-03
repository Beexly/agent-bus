# docs/ops/CLAUDE_OWNER_LAUNCH_HANDOFF.md
## What it is (1-2 sentences)
Owner launch handoff (refresh 2026-08-06) for the Galaxy Sports Edge monorepo at github.com/Beexly/Sports: preflight procedure, owner deploy/env/Stripe/settle checklists, and explicit do-not-flip / do-not-reship guards.
## Key metrics/methods (formulas where given, else "not specified")
Settlement: `SETTLEMENT_DEFAULT_GRACE_HOURS = 6`; a pick is overdue if published, non-seed, result=PENDING, commenceTime older than now − 6h. Health bands: 0 overdue = HEALTHY; 1–4 = DEGRADED; ≥5 = CRITICAL. Health-alert pages on settlement CRITICAL, check errors, or ingestion age >90m (quiet 4h). /api/health ok/503 = database + ingestion checks only; settlement CRITICAL degrades status but does not alone 503.
## Data sources named
Vercel Production; Stripe webhook (`/api/webhooks/stripe`); settle-picks cron (`/api/cron/settle-picks`); PRs #320–#341, #121 #226 #247 #248 #258 referenced historically.
## Findings (numbers and facts, not vibes)
- PUBLIC_PICKS was opened by the founder and is ON in production as of 2026-09-02 (informational, not a record claim); do-not-flip list: LIVE_BOARD, STATS_PUBLIC, PERFORMANCE_STATS, PUBLISH_LEDGER.
- Required env: CONTENT_FREE_LANE_ENABLED=true, CEREBRAS_API_KEY, CLAUDE_PROVIDER=auto, JYNX_CLOUD_ORDER=bedrock,azure,vertex, JYNX_CLOUD_FAILOVER=true.
- FORBIDDEN: gate flips, public ROI / lock slang, CrewAI/Ollama/OpenClaw in the monorepo, settlement via LLM, inventing scores, changing the 6h grace without product reason.
- Done when: preflight shows only intentional flags, Stripe clean, settle repairs OK, SHA ≈ main.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: launch/ops procedure.
## Engine-actionable? (yes/no + one-line what)
no — ops procedure, not engine signal; the only engine-adjacent constraint is "never settle via LLM."
