# data-sources/research/2026-09-28/neon-max-leverage-round2/round2-laneA.md
## What it is (1-2 sentences)
2026-09-28 research-only audit of Neon Postgres extensions and connection pooling for the GSE stack (Prisma + Vercel serverless), ranking 7 findings by value × feasibility.
## Key metrics/methods (formulas where given, else "not specified")
- Pooled endpoint: 10,000 client conns vs 104 direct at 0.25 CU (default_pool_size ≈ 93); PgBouncer transaction mode, max_prepared_statements=1000, query_wait_timeout=120.
- pg_cron duty-cycle math: job every 5 min ⇒ 0.25 CU × 24h × 30d = 180 CU-hrs × $0.106 = ~$19.35/mo; hourly job ≈ 8% duty ≈ ~$1.60/mo; with 23 Vercel crons already keeping compute warm, marginal pg_cron cost ≈ $0.
- pgvector: HNSW + IVFFlat; HNSW limits: vector ≤ 2,000 dims, halfvec ≤ 4,000 dims; bge-m3 (1,024 dims) and Qwen3 embeddings fit with headroom.
- Migration checklist: DATABASE_URL = pooled string + ?pgbouncer=true (+ &connection_limit=1); DIRECT_URL = direct string for Prisma migrate/push/pull/pg_dump.
## Data sources named
neon.com/docs (extensions explorer, connection-pooling guide, Prisma guide), Prisma docs. One Mar-2026 Medium comparison table explicitly flagged as STALE (claimed pg_cron/Timescale/pg_partman unavailable — contradicted by Neon's own explorer).
## Findings (numbers and facts, not vibes)
- pg_cron IS available on Neon (full docs page) — enables transactional zero-hop SQL maintenance jobs; marginal cost ≈ $0 given existing Vercel cron warmth.
- pgvector on every Neon plan, no add-on (v0.8.x) — separate vector DB unnecessary for bge-m3/Qwen3 embeddings lane.
- TimescaleDB AND pg_partman BOTH listed in Neon's extension explorer (contradicts stale Medium table) — continuous aggregates could replace hand-rolled rollup crons.
- pg_net / pg_http NOT available — no async HTTP from inside SQL; pg_cron→webhook designs are a dead end.
- PostGIS family, pg_trgm, uuid-ossp, pg_stat_statements, dblink/postgres_fdw available; lakebase_vector, pg_mooncake, pg_tiktoken are future-eval candidates.
- Pooled connections do NOT support: SET/RESET, LISTEN/NOTIFY, WITH HOLD cursors, SQL-level PREPARE/DEALLOCATE, session advisory locks; migrations/introspection hang on pooler.
- Candidate pg_cron jobs named: prune-rate-limits, calibration-metrics rollup, reconcile-entitlements; game_signals table at 5,142 rows and growing (TimescaleDB fit).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: infrastructure research — Neon Postgres extensions/pooling, cost engineering, database architecture for the prediction stack. No direct player/coach/scheme content.
## Engine-actionable? (yes + what)
Yes — cutover Prisma runtime to the pooled endpoint (config-only, no founder tap); CREATE EXTENSION pg_stat_statements for free query telemetry; trial pg_cron for prune/rollup jobs on a throwaway branch; pgvector pilot on a branch before any Pinecone/Weaviate spend.
