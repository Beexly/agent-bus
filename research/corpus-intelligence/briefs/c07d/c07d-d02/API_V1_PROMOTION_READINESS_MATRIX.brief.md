# api/API_V1_PROMOTION_READINESS_MATRIX.md
## What it is (1-2 sentences)
Defines the local-only promotion-readiness evaluator (`apps/web/lib/api/v1/promotion-readiness.ts`) that turns API v1 shadow evidence into an explicit gate matrix of shadow-evidence, repo-boundary, and owner-approval gates — where even the best-case status is only `ready_for_disposable_rehearsal_review`, never live promotion. Governance/process documentation for the API v1 shadow track, not sports analysis.

## Key metrics/methods (formulas where given, else "not specified")
Not specified — no formulas or statistical methods. Status values and gate taxonomy (verbatim):
- Status values (3): `blocked` (shadow evidence or repo boundary gates failed — do not discuss disposable database execution until blockers are fixed); `owner_approval_required` (local shadow evidence and repo boundaries pass, but owner-only approval evidence missing — stated as the expected current state); `ready_for_disposable_rehearsal_review` (all three gate families complete enough to review a disposable rehearsal packet — still not live API approval).
- The evaluator never sets `livePromotionAllowed=true`.
- Shadow evidence gates (4): `fixture-report-ready`, `durable-conformance-ready`, `live-promotion-disabled`, `rehearsal-plan-clean`
- Repo boundary gates (5): `route-tree-absent`, `prisma-models-absent`, `migration-absent`, `env-vars-absent`, `provider-hooks-absent`
- Owner approval gates (5): `owner-approval-recorded`, `disposable-target-approved`, `destroy-by-timestamp-recorded`, `rollback-evidence-recorded`, `raw-key-absence-proof-recorded`
- Current expected state: `status=owner_approval_required`, `shadowEvidenceReady=true`, `ownerApprovalComplete=false`, `livePromotionAllowed=false`
- Verification: 4 test files (`api-v1-promotion-readiness.test.ts`, `api-v1-durable-fixture-report.test.ts`, `api-v1-durable-rehearsal-plan.test.ts`, `api-v1-boundary-guard.test.ts`) + typecheck, lint, guardrails, `git diff --check`

## Data sources named
None (no datasets or external sources).

## Findings (numbers and facts, not vibes)
- 14 gates total across 3 families; the document explicitly does not approve live API v1 routes, Prisma models, migrations, env vars, credentials, provider calls, billing hooks, database execution, AWS/account mutation, or production use.
- The expected current state is `owner_approval_required`: the local shadow stack is reviewable, but the next database-adjacent step is blocked by owner approval and disposable-target evidence.
- Adjacent safe slice: the disposable rehearsal packet lives in `docs/api/API_V1_DISPOSABLE_REHEARSAL_PACKET.md` and `apps/web/lib/api/v1/disposable-rehearsal-packet.ts`; it consumes this matrix output and keeps all command intents non-executable until owner approval is present.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — Governance/process doc for the API v1 shadow track. No connection to QB-behavior, coaching, OL, trust-signal, or scheme programs. The three-family gate structure (shadow evidence / repo boundary / owner approval) mirrors the engine's own promotion discipline (uncalibrated signals compute in shadow, never publish) and could serve as a template for an engine-signal promotion gate, but the file itself is API-infra, not engine work.

## Engine-actionable? (yes/no + one-line what)
No — gate-matrix governance record for the API shadow stack; nothing to wire into the engine.

## Referenced files / papers / datasets
- `apps/web/lib/api/v1/promotion-readiness.ts` (evaluator)
- `docs/api/API_V1_DISPOSABLE_REHEARSAL_PACKET.md` (disposable rehearsal packet)
- `apps/web/lib/api/v1/disposable-rehearsal-packet.ts` (packet implementation)
