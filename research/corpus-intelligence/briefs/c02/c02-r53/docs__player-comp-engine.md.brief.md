# docs/player-comp-engine.md
## What it is (1-2 sentences)
A dated status snapshot (2026-06-13) of the Player Comp Engine as produced by a Codex hardening sprint: a "brutal audit" of gaps, an implemented-foundation inventory, and a handoff note to Claude on the UX/trust layer. No code, no methodology beyond counts.
## Key metrics/methods (formulas where given, else "not specified")
Not specified (no formulas). Foundation counts given: 546 seeded sources, 800 candidate records, 500,000 candidate capacity, 2,200 discovery queries, 800 metric definitions.
## Data sources named
None by name; the file references a "seeded source universe" and names data gaps: route, pressure, coverage, tracking, PFF-like grades, and trenches data — each needing licensing contracts or first-party charting.
## Findings (numbers and facts, not vibes)
- Seeded foundation: 546 sources, 800 candidate records, 500,000 candidate capacity, 2,200 discovery queries, 800 metric definitions. [TRUST-SIGNAL]
- Audit severity CRITICAL: "active, legally usable data coverage remains smaller than the seeded source universe" — the usable-data pool is smaller than the inventory implies. [TRUST-SIGNAL]
- Audit severity HIGH: "licensed route, pressure, coverage, tracking, PFF-like grades, and trenches data need contracts or first-party charting" — none of these are currently in-house. [TRUST-SIGNAL, OL]
- Audit severity HIGH: "premium UX must explain trust, coverage, conflicts, and missing data in ten seconds" — a 10-second comprehension target for trust storytelling. [TRUST-SIGNAL]
- Audit severity MEDIUM: "backtesting and model proof are scaffolded with fixtures and need historical production predictions." [TRUST-SIGNAL]
- Architecture note: Claude is told not to change the source-gated architecture; scope is UX hierarchy, naming, metric explanations, and data-confidence storytelling. [OTHER]
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] All substantive findings concern coverage honesty, source trust, conflict/freshness/proof layers, and the need for licensed data contracts.
- [OL] "Trenches data" is named as a licensed-or-chart-it gap relevant to offensive/defensive line evaluation.
- [OTHER] Backtest scaffolding exists but lacks historical production predictions — an engine-state fact, not a signal.
## Engine-actionable? (yes/no + one-line what)
Yes — confirms the engine's data-inventory posture (800 metric definitions seeded, usable coverage smaller than universe, trenches/route/pressure data absent without contracts), which bounds what any player-comp or OL-related model can credibly claim.
