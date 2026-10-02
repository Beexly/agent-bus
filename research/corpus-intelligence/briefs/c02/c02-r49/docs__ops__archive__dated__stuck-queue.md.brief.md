# docs/ops/archive/dated/stuck-queue.md

## What it is (1-2 sentences)
The escalation log for items blocked on owner action — when a task fails after retries/review rounds, hits spec ambiguity, a commercial decision, schema break, external blocker, or plan conflict, it lands here with what's blocked, what's been tried, what's needed, time blocked, and dependents. Resolved items are removed and logged in `decision-log.md`.

## Key metrics/methods (formulas where given, else "not specified")
Auto-flag rules: after 24h blocked → title marked "urgent"; after 48h blocked → ping owner via separate channel. Each item records wall-clock time blocked plus dependents. No formulas.

## Data sources named
None. The file is an internal process log (escalations from Codex/Claude/owner), not a data source.

## Findings (numbers and facts, not vibes)
- **Current escalations: None as of 2026-05-22.**
- Phase 0 had not yet completed at the time of that snapshot.
- No resolved items are listed in the file.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Empty escalation queue / disciplined block-resolution hygiene: **OTHER** (ops process)

## Engine-actionable? (yes/no + one-line what)
No — process-hygiene log with zero escalations recorded; nothing for the engine.
