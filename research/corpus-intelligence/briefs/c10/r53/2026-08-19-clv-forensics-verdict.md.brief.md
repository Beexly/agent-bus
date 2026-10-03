# docs/ops/edge/2026-08-19-clv-forensics-verdict.md
## What it is (1-2 sentences)
The C-14 verdict on closing-line-value (CLV) forensics: a verdict of "MIXED, confidence MEDIUM" — the CLV measurement math is correct, but the measured numbers are untrustworthy due to two known, unpatched defects in the closing-snapshot capture path that the original forensics pass missed.
## Key metrics/methods (formulas where given, else "not specified")
- Beat rates observed: SPREAD 10.31%, MONEYLINE 7.14%, TOTAL 46.19% (near-honest).
- American-odds conversion verified correct: prices convert to implied probability before subtraction/averaging, never subtracted as raw American numbers.
- CLV is NOT de-vigged: `computeMoneylineClv` has no `removeVig()` call (unlike the pick-scoring edge calc) — reported beat rates are raw, not vig-adjusted.
- ML headline: -27.4pp mean, most plausibly explained by L-9's finding that 0/909 picks have a matching `odds_batch` row at `clv_captured_at` (locks appear model-derived, not real book quotes).
## Data sources named
`packages/prediction-engine/src/clv.ts`, `selectionIsHomeSide` (`settlement.ts`), `deriveClosingSnapshotFromOdds`, `settle-sport.ts:321` (take:80 cap). Fix branches: `origin/claude/hotfix-settle-refresh-races` commit `8e2af6f1` (closing-snapshot staleness bound, "M-F7: honest closing-line bounds"); `origin/claude/galaxy-sports-edge-pdcswh` commit `6f0353e1` (take:80→take:240, "heal orphaned CLV grades (M-F4)"). Fixed-on-main bug: commit `0e56c477` (2026-07-17, "the live money-truth bug" — team-name-prefix collision e.g. "Jets" vs "Jets Metro" inverting WIN/LOSS and CLV grading).
## Findings (numbers and facts, not vibes)
- Structural clue: SPREAD and MONEYLINE derive side via the same shared function; TOTAL derives OVER/UNDER independently with no team-name matching — matching the observed pattern (both low, TOTAL near-honest). But the naming-collision story fails on magnitude (rare collisions can't crash aggregate beat to 7-10%).
- Two confirmed, currently-unmerged bugs on the exact code path, both on main today:
  1. No staleness bound on the closing snapshot — `deriveClosingSnapshotFromOdds` accepts any latest pre-kickoff odds batch as "the close" (no `MAX_CLOSE_AGE_MS`); a stale mid-afternoon batch grades as the close. Fix exists on `8e2af6f1`, not merged.
  2. Closing-line book coverage truncated at `take:80` in `settle-sport.ts:321`; 27+ books x 3 markets need more than 80 rows; fix `take:240` exists on `6f0353e1`, not merged.
- Both fixes are pre-built and pre-tested on other branches — recommended C-15 path: merge both, re-grade the census, then design the lock-price provenance fix (real book quote at lock time vs model-derived).
- Standing doctrine: no CLV performance claim ships to a customer-facing surface until re-grade under e-process preregistration clears.
- Neither the TOTAL 58.5% nor the ML -27.4pp headline can be trusted as-is.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: CLV beat-rate corruption via stale/truncated closing snapshots is an artifact, not anti-signal — supports the standing rule against publishing calibration claims on old-model numbers.
- TRUST-SIGNAL: Lock-price provenance finding (0/909 picks have matching odds_batch row at clv_captured_at — locks model-derived, not real book quotes) means any "closing line value" claimed is unfounded until locks are real book quotes.
- OTHER: Method fact — CLV reported raw (no de-vigging) unlike pick-scoring edge; mixing the two metrics without noting this corrupts comparison.
## Engine-actionable? (yes/no + one-line what)
Yes — merge the two pre-built closing-snapshot fixes (staleness bound `MAX_CLOSE_AGE_MS` on `deriveClosingSnapshotFromOdds`, `take:80`→`take:240` in `settle-sport.ts`), re-grade CLV census before any edge claim, and treat lock-price provenance (real book quote at lock time) as a prerequisite for CLV as a calibration signal.
