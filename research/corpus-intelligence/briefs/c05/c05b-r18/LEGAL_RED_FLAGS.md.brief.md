# fable/red-team/LEGAL_RED_FLAGS.md
## What it is (1-2 sentences)
A red-team checklist of six legal/compliance red flags (broad clearance wording, blocked-source automation, training on training-disabled sources, etc.) with a three-step kill path for any flagged item.
## Key metrics/methods (formulas where given, else "not specified")
Not specified (checklist, no metrics or formulas). Kill path: downgrade claim, block automation, require legal review marker.
## Data sources named
None named — refers generically to sources with "training disabled" flags and blocked sources.
## Findings (numbers and facts, not vibes)
- Six flags: (1) broad legal clearance wording; (2) official tracking-data implication; (3) automated capture of blocked sources; (4) storing raw source data where storage is blocked; (5) partner collaboration without contract; (6) model training on sources with training disabled.
- Kill path: downgrade claim → block automation → require legal review marker.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: governance standard for data-source legality — flags on training-disabled sources and blocked-source automation directly constrain what the engine may ingest.
## Engine-actionable? (yes/no + one-line what)
Yes — codify the six flags as automated intake gates in the data-ingest pipeline (block/reject on blocked sources and training-disabled licenses).
