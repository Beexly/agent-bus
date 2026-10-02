# docs/dfs/research/2026-09-13/verify/ownership-hunt-2026-09-13.md

## What it is (1-2 sentences)
A 2026-09-13 game-day hunt across 16 DFS content sources for free numeric Week 1 2026 ownership projections, yielding 5 numeric hits plus qualitative reads and explicit paywall/staleness exclusions.

## Key metrics/methods (formulas where given, else "not specified")
- not specified (no formulas; the file reports other outlets' ownership-model outputs, not a method). Methods noted: FantasyAlarm's ownership model (site-split by DK/FanDuel), FantasyLabs model-based figure.

## Data sources named
- FantasyAlarm ("NFL DFS Game Stacks Week 1, 2026," ~Sept 12, free); FantasyLabs (Tyler Schmidt, Sept 13, free); DraftKings Network ("NFL DFS Tournament Picks: Best GPP Plays for Week 1," Sept 10, free); RotoWire ("NFL DFS Picks & Projections Week 1," Sept 11/12, free). Checked with no numerics: RotoGrinders (free articles qualitative; numeric projections behind Premium), Stokastic, SaberSim blog, Establish The Run, DFSArmy, FantasyCruncher, FantasySixPack, LineupLab/DailyFantasyCafe, SI, 4for4, numberfire, thedeepshot, FantasyAlarm. Excluded as stale: SI 2025-season ownership tables.

## Findings (numbers and facts, not vibes)
- [TRUST-SIGNAL] Joe Burrow + Ja'Marr Chase "nearly 30% rostered on both DraftKings and FanDuel" — "the highest-owned QB/WR pair on the slate" (FantasyAlarm model, site-split, same ~30% each site).
- [TRUST-SIGNAL] Justin Herbert "barely 14% on DraftKings but over 21% on FanDuel" (FantasyAlarm model) — the cleanest free FanDuel-specific numeric on the slate; an 7-point-plus site split on the same QB.
- [TRUST-SIGNAL] Lamar Jackson "around 5%" owned — "a stud quarterback drawing around 5% ownership" (FantasyLabs, Sept 13).
- [TRUST-SIGNAL] Drake London "well under 10% ownership in Week 1" — upper bound, DK slate (DraftKings Network, Sept 10); same article: Herbert "approach 10% ownership or more" (lower bound, DK).
- [TRUST-SIGNAL] Bucky Irving "ownership expected in the single-digits" — band, DK slate (RotoWire, Sept 11/12); same article qualitative: Jahmyr Gibbs "most popular player on the slate," Michael Mayer "will be chalky."
- [TRUST-SIGNAL] Qualitative-only reads: Olave "almost as much ownership as [Amon-Ra] St. Brown"; Mayer "highest-owned tight end on the slate"; Jonathan Taylor "one of the more heavily-owned backs"; Loveland "notably chalkier on FanDuel than DraftKings"; Garrett Wilson "meaningfully more ownership on DraftKings than FanDuel"; Josh Allen/DJ Moore "barely owned on either site."
- [TRUST-SIGNAL] Paywall map: numeric tables live behind RotoGrinders Premium, Stokastic (no free article surfaced), 4for4 ("Ownership Projections for FanDuel and DraftKings - Week 1" paywalled); free numeric tables mostly embedded in articles, not dedicated pages.
- [OTHER] SI near-miss EXCLUDED: SI's full numeric tables (e.g., Chase Brown 26.1% DK / 16.9% FD, Chase 18.5% DK / 17.4% FD) are the 2025 season Week 1 (49ers on slate, Fields on PIT, Brian Thomas "2024 OROY") — numbers do not transfer to the 2026 slate.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] The file's core intelligence value is ownership-market mapping: the two site-split deltas (Herbert 14% DK vs 21%+ FD; Loveland FD-chalkier; G. Wilson DK-chalkier) show ownership is site-dependent, so a single-slate ownership number is a bias source — engine should model ownership per site.
- [TRUST-SIGNAL] The Burrow/Chase ~30% pair figure plus Gibbs-as-most-popular gives the engine a real (if thin) ownership prior for Week 1 leverage decisions; the paywall map tells the engine which sources will never yield free numerics.
- [OTHER] No QB-BEHAVIOR, COACHING, OL, or SCHEME intelligence in this file.

## Engine-actionable? (yes/no + one-line what)
Yes — one-line: wire the five numeric/bound ownership reads (Burrow/Chase ~30%, Herbert 14% DK/21%+ FD, Lamar ~5%, London <10% bound, Irving single-digits) as site-aware ownership priors for Week-1 GPP leverage, and the paywall map as source-reliability metadata.
