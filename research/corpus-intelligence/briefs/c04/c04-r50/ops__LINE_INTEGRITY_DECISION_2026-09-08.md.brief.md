# docs/ops/LINE_INTEGRITY_DECISION_2026-09-08.md
## What it is (1-2 sentences)
Decision document for the line-integrity remediation (ledger rows C-281 through C-284, remedying C-197): published SPREAD/TOTAL picks store a consensus-averaged line in the `line` field rather than a placeable quoted book line, and the doc records what shipped, what stays flag-gated for the founder, and corrected production measurements from 2026-09-09.

## Key metrics/methods (formulas where given, else "not specified")
- `avgSpread` / `avgTotal` = arithmetic mean of every book's quoted spread/total, stored in `Pick.line` (`scoring.ts:411`, `:685`, `:653`, `:857`).
- `isQuotedBookLine(line, quotedLines)`: refuses a pick whose stored mean was not quoted by some book on the row — deliberately not a half-point-grid test.
- MLB SPREAD guard `isPublishableSpreadLine`: ±1.5 / 2.5 / 3.5 run-line ladder only; no ladder twin exists for MLB TOTAL.
- Survey fields on `/api/ops/public-surface-truth` → `lineIntegrity`: `publishedUnsettledOffGridOrBadRunline`, `publishedUnsettledNotQuoted`, `remainingToVoid`, `voidedByLane`, `unpublishedByLane`, plus sweep-completeness fields (`sweep.lastWrapAt` / `sweep.priorWrapAt`, `sweep.voidsInLastCompleteSweep`, `sweep.voidSweepComplete`). Flip precondition: `sweep.voidSweepComplete` is true (two consecutive wraps with zero VOIDs recorded between).
- Calibration eligibility floors cited in the doc: Brier ≤ 0.22, ECE ≤ 0.05, Murphy R ≤ 0.05, n ≥ 100, K=3. `npm run ops:regrade-lines` dry-run: modal book line across books (ties toward nearest stored value) re-graded via `calculatePickResult` / `selectGradingLine`; `--execute`/`--write`/`--apply`/`--fix`/`--regrade` exit 2 before touching the DB.
- Guard flags: `LINE_INTEGRITY_PUBLISH_GUARD_ENABLED`, `LINE_INTEGRITY_VOID_ENABLED` (both OFF, founder-only flips); survey odds-read budget `LINE_INTEGRITY_SURVEY_ODDS_BUDGET` = 240; odds freshness window `FRESHNESS_THRESHOLD_MS` (4h default).

## Data sources named
Production Neon `gse-postgres` (branch `br-green-leaf-apdgksoe`), read-only `GET /api/ops/public-surface-truth`, quoted book lines at publish time, deployment `9046ff22a`.

## Findings (numbers and facts, not vibes)
- Off-grid counts measured 2026-09-09 (523 settled picks off-grid on the line that actually graded them, not ~680): SPREAD 186, TOTAL 336.
- MLB TOTAL is the worse half: 369 of 599 off-grid, against SPREAD's 310 of 719.
- 85 of 523 recorded results would change under a book-line re-grade (85 of 1,329 settled SPREAD/TOTAL picks overall). By league: MLB TOTAL 58 of 242 differ; MLB SPREAD 11 of 60; MLS SPREAD 5 of 40; MLS TOTAL 4 of 38; NCAAF SPREAD 2 of 74; NCAAF TOTAL 2 of 40; NHL TOTAL 2 of 3; NBA SPREAD 1 of 3; NFL SPREAD+TOTAL 0 of 19.
- **NFL is clean on this measure: 19 off-grid picks, none whose result a book-line grade would change.** Doc notes this is narrow (19 picks), not a claim NFL is unaffected going forward.
- Mechanism correction (§5b): 442 of 523 stored lines sit inside the books' [min, max] (consistent with averaging); **81 lie outside it and cannot be a mean** — e.g. `LSU Tigers -35.9` vs books `[-11.5, -10.5]` (out by 24.42), `Mississippi State -48.8` vs book `-28.5`. NCAAF SPREAD is 39 in / 35 out; MLS and NFL are 100% in-range. Cause of the 81 is NOT established (model contamination vs missing/mis-keyed odds rows both produce the signature).
- Enabling the publish guard would suppress roughly 43% of SPREAD and 62% of TOTAL picks (C-197 production counts, not a live guard run); MLB SPREAD already refused off the ladder.
- The VOID half only acts on a grading line (`clvLockLine` or immutable proof receipt, never the drifting `line`); legacy rows with neither are skipped (`NO_PUBLISH_LOCK`). Original `PickSettlementEvent` preserved; withdrawal is an append-only `JarvisMemoryEvent` with `rcaCode: LINE_NOT_QUOTED`; `settledAt` never re-stamped.
- Calibration eligibility was GREEN with `consecutiveGreen` 31 at decision time — but computed from picks graded on the stored lines, so not independent evidence the lines are sound.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER**: The entire doc is ops/data-integrity infrastructure — grading-line hygiene, publish guards, void/unpublish lanes. No QB, coaching, OL, or scheme content.
- **OTHER (TRUST-SIGNAL-adjacent, noted)**: The 19-pick NFL-clean finding is a *record-quality* trust signal — NFL graded results are robust to the line-integrity defect (0 of 19 would change), making NFL pick records more reliable than MLB TOTAL (58 of 242 would change) when evaluating claimed hit rates. INFERENCE: this is relevant to trusting published NFL vs MLB records.

## Engine-actionable? (yes/no + one-line what)
No — all flips are founder-only and agents may not run repairs against production; the reusable artifact is the read-only `npm run ops:regrade-lines` tool for grading-integrity audits.
