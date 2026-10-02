# docs/ops/MIGRATION_LEDGER_RECONCILIATION_RUNBOOK.md
## What it is (1-2 sentences)
A one-time, ~20-minute, owner-action runbook for fixing a Prisma migration-ledger divergence (repo schema vs `_prisma_migrations` rows) that was fail-closed-blocking every production build, plus repairing a dead `DIRECT_URL`.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — procedural runbook, no formulas.
## Data sources named
Production Neon Postgres via `DATABASE_URL` (pooled) and `DIRECT_URL` (direct, non-pooler); build log verbatim from Vercel deployment `dpl_BRQLGNqjpCFsxwprUjyaqD3N4hAX` (2026-07-10).
## Findings (numbers and facts, not vibes)
- `prisma migrate deploy` had not actually applied anything since at least 2026-06-22; four migrations were "unapplied" per the ledger while their objects demonstrably existed in production (schema evolved out-of-band via `prisma db push` while the ledger was never updated). [OTHER]
- The DB ledger also held four rows for migration files deleted in a June squash (pre-squash local history remnants). [OTHER]
- Four unapplied migrations: `20260622120000_add_fantasy_subscription_tier`, `20260622173000_add_pick_proof_receipt`, `20260622180000_add_slate_commitment`, `20260708000000_add_hot_path_indexes`. [OTHER]
- Fix sequence: (1) replace stale `DIRECT_URL` (old gate's "transient → proceed" policy masked the failure; direct endpoint unreachable, pooled worked); (2) reconcile ledger — Prisma `migrate diff` as authoritative check, manual object application where partial, `CREATE INDEX CONCURRENTLY` (not in a transaction) on hot tables (`odds`, `ingestion_runs`, `picks`), back up ledger rows, `migrate resolve --applied` for the four repo migrations, delete the four orphaned rows, verify `migrate status` prints "Database schema is up to date!". [OTHER]
- Break-glass `MIGRATE_GATE_ALLOW_UNVERIFIED=true` skips `migrate deploy` entirely for one build — explicit, logged, removed immediately after; the silent version of it caused the 2026-07-10 `/api/picks` outage. [TRUST-SIGNAL]
- After reconciliation: re-land the reverted CLV/Pedersen columns (`bookDisagreementAtLock`, `pedersenAggregate{Hex,Value,BlindingSum}`) from #69/#70 history — pure helpers `book-dispersion.ts` and `mintSlatePedersenAggregate` already merged and tested, waiting on migration capability. All future schema changes go through `prisma migrate` only; `db push` on production is forbidden. [OTHER]
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
Almost entirely OTHER (DevOps plumbing). The CLV columns re-land note is TRUST-SIGNAL-adjacent (CLV lock-price provenance feeds pick-proof claims), but no intelligence content in this file.
## Engine-actionable? (yes/no + one-line what)
No — database ops only; the CLV-column re-land is a reminder of an unmerged capability but the runbook itself adds nothing to engine methods.
