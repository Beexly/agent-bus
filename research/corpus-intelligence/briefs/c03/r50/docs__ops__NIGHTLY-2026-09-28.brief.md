# docs/ops/NIGHTLY-2026-09-28.md
## What it is (1-2 sentences)
The 2026-09-28 00:15 CT nightly status from an autonomous session: two production bugs fixed during a 2+ hour outage (board 500 from an untraced bundle file; ingest OOM from unfiltered parse), plus two structural blockers found and left unfixed — an un-backtested live signal and a data-coverage ceiling on the tuner.
## Key metrics/methods (formulas where given, else "not specified")
- Test evidence: `packages/data-ingestion` 2455/2455 pass (10/10 new); typecheck 7 errors (unchanged pre-existing baseline, zero in touched files); lint clean; trust-gate PASS.
- Bug 2 detail: `player_stats_week` is one 33,447,747-byte nflverse file spanning every season since 1999; fix filters the season *during* the parse and materializes only 18 read columns; coverage measured over every row via a new `onRow` observer (filtering before the coverage check would have silently stopped the current season arriving).
- Un-backtested live signal: `packages/prediction-engine/src/signals/situational/short-week-road-deficit.ts` is wired into the signal registry emitting `res.spreadPointAdjustment`; docstring asserts magnitudes as "Empirical Domain Characteristics" with no backtest and no source: **−1.75 baseline, −0.65 over 1500 miles, "34% increase in 4th-quarter explosive plays"**. Spec rule 6: backtest every rule before it touches a live projection; a rule that can't prove itself doesn't ship. Needs backtest or demotion to unweighted observation.
- TUNE-BLOCK-1: `teams` table has 0 rows → tuner cannot join player signals to game outcomes; settled population is 63% MLB while the only depth-chart source is NFL, so even a perfect crosswalk caps the tuner at **4.9% of the corpus**. Player `signals` table: 0 rows.
## Data sources named
nflverse (`player_stats_week`), Neon Postgres, Vercel deploys/logs, PRs #925–#931, `AGENT_LEDGER.md` (421 rows).
## Findings (numbers and facts, not vibes)
- The board was down over an untraced file, not a wrong path: `outputFileTracingIncludes` covered `/stats`, `/admin/statking`, `/fable` but not the cron routes; webpack cannot trace a runtime `fs` read built from `join()` + `existsSync()`; fixed by tracing the dataset into the two crons that read it, no guard weakened. [OTHER]
- The OOM fix removed the wrong memory: #929 streamed the gunzip (released retained *gz bytes*, left retained *records*); correct fix filters season during parse. [OTHER]
- short-week-road-deficit magnitudes (−1.75 baseline; −0.65 over 1500 miles; 34% increase in 4Q explosive plays) are asserted with NO backtest and NO source while live in the projection path — a spec-rule-6 violation. [SCHEME]
- Tuner is data-capped, not engineering-capped: 63% of settled picks are MLB but depth charts are NFL-only → 4.9% corpus ceiling; `teams` table 0 rows; player `signals` table 0 rows; spec build order 2–3 shipped, order 4–6 (fill signals table, off-field intake, backtest adjustment rules 1–6) outstanding. [OTHER]
- Process lesson: never rewrite `AGENT_LEDGER.md` wholesale — first attempt from a stale read risked collapsing a 421-row ledger shared with other agents; targeted patches only. [OTHER]
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
The short-week-road-deficit signal is SCHEME (situational spread adjustment for travel/rest disadvantage — magnitudes directly touch projections). The tuner-coverage ceiling is OTHER (data-ops), though it gates every calibration claim (TRUST-SIGNAL-adjacent). The rest is OTHER (outage repair, ledger hygiene).
## Engine-actionable? (yes/no + one-line what)
Yes — the −1.75/−0.65/34% short-week-road-deficit magnitudes must be backtested against nflverse data before staying in the projection path, or demoted to unweighted observation.
