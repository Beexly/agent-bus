# fable/aws/sagemaker-adrs/ADR-0004-when-to-use-model-registry.md
## What it is (1-2 sentences)
An architecture decision record (ADR-0004) that decides whether to adopt the SageMaker Model Registry now or later: decision is "use model-card docs now; registry later."

## Key metrics/methods (formulas where given, else "not specified")
not specified. Gates are procedural, not quantitative:
- Use-when conditions: (a) versioned model artifact exists; (b) approval workflow exists; (c) rollback target exists.
- Additional gates: replay metrics and lineage attached; model card exists locally first; promotion/demotion workflow documented.
- Why-not-now: current work is evidence harness and local primitives; no SageMaker model artifact exists.
- Rollback path: local model card and commit hash.
- Owner approval needed: yes.

## Data sources named
None.

## Findings (numbers and facts, not vibes)
- ADR number: 0004 (implies a series of at least 4 SageMaker adoption ADRs).
- Decision: model cards now, registry later — the registry is rejected now specifically because no SageMaker model artifact exists.
- Six explicit gates/conditions total (3 use-when + 3 additional), all procedural.
- Rollback does not require any AWS artifact: local model card plus commit hash suffices.
- Owner approval is required.
- No numbers, dates, costs, accuracy figures, or thresholds are stated.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- The "model card exists locally first" gate — TRUST-SIGNAL: model cards (local, commit-hash-pinned, with replay metrics and lineage attached) are the unit of model governance before any cloud registry; this is the documentation pattern any engine model promotion should follow. Serves calibration/sizing (model provenance for pick claims).
- "Rollback target exists" / local model card + commit hash as rollback — OTHER: a versioned, reproducible model-artifact discipline the engine wiring lane should inherit — every promoted model has a commit-pinned card. Serves the total-signal wiring program's promotion gate mechanics.
- "Why not now: current work is evidence harness and local primitives" — OTHER: an explicit statement that the current program state is harness/local, not cloud ML — aligns with Garrett's 2026-09-28 all-day autonomous wiring mode (local-first, proven before cloud).
- No connections to QB-BEHAVIOR, COACHING, OL, or SCHEME.

## Engine-actionable? (yes/no + one-line what)
yes — Adopt the model-card-local-first pattern for any engine model: card + commit hash + replay metrics/lineage before any promotion; registry is not a blocker.

## Referenced files/papers/datasets named
None (the ADR implicitly belongs to the `docs/fable/aws/sagemaker-adrs/` ADR series; no explicit cross-references stated).
