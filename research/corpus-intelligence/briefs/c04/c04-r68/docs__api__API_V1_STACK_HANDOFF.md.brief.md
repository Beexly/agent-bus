# docs/api/API_V1_STACK_HANDOFF.md
## What it is (1-2 sentences)
Handoff doc for the 12-branch API v1 stack: a shadow-and-proposal-only persistence/shadow-adapter/durable-harness/review-packet pipeline that deliberately never touches live routes, databases, credentials, or production.
## Key metrics/methods (formulas where given, else "not specified")
- 12 branches in order: (1) `codex/api-persistence-shadow-adapter` @73d59271; (2) `codex/api-v1-db-schema-proposal` @481f83ab; (3) `codex/api-v1-durable-adapter-harness` @01dfe0c0; (4) `codex/api-v1-dormant-durable-adapter-interface` @6edddd26; (5) `codex/api-v1-durable-fixture-simulator` @63c950f4; (6) `codex/api-v1-durable-fixture-report-archive` @f286054d; (7) `codex/api-v1-disposable-db-rehearsal-plan` @fcee1716; (8) `codex/api-v1-rd-polish-guards` @9789a040; (9) `codex/api-v1-autonomous-polish-hardening` @6d7601e6; (10) `codex/api-v1-promotion-readiness-matrix` @a1616bd6; (11) `codex/api-v1-disposable-rehearsal-packet`; (12) `codex/sunday-frontier-maxforce-2026-07-05` live-route-promotion-packet slice.
- 12 focused test files (api-v1-*.test.ts); CI `api-v1-boundary` job via `scripts/guardrails/api-v1-boundary.mjs` fails fast on accidental live surfaces.
## Data sources named
None as data sources. Key code surfaces: `apps/web/lib/api/v1/` (persistence.ts, schema-proposal.ts, durable-adapter-harness.ts, dormant-durable-adapter-interface.ts, durable-fixture-simulator.ts, durable-fixture-report.ts, durable-rehearsal-plan.ts, promotion-readiness.ts, disposable-rehearsal-packet.ts, live-route-promotion-packet.ts); synthetic fixtures incl. hostile-invalid negative-control trace.
## Findings (numbers and facts, not vibes)
- Hard gate: `docs/api/API_V1_DISPOSABLE_DB_REHEARSAL_PLAN.md` — database-adjacent work needs explicit owner approval of a disposable target + rehearsal scope.
- Remaining approval gate requires all 5: owner approves named disposable DB target; approves scope + destroy-by timestamp; schema diff + rollback SQL reviewed; synthetic-only seed proof; raw-key absence proof. Safe work until then: docs, checklist hardening, local synthetic fixtures, guardrails.
- GitHub CLI was unauthenticated at last verification → live PR creation blocked until `gh auth login`.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: infra stack bookkeeping only. TRUST-SIGNAL-adjacent: hostile-invalid negative-control fixture pattern (must-fail traces) for shadow harnesses.
## Engine-actionable? (yes/no + one-line what)
No — API infra handoff; no engine signal content.
