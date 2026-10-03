# docs/statking-failure-modes.md
## What it is (1-2 sentences)
Artifact from the Codex hardening sprint (2026-06-13) documenting StatKing's failure modes — a brutal audit plus the implemented foundation and Claude-next UX instructions.
## Key metrics/methods (formulas where given, else "not specified")
Not specified (the file is near-identical in content to `source-trust-model.md`: same counts and audit text). Implemented foundation: 546 seeded sources, 800 candidate records, 500,000 candidate capacity, 2,200 discovery queries, 800 metric definitions.
## Data sources named
None named specifically; needs named: licensed route, pressure, coverage, tracking, PFF-like grades, trenches data (contracts or first-party charting).
## Findings (numbers and facts, not vibes)
- CRITICAL: active, legally usable data coverage remains smaller than the seeded source universe.
- HIGH: premium UX must explain trust, coverage, conflicts, and missing data in ten seconds; licensed route + pressure/coverage/tracking/PFF-like-grades/trenches data need contracts or first-party charting.
- MEDIUM: backtesting and model proof are scaffolded with fixtures and need historical production predictions.
- Standing instruction: do not change the source-gated architecture; audit UI against the King Standard scorecard.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OL/TRUST-SIGNAL: duplicates the source-trust-model gaps — trenches data and pressure/coverage feeds remain contract-dependent for OL intelligence.
- TRUST-SIGNAL: "explain trust, coverage, conflicts, and missing data in ten seconds" is the UX bar for any engine data shown to users.
## Engine-actionable? (yes/no + one-line what)
No — restates the same audit as source-trust-model.md; engine-actionable gaps (trenches contracts, production backtests) already captured in that brief.
