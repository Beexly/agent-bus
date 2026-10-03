# docs/ops/hermes/CONTINUOUS.md
## What it is (1-2 sentences)
The instruction set for Hermes, the autonomous overnight agent running in a continuous ledger-driven loop on the Sports repo: finish each task, record it, take the next one, and cycle through standing orders forever. It contains 7 laws, 6 phases of work, and the RES program — the repo's own diagnosis that publication volume is what blocks monetization.

## Key metrics/methods (formulas where given, else "not specified")
- Murphy Brier decomposition: **BS = REL − RES + UNC**, with live values stated in `brier-minimization-explore.ts`: UNC ~ 0.25 (fixed by a 50/50 world), REL ~ 0.004–0.02 (already excellent), RES ~ 0.0048 (essentially zero). Target: BS ≤ 0.22, which requires RES >~ 0.03, "not maps."
- Calibration eligibility floors: n ≥ 100, Brier ≤ 0.22, ECE ≤ 0.05, Murphy reliability ≤ 0.05, over 3 consecutive GREEN windows; sample already met at ~150 settled.
- RES program sweep (P1a-1): `selectivePublishSweep` in `holdout-ranking-report.ts` — publish only when |p − 0.5| ≥ delta, delta in {0, 0.08, 0.10, 0.12, 0.15, 0.18}, crossed with edge and minimum-group-RES filters. Under calibration, **BS_delta = pi(1−pi) − Var[P | accepted]**, so reaching 0.22 needs Var[P | accepted] ≥ 0.03. Nobody has run it against live settled data.
- Integrity condition (P1a-2): conditional Brier of rejected picks ~0.25 = correct; >0.25 = discarded negative-EV picks (edge in fading them); <0.25 = STOP (metric gaming).
- RES is near zero because the platform publishes ~57 picks a day — the variance of published forecasts collapses toward 0.5.
- Rate-limit coverage: GSE-SEC-006 says rate limiting applied to 8 of 176 routes; batches of 5 routes per ledger task to extend coverage.
- Test-debt numbers: ~69 test failures previously hidden behind issue #421's broken typecheck gate; previous run repaired 6 files / ~44 tests; ~29 files remained classified (Class A do-not-touch, Class B ~17 files queued, Class C environment-dependent).
- Baselines (2026-08-13, post `npm install`): typecheck CLEAN (0 errors, issues #421 and #419 resolved), lint exit 0, guardrails 23/25 passed with expected failures `api-v1-boundary` (#420) and `ai-transport-import-boundary`.
- Settlement-hold blind spot: free-path settlement at `free-settlement-runner.ts:327` holds on score disagreement but the hold is in-memory only (`holdReason: "DISPUTED"` in discarded `rcaInputs`); `settlement-health.ts:143` counts overdue PENDING picks with no hold exclusion, driving `settlement=DEGRADED`.
- 176 API routes inventoried (P2-1); `.claude/commands/` holds 34 playbooks; phases run 12 launch playbooks (P4-1..P4-12).

## Data sources named
- Live production via `npm run ops:preflight` and `npm run ops:impeccable` (founderNextSteps, revenueLadder, settlement counts/gates, Trust/SEO: robots, sitemaps, feed, ads.txt).
- Settled-pick exports (`npm run export:settled-picks`, `npm run calibration:offline`) — needs production DATABASE_URL.

## Findings (numbers and facts, not vibes)
- **The monetization blocker is resolution, not calibration: RES ~ 0.0048 vs the ~0.03 needed for Brier ≤ 0.22, driven by ~57 picks/day published near p = 0.5** [TRUST-SIGNAL, SCHEME].
- Reliability is already 0.004–0.02 and the n ≥ 100 sample floor is met at ~150 settled — Brier is the only failing eligibility floor.
- The `selectivePublishSweep` delta sweep (0 to 0.18) has never been run against live settled data; the answer "how many picks should we publish" is expected to be far below 57/day.
- A previous audit found 18 findings (D1–D15) in `handoff/AUDIT_FINDINGS.md`; 2026-08-12 findings include two CRITICAL (`next-auth`/`@auth/core` cluster) since patched — `npm audit --omit=dev` now reports 0 critical, 2 high.
- Settlement correctness is load-bearing: `operating-kernel.ts:178` "exception(s) (DISPUTED / orient / path) need human evidence — never force-settle"; the unpersisted hold inflates DEGRADED status.
- Age attestation and self-exclusion mechanisms genuinely absent (P1c) — informational compliance layer exists (`/responsible-play` with NCPG, GamTalk, GA links).
- B2B rate limiter counts in a module-level Map (real in dev, largely fictional on Vercel).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the RES program — selective publishing by |p − 0.5| threshold — is the engine's volume-vs-quality decision mechanism; integrity condition guards against metric gaming.
- TRUST-SIGNAL: Murphy Brier decomposition targets (BS ≤ 0.22, ECE ≤ 0.05, reliability ≤ 0.05, 3 GREEN windows) are the monetization gate the engine must clear.
- TRUST-SIGNAL: founder gate policy — `PUBLIC_PICKS` publish is allowed; `STATS_PUBLIC` and `PERFORMANCE_STATS` are the honesty boundary for track-record claims; preflight hard-fail on publicPicks was over-strict.
- TRUST-SIGNAL: the never-force-settle doctrine (P1b) preserves pick-outcome truth over settlement completeness.
- OTHER: rate-limit coverage (8/176 routes) is a cost-protection fact (Odds API bills per call).

## Engine-actionable? (yes/no + one-line what)
Yes — the RES program gives the engine its publication filter design: sweep |p − 0.5| delta thresholds against settled data, require Var[P|accepted] ≥ 0.03 for Brier ≤ 0.22, and validate the rejected set at Brier ~0.25 before any volume reduction.
