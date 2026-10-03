# docs/ops/evals/studio-newsletter-block-citation-discipline.md
## What it is (1-2 sentences)
An eval spec (status: pending-runner) for the galaxy-studio NEWSLETTER_BLOCK template, testing that a generated newsletter block stays evidence-bound and citation-disciplined: exactly one Game Intelligence Room link, every market claim cited from the GameIntelligenceNode, no betting-certainty or sportsbook-superiority language, compliance scan green.
## Key metrics/methods (formulas where given, else "not specified")
- Input fixture: DUKE @ UNC, NCAAB, 2026-05-22T23:00:00Z; Edge Index 1.9; evidence health B; 11 books reporting; Market Pulse consensus 64%, line movement -1.5 over 90 minutes; pre-mortem with rest/market-depth/late-news risks; pick UNC -2.5 at 69% confidence (WATCH).
- Pass criteria: word count 350–650; exactly one `/room/` link; every consensus/line-movement/market-depth claim carries a local evidence citation; output does NOT match `/\b(must bet|hammer|lock|tail this|guarantee|guaranteed)\b/i`; does NOT match `/\b(best book|sharpest lines?|cheapest juice|lowest hold|fastest payouts?)\b/i`; at least one pre-mortem risk in final paragraph; scanner status green.
## Data sources named
GameIntelligenceNode (Edge Index, evidence health, Market Pulse, pre-mortem, attached pick); Claude-generated 500-word draft.
## Findings (numbers and facts, not vibes)
- Output may discuss line and market movement but must not claim the pick should be tailed, hammered, or played; must not compare sportsbooks or make sponsor claims; must end with a restrained "watch what changes" note tied to the pre-mortem.
- Created 2026-05-22 by codex; pending-runner status.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Consensus 64% and -1.5 line movement over 90 minutes across 11 books as structured market features — OTHER (market-data shape)
- Pre-mortem risks (rest, market depth, late news) required in output — TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
No — eval spec for newsletter generation discipline, not engine signal or method.
