# docs/api/API_V1_DATABASE_SCHEMA_PROPOSAL.md
## What it is (1-2 sentences)
Proposal-only (no migration applied) design for durable API v1 storage: three tables (`api_v1_consumers`, `api_v1_audit_events`, `api_v1_quota_months`) preserving the shadow seam's invariants (hash-only keys, append-only hash-chained audit, atomic quota+audit writes, route exposure blocked).
## Key metrics/methods (formulas where given, else "not specified")
not specified
## Data sources named
- Canonical proposal code: `apps/web/lib/api/v1/schema-proposal.ts`.
## Findings (numbers and facts, not vibes)
- Non-negotiable rules: raw API keys never stored; `keyHash`/`payloadHash`/`hash` are 64-char hash fields; `ownerApprovedForLiveUse` stays false; no migration, route, env var, or partner data in this slice.
- Promotion still blocked on: no live route, no durable adapter, no Prisma migration, no disposable-DB rollback rehearsal, no owner approval, no partner/billing/credential path.
## Intelligence connections
- [TRUST-SIGNAL] The append-only hash-chained audit ledger with transactionally-coupled quota writes is a usable pattern for a tamper-evident engine decision/pick ledger; no sports intelligence content otherwise.
## Engine-actionable? (yes/no + one-line what)
yes — reuse the hash-chained append-only audit-ledger pattern (quota + audit in one transaction) for a tamper-evident engine pick/signal ledger.
