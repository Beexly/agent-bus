# data-sources/research/misc/scrape-wave-2.md
## What it is (1-2 sentences)
A prioritized 18-URL scrape backlog ("wave 2") to run through the same Firecrawl prompt as wave 1 (`docs/research/competitor-scrape-2026-09-12.md`), tiered by what the factor engine, projections table, optimizer/props board, calibration, and competitive intel are respectively blocked on.
## Key metrics/methods (formulas where given, else "not specified")
- MLB batter Statcast: barrel%, hard-hit%, EV50, LA SwSp%, exit velo avg, distance avg per player → `underlying` factor input.
- MLB pitcher Statcast: + spin rate, whiff%, chase%.
- FanGraphs projections: ATC, THE BAT, Steamer, ZiPS families and weights, per-player numbers for cross-model comparison.
- PrizePicks/Underdog public pick percentages: over/under split (example cited: 5,000-over / 3,700-under) → `consensus` factor.
- LineStar Props: Recent Form (L5, L10, Season, Last LG), Matchup+ Imp values; LineStar Ownership: Proj Own% vs Actual Own%, `pOwn%` column, `Own Diff` leverage.
- SaberSim ($7/7-day trial): lineup rules builder + contest sim controls (exposure, team stacks, game stacks).
- OddsShopper: portfolio EV method, custom devigging.
- RBSDM: EPA, Weighted EPA, garbage-time WP filter.
- Calibration: scikit-learn (Platt, isotonic, temperature scaling, reliability diagram code); grouping loss paper arXiv 2210.16315 (partitioning algorithm for the grouping-loss diagnostic); `aperezlebel/beyond_calibration` `src/partitioning.py` `cluster_evaluate`.
- Key diagnostic: grouping loss tells whether RES=0 means "no signal" or "collapsed signal".
## Data sources named
baseballsavant.mlb.com (statcast_leaderboard batters 2025, leaderboard/statcast pitchers 2025, statcast_search pitch-level); fangraphs.com/projections.aspx; propfinder.app/nfl (login gate blocked wave 1); prizepicks.com; underdogfantasy.com; linestarapp.com/Props + /Ownership (logged in); sabersim.com/dfs/draftkings; oddsshopper.com; rbsdm.com/stats; scikit-learn.org/stable/modules/calibration.html; arxiv.org/abs/2210.16315; github.com/aperezlebel/beyond_calibration; rotogrinders.com (LineupHQ, SimLabs, THE BAT); fantasylabs.com; actionnetwork.com; bettingpros.com.
## Findings (numbers and facts, not vibes)
- Tier 1 (factor engine blocked): Statcast batters, Statcast pitchers, FanGraphs projections, PropFinder NFL (needs sign-in), PrizePicks/Underdog public pick %.
- Tier 2 (optimizer/props board): LineStar Props + Ownership (logged in; wave 1 got column names only), SaberSim ($7/7-day trial), OddsShopper devigging, RBSDM EPA.
- Tier 3 (calibration): scikit-learn calibration page (partially captured already), grouping-loss paper full text, reference implementation.
- Tier 4 (competitive intel): RotoGrinders, FantasyLabs, Action Network, BettingPros.
- Do NOT scrape: sportsbook display prices without a license; fantasy sites that prohibit scraping (check `source-rights-registry.ts` first); anything putting a real book's quotes into a paid SaaS without rights.
- Named unlocks: PropFinder = `matchupSplit` factor (zone vs man, box counts); PrizePicks/Underdog = `consensus` factor; LineStar = real L5/L10 form + Matchup+ Imp + real pOwn% and Own Diff leverage; RBSDM = NFL EPA backbone; grouping-loss diagnostic for RES=0 interpretation.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [SCHEME] PropFinder matchupSplit (zone vs man, box counts, coverage matchup) and RBSDM EPA/garbage-time WP filter are the scheme-side inputs named for the NFL factor engine.
- [OTHER] `consensus` factor via public pick percentages is an explicit crowd-signal ingestion path (PrizePicks/Underdog over/under splits).
- [OTHER] Own Diff / pOwn% leverage is the DFS tournament-exposure signal named for the optimizer.
- [TRUST-SIGNAL] The do-not-scrape blocklist plus the source-rights-registry check is a documented rights gate — ingestion stops where licensing doesn't clear.
## Engine-actionable? (yes/no + one-line what)
**yes** — it's a standing backlog: run the 18 URLs through the wave-1 Firecrawl prompt, prioritizing the five Tier-1 factor-engine inputs (Statcast batters/pitchers, FanGraphs projections, PropFinder sign-in, PrizePicks/Underdog splits), while honoring the do-not-scrape rights blocklist.
