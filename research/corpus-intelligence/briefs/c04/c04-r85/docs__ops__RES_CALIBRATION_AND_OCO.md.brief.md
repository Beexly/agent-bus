# docs/ops/RES_CALIBRATION_AND_OCO.md
## What it is (1-2 sentences)
Design doc (updated 2026-08-10, Apply OFF, all modules Shadow) for RES-aware calibration and Online Convex Optimization on top of the pick model: calibration maps may only expand underconfident probabilities when outcome-fitted under a REL guard, plus an OCO pipeline (online beta → Brier-OGD ensemble → hedge over delta) targeting Brier ≤ 0.22.
## Key metrics/methods (formulas where given, else "not specified")
- Calibrated identity: BS = UNC − Var[P]; minimizing Brier ⇔ maximizing RES under REL≈0.
- Online beta recalibration: OGD on (a,b) for g=σ(a·logit p+b) under log-loss (convex).
- fitResAwareBeta: grid maximize validation RES subject to REL ≤ 0.015 + λ(a−1)².
- Brier-OGD ensemble: simplex OGD on Brier for ensemble weights.
- Adaptive delta hedge: hedge experts over δ candidates; sit-out loss ≈ 0.25.
- Free stretch p′=0.5+k(p−0.5) without outcomes = forbidden.
- Promotion path: GREEN×3 only on live eligibility floors — never on shadow alone; RES-cal only when holdout REL holds and RES gain is real.
- Primary RES driver: independents + selective + pause; integrity check: BS_paused ≈ UNC.
## Data sources named
`public-surface-truth` (the mapBakeoff evaluation surface). References BRIER_OPTIMIZATION_TECHNIQUES.md and MURPHY_RES_AND_BRIER_MIN.md.
## Findings (numbers and facts, not vibes)
- Claim: maps cannot invent ranking from pure market-echo noise; they can raise Var[P_cal]=RES when the raw model is underconfident (mass squeezed toward 0.5) and the true posterior is sharper — provided expansion is outcome-fitted under a REL guard (never free stretch).
- Seven modules all Shadow status as of 2026-08-10: online-beta-recalibration, fitResAwareBeta, brier-ogd-ensemble, adaptive-delta-hedge, oco-pipeline, online-beta-sliding-window, adaptive-delta-analysis; map bake-off runs via offline cron.
- Ops surface tracked: resAwareSelected / resAwareA / resAwareResGain / onlineBetaA / ocoPublishedRes / ocoRecommendedDelta / slidingWindowA / slidingDeltaA / slidingExpansionPreferred / hedgeRecommendedDelta / hedgeIntegrityStatus / hedgeRegret.
- Law: live `resolveLiveCalibrationP` stays map-free; CALIBRATION_ADJUSTMENTS_ENABLED / PERFORMANCE_STATS / AUTO_PUBLISH not flipped (as of the doc's update date).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL — the RES/REL/Brier decomposition (BS = UNC − Var[P], REL guard ≤ 0.015) is the formal calibration framework for judging any probability output of the engine.
- SCHEME — pipeline sequence Beta → ensemble → Hedge δ → updates is a candidate for the engine's calibration stage per the wire-first ordering.
- OTHER — "maps cannot invent ranking from pure market-echo noise" is a constraint on over-claiming calibration gains; "GREEN×3 only on live eligibility floors, never on shadow alone" is a promotion gate relevant to any model launch.
## Engine-actionable? (yes/no + one-line what)
Yes — lift the REL ≤ 0.015 grid-search RES-maximization objective and the shadow-first promotion gate as the calibration module's acceptance criteria once live probability outputs exist.
