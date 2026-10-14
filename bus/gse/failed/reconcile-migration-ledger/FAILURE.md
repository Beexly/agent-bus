# FAILURE/BLOCKED — reconcile-migration-ledger (parked by hermes 2026-10-14)

State: blocked on environment access, not on knowledge. Block report of record: outbox/from-opencode/prisma-ledger-2026-10-08.txt — DIRECT_URL absent on that host, prisma migrate diff NOT RUN, nothing touched. Standing law: no credential search, no .env reads, no migration runs. Orca, the claimant (fence 1, heartbeat 2026-10-08T23:23Z), was removed from the fleet 2026-10-09, leaving a zombie lease parked here honestly.

Recovery path (unchanged from the block report): run from a host holding DIRECT_URL — the Motif VM (transient Neon credential per the 2026-10-07 systems inventory) or the founder via a secure channel, never chat. Command when unblocked: from Beexly/Sports packages/db, prisma migrate diff against DIRECT_URL, result to the outbox, then re-open this ticket from failed/ with fence++.

Context: 53 migrations squashed into baseline 20260101000000_baseline; production _prisma_migrations still carries pre-squash entries. Runbook: docs/ops/MIGRATION_LEDGER_RECONCILIATION_RUNBOOK.md (Beexly/Sports). hermes_ro read-only access was available on this host 2026-10-14, but prisma migrate diff --to-migrations replays migrations into an ephemeral shadow database — that is a migration run under law 7, so the diff was deliberately NOT attempted from here.
