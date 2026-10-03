# ops/PROVEN_PATH_COMPLETE.md
## What it is (1-2 sentences)
The complete resolution plan for moving the engine from RED to PROVEN status: ranking-driven resolution (not calibration maps) with an automatic selective-publish engine, and hard gates on what counts as PROVEN.
## Key metrics/methods (formulas where given, else "not specified")
- Live class targets: Brier ≈ 0.275, ECE ≈ 0.11, Murphy Res ≈ 0.002.
- Mechanism: score bake-off (confidence vs edgeScore vs blend, pick highest Res); group ranking → pause Res≈0 groups; selective sweep over δ/edge/minGroupRes maximizing Res with n ≥ 100.
- Rule: maps fix reliability (REL); RES requires ranking; floors unchanged.
## Data sources named
- `calibration-metrics` runs over canonical WIN/LOSS + confidence + edgeScore + sport|market.
- Ops truth store key `provenPath` (runtime pause/δ plan).
## Findings (numbers and facts, not vibes)
- Public picks run selective default ON (opt-out via SELECTIVE_PUBLISH_ENABLED=false).
- If selectiveGainRes ≈ 0, engine needs new independent features — not more Platt/DP.
- GREEN×K streak gates one-time AUTO_PUBLISH; maps apply only after Res moves.
- Forbidden: lowering floors, fake PROVEN, applying maps to greenwash, inventing book lines.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: selective-publish default ON, no fake PROVEN, gate evidence discipline.
- OTHER: calibration methodology (Brier/ECE/Murphy decomposition), feature-engineering mandate for ranking resolution.
## Engine-actionable? (yes/no + one-line what)
Yes — implement Res-driven selective publishing (pause Res≈0 groups, δ sweep with n≥100) before any public pick claims.
