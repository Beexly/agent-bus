# docs/ops/ESPN_PUBLIC_ODDS_FREE_PATH.md
## What it is (1-2 sentences)
Design doc (2026-08-10) for a free tertiary market-odds path using the undocumented public ESPN JSON API (pseudo-r/Public-ESPN-API) after the Rundown free tier hit HTTP 429 and the Odds API key was absent/misnamed — never invents quotes (empty soft-fail when ESPN has no ML).
## Key metrics/methods (formulas where given, else "not specified")
Odds cascade order: Odds API → Rundown → ESPN public. ESPN odds advance market clock + densify `marketFairProb` for live p. PROVEN still requires Brier ≤ 0.22 via RES lift (independent trueProb + selective + pause dead groups). Rate-friendly: scoreboard once + per-event odds, inter-sport pause.
## Data sources named
Odds API (canonical env THE_ODDS_API_KEY, with expanded ODDS_API_KEY_ENV_NAMES / RUNDOWN_API_KEY_ENV_NAMES aliases); Rundown; ESPN public JSON (`espn_public` bookmaker key, title `ESPN/{provider}`); ops visibility at `public-surface-truth.oddsInserting.dualPath.espnPublicTertiary`.
## Findings (numbers and facts, not vibes)
- Last oddsInserted>0 was 2026-07-25 (market clock dark) when this path was designed.
- Markets: h2h required; spreads + totals when present. Sports mapped: NFL, NCAAF, MLB, NBA, NCAAB, NHL, MLS, EPL (Odds-API sport keys).
- The path does not flip LIVE_BOARD / PROVEN / PERFORMANCE_STATS.
- Wiring: `packages/data-ingestion/src/espn-odds-client.ts`; `process-sport.ts` tertiary when primary+Rundown empty; `refresh-odds.ts` always allows ESPN (`espn-free-path` sentinel); on Rundown 429 cascade still tries ESPN.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the never-invent-quotes soft-fail and the honesty that this is not a "Brier magic wand" (PROVEN still needs Brier ≤ 0.22 via RES lift).
- OTHER: free market-data infra.
## Engine-actionable? (yes/no + one-line what)
yes — keep ESPN tertiary as the free market-clock fallback for fair-probability inputs, but gate all PROVEN claims on the Brier ≤ 0.22 RES path.
