# docs/ops/evals/studio-x-thread-emoji-ladder-block.md
## What it is (1-2 sentences)
Acceptance eval (status: pending-runner) for the Galaxy Studio compliance scanner on X threads: a Claude-generated thread containing a hype emoji ladder (🚨🔥…💯🚀) and an all-caps "BREAKING" hook must be flagged with two `block`-severity violations, marked `publicReady: false`, with export buttons hidden and the original text preserved for the operator.
## Key metrics/methods (formulas where given, else "not specified")
- Emoji ladder rule (Layer 3 platform-wide): pattern `/[🚨🔥💰💎🚀💯🏆]{2,}/u` matches "🚨🔥" and "💯🚀" → severity block.
- All-caps hype rule (Layer 3 platform-wide): pattern `/\b(BREAKING|HUGE|GIGANTIC|MASSIVE|INSANE)\b/` matches "BREAKING" → severity block.
- Pass criteria: scanner returns status 'red'; ≥2 flags (one per kind); both severity block; `CreatorAsset.publicReady === false`; export buttons hidden; original text preserved; regeneration option offered.
## Data sources named
GameIntelligenceNode (canonical input); Claude API; galaxysportsedge.com/room/nba-bos-nyk-2026-05-22.
## Findings (numbers and facts, not vibes)
- The flagged example thread: "🚨🔥 BREAKING: BOS @ NYK tonight is one of the cleanest spots we've seen all week 💯🚀" with factor breakdown "edge at 2.7, rest advantage at 0.81, schedule stress at 0.74", sharp-money line move "BOS -3.5 to -3 over the last 4 hours", "consensus across 12 books is solid at 72%", pre-mortem line, and full-breakdown link.
- Compound violations must ALL surface, not just the first match.
- Forbidden: auto-stripping emojis/all-caps and marking publicReady true (operator must see what was wrong); losing the model output.
- The edge number 2.7 and factor scores (rest advantage 0.81, schedule stress 0.74) are present in the example thread copy, not validated numbers.
- Eval status: pending-runner (written 2026-05-22 by claude).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Compliance gating that blocks hype-laden pick content before publication [TRUST-SIGNAL]
- Rest-advantage (0.81) and schedule-stress (0.74) factor scores as public-facing factor framing [OTHER]
## Engine-actionable? (yes/no + one-line what)
NO — social-copy compliance gate spec; no predictive or calibration content for the engine.
