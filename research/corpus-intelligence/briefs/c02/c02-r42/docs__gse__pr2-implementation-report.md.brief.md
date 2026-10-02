# docs/gse/pr2-implementation-report.md

## What it is (1-2 sentences)
Implementation report (2026-06-29, superseded 2026-06-30 — merged into main as PR #57, commit 6084550c) for GSE PR2: a local-only, no-claim waitlist page → form → API → local-file store path plus a no-op analytics extension and tests, with no database change, no deploy, and full owner-gate preservation.

## Key metrics/methods (formulas where given, else "not specified")
- Test results: `npx vitest run __tests__/gse-waitlist.test.ts` → 17/17 passed; `npm run typecheck --workspace=apps/web` → exit 0 (after fixing two `noUncheckedIndexedAccess` issues); `npx vitest run __tests__/gse-waitlist.test.ts __tests__/guardrails.test.ts` → 22/22 passed; `npm run lint --workspace=apps/web` → exit 0 (`--max-warnings=0`).
- No-claim verification: every user-facing copy string passes `runNoClaimGuard` with zero `block` flags; passes `hasNoPerformanceClaim` (no numeric win/ROI/accuracy/edge/profit, no "guarantee", no "risk-free"); no pricing/Stripe references (tested); backtest truth surfaced honestly (`BACKTEST_TRUTH.beatsNaive === false`; transparency line contains "10,301" and "does not beat naive").
- Store: local-file fallback — lazy `fs`, dedupe by lowercased email, default path under OS temp dir, override via `GSE_WAITLIST_STORE_PATH`. No DB, no network.
- Formulas/methods: not specified (no modeling).

## Data sources named
- None named (no external data sources; local-file store only).

## Findings (numbers and facts, not vibes)
- 2026-06-30 update: this work is merged into main as PR #57 (commit 6084550c); prod DB is LIVE and `/api/performance` returns real data (397 settled picks). The "GREEN (local-only) / no deploy/push" status line is historical. (OTHER)
- Files created: `apps/web/lib/gse/waitlist-copy.ts` (no-claim copy + honest backtest-truth line); `apps/web/lib/gse/waitlist-validation.ts` (zod schema + `validateWaitlistLead()` + `runNoClaimGuard()` reusing `@/lib/compliance-scanner/rules` via `getRulesForTemplate` — scanner not weakened or forked — plus `hasNoPerformanceClaim()`); `apps/web/lib/gse/waitlist-store.ts` (local-file fallback); `apps/web/components/gsn/waitlist-form.tsx` (client form, consent checkbox, no-op `track()` events; placed under components/gsn/ per real convention); `apps/web/app/waitlist/page.tsx` (server page, robots: noindex, no flag flips); `apps/web/app/api/waitlist/route.ts` (POST: parse → validate → consent gate → local store; runtime=nodejs, dynamic=force-dynamic; no email send, no external call); `apps/web/__tests__/gse-waitlist.test.ts` (17 tests). (OTHER)
- Files edited (additive only): `apps/web/lib/analytics/events.ts` — added waitlist_viewed/started/submitted/consent_blocked, audit_offer_clicked, transparency_read, research_brief_clicked, claim_gate_hit to the typed union; `track()` stays NO-OP (no provider, no PII, no network). (OTHER)
- Schema decision: Prisma `WaitlistLead` model requires a generated migration touching packages/db — gated, not-clearly-safe; schema not edited; durable `WaitlistLead` table remains owner-gated next step. (OTHER)
- Owner gates preserved: no deploy, push, publish, public-flag flips, Stripe/billing, pricing changes, sportsbook/affiliate paths, published picks, external messaging/sends, win-rate/ROI/accuracy/edge/performance claims, schema/auth/payment/prod-config changes, or commit. Confirmation/follow-up emails remain draft-only. (TRUST-SIGNAL)
- Blockers / next safe action: durable persistence (`WaitlistLead` table + migration) owner-gated; real analytics provider owner-gated; page noindex and local; making `/waitlist` publicly reachable is a gated deploy/publish action; next safe step is owner review of copy + the local path. (OTHER)
- Guardrails run green: trust-gate / draft-only / claude-api-usage — new route writes no `publishedAt` and flips no `PUBLISHED`. (TRUST-SIGNAL)
- Repo/branch: C:/Users/Garrett/Sports — `codex/galaxy-dynasty-studio-rescue-v2`; date 2026-06-29; owner approval: local-only PR2. (OTHER)

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: Compliance-by-construction — no-claim copy reuses the platform compliance scanner rather than forking it; backtest truth ("10,301", "does not beat naive") embedded in code and asserted by tests.
- TRUST-SIGNAL: All owner gates preserved (no deploy/push/publish/claims); draft-only emails; guardrails green.
- OTHER: Infrastructure report (waitlist + analytics plumbing); no modeling signal for the engine.

## Engine-actionable? (yes/no + one-line what)
no — waitlist/analytics plumbing with no model signal; the only engine-relevant hook is that `/api/performance` now returns real data (397 settled picks) usable later for calibration audits.
