# docs/arxiv-program/research/2026-09-21/x-author-methodology-pass-2026-09-21.md

## What it is (1-2 sentences)
Read-only timeline research (2026-09-21 evening) on 9 benchmark X sports-analytics authors: recurring metrics, exact formulas/definitions (verbatim where public), data sources, chart footers, and public code/data trails. No engagement performed — no likes, replies, reposts, follows, DMs, or form submissions; no paywall/login bypass.

## Key metrics/methods (formulas where given, else "not specified")
- **@acccountstat (verbatim, Aug 30 2025):** "Rates are averaged across 4 sources: @PFF @SumerSports @SportsInfo_SIS @FTNFantasy" — simple arithmetic averaging. **(verbatim, Sep 10 2025):** completion probability is "a mix of next gen stats and nflreadr models"; Accurate throw % is "an average of catchable throw and on target throw % from sports info solutions."
- **@scottbarrettdfb — Depth-adjusted YPT over expectation (verbatim):** Expected Yards per Target (based on depth of target on each individual target) vs. Actual YPT → **Actual YPT − Expected YPT**; min 30 targets on seasonal boards.
- **@scottbarrettdfb — Weighted Opportunity (verbatim):** "Over the past 3 seasons, a RB target has been worth, on average, 2.52 times more than a carry" (full PPR).
- **WOPR = 1.5 × Target Share + 0.7 × Air Yards Share** (formula per brief; explicitly NOT found verbatim in this pass — treat as approximate).
- **@ff_marvine (verbatim):** xFP = "The average (or expected) fantasy value of a player's opportunitie[s]…"; FPOE = "The difference between a player's actual fantasy production and [expected]"; "xFP is by far the more stable and predictive metric. However, it is not a ranking system."
- **@joea_nfl — PGP (verbatim, Nov 1 2024):** "The PGP algorithm was designed to, in theory, grant the perfectly average starter a 0.00. Over these hundreds of games, the average PGP is 0.14. The algo seems to be working. I grade on a bell curve. Average Starters are a C (2.0 GPA). The average game grade is 1.96."
- **@joea_nfl — League baselines (verbatim, Nov 26 2023):** "League average Negative Play rate: 29.1%. … League average positive play rate: 23.5%".
- **@sfdata9ers QB Performances table columns:** Total QBR, EPA/Play, CPOE, SR, Time to Throw, aDOT, YAC%, QB Rating. **Header (verbatim):** "pre-MNF | Season: 2026 | Min. 20 rel. plays & 15 pass attempts | Ordered by Total QBR". **Footer (verbatim):** "Colors according to historical percentiles" (percentile computation undisclosed). **CPOE source (verbatim reply):** "I use the official @NextGenStats numbers for this one."
- **@pff grading (verbatim, Sep 15 2026):** "What the PFF grade measures is the part of the play the QB actually controls — the read, the decision, the throw. Not the result that lands in the box score."
- **@hawkblogger Escape Rate (verbatim, Sep 4 2026):** "It's a metric that captures how good offenses are at avoiding obvious passing situations. These are the offenses that are most QB and pass protection friendly." Data: @SumerSports. Exact construction undisclosed.
- Not specified: Barrett PROE formula; @sfdata9ers percentile math and EPA source; @joea_nfl PGP algorithm details, accuracy %/accuracy+ % formulas, Cheap Play % definition, per-grade rubric; @gridironinfo_ playoff-probability methodology (simulation vs formula); SumerSports reproducible formulas (commercial).

## Data sources named
PFF; SumerSports; Sports Info Solutions (@SportsInfo_SIS / SIS); FTNFantasy; official Next Gen Stats (CPOE numbers); nflreadr models; TruMedia (pre-snap shift/motion, play-action % charts relayed by @ihartitz); ESPN (Total QBR 0–100 scale, provider of @sfdata9ers' Total QBR column unstated); FantasyPoints in-house charting ("eight unique charting processes"); rbsdm (their own CPOE model).

## Findings (numbers and facts, not vibes)
- 9 authors profiled with follower counts: @pff 1.5M; @ihartitz 236.1K; @scottbarrettdfb 116.9K; @hawkblogger 62.2K; @acccountstat 13.9K; @ff_marvine 13.6K; @joea_nfl 11K; @sfdata9ers 9,565; @gridironinfo_ 3,632 (joined Jul 2026).
- @joea_nfl graded 10,000 snaps for 2023; maintains free Patreon posts (2022) with grading legend anchored to the most-average NFL QB (e.g., Colt McCoy), a spreadsheet of every game graded, season composites, and a blank grading template.
- @acccountstat does NOT chart his own data and has no code/repo/methodology write-up; all charts are "data straight from the source."
- @ihartitz does NOT build his own charts — he relays TruMedia charts (verbatim: "idk why they break it up that way but it's just play-a[ction percentage on dropbacks]").
- @hawkblogger's HB Power Rankings are automated/formula-based weekly ("I'm not a big fan of opinion-driven rankings. The numbers are the numbers"); Escape Rate data sourced from @SumerSports.
- @ff_marvine's weekly xFP & Opportunity Report runs on thefantasyfootballers.com with a series primer containing model detail (URL not captured this pass).
- @gridironinfo_ recurring outputs: Playoff Probabilities series (preseason + weekly in-season), unit rankings, NGS Aggressiveness charts.
- @sfdata9ers also posts PGWE (Post-Game Win Expectancy).
- @pff's recurring outputs include WAR (Wins Above Replacement), Big Time Throw rate, Carry Share; full grading/WAR formulas undisclosed (PFF PRO).
- Documented gaps remaining this pass: @sfdata9ers percentile math + EPA source; @joea_nfl newer columns (Accuracy+, Cheap Play %, PGP algo); @gridironinfo_ full trail; Barrett PROE formula + current xFP deltas; @acccountstat averaging weights; SumerSports reproducible formulas (commercial).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: PGP algorithm design (bell-curve grading anchored so the average starter scores 0.00; average game grade 1.96); PFF QB grading definition isolating read/decision/throw from box-score result; QB Performances table column set (Total QBR, EPA/Play, CPOE, SR, Time to Throw, aDOT, YAC%, QB Rating); throw-grade taxonomy (elite/great/solid/routine/bad/interceptable).
- SCHEME: Escape Rate (offenses avoiding obvious passing situations — QB and pass-protection friendly); pre-snap shift/motion and play-action % relay charts.
- OL: Pressure Rate Over Expectation (Barrett's team OL rankings).
- TRUST-SIGNAL: @acccountstat's multi-source averaging recipe to improve reliability from small (1-week) samples; benchmark-authors' transparency practices (verbatim definitions, disclosed sources vs. withheld formulas) as a trust-positioning reference.
- OTHER: xFP/FPOE/WOPR fantasy efficiency metrics; weighted opportunity (RB target = 2.52× carry); Playoff Probabilities series; automated HB Power Rankings.

## Engine-actionable? (yes/no + one-line what)
Yes — adopt the multi-source averaging recipe (3–4 providers per metric) for small-sample reliability; mirror the QB Performances table column set (QBR, EPA/play, CPOE, SR, TTT, aDOT, YAC%) using official NGS CPOE as canonical; use PGP-style bell-curve anchoring (average starter = 0.00) as the design for any film-charting grade baseline.
