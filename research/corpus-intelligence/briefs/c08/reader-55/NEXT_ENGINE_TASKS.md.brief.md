# docs/ops/NEXT_ENGINE_TASKS.md
## What it is (1-2 sentences)
A five-step engine work queue following the isotonic / Kelly / Platt+Brier work: wire selective publishing, apply a resolution-based pause list, add market-relative features, re-run calibration metrics, and only then consider enabling calibration adjustments and auto-publish.

## Key metrics/methods (formulas where given, else "not specified")
- Step 1: Wire `SELECTIVE_PUBLISH` into `generate-drafts` (flag OFF) using δ from the sweep.
- Step 2: Pause list = sport|market with Res < 0.005 from the holdout report.
- Step 3: Market-relative features when OddsProvider lines exist.
- Step 4: Re-run `calibration-metrics` → compare overall Res.
- Step 5: Only then consider `CALIBRATION_ADJUSTMENTS` + `AUTO_PUBLISH` after GREEN×K.
- Do not productize CQR/ACI for PROVEN unlock.
- Formula: not specified.

## Data sources named
- Holdout report (source of the sport|market Res<0.005 pause list); OddsProvider lines; calibration-metrics tooling; "sweep" (δ for selective publishing).

## Findings (numbers and facts, not vibes)
- Explicit resolution gate: pause any sport|market with holdout resolution below 0.005.
- Explicit unlock gate: calibration adjustments and auto-publish require GREEN×K evidence before being considered.
- CQR/ACI are explicitly not to be productized as a PROVEN-status unlock mechanism.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL — resolution-gated publishing (Res<0.005 pause list, GREEN×K before auto-publish) is the engine's honest eligibility policy in action.
- OTHER — market-relative features contingent on OddsProvider lines existing (availability gate, not a standing method).

## Engine-actionable? (yes/no + one-line what)
Yes — this is a ready-made 5-step calibration wiring checklist; wire SELECTIVE_PUBLISH (OFF) and the Res<0.005 pause list before any calibration-adjustment discussion.
