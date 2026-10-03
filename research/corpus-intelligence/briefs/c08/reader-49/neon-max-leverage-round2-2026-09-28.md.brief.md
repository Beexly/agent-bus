# docs/data-sources/research/2026-09-28/neon-max-leverage-round2-2026-09-28.md
## What it is (1-2 sentences)
A 2026-09-28 research note ranking 14 non-obvious Neon Postgres platform wins (pooling, pg_cron, pgvector, Neon Functions, Data API, Auth, Object Storage, autoscale caps) by value × feasibility for the GSE stack, with pricing math and founder taps.
## Key metrics/methods (formulas where given, else "not specified")
- Compute duty-cycle rule: 0.25 CU always-on on Launch ≈ $19.35/mo at $0.106/CU-hr; 16 CU runaway weekend = $81.41 vs $5.09 (1 CU cap) vs $2.54 (0.5 CU cap); 4 CU × 3h backfill = $1.27.
- Pooling: 10,000 pooled connections vs 104 direct at 0.25 CU; migration = pooled DATABASE_URL + `?pgbouncer=true`, directUrl for CLI/migrations.
- Signals-writer job on scheduled Neon Functions (24×/day × ~90s, 10% active/90% waiting) models at ≈ $0.59/mo post-beta ($1.80/mo worst case; ~$2.34/mo at 4×/hr).
- Branch-per-preview cost: first 10 branches free on Launch, extras $1.50/branch-mo prorated hourly; idle preview branches scale to zero independently.
## Data sources named
neon.com/docs (extensions list, pg_cron, pgvector, connection pooling, Neon-managed Vercel integration, Neon Functions scheduling announcement, Data API overview, logical replication guide, Auth overview); Neon official plans table; third-party mirrors (for AI Gateway beta-free claim, unconfirmed).
## Findings (numbers and facts, not vibes)
- pg_cron IS available (3-step enable: `cron.database_name` via API + compute restart + `CREATE EXTENSION`); marginal cost ≈ $0 since 23 Vercel crons already pin compute awake.
- pgvector v0.8.x on every plan, HNSW ≤ 2,000 dims (bge-m3's 1,024 fits) — no add-on.
- TimescaleDB + pg_partman both listed as available (contradicts stale comparison tables); pg_stat_statements one CREATE EXTENSION away; pg_net/pg_http NOT available.
- Neon Functions: native schedule triggers (5-field UTC cron), FREE during public beta, $0.10/active + $0.025/waiting Capacity-Hour + $0.60/M invocations post-beta; requires project in us-east-1/us-east-2/eu-central-1/ap-southeast-1 (region unconfirmed).
- Do NOT run 24/7 logical replication for analytics: subscriber pins compute awake ($19.35/mo at 0.25 CU, $77.40/mo at 1 CU); use throwaway analytics branches or scheduled exports.
- Neon Auth: 1M MAU included on Launch/Scale (60k free); users live in own `neon_auth` schema.
- Open gaps: Neon plan tier UNCONFIRMED; Neon API key still owed; project region unconfirmed; AI Gateway "free during beta" unverified.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Pooled connection cutover (OTHER — infra cost avoidance, prevents forced compute upsizing ~$20–40/mo)
- pg_cron for pure-SQL maintenance jobs (OTHER — removes Vercel timeout failure mode)
- pgvector in system of record (OTHER — embeddings JOINable with predictions, avoids $0–70+/mo vector tier)
- Data API + RLS as the public/private doctrine as infrastructure (OTHER — public reads served from `anonymous` role + RLS `is_published = true`)
## Engine-actionable? (yes/no + one-line what)
Yes — cutover to pooled DATABASE_URL with `?pgbouncer=true` + directUrl for migrations is a zero-founder-tap config change that prevents connection-exhaustion outages and a forced compute upsizing.
