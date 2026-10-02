# docs/ops/ROUTE_SURFACE_CONTRACT.md
## What it is (1-2 sentences)
Classification contract (generated 2026-05-29, Claude Opus 4.8) inventorying every web surface — 60 page routes and 48 API routes — as Public, Internal (operator/admin, auth-gated), or Protected (engine logic, never a public route), as the grounding inventory for the Golden Path Proof, Scorecard, and Release Board.
## Key metrics/methods (formulas where given, else "not specified")
- Classification rules: Public = indexable, no auth, must carry trust context (methodology + responsible-play reachable, freshness, uncertainty, demo/live labels). Internal = `/cockpit/*`, `/admin/*`, `/dashboard` — never expose protected methodology to public props/bundles. Protected = scoring weights, thresholds, aggregation, prompt chains, calibration internals in `packages/prediction-engine` + server libs; no public route may serialize these to client props, JSON, OG artifacts, or share cards.
- Public page routes (29): `/`, `/about`, `/blog`, `/blog/[slug]`, `/board`, `/brief`, `/changelog`, `/contact`, `/faq`, `/journal`, `/journal/[slug]`, `/ledger`, `/methodology`, `/observatory` (stub), `/performance`, `/performance/losses`, `/performance/losses/[id]`, `/picks`, `/press`, `/pricing`, `/privacy`, `/promotions`, `/responsible-play`, `/room/[gameId]`, `/terms`, `/vault` (stub), `/vs/tout-services`, `/auth/signin`, `/auth/error`.
- Internal page routes (31): `/dashboard`, `/admin`, `/admin/dashboard`, `/admin/picks`, `/admin/posts`, `/admin/users`, `/cockpit` + 24 sub-routes (agents, api-costs, bot-outbox, brief, calibration, content, history, jarvis/trend, journal, losses, market-twin, media, promo-desk, promotions, review, sources, studio, synthetic-monitoring, tasks).
- API routes (48): public data 13 (`/api/board/state`, `/api/board/passes`, `/api/calibration`, `/api/performance`, `/api/picks`, `/api/picks/daily-slate`, `/api/picks/[id]/audit`, `/api/brief`, `/api/blog`, `/api/health`, `/api/health/synthetic-monitoring`, `/api/room/[gameId]/model-court`); internal 33 (`/api/cockpit/*` 29, `/api/admin/*` 3, `/api/dev/state`); cron 3 (`/api/cron/refresh-odds`, `/api/cron/settle-picks`, `/api/cron/jarvis-snapshot`); commerce/auth/webhooks 5 (`/api/subscriptions/checkout`, `/api/subscriptions/portal`, `/api/webhooks/stripe`, `/api/auth/[...nextauth]`, `/api/promotions`).
- Invariants: public picks gated by `canExposePublicPicks`, performance stats by `canExposePerformanceStats`, featured by `canPromoteFeaturedPicks`, Edge Index by `canExposeEdgeIndex` — all default-closed, degrade to bootstrap/stub states.
- Banned public language enforced by `scripts/guardrails/trust-gate.mjs` + `apps/web/lib/trust-claims.ts` + brand-safety tests (literal list not duplicated in this doc).
- Regeneration commands: `find apps/web/app -name page.tsx` and `find apps/web/app/api -name route.ts`.
## Data sources named
- None (inventory generated from the repo's own route tree).
## Findings (numbers and facts, not vibes)
- Open contract gaps (see GOLDEN_PATH_PROOF.md): no dedicated public Coach, Parlay MRI, Academy, or Autopsy route (mapped to existing surfaces; flagged, not built). `/observatory` and `/vault` are intentional pre-launch stubs that degrade gracefully.
- Anthropic calls confined to `apps/web/lib/claude-api/messages.ts` (tracked by `claude-api-usage.mjs`).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Trust-context requirement on every public surface (methodology + responsible-play reachable, freshness, uncertainty, demo/live labels) — TRUST-SIGNAL
- Protected-methodology fence: weights/thresholds/calibration never reach public props/JSON/OG/share cards — TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
no — ops contract, not engine logic.
