# research/anthropic-gate-content-flag-aware-2026-05-21.md
## What it is (1-2 sentences)
Infra note (2026-05-21) documenting a change to `scripts/check-deploy-readiness.mjs` making the Anthropic API ping check content-flag-aware: a non-200 on `/v1/messages` only blocks deploy when `PUBLIC_BLOG_ENABLED=true`, otherwise it warns — because no production code path calls Anthropic while all content surfaces are dark.
## Key metrics/methods (formulas where given, else "not specified")
- Change logic: `checkAnthropic()` reads `PUBLIC_BLOG_ENABLED`: `=true` → non-200 from `/v1/messages` = `bad` (blocks deploy); otherwise → `warn` (does not block; warning text says "rotate before enabling content"). Reversal is automatic when the flag flips — no "remember to put this back" debt.
- Launch gate flags recorded: `CANONICAL_HISTORY_ENABLED=true`, `DERIVED_MODEL_HISTORY_ENABLED=false`, `PUBLIC_PICKS_ENABLED=false`, `FEATURED_PICK_PROMOTION_ENABLED=false`, `PERFORMANCE_STATS_ENABLED=false`, `PUBLIC_BLOG_ENABLED=false`, `OUTCOME_LEARNING_ENABLED=false` — content surfaces dark.
- Untouched: runtime integrity gates (`getReadinessGates`), public-performance policy, brand-safety linter rules, the `ANTHROPIC_API_KEY` non-empty-string env check, any path surfacing true EV/Kelly/public performance/pick claims.
- Expected test posture: `npm.cmd run deploy:ready` → `Result: ready, N warning(s)` with N ≥ 1 (the Anthropic warning); brand-safety, typecheck, web tests, build last green per Codex `CODEX_FINAL_INFRA_HANDOFF.md`.
## Data sources named
- Searched code: `apps/web/lib/content-generator.ts` (`generateBlogPost()` → `api.anthropic.com/v1/messages`, only fires when invoked; no production route invokes it while blog is dark), `apps/web/lib/cockpit/jarvis-data.ts` (only checks key non-empty), `apps/web/app/api/dev/state/route.ts` (dev-only).
- Infra context at the time: Neon via Vercel integration (`DATABASE_URL`/`DIRECT_URL`), Upstash Redis, Stripe TEST key + price IDs, The Odds API key valid (20,000 requests remaining), vercel.json crons + security headers present.
## Findings (numbers and facts, not vibes)
- The deploy block on 2026-05-21 was a 401 on the Anthropic ping (current key invalid; no authenticated browser session to console.anthropic.com); rotation was a human-in-the-loop step. All other readiness checks were green.
- In the dark-content launch posture, no production code path ever calls Anthropic — the 401 could not affect the user-facing surface.
- File is a dated historical infra decision (2026-05-21); no sports/research content.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- None — infrastructure housekeeping, no sports intelligence.
## Engine-actionable? (yes/no + one-line what)
No — dated CI-script decision with no sports or engine content; informational only.
