# docs/ops/archive/root-museum/handoff.md
## What it is (1-2 sentences)
Rolling phase-by-phase handoff (Phases 1, 2, 2B, 4, 5, 8 + turn-on passes) documenting the build-out of the Sports Intelligence OS platform: repo audit, trust cleanup, operator cockpit, promotions, daily brief, calibration, source intelligence, and a draft-only content engine. It is a build/ops log, not sports research.
## Key metrics/methods (formulas where given, else "not specified")
not specified — metrics are build/test counts, not formulas: Phase 1 baseline 182 tests passed; Phase 2 added 44 (226 total); Phase 2B reached 244 passed/0 failed; Phase 4 added 8 test files (60+ assertions); Phase 8 added 25+ assertions in content-engine.test.ts. Build: 24 routes (later more with cockpit), all dynamic; typecheck clean across 9 workspaces.
## Data sources named
No external sports data sources named. Internal: Prisma Postgres, NextAuth/Google OAuth, The Odds API and Stripe/Google keys listed as unset (blockers), Neon/local Postgres as DB targets.
## Findings (numbers and facts, not vibes)
- Phase 1 audit: API layer gated (`canExposePublicPicks`/`canExposePerformanceStats` → 503), but page layer leaked — homepage had fabricated testimonials ("Marcus T.", "Jennifer R.", "Derek M."), hard-coded `FALLBACK_PICKS` (Ravens@Chiefs, Warriors@Celtics, Astros@Yankees) rendered as real locked picks with grades, and `/performance` page bypassed readiness gates while the `PerformanceSummary` table had no `isBootstrap` column.
- Phase 2 removed all of the above; Trust Claim Registry created with 22 entries; banned-phrase scanner (`guaranteed`, `lock` word-bounded, `sure thing`, `risk-free`, `easy money`, `can't lose`, `verified track record`, `thousands of bettors`, `trusted by serious bettors`, `guaranteed profit`) enforced by CI test.
- Phase 2B: six typed operator roles (Jarvis, Sarah, Tal, Scout, Ava, Bobby), all with `externalActions: NONE`; allow-listed task status machine with append-only `CockpitDecision` rows; admin-gated cockpit routes.
- Phase 4: added `Promotion`, `SourceCoverageReport`, `CalibrationProposal` models; banned phrases and missing disclosure/terms/RG text block publication; calibration proposals do NOT mutate weights; calibration content defaults INTERNAL_ONLY.
- Phase 8: 10 safe content templates; `publishedAt` never set by engine; `POST /api/cockpit/content` returns 405 with `auto-publish-disabled`.
- Persistent blockers: `.git/index.lock` and `_speedtest/` could not be removed from the sandbox (Windows ACL); node_modules partially installed with `ENOTEMPTY` rename failures; no commits possible from sandbox.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Public-claim integrity doctrine (no fabricated stats/quotes, honesty about gates and bootstrap state) → OTHER (governance, applicable to any engine claims the GSE engine publishes).
- No QB, coaching, OL, trust-signal, or scheme content present → OTHER.
## Engine-actionable? (yes/no + one-line what)
Yes — Phase 2's Trust Claim Registry + banned-phrase scanner and the draft-only content-engine guards (no fabrication of games/odds/injuries/news/performance, gate-enforced publishing) are compliance primitives any engine output surface should reuse.
