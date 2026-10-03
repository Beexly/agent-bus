# ops/PROVE_THE_EDGE.md
## What it is (1-2 sentences)
One-sitting owner runbook converting "trust us" into a reproducible calibration proof: env/credential prep, historical corpus backfill (games + team efficiency + frozen-model settlement), live settlement, the market-vs-model calibration read, and the CLV public-claim gate — every step tagged READ vs OWNER-ONLY WRITES vs OWNER-ONLY FLAG.
## Key metrics/methods (formulas where given, else "not specified")
Calibration/edge metrics named, formulas not derived here: CLV (Closing Line Value) as the north star; market baseline = de-vigged CLOSING moneyline Brier decomposition / ECE / reliability curve over `HistoricalGame`; results-only Elo-vs-market comparison; CLV coverage via `loadClvCoverage`; public claim gated at `public-clv-policy.ts:89-96` (beat-close rate believable at ~100% coverage only). Constants: MAX_SEASONS_PER_CALL=2 for team-efficiency backfill (1999→current+1); backfill picks stamped `isBootstrap=true`; settlement overdue CRITICAL band 5.
## Data sources named
nflverse (CC-BY-4.0) via two cron routes: `backfill-historical-games` → `HistoricalGame` (schema prisma:2855), `backfill-team-efficiency` → `TeamGameEfficiency` (prisma:2889, 1999→current); market baseline = closing moneyline from HistoricalGame; CLV graded via `clv.ts`/`clv-capture.ts` primitives in `@sports/prediction-engine`.
## Findings (numbers and facts, not vibes)
- Honest framing (from `docs/strategy/PATH_TO_PROVEN_EDGE.md`): a sustained 70% ATS win rate does not exist; even the best pro operations live at 53–55% ATS, 57% sustained is legendary; the close is the most accurate public prediction (~50/50 by design).
- Edge target: CLV vs obtainable price on a SELECTIVE subset, proven over 200+ fired bets — not a headline win rate; backfill alone does not prove an edge.
- `TeamGameEfficiency` is the only non-market NFL independent leg in the proof chain (consumed by `settle-sport.ts`; previously unwired from live surfaces).
- Historical settlement backfill re-runs the FROZEN model on pre-game info only; `MODEL_VERSION` is never bumped from this runbook; `BACKFILL_WRITE=1` required to write; idempotent on [gameId, pickType].
- Honest empty state: with no `HistoricalGame` rows, `loadMarketCalibrationBacktest` returns `status: "no-data"` with "run the backfill" note — never a fabricated chart.
- Safety: the two backfill cron routes are intentionally NOT in vercel.json crons — owner invokes them.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: the proven-edge proof chain (calibration + CLV) — methodological context for the engine's accuracy claims, not football behavior intelligence.
## Engine-actionable? (yes/no + one-line what)
Yes (adjacent) — defines the engine's evidentiary standard (200+ fired bets, ~100% CLV coverage, CLV-vs-close as north star) and names `TeamGameEfficiency` as the only independent NFL leg for model-vs-market comparison.
