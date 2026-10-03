# docs/api/API_V1_SHADOW_SEAM.md
## What it is (1-2 sentences)
The design doc for GSE's API v1 "shadow seam": a fully internal, route-free, storage-free contract layer (API key parsing/hashing with SHA-256 namespacing, scope evaluation, FABLE source-rights payload gating, fail-closed envelopes, OpenAPI 3.1 draft, hash-chained audit ledger) proving the API contract before any live route, provider, key secret, billing path, or partner access exists.

## Key metrics/methods (formulas where given, else "not specified")
not specified — no formulas. The contract defines 4 shadow endpoints with required scopes: `evidence.record.read` (GET /v1/evidence/{id}, `evidence:read`), `signals.summary.read` (GET /v1/signals/{gameId}, `signals:read` + `evidence:read`), `metrics.birth_certificate.read` (`metrics:read`, protected weights excluded), `revenue.partner_summary.read` (`revenue:read`). 7 promotion gates (owner-approved key storage design; real consumer store with revocation/audit; rate/quota wired to persistence; source-rights-safe payloads; OpenAPI exported in CI; denied responses never leak protected data; guardrails pass with route tree).

## Data sources named
None external — all local fixtures/traces (consumer registry, audit ledger, abuse-response fixtures for malformed keys / overscope / quota / unsafe payloads / replay conflicts / duplicate promotion IDs). Payload rights reuse the FABLE source registry adapter.

## Findings (numbers and facts, not vibes)
- ~35 files named across `apps/web/lib/api/v1/`, `apps/web/__fixtures__/api-v1/`, `apps/web/__tests__/`, and `docs/api/` — 14 focused Vitest suites listed as verification.
- Invariants the consumer registry proves locally: no raw API key material in records; unique `keyId`/`keyHash`; revoked/suspended consumers inactive; no wildcard origins; live approval forbidden in shadow records; quota exhaustion and expiry fail closed; audit events hash-chained and tamper-evident; denied route-harness responses must never include protected payload data.
- Guardrail script: `scripts/guardrails/api-v1-boundary.mjs` wired into `npm.cmd run guardrails`.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Fail-closed scopes + source-rights gating as the model for public/private surface discipline: TRUST-SIGNAL
- Metric birth-certificate endpoint exposing only public-safe metric metadata (weights excluded): TRUST-SIGNAL
- Abuse-response fixture discipline (replay conflicts, duplicate promotion IDs, stale review packets): OTHER

## Engine-actionable? (yes/no + one-line what)
No — infrastructure/API governance doc; no sports metrics, signals, or models.
