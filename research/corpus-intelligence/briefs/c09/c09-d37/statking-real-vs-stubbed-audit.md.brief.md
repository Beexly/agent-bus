# statking-real-vs-stubbed-audit.md
## What it is (1-2 sentences)
A 2026-06-13 accounting of which StatKing subsystems are real versus stub/partial, with merge blockers for product launch (live authorized NFL feeds, ungated vendor adapters, historical backtest proof).
## Key metrics/methods (formulas where given, else "not specified")
Not specified — categorical counts only: 9 real working systems, 6 partially working, 11 stub-only, 0 fixture-only, 0 docs-only.
## Data sources named
None named; "live authorized NFL data feeds" required but unspecified.
## Findings (numbers and facts, not vibes)
- Real working systems: 9; partially working: 6; stub-only: 11; fixture-only: 0; docs-only: 0.
- Merge blockers: live authorized NFL feeds required for production-grade claims; vendor adapters gated until contracts/API keys exist; backtesting proof is fixture-backed, not historical prediction proof.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: backtesting integrity — fixture-backed proof flagged as insufficient, historical production predictions required (relevant to engine proof layer).
## Engine-actionable? (yes/no + one-line what)
No — systems-readiness audit; no modeling intelligence, but reinforces the historical-prediction-proof requirement.
