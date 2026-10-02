# docs/data-sources/research/2026-09-18/2026-09-18-ngs-replacement-spec.md

## What it is (1-2 sentences)
A drop-in specification for replacing three rule-based heuristic enrichers in `agents_website_list/AdvancedDataEnrichment.py` with measurements the platform already persists in the `NextGenStat` Prisma table (written daily via the `refresh-player-stats` cron), written as a naming/honesty contract: measurements must never be labeled with heuristic names.

## Key metrics/methods (formulas where given, else "not specified")
- **Table**: `NextGenStat` (Prisma schema `packages/db/prisma/schema.prisma`), unique on `(gsisId, season, week, seasonType, statType)` — grain is **player-week**, never per-play. Every row carries `rightsSnapshot` and `fetchedAt`. Written daily by `apps/web/app/api/cron/refresh-player-stats/route.ts:144-145` via `ingestNextGenStats` (`apps/web/lib/ingestion/next-gen-stats.ts`) for statType in passing, receiving, rushing.
- **Fields**: receiving — `avgCushion` (defender alignment at snap), `avgSeparation` (at catch point), `avgYac` / `avgExpectedYac` / `avgYacAboveExpectation`, `catchPct`, `pctShareIntendedAirYards`; passing — `avgTimeToThrow` (snap→release, seconds), `avgIntendedAirYards`, `avgCompletedAirYards`, `avgAirYardsToSticks`, `cpoe`, `expectedCompletionPct`, `completionPct`, `aggressiveness` (throws into tight windows); rushing — `avgTimeToLos` (snap→LOS, seconds), `pctAttemptsGte8Defenders`, `rushYardsOverExpected`, `rushYardsOverExpectedPerAtt`, `expectedRushYards`.
- **Gap 1 (per-defender route coverage)**: replace rule-based defender grades of 60–95% with per-receiver-week `avgCushion` + `avgSeparation` joined to opponent via schedule; defensive side = opponent aggregate separation/cushion allowed per week. Naming rule: `coverage_exposure_*`, never `per_defender_*` — exposure, not assignment.
- **Gap 2 (time to pressure)**: replace heuristic timing profile (deep 2.5s / short 3.0s / intermediate 4.0s) with measured `avgTimeToThrow` (passer-week) + `avgTimeToLos` (rusher-week), paired with sack-and-hit rate from play-by-play as an explicit FLOOR proxy (hurries absent in nflverse/FTN). Three corrections to the constants: (1) scale — test-pinned real values: two QBs at 9.1 avg intended air yards read 2.799s and 2.970s (claimed 4.0s is 35–43% above); (2) ordering — profile puts deep 2.5s BELOW short 3.0s, inverted and non-monotone since time-to-throw rises with depth; (3) definition — profile says "seconds before snap" but time-to-throw/pressure is measured FROM the snap FORWARD. Naming rule: `time_to_throw_*`, never pressure.
- **Gap 3 (WR vs CB matchup)**: replace hand-set priorities (WR→CB 95%, WR→LB 80%) with differential: receiver's `avgSeparation`/`avgCushion` vs opponent defense's allowed aggregate for the same week, plus `pctAttemptsGte8Defenders` for run side. A differential is a matchup feature, not an assignment.
- **Governing rule**: a measurement is produced by observing the world; a heuristic constant by judgment — substituting the second while keeping the first's name breaks the track record.
- **Uncertainty**: `conformal-calibration.ts:174` returns positive infinity below `minN` 20 rather than clamping (correct pattern); `apps/web/lib/calibration/cqr.ts:12-15` clamps and is a known defect; small-sample intervals must refuse, not pretend coverage.

## Data sources named
- nflverse NextGenStats CSV (flagged in `reports/rights/pfr-advstats-verdict-2026-07-16.md` as "equally third-party-sourced with no explicit grant, not a safe substitute" — rights is a live founder question; rows carry `rightsSnapshot`).
- nflverse play-by-play (sack-and-hit rate as FLOOR proxy for pressure).
- `packages/data-ingestion/src/__tests__/nflverse-ngs.test.ts` (pins real values verified live against source to the decimal, 2026-07-03).
- `agents_website_list/AdvancedDataEnrichment.py`, its `UncertaintyQuantification.py` (keep as-is; ensemble/Bayesian/conformal).
- AGENTS.md:2277-2279 (sack-and-hit FLOOR proxy reference).

## Findings (numbers and facts, not vibes)
- [QB-BEHAVIOR] Verified live NGS test pins: two QBs averaging 9.1 intended air yards threw at 2.799s and 2.970s — the heuristic's "intermediate 4.0s" constant is 35–43% above the measured band.
- [QB-BEHAVIOR] `avgTimeToThrow` and `aggressiveness` (tight-window throw rate) are per-passer-week measured fields — QB-behavior features can be built from this table without scraping.
- [COACHING] Pressure must be proxied, not measured: hurries are absent from nflverse and the FTN subset, so the repo uses sack-and-hit rate as an explicit FLOOR proxy; time-to-throw is NOT time-to-pressure (a hypothesis with its own test).
- [SCHEME] Coverage is only available as opponent-aggregate exposure: receiver `avgCushion`/`avgSeparation` vs defense-allowed aggregates per week; no named-defender assignment exists in any platform source — naming a feature `per_defender_*` imports false certainty.
- [SCHEME] Matchup features = differential (receiver's normal vs defense's allowed) rather than hand-set priority matrices (WR→CB 95%, WR→LB 80%).
- [OTHER] Grain constraint: player-week supports weekly matchup features but cannot support per-play kinematics (speed/acceleration/separation per frame) — that is the NFL's enterprise-only tracking feed.
- [OTHER] Rights constraint: the nflverse NGS feed is third-party-sourced with no explicit grant and "not a safe substitute"; per-row `rightsSnapshot` exists but the founder must resolve whether anything built on it is served to customers.
- [TRUST-SIGNAL] Small-sample honesty pattern: `conformal-calibration.ts:174` returns +∞ below minN 20 (refuses rather than clamps); `cqr.ts:12-15` clamps — a known defect; spec keeps `UncertaintyQuantification.py` (ensemble/Bayesian/conformal) as the uncertainty lane.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
QB-BEHAVIOR (measured avgTimeToThrow, aggressiveness, air-yard depth bands per passer-week); COACHING (pressure-as-floor-proxy caveat, time-to-throw ≠ time-to-pressure hypothesis); SCHEME (coverage_exposure differentials, WR-vs-defense matchup as differential not assignment); TRUST-SIGNAL (honest naming rules, +∞ below minN 20, rights snapshot); OTHER (grain/rights constraints).

## Engine-actionable? (yes/no + one-line what)
Yes — gives exact table/field names, join grain, naming contracts, and measured value bands to build player-week QB coverage/matchup features directly into the engine's enrichment layer once rights are cleared.
