# api/API_V1_PERSISTENCE_ADAPTER.md
## What it is (1-2 sentences)
Overview of the API v1 shadow persistence adapter slice: an in-memory shadow store proving consumer-registry, hash-chained audit-ledger, and atomic quota/audit behavior plus the durable fixture simulator, report archive, and disposable-DB rehearsal plan — all without live routes, schema, migrations, env vars, or credentials.
## Key metrics/methods (formulas where given, else "not specified")
not specified (no formulas). Adapter contract: listConsumers, readAuditLedger, snapshot, resolveConsumer, putConsumer, appendAuditEvent, recordQuotaAndAudit — fail closed on credential/consumer/status/expiry/quota failure with a deny audit event appended and no quota increment; raw API key storage rejected.
## Data sources named
None; synthetic fixture traces (apps/web/__fixtures__/api-v1/durable-fixture-simulator.json, durable-fixture-edge-cases.json).
## Findings (numbers and facts, not vibes)
- 20 modules/fixtures/tests listed covering persistence, schema proposal, adapter harness, dormant interface, fixture simulator, fixture report + renderer, rehearsal plan, guardrail script.
- Promotion-plan gates block raw key storage, non-hash storage, non-append-only audit, non-transactional quota/audit, route exposure in this slice, payload leaks on denial, migrations without rollback, live storage before owner approval.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: API infrastructure plumbing — no sports intelligence content.
## Engine-actionable? (yes/no + one-line what)
no — infrastructure plumbing.
