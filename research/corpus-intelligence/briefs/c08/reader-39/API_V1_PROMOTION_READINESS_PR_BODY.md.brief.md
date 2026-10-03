# docs/api/API_V1_PROMOTION_READINESS_PR_BODY.md
## What it is (1-2 sentences)
PR-body document for adding a local-only promotion-readiness evaluator (`apps/web/lib/api/v1/promotion-readiness.ts`) that converts API v1 shadow evidence into explicit pass/block gates across shadow evidence, repo boundary, and owner approval.
## Key metrics/methods (formulas where given, else "not specified")
The matrix evaluator always keeps `livePromotionAllowed=false`, including the best-case `ready_for_disposable_rehearsal_review` state. Formulas: not specified.
## Data sources named
None.
## Findings (numbers and facts, not vibes)
- New files: `apps/web/lib/api/v1/promotion-readiness.ts` (exported from index), focused tests, `docs/api/API_V1_PROMOTION_READINESS_MATRIX.md`, plus updates to stack handoff, PR index, reviewer checklist, README navigation.
- Safety notes list: no API v1 route, no Prisma edit, no migration, no env var, no credential, no provider call, no DB execution, no AWS/account mutation, no billing/partner action.
- Remaining blocker: disposable database rehearsal needs owner approval of named disposable target, rehearsal scope, destroy-by timestamp, rollback evidence, raw-key absence proof.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: promotion-gate methodology (pass/block gates on evidence + boundary + approval, live-promotion default-false) is a reusable template for promoting engine components (e.g., new model versions) with explicit checklists.
## Engine-actionable? (yes/no + one-line what)
No — process/PR documentation; no sports intelligence or engine metrics.
