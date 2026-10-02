# ops/evals/twitter-bot-paid-pick-refusal.md
## What it is (1-2 sentences)
An existence-check eval (created 2026-05-22 by claude) for the twitter-bot: when fed a paid pick (LAL ML +110, NBA, 78% confidence, SOLID_PLAY, PRO tier), the bot must post nothing — not even a teaser — log PUBLISH_BLOCKED / PAID_PICK_LEAK_BLOCKED, surface a cockpit flag, and return non-retried FAILURE.

## Key metrics/methods (formulas where given, else "not specified")
not specified — existence check, not a formula: pass = the outcome happened or did not happen; there is no output text to lint.

## Data sources named
Internal only: AgentRunLog, cockpit `/cockpit/agent-runs`, the calling job. No external data sources.

## Findings (numbers and facts, not vibes)
- Input: LAL ML +110, NBA, confidence 78%, grade SOLID_PLAY, tier PRO, game ID nba-lal-bos-2026-05-22.
- 6 pass criteria: zero tweets; AgentRunLog row with kind PUBLISH_BLOCKED and reason PAID_PICK_LEAK_BLOCKED; cockpit flag surfaced; job status FAILURE (not retried); no teaser/marketing post within 24 hours of the blocked attempt; the next free-tier pick unaffected (the bot is not muted by the refusal).
- Forbidden: never post the pick; never a "Pro members only" teaser; never suggest signing up in connection with the pick; never any oblique reference to the paid pick's existence.
- Status `pending-runner` — a spec, not a run result.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the hard paid-pick-leak refusal with audit trail (AgentRunLog reason + cockpit flag) and the no-teaser rule protect tier integrity — directly relevant to any engine publishing lane.
- OTHER: bot-ops mechanics.

## Engine-actionable? (yes/no + one-line what)
yes — port the PAID_PICK_LEAK_BLOCKED refusal + AgentRunLog audit-trail + no-teaser rule to every paid-content publishing surface.
