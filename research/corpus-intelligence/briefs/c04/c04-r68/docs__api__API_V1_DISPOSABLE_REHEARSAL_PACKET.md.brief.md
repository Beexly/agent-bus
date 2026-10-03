# docs/api/API_V1_DISPOSABLE_REHEARSAL_PACKET.md
## What it is (1-2 sentences)
Contract doc for `apps/web/lib/api/v1/disposable-rehearsal-packet.ts`: a deliberately non-executable owner-review packet for a future disposable-database rehearsal of API v1, built from the promotion readiness matrix with `commandsExecutableNow=false` and `livePromotionAllowed=false`.
## Key metrics/methods (formulas where given, else "not specified")
- Packet status enum: `blocked_by_readiness_matrix` | `owner_review_packet_ready`; expected current state: `status=blocked_by_readiness_matrix`, `readinessStatus=owner_approval_required`.
- 6 sections: readiness, approval, target, evidence, rollback, post_rehearsal. 8 command intents (record-owner-approval, prepare-disposable-target, review-future-schema-diff, seed-synthetic-fixture-data, run-durable-conformance, compare-fixture-report, capture-rollback-evidence, verify-post-rollback-cleanup), all `executableNow=false`.
## Data sources named
None — infra/governance doc. References the promotion readiness matrix (`API_V1_PROMOTION_READINESS_MATRIX.md`) and related test files.
## Findings (numbers and facts, not vibes)
- Forbidden targets include: production database, shared staging database, raw API key material, partner billing/onboarding path, provider account, AWS account, live API v1 route.
- Current expected state keeps owner-approval gates blocked for: owner approval, disposable target, destroy-by timestamp, rollback evidence, raw-key absence proof.
- Next safe slice: a rendered markdown packet builder from local fixtures only, still non-executable.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: infra governance only. TRUST-SIGNAL-adjacent: non-executable intents + evidence requirements pattern for shadow-only surfaces.
## Engine-actionable? (yes/no + one-line what)
No — API infrastructure review artifact; no engine signal content.
