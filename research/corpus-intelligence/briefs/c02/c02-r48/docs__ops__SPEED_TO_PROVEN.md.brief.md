# docs/ops/SPEED_TO_PROVEN.md
## What it is (1-2 sentences)
A short machine-runbook on what actually advances the engine toward PROVEN status (filtered selective publish, score bake-offs, settlement/metric crons, shipped v5.2.0 modelProb features) and what does not (recalibration tricks like Platt/isotonic/DP, lowering floors, dashboard clicks, waiting without filtering).
## Key metrics/methods (formulas where given, else "not specified")
- Score bake-off: confidence vs edge vs blend vs independent_trueProb / blend_indep_conf (formulas not specified).
- Historical projection of filtered Res via ops `provenPathProjection` (formula not specified).
- Floors pass → GREEN×3 → AUTO_PUBLISH once (threshold values not specified).
- Trigger rule: if RES still < 0.02 after independent settle sample → ship sport-specific models (see ENGINE_RESOLUTION_HARD_STOP.md).
- Shipped v5.2.0: independent modelProb priced into ranking — Poisson + Elo from TeamGameLog; SPEAK/LEAN → rankingScore.
- Isotonic: offline bake-off only (apply OFF); never publish reliability plots as "proven accuracy" while RED.
## Data sources named
- TeamGameLog (Poisson + Elo modelProb inputs).
- Settlement + calibration-metrics crons.
- reliability-plot-data.ts for internal charts.
- References ENGINE_RESOLUTION_HARD_STOP.md.
## Findings (numbers and facts, not vibes)
- Platt / isotonic / DP improve REL only; Res≈0 stays — they do not speed PROVEN. (TRUST-SIGNAL)
- Lowering floors is forbidden. (TRUST-SIGNAL)
- "Waiting without filter — filter is on; still need better ranking or more filtered settles." (OTHER)
- Step-by-step machine loop: publish high-conviction + non-paused groups → settle-picks on game finish → calibration-metrics → if projected Res lifts but live still low, keep filter, more time → if projection pathViable=false, ship modelProb features (code, not ceremony) → floors pass → GREEN×3 → AUTO_PUBLISH once. (OTHER)
- INFERENCE: the RES < 0.02 trigger and GREEN×3→AUTO_PUBLISH ladder are engine promotion-gate facts consistent with the alignment context (total-signal wiring promotion gate). (INFERENCE)
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Resolution (Res) as the binding metric for PROVEN; calibration tricks that don't move Res are theater — TRUST-SIGNAL
- AUTO_PUBLISH gated on GREEN×3 with floors — TRUST-SIGNAL, OTHER
- No QB-BEHAVIOR, COACHING, OL, or SCHEME content.
## Engine-actionable? (yes — adopt the Res-first rule: improvements must move resolution (RES), not just reliability; tie any future AUTO_PUBLISH promotion gate to sustained filtered Res (GREEN×3 precedent).)
