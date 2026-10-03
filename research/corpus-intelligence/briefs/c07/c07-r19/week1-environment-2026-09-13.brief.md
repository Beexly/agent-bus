# dfs/research/2026-09-13/deep/week1-environment-2026-09-13.md
## What it is (1-2 sentences)
Deep research on the FanDuel NFL Week 1 (Sept 13–14, 2026, 14-game Sun–Mon slate): a verdict on the "Week 1 teams revert to identity" thesis, a 2025 neutral-pace table for all 14 games, a weather table, late-breaking news sweep, and cross-checks of Garrett's stack ideas.
## Key metrics/methods (formulas where given, else "not specified")
Pace metric: 2025 neutral pace (Q1–Q3, within 14 pts; lower clock = faster) and neutral dropback/pass rate. Weather impact threshold: 15+ mph wind as the cutoff (no game hit it). Backfield concentration stats (team rush-attempt share, snap share) used as a "concentration" test. Methods per sub-claim: source-driven verification (Dawgs By Nature/JP Acosta, PFF opening-play data, Fantasy Footballers usage data).
## Data sources named
Sharp Football (pace), Dawgs By Nature via SB Nation's JP Acosta, PFF (2021–25 opening-play data), Fantasy Footballers (Week 1 usage predictiveness), Sports Illustrated (carry projections), DK Network, Sporting News, PFN (weather), thefalconswire, Rapoport (news). Referee crews marked UNAVAILABLE (not findable in free sources).
## Findings (numbers and facts, not vibes)
- 2024 Week 1: only 2 QBs topped 300 yds (vs 6 in 2023 W1); 8 QBs hit 250+ (vs 13 in 2023) — run-identity half of thesis SUPPORTED.
- PFF 2021–25 opening-play run rates: Chiefs 73.0%, Patriots 66.7%, Giants 62.5%, Lions 60.4%, Falcons 60.0%.
- Week 1 CONCENTRATES backfields (2025 W1): Chase Brown 91.3% of team rush attempts, Tony Pollard 85.7%, Kyren Williams 91% snap share — "use two RBs" half REFUTED.
- 2025 neutral pass rates: ARI 65.3% (highest), KC 63.1%, CIN 61.9%, LAC 61.2% vs BAL 50.1%, NYJ 49.9% (lowest).
- Fastest games: DAL@NYG (30.40), NO@DET (30.91), WAS@PHI (32.49); slowest: TB@CIN (33.79), MIA@LV (33.59), ATL@PIT (33.53).
- Paradox: TB@CIN had the HIGHEST total (51.1) on the SLOWEST pace — scoring is efficiency/matchup-driven there; NO@DET had pace AND total (50.7), the best fantasy environment.
- Weather: only CLE@JAX mattered (34–46% t-storms, 88–96°F, feels 101°F) — slight run-lean, possible delay; no 15+ mph wind anywhere.
- Week 1 usage is predictive: RBs with 10+ Week 1 opportunities average 100+ season points; TEs need 6+ targets for relevance breakeven (Fantasy Footballers).
- New-scheme caution: BAL (Jesse Minter era), ATL (Kevin Stefanski era), LAC (Mike McDaniel OC) — "revert to identity" weakest there.
- Confirmed late news: Cooper Rush back spasms / rookie Jack Strand possibly playing for ATL; Madubuike OUT boosts Jonathan Taylor; Odunze ACTIVE; Quinn Ewers benched for Mullens; Mahomes 9 months post-ACL vs DEN #1 sack D; Kyler Murray named MIN starter.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Week 1 backfield concentration into workhorses (not committees) — TRUST-SIGNAL, COACHING
- Run-heavy teams running 60–73% on opening plays — SCHEME, COACHING
- Neutral pass-rate structural stability (ARI 65.3% vs BAL 50.1%) — SCHEME
- Week 1 usage predictiveness for RB/TE season roles — TRUST-SIGNAL
- New-coach regime identity uncertainty (BAL/ATL/LAC) — COACHING
- Mahomes 9 months post-ACL with mobility limits vs #1 sack defense — QB-BEHAVIOR, OL
- Tunsil (WAS LT) on IR boosting PHI pass rush angle — OL
## Engine-actionable? (yes/no + one-line what)
Yes — feed 2025 neutral pace + neutral pass-rate table into slate environment features for game-speed/volume priors; add Week-1-specific rules (concentrate backfield projection onto lead back, treat 10+ opportunity Week 1 as role-signal).
