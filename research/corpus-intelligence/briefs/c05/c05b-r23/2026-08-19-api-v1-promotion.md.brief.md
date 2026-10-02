# docs/ops/api-v1-promotion/2026-08-19-api-v1-promotion.md
## What it is (1-2 sentences)
Promotion record (decision: PROMOTE, authority founder Garrett via delegated Claude session, ledger F-3 ruling / C-8 implementation) lifting the three API v1 routes (`openapi`, `probabilities`, `signals`) out of shadow status in the boundary guardrail — the boundary moves from "no API v1 route may exist" to "no API v1 route beyond the promoted set may exist."
## Key metrics/methods (formulas where given, else "not specified")
- Gate ceremony `evaluateApiV1PromotionReadiness` (apps/web/lib/api/v1/promotion-readiness.ts); all gates passed: `route-tree-absent` (redefined — `unapprovedApiV1RouteTreeExists` false for promoted set, true for anything else; negative-tested with a rogue route the guardrail names and rejects); `prisma-models-absent` (no `ApiV1Consumer`/`ApiV1AuditEvent`/`ApiV1QuotaMonth`); `migration-absent` (no `api_v1` migration); `env-vars-absent` (no `GSE_API_KEY`/`GSE_API_V1_`/`API_V1_`; promoted routes authenticate via pre-existing `GSE_B2B_API_KEYS`, outside the v1 namespace); `provider-hooks-absent` (no live storage/env/provider hooks in v1 library); `live-promotion-disabled` (`livePromotionAllowed` stays false — durable persistence NOT promoted, still gated behind `durable-rehearsal-plan.ts`); `owner-approval-recorded` (this document, F-3); `rollback-evidence-recorded`; `raw-key-absence-proof-recorded` (promoted set = filenames only).
- Route defense: `authorizeB2bApiKey` + `extractB2bApiKey` + `rateLimitB2b`; unauthenticated requests get 401. Payloads RED-honest by construction ("research/intelligence grade while RED. No verified ROI / PROVEN claims in payload").
- Guardrail: `scripts/guardrails/api-v1-boundary.mjs` still fails the build on Prisma models, migrations, `GSE_API_KEY`/`API_V1_` env vars, database imports, provider/network calls in the v1 library.
- Rollback: one-commit revert of C-8 (guardrail flags tree existence again, readiness fixtures revert to `fs.existsSync`); route files independently revertible from #388 and 5e87691d (5e87691d = commit hash shipping `openapi`). Zero runtime behavior change — only what the repo asserts about itself.
## Data sources named
- None (governance/promotion record).
## Findings (numbers and facts, not vibes)
- The stale guard failed EVERY pull request and the ten `api-v1-*` suites with it — roughly a third of the repo's remaining CI failures; `signals` and `probabilities` shipped in #388, `openapi` in 5e87691d, both through review.
- Rejected options: deleting the routes (live B2B revenue surface — destroying value to quiet a check) and leaving it permanently red (trains everyone to ignore CI; session already paid that bill: `tsc` failed on main so long nobody noticed 73 failing tests behind it, one a genuine non-monotone bug in the isotonic calibrator, C-5).
- Durable API v1 persistence remains separately gated; nothing here shortens that path.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- B2B API v1 surface (probabilities/signals) with 401 auth + RED-honest payloads — TRUST-SIGNAL
- Non-monotone isotonic calibrator bug found/fixed during the cleanup (C-5) — calibration validation method, TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
no — governance/infra record (the isotonic-calibration monotone bug fix C-5 is the only calibration-relevant note).
