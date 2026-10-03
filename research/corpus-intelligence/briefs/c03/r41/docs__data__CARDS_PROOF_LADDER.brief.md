# docs/data/CARDS_PROOF_LADDER.md
## What it is (1-2 sentences)
Wave PL work-order deck (8 cards, PL1–PL8) for pick lifecycle settlement correctness, per-sport settled-sample visibility, the public calibration surface, and Elite CLV ledger surfacing — covering the pick → publish → settle → grade → calibrate → PROVEN pipeline.
## Key metrics/methods (formulas where given, else "not specified")
- PROVEN gate: canonicalSettled ≥ 100 AND calibrationPublished AND settlementHealthy (apps/web/lib/autonomy/revenue-ladder.ts); advances on founder YES only
- Canonical settled count = COUNT(result IN [WIN,LOSS,PUSH], isPublished, !isBootstrap, modelVersion≠"v5.0.0-seed") — cumulative DB truth
- Settlement cadence: settle-picks cron hourly (vercel.json "20 * * * *"); stale backlog >3d drained by backfillStaleSettlement()
- Murphy/Brier calibration: loadPublicCalibrationReport() → computeCalibration() reads db.pick rows with signalSnapshot.eligibleForLearning:true (VOID/DISPUTED/HELD excluded by construction)
- CLV fields already populated on every settled Pick: clvValue, clvVerdict, clvCloseLine, clvClosePrice, clvLockLine, clvLockPrice (graded by gradePickClv/gradeFreePathClv)
## Data sources named
Odds API (paid path), ESPN/henrygd (free path via free-settlement.ts, ncaa-consensus.ts); DB (Neon via Prisma); calibration offline harness scripts/export-settled-picks-for-calibration.mjs + scripts/calibration-offline/run.mjs (CIR/PAVA/Shin dry-run)
## Findings (numbers and facts, not vibes)
- PL1 CRITICAL: free-path settlement matches by team-pair + calendar-day only (no game/event ID), taking candidates[0] — a same-day MLB doubleheader (e.g., Game 1 4-2 Astros, Game 2 1-6 Rangers) can silently mis-grade a Game-2 pick on Astros -1.5 as WIN when it LOSES; zero doubleheader tests existed
- PL2 HIGH: ?path=free (PR #550) lets free path run while a paid key is present; free path unconditionally overwrites game.homeScore/awayScore even when paid path already wrote FINAL — no cross-path score reconciliation; anomaly kind SCORE_MISMATCH_CROSS_PATH proposed
- PL3 MEDIUM: free-settlement-runner.ts passes per-cycle learning.nEligible (a handful of picks) into canonicalSettled slot consumed as cumulative vs the 100 floor — PROVEN signal reads perpetually "X/100" low
- THREE settled-count sources of truth materially disagree: public-performance-policy (cumulative), canonical-sample-posture (same query, ops-framed), settlement-learning.nEligible (this-cycle only)
- In-season 2026-08-22 (per getInSeasonSports()): NFL(preseason feed only), NCAAF (highest game-count slate), MLB (only sport with full month of volume), MLS; NBA/NCAAB/NHL dark by design
- Settled-picks count today: UNKNOWN — no fixture/seed materializes a canonical sample; must not be invented
- CLV gap: edge-lab kernel clvDeflator/portfolioKellyStakes have zero importers under apps/web; /track page is localStorage-only manual log with no path to the platform's own graded CLV fields; Elite is priced as including "CLV/line-value ledger"
- PL7 gap: loadPublicCalibrationReport() computes data.updatedAt but calibration-panel.tsx never renders it (root non-negotiable 5: no stale data)
- Open Q: HELD/AMBIGUOUS_MATCH and DISPUTED picks are never persisted (row stays PENDING forever until a later cycle resolves); PRs #555/#556/#557 are unrelated covariate-bus/props PRs, not a dependency
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Pick result integrity (PL1/PL2) is the highest-leverage TRUST-SIGNAL in the whole deck: a mis-graded published pick destroys calibration credibility [TRUST-SIGNAL]
- Canonical settled count ≥ 100 as PROVEN floor is the sample-size gate the engine's public claims depend on [TRUST-SIGNAL]
- CLV per settled pick (lock line vs close line) is the engine's primary market-timing measurement, currently unwired to any user surface [TRUST-SIGNAL]
- Freshness timestamp on calibration report = anti-staleness trust primitive [TRUST-SIGNAL]
- No QB-BEHAVIOR/COACHING/OL/SCHEME content in this file [OTHER]
## Engine-actionable? (yes/no + one-line what)
Yes — wire the per-pick CLV fields (clvValue, clvVerdict, close vs lock) into the calibration/feedback loop so line-timing accuracy is measured and weighted per pick.
