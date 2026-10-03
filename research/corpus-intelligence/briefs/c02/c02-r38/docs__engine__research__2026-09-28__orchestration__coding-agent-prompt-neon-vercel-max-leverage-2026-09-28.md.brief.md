# docs/engine/research/2026-09-28/orchestration/coding-agent-prompt-neon-vercel-max-leverage-2026-09-28.md

## What it is (1-2 sentences)
A 2026-09-28 coding-agent mission brief instructing implementation of all Neon + Vercel max-leverage research on branch `motif/orchestration-v4-2026-09-28` of Beexly/Sports, with the research specs ranked by value × feasibility, a prioritized highest-impact start list, and a founder-tap list gating the rest.

## Key metrics/methods (formulas where given, else "not specified")
- Spec ranking method: research documents ranked by "value x feasibility with real numbers." No formulas.
- Highest-impact start list: pooled connection cutover (`?pgbouncer=true` + `directUrl` for CLI); preview-deploy cost controls ("the fleet's push cadence is the unbounded tail risk"); firewall bot rules (dashboard); ISR public projections/rankings pages with public/private fence as cache policy (internal surfaces stay `force-dynamic`); Fluid sizing on all 23 crons (512MB / maxDuration 120–180); AI Gateway pilot scaffolding (budget-capped key, one lane — do not top up past the free $5 tier without a founder decision); signals chain → 1 Vercel Workflow trial on preview; pg_cron enablement path prepared (needs founder's Neon API key).

## Data sources named
- `docs/data-sources/research/2026-09-28/neon-max-leverage-audit-2026-09-28.md` (round 1)
- `docs/data-sources/research/2026-09-28/neon-max-leverage-round2-2026-09-28.md` + `round2-laneA.md`, `round2-laneB.md`, `round2-laneC.md`
- `docs/engine/research/2026-09-28/vercel-max-leverage-2026-09-28.md` (round 1)
- `docs/engine/research/2026-09-28/vercel-max-leverage-round2-2026-09-28.md` + `r2-gateway-shootout.md`, `r2-caching.md`, `r2-platform.md`
- `docs/engine/research/2026-09-28/consolidation-neon-vercel-vs-paid-services-2026-09-28.md` (4 LLM routers → 1, Sentry, HF PRO, Upstash)
- Repo AGENTS.md sections: NEON BRANCH-ONLY TESTING, NEON COST & LEVERAGE (+ROUND 2), VERCEL COST & LEVERAGE (+ROUND 2)

## Findings (numbers and facts, not vibes)
- **23 crons** sized at 512MB with maxDuration 120–180. [OTHER]
- AI Gateway pilot: free $5 tier to start; **first top-up permanently forfeits the $5/mo free credit**, so do not top up past it without a founder decision. [OTHER]
- Consolidation target: 4 LLM routers → 1; Upstash permanently off the buy list; Sentry resolution; HF PRO resolution. [OTHER]
- Founder taps gating the lane (7 items): Neon API key (gates `neon deploy`, pg_cron, schedule triggers, branch janitor, real plan-tier/burn confirmation); Neon console 5-min (plan tier, burn by line item, project region — Functions need us-east-1/us-east-2/eu-central-1/ap-southeast-1 — Object Storage eligibility); Neon-Managed Vercel integration install (never the Vercel-Managed "Native" flavor); Vercel Spend Management budget + alerts (default $200 too high); AI Gateway pilot decision; SENTRY_DSN in prod and on what tier; DeepSeek data posture decision (only model family without a no-prompt-training agreement). [OTHER]
- Cache policy maps to the public/private fence: public projections/rankings pages get ISR; internal surfaces stay `force-dynamic`. [OTHER]
- Deliverable requires measured before/after where possible, improvements beyond the research, genuine founder-tap needs, and queued-for-evaluation items with reasons; "do not mark anything dead without evidence." [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- All findings are infra/cost-operational: OTHER

## Engine-actionable? (yes/no + one-line what)
yes — This is infra plumbing the engine runs on (connection pooling, cron sizing, cache fence, LLM gateway spend); the engine-actionable reads are: consolidate to one LLM router and treat the Vercel free-$5-credit forfeiture rule as a cost trap to document.
