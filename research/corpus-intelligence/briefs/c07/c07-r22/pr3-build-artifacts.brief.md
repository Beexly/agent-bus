# gse/pr3-build-artifacts.md
## What it is (1-2 sentences)
Copy-paste-ready build pack for the PR3 waitlist durable-storage migration (file store → Postgres `WaitlistLead` table): Prisma model, reference migration SQL, delegate wiring, a 10-step owner-run dry-run, rollback triggers — PREPARED but NOT APPLIED, awaiting the explicit owner phrase.
## Key metrics/methods (formulas where given, else "not specified")
Schema: `WaitlistLead` with fields id (cuid), email (unique), fullName, role, sportInterests String[], currentStack, weakestProcess, consent Boolean, consentAt, copyVersion, utm* fields, referrer, sourcePath, reviewStatus enum (QUEUED / NEEDS_INTAKE / APPROVED / DECLINED, default QUEUED), createdAt, deletedAt (soft delete); indexes on reviewStatus + createdAt; `@@map("waitlist_leads")`. Storage selector: `WAITLIST_STORAGE=db` → DB delegate via `db.waitlistLead`; default `WAITLIST_STORAGE=file` reverts with zero code change. Sacred invariants: BACKTEST_TRUTH.beatsNaive stays false; no autonomous DB apply; reversibility via one env flag. Otherwise not specified.
## Data sources named
Existing file-store lead table; Postgres via Prisma; `DATABASE_URL` must be verified-local before any migrate.
## Findings (numbers and facts, not vibes)
- The DB store logic (`waitlist-store-db.ts`) + fake-delegate tests already exist and pass (49/49 + 6/6 green); only schema + selector wiring await the owner phrase "approve PR3 schema build — local only, no migrate, no push."
- The canonical `schema.prisma` is owner-only; the permission gate blocked the agent from editing it — the artifact pack exists instead.
- Rollback triggers: validation RED → revert tree + drop branch; unexpected migration SQL → stop; DATABASE_URL not provably local → ABORT migrate.
- Consent timestamp + soft delete (`deletedAt`) + UTM/referrer/sourcePath/copyVersion audit fields are spec'd on every lead.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] Sacred invariants (backtest truth false, no-claim CI, no autonomous DB apply) mirror the no-fabrication compliance posture.
- [OTHER] Waitlist is the founding-customer intake funnel; consent-timestamped, soft-delete lead schema.
## Engine-actionable? (yes/no + one-line what)
No — infra/ops artifact for the waitlist lane; no engine mechanics.
