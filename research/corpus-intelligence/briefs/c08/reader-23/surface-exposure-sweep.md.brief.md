# docs/engine/research/2026-09-28/surface-exposure-sweep.md
## What it is (1-2 sentences)
A measured 2026-09-28 sweep of all 403 public routes/pages in `apps/web/app` against the public/private surface doctrine's keep-out patterns, done because the hand-written 13-item audit list was already wrong when SURF-1 ran.
## Key metrics/methods (formulas where given, else "not specified")
Scope: 188 API routes + 203 pages (minus /admin, /auth, /api/internal). Static text-pattern search for keep-out patterns: raw signal/ledger reads, `next_gen_stats`/NGS, WOPR and target share, QBR, calibration internals, adjustment-layer weights, truth-catalog topology, methodology factor lists, raw player-week rows, edge internals (`expectedClv`, `factorBreakdown`, `independentEdge`). Result: 127 routes matched at least one pattern; zero confirmed exposures.
## Data sources named
The doctrine doc `docs/research/2026-09-28/orchestration/public-private-surface-doctrine.md`; `apps/web/__tests__/internal-surface-fence.test.ts` (fenced allow-list check); SURF-1 route-level fence and regression test.
## Findings (numbers and facts, not vibes)
- 127 of 403 public routes matched a keep-out pattern; all resolved to: readiness-gated, B2B API-key scoped, CRON_SECRET bearer auth, premium rate-limit, session-gated, on the doctrine KEEP list, or not a data surface.
- `/api/verify` is leak-safe by construction: pre-kickoff receipts verify as SEALED (existence, integrity, freeze time, model version only).
- Two near-misses recorded: `/api/nflverse/qbr` returns a named-metric family but is premium-rate-limited — left as-is on purpose (founder's call, a product/tier decision not a leak); `/calibration` page and `/board` render calibration-derived content but are projections/rankings-family (allowed); the JSON `/api/calibration` was the actual violation and SURF-1 fenced it.
- Explicit limitation: static text match cannot see leaks composed from two allowed payloads, re-exported data under a different shape, or runtime queries returning keep-out columns without naming them; does not cover `apps/web/lib/**` components.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL — audit of what proprietary surfaces are exposed (trust via verified secrecy posture).
## Engine-actionable? (yes/no + one-line what)
Yes — re-run this sweep as a CI guard by extending `apps/web/__tests__/internal-surface-fence.test.ts` from 7 named surfaces to a full pattern sweep (the doc's standing recommendation).
