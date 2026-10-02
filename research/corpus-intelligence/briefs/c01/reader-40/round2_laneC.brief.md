# data-sources/research/2026-09-28/neon-max-leverage-round2/round2-laneC.md
## What it is (1-2 sentences)
Round-2 infrastructure research (2026-09-28, from neon.com/docs) on Neon Postgres cost leverage: logical replication traps, Neon Auth, Object Storage, autoscaling mechanics, and free/Launch allowances — research-only, no repo state touched.

## Key metrics/methods (formulas where given, else "not specified")
- Launch pricing: $0.106/CU-hr; Scale $0.222/CU-hr. Always-on 0.25 CU = 182.5 CU-hrs/mo = **$19.35/mo**. 0.25/0.5 CU shared; 1 CU ≈ 4 GB RAM; min 0.25 CU; autoscale max range 8 CU (max−min ≤ 8); Launch ceiling 16 CU; Scale 16 CU autoscale / fixed 56 CU.
- Worst-case table: calibration backfill at 4 CU × 3h = 12 CU-hrs = $1.27; runaway agent loop at 16 CU × 48h = 768 CU-hrs = **$81.41**; capped 1 CU = $5.09; capped 0.5 CU = $2.54; always-on 0.25 CU = $19.35.
- Scale-to-zero: 300s (5 min) inactivity on Launch.
- Logical replication cost trap: subscriber pins compute awake 24/7 → minimum $19.35/mo; replication traffic counts against transfer (Launch 500 GB/mo, then $0.10/GB); max_wal_senders = 10, max_replication_slots = 10; inactive slots auto-removed after ~40h.
- Object Storage: $0.023/GB-mo, zero per-op fees; 5 GiB max object; Vercel Image Optimization ~$0.05/1K transforms — 50K transforms/mo ≈ $2.50/mo vs 50 GB library at $1.15/mo.
- Functions: active $0.10/CH + waiting $0.025/CH + $0.60/M invocations; Launch has NO free allowance (Free-plan-only: 10 active / 400 waiting CH + 1M invocations).
- Launch allowances: public transfer 500 GB/mo; 100 manual snapshots (storage $0.09/GB-mo); Neon Auth 1M MAU (Free: 60k); Data API included; history window up to 7d ($0.20/GB-mo); 10 copy-on-write branches/project, extra $1.50/branch-month (~$0.002/hr).

## Data sources named
Neon docs only (neon.com/docs logical-replication pages, auth/overview.md, auth/roadmap.md, introduction/plans.md, object-storage agent skills). Open gaps: plan tier unconfirmed (console check owed), object-storage eligibility for his project, autoscaling trigger thresholds unconfirmed (deep-dive page rate-limited).

## Findings (numbers and facts, not vibes)
- Ranked findings: (1) skip 24/7 logical replication for analytics — branch-based analytics or scheduled COPY exports cost ~$0 instead of up to $19.35/mo; (2) Neon Auth (Managed Better Auth 1.4.18) includes 1M MAU on Launch/Scale, replacing $25–240+/mo Clerk/Auth0 spend if ever needed (MFA coming soon, not today; users in his own `neon_auth` schema, branch-aware); (3) Neon AI Gateway: single credential, provider list prices, zero markup — replaces flaky OpenRouter routing and its 5.5% deposit fee ("free during beta" unconfirmed, from third-party mirror); (4) Object Storage + Neon Function with `sharp` as image pipeline (resize-once-on-write; no on-the-fly resizing); (5) Data API (PostgREST-compatible, RLS-enforced) relieves pooler pressure from 23 crons hitting Neon ~every 2 min; (6) move crons to scheduled Neon Functions so prod suspends; (7) 100 manual snapshots as pre-backfill safety net.
- Recommendation: 0.5–1 CU default autoscale cap turns a runaway weekend from $81 into $2.50–5; spending notifications at ~$25/mo threshold.
- Correction to task assumptions: Functions free tier and 5 GB Object Storage free allowance are Free-plan-only, NOT Launch allowances.
- Logical replication caveats: enabling flips wal_level replica→logical project-wide and restarts all computes (maintenance window); replication role needs `neon_superuser` membership (raw-SQL roles never get REPLICATION); subscriber MUST use a direct connection string, not `-pooler`; if real-time CDC needed, replicate from a read replica/branch, never prod primary.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (OTHER) — Pure infrastructure/cost research; no sports intelligence. (INFERENCE: branch-based analytics recommendation aligns with the standing doctrine of branch-only DB testing.)

## Engine-actionable? (yes/no + one-line what)
Yes — one-line: run calibration backtests on throwaway branches (kill on finish) with a 0.5–1 CU autoscale cap and ~$25/mo spend alert; never run 24/7 logical replication against prod.
