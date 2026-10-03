# engine/research/2026-09-28/vercel-max-leverage-2026-09-28.md
## What it is (1-2 sentences)
A 2026-09-28 cost/reliability research audit of the GSE Next.js app's Vercel Pro hosting, ranked as a top-10 findings list with an action order — covers billing model, AI Gateway as LLM router, cost levers, underused Pro features, and waste patterns.

## Key metrics/methods (formulas where given, else "not specified")
- Vercel Pro: $20/mo platform fee incl. $20 usage credit (no rollover); function invocations $0.60/1M; Active CPU (Fluid) iad1/cle1/pdx1 $0.128/CPU-hr vs sfo1 $0.177 vs gru1 $0.221; Provisioned Memory iad1 $0.0106/GB-hr vs sfo1 $0.0147; builds $0.0035/CPU-min (~$0.084 for a 2m34s 8-CPU build); edge middleware 1M included then $0.65/1M; image transforms $0.05–$0.0812/1K, cache writes $4.00–$6.40/1M; Web Analytics on Pro $0.03/1K events (no included events); log drains $0.50/GB; Observability Plus $1.20/1M events.
- Region price variance: ~73% spread; moving sfo1→iad1 cuts compute ~28–38%.
- Region-cost rule for GSE: memory bills through I/O waits even while CPU billing pauses — long-running I/O-heavy functions (signals-writer cron, Neon queries) with high memory are the #1 compute waste shape.
- ISR rule: a cached function response runs zero invocations and zero GB/hrs — 1M ISR reads / 200K writes per mo included.
- Spend Management defaults: new teams get a $200/billing-cycle on-demand budget with 50/75/100% alerts; optional auto-pause at 100%.
- AI Gateway: 360+ models via one OpenAI-compatible endpoint, 0% inference markup (provider list price), per-request cost/latency/routing logging, budgets at 4 scopes (team/project/API key/user), ordered provider+model fallbacks, OIDC auth on Vercel, per-request ZDR free; free tier $5/mo credit (third-party verified 2026-09-24), credit forfeited permanently on first top-up.
- Router comparison: OpenRouter charges a 5.5% Stripe deposit fee ($0.80 min) and 5% BYOK after first 1M reqs/mo (third-party); NVIDIA NIM free tier flaky; AI Gateway BYOK $0, per-key budgets native, fallbacks built-in. Catch: default training-data posture assumes providers train on data unless disallow-prompt-training/ZDR set.

## Data sources named
- https://vercel.com/docs/pricing (last_updated 2026-09-14), https://vercel.com/docs/plans/pro-plan (2026-09-15), https://vercel.com/pricing, https://vercel.com/docs/functions/usage-and-pricing (2026-06-16), https://vercel.com/docs/cron-jobs/usage-and-pricing, https://vercel.com/docs/ai-gateway (+ /pricing, /pricing/discounts, budgets, disallow-prompt-training), https://vercel.com/docs/pricing/flat-rate-cdn; third-party: https://github.com/kamil1721/coding-agent/blob/HEAD/docs/research/01-model-billing-and-architecture.md (OpenRouter fee figures); Garrett's own TASK-012 NIM experience.

## Findings (numbers and facts, not vibes)
- Top lever: ISR/static-ify public projections & rankings pages (site shows only projections/rankings publicly — near-ideal ISR content); every cached page view = zero function cost.
- 50+ failed deploys burned real build money; levers: vercel.json `ignoreCommand` for docs-only commits, disable preview builds for agent branches, fix the red build first, then Rolling Releases / instant-rollback runbook (`vercel promote`, `vercel rollback` — rollback uses current env vars, not deploy-time ones, and doesn't reverse DB migrations).
- Cron security hole: cron endpoints are publicly invokable — add CRON_SECRET check (a every-5-min signals writer = ~8,640 invocations/mo; cost is compute per run, not schedule).
- Pro limits: 100 cron jobs/project, 1-minute minimum interval; cron itself free, each execution bills as invocation+compute.
- Waste patterns to audit: API routes serving cacheable content; crons running hot/long; preview deployments piling up per agent-branch push; middleware matcher scope; unoptimized images; Web Analytics events on Pro ($0.03/1K, no included events — check the invoice line); extra $20/mo deploying seats (Viewers free); wrong function region (~38% premium).
- Underused Pro features: Instant Rollback (all plans), Rolling Releases (Pro+), Standard Protection + firewall AI-bot ruleset + BotID basic checks, custom WAF rules with rate-limit, Attack Challenge Mode, Observability Plus $1.20/1M, Cron headroom for odds/injury/calibration jobs, Vercel Sandbox (5 CPU-hrs, 420 GB-hrs, 5K creations, 10 concurrent included) for executing agent-generated backtest code, Vercel Workflows (50K events/mo) as durable replacement for fragile cron chains, MCP server hosting, free first-year domain.
- Suggested order: (1) spend budget $40–60 with alerts; (2) CRON_SECRET on all cron routes; (3) ISR/cache public pages + data APIs; (4) move region to iad1, lowest viable function memory; (5) ignoreCommand + preview review; (6) rollback runbook; (7) Standard Protection + AI-bot firewall in log→enforce; (8) AI Gateway pilot — one budget-capped key, one agent lane, one month vs OpenRouter; (9) Flat Rate CDN / Sandbox / Workflows evaluation.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: infrastructure/cost optimization for the GSE web stack — none of the QB/coaching/OL/trust/scheme lenses apply. Relevant sub-finding: signals-writer cron and pick pipelines are I/O-heavy (Neon queries, API calls) — sizing down function memory is the #1 compute lever.

## Engine-actionable? (yes/no + one-line what)
Yes — route the agent fleet's OpenRouter+NIM spend through a budget-capped Vercel AI Gateway pilot key (0% markup, kills the 5.5% OpenRouter deposit fee, 4-scope budgets), and ISR/cache public projections+rankings pages to cut function invocations.
