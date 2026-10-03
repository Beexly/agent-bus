# fable/red-team/PRE_MERGE_KILL_SWITCHES.md
## What it is (1-2 sentences)
A terse 11-line red-team checklist of 8 conditions that must each stop a merge of the FABLE evidence integration — an unconditional, no-exceptions kill-switch list.
## Key metrics/methods (formulas where given, else "not specified")
Not specified (no formulas). Method is binary gating: each bullet is a hard stop.
## Data sources named
None named (no datasets, papers, or files referenced by name).
## Findings (numbers and facts, not vibes)
Stop merge if any of the following hold (quoted verbatim):
1. `npm run fable:evidence` fails
2. unsupported claim scanner fails
3. secret guard fails
4. AWS gates default on
5. source registry validator treats unknown as allowed
6. final report omits typecheck failure
7. docs imply live AWS resources
8. docs imply model-performance gain without replay evidence
No numbers, thresholds, or formulas stated anywhere in the file.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: The list is evidence-discipline infrastructure, but clause 8 ("docs imply model-performance gain without replay evidence") is the same doctrine as the calibration/sizing program's ban on unverified improvement claims — it directly backs the standing rule that no module, gate result, or performance claim is actionable without replay/walk-forward evidence. It serves the calibration/sizing program as a gate template.
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the 8 conditions as a template for any evidence-harness or backtest-QA merge gate.
