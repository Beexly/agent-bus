# docs/api/API_V1_SHADOW_PR_BODY.md
## What it is (1-2 sentences)
PR body for the API v1 shadow seam: a route-free, pure-TypeScript contract for GSE evidence, signal, metric, and partner-safe payloads — key hash utilities, scope registry, endpoint contracts, FABLE source-rights evaluation, deterministic envelopes, hash-chained audit ledger, memory-only persistence adapter, dormant durable interface, and fixture simulator.
## Key metrics/methods (formulas where given, else "not specified")
not specified
## Data sources named
- FABLE source registry adapter (payload rights evaluation).
## Findings (numbers and facts, not vibes)
- Source-rights checks block limited, unknown, blocked, personal-data, and raw-payload cases at the seam.
- OpenAPI 3.1 draft builder ships with `x-gse-shadow-only` and `x-gse-live-routes-exposed=false`.
- Tests assert the key hash does not contain the raw key; promotion plans block denied-payload leakage and non-atomic quota/audit writes.
## Intelligence connections
- [TRUST-SIGNAL] The source-rights gating model (blocked categories: limited, unknown, blocked, personal-data, raw-payload) is a ready-made template for gating engine signal surfaces by source rights.
- [OTHER] The shadow-seam pattern (full contract + fixtures + rehearsal plan before any live route) is a safe template for exposing engine payloads externally later.
## Engine-actionable? (yes/no + one-line what)
yes — adopt the source-rights gating categories (limited/unknown/blocked/personal-data/raw-payload) as the engine's signal-surface gate before any payload exposure.
