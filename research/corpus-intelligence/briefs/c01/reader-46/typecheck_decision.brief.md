# docs/fable/master/TYPECHECK_DECISION.md
## What it is (1-2 sentences)
Repo-internal engineering decision log (updated 2026-07-03) documenting the fix for a TypeScript typecheck blocker in `@sports/web` caused by BigInt literal syntax in `@sports/prediction-engine` sources, and the verification that followed.

## Key metrics/methods (formulas where given, else "not specified")
- Decision: raise `apps/web` TS target from ES2017 to ES2020 (BigInt literal syntax requires ES2020+).
- Failure files: `packages/prediction-engine/src/pedersen-ledger.ts`, `packages/prediction-engine/src/simhash.ts` (BigInt syntax), target mismatch vs `tsconfig.base.json` (ES2022) and Node >= 20.0.0 runtime floor.
- Verification: `tsc --showConfig` reported effective `target: es2020`; stale incremental caches (`apps/web/tsconfig.tsbuildinfo`, `apps/web/.next/cache/.tsbuildinfo`) caused a phantom re-failure and were removed; final `npm run typecheck --workspaces --if-present` passed.
- Not specified: no sports metrics or formulas.

## Data sources named
None (build tooling only).

## Findings (numbers and facts, not vibes)
- Root cause was ES target mismatch (apps/web ES2017 vs BigInt code requiring ES2020), not source errors.
- Stale tsbuildinfo caches are a known false-positive failure mode — removal was the fix.
- Typecheck passed across all workspaces after the change; FABLE focused tests and prediction-engine tests were slated for rerun.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- None applicable (pure repo infra doc). Tagged: OTHER (build hygiene only).

## Engine-actionable? (yes/no + one-line what)
No — build-tooling log with no engine-relevant data.
