# docs/calibration-proposals/FROZEN.md

## What it is (1-2 sentences)
The model-freeze guardrail's escape hatch doc: it pins `frozen: v5.1.0` (locked 2026-06-22) as the intentional baseline, documenting that no scoring weights changed when calibration was activated. It also codifies the three allowed actions when bumping MODEL_VERSION (update the frozen line, add a CalibrationProposal seed row, or add a new calibration-proposal doc).

## Key metrics/methods (formulas where given, else "not specified")
- Not specified (governance artifact, not a metrics doc). The guardrail script is `scripts/guardrails/model-freeze.mjs`; the rationale is that a MODEL_VERSION bump retroactively re-labels prior picks, so it requires an audit trail.

## Data sources named
- Points to `docs/calibration-proposals/2026-06-22-calibration-activation-v5.1.0.md` (audit trail + held-out validation) and `packages/db/prisma/seed.ts` (CalibrationProposal rows).

## Findings (numbers and facts, not vibes)
- Frozen baseline: v5.1.0, locked 2026-06-22, heuristic scoring weights in `packages/prediction-engine/src/scoring.ts` unchanged from v5.0.0.
- Prior baseline: v5.0.0 locked 2026-05-18 (Phase 9), superseded by the v5.1.0 activation.
- Only change at v5.1.0: validated isotonic map converting raw confidence into calibrated P(win) at the display/conviction boundary, gated by `CALIBRATION_ADJUSTMENTS_ENABLED`.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the freeze guardrail exists to keep historical confidence numbers honest — trust infrastructure.
- OTHER: governance — any weight change must be accompanied by a calibration proposal audit entry.

## Engine-actionable? (yes/no + one-line what)
- No — governance record, already implemented; useful only as an audit reference for future version bumps.
