# docs/api/API_V1_SHADOW_ROUTE_REPLAY.md
## What it is (1-2 sentences)
A local in-memory replay layer proving the idempotency behavior required before live API v1 routes can exist: it wraps the shadow route harness and stores successful idempotent results keyed by a replay key. Code `apps/web/lib/api/v1/shadow-route-replay.ts`; tests `apps/web/__tests__/api-v1-shadow-route-replay.test.ts`; status local replay simulation only.
## Key metrics/methods (formulas where given, else "not specified")
- Not specified (no formulas). Replay contract `handleApiV1ShadowRouteReplayRequest()`: parse API credential with existing key parser → read external idempotency key from explicit input or shadow headers → hash request payload → compute replay key from (method, endpoint path, hashed payload, parsed key id, external idempotency key) → return stored success envelope if key exists → else call base shadow harness → store only successful results → never store denied responses as reusable success records.
- Replay record stores: replay key, endpoint id, parsed key id, external idempotency key, request payload hash, stored timestamp, shadow harness result; never raw API keys or raw payloads.
## Data sources named
- None external. In-memory replay store only; no database, no routes, no credentials, no network calls.
## Findings (numbers and facts, not vibes)
- Tests prove: duplicate successful requests return the same response envelope; duplicates do not double-count quota; duplicates do not append a second audit event; denied requests create no replay records; unsafe denied responses do not leak protected payload data; same idempotency key + different payload is a new request; malformed idempotency keys create no replay records. [OTHER]
- This slice adds no live API routes, durable database storage, Prisma models, migrations, env vars, generated keys, network calls, paid services, or owner approval for live use; the API v1 boundary guard remains authoritative. [OTHER]
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Idempotency-key replay + quota non-double-counting is the exact pattern a public picks/consumption API needs once stats endpoints go live — prevents double-billing and double-logging on retries. [TRUST-SIGNAL]
- "Never store denied responses as reusable success records" — the contamination-exclusion principle: failed/denied events must not leak into success samples (same family as the corpus's in-play-row and post-settlement-rewrite exclusion rules). [TRUST-SIGNAL]
## Engine-actionable? (yes/no + one-line what)
No — idempotency pattern only; applicable when the public API ships, not to the prediction engine itself.
