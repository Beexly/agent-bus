# docs/ops/archive/root-museum/CLAUDE_PICKUP.md
## What it is (1-2 sentences)
A 2026-05-21 handoff documenting what Claude changed code-side in the Galaxy Sports Edge monorepo (Vercel cron schedule, Prisma schema additivity audit, SourceSnapshot forensic chain trace, public-surface leak scan) and the credential/env steps still requiring the owner's hands before deploy.
## Key metrics/methods (formulas where given, else "not specified")
- Cron cadence: `/api/cron/refresh-odds` every 30 min, `/api/cron/settle-picks` every 15 min, `/api/cron/jarvis-snapshot` hourly.
- SHA-256 hash + payload bytes recorded per ingestion in `recordSourceSnapshot()`, written BEFORE normalization; snapshot write wrapped in try/catch so ingestion is never killed by a snapshot failure.
- Cron routes fail-closed on missing/mismatched `CRON_SECRET` (500/401).
- Public pick surface: `PublicPick` shape exposes no trueEV, no Kelly, no player names, no ref data, no venue, no pace (brand-safety scan confirmed).
## Data sources named
Neon Postgres, Upstash Redis, Anthropic API, The Odds API, Google OAuth, Stripe, Vercel. 30-day silent-collection plan gates: `DERIVED_MODEL_HISTORY_ENABLED` flips at ~30 settled picks (day 7), `PUBLIC_PICKS_ENABLED` after a healthy slate (day 14), `PERFORMANCE_STATS_ENABLED` at 100+ canonical settled picks (day 21-30).
## Findings (numbers and facts, not vibes)
- Prisma additions were all additive: new `SourceSnapshot` table, new enum, new back-relation, nullable quantitative fields, `Boolean @default(false)` flags (e.g. `hadPlayerSignal`, `hadOfficialsSignal`, `hadVenueEnvironmentSignal`, `hadPaceSignal`, `hadMilestoneSignal`) — safe for `db:push`.
- Launch sequence defined: `deploy:ready` → `db:push` → trigger one ingestion cycle (confirm `IngestionRun` + `SourceSnapshot` rows) → typecheck → brand-safety tests → build → `vercel --prod` → `smoke:prod`.
- Existing test debt noted as unrelated: `packages/db/prisma/seed.ts`, cockpit/runbook tests.
- Previously-pasted Odds API key flagged for rotation (it had been in chat).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: Evidence-first forensic chain — every ingestion records a SHA-256 SourceSnapshot before normalization, building a verifiable provenance chain for every pick.
- OTHER: Fail-closed gating pattern — trust gates default off, server-side enforcement of data-volume thresholds (30/100 settled picks) before public claims, preventing premature publication.
## Engine-actionable? (yes/no + one-line what)
No — this is an operational/deploy handoff, no predictive signal content.
