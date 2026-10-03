# arxiv-program/research/2026-09-21/x-sweep-evening-2026-09-21.md
## What it is (1-2 sentences)
A Garrett-directed read-only X sweep (evening batch, 2026-09-21, ~18:05–18:11 CDT) inventorying nine supplied posts' metrics, definitions, values, dates, and stated data sources under a neutral-inventory standard — plus author-profile trails and an asset verdict on what is open-source vs commercial/paywalled.
## Key metrics/methods (formulas where given, else "not specified")
- WOPR (Weighted Opportunity Rating) = 1.5 × Target Share + 0.7 × Air Yards Share (Marvin Elequin, from nflfastR).
- Chart metrics logged: Yards After Contact per Rush × Avoided Tackles per Rush; catchable target rate (league avg 80.7%); catchable air-yardage rate (league avg 72.1%); QB table with Total QBR, EPA/Play, CPOE, success rate, time to throw, aDOT, YAC%, passer rating; WR YAC × Y/RR; routes run × receiving yards; Y/RR × targets per route run (linear fit 0.06x + 0.1, rSq = 0.514); proprietary throw grades (elite/great/solid/routine/bad/interceptable), Accuracy%, Accuracy+%, +play%/−play%/Cheap Play%, PGP; Week 2 team EPA/play bar chart.
## Data sources named
Commercial/paid: NFL Pro, PFF, SumerSports, TruMedia, FantasyPtsData (closed beta, invite code), RotoWire/OddsJam, Sumer Premium. Open-source: nflfastR (github.com/nflverse/nflfastR — R, MIT, 545 stars / 68 forks, v6.0.0, play-by-play back to 1999, nightly in-season, xP/WP/CP/xYAC models), nflreadpy (github.com/nflverse/nflreadpy — Python, MIT, 218 stars / 33 forks, load_pbp/player_stats/team_stats/schedules/rosters/snap_counts/nextgen_stats/ftn_charting/injuries/contracts/combine/depth_charts/trades/ff_opportunity; Polars DataFrames, caching; nflverse-data CC-BY 4.0, FTN CC-BY-SA 4.0). Proprietary manual film charting: @joea_nfl.
## Findings (numbers and facts, not vibes)
- Post 1 (elusive RBs, 2026 W1–2 excl. MNF, min 15 attempts): Kenneth Walker III (~4.4 YAC/rush, ~0.46 avoided tackles/rush) top-right; Kyle Monangai (~5.8 YAC, ~0.13); lowest Rico Dowdle (~2.5, ~0.025), Jacory Croskey-Merritt (~2.6, ~0.05), Jordan Mason (~2.8, ~0.075).
- Post 2: Terry McLaurin worst catchable target rate of 50 WRs w/ 10+ targets: 53.8% (13 tgt, 7 catchable) vs league avg 80.7%; Emeka Egbuka worst catchable air-yardage rate: 39.4% (165 AY, 65 catchable) vs league avg 72.1%.
- Post 3 (QB Week 2 table, pre-MNF): Brock Purdy 99.7 Total QBR, 0.99 EPA/play, 16.7% CPOE; bottom: Justin Strand 12.3, Cooper Rush 6.1.
- Post 5: Jaxon Smith-Njigba leads NFL in receiving yards (277) on 55 routes vs Chris Olave's 268 yards on 99 routes (JSN ranks 63rd in routes run).
- Post 6 (WOPR Week 2 leaders): Parker Washington (JAX) ~1.02, DeVonta Smith ~0.98, JSN ~0.95, Adonai Mitchell ~0.90.
- Post 8 thesis: QBs impacting the game less than in a decade; line play is everything; drops/busted routes rampant (proprietary film grades: Josh Allen A, Trevor Lawrence D+, Jared Goff D−).
- Post 9 (Week 2 EPA/play): SF 0.46, BUF 0.43 most efficient; ATL −0.47 worst.
- Asset verdict: only two open-source nflverse-ecosystem assets (nflfastR, nflreadpy) surfaced via chart footers; everything else commercial/paid or proprietary; no profile links GitHub/Kaggle/Substack/open API directly.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: pre-MNF Week 2 QB table (QBR/EPA/CPOE/TT/aDOT) gives an early-2026 baseline; JoeA's proprietary throw grades (Allen A, Goff D−, Lawrence D+) add a manual-charting trust signal but are paywalled.
- OL: post 8 thesis asserts line play is the dominant factor in early 2026 offensive variance — aligns with engine's trench-feature investment.
- TRUST-SIGNAL: WOPR = 1.5×TargetShare + 0.7×AirYardsShare is a public, reproducible opportunity metric from an open data source (nflfastR), usable as a WR props signal.
- OTHER: asset verdict matters operationally — nflfastR and nflreadpy are the only freely ingestible sources in this batch; everything else requires licensing.
## Engine-actionable? (yes/no + one-line what)
Yes — nflfastR and nflreadpy (both MIT, open) confirmed as the freely ingestible play-by-play + charting + nextgen sources; WOPR formula is a ready-to-wire WR opportunity feature.
