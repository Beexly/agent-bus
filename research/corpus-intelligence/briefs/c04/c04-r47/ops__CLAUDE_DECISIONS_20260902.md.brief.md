# docs/ops/CLAUDE_DECISIONS_20260902.md
## What it is (1-2 sentences)
A detailed decision log of the 2026-09-02 final launch pass on branch `claude/final-launch` (on PR #684), documenting 12 numbered decisions (D1–D13, D8 in sequence) about settlement grading, calibration floors, confidence-tail monitoring, game deduplication, CI, and fixes from Devin/cubic code reviews — each with evidence and tripwire tests.

## Key metrics/methods (formulas where given, else "not specified")
- Calibration floors: Brier ≤ 0.22, ECE ≤ 0.05; gates stay closed (PERFORMANCE_STATS, LIVE_BOARD, PUBLISH_LEDGER, CALIBRATION_ADJUSTMENTS OFF; PUBLIC_PICKS ON).
- Production read, 1,663 graded WIN/LOSS picks: overall Brier 0.2727, Murphy uncertainty 0.2493 (base rate 52.6%), reliability 0.0288, resolution 0.0054; Brier after perfect recalibration (uncertainty − resolution) ≈ 0.244. Best single version (v5.2.7, n=353): 0.2489. Metrics artifact (n=981): 0.2430, ECE 0.0513.
- Floor of 0.22 needs resolution ≈ 0.03, six times the model's actual resolution.
- Confidence buckets 80–99 (n=144) won 33–47%; the 100 bucket (n=8) won 87.5%; tail is inverted (claims 82–96%, wins under half) — monitor via `confidence-tail.ts`, do not ship as probability.
- Re-read 2026-09-03: ≥80 tail is 152 picks, 61 wins (40%), mean claimed 86%.
- MLB moneyline skill-score comparison (123 picks with stored closing price): model Brier 0.2227 vs raw-market 0.2343 (vig flatters market ≈ 0.006); CLV beat-close rate 6.5%; n too small to move goalposts.
- MIN_BOOKMAKERS = 2 in the scorer; single-book ESPN odds rejected for scoring.
- Game deduplication: MLB 284, MLS 75, NFL 48, NCAAF 45 duplicate groups; merge = alias via `Game.mergedIntoGameId`, never re-point picks (unique constraint `[gameId, pickType]`).
- 92 picks sat overdue for 9 days when the Odds API key was rejected (2026-08-24 15:05 UTC) before free-first settlement ordering (D1).
- Settlement grace window 6h, cap ≥ 200.

## Data sources named
ESPN finals + registered consensus (free pass), The Odds API (paid supplement), TheRundown (provider fallback), ESPN public odds (`overUnder` → totals), nflverse labelled-season fetch, production `picks` table, `/api/ops/public-surface-truth` ops truth surface, cockpit calibration page.

## Findings (numbers and facts, not vibes)
- D1: Settlement order is free pass first, paid Odds API pass only as PENDING-scoped supplement; a failing supplement never turns the cycle red.
- D2: Calibration floors kept; the gap is a model (resolution) gap, not a map gap — the only way to turn the gate GREEN would be lowering it.
- D3: The ≥80 confidence tail is anti-predictive (isotonic map would turn "85" into "37"); monitored, not published, with WARN in `npm run launch:ready`.
- D4: CFB totals degrade visibly rather than estimating a line when odds feeds fail; a totals pick needs a real market line.
- D5: Duplicate games merged via alias tombstone; re-pointing picks is forbidden; bare shared-city tokens ("Los Angeles", "New York", "Chicago", "Manchester") are not auto-grouped.
- D6: CI replays migration history blocking (`prisma migrate deploy` + drift check); `db push` removed from CI.
- D7: Week 1 hot path = one covering index `@@index([isPublished, isBootstrap, generatedAt])` on `picks` (2.6k picks / 2,584 rows, 7.9 MB); no new caching because entitlement-dependent output is never cached.
- D9: Devin + cubic review fixes — seed rows `ON CONFLICT DO NOTHING`, starved-cycle Sentry reporting, date-window scoping, `dataFreshnessAt` stale-pick predicate, 2h baseball / 18h other twin-match windows, brand-lint "AI generated pick" variants, nflverse zero-row floor retry, agent bash guard hardening.
- D10: Second critique review — 5 of 9 claims false in this checkout; cockpit tail/coverage sections added; merge dry-run saves JSON plan to `scripts/ops/out/`.
- D11–D13: Devin/cubic review rounds closed; notable: external watchdog vocabulary is `healthy | degraded | dead | unknown` (never "ok"); `launch:ready` verdicts are body-aware on 503s; confidence-tail public endpoint restricted to published, non-bootstrap, non-seed rows.
- D8: Gates-closed posture is the launch-ready state: every number shown is real, every number hidden has a visible reason.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- ≥80 confidence tail inversion (claims 82–96%, wins 40%) — tagged OTHER (model calibration/QC; no QB-behavior signal).
- MLB moneyline CLV beat-close 6.5%, model Brier beating raw market — tagged OTHER (market-benchmark comparison, not scheme/QB behavior).
- Everything else — tagged OTHER (settlement pipeline, CI, game deduplication, caching policy).

## Engine-actionable? (yes/no + one-line what)
Yes — re-run the confidence-tail check on current graded picks: the ≥80 bucket must not be published as probability while inverted; keep maps OFF per the floors.
