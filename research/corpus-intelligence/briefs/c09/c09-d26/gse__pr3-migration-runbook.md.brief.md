# gse/pr3-migration-runbook.md
## What it is (1-2 sentences)
The owner-run runbook for the GSE PR3 `WaitlistLead` durable-storage migration: schema addition, local migrate, DB-store implementation behind the `WAITLIST_STORAGE=db` flag, optional one-time local-lead import, validation, and rollback. Status: runbook only, owner-gated; nothing runs autonomously, and it never deploys.
## Key metrics/methods (formulas where given, else "not specified")
not specified (procedural steps only)
## Data sources named
Local Postgres (`DATABASE_URL`/`DIRECT_URL` in `.env.local`), `packages/db/prisma/schema.prisma` (`WaitlistLead` model + `WaitlistReviewStatus` enum), `apps/web/lib/gse/waitlist-store.ts` (`createDbWaitlistStore()` satisfying the `WaitlistStore` contract; unique-email → `{ stored:false, duplicate:true }`), `.gse-local/waitlist-leads.json` (one-time import source), `prisma migrate diff` (expects "No difference detected"), `apps/web/__tests__/gse-waitlist.test.ts` + `guardrails.test.ts`.
## Findings (numbers and facts, not vibes)
- Rollback is instant: `WAITLIST_STORAGE=file` reverts to the file store with no call-site change; down-migration drops the table after the flag flip; a Vercel alias "rollback" does NOT undo a migration — real rollback = flag-flip + down-migration, then re-alias.
- Store contract: `record()` inserts with unique-email dedupe; `list()` returns non-deleted rows; both stores must pass the same contract tests (`WAITLIST_STORAGE` unset and `=db`).
- Ops note: a stale Prisma client or `.next` cache causes false typecheck reds — run `db:generate` and wipe `apps/web/.next` first.
- Post-runbook gates remain: deploy/push/promote production (Level 3), analytics provider, email send — all separate owner approvals.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
OTHER: waitlist DB migration procedure; no sports intelligence.
## Engine-actionable? (yes/no + one-line what)
No — marketing-infra runbook, no model-relevant content.
