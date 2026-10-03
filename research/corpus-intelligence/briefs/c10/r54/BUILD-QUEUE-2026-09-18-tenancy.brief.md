# docs/ops/hermes/BUILD-QUEUE-2026-09-18-tenancy.md
## What it is (1-2 sentences)
A six-task build queue from the 2026-09-18 architect session laying the multi-tenancy foundation for GSE: central enforcement design (Postgres RLS + Prisma client extension at the single `db` export, both fail-closed), with every schema change authored as proposal SQL under `docs/ops/proposals/` for the founder to apply — agents may not touch schema, databases, or enable enforcement.
## Key metrics/methods (formulas where given, else "not specified")
- Measured fact: schema.prisma has 102 models, zero `Tenant`/`Organization`/`Workspace`, zero occurrences of `tenantId`/`organizationId`/`workspaceId` — GSE is single-tenant.
- One chokepoint: `export const db` at `packages/db/src/index.ts:250`, imported by 240 files (221 outside tests); enforcement centralized there rather than manual per-query predicates (ever-gauzy reference does 196 files manually and fails open).
- Tenant scoping: RLS policy reading `current_setting('app.current_tenant', true)` (NULL on missing → DENY, fail closed); Prisma extension issues `SELECT set_config('app.current_tenant', $1, true)` transaction-local only — session-level SET forbidden due to connection-pool leakage; `SET LOCAL` cannot take a bind parameter (grammar) and interpolating the tenant reintroduces injection.
- 33 non-test `$transaction` call sites measured today.
- Six tasks: (1) pure tenancy library in `@sports/types` (`TenantId` branded type, `SYSTEM_TENANT_ID`, `TenantContext`, `requireTenant` throws on absent, `TenantScope` single/scoped union); (2) Prisma client extension built but unattached, no-op under scope `single`; (3) phase-one proposal SQL (tenants table, nullable `tenant_id` + index + FK on tenant-scoped tables, backfill to SYSTEM_TENANT_ID, no RLS); (4) phase-two proposal SQL (RLS policies, deny-on-NULL, FORCE RLS owner-bypass analysis, rollback); (5) enumerating tenant-scoping guard test (fails loudly pre-phase-one, committed skipped with named unskip); (6) cutover runbook `docs/ops/TENANCY_CUTOVER.md`.
## Data sources named
ever-co/ever-gauzy (reference implementation); schema.prisma (102 models); partner-stack (`assessPartner`, `grantCredits`, `allowedRevenueStreams`, zero importers — scaffolded).
## Findings (numbers and facts, not vibes)
- Retrofitting a tenant key is cheapest now: every existing row belongs to one tenant by definition, so the backfill is a constant; after white-label revenue exists it is surgery under load.
- The one-line safety test: if merged and deployed tonight with no founder action, nothing behaves differently — required NO for all six tasks.
- Task 3 must classify each of the 102 models as tenant-scoped / global reference / ambiguous, with ambiguous emitted as a separate section for founder ruling — never resolved by the agent.
- Enabling RLS with the application role as table owner and no FORCE yields policies that appear active and enforce nothing — stated explicitly as a hazard.
- If the founder rules white-label/partner revenue is not a path, phase one should not be applied — stated honestly in the runbook.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Fail-closed enforcement design (RLS deny-on-NULL, requireTenant throws rather than defaults) — TRUST-SIGNAL
- Backfill-at-zero-customers cost curve (do schema work before revenue exists) — OTHER (ops strategy)
## Engine-actionable? (yes/no + one-line what)
No — infrastructure/tenancy ops queue with founder-gated execution; no engine signal, model, or calibration content.
