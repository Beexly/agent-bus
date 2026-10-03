# fable/red-team/PRE_MERGE_KILL_SWITCHES.md
## What it is (1-2 sentences)
An 8-item pre-merge kill-switch checklist that blocks a merge when any guardrail fires — covering evidence harness health, unsupported-claim scanning, secret hygiene, AWS gate defaults, source-registry strictness, and report honesty.
## Key metrics/methods (formulas where given, else "not specified")
not specified
## Data sources named
None.
## Findings (numbers and facts, not vibes)
Stop merge if any of: `npm run fable:evidence` fails; the unsupported claim scanner fails; secret guard fails; AWS gates are default on (instead of default off); the source registry validator treats unknown sources as allowed; the final report omits a typecheck failure; docs imply live AWS resources; docs imply model-performance gain without replay evidence. That last item — "docs imply model-performance gain without replay evidence" — is the anti-hype gate.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the kill switches are an integrity apparatus — unknown-as-allowed registry behavior, hidden typecheck failures, and implied performance gains each independently block merge.
## Engine-actionable? (yes/no + one-line what)
no — CI/merge process guardrails, not engine methods; worth noting only as the standard that "implied model-performance gain without replay evidence" is a hard merge block.
