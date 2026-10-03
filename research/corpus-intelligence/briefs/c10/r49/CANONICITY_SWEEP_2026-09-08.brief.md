# ops/CANONICITY_SWEEP_2026-09-08.md
## What it is (1-2 sentences)
A read-only 2026-09-08 audit measuring how many of the 15 query sites in the repo respect `mergedIntoGameId`, the database's canonicity marker (non-null = duplicate row, not a real fixture), with a measured live impact on pick generation.
## Key metrics/methods (formulas where given, else "not specified")
Measured via Neon MCP SELECT plus repo reads; every figure labeled MEASURED unless marked otherwise. Coverage: 3 of 15 files that query `games` apply the filter. Slate query (`generate-signal-slate.ts:166`) uses `take: 80` over a 21-day horizon with no dedupe.
## Data sources named
Neon `games` table (board state measured against the current board).
## Findings (numbers and facts, not vibes)
- Only 3 of 15 query sites respect the marker: `apps/web/lib/board/state.ts`, `apps/web/lib/board/market-coverage.ts`, `packages/ingestion-pipeline/src/game-identity.ts`; the other 12 (dashboard, sitemap, passes, slate-twin, free-score-persist, shadow-evaluation-pass, generate-drafts, generate-signal-slate, process-sport, settle-sport, freeze-slate-commitments, team-game-log-repair) do not. [OTHER]
- Zero rows are tombstoned today in any sport, so 11 of the 12 non-filtering sites are latent, not live bugs. [OTHER]
- LIVE impact on NFL: 744 rows in the 21-day window, 658 distinct real fixtures, only 71 fixtures the slate can reach; 9 of 80 slots (11%) lost to duplicate rows carrying no odds; the "21d signal board" is effectively ~4 days (reaches 2026-09-12). [TRUST-SIGNAL]
- NFL averages 2.52 rows per fixture, so the waste grows as Week 1 enters the window. [OTHER]
- Correct sequence: filters first, then the pick-stranding companion, then the merge — the filters are a prerequisite for `ops:merge-games`, not a follow-up. [OTHER]
- C-163 measured that running `ops:merge-games` today would strand 578 published picks. [TRUST-SIGNAL]
- The recommended fix is dedupe before the cap, not raising the cap — a bigger number buys more duplicates. [OTHER]
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
Findings tagged OTHER and TRUST-SIGNAL; no QB-BEHAVIOR, COACHING, OL, or SCHEME content present.
## Engine-actionable? (yes/no + one-line what)
Yes — deduping the signal-slate query before its take:80 cap would reclaim 11% of the pick-generation budget; and the canonicity filters are a founder-gated prerequisite before any game-merge to protect settlement integrity.
