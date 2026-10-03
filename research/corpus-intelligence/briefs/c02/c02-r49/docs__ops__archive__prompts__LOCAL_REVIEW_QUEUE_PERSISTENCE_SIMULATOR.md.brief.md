# docs/ops/archive/prompts/LOCAL_REVIEW_QUEUE_PERSISTENCE_SIMULATOR.md

## What it is (1-2 sentences)
A 2026-07-06 spec/proof-of-implementation for a local, shadow-only simulator proving GSE can persist media, content/API, and partner/sponsor review packets *before* any database table, live route, affiliate activation, sponsor approval automation, or publishing workflow exists. Intentionally not a production queue; it is the review-gate machinery that later gates the content engine's 10 approved templates (empty draft queue per the mega-audit).

## Key metrics/methods (formulas where given, else "not specified")
No formulas. Verification evidence: `npm run test --workspace=apps/web -- local-review-queue-persistence.test.ts first-month-review-queue.test.ts draft-review-fixtures.test.ts partner-sponsor-review-fixtures.test.ts` → PASS, 4 files, 19 tests. `npm run typecheck --workspace=@sports/web` → FAIL then PASS (first run caught queue record status narrowed to only draft workflow status; fixed by separating initial workflow status from mutable queue record status). Simulator mechanics: append-only local queue events, deterministic replay into queue snapshots, duplicate event/packet rejection, optimistic version checks on owner updates, approval blocked while blockers unresolved.

## Data sources named
None external. Implemented surface: `apps/web/lib/workflows/local-review-queue-persistence.ts` + `apps/web/__tests__/local-review-queue-persistence.test.ts`; companion reporting: `apps/web/lib/workflows/local-review-queue-report.ts`, `apps/web/lib/workflows/local-review-queue-report-markdown.ts`, `docs/ops/LOCAL_REVIEW_QUEUE_BLOCKER_REPORT.md`.

## Findings (numbers and facts, not vibes)
- 3 queue event types, each with live effect "None": `PACKET_ENQUEUED`, `OWNER_DECISION_RECORDED`, `PACKET_ARCHIVED`.
- 8 locks held false on every packet and snapshot: publishAllowed, routeExposureAllowed, externalSendAllowed, liveIntegrationAllowed, affiliateActivationAllowed, sponsorApprovalAutomatic, databaseWritesAllowed, durablePersistenceEnabled.
- Fails closed for: duplicate event IDs, duplicate packet IDs, owner updates for unknown packets, stale owner updates (wrong expected version), approval attempts while blockers remain unresolved, any packet attempting to unlock live actions.
- Packet types normalized: draft-review packets, first-month media review exports, partner/sponsor review fixtures.
- Companion report groups unresolved blockers by queue source, workflow surface, and source ID without any database writes or live workflow actions.
- Next local gate stated: historical distribution/drift adapters for governed metrics or owner-reviewed production preview QA.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Fail-closed review gates with blockers unresolved → approval blocked, zero live effects by construction: **TRUST-SIGNAL** (evidence/honesty infrastructure pattern)
- Append-only events + deterministic replay + markdown snapshot rendering for owner decision capture: **OTHER** (ops/auditability pattern reusable for engine decision logging)

## Engine-actionable? (yes/no + one-line what)
No direct pick-model impact — but the fail-closed, blocker-gated, append-only review pattern is directly reusable for any future governed-metric review or content-pipeline gating.
