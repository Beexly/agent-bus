# docs/research/2026-09-26/RESCUE-2026-09-26-2-verifier-port.md
## What it is (1-2 sentences)
A rescue report (Hermes → Garrett/Mimo, 2026-09-26) documenting the port of `packages/verifier` (frozen-holdout scorecard, duel, joint, fact-graph calibration harness), the 28 `docs/factors` specs, and the `scripts/factors` foundry into Beexly/Sports PR #914 (draft, 89 files, +18,112, on branch `hermes/port-verifier-harness` based on main @ 6fd546dbd).

## Key metrics/methods (formulas where given, else "not specified")
Methods named without formulas in this file: frozen-holdout scorecard, duel, joint evaluation, fact-graph, `logLossOf`, Wilson interval containment. Measured float artifact: `wilsonInterval(10,10).high === 0.9999999999999999` (one ULP short of 1; `clamp01` cannot round up), so a `rate <= high` containment check fails at k = n — callers need a tolerance; the package's own pin asserts `> 0.999`. The pre-registration gate `killLineCommitDate` was fixed from HEAD-scoped `git log -- <yaml>` to searching all refs and taking the earliest qualifying commit (still refuses kill lines written after their run).

## Data sources named
The package's own test fixtures; live nflverse release loader (21 tests); `@sports/data-ingestion` (all 7 imported symbols verified exported on main); full git history (gate requires a full clone — `git log --all`/`git show <run_sha>` fail under fetch-depth 1).

## Findings (numbers and facts, not vibes)
- Package's own suite: 108 passed, 0 failed (duel 7, factgraph 15, holdout 14, joint 8, nflverse-releases 21, scorecard 10, stats-pins 28, v530 5), run via a ~200-line vitest shim + esbuild mirror because vitest cannot run on the host.
- `node --test scripts/factors/index.test.mjs`: 16/16 after the pre-registration gate fix.
- Two earlier hand-written harness "failures" were the author's wrong expectations, not code bugs (`logLossOf` label handling; the documented Wilson IEEE754 boundary).
- run_sha values in specs deliberately NOT re-anchored to avoid falsifying run provenance.
- CI (`Test, type-check, lint, Prisma`) is red on #914 but was already red on main at both the branch base and current main — pre-existing typecheck errors in `@sports/prediction-engine` (`MarketPrice` and `PlayerRoleContext` not exported, a nullability error, a nonexistent `certificate` property), none in files the PR touches.
- Only runtime dependency is `@sports/data-ingestion`; no other package touched.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Frozen-holdout scorecard + duel/joint/fact-graph calibration harness for scoring engine predictions against real outcomes — TRUST-SIGNAL
- 28 pre-registered factor specs with a kill-line pre-registration gate (commit-date-before-run enforcement) — TRUST-SIGNAL
- Wilson-interval containment artifact measured and pinned rather than tolerated — TRUST-SIGNAL
- Live nflverse release loader as a test fixture source — OTHER (data plumbing)

## Engine-actionable? (yes/no + one-line what)
Yes — the frozen-holdout/duel/fact-graph verifier harness gives GSE a proven (108 tests green) calibration and pre-registration framework to honestly score engine predictions before any public pick.
