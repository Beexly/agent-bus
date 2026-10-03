# docs/ops/CURRENT_STATE.md

## What it is (1-2 sentences)
A state-of-the-engine snapshot dated 2026-08-10 (model v5.2.6) recording gate-law values, live calibration metrics, shipped calibration R&D steps (sliding-window OGD, Hedge adaptive delta, isotonic bake-off, Brier steps), a Brier improvement path, and founder-only vs agent-doable remaining work.

## Key metrics/methods (formulas where given, else "not specified")
- Shipped calibration R&D: Online Gradient Descent (Beta OGD, Brier-OGD ensemble, Hedge δ, OCO pipeline, sliding-window OGD + metrics analysis); isotonic regression explored but prefer_parametric chosen (do NOT apply); mapBakeoff result prefer_parametric, plateau ~98%, T≈1.21, apply OFF.
- Selective filter: ON with δ=0.08; RANKING_PAUSE_APPLY durable ON (MLB ML+SPREAD founder-yes), env default OFF; MODEL_VERSION v5.2.6; ranking polarity never edge-as-p; free-path ABSENT-only for books.
- INFERENCE: eligibility n ~339 appears to be the settled pick count under the filters above, but the file does not state its composition.

## Data sources named
Production /api/health, /api/ops/public-surface-truth, the calibration-metrics cron (40 */6 * * *), BRIER_IMPROVEMENT_STEPS.md, SLIDING_WINDOW_OGD.md, HEDGE_ADAPTIVE_DELTA.md, RES_CALIBRATION_AND_OCO.md.

## Findings (numbers and facts, not vibes)
- Live calibration metrics: Brier 0.2478 vs floor 0.22 → RED; ECE 0.0357 vs floor 0.05 → GREEN; Murphy RES 0.0048 vs ~0.03 needed → thin; independent coverage ~65% ML/SPREAD; consecutiveGreen 0 of 3 → blocked; settlement HEALTHY; odds SLA within; money path 6/6 ready; pause apply durable on 2 groups (MLB ML+SPREAD). [TRUST-SIGNAL]
- Eligibility RED is correct; do not claim PROVEN. [TRUST-SIGNAL]
- Law: LIVE_BOARD off, PERFORMANCE_STATS_ENABLED off, PUBLISH_LEDGER off; PUBLIC_PICKS_ENABLED observed ON 2026-09-02 on the truth surface — an observation, not a founder YES, with FORCE_NO_BET_IF_STALE=true confirmation still pending. [OTHER]
- Brier path: independents + selective + pause as primary RES source; accumulate settles under that filter; shadow RES-cal/OCO only if underconfident + REL guard; maps last; never free stretch. [TRUST-SIGNAL]
- Founder-only blockers named: one checkout smoke, optional Odds API key, durable pause expansion (MLS if still dead), and do not flip PERFORMANCE_STATS/maps/AUTO_PUBLISH while Brier RED. [OTHER]
- Closed items: dual-path odds + ESPN tertiary, trueProb backfill + market-anchor, integrity δ + segmented Murphy, cron dual auth, waitlist→pricing CTA, isotonic apply, free stretch. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Independent coverage ~65% ML/SPREAD is the raw material for the independently-priced-settles lane — the foundation of verifiable calibration claims (TRUST-SIGNAL).
- Selective δ=0.08 + durable pause on MLB ML+SPREAD defines the current resolution (RES) strategy — sport|market segmentation that the engine's adjustment layer must respect (OTHER).
- The "shadow first, maps last, never free stretch" sequencing is the calibration-state labeling doctrine: uncalibrated signals compute in shadow, never publish (TRUST-SIGNAL).

## Engine-actionable? (yes/no + one-line what)
yes — adopt the independent + selective (δ=0.08) + durable-pause Brier path as the standing RES-improvement order, and treat Murphy RES vs the 0.03 target as the live read on model resolution.
