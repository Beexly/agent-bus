# prediction-engine.md
## What it is (1-2 sentences)
The prediction engine's design doc: a deterministic, data-driven statistical model (explicitly NOT an AI/LLM system) that converts raw odds data into ranked picks with 0–100 confidence scores and FREE/PREMIUM tiers. A 2026-06-30 update corrects the doc's stale formula sketch against packages/prediction-engine/src/constants.ts, the declared source of truth.
## Key metrics/methods (formulas where given, else "not specified")
Original formula (stale, superseded per constants.ts):
```
confidence = base_score + movement_bonus + consensus_bonus + market_depth_bonus
base_score = normalize(implied_probability, 0, 100)
movement_bonus = abs(line_movement) * movement_weight (max +15)
consensus_bonus = (consensus_pct - 0.5) * 2 * 20 (max +20, only if > 60%)
market_depth_bonus = min(bookmaker_count / 10, 1) * 10 (max +10)
Final confidence clamped to [0, 100]
```
Actual maxima per WEIGHTS in constants.ts (2026-06-30 verified): CONSENSUS_COMPONENT_MAX = 30, MARKET_DEPTH_COMPONENT_MAX = 20, EDGE_COMPONENT_MAX = 25, LINE_MOVEMENT_COMPONENT_MAX = 15, VOLATILITY_PENALTY_MAX = -15; plus HEAD_TO_HEAD_COMPONENT_MAX = 5, VENUE_FORM_COMPONENT_MAX = 5, UNCERTAINTY_PENALTY_MAX = -8, CROSS_MARKET_AGREE_BONUS = 4, CROSS_MARKET_DISAGREE_PENALTY = -3, SCHEDULE_STRESS_COMPONENT_MAX = 5.
## Data sources named
Raw odds data (current line, line movement, bookmaker count, consensus); historical model performance on similar games; packages/prediction-engine/src/constants.ts (MODEL_VERSION, WEIGHTS — the source of truth); scores API for settlement.
## Findings (numbers and facts, not vibes)
- MODEL_VERSION constant is "v5.1.0"; v5.1.0 activated isotonic calibration on 2026-06-22. The pick-schema comment showing "v1.0.0" is stale.
- Tier thresholds verified ACCURATE against constants.ts: PREMIUM_CONFIDENCE_THRESHOLD = 70 (>= 70 → PREMIUM), MIN_PUBLISH_CONFIDENCE = 50 (50–69 → FREE with confidence hidden, < 50 → not published).
- Pick types: SPREAD, MONEYLINE, TOTAL. Audit trail per pick: ingestionRunId, modelVersion, generatedAt, createdBy (system or admin).
- Historical performance tracked per sport, league, pick type, tier, model version; published on public performance page; new model versions do not overwrite old version picks.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: SCHEME-adjacent only in that schedule-stress (rest/scheduling edges) is a real +5 component and cross-market agreement/disagreement is +4/−3; the doc is the engine's own scoring spec, not external sports intelligence.
## Engine-actionable? (yes/no + one-line what)
yes — treat constants.ts as the single source of truth for all component weights and thresholds (never the doc's stale sketch) when wiring or calibrating the scoring path.
