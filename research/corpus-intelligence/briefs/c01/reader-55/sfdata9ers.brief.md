# docs/props/research/2026-09-18/notes/sfdata9ers.md
## What it is (1-2 sentences)
Source notes (index read 2026-09-18) on @sfdata9ers — a popular X account posting NFL data-analytics charts, identity confirmed via SI articles embedding his posts — plus notes on the data sources behind his charts (FTN StatsHub charting, nflverse PBP, Mock Draft Database probability matrices, consensus-big-board reach factors).
## Key metrics/methods (formulas where given, else "not specified")
Not specified in the file except: "relative reach factor" (e.g. 2.76; reach = actual pick − consensus rank) and mock-draft probability matrices (e.g. Downs 55% available at Pick 10 → 7% at Pick 11 across 79 mock drafts April 9–16, each team's probabilities sum to 1). Aaron Schatz via FTN interview: route-denominator metrics (yards per route run) are more stable/predictive than target-denominator metrics. Kickoff-coverage chart methodology not found — INFERENCE: likely nflverse kickoff PBP (kickoff/return/touchback plays + next drive start yardline) or FTN ST charting; denominators/exclusions (penalties, onside kicks, return TDs, end-of-half) unknown. Josh Allen "Career EPA/Play" heatmap: axis labels not found — INFERENCE: most plausibly nflverse PBP Allen dropbacks/rushes with cell = mean EPA/play.
## Data sources named
- FTN StatsHub (ftnfantasy.com/nfl/stats): human-charted by in-house team; every play includes route run, motion, coverage, concept, pressure, stacked box, play situation, offense/defense/ST splits; filters: team, player, play concept, formation, play situation, coverage, stacked box, pressure. Proprietary, subscription.
- Mock Draft Database (NFL Mock Draft Database) — availability gauges / full team-player probability matrices.
- nflverse (https://github.com/nflverse) — probable basis of the kickoff-coverage and Allen EPA charts.
- SI (si.com) articles embedding his X posts; NBC Sports fantasy draft-grades article citing his reach-factor list.
## Findings (numbers and facts, not vibes)
- Identity: "SFdata9ers, a popular account on X that posts data insights and analytics on the NFL" (SI, May 3 2026 cap-space chart).
- FTN's per-play charting inventory includes route run, motion, coverage, concept, pressure, and stacked box — i.e., the same charted dimensions underpin the Week 1 playcalling-tendencies chart.
- The reach-factor concept (actual pick − consensus rank) was cited by NBC Sports in 2026 NFL draft grades; 49ers got an F on his list.
- Route-denominator stability rule (Schatz): yards per route run beats yards per target on stability/predictiveness — a standing receiver-metric design principle.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR — Josh Allen career EPA/play heatmap (nflverse-sourced dropbacks/rushes, cell = mean EPA/play) as a QB-behavioral visualization archetype.
- SCHEME — Schatz's route-denominator rule (route-denominator metrics more stable/predictive); FTN charting dimensions (route, motion, coverage, concept, stacked box, pressure).
- OTHER — source provenance for a third-party analytics creator; mock-draft probability matrices; kickoff-coverage methodology gap.
## Engine-actionable? (yes/no + one-line what)
Yes — the Schatz route-denominator rule (prefer yards per route run over yards per target) is an actionable receiver-metric design principle for the engine's stability weighting.
