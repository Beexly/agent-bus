# docs/engine/research/2026-09-28/public-surface-sweep-guard.md
## What it is (1-2 sentences)
Record of promoting the public-surface keep-out sweep (public/private doctrine enforcement) from a doc into a CI guard: `apps/web/__tests__/public-surface-sweep.test.ts` (9 tests) runs under the existing `npm test` CI job.
## Key metrics/methods (formulas where given, else "not specified")
- Method: walk every `route.ts`/`page.tsx` under `apps/web/app` (445 files, excluding admin/auth/api/internal), match against 12 keep-out patterns (raw NGS rows, QBR, separation, WOPR, EPA, signal ledger, calibration internals, edge internals, adjustment layer, truth-catalog topology, source registry, raw player-week rows); a match is a finding only if ungated (no file gate, no ancestor-layout gate, no allow-list entry).
- Guard bug fixes: case-insensitive metric patterns (lowercase `wopr` slipped past `\bWOPR\b`); both flag polarities (`=== "true"` and `!== "true"`); structural redirect check (partial-branch redirect no longer counts as gate).
## Data sources named
None (internal codebase sweep).
## Findings (numbers and facts, not vibes)
- [TRUST-SIGNAL] Result: 0 exposures; the search is not vacuous — 42 files matched, all resolved.
- [TRUST-SIGNAL] Two structurally invisible gating cases found: `/stats/*` pages gated one level up via `app/stats/layout.tsx` (`isStatsPublic()` + `notFound()`); cron routes authenticating via `cronAuthError(request)` helper rather than a literal `CRON_SECRET`.
- [TRUST-SIGNAL] A case-sensitivity hole was genuine (lowercase `wopr` in a payload key passed the guard) — real hole, fixed with regression test.
- [TRUST-SIGNAL] Allow-list was masking broken flag polarity (the `/stats/*` pages passed only via allow-list; entries removed so ancestor-layout path must carry them — suite stayed green).
- [TRUST-SIGNAL] Green run does NOT prove the surface is clean: static text matching can't see composition leaks, re-exported data under different shape, runtime queries returning keep-out columns without naming them, or components in `apps/web/lib/**`. Allow-list entries carry mandatory recorded reasons; stale entries rejected.
- [OTHER] Open item: `/api/nflverse/qbr` is premium-rate-limited and returns an internal metric family — fencing it is an entitlements decision for Garrett.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
Tagged inline above.
## Engine-actionable? (yes/no + one-line what)
Yes — mirror this adversarial-guard pattern (inject-real-leak regression tests, no allow-list masking broken predicates) for the engine's calibration-state labeling guard.
