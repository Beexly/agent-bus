# dfs/research/2026-09-13/verify/tier1-salaries-2026-09-13.md
## What it is (1-2 sentences)
A FanDuel NFL Week 1 (Sun–Mon slate, Sep 13–14, 2026) salary verification report for 8 Tier 1 players, using a two-independent-allowed-source confirmation rule; all 8 salaries were marked UNVERIFIABLE because no claimed salary had two independent confirming sources, and no corrections were made.

## Key metrics/methods (formulas where given, else "not specified")
Verdict methodology (not specified as formulas):
- CONFIRMED = at least two independent allowed sources agree on the salary
- CORRECTED = allowed-source evidence contradicts the claimed salary (correct value + sources given)
- UNVERIFIABLE = adequate evidence could not be found (no number invented)
- Excluded sources list: FantasyPros, numberFire, DK Network, thehuddle, FantasyAlarm, FantasyLabs, FanDuel Research, RotoBaller, RotoWire, ESPN, CBS, NFL.com, PlayerProfiler, Reddit, FOX Sports, Sporting News, SI, Athlon, USA Today, NBC Sports.

## Data sources named
- FantasyLife (allowed, Sep 11, 2026 article "FanDuel NFL DFS Week 1 Plays") — single allowed source listing Saquon Barkley $8,100 and Justin Jefferson $8,100
- Checked-but-unproductive allowed sources: RotoGrinders, FantasyCruncher, Stokastic/Awesemo, SaberSim blog, DFSArmy, FantasySixPack, LineupLab, Establish The Run, FantasyData, SportsLine, Yahoo Sports, Covers, VegasInsider, LineupHQ, DailyFantasyCafe, PFN free NFL DFS optimizer, FTN Fantasy (2026 content was DraftKings pricing only), GamblingSite, Optimus Fantasy "The DFS Show" YouTube Week 1 episode (Sep 12, 2026)

## Findings (numbers and facts, not vibes)
Claimed FanDuel salaries (all UNVERIFIABLE, none corrected):
- Saquon Barkley (RB, PHI): $8,100 — single allowed source (FantasyLife, Sep 11, 2026); no second source
- Dallas Goedert (TE, PHI): $5,300 — no allowed source found
- DeVonta Smith (WR, PHI): $7,500 — no allowed source found
- Kyler Murray (QB, MIN): $7,200 — no allowed source found
- Justin Jefferson (WR, MIN): $8,100 — single allowed source (FantasyLife, Sep 11, 2026); no second source
- T.J. Hockenson (TE, MIN): $5,000 — no allowed source found
- Sam LaPorta (TE, DET): $5,800 — no allowed source found
- Jacksonville Jaguars DST: $4,800 — no allowed source found; banned-source articles listed JAX at $5,000 (not counted as evidence; flagged for manual in-app check before lock)
- Slate note: Week 1 FanDuel salaries typically identical across slates sharing the same games; no main-slate vs. Sunday–Monday discrepancy found for any player.
- Bottom line: zero CONFIRMED, zero CORRECTED; no numbers invented.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: The report demonstrates strict sourcing discipline (two-independent-source rule, banned-source list, no number invented when evidence is thin) — a data-integrity standard that applies to any engine salary/projection intake pipeline.
- OTHER: No football-strategy content (no QB behavior, coaching, OL, or scheme material). The file is purely a data-verification artifact, not a strategy/film document.

## Engine-actionable? (yes/no + one-line what)
No — it records unverifiable Week 1 2026 salaries with no confirmed values; the only action is a manual in-app re-check of JAX DST ($4,800 vs banned-source $5,000) before lock.
