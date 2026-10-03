# docs/ops/B2B_API.md
## What it is (1-2 sentences)
Spec for the GSE B2B sports intelligence API: three v1 endpoints (`/api/v1/probabilities`, `/api/v1/openapi`, `/api/v1/signals`) with `x-api-key` auth, fail-closed key-tier scoping (bare key = FREE picks only; `:premium` suffix opt-in for premium), and an experimental/research-grade claim posture while eligibility is RED.
## Key metrics/methods (formulas where given, else "not specified")
Rate limits: ~60/min (signals), ~30/min (probabilities), Postgres-backed durable limiter. `modelConfidence` = UX composite 0–100 (may market-echo); `rankingP` = 0–1 independent-priced ranking key when finite.
## Data sources named
None new — model signals over the settled/store board; redistribution guarded by `lib/api/v1/payload-rights.ts` + `scripts/guardrails/api-payload-rights-scan.mjs` (per SONNET-PLAN).
## Findings (numbers and facts, not vibes)
- Previously any key holder received Pro-gated confidence for PREMIUM picks because routes filtered on isPublished/isBootstrap/modelVersion only; fixed by per-key tier scoping via `:premium` suffix (case-insensitive suffix; key itself case-sensitive, constant-time compare).
- Marketing language while RED: "Sports intelligence API" — never "guaranteed edge"/PROVEN/verified ROI.
- Free public embed (no key): Edge Index badge at `/embed/edge-index/[gameId]`, how-to at `/edge-index`.
- Signal payload carries `claimPosture: experimental_research_grade_not_verified_roi` while performance is unpublished.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: fail-closed premium gating and the honest experimental claim posture.
- OTHER: API product surface.
## Engine-actionable? (yes/no + one-line what)
yes — keep the `:premium` tier-scoping pattern as the template for any future data surface that gates paid rows.
