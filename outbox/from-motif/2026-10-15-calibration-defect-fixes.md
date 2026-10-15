# Calibration defect fixes — D1 (ivap NaN) + D2 (cvap folds) — 2026-10-15

**Branch:** `motif/calibration-defect-fixes-2026-10-15` on Beexly/Sports (commit `f31bfd29f7d21c779d2c2ccad42ee1775564a974`, 1 commit on main; 4 files). **Not merged, not deployed.**
**Origin:** the two defect candidates pinned by the calibration freeze (`motif/calibration-five-tests-2026-10-15`, report `calibration-five-freeze-2026-10-15.md`). Both are now FIXED on this branch; the freeze's FLAG tests were updated to assert the new behavior, on purpose, per the fix order.

## D1 — ivap: non-finite scores silently became confident predictions — FIXED
`packages/prediction-engine/src/calibration/ivap.ts`
- Before: `predict(NaN)` returned the top-of-range interval **[2/3, 1]** on the four-point fixture (NaN fails every `s > testScore` comparison, so the point sorted to the top); a NaN calibration score was accepted with no validation and shifted intervals.
- Fix: the constructor now validates every calibration score and `predict` validates the test score. Non-finite values (NaN/±Infinity) throw a clear error, fail-closed:
  - `InductiveVennAbers: calibration score at index <i> must be finite, got <value>`
  - `InductiveVennAbers.predict: test score must be finite, got <value>`
- Finite-input behavior is unchanged (proof below).

## D2 — cvap: non-integer `folds` misreported `foldsUsed` — FIXED
`packages/prediction-engine/src/calibration/cvap.ts`
- Before: `cvapPredict(cal, s, { folds: 2.5 })` ran **3** folds but reported **`foldsUsed: 2.5`**.
- Fix: `cvapPredict` validates `options.folds` up front; a non-integer (incl. NaN/Infinity) throws `cvapPredict: options.folds must be an integer, got <value>`. `foldsUsed` now always equals `foldPredictions.length`.
- **Scope note (deliberate):** integer fold requests keep the pre-existing clamp semantics (max(2, …) then min(…, n)) — `folds=0`/`-3` → 2, `folds=1` → 2, `folds=100` → n. Those clamps are pinned by NON-flag tests in both the main suite and the characterization file, and the fix order's regression floor forbade changing pinned finite-input outputs. If Garrett wants out-of-range integers to throw instead of clamp, that is a separate behavior change with its own test updates.

## Evidence
- Regression floor: the full 126-test battery (74 main-suite + 52 characterization) — **126/126 pass** pre-fix (with the old as-is FLAG pins) and **126/126 pass** post-fix (with the 3 FLAG tests rewritten: 2 in `ivap.characterization.test.ts`, 1 in `cvap.characterization.test.ts`; test counts per file unchanged). `tsc --noEmit` strict + `noUncheckedIndexedAccess` clean.
- Finite-behavior invariance: a differential probe compared old (main) vs fixed modules over **4,116 finite input combinations** (7 calibration sets × 12 test scores × the integer-folds/aggregation/seed option grid, full output objects) — **0 mismatches**.
- Remote-verified after push: branch ref, `main...branch` compare (1 commit, exactly the 4 files), and all 4 files byte-compared remote vs local (MATCH ×4).

## Not touched
- O1 (local-isotonic-patch knot doc comment) and O2 (aggregation `toFull` normalization) remain observations — separate decisions, behavior unchanged.
- No merge, no deploy. Merge path is the standing one (two-agent review + green CI + Garrett's migration runbook).
