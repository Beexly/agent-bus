# docs/ops/ODDS_FREE_DUAL_PATH_HONESTY.md
## What it is (1-2 sentences)
Accepted-architecture status document stating the product's odds coverage is a paid single-path (The Odds API) with 7 sports having no free cleared odds source — i.e., honest disclosure that no free multi-source dual-path odds coverage exists.

## Key metrics/methods (formulas where given, else "not specified")
- Live production (2026-08-08) from `GET /api/ops/public-surface-truth` → `freeSpine`: `criticalGaps` = **7**, `requireSpend` = **7**, `freeCovered` = **59**, `paidSinglePath` = **true**, `sportsWithGames` = 7/7 probed, `withinSla` = true (odds age ~12m).
- Free-path ABSENT-only law; Live Board certifiable only on primary path; settlement runs odds-api path when an Odds key is present.
- Free candidates remain gated until rights/counsel: Polymarket Gamma, Kalshi, TheRundown (catalog clear), Big Balls, Sports Game Data.

## Data sources named
The Odds API (primary), TheRundown (failover-only backup on primary hard-fail — explicitly NOT dual-path clear).

## Findings (numbers and facts, not vibes)
- The 7 mustSpend cells with no free cleared odds: americanfootball_nfl, americanfootball_ncaaf, basketball_nba, basketball_ncaab, baseball_mlb, icehockey_nhl, soccer_usa_mls.
- `criticalGaps === requireSpend === 7` → pure paid single-path; TheRundown key existing does not close dual-path; `freeCovered`=59 counts non-odds free cells, not odds dual-path.
- Anti-patterns explicitly ruled out: inventing lines or synthetic free odds; forcing the free path by emptying `THE_ODDS_API_KEY` while still wanting paid; firing Live Board on backup-only slate.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER**: Data-sourcing/ops architecture — no QB behavior, coaching, OL, or scheme content.

## Engine-actionable? (yes/no + one-line what)
No — accepted architecture with a founder-owned spend decision; the usable signal is the `/api/ops/public-surface-truth` → `freeSpine` contract for monitoring odds-path health.
