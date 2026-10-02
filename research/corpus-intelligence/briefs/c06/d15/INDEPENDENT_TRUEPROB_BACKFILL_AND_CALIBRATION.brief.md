# ops/INDEPENDENT_TRUEPROB_BACKFILL_AND_CALIBRATION.md
## What it is (1-2 sentences)
Operational spec for the cron `GET /api/cron/backfill-independent-trueprob`, which retrospectively enriches settled WIN/LOSS MONEYLINE picks with independent trueProb (mapped to the published side) solely for calibration scoring, plus a guide to interpreting the calibration-metrics report and the PROVEN path's floors.
## Key metrics/methods (formulas where given, else "not specified")
- PROVEN path floors: Brier ≤ 0.22 (floor 0.22); ECE ≤ 0.05 (under floor); settled n ≥ 100 (eligibility); independent coverage ≥ 40% to win bestScore; separation = mean p|win − mean p|loss must be > 0; GREEN streak needs consecutiveGreen K=3.
- bestScore = argmax of Murphy RES among kinds with separation > 0, n ≥ 50, coverage ≥ 40%; coverage (independent) = n_indep / n_(ML∪SPREAD), TOTAL excluded from denominator.
- Live numbers (approx, post-backfill): settled n ~339 (met, floor 100); Brier ~0.247 (above 0.22 floor); ECE ~0.039 (under floor); Murphy RES ~0.002 (low — raise via independent ranking); independent_trueProb n ~291; independent coverage (ML/SPREAD) ~65%; bestScore (plan) = independent_trueProb.
- Live eligibility p hierarchy in `live-calibration-p.ts`: (1) marketFairProb (book de-vig), (2) independent trueProb, (3) MONEYLINE confidence/100 (provisional), (4) SPREAD/TOTAL without fair p → excluded.
- `extractProvenPathProbs` (`apps/web/lib/calibration/proven-path-rows.ts`): pIndependent = independentEdge.trueProb, else rankingP if rankingSource === "independent_trueProb".
- Backfill procedure per settled published non-seed WIN/LOSS MONEYLINE pick missing `factorBreakdown.independentEdge.trueProb`: (1) rebuild independents (Kalshi / FPI / ClubElo / Poisson / Elo) for the game; (2) map trueProb to the published selection side; (3) merge into `factorBreakdown.independentEdge` only.
- Never rewritten: selection, line, result, settledAt, confidence, pickGrade, tier, rankingP / rankingSource (audit trail).
- Murphy decomposition: Murphy REL = reliability (calibration error component, lower better); Murphy RES = resolution (ranking power, higher better). Isotonic/Platt maps cut REL only; RES stays flat — maps do NOT raise RES. What does NOT get you PROVEN: sample size alone; isotonic/Platt maps; claiming ROI while eligibility RED; using confidence-echo rankingP as independent.
- Market kill-switch: uses last IngestionRun with status=SUCCESS AND oddsInserted > 0; quiet board/empty-provider SUCCESS with oddsInserted=0 must not reset the clock. Dual path: THE_ODDS_API_KEY (aliases) and/or Rundown; Rundown fetches 7-day event window; default `daySpan` is 2 (override via RUNDOWN_DAY_SPAN); abort remaining days on first HTTP 429; cascade-skip later sports after a 429; longer inter-sport pause when Odds API absent.
## Data sources named
- Kalshi, FPI (ESPN Football Power Index), ClubElo, Poisson, Elo — the independent model ensemble rebuilt per game for backfill.
- The Odds API (marketFairProb, book de-vig; THE_ODDS_API_KEY aliases).
- TheRundown (THERUNDOWN_API etc.; 7-day event window fetch; free-tier rate limits with HTTP 429).
- `IngestionRun` records; `factorBreakdown.independentEdge`; `public-surface-truth.oddsInserting`.
## Findings (numbers and facts, not vibes)
- Backfill target: every settled published non-seed WIN/LOSS MONEYLINE pick lacking independentEdge.trueProb; currently independent_trueProb n ~291 vs settled n ~339.
- Integrity law: no inventing (empty independents → skip), no PERFORMANCE_STATS/PROVEN flip from backfill; labeled retrospective enrichment for calibration only.
- Path after backfill: raise coverage → re-run calibration-metrics → GREEN ticks if separation > 0 and Brier/ECE under floors → after streak K=3 + publish policy, PERFORMANCE_STATS may open (founder decision).
- `dead_groups` bottleneck: without priced independentEdge.trueProb on settled rows, the bake-off can only score confidence-echo kinds, not independent_trueProb/blend_indep_conf.
- Market data: signal board does NOT require oddsInserted > 0 (slate-fresh kill switch); public-surface-truth.oddsInserting shows dual-path key presence + last zero-odds SUCCESS.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (OTHER) Independent ensemble for calibration: Kalshi / FPI / ClubElo / Poisson / Elo — five independent trueProb sources mapped to the published side.
- (TRUST-SIGNAL) Integrity law: retrospective enrichment labeled for calibration only, never rewriting published picks or flipping PROVEN — audit-trail honesty doctrine.
- (OTHER) Murphy REL/RES decomposition: isotonic/Platt maps cut REL only; ranking power (RES ~0.002, low) must come from genuinely independent ranking, not maps or confidence-echo.
- (OTHER) Brier ~0.247 vs 0.22 floor and ECE ~0.039 under the 0.05 floor: the path is blocked by ranking power, not calibration error or sample size.
## Engine-actionable? (yes/no + one-line what)
No — this is an ops/calibration-infrastructure document (backfill cron + report interpretation), not a new predictive model or feature to wire; the Kalshi/FPI/ClubElo/Poisson/Elo ensemble rebuild pattern is already the existing mechanism.
