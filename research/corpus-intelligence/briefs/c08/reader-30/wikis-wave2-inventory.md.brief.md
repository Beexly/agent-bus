# docs/research/2026-09-28/github-nfl-sweep/wikis-wave2-inventory.md
## What it is (1-2 sentences)
Inventory of GitHub wiki search hits for "NFL" (5 pages, 2026-09-28); signal was on pages 1–2 and five standout repos were identified for GSE value, with the rest deprioritized as junk/noise.
## Key metrics/methods (formulas where given, else "not specified")
Not specified. The standout of interest: **dgrifka/nfl_simulator** — deserve-to-win metric with OLS weights on 2016–2023, 40k-draw bootstrap, degeneracy bands, sequencing-luck studies (EPA/WPA, red-zone gap measures S0–S4), FG-read-side fix, magnitude audit.
## Data sources named
GitHub wiki search (`/search?q=NFL&type=wikis`), plus standouts: dgrifka/nfl_simulator, pseudo-r/Public-ESPN-API, sx-bet/sx-bet-api-docs, lumifyai/lumify (docs/sports/nfl-api.md), shubhsheth/sports-calendar (docs/ESPN_API.md).
## Findings (numbers and facts, not vibes)
- 5 standout wikis: nfl_simulator (75 numbered research docs — called the most methodologically rigorous single-build NFL model doc on GitHub), Public-ESPN-API (undocumented ESPN endpoints, 20+ sports, league slugs; NFL slug `nfl`), SX.bet API docs (on-chain sportsbook reference), Lumify NFL API pattern (agent-facing sports API template), sports-calendar ESPN_API.md (Core vs Site API; season-ID convention noted as a trap to codify).
- Wiki search exposes only text snippets, no repo URLs — each hit required targeted search.
- Deprioritized: MagicMirror NFL module, nfl-combine-for-AI (name-only junk), Kalshi bot wikis, a Korean finance repo, IPTV EPG wikis.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: dgrifka/nfl_simulator deserve-to-win + luck-adjustment method is a candidate engine benchmark for luck-adjusted outcomes.
- TRUST-SIGNAL: ESPN Core API season-ID convention trap to codify (data-integrity rule).
- OTHER: Lumify agent-facing API pattern = template if GSE ever exposes an API.
## Engine-actionable? (yes/no + one-line what)
Yes — do a full read-through of dgrifka/nfl_simulator's deserve-to-win docs for luck-adjustment and validation rigor; audit ESPN adapter against Public-ESPN-API endpoint map.
