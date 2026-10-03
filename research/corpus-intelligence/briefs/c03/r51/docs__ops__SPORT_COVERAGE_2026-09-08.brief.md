# docs/ops/SPORT_COVERAGE_2026-09-08.md
## What it is (1-2 sentences)
A measured, read-only sport-by-sport database audit (2026-09-08) that found every NFL fixture exists ~2.5× in the DB from three writers minting three different game IDs, quantified duplicate rows and stranded-pick risk per sport, and documented the author's own two measurement corrections about sport-specific book posting horizons.
## Key metrics/methods (formulas where given, else "not specified")
- Rows per real fixture (14-day forward window): NFL 78 rows / 31 fixtures = 2.52; MLB 179/160 = 1.12; NHL 22/21 = 1.05; NCAAF 180/173 = 1.04; MLS 49/49 = 1.00. Zero tombstones in any sport.
- NFL Week 1 Sunday 2026-09-13: 12 real fixtures, 36 rows, 3 namespaces; odds-bearing namespace: 12/12 fixtures with 2+ books, avg 11.0 books, 20 published picks; other two namespaces: 0 picks.
- Merge tool replicate (pick count → odds count → age ordering): 652 fixtures merged would strand 578 published picks (MLB 420, NCAAF 90, MLS 49, NFL 19, NHL 0). Caveat: replication ordering is approximate, not unit-exact.
- Coverage per real fixture: NFL next 7 days 15/15 = 100%, beyond 7 days 245/257 = 95%; NCAAF next 7 days 74/97 = 76%, beyond 7 days 7/161 = 4%; MLB next 7 days 16/80 = 20%, beyond 7 days 0/159 = 0%.
- MLB forward pricing by kickoff proximity: under 24h 12/12 = 100%; 24–48h 4/15 = 27%; 2–4 days 0/18 = 0%; 4+ days 0/196 = 0%. Odds rows: 11,450 (<24h) vs 408 (24–48h) vs 0 beyond — last fetch 0.0h ago, so the 27% is the market, not refresh lag (INFERENCE marked by the author).
- Ground-truth audits: NFL settled picks 0/66 on wrong-score rows; MLB 169/491; NCAAF 2/51.
- Hash-ID writer stopped minting NFL/MLB rows (last NFL hash row 2026-08-22); ESPN ingestion continuing (NCAAF 134 rows created in 48h).
## Data sources named
Neon Postgres via read-only SELECT (MCP); `scripts/ops/merge-duplicate-games.ts`; `apps/web/lib/ops/game-merge-plan.ts:253` (selectCanonical); `packages/ingestion-pipeline/src/seed-games-from-espn.ts:81`; `packages/ingestion-pipeline/src/game-identity.ts`; `packages/data-ingestion/src/espn-schedule-seed.ts:121`; `packages/data-ingestion/src/espn-odds-client.ts:361`.
## Findings (numbers and facts, not vibes)
1. Three writers mint three different IDs for one contest: `espn:<short>:<id>` (schedule seed), `espn:<sportKey>:<id>` (espn-odds-client), bare 32-hex hash (paid Odds API path); `resolveCanonicalGame` reconciliation exists but evidently misses cases; zero tombstones anywhere (OTHER).
2. NFL Week 1 (2026-09-13) forward pricing per real fixture is 100% for the next 7 days and 95% for the season — the healthiest sport in the product; its only real issue is latent duplication, not live coverage (TRUST-SIGNAL).
3. Merge is unsafe today: `merge-duplicate-games.ts` never moves `picks` (treated as settlement history) and tombstones alias rows, so running it would hide 578 published picks; a companion re-point/withdraw step is required first (TRUST-SIGNAL).
4. The C-115 score-corruption structural precondition (multiple rows per fixture + SCORE_MISMATCH_CROSS_PATH refusing to overwrite a final) exists for NFL too; MLB has 34.4% (169/491) of checked rows carrying another fixture's final; corruption is measured absent from NFL settled history so far (TRUST-SIGNAL).
5. The author's double self-correction is a method lesson: fixed-denominator aggregates across sports with different posting horizons measure the calendar, not health; correct bars: NFL weeks (100%/95%), NCAAF ~week (76%), MLB ~day (100% under 24h), MLS a few days (86% within 2 days) (OTHER).
6. MLB settled-history problems stand: 169/491 rows with another fixture's final, 62 wrong published moneyline results, 420 of 578 strandable picks are MLB's (TRUST-SIGNAL).
7. NHL 0% priced and NBA no forward schedule (furthest scheduled game 2026-06-14) are season-timing, not defects — worth rechecking in October (OTHER).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Finding 1: OTHER
- Finding 2: TRUST-SIGNAL
- Finding 3: TRUST-SIGNAL
- Finding 4: TRUST-SIGNAL
- Finding 5: OTHER
- Finding 6: TRUST-SIGNAL
- Finding 7: OTHER
## Engine-actionable? (yes/no + one-line what)
Yes — single canonical fixture identity is the fix: pick one canonical namespace, make writers resolve to it before insert, and add a pick re-point/withdraw companion before any merge.
