# docs/ops/CLAUDE_CODE_IMAGE_TODOS_2026-08-06.md

## What it is (1-2 sentences)
A closure note from 2026-08-06 recording completion of four free-path settlement tasks (SNAPSHOT drain wiring, RCA residual check, repair-field reporting, CRON_SECRET verification) plus a cost-routing plan for model tiers and free content lanes.

## Key metrics/methods (formulas where given, else "not specified")
not specified

## Data sources named
None (probed production signals only: prod SHA, settlement counters, cron auth probes).

## Findings (numbers and facts, not vibes)
- Settlement healthy: overduePending 0 / 1478. [OTHER]
- Cron unauth probe returns 401 (secret configured and enforced); authenticated 200 path still needed Bearer verification by the founder. [OTHER]
- Gates state: LIVE_BOARD off, StatKing dark, public picks off. [OTHER]
- Model routing configured: brief + calibration-insight = haiku; studio/journal/content/model-court = sonnet; free content lane via CONTENT_FREE_LANE_ENABLED=true + CEREBRAS_API_KEY; free settlement path active when the Odds key is absent. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- No substantive sports-intelligence findings (all tags: none apply — pure infrastructure closure).

## Engine-actionable? (yes/no + one-line what)
no — pure infrastructure note; nothing transferable to prediction modeling.
