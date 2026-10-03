# docs/ops/2026-08-21-GROK-PROMPT.md
## What it is (1-2 sentences)
An unattended-agent work order for GROK (running on the founder's local machine) dated 2026-08-21: a two-lane task list (Lane A local-only tasks, Lane B parallel-safe queue) with hard rules, a PR format, and a "never stall" loop. It is an operational snapshot of what the build org believed was true on 2026-08-21, not a research or intelligence document.
## Key metrics/methods (formulas where given, else "not specified")
- Key numbers it asserts as current state: apps/web 11,526 tests passing; prediction-engine 2,423 tests passing; tsc 0 errors; guardrails chain exit 0.
- B4 specifies a margin mixture model: continuous Stern-normal component for the game-margin distribution mixed with discrete point masses at key numbers 3, 7, 6, and 10, fit against settled NFL TeamGameLog margins, exposed as a spread/cover-probability estimator. [OTHER]
- B7 cites academic grounding to be used in code comments only: Ville's inequality / anytime-valid e-processes (Ramdas, Waudby-Smith testing-by-betting literature) for e-processes; Knightian-uncertainty robust Kelly via a Beta credible-set worst case for robust Kelly. [TRUST-SIGNAL]
- B3 specifies Wilson-lower-bound testing for `wilsonLowerBound` (e.g. n=100, successes=55) and fail-closed branches (n<1; non-finite LCB; boundLevel outside [0.8, 1]; missing boundMethod; missing provenanceId or walkForwardProtocol). [TRUST-SIGNAL]
## Data sources named
- The Odds API (`THE_ODDS_API_KEY`), Kalshi (ToS question open — single named BLOCKED item gating a live pick-confidence input), ClubElo (`api.clubelo.com`), PredExon catalog, Kalshi series `KXNFLSPREAD`/`KXNFLTOTAL`, ESPN power index (`ESPN_POWERINDEX_LICENSED`).
- The prompt states as verified: `curl kalshi.com/terms` returns HTTP 429 from the cloud container, and `api.clubelo.com` connection-times-out from cloud egress — both must be probed from the founder's local machine.
## Findings (numbers and facts, not vibes)
- Kalshi ToS was the named BLOCKED item gating a LIVE pick-confidence input (A1); registering `kalshi` in `apps/web/lib/scraping/source-rights-registry.ts` had zero hits (unstarted). [TRUST-SIGNAL]
- 30 of the last 30 runs of `external-watchdog.yml` failed (schedulerLiveness.status compared against "ok", not in the union); `external-cron.yml`'s refresh-odds job guarded on a cron literal `on.schedule` that is never declared, so it never fires on schedule. [TRUST-SIGNAL]
- B1 documents a confirmed live bug shape: `mockDb()` dispatched count() results by positional index with EIGHT keys while `load-performance.ts` issues NINE `db.pick.count()` calls — the same VOID-count positional-shift bug shape already caught in prod (#454/#456). [TRUST-SIGNAL]
- `test:integration:db` was wired into package.json but appeared in ZERO `.github/workflows/*.yml` files — it had never run in CI (gap R7). [TRUST-SIGNAL]
- The `leakage gate` docstring documents a prior defect: the gate was mathematically INVERTED — it shuffled a bare number[] and took mean(|CLV|), both permutation-invariant, so real edge FAILED the gate and zero edge PASSED. [TRUST-SIGNAL]
- The file's scope is operational (build queue, ToS, CI), not player/coaching/scheme intelligence. [OTHER]
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- All substantive intelligence content is TRUST-SIGNAL: the Kalshi/ClubElo live-confidence blockers, the leakage-gate inversion, the confidence-display gating (display-substantiated), and the no-bet-gate/glass-receipts audit chain. [TRUST-SIGNAL]
- The margin-mixture model (B4) with key-number point masses is a spread/cover-probability estimator relevant to game-model construction, not behavior intelligence. [OTHER]
- No QB-behavior, coaching, OL, or scheme findings in this file. [OTHER]
## Engine-actionable? (yes/no + one-line what)
Yes — B4's margin mixture model (Stern-normal + key-number masses at 3/7/6/10, monotone cover-probability) is a build-ready model spec, and A1/A4 name the two live-confidence inputs (Kalshi, ClubElo) blocked only on terms verification.
