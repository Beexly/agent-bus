# engine/research/2026-09-28/ranking-basis-census-measured.md
## What it is (1-2 sentences)
Measured census (2026-09-28) of which sort-key branch orders the public board: `confidence` — measured anti-predictive at its top — orders 34.8% of the settled published population (1,015 of 2,913 rows), all of it legacy June–July 2026; August–September rows carry `rankingP` on 100% so the anti-predictive branch orders nothing live today. Kept on record as legacy, not live — flagged SUPERSEDED IN PART.

## Key metrics/methods (formulas where given, else "not specified")
- Sort cascade in `apps/web/lib/ranking/sort-key.ts`: (1) `factorBreakdown.rankingP` (monotone, n 1,390); (2) `factorBreakdown.rankingScore / 100`; (3) `confidence / 100` — anti-predictive (n 2,385; conf 80+ claims 0.8663, realizes 0.5191, z = −10.7).
- Census method: read-only Neon `gse-postgres` branch `main` role `hermes_ro`; SQL pulled `confidence` + `factorBreakdown` JSONB for rows where `"result" IN ('WIN','LOSS') AND "isPublished" AND NOT "isBootstrap"` — 2,913 rows, 12.5 MB — then ran `readRankingKey()` and `readSignedEdge()` copied byte-for-byte from `sort-key.ts` in Node (in-process because the function's JS type checks don't reproduce in SQL; the earlier SQL-only attempt returned the wrong answer: `confidenceShare = 0`).
- Population: picks total 4,165 → settled (WIN/LOSS) 3,493 → census population (published, non-bootstrap, graded) 2,913.
- Census result: `rankingP` 1,898 rows (65.2%); `rankingScore` 0 rows (0.0%); `confidence` 1,015 rows (34.8%). `confidenceShare = 0.3484`.
- Confidence-branch rows by decile: conf 90–99: 30; 80–89: 84; 70–79: 155; 60–69: 301; 50–59: 445. 114 rows in the 80+ bands where confidence is measured most anti-predictive.
- Primary key: `comparePicksByRanking` ranks on `readSignedEdge()` first, cascade second. 1,766 rows (60.6%) carry a finite `expectedClv` (the primary key); the remaining ~39% carry no estimate and fall through to the cascade → 34.8% ordered at least in part by confidence.
- Legacy split (the load-bearing correction, same day): all 1,015 confidence-branch rows are June–July 2026; August and September picks carry `rankingP` on 100% of rows. Legacy detail in `ranking-basis-census-legacy-split.md`.

## Data sources named
- Neon Postgres `gse-postgres`, branch `main`, role `hermes_ro`, table `picks` (JSONB columns `confidence`, `factorBreakdown`, `expectedClv`).
- Code: `apps/web/lib/ranking/sort-key.ts` (readRankingKey, readSignedEdge, comparePicksByRanking); `apps/web/lib/calibration/ranking-basis-census.ts` (`loadRankingBasisCensus()`, zero non-test callers).
- Prior measurements: `loadConfidenceTail` (conf 80+ claims 0.8663 vs realizes 0.5191, z = −10.7).
- Companion: `ranking-basis-census-legacy-split.md` (month split + the two wrong SQL queries).

## Findings (numbers and facts, not vibes)
- 34.8% (1,015/2,913) of published graded rows are ordered by `confidence`, a key measured anti-predictive at its top (conf 80+: claims 0.8663, realizes 0.5191, z = −10.7, n 2,385); 65.2% by monotone `rankingP`; 0% by `rankingScore` (dead code today).
- 114 rows sit in the 80+ confidence bands where the inversion is strongest.
- 60.6% (1,766) of rows carry a finite `expectedClv` and are ordered by the engine's own signed edge first; ~39% are unmeasured and fall through to the cascade.
- Critical qualification: the entire 34.8% is legacy June–July 2026 — nothing a customer sees today is ordered by the anti-predictive branch; August/September picks are 100% `rankingP`.
- Surviving concern is measurement, not the live board: a backtest/calibration fit over all settled picks mixes a well-ordered recent sample with a June–July sample that has no `rankingP`.
- First version of this doc led with `confidenceShare = 0` from a wrong SQL FILTER; the real function labels the same 1,015 rows `basis: "confidence"`. Lesson kept on record: a measurement whose SQL doesn't reproduce the function's semantics produces a confident, plausible, wrong number.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- confidence is ANTI-predictive at the top (conf 80+ claims 0.8663 vs realizes 0.5191, z = −10.7) — TRUST-SIGNAL (calibration honesty: own confidence score inverts at the top)
- `rankingP` measured monotone (n 1,390) — the good key — TRUST-SIGNAL (validated ordering signal)
- `rankingScore` = 0 rows across the whole population — dead code — OTHER
- `loadRankingBasisCensus()` has zero non-test callers — the metric existed but nobody measured it — TRUST-SIGNAL (instrumentation gap)
- Backtest over all settled picks mixes well-ordered recent sample with rankingP-less legacy sample — TRUST-SIGNAL (backtest hygiene: sample-composition bias)
- Lesson: SQL that doesn't reproduce function semantics yields confident wrong numbers — TRUST-SIGNAL (measurement integrity)

## Engine-actionable? (yes/no + one-line what)
Yes — give `loadRankingBasisCensus()` a founder-facing caller and re-run after every MODEL_VERSION bump so the ranking-basis share cannot silently drift; quarantine June–July 2026 rows out of backtest/calibration fits.
