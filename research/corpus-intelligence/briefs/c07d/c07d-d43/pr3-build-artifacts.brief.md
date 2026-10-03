# gse/pr3-build-artifacts.md

## What it is (1-2 sentences)
The complete copy-paste-ready PR3 implementation pack (status: PREPARED, NOT APPLIED) for the waitlist durable-storage migration: a Prisma `WaitlistLead` model, the matching migration SQL, and the store-selector wiring — staged as artifacts only because the permission gate correctly blocked editing the canonical `packages/db/prisma/schema.prisma` pending the owner phrase.

## Key metrics/methods (formulas where given, else "not specified")
- Owner authorization phrase (verbatim): **"approve PR3 schema build — local only, no migrate, no push."**
- Gate semantics: `WAITLIST_STORAGE=db` selects the DB store; `WAITLIST_STORAGE=file` reverts to the file store with zero code change; DB path reachable ONLY when the flag is `db`.
- Test contract numbers: suite must stay green at **49/49 + 6/6** (DB-store contract tests on a test DB with `WAITLIST_STORAGE=db`, then again unset for the file path).
- Zero-diff gate: `prisma migrate diff --from-migrations … --to-schema-datamodel … --shadow-database-url $DIRECT_URL` must report "No difference detected".
- Validation bars: `npm run typecheck --workspace=apps/web` → 0, `npm run lint` → 0 after generation + `rm -rf apps/web/.next`.

## Data sources named
- Code: `packages/db/prisma/schema.prisma`, `apps/web/lib/gse/waitlist-store-db.ts` (already contains `createDbWaitlistStore`, tested against a fake delegate), `apps/web/lib/gse/waitlist-store.ts` (selector to edit), `apps/web/app/waitlist` (route calls `selectWaitlistStore()` already).
- Canonical migration name: `waitlist_lead` via `prisma migrate dev --name waitlist_lead`.

## Findings (numbers and facts, not vibes)
- Sacred invariants: (1) Backtest truth stays false — `BACKTEST_TRUTH.beatsNaive === false`; never spun. (2) No-claim stays CI-enforced. (3) File store stays the default; DB path reachable ONLY when `WAITLIST_STORAGE=db`. (4) No autonomous DB apply — migration applied only by the owner against a verified-local DB. (5) No push / deploy / merge to main — owner actions. (6) Reversibility via single env flag.
- Prisma model `WaitlistLead` (field parity vs `WaitlistLeadRow` exact): `id String @id @default(cuid())`; `email String @unique`; `fullName String`; `role String`; `sportInterests String[]`; `currentStack String?`; `weakestProcess String?`; `consent Boolean`; `consentAt DateTime`; `copyVersion String?`; `utmSource String?`; `utmCampaign String?`; `referrer String?`; `sourcePath String?`; `reviewStatus WaitlistReviewStatus @default(QUEUED)`; `createdAt DateTime @default(now())`; `deletedAt DateTime?` (soft-delete); indexes on `reviewStatus` and `createdAt`; `@@map("waitlist_leads")`. Enum `WaitlistReviewStatus`: QUEUED, NEEDS_INTAKE, APPROVED, DECLINED.
- Migration SQL: `CREATE TYPE "WaitlistReviewStatus" AS ENUM ('QUEUED','NEEDS_INTAKE','APPROVED','DECLINED')`; `CREATE TABLE "waitlist_leads"` with TEXT ids, TIMESTAMP(3) datetimes, NOT NULL on id/email/fullName/role/consent/consentAt/reviewStatus/createdAt, TEXT[] sportInterests, primary key id; unique index `waitlist_leads_email_key` on email; indexes on reviewStatus and createdAt.
- Selector wiring: `if (process.env.WAITLIST_STORAGE === "db") return createDbWaitlistStore(db.waitlistLead as unknown as WaitlistLeadDelegate); return createWaitlistStore();` — no call-site change (`route.ts` already calls `selectWaitlistStore()`).
- 10-step dry-run (owner-run, local, verified-DB): branch `claude/gse-pr3-durable-storage`; append model; verify `DATABASE_URL` points to a LOCAL/disposable DB (owner confirms); `npm run db:generate`; apply wiring; `npm run db:migrate`; regenerate + clear `.next`; typecheck 0 + lint 0; suite 49/49 + 6/6 on both stores; migrate-diff → "No difference detected". STOP — no push/deploy/merge.
- Rollback triggers: validation RED at any step → `git checkout -- .`, `git branch -D claude/gse-pr3-durable-storage`, diagnose, retry from step 1; migration SQL ≠ artifact → do not proceed, re-derive the model; `DATABASE_URL` not provably local → ABORT step 6 entirely; runtime flag flip back is instant; down-migration note: flip the flag first, then Prisma down-migration; a Vercel "rollback" won't undo DDL on prod.
- State split: ✅ DB store logic (`waitlist-store-db.ts`) + tests (fake delegate) done; this artifact pack done; 🔒 waiting on the phrase to stage artifacts 1+3 locally; 🔒 owner alone runs migrate against a verified DB, and any push/deploy.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: The waitlist schema captures `consent` + `consentAt` and soft-delete (`deletedAt`) by design, plus a `reviewStatus` review queue (QUEUED → NEEDS_INTAKE → APPROVED/DECLINED) — the trust-target intake program's lead flow is consent-first and founder-reviewed, consistent with the no-claim posture; the `copyVersion` field supports copy auditing.
- OTHER: Ops artifact only — no sports methods. Serves the calibration/trust program as infrastructure (the waitlist is the funnel for the "Founding Decision-Process Lane" audit offering).

## Engine-actionable? (yes/no + one-line what)
No — prepared migration artifacts awaiting the owner's phrase; nothing to wire until the phrase is given, and the artifacts are already complete and self-contained.
