# docs/gse/release-gate-plan.md

## What it is (1-2 sentences)
PLAN ONLY, no deploy: the release gate that must pass before `/waitlist` could ever be made public — a pre-release automated gate (typecheck, lint, tests, guardrails, no-claim scan, backtest-truth scan, build), waitlist smoke tests, the public deploy gate, a rollback plan, owner approvals, and the exact next safe action.

## Key metrics/methods (formulas where given, else "not specified")
- Automated gate pass conditions: typecheck `npm run typecheck --workspace=apps/web` exit 0; lint `npm run lint --workspace=apps/web` exit 0 with `--max-warnings=0`; targeted tests `npx vitest run apps/web/__tests__/gse-waitlist.test.ts apps/web/__tests__/guardrails.test.ts` all pass; guardrails (trust-gate / model-freeze / draft-only / claude-api-usage) all exit 0; no-claim scan `runNoClaimGuard` over every waitlist copy string → 0 block flags; backtest-truth scan asserts `BACKTEST_TRUTH.beatsNaive === false` and page contains "10,301" + "does not beat naive"; build `npm run build --workspace=apps/web` exit 0.
- Current status recorded (2026-06-29): typecheck ✅0, lint ✅0, targeted tests ✅ (waitlist 49/49), guardrails ✅6/6, no-claim scan ✅ (copy + 50 content posts + assembled page + emails + briefs, 0 block flags), backtest-truth scan ✅, build ✅ (Level-2A Vercel preview reached READY). Every automated gate item GREEN; remaining gates are human/owner ones.
- Formulas/methods: not specified (no modeling).

## Data sources named
- None named.

## Findings (numbers and facts, not vibes)
- Pre-release automated gate: all items recorded GREEN as of 2026-06-29 (typecheck, lint, targeted tests 49/49 waitlist, guardrails 6/6, no-claim scan over copy + 50 content posts + page + emails + briefs with 0 block flags, backtest-truth scan, build/Level-2A preview READY). (OTHER)
- Waitlist smoke tests (pre-public, local/staging): 1) `GET /waitlist` renders no-claim copy + transparency line + form; 2) submit without consent → blocked (422); valid data + consent → "thank you"; 3) duplicate email → safe `already_queued` (no 500, no second row); 4) no external network call other than same-origin POST /api/waitlist; 5) no email sent, no analytics provider call fires; 6) page returns noindex until the public gate is explicitly opened. (OTHER)
- Public deploy gate items (all owner-approved, each): owner approves making /waitlist public; remove robots: noindex only at go-live; nav linkage decision; durable storage in place (see pr3-durable-storage-plan.md) OR explicit acceptance that file storage is non-durable on serverless; env confirmed (no secrets in code; `GSE_WAITLIST_STORE_PATH` or DB URL set); legal/compliance final read of public copy (no-claim). (TRUST-SIGNAL)
- Rollback plan: fastest = re-apply noindex + unlink → page effectively dark; storage flag `WAITLIST_STORAGE=file` reverts to local store; DB down-migration if the table must go (PR3 plan §7); ops note: prod is alias-based — Vercel "rollback" does not undo a migration; real rollback is flag flip + down-migration + re-alias. (OTHER)
- Owner approvals needed (all BLOCKED today): 1) durable storage migration; 2) analytics provider, if any; 3) removing noindex + nav linkage; 4) the deploy itself (push/deploy); 5) email confirmation sending, if enabled. (TRUST-SIGNAL)
- Exact next safe action: keep /waitlist noindex and local; re-run the automated gate on demand to keep evidence fresh; advance only one gated item at a time, each with explicit owner approval; never push/deploy without it. (TRUST-SIGNAL)

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: Automated gate bakes the backtest-truth assertion (`beatsNaive === false`; page contains "10,301" + "does not beat naive") into CI — the honest benchmark is enforced by code, not prose.
- TRUST-SIGNAL: Every public-facing step is owner-gated individually; rollback contract is flag-flip first, not Vercel rollback (alias-based prod caveat recorded).
- OTHER: Ops/deploy artifact; no modeling signal for the engine.

## Engine-actionable? (yes/no + one-line what)
no — a deploy-gating checklist for the waitlist page, not a model input; the actionable pattern it offers is baking truth assertions into automated checks.
