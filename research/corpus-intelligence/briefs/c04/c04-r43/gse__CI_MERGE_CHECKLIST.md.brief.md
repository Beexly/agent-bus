# docs/gse/CI_MERGE_CHECKLIST.md

## What it is (1-2 sentences)
An operational pre-flight and merge-order checklist for the GSE open PR stack (#218–#222), covering per-PR acceptance checks, post-merge verification, and explicit non-goals. It is process tooling with binding constraints (no LIVE_BOARD=1 in git, no 6h widen, no pav/ivap rewrite, no invented quotes/ROI), not analysis.

## Key metrics/methods (formulas where given, else "not specified")
Not specified — this is a checklist, not a model. Notable thresholds named: `MAX_CANDIDATE_ODDS_AGE_MS` must remain `6 * 60 * 60 * 1000` (6h); fetchedAt monitor thresholds 120 / 240 / 360 minutes; phase-C report line `888|359|283|0|(5b)=0 → ?`.

## Data sources named
None — repo-internal only (PR #220 DecisionCertificate stack; #218 402 circuit breaker; #219 Toxiproxy chaos staging; #221 fetchedAt monitor + cron wire; #222 Neon pool monitor). Non-goals named: LIVE_BOARD enable, 6h widen, Paid Odds API, Stripe/DNS/prices.

## Findings (numbers and facts, not vibes)
- Merge order: 1) #220 certificates, 2) #218 402 circuit breaker (fail-closed, no synthetic odds in fallback), 3) #219 Toxiproxy (docker/chaos only, staging-only, fail-closed hypotheses), 4) #221 fetchedAt monitor + cron, 5) #222 Neon pool monitor.
- PR-specific gates: #220 — Kelly not imported from public HTTP routes, no LIVE_BOARD enable, no pav.ts/ivap.ts rewrite; #221 — monitor never throws to cron, refresh-odds returns fetchedAt block + start/success/fail pings; #222 — index.ts must export the monitor without losing main stub/client helpers.
- Post-merge checks: CI green on main, crons still `*/30` refresh-odds, no LIVE_BOARD=1 in deployable config. Post-stack ops not blocking merge: HC_REFRESH_PING_URL / HC_ODDS_FETCHEDAT_PING_URL (founder), SQL on MAX(odds.fetchedAt) age, `npm run gate:phase-c` when quotes live.
- Status fields tracked per run: MAIN sha, LIVE_BOARD flag, PHASE C, SHIPPED, BLOCKERS, NEXT ONE ACTION.

## Intelligence connections
- [OTHER] CI/merge ops — no QB-behavior, coaching, OL, trust-signal, or scheme content.

## Engine-actionable? (yes/no + one-line what)
No — this is a one-off PR-stack merge procedure, not engine research; nothing to wire.
