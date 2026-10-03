# ops/C7_OFFLINE_SOURCE_BIAS.md
## What it is (1-2 sentences)
One-page stub for an offline source-bias / feature-hygiene harness scaffold (measurement only) intended to flag bad feature columns before they reach production.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — the harness is meant to flag high missingness, near-constant, and market-leakage-suspect columns, but no thresholds, formulas, or measurements are given in this file.
## Data sources named
Real feature-store snapshots (not yet run — "Next: Run against real feature-store snapshots"); parked until the MLB join exists.
## Findings (numbers and facts, not vibes)
- This file contains no actionable content: it is a scaffold pointer (code at `apps/web/lib/features/offline-source-bias-hygiene.ts`, tests at `apps/web/lib/features/offline-source-bias-hygiene.test.ts`) with run instructions, no measurements, and no results. [OTHER]
- Standing rule recorded here: no production feature drops without founder OK. [TRUST-SIGNAL]
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
Findings tagged OTHER and TRUST-SIGNAL; no QB-BEHAVIOR, COACHING, OL, or SCHEME content present.
## Engine-actionable? (yes/no + one-line what)
No — measurement-only scaffold with no thresholds, no runs against real data, and nothing yet found.
