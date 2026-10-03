# data-sources/research/2026-09-28/neon-max-leverage-round2/round2-laneB.md
## What it is (1-2 sentences)
Neon Postgres cost/architecture research for the GSE stack: Native Neon Functions schedule triggers (replace Vercel crons), which Vercel-Neon integration to pick, and the managed Data API as a public read surface — with full pricing math from official Neon docs.
## Key metrics/methods (formulas where given, else "not specified")
- Neon Functions pricing (Launch, post-beta): Active compute $0.10/Capacity-Hour; Waiting compute $0.025/CH; Invocations $0.60/M. "There's no charge for Functions during the beta."
- Signals-writer cron move math: 24 runs/day → 720 invocations/mo; 90s mid-point → 18h wall-time/mo; 10% active / 90% waiting → (18h × 10% × $0.10) + (18h × 90% × $0.025) + (720 × $0.60/1M) ≈ $0.59/mo post-beta. Worst case 100% active = $1.80/mo; 4×/hr cadence ≈ $2.34/mo.
- Neon DB baseline cost: ~$19.35/mo per always-on 0.25 CU on Launch at $0.106/CU-hr; 23 Vercel crons pin the compute awake.
- Functions runtime limits: TTFB 15 min; heartbeat 15 min; `waitUntil` 15 min; 100 concurrent-invocation account cap (default); 2048 MiB fixed memory; Node.js 24.
- Branch-per-preview: first 10 branches/project free on Launch; extras $1.50/branch-month prorated hourly; ~30 stale branches ≈ $30/mo worst case.
- Key gotcha: moving one cron to a Neon Function does NOT cut the $19.35/mo DB bill — the function still queries the same branch compute, and 22 other crons pin it awake. DB suspends only when ALL pinning traffic moves.
## Data sources named
Neon official docs: vercel-native-integration, neon-managed-vercel-integration, vercel-overview, compute/functions/get-started.md, compute/functions/reference/runtime-limits.md, blog "your-neon-functions-can-now-run-on-a-schedule", compute/functions/triggers/schedule.md, data-api/overview.md, data-api/get-started.md, data-api/access-control.md, guides/postgrest, introduction/plans, llms.txt. No official latency numbers found (third-party ~0.5–1.5s first-query-after-suspend).
## Findings (numbers and facts, not vibes)
- Neon schedule triggers (five-field UTC cron, `X-Neon-Trigger-Invocation-Id` header) are native and compatible with scale-to-zero (unlike pg_cron) — new as of ~7 days before the report (2026-09-28); FREE during public beta. (OTHER)
- DO NOT install the Vercel-Managed ("Native") integration for an existing DB — it provisions a NEW Neon project/org and can't attach to the existing one; use the Neon-Managed (Connectable Account) integration instead (links existing project, billing stays in Neon). (OTHER)
- Data API = managed PostgREST, enabled per branch per single database, NO separate charge (verified against official plans table); anonymous role + GRANT SELECT + RLS policy on a `published_*` view can serve public projections/rankings reads straight from the browser, deleting Vercel API-route invocations. Incompatible with IP Allow/Private Networking; schema changes need manual cache refresh; JWT required even for anonymous; no rate-limit control found in docs. (OTHER)
- Preview-branch child branches inherit parent triggers but disabled — branching production for testing doesn't double-fire crons. (OTHER)
- The honest architecture split from the report: reads of published data → Data API direct; writes and computed pipelines → Vercel routes or Neon Functions.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
All findings tagged OTHER (infra/cost architecture; no on-field intelligence).
## Engine-actionable? (yes/no + one-line what)
yes — Replace Vercel cron slots for I/O-heavy jobs with native Neon schedule triggers (free during beta, ≈$0.59/mo post-beta) and serve public projections/rankings pages via the managed Data API with RLS to cut Vercel invocations, per the documented honest split (reads direct, writes/compute via Vercel or Neon Functions).
