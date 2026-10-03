# research/2026-09-26/RESCUE-2026-09-26-1-pr884-and-stragglers.md
## What it is (1-2 sentences)
A rescue-task report from Hermes (2026-09-26) fixing PR #884's red tests on the Beexly/Sports repo (#911: a missing `isResearchPowerRatingsEnabled` mock symbol) and porting four unmerged conformal-prediction files from `mimo/typecheck-signal-value-fix` (#913: fail-closed conformal quantile when rank exceeds n instead of returning +Infinity).

## Key metrics/methods (formulas where given, else "not specified")
- Method for #911: add `isResearchPowerRatingsEnabled: vi.fn().mockReturnValue(false)` into the `@sports/data-ingestion` mock factory in two test files (8 insertions total); port `main`'s corrected fail-closed `cqr.test.ts` over a stale copy.
- Method for #913: port `conformalMarginSet` (a verified pure re-export) + `tweedie-aci` (4 files) onto a fresh branch from `main`; key behavior change: conformal quantile now **fails closed when rank > n** instead of returning `+Infinity`, fixing the `expected Infinity` CI failure.
- Verification method: logic executed directly (not inferred) by transpiling ported files with esbuild and running against hand-computed values — tcv port **36/36 pass** (including 15/15 the branch's own message claimed); #911's fix reviewed in diff. `vitest` and `tsc` could not run on the iSH host; CI on `ubuntu-latest` is the real gate.
- No formulas given; no p-values, R², or accuracy figures.

## Data sources named
- Beexly/Sports repo: `main`, PR #884 (owned by Mimo), branch `mimo/wire-nfl-mlb-2026-09-23`, PRs #911 and #913 (drafts), branch `mimo/typecheck-signal-value-fix` (4 unmerged files: conformal-margin-set + tweedie-aci).
- CI logs on `ubuntu-latest`.

## Findings (numbers and facts, not vibes)
- Status: done; branches `hermes/fix-884-mock-isresearchpower`, `hermes/port-tcv-failclosed`.
- Two test files were missing `isResearchPowerRatingsEnabled` in the mock factory; CI log carries exactly that error (verified before applying).
- The symbol `isResearchPowerRatingsEnabled` does not exist on `main` at all — it is defined only on PR #884's branch, so the fix is based on #884's head, not `main`; a fix branch off `main` would not compile. PR #911 targets `mimo/wire-nfl-mlb-2026-09-23`.
- 2 of #884's 3 red tests were not the mock issue: `cqr.test.ts` asserted old clamping behavior while `cqr.ts` is byte-identical on `main` and #884 — the test was a stale copy (base-drift artifact); `main` already carries the corrected fail-closed test, which was ported. Blast radius checked: affected ledger line marked `H-M: DONE`, no live pick path depends on it.
- `conformalMarginSet` is a pure re-export (verified); its dependent module is also a pure re-export; no live consumer on the row — the change cannot fan out.
- Open: #884 is still owned by Mimo; #911 is a draft stacked on it and does not fix #884 itself; must not be read as doing so.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Conformal-prediction fail-closed quantile fix (TRUST-SIGNAL): the engine's uncertainty layer now refuses to emit `+Infinity` when the conformal rank exceeds n, failing closed instead. For the calibration/sizing program this is directly relevant: an interval engine that silently produces infinite margins corrupts position sizing and Kelly-style stake calibration, so the fail-closed change is a trust-signal hardening at the prediction-boundary layer.
- Stale-test base-drift artifact (OTHER): `cqr.test.ts` diverged from the identically-named production file across branches — a process-level finding that any repo-level audit must treat test files and production files as separately-driftable artifacts, relevant to the agent-fleet QC practice of requiring audit receipts with test counts.

## Engine-actionable? (yes/no + one-line what)
Yes — adopt the "conformal quantile fails closed when rank > n (never returns +Infinity)" rule in any engine uncertainty-interval code path, since infinite bounds poison calibration and sizing.
