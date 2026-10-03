# ops/ingestion-outage-proof/README.md
## What it is (1-2 sentences)
A design-record README for a fail-closed DB-outage guard applied to the ingestion pipeline on 2026-09-29 (branch `fix/ingestion-run-open-outage-guard`, founder-approved): it documents the patch applied verbatim to `packages/ingestion-pipeline/src/process-sport.ts`, the measured before/after proof, and the permanent regression test — after the original builder subagent was killed by an OpenRouter server error before writing its own write-up.
## Key metrics/methods (formulas where given, else "not specified")
- The bug (pre-fix line 340): `const run = await db.ingestionRun.create({ data: { sport: sport.key, status: "RUNNING" } })` — the FIRST write in `processSport()`, sitting ABOVE the `try` that opens further down
- PART A — `process-sport.ts:340`: run-open moved inside its own try/catch; on DB outage it logs, calls `notifyOwner` (already imported at line 85 — no new import needed), and returns a `status: "failed"` envelope tagged `run_open_failed:`
- PART B — the catch block's own `status: "FAILED"` write is now guarded, so a DB that dies mid-cycle cannot throw PAST the owner alert and the failed envelope
- Design point 1: reports through DB-independent channels — `console` and `notifyOwner`/Telegram, the same `notifyOwner` path the rest of the pipeline already uses
- Design point 2: STOPS rather than continuing — `Odds.ingestionRunId` is `NOT NULL`, so every downstream write needs a real run id; a fabricated id would produce unattributable writes, worse than stopping
- Proof method: `apply-fix.js` patched a TEMP COPY (never the repo); copy run against real 81-test suite + 2 added outage proofs; AST-level guard-position proofs (`ast-proof.js`, `ast-proof2.js`); falsification run of the new 5 tests against the UNPATCHED file
## Data sources named
- `packages/ingestion-pipeline/src/process-sport.ts` (patched file, both anchors confirmed in the real file)
- `packages/ingestion-pipeline/src/__tests__/process-sport-db-outage.test.ts` (permanent regression test, 5 cases)
- `packages/ingestion-pipeline/src/__tests__/process-sport.test.ts` (existing suite, 81 tests)
- Production incident record: `PRODUCTION-INCIDENT-db-unreachable.md`
- Design artifacts in this directory: `apply-fix.js`, `build-suite-v2.js`, `ast-proof.js`, `ast-proof2.js`, `outage.proof.test.ts`, `suite/__tests__/outage-proof.test.ts`
## Findings (numbers and facts, not vibes)
- Full ingestion-pipeline suite post-fix: 92 files passed, 1 skipped / 1457 tests passed, 6 skipped, 0 failed (`vitest run` exit 0)
- Existing `process-sport.test.ts`: 81 tests pass — no regression
- New `process-sport-db-outage.test.ts`: 5 tests pass on the patched file
- Falsification: same 5 tests on the UNPATCHED file — all 5 FAIL with `Can't reach database server at gse-postgres`
- `tsc --noEmit`: 1 error, identical to pre-change baseline (a pre-existing Windows path-casing error in `@types/ws` via `packages/db`); zero new type errors
- Proof harness (temp copy, pre-application): BASELINE `PROOF_A {"threw":"Can't reach database server at gse-postgres…"}`; PATCHED `PROOF_A {"threw":"(did not throw)","resolvedEnvelope":{...}}`
- `outage.proof.test.ts` is standalone and asserts the pre-fix DEFECT — it now FAILS against the patched source BY DESIGN
- Failure-mode chain before the fix: Postgres unreachable → throw outside the catch → no `IngestionRun` row of any status → `getOdds()` never reached → zero credits spent so the credit governor reported healthy → invisible to every dashboard in the repo
- Explicit non-goal: this makes the next outage VISIBLE; it does not make the pipeline work without a database — with Postgres unreachable, ingestion still produces no odds, now as a loud attributable failure instead of silence
- Re-run: `node apply-fix.js`, then run the suite under `suite/`
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Silent-failure masking: zero credits spent + healthy governor signal made a total outage invisible — the monitoring signal that says "all clear" can itself be the artifact of the failure — TRUST-SIGNAL
- Fail-closed guard pattern: first-write under its own try/catch, DB-independent alert channel, STOP rather than fabricate IDs (`Odds.ingestionRunId` NOT NULL as the hard reason) — OTHER
- Falsification-as-proof standard: new tests must FAIL on unpatched source and PASS on patched (pins behavior rather than merely passing); standalone defect-asserting tests fail against fixed source by design — OTHER
## Engine-actionable? (yes/no + one-line what)
yes — Reuse the fail-closed guard pattern (first-durable-write under its own try/catch + DB-independent owner alert + stop-don't-fabricate) for any pipeline whose "everything is fine" health signal can itself be produced by the failure.
