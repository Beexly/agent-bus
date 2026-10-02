# api/API_V1_SHADOW_ROUTE_HARNESS.md
## What it is (1-2 sentences)
A specification of the API v1 shadow route harness — a pure-TypeScript contract proving API key auth, consumer registry resolution, idempotency, quota debiting, and audit-ledger writes — before any live `/api/v1` route is allowed. It is explicitly not a live API; guardrails still block all live v1 route paths.
## Key metrics/methods (formulas where given, else "not specified")
- Denial table: 401 (missing/malformed key, unregistered consumer), 403 (suspended/expired/inactive consumer, missing scope, origin not allowed, payload rights blocked), 429 (quota exhausted), 400/405 (malformed request ID or idempotency key, wrong method).
- Lifecycle: quota debited only on allow paths; deny paths append `request_denied` with no debit and no payload leakage; `routeExposed` remains `false`.
- Idempotency replay: duplicate successful requests return the same envelope without double-counting quota; denied requests create no replay records.
## Data sources named
None (internal: shadow key contract, shadow consumer persistence store, hash-chained audit ledger, `scopes.ts`).
## Findings (numbers and facts, not vibes)
- Test suites: `apps/web/__tests__/api-v1-shadow-route-harness.test.ts` (happy-path auth/scope/payload-rights/request-ID/envelope/usage/quota/audit; denial cases) and `api-v1-shadow-route-replay.test.ts` (replay semantics).
- No `apps/web/app/api/v1` route tree exists.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: platform infrastructure only; no football content of any kind.
## Engine-actionable? (yes/no + one-line what)
No — pure API-gating infrastructure, nothing usable for predictions, profiles, or signals.
