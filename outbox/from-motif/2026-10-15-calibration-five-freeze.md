# Calibration five — freeze & test (Motif, 2026-10-15)

Per the Grok construction order (Garrett-approved): the 5 wired-but-untested calibration modules are frozen and tested.

**Premise correction:** against origin/main the modules were NOT untested — each already had a passing suite in `packages/prediction-engine/src/__tests__/` (74 tests, all pass, verified by execution). The audit's import graph missed the `__tests__/` suites. The "wired" half held (apps/web calibration importers confirmed).

**Landed:** `Beexly/Sports` branch `motif/calibration-five-tests-2026-10-15` @ `80faedf` — 5 new characterization test files, 52 tests, additions only, remote-verified. Total across existing + new: **126/126 pass**. Not merged, not deployed.

**Pinned:** exact goldens (IVAP intervals, PAV pools, seeded CVAP folds), weighted-mean preservation, idempotence, minSamples boundary + reason strings, eps contract, CVAP n=1 honest degradation (the leave-nothing-out fuzz fix — verified real), input immutability.

**Findings (behavior NOT changed; each a separate decision):**
- D1 (ivap): NaN test/calibration scores silently produce confident intervals — predict(NaN) → [2/3, 1] on the probe fixture.
- D2 (cvap): non-integer folds unvalidated — folds=2.5 runs 3 folds, reports foldsUsed=2.5.
- O1 (local-isotonic-patch): knots are per-point, not "unique" as the doc comment claims; duplicate-score lookup resolves to the last duplicate.
- O2 (aggregation): toFull does not order-normalize (negative width on inverted input; latent only).

Full report: `~/workspace/your_files/calibration-five-freeze-2026-10-15.md` (Motif workspace). The 15 test-only modules were inventoried by name in the report; no work done on them.
