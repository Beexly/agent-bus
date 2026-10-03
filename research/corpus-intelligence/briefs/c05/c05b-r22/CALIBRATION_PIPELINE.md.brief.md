# ops/CALIBRATION_PIPELINE.md
## What it is (1-2 sentences)
R&D-only pipeline doc: settled picks → Shin de-vig on close prices → CLV fill-vs-fair report → time-ordered hold-out → CenteredIsotonic (CIR) calibration → ECE/Brier/reliability → fractional/portfolio Kelly sizing. Live scoring does not apply calibration until `CALIBRATION_ADJUSTMENTS_ENABLED` + human MODEL_VERSION gate are set.
## Key metrics/methods (formulas where given, else "not specified")
- Shin de-vig on close prices: `shinDevig` in `packages/prediction-engine/src/shin-devig.ts` (formula not specified in file).
- CLV report: fill vs fair close (`clv.ts`, `clv-capture.ts`).
- Time hold-out: `timeHoldoutSplit` — "NEVER fit on test" (law).
- CIR: `centeredIsotonicCalibration` — preserves ranking vs PAVA plateaus; `countDistinctPredictions` diagnostic. Prefer CIR when stakes/ranks matter; PAVA OK if only bin ECE.
- ECE/Brier/reliability: `expectedCalibrationError`, `brierDecomposition`, `reliabilityCurve`; `selectedSliceEce` computed on the selected (+EV) slice (calibration paradox).
- Fractional Kelly: κ ≈ 0.25–0.30, per-bet + portfolio caps; full Kelly forbidden.
- Portfolio path: James–Stein edge shrink + correlation haircut + CLV deflator — do NOT invert Σ for Markowitz-style sizing.
- CLV deflator: zeros stakes until ~50 settled CLV samples.
- Portfolio sizing: `portfolioKellyStakes` requires ≥3 rows, else `fractionalKellyStake`.
- Bridge: `timeHoldoutSplit` → `centeredIsotonicCalibration(train)` → `sizeAfterCalibration({ train, sizeRows, rhoClv, settledCount })` → `applyCalibrator` → portfolio/fractional Kelly → stakes (0 until CLV floor).
- Offline dry-run: `npm run calibration:offline`; asserts CIR ≥ PAVA distinct counts, reports paradox gap + CLV deflator gate; uses `scripts/calibration-offline/data/synthetic-settled.jsonl` when no export present.
- Law: do not report sizing as CLV; CLV is pick-quality, not stake performance. Polymarket remains compliance hold — not a calibration target.
## Data sources named
JSONL export `npm run export:settled-picks` (non-seed settled picks + CLV fields); close prices (for Shin de-vig); synthetic settled JSONL for offline dry-run. No external data vendors named.
## Findings (numbers and facts, not vibes)
- Kelly fraction κ ≈ 0.25–0.30 (single-bet κ=0.25 in `kelly.ts`).
- CLV deflator floor: stakes zeroed until ~50 settled CLV samples.
- Portfolio Kelly requires ≥3 rows.
- Fit calibrator on time hold-out only.
- Live product does NOT apply calibration until env + human version gate.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: selected-slice ECE on the +EV slice (calibration paradox) — this is how the engine checks whether its probabilities are honest on the bets it would actually make.
- OTHER: fractional-Kelly sizing discipline, CIR-vs-PAVA choice rule, CLV deflator gate — engine risk-management machinery.
## Engine-actionable? (yes/no + one-line what)
Yes — wire `selectedSliceEce` + CLV-deflator-gated fractional Kelly into the sizing path before any published p-values are used for stakes.
