# research/2026-09-26/RESCUE-2026-09-26-4-xfp-research.md
## What it is (1-2 sentences)
A rescue/landing record documenting the port of the Mimo xFP (expected fantasy points) / fPOE (fantasy points over expected) research record into `Beexly/Sports` PR #917, plus a 12-test guard (`verify-record.test.mjs`) that locks the pre-registered verdicts to the measured artifacts.
## Key metrics/methods (formulas where given, else "not specified")
- Holdout rank-prediction test: naive last-week fantasy points vs xFP/FPOE for next-week rank prediction on holdout 2020–2025 (n=6022). Metric: Spearman Δrho with season-week clustered bootstrap CI (2000 reps).
- Artifact shapes pinned by the guard: 18,150 × 7 air-yards sample, two 20 × 8 fPOE tails, per-position rate table whose QB/RB target coefficients must differ, nflverse/FTN attribution.
- Guard assertions: verdicts must follow pre-registered kill lines (unit 1 FAIL since Δrho < 0 with CI covering zero; unit 2 INCONCLUSIVE since point estimate positive, CI covers zero); bootstrap must stay season-week clustered at 2000 reps; holdout seasons strictly after training seasons (leak check); unit 3 stays BLOCKED with a written reason.
## Data sources named
nflverse and FTN (attribution pinned in artifacts).
## Findings (numbers and facts, not vibes)
- Unit 1 (pre-registered): xFP/FPOE does NOT beat naive last-week fantasy points for next-week rank prediction — Δrho = -0.0165, 95% season-week bootstrap CI [-0.0396, 0.0086] (n=6022). Recorded as a FAIL.
- Unit 2: INCONCLUSIVE — point estimate +0.0350, CI covers zero.
- Unit 3: BLOCKED, with the reason written down (specific reason not restated in this file).
- Guard: 12/12 tests pass (`node --test scripts/research/mimo-xfp/verify-record.test.mjs`); all four Python files compile; all six artifacts parse.
- The RESULT numbers were measured 2026-09-18 on a Windows worktree and were NOT re-run — the guard verifies prose-to-artifact fidelity, not fresh measurements.
- Land: `hermes/port-xfp-research` branch → PR #917 (draft, 18 files + guard + CI step); adds `scripts/research/mimo-xfp/` under a new `scripts/research/` directory rather than re-rooting under `docs/research/` to preserve pre-registered artifact citations.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: negative-result recordkeeping — xFP/FPOE underperforming naive last-week points on 2020–2025 holdout says air-yards-based expectation adds no next-week rank signal; fantasy projection features should not overweight expected-fantasy-points terms without new evidence.
## Engine-actionable? (yes/no + one-line what)
Yes — treat the guard pattern (verdict-locked tests + pre-registered kill lines + artifact-shape pins) as the template for all future engine research records, and do not build next-week rank features on xFP/FPOE without contrary evidence.
