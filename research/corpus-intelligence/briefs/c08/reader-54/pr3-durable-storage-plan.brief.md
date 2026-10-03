# docs/gse/pr3-durable-storage-plan.md
## What it is (1-2 sentences)
Owner-gated blueprint for migrating the GSE waitlist from a local-file fallback (`.gse-local/waitlist-leads.json`) to a Prisma `WaitlistLead` Postgres model. The DB store logic is already implemented and unit-tested; only the schema change, migration, and final wiring remain blocked behind owner approval.

## Key metrics/methods (formulas where given, else "not specified")
not specified — schema-level plan. Rollback is flag-based: `WAITLIST_STORAGE=file` reverts to the local-file store instantly; schema rollback via down-migration.

## Data sources named
- `apps/web/lib/gse/waitlist-store.ts` (file store, shipped in PR2)
- `apps/web/lib/gse/waitlist-store-db.ts` (DB store logic, implemented + unit-tested)
- `gse-waitlist.test.ts` (contract tests against both stores via in-memory fake)
- `.gse-local/waitlist-leads.json` (current fallback source of truth, gitignored; review via `node scripts/gse-waitlist-list.mjs`)
- `apps/web/app/api/waitlist/route.ts` (already calls `selectWaitlistStore()`)

## Findings (numbers and facts, not vibes)
- Proposed `WaitlistLead` Prisma model: `id` (cuid), `email` (`@unique`, lowercased at write), `fullName`, `role`, `sportInterests` (Postgres text[]), `currentStack?`, `weakestProcess?`, `consent` (Boolean, always true at write), `consentAt`, `copyVersion?`, `utmSource?`, `utmCampaign?`, `referrer?`, `sourcePath?` (renamed from `path`), `reviewStatus` (enum `QUEUED | NEEDS_INTAKE | APPROVED | DECLINED`, default QUEUED), `createdAt`, `deletedAt` (soft delete); indexes on `reviewStatus`, `createdAt`.
- Role values: `operator | analyst | founder | bettor`.
- Field parity with `StoredWaitlistLead` explicitly verified: email, fullName, role, sportInterests, currentStack, weakestProcess, consent, createdAt, utmSource, utmCampaign, referrer, path→sourcePath, copyVersion, reviewStatus — all preserved.
- DB store logic (dedup, P2002 unique-race path, file/DB parity) is already implemented + unit-tested with an in-memory fake — no DB, no schema change needed for that part.
- Migration mapping from the JSON fallback: `path`→`sourcePath`, `createdAt` string→DateTime, `consentAt` derived from `createdAt` if not separately captured; dedup key = lowercased email.
- Owner-run migration sequence: approve schema → `npm run db:generate` → local `db:migrate` against local Postgres → commit migration + model together (migration leads code) → deploy stays a separate owner gate.
- Owner gates all still BLOCKED: approve schema model + migration; run any migration against a non-local database; deploy.
- Test plan (5 items): contract parity both stores; consent gate rejects `consent=false`; unique-email surfaces as safe `duplicate: true` not 500; soft delete excluded from `list()`; `prisma migrate diff` empty after generate.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: `consentAt` timestamp provenance, soft delete for erasure, email hashed (not raw) in analytics — privacy/trust mechanics.
- OTHER: marketing/lead-capture infra (waitlist funnel pipeline).

## Engine-actionable? (yes/no + one-line what)
No — marketing lead-capture infrastructure, no engine signal; waitlist role/sport-interest fields are funnel data, not model features.
