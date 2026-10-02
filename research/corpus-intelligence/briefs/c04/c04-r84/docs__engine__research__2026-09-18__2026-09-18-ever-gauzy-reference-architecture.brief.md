# docs/engine/research/2026-09-18/2026-09-18-ever-gauzy-reference-architecture.md
## What it is (1-2 sentences)
Reference-architecture study of the ever-gauzy open-source ERP, scoped to two questions at Garrett's request: monorepo structure and multi-tenancy. Finds GSE already owns the contracts pattern (via @sports/types), argues against copying gauzy's manual tenant-scoping, and recommends building a fail-closed tenancy foundation now while the backfill is trivial.

## Key metrics/methods (formulas where given, else "not specified")
- Gauzy: 36 packages (apps/*, packages/*, packages/plugins/*, tools) vs GSE 25; 136 entities inherit tenant+org base; 196 files call RequestContext.currentTenantId(), 42 hand-write tenantId into where clauses.
- GSE: single DB client `export const db` (packages/db/src/index.ts:250), imported by 240 files (221 non-test); 102 prisma models; 33 non-test $transaction call sites.
- Design: Postgres row-level security + Prisma client extension at the single db export, both fail-closed. Tenant assignment transaction-local via `SELECT set_config('app.current_tenant', $1, true)` — SET LOCAL cannot take a bind parameter (INFERENCE: author's claim about Postgres SET grammar).
- Method for boundary enforcement: an enumerating test that packages/* never imports apps/web (queued as mainline queue wave 4, task 14), not an Nx migration.

## Data sources named
- ever-co/ever-gauzy public repo (shallow clone, verified in-tree: tenant-base.entity.ts, request-context.ts:189)
- GSE repo: packages/db/prisma/schema.prisma, packages/db/src/index.ts, packages/partner-stack (assessPartner, grantCredits, allowedRevenueStreams)
- Queued follow-up: docs/ops/hermes/BUILD-QUEUE-2026-09-18-tenancy.md (6 tasks)

## Findings (numbers and facts, not vibes)
- Gauzy's isolation is NOT automatic: no query guard, no RLS, no ORM middleware — a forgotten tenantId is a cross-tenant read, by hand in 196 files.
- GSE verified single-tenant today: zero occurrences of tenantId/organizationId/workspaceId; only "Account" model (NextAuth OAuth) matches.
- The cheap machine-checked dependency graph is missing (npm workspaces has no orchestrator); convention-only boundary is a real gap.
- Retrofitting cost asymmetry: today every row belongs to one tenant by definition (backfill constant, migrations reversible); after white-label revenue it is surgery under load.
- Pooled-connection hazard: a session-level SET app.current_tenant leaks across reused Neon Pool connections, so every assignment must be transaction-local.
- Founder decision narrowed to: which tables are tenant-scoped (ambiguous set escalated, not resolved).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: infrastructure reference architecture for multi-tenancy readiness; tenant-scoping classification is a data-model product decision with compliance implications (a wrong call leaks data in one direction, over-scopes global reference data in the other).

## Engine-actionable? (yes/no + one-line what)
yes — Tenancy build queue exists (tenancy library, tested-but-detached client extension, two SQL proposals, skipped enumerating guard, cutover runbook); apply when founder answers which tables are tenant-scoped.
