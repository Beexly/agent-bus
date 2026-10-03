# docs/data/LAUNCH_RUNBOOK.md
## What it is (1-2 sentences)
The ordered NFL-kickoff launch program for Galaxy Sports Edge (written Fri 2026-08-22): three checkable launch gates (EDGE / PROOF / TRUST), a week-by-week card dispatch sequence across 7 card decks (81 cards), and a founder owner-action checklist of 20 items. It is an ops/infra document, not sports modeling research.
## Key metrics/methods (formulas where given, else "not specified")
- PROOF-MILESTONE trigger: ≥100 settled canonical picks + published calibration report; CLV target ≥52.4% for the next rung (ESTABLISHED).
- CL1 READY gate: ≥200 close-both-sides prop markets + ≥400 trajectories≥3.
- Cron cadence: `refresh-odds` */15 × 7 sports, `board-fill`, `settle-picks` hourly at :20.
- Launch posture: `FORCE_NO_BET_IF_STALE=true` week 1; gate ladder order `CANONICAL_HISTORY_ENABLED` → derived history → `PUBLIC_PICKS_ENABLED` → `PERFORMANCE_STATS_ENABLED`.
## Data sources named
The Odds API (paid settlement path, `THE_ODDS_API_KEY` REQUIRED in `deploy:ready`), free settlement path (`free-settlement.ts`), line archive (`LINE_ARCHIVE_ENABLED` / `EVENT_ODDS_INGEST_ENABLED` / `LINE_ARCHIVE_EU_PINNACLE`), Stripe, Vercel cron, Google OAuth.
## Findings (numbers and facts, not vibes)
- 81 cards across 7 decks: 11 PUBLIC, 70 INTERNAL/CROWN.
- **PL1 grading bug (CRITICAL, confirmed real, not hypothetical):** free-settlement path matches finals by team-pair + calendar-day only, no game ID (`settlePendingPicks()` L281-334). A same-day MLB doubleheader yields two finals under one matchupKey; code takes `candidates[0]`, silently grading against the wrong game. Concrete repro: Astros 4-2 Game 1 / Rangers 6-1 Game 2 — a Game-2 pick grades as WIN off Game 1's score. Zero test coverage, zero anomaly.
- **PL2 (HIGH):** PR #550's `?path=free` forced-drain can run against the same game as the paid path in the same window; each writes `Game.homeScore/awayScore` from its own source with no cross-path comparison — second path silently overwrites, contradicting an already-settled pick. Fix: new `SCORE_MISMATCH_CROSS_PATH` anomaly, human-reviewed.
- **PL3 (MEDIUM):** PROVEN-gate self-audit reads `learning?.nEligible` (this cycle's single-digit batch) as if cumulative settled count — can report "3/100" forever after true count clears 100.
- Guard hole evidence: proven SAFE_CONTEXT bypass ("68% win rate across 500 settled picks" passes); `/api/dfs/salaries` ungated (LQ1, "the one real hole"); Elite "real-time" alerts copy downgraded to "graded-pick alerts" (LQ10).
- EDGE class refuses honestly: scanners/forecaster/pricing are `priced:false`, fail-closed; nothing enters live p without masterplan §6; modules refuse with ACCUMULATING on thin archive (by design).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Doubleheader mis-grading / cross-path score overwrite → TRUST-SIGNAL (settlement integrity is the foundation of published records)
- PROOF gate ≥100 settled + published calibration; CLV ≥52.4% → TRUST-SIGNAL
- Claim-governance guards (SAFE_CONTEXT bypass, numeric-pass exemption LQ11) → TRUST-SIGNAL
- Card inventory / fleet orchestration → OTHER
## Engine-actionable? (yes/no + one-line what)
Yes — fix settlement matching to use game ID (not team-pair + calendar-day) and refuse cross-path FINAL score overwrites; integrity of settled records underpins every public calibration claim.
