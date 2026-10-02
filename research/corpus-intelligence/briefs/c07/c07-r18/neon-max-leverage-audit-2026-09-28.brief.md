# data-sources/research/2026-09-28/neon-max-leverage-audit-2026-09-28.md
## What it is (1-2 sentences)
Deep-research audit (2026-09-28) of Neon Postgres billing mechanics with 14 cost-leverage findings ranked by expected impact; research only, nothing adopted. Note: Garrett's actual Neon plan tier is UNCONFIRMED — the billing screenshot he pasted was Vercel's (PickPilot's projects = Pro $20/seat/mo), not Neon's.
## Key metrics/methods (formulas where given, else "not specified")
- Billing: Launch $0.106/CU-hr, Scale $0.222/CU-hr; min compute 0.25 CU; 1 CU ≈ 4 GB RAM + CPU + local SSD; all branch computes count.
- Central cost equation: 0.25 CU × ~730 h/mo = 182.5 CU-h/mo → $19.35/mo Launch, $40.50/mo Scale; Free tier = 100 CU-hr/project/mo (then hard suspension until next billing period).
- Storage $0.35/GB-mo (bills even while compute suspended); transfer 500 GB/project/mo included then $0.10/GB (Launch; Free = 5 GB); extra branches beyond 10/project (Launch) = $1.50/branch-month (~$0.002/hr); PITR $0.20/GB-mo WAL (Launch default 1-day window, max 7d; Scale max 30d); snapshots $0.09/GB-mo (manual limits: 100 Launch/Scale, 1 Free; scheduled incremental after first full; billing began May 1, 2026); Object Storage $0.023/GB-mo, no per-op fees; AI Gateway prepaid credits 1 credit = $1, $5 minimum, 12-month expiry, zero markup (Databricks passthrough); Functions $0.10/$0.025 per Cap-Hr + $0.60/M invocations (Launch).
- Scale-to-zero after 5 min inactivity (Launch fixed 5 min or disabled); max_connections = 104 at 0.25 CU; PgBouncer pooler available free via `-pooler` hostname.
## Data sources named
neon.com official docs (plans, scale-to-zero, autoscaling, connection-pooling, history-window, backend-overview, ai-gateway), neon.com/pricing, neondatabase GitHub (pricing-and-plan-features.md); signals table ~84.5k rows cited for storage math.
## Findings (numbers and facts, not vibes)
- Finding 0 (prerequisite): confirm tier in console.neon.tech → Billing; legacy plans auto-migrated Feb 2026.
- Finding 1: signals-writer cron is the #1 cost suspect — any DB traffic resets the 5-min idle timer; a cron firing more often than ~every 6 min pins compute at ~100% duty cycle (~$19/mo Launch at floor); 10-min cron ≈ 60–70% duty; logical replication also pins compute awake. Options: accept ~$19/mo, batch writer (~15 min halves duty), or move to Neon Functions (queued for evaluation).
- Finding 2: every branch gets an awake read-write compute by default — forgotten branches are N × $19/mo leaks; branch allowance 10/project Launch before $1.50/branch-mo fees; `neon.ts` 7-day TTL already landed (needs Neon API key for `neon deploy`).
- Finding 3: cap autoscaling max at 0.5–1 CU (min 0.25) — a 4 CU spike bills 16× for those hours.
- Findings 4–6: turn on spending notifications; confirm PITR window is 1 day not 7 ($0.20/GB-mo WAL); use `-pooler` connection strings everywhere on Vercel (kills "too many connections").
- Findings 7–11 (queued for evaluation): Data API replacing Vercel read routes; AI Gateway vs OpenRouter/NIM (zero markup); Object Storage for backtest artifacts (~$0.23/mo per 10 GB, branch-aware); Neon Auth included (60k MAU free, 1M on Launch/Scale); Lakebase in-DB vector/keyword/hybrid search (kills a future vector-DB bill).
- Finding 12: read replicas are NOT cost savers — each replica is its own billed compute.
- Finding 13: region alignment (Neon us-east-2 ↔ Vercel iad1) is a latency lever, not cost.
- Finding 14: scheduled backups incremental after first full — daily schedule + 1-day PITR = sane cheap DR.
- Deliberately NOT recommended: Scale plan (2.1× compute rate), disabling scale-to-zero, overbuying AI Gateway credits.
- 7-item waste checklist: compute graph flat at 0.25 CU 24/7 = cron pinning; unrecognized branches = leaks; rank Billing Items (expect compute ≫ storage ≫ transfer); PITR window 1 day; delete stale snapshots; spending threshold; pooler vs direct strings.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: infrastructure cost ops — duty-cycle economics of the signals pipeline; branch-compute hygiene under the branch-only testing rule.
- TRUST-SIGNAL: spending notifications as anomaly receipts; verified console reads before config changes.
## Engine-actionable? (yes/no + one-line what)
yes — batch the signals-writer cron to ~15 min, cap autoscale at 1 CU, and enable spending notifications before the branch-only testing rule multiplies branch count.
