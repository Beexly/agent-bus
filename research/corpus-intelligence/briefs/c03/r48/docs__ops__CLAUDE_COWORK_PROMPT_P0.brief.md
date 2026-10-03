# docs/ops/CLAUDE_COWORK_PROMPT_P0.md

## What it is (1-2 sentences)
A founder-only environment/operations task document for a Claude cowork session: it lists the Neon gse-postgres connection URLs, CRON_SECRET, and smoke-test curls for live verification — with an explicit refuse list (no gate flips, no LIVE_BOARD changes) scoping what the session may not touch.

## Key metrics/methods (formulas where given, else "not specified")
not specified (environment task doc; no metrics or formulas)

## Data sources named
- Neon gse-postgres (connection URLs; credential metadata only — no values reproduced here)

## Findings (numbers and facts, not vibes)
- Contains Neon gse-postgres URLs and CRON_SECRET as environment for the session (credential metadata only; values not reproduced in this brief).
- Includes smoke-test curls for live verification of the deployment.
- Explicit refuse list: the session must not flip gates and must not touch LIVE_BOARD.
- Founder-only scope: environment configuration and gate-adjacent operations are founder calls, consistent with the ledger's law 3 (floors/gates/env founder-only).

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Refuse list (no gate flips, no LIVE_BOARD) — founder-only authority over gates and the live board is a standing constraint across the corpus.
- [OTHER] Smoke curls for live verification — deployment checks are procedural and documented, not ad hoc.
- [TRUST-SIGNAL] Credentials used transiently for verification, never stored or reproduced — consistent with the credential-handling rules in the standing context.

## Engine-actionable? (yes/no + one-line what)
No — founder-only ops/environments doc; no engine logic, metrics, or methods to adopt.
