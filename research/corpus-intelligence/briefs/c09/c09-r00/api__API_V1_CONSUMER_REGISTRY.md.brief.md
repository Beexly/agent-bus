# api/API_V1_CONSUMER_REGISTRY.md
## What it is (1-2 sentences)
Local shadow-only contract spec for the API v1 consumer registry (who may hold keys, under what quota/scope), with an append-only hash-chain audit ledger and a proposal-only durable schema. No live consumer record, route, secret, or provider integration created here.
## Key metrics/methods (formulas where given, else "not specified")
- Consumer record invariants: `keyHash` = 64-char SHA-256 hex, never contains `gse_v1_`; `keyId`/`keyHash` unique; `ownerApprovedForLiveUse` must be false in shadow records; revoked/suspended/expired → `active=false`; origins non-blank, non-wildcard; quotas/usage non-negative ints; usage ≤ quota; expired and quota-exhausted fail closed; rotation-due = warning only.
- Audit ledger invariants: every event has `sequence`, `eventId`, `type`, `occurredAt`, `previousHash`, `payloadHash`, `hash`; payload hashes from canonical JSON with sorted reason codes/source ids; verification detects duplicate ids, sequence regressions, broken hash links, payload/event-hash tampering.
- Promotion gates (7 items): durable store; hashes-only key storage; owner-approved key creation/rotation; write-once audit persistence; quota decrement in same transaction as audit event; denied responses never leak protected payload; OpenAPI in CI.
## Data sources named
None external — modules under `apps/web/lib/api/v1/` and `apps/web/__tests__/`.
## Findings (numbers and facts, not vibes)
- 9 modules + 4 test files define the shadow seam: consumer-registry, audit-ledger, persistence, schema-proposal, durable-adapter-harness and conformance tests.
- Status: local shadow contract only; nothing live. Raw keys kept outside the database (hashes + key ids only).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (API governance/infra).
## Engine-actionable? (yes/no + one-line what)
No — infrastructure contract for a future public API; no sports intelligence content.
