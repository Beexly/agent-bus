# docs/fable/validation/EXPERIMENT_LOG.md
## What it is (1-2 sentences)
A four-row experiment log for the FABLE evidence harness lane: two local runs still pending final execution, 18 first-level targeted tests passing, and a workspace typecheck failing on a BigInt target issue slated for a separate fix.
## Key metrics/methods (formulas where given, else "not specified")
not specified — statuses and commands only, no formulas.
## Data sources named
None (internal test/dev commands: `npm run fable:evidence`, `npm run fable:demo`, vitest, workspace typecheck).
## Findings (numbers and facts, not vibes)
- FABLE evidence harness: local, `npm run fable:evidence`, pending final run, decision: required.
- Fixture forensic demo: local, `npm run fable:demo`, pending final run, decision: demo-only.
- First-level targeted FABLE tests: complete, passed 18 tests, decision: keep.
- Workspace typecheck: failed, `npm run typecheck --workspaces --if-present`, root cause BigInt target issue, decision: fix separately.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- 18/18 targeted FABLE tests passing → [TRUST-SIGNAL: test evidence for a verification lane kept in the codebase]
- Typecheck failing on BigInt target issue → [OTHER: build hygiene item, fix queued separately]
- Evidence harness still pending final run → [TRUST-SIGNAL: verification gate is required but not yet executed]
## Engine-actionable? (yes/no + one-line what)
no — test-log intake only; nothing in it is a signal, metric, or wiring target.
