# docs/api/API_V1_LIVE_ROUTE_PROMOTION_PACKET.md
## What it is (1-2 sentences)
Contract doc for `apps/web/lib/api/v1/live-route-promotion-packet.ts` (`buildApiV1LiveRoutePromotionPacket()`, schemaVersion `api-v1-live-route-promotion-packet-v1`): the final owner-review gate before any future `app/api/v1` route implementation can even be discussed, with `liveRouteCreationAllowed` always false.
## Key metrics/methods (formulas where given, else "not specified")
- 10 required gates: owner approval recorded; durable persistence reviewed; route exposure approved; abuse response reviewed; payload envelope consumed (`filterApiV1MetricPayloadFields()` or `filterProprietaryMetricPayloadEnvelope()`); OpenAPI/security reviewed; rate-limit policy reviewed; rollback plan reviewed; boundary exception reviewed; raw-key absence reviewed. Failure state for each: blocked.
- Status enum: `blocked_by_repo_boundary` | `blocked_by_owner_gates` | `ready_for_owner_route_review`; expected current state: `blocked_by_owner_gates`.
## Data sources named
None — infra/governance doc. The stack intentionally stops at shadow seams: auth/key parsing+hashing, scope checks, quota/rate-limit simulation, request IDs, response envelopes, usage events, payload-rights filtering, OpenAPI/security checks, durable-adapter rehearsal plans, route-level shadow harnesses, idempotency replay simulation.
## Findings (numbers and facts, not vibes)
- Current boundary: no `apps/web/app/api/v1` route tree, no API v1 Prisma models/migrations/env vars, no generated credentials, no partner onboarding, no billing hook, no provider call, no AWS/account mutation, no database execution.
- The payload-envelope gate explicitly requires proprietary-metric payload filtering before response construction — relevant to the public/private surface doctrine (no NGS/metric leakage through API surfaces).
- Live API route creation remains blocked until the owner separately approves route exposure, durable persistence, abuse-response behavior, rollback procedure, and raw-key absence proof.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: infra boundary governance. TRUST-SIGNAL-adjacent: the payload-envelope gate (metric filtering) is the API-layer enforcement point for the internal-only doctrine.
## Engine-actionable? (yes/no + one-line what)
Yes — when any API surface is built, enforce the payload-envelope gate (`filterApiV1MetricPayloadFields()`/`filterProprietaryMetricPayloadEnvelope()`) so no proprietary metrics, metric names, or methodology leak through public endpoints.
