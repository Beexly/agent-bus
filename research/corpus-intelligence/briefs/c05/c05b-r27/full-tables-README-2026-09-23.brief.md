# research/2026-09-23/full-tables/README.md
## What it is (1-2 sentences)
Index README for the 2026-09-23 PM X-chart sweep: verbatim definitions, methodologies, and provenance for 13 transcribed chart CSVs (X posts from ~2:00–7:30 PM CDT Wed) plus six charts with no labeled values recorded narratively.

## Key metrics/methods (formulas where given, else "not specified")
- @sfdata9ers "QB EPA gained on Defensive Penalties": "expected points each QB gained from defensive penalties that otherwise wouldn't have produced any yards" (accepted penalties + plays with no yards gained only, Weeks 1–2 2026; unlisted players = 0).
- @sfdata9ers "Cost of Drops (EPA Differential)": "expected points each team has lost through two weeks due to drops"; formula **Air EPA + expected YAC EPA − Actual EPA**; data FTN; drops charted by @FTNFantasy. Two team rows unreadable (orange/Browns-like logos) recorded as UNKNOWN_ORANGE_LOGO_A/B.
- @MagicSportsGuy ARBY Matchup Rating (TNF Week 3, 7-game window 2025 Wk13–17 + 2026 Wk1–2): methodology stated in-chart verbatim — **65% ARBY / 35% RB YPC each side, offense and defense 50/50, game-weighted 5/2 across the two windows**; source statrankings.com/nfl/advanced/teams/trench-play/(offensive|defensive)-arby (public pages, first time linked). Image also shows a "last 5 games" prompt bubble vs chart title "7-game window" — recorded as displayed.
- @benbbaldwin "Pass Protection Ratings Composite": **PFF grade 40% + SIS blown block percentage 40% + ESPN pass block win rate 20%**, each source re-scaled 0–100; as of 2026-09-23.
- @PFF "QB ACCURACY INDEX" launch (article pff.com/news/nfl-qb-accuracy-report): ranked by CPOE with PFF grade + grade rank; interactive table labeled through Week 1 (33 qualified passers, min 21 dropbacks) while article titled Week 2; X-post Allen card +14.3 CPOE (26 attempts) recorded as displayed, not reconciled.
- @SumerSports "Most motion at the snap" (2026 Weeks 1–2, with 2025 comparators): NFL avg 37.9% (2025: 34.8%); post-text MIA 2022–25 with/without-motion EPA/play splits + LAC 2026 splits not charted (see AGENTS.md entry).
- @statyxio "Man vs zone: Yards/route" (2026 REG, min 4 targets; Statyx Route IQ) — thin-sample flags on McConkey, P. Washington, St. Brown man-side; footer "Different denominators. A frequent coverage call is not a defensive weakness grade."
- @SamHoppen "Expected pass situations" (expected pass probability > 70%; min 20 dropbacks; data nflfastR) — PARTIAL, values approximated from axes.
- @PattonAnalytics "Explosive and Negative Play Rates for QBs" (explosive = catchable passes and scrambles gaining 20+ yards, 2026) — PARTIAL, approximated from axes.
- @statyxio "WEEK 2: IT WASN'T JUST ABOUT VOLUME" panels: Lamb 8→9 targets, air-yard share 35.9%→57.4%, 44→153 yds; Adams 6→10 targets, air-yard share 27.2%→57.4%, 26→195 yds; K. Williams 11→12 carries, +34.1 RYOE, 41→85 yds (key numbers recorded in AGENTS.md entry).

## Data sources named
@sfdata9ers (FTN charting), @MagicSportsGuy (statrankings.com ARBY pages), @statyxio (Statyx Route IQ), @benbbaldwin (PFF/SIS/ESPN PBWR), @PFF (accuracy index article), @SumerSports (motion data), @PattonAnalytics, @SamHoppen (nflfastR), plus narrative-only: @RyanJ_Heath ×4 (FantasyPtsData: WR first-read target share vs 1D/RR; QB accurate throw rate vs ANY/A; RB rushing success vs RYOE/att; RB missed tackles vs YACO/touch), @FantasyPtsData (avg separation vs TPRR), @Shauncore (light-box% × stuff%/EPA/success trilogy, data SumerSports), @StartSitEmFF/@DynatyzeFF (CPOE × EPA/dropback bubble), standing blockers: @NerdingonNFL/@NFLResearcher timelines never render, @FTNData protected.

## Findings (numbers and facts, not vibes)
- Formula-level transcriptions (the file's value): ARBY composite weighting, pass-protection composite weighting, drops EPA differential formula, penalty-gained EPA definition, expected-pass-situation definition (>70% pass probability).
- Week 2 volume-vs-efficiency panels: Lamb and Adams both spiked air-yard share from ~30% to 57.4% Wk1→Wk2 (Lamb 44→153 yds, Adams 26→195 yds); K. Williams +34.1 RYOE.
- League motion avg rose 34.8% (2025) → 37.9% (2026 Wk1–2).
- Sweep method: one read-only browser task, 21 primary + 6 secondary accounts, home feed + keyword searches (EPA/TPRR/aggressiveness/pass rush win rate/CPOE); no rate-limiting, no CAPTCHAs, no interactions.
- Window: posts after ~9:00 PM CDT 2026-09-22 through ~9:00 PM CDT 2026-09-23.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OL**: benbbaldwin's pass-protection composite (PFF 40 / SIS 40 / ESPN PBWR 20) is a ready-made OL composite formula the engine can replicate with its own inputs.
- **TRUST-SIGNAL**: PARTIAL charts explicitly labeled with approximated values (not transcribed as fact); conflicting windows recorded as displayed (ARBY "7-game" vs "last 5 games" bubble); unreadable logos recorded as UNKNOWN placeholders; standing account blockers documented.
- **SCHEME**: league-wide motion rate trend (34.8% → 37.9%) + motion-on/off EPA splits tracked per team — scheme fingerprints for game-script modeling.
- **QB-BEHAVIOR**: PFF QB Accuracy Index (CPOE-ranked leaderboard), expected-pass-situation EPA (nflfastR), penalty-gained EPA — QB-level efficiency decompositions the engine can mirror.
- **OTHER**: box-defenders-faced table (avg box defenders vs offensive success rate) — BUF faced heaviest boxes and led in success rate.

## Engine-actionable? (yes/no + one-line what)
Yes — wire the two composite formulas (ARBY matchup 65/35 ARBY-vs-YPC, 5/2 window weighting; pass-protection 40/40/20) as engine OL/trench metrics, and replicate the drops EPA differential (Air EPA + expected YAC EPA − actual) as a WR reliability signal.
