# docs/source-trust-model.md
## What it is (1-2 sentences)
Artifact from the Codex hardening sprint (2026-06-13): a brutal audit of StatKing's source/data coverage plus an implemented foundation and handoff instructions for a Claude UX pass.
## Key metrics/methods (formulas where given, else "not specified")
Not specified. Implemented foundation counts: 546 seeded sources, 800 candidate records, 500,000 candidate capacity, 2,200 discovery queries, 800 metric definitions; foundations built: coverage, source trust, conflict, freshness, proof, comps, archetypes, alerts, versioning, competitive, king-standard.
## Data sources named
None named specifically; licensed routes named as needs: pressure, coverage, tracking, PFF-like grades, trenches data (contracts or first-party charting needed).
## Findings (numbers and facts, not vibes)
- Brutal audit: CRITICAL — active, legally usable data coverage is smaller than the seeded source universe; HIGH — licensed route + pressure/coverage/tracking/PFF-like-grades/trenches data need contracts or first-party charting; MEDIUM — backtesting and model proof are scaffolded with fixtures and need historical production predictions.
- Claude-next instruction: make the product feel inevitable and premium; do NOT change the source-gated architecture.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OL/TRUST-SIGNAL: the trenches-data gap (licensed route or first-party charting) is the named missing piece for OL intelligence — pressure/coverage data needs a contract.
- TRUST-SIGNAL: the trust/conflict/freshness/proof foundation is the engine's data-integrity substrate; "don't pretend blocked/fixture data is active" is the integrity rule.
## Engine-actionable? (yes/no + one-line what)
Partial — no new method here, but it confirms two engine-relevant gaps as open: (1) trenches/pressure/coverage data needs a contract or first-party charting; (2) backtesting needs historical production predictions, not fixtures.
