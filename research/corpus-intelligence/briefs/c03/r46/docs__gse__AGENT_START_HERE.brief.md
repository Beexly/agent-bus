# docs/gse/AGENT_START_HERE.md
## What it is (1-2 sentences)
A six-step agent bootstrap checklist for the GSE lane: read the complete agent package, pull main and run a cron every 30 minutes, merge PRs #220 → #218 → #219 → #224 → #223, prefer #224 over #222's destructive index, hold Phase C until Odds is paid, and never touch LIVE_BOARD, widen the 6h window, or invent quotes.
## Key metrics/methods (formulas where given, else "not specified")
not specified — operational checklist only.
## Data sources named
None (internal repo artifacts: PRs #220, #218, #219, #224, #223, #222; docs/gse/FINAL_COMPLETE_AGENT_PACKAGE.md).
## Findings (numbers and facts, not vibes)
- Bootstrap sequence: (1) read `docs/gse/FINAL_COMPLETE_AGENT_PACKAGE.md`, (2) `git pull main`; cron every 30 min, (3) merge PRs in order #220 → #218 → #219 → #224 → #223, (4) prefer #224 over #222's destructive index, (5) Phase C gated on Odds payment, (6) hard prohibitions: no LIVE_BOARD, no widening 6h window, no inventing quotes.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- "Never invent quotes" prohibition → [TRUST-SIGNAL: anti-fabrication rule for agent output]
- PR merge order #220 → #218 → #219 → #224 → #223 with #224 preferred over #222 destructive index → [OTHER: repo hygiene sequencing]
## Engine-actionable? (yes/no + one-line what)
no — onboarding checklist, not a signal or model input.
