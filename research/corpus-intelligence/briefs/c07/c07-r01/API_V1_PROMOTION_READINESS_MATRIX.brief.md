# api/API_V1_PROMOTION_READINESS_MATRIX.md
## What it is (1-2 sentences)
Local-only promotion-readiness evaluator doc for API v1: a gate matrix (`apps/web/lib/api/v1/promotion-readiness.ts`) that separates shadow-evidence gates, repo-boundary gates, and owner-approval gates — and never sets `livePromotionAllowed=true` (best case is `ready_for_disposable_rehearsal_review`).
## Key metrics/methods (formulas where given, else "not specified")
- Status values: `blocked` / `owner_approval_required` / `ready_for_disposable_rehearsal_review`.
- Shadow-evidence gates: `fixture-report-ready`, `durable-conformance-ready`, `live-promotion-disabled`, `rehearsal-plan-clean`.
- Repo-boundary gates: `route-tree-absent`, `prisma-models-absent`, `migration-absent`, `env-vars-absent`, `provider-hooks-absent`.
- Owner-approval gates: `owner-approval-recorded`, `disposable-target-approved`, `destroy-by-timestamp-recorded`, `rollback-evidence-recorded`, `raw-key-absence-proof-recorded`.
## Data sources named
None.
## Findings (numbers and facts, not vibes)
- Current expected state: `status=owner_approval_required`, `shadowEvidenceReady=true`, `ownerApprovalComplete=false`, `livePromotionAllowed=false` — shadow stack reviewable, but the next database-adjacent step is blocked on owner approval and disposable-target evidence.
- Disposable rehearsal packet now lives at `docs/api/API_V1_DISPOSABLE_REHEARSAL_PACKET.md` + `apps/web/lib/api/v1/disposable-rehearsal-packet.ts`; all command intents stay non-executable until owner approval.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: API v1 promotion gating process; no sports-modeling content. The never-live-by-default discipline is a process pattern, not a model.
## Engine-actionable? (yes/no + one-line what)
No — product API gating docs; nothing for the prediction engine.
