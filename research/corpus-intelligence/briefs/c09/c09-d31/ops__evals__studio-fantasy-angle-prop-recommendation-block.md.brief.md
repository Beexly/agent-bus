# ops/evals/studio-fantasy-angle-prop-recommendation-block.md
## What it is (1-2 sentences)
An eval spec (status: pending-runner, created 2026-05-22 by codex) for the Galaxy Studio `FANTASY_ANGLE` template: Claude API must produce a 200-350-word player-level fantasy analysis that treats prop movement as context, never as an instruction. Defines the DAL @ PHI fixture, expected output properties, and banned-vocabulary pass criteria.
## Key metrics/methods (formulas where given, else "not specified")
- Fixture: DAL @ PHI NFL 2026-09-13T20:25:00Z, evidence health A, PHI WR1 receiving-yards prop moved 64.5 → 70.5, pick attached PHI -2.5 at 71% confidence (SOLID_PLAY), player context includes target share, pace, defensive coverage rate, injury status.
- Pass criteria: 200-350 words; ≥2 named players referenced; ≥1 player-level signal (usage, target share, pace, matchup, injury status, prop movement); no matches on `/\b(play this prop|fade this player|take the over|hammer this prop|smash this player)\b/i`; no certainty language (`lock|guarantee|sure thing|cannot miss`); no `EV|Kelly|win rate|bankroll|unit size`; compliance scanner `getRulesForTemplate('FANTASY_ANGLE')` returns `green`.
## Data sources named
Fixture `GameIntelligenceNode` only: Market Pulse (prop movement), Slate Weather, Pick, player-level context fields.
## Findings (numbers and facts, not vibes)
- Prop movement (64.5 → 70.5 receiving yards on PHI WR1) is to be described as context only — prop-movement-as-instruction is banned behavior.
- Fantasy angle must name 2-3 players whose outlook changed and include at least one season-long implication when supported.
- Fantasy lens must never become a pick promotion; no claim Galaxy is making lineup decisions for the user.
- Status `pending-runner`: never executed at time of writing (INFERENCE from status field).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — content/compliance eval spec for fantasy editorial output; player-level signals (target share, pace, coverage rate) are model inputs in the fixture but the file analyzes none of them as football intelligence.
## Engine-actionable? (yes/no + one-line what)
No — unexecuted editorial compliance spec; notes the player-signal fields the engine's node schema carries (target share, pace, defensive coverage rate).
