# docs/fable/github/ISSUE_10_SOURCE_RIGHTS_SCHEMA_VALIDATION.md

## What it is (1-2 sentences)
A GitHub issue tracking source-legal schema validation for the Fable system: making source/legal boundaries machine-readable through schemas and validators so that an unknown rights status is never treated as allowed.

## Key metrics/methods (formulas where given, else "not specified")
not specified — the issue lists acceptance criteria rather than formulas: the source registry adapter must validate required fields, unknown commercial/storage/redistribution statuses must be blocked, and schema docs must be linked. Test plan: `npm run fable:sources`.

## Data sources named
- `apps/web/lib/fable/source-registry.ts` (source registry adapter)
- `apps/web/lib/fable/evidence/validators.ts` (validators)
- `schemas/fable/source-registry-entry.schema.json` (entry schema)

## Findings (numbers and facts, not vibes)
- [TRUST-SIGNAL] Governing rule: unknown source-rights status must not be treated as allowed — the validator must explicitly block unknown commercial/storage/redistribution statuses.
- [OTHER] Acceptance criteria: (1) registry adapter validates required fields, (2) unknown statuses blocked, (3) schema docs linked.
- [OTHER] Named risk: registry fields can drift (i.e., schema and data can diverge over time).
- [OTHER] Open owner decision: the legal-review marker process is not yet defined.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: enforce default-deny on unknown data-source rights — matches the engine's ingest-and-learn doctrine (restricted data is learned from, never shipped).
- OTHER: this is internal data-governance tooling, not a predictive signal.

## Engine-actionable? (yes/no + one-line what)
yes — keep the default-deny unknown-status rule as a template for any data-intake validator the engine adds.
