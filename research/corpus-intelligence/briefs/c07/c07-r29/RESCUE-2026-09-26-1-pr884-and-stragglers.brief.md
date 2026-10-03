# research/2026-09-26/RESCUE-2026-09-26-1-pr884-and-stragglers.md
## What it is (1-2 sentences)
A Hermes rescue report (2026-09-26, status done) documenting the fixes for PR #884's red tests (#911, draft, stacked on #884's branch) and the port of four unmerged typecheck files from `mimo/typecheck-signal-value-fix` (#913, draft).

## Key metrics/methods (formulas where given, else "not specified")
- Verification method: ported files transpiled with esbuild and run against hand-computed values — tcv port 36/36 pass (including 15/15 the branch message claimed); #911 fix = 8 insertions (one mock export per test file) reviewed in the diff.
- Correctness change: conformal quantile now fails closed when rank exceeds n instead of returning +Infinity (fixing the `expected Infinity` failure in #884's CI); `conformalMarginSet` verified as pure re-export so the change cannot fan out.
- CI on `ubuntu-latest` is the real gate — vitest/tsc cannot run on the iSH host.

## Data sources named
Beexly/Sports repo; branches `hermes/fix-884-mock-isresearchpower`, `hermes/port-tcv-failclosed`; PR #884, #911, #913 (GitHub); branch `mimo/wire-nfl-mlb-2026-09-23`, `mimo/typecheck-signal-value-fix`.

## Findings (numbers and facts, not vibes)
- Two test files were missing `isResearchPowerRatingsEnabled: vi.fn().mockReturnValue(false),` in the `@sports/data-ingestion` mock factory; CI log confirmed exactly that error.
- Critical find the audit brief missed: that symbol does not exist on `main` — it is defined only on PR #884's branch, so the fix is based on #884's head, not `main`; PR #911 therefore targets `mimo/wire-nfl-mlb-2026-09-23`.
- Extra find: 2 of #884's 3 red tests were not the mock at all — `cqr.test.ts` asserts old clamping behavior while `cqr.ts` is byte-identical on main and #884 (stale-copy base-drift artifact); `main`'s fail-closed version was ported in, blast radius checked (ledger line `H-M: DONE`, no live pick path depends on it).
- #913: `conformal-margin-set` + `tweedie-aci` (4 files) ported from main onto a fresh branch; fail-closed change is real correctness, not cosmetics; dependent module is a pure re-export, no live consumer.
- Open: #884 still owned by Mimo; #911 is a draft stacked on it and must not be read as fixing #884.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] Fail-closed quantization discipline (conformal quantile fails closed instead of returning +Infinity) — engine calibration-layer safety pattern.
- [TRUST-SIGNAL] Base-drift detection (stale-copy test asserting superseded behavior) and blast-radius checking before porting — audit-receipt practices matching the standing audit-receipt doctrine.
- [OTHER] Hand-computed test oracles (esbuild transpile + 36/36 pass) as the proof standard when full CI can't run locally.

## Engine-actionable? (yes/no + one-line what)
Yes — codify the fail-closed-on-overflow rule (never return +Infinity for an out-of-range quantile) and the audit-receipt standard (hand-computed test oracles with pass counts) into engine CI conventions.
