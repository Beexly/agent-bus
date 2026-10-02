# api/API_V1_DORMANT_DURABLE_ADAPTER_INTERFACE.md
## What it is (1-2 sentences)
Dormant, non-executable contract specifying the table-mapped durable adapter interface (3 proposed tables, 4 operations with read/write/transaction requirements) that future API v1 database work must satisfy; explicitly adds no adapter, schema, migration, route, env var, credential, or provider call.
## Key metrics/methods (formulas where given, else "not specified")
not specified (no formulas). Operation contract: resolve_consumer (read only, no txn); put_consumer (upsert, txn); append_audit_event (append-only hash-chain, txn); record_quota_and_audit (txn; quota staged before audit, rolled back audit-before-quota).
## Data sources named
None; proposed-only tables: api_v1_consumers, api_v1_audit_events, api_v1_quota_months.
## Findings (numbers and facts, not vibes)
- Dry run returns status=blocked_no_execution, executable=false, every operation mapped_not_executed.
- Validator blocks route exposure, Prisma imports, SQL, env reads, API v1 env vars, migrations, schema mutation, mismatched table maps, missing operation plans, non-append-only audit writes, non-atomic quota/audit writes.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: API persistence contract plumbing — no sports intelligence content.
## Engine-actionable? (yes/no + one-line what)
no — infrastructure contract only.
