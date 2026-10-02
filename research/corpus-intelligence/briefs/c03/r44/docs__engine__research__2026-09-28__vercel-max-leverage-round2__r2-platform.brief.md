# docs/engine/research/2026-09-28/vercel-max-leverage-round2/r2-platform.md
## What it is (1-2 sentences)
Deep research (2026-09-28) on Vercel Pro platform features for Garrett's sports app: Workflows vs cron chains, Sandbox for fleet backtest execution, log drains/observability, firewall/bot rules for a scraped picks site, preview-deploy cost controls, Fluid concurrency sizing, edge-middleware matcher audit, and Pro allowance inventory. All claims cite URLs; unreachable docs are labeled as such and nothing unverified is marked "dead."
## Key metrics/methods (formulas where given, else "not specified")
- Workflow events: Pro $0.02 per 1K events (Hobby 50K included/mo); 1 normal step = 3 events (step_created, step_started, step_completed); 4-step pipeline ≈ 12–16 events/run.
- Cost math for signals chain (write → slate → settle → alerts) at 96 runs/day ≈ 2,880 runs/mo × ~14 events ≈ 40,300 events/mo → ~$0.81/mo. Verdict: cost-neutral vs crons; win is reliability.
- Per-run limits: 25,000 events, 10,000 steps, 50 MB payload, 2 GB total state, no run-duration cap, no sleep cap, 240 s max replay duration; Pro 500,000 requests/min; concurrency 100,000.
- Sandbox (Pro, iad1): Active CPU $0.128/hr; memory $0.0212/GB-hr (1-min increments); creations $0.60/1M; 10,000 concurrent; 24 h max session; 8 vCPU / 16 GB / 64 GB NVMe; downloads free, uploads to exposed ports billable but included in flat-rate CDN on Pro. Correction: the 5 CPU-hr / 420 GB-hr / 5,000 creations / 10 concurrent figures are HOBBY quotas — Pro has NO included allowance, all on-demand against the $20/mo credit.
- Backtest math: 100 backtests/mo × $0.11 (30-min, 4 vCPU) ≈ $11/mo — fits inside the $20 Pro credit.
- Fluid cron sizing: memory 512 MB (default 1024 MB), maxDuration 120 s; per-run ≈ $0.00025 (1 GB) / $0.00016 (512 MB) for a 60 s I/O-heavy run (memory ~70% of cost because CPU pauses during I/O waits but memory bills through them); hottest 15-min cron ≈ $0.72/mo → $0.46/mo; hung 800 s × 4 GB run ≈ $0.05 each.
- Preview builds: ~4 min avg Next.js build; 50 failed deploys ≈ 200 build minutes wasted; Pro includes ~6,000 build min/mo; measured reference case burned $269.04 in Build CPU Minutes in 30 days at ~41 prod deploys/day.
- Observability Plus: $1.20/1M events, no base fee; 30-day retention; enabled by default for teams created/upgraded to Pro on/after 2026-04-03; log drains $0.50/GB; free runtime logs on Pro = 1-day retention.
- Edge middleware: 1M invocations/mo included, then $0.65/1M; fair-use cap averages 50 ms CPU per invocation.
- Pro allowances inventory: 100 crons/project (using 23); Web Analytics 100K events/mo (~$3 value); Speed Insights 10K points; Fast Data Transfer 1 TB/mo (~$150 value); 6,000 build min/mo; 12 concurrent builds; image optimization 5K/mo.
## Data sources named
- Official Vercel docs (workflows pricing, sandbox pricing, observability, firewall managed rulesets, rate limiting, functions usage & pricing — docs dated 2026-06-16 through 2026-09-16).
- Third-party compiled mirrors/GitHub skills repos (baseball-savant-web data-reliability note, vercel-plugin SKILL.md, frugal/vercel.md, ifc-lite vercel cost README — a measured 3-project setup).
- Vercel staff quotes (community forum: middleware $0.65/1M bucket billing; function invocations bucket-billed from $0).
## Findings (numbers and facts, not vibes)
- Cron delivery is best-effort: occasional misses and duplicates, no serialization (needs own distributed lock), UTC-only, instant rollback does NOT update active crons; crons have NO retries — a failed tick is gone.
- Round-2 ranking by value × feasibility: (1) preview deploy controls [ignoreCommand docs-only + disable previews on agent branches + auto-cancel], (2) firewall bot rules [AI Bots Log→Deny, Bot Protection Challenge, /api/* 100 req/60 s/IP → 429, scraper-UA challenge], (3) Fluid sizing 512 MB / maxDuration 120–180 on all 23 crons, (4) signals chain → 1 workflow, (5) observability posture $0–3/mo, (6) Sandbox for fleet backtests, (7) middleware matcher audit, (8) unused allowances sweep (~$10/mo included value).
- Conflicts flagged not resolved: Pro Active CPU/Memory "included" figures (official docs say on-demand; third parties claim 4/16 hrs, 360/1440 GB-hrs); Observability Plus "1M included" (old mirror vs current usage-only pricing page); function invocations "1M included" (older) vs bucket-billing from $0 (Vercel staff).
- Queued for evaluation (not dismissed): 1M tracing-spans beta, free first-year domain, branch-pattern support in git.deploymentEnabled, Sandbox cold-start measurement, AI Gateway as fleet model router.
- Bytecode caching applies to production only — don't benchmark cold starts on previews.
- 40 rate-limit rules/project on Pro; rate-limit counters are per-region; Token Bucket strategy is Enterprise-only (Fixed Window on Pro).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Workflow migration for the signals chain (retries, no missed/duplicated ticks) → OTHER (infra reliability).
- Sandbox as isolated executor for fleet-written backtest/calibration code (Firecracker microVMs, 10K concurrency, read-only Neon role) → OTHER (engine execution lab).
- Firewall bot ruleset protecting the picks site's bandwidth/compute budget → OTHER (cost protection).
- Preview controls + auto-cancel redundant builds → OTHER (fleet cost discipline).
- Fluid sizing math (memory dominates I/O-bound cron cost) → OTHER.
- Observability posture $0–3/mo with 30-day retention on prod project only → OTHER.
## Engine-actionable? (yes/no + one-line what)
Yes — migrate the signals pipeline (write→slate→settle→alerts) to one 15-min scheduled Vercel Workflow for retry/no-missed-tick durability, and set memory:512 / maxDuration:120 on all 23 crons.
