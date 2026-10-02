# engine/research/2026-09-28/surf-2-source-catalog-exposure.md
## What it is (1-2 sentences)
A 2026-09-28 forensic post-mortem of a confirmed public data-source leak (`/api/sources/catalog` exposed the full `DATA_SOURCE_STACK` plus per-provider `envVar` names and refused-source statuses), why the earlier 403-route sweep missed it (keep-out data lived one import away in `lib/`), and how it was fenced with non-vacuity-proven tests.
## Key metrics/methods (formulas where given, else "not specified")
Corrected method: BFS import-graph walk from all 403 public pages to depth 4, resolving `@/` aliases, searching for keep-out vocabulary in reachable `lib/`/`components/` modules. First run: 272/403 pages hit (nearly all noise from bare words "carries"/"opportunities" in `lib/auth.ts`); after tightening to data-shaped tokens (`target_share`, `rush_yards`, `receiving_yards`, `fumbles_lost`, `opportunities:`), 113 pages hit, 43 ungated — one genuine exposure. Non-vacuity proven by removing the guard call and re-running (test went red). 29/29 tests green across source-catalog-fence, internal-surface-fence, public-surface-sweep, board-phase2-routes; `tsc --noEmit` clean; eslint `--max-warnings=0` clean.
## Data sources named
The exposed payload itself: "The Odds API", "Sleeper public API", "Premium charting overlays", "Airwave transcript spreadsheet", "Beat reporter source mesh", "Galaxy Studio asset engine", "Scores24 reference feed" — with refused statuses (`permission-required`, `founder-gated`, `planned`, `waiting-for-real-observations`) and per-provider `envVar` names.
## Findings (numbers and facts, not vibes)
- `apps/web/app/api/sources/catalog/route.ts` was anonymous, rate-limited 60 req/min/IP, and published the full source stack, refused statuses, and env var names. Rate limiting throttles scraping; it does not withhold the payload.
- The earlier surface sweep (403 routes, zero exposures) was structurally blind: the route imported the data from `apps/web/lib/data-sources/catalog.ts` one import away.
- Fix: fence `INTERNAL_API_ROUTES["/api/sources/catalog"]` with new opt-in flag `SOURCES_CATALOG_PUBLIC` (unset → route dark by default); route refuses before rate limiter and loaders; links from `/fantasy` and `/fantasy/baseline` removed; cockpit's session-gated sources page unaffected.
- Follow-up unblocked: make the transitive import-graph walk a second pass inside `public-surface-sweep.test.ts` — found by a scratch script, not yet a CI guard.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Leak included `envVar` names — attacker-reconducible wiring map, a live trust/security issue — TRUST-SIGNAL.
- Doctrine split: showing *cleared* sources is trust-building copy (founder call via flag); showing *refused* sources is competitive intel (keep-out) — OTHER (doctrine).
- No QB-BEHAVIOR, COACHING, OL, or SCHEME content.
## Engine-actionable? (yes/no + one-line what)
No — site-security hygiene; only action item is the follow-up to promote the transitive import-graph sweep into CI (`public-surface-sweep.test.ts` second pass), which a builder can take.
