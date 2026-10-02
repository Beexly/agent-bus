# media-intelligence-engine.md
## What it is (1-2 sentences)
A very short foundation note (8 lines) defining the Media Intelligence Engine as the Source Graph + Media Intelligence hardening layer: sources are rights-gated before any display, storage, redistribution, training, or expert-signal conversion, and candidate scale is modeled at 500,000+ URLs with paginated review.

## Key metrics/methods (formulas where given, else "not specified")
- Candidate scale: modeled for 500,000+ URLs with paginated review and triage.
- Record states kept distinct: active/open, activation/license, reference, and candidate-only records.
- Next step named: replace generated fixtures with authorized production feeds and premium UX.
- No formulas, no methods detailed (not specified).

## Data sources named
- None named. The note speaks of "authorized production feeds" as a next step, replacing "generated fixtures" — but no specific feeds, URLs, or providers are listed.

## Findings (numbers and facts, not vibes)
- The Media Intelligence Engine is treated by "StatKing" as part of the Source Graph + Media Intelligence hardening foundation (this is a repo-internal note; StatKing appears to be a builder/persona reference within the codebase, not a dataset).
- Rights-gating is a pre-condition across five downstream uses: display, storage, redistribution, training, expert-signal conversion — i.e., a source can be ingested for candidate/triage but cannot cross into any user-visible or model-training use without clearance.
- Record states: active/open, activation/license, reference, candidate-only — kept distinct (matches the SiriusXM memo's registry-flag pattern; INFERENCE: this is the same registry model).
- "Premium UX" is named as the target for the feed experience after fixtures are replaced.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **TRUST-SIGNAL**: Rights-gating before display/storage/training/expert-signal conversion is the trust backbone — the same doctrine that gates performance stats behind ≥100 settled signals and attributes manual listener claims; it is the intake-side half of the honesty architecture.
- **OTHER**: Source-ops/scale planning — 500,000+ URL candidate scale with paginated review/triage is the only concrete scale number for the source graph; four-state record taxonomy is the operational model for source management.
- No QB-BEHAVIOR, COACHING, OL, or SCHEME content.

## Engine-actionable? (yes/no + one-line what)
No — thin architectural note, not methodology; actionable only as the rights-gating invariant the engine's source pipeline must implement (no source feeds display/training/model use without clearance state).
