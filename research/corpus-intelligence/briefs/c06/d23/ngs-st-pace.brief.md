# reasoning/ngs-st-pace.md
## What it is (1-2 sentences)
A gating table deciding which NGS (Next Gen Stats) summary-table components and special-teams EPA are allowed to inform the week-3 engine "tilt", based on each component's correlation (r) versus the 2025 home-team result; plus a doctrine statement bounding how NGS may be used in the engine.
## Key metrics/methods (formulas where given, else "not specified")
- Live-gate rule: a component is live in week 3 only if |r| versus 2025 home result is at least 0.08.
- Doctrine cap: NGS may move on-field efficiency by at most 0.15 of that family's signed value; NGS cannot replace the opponent-adjusted EPA blend and cannot decide the game.
- Correlations reported as r (signed); n = sample size. All 2025 r values are same-season associations, NOT a week-lagged walk-forward — explicitly stated they are "not a claim that NGS beats the close."
- Components and their r values (nflverse NGS summary tables: passing, rushing, receiving, through 2026 week 2):
  - NGS CPOE: n=255, r=+0.176 → LIVE
  - time to throw: n=255, r=+0.110 → LIVE
  - aggressiveness: n=255, r=-0.057 → stored, unused
  - air yards differential: n=255, r=+0.184 → LIVE
  - rush yards over expected: n=255, r=+0.124 → LIVE
  - separation: n=255, r=+0.010 → stored, unused
  - YAC over expected: n=255, r=+0.171 → LIVE
  - special teams EPA (from play-by-play): n=272, r=+0.054 → stored, unused
## Data sources named
- nflverse (NGS summary tables: passing, rushing, receiving; through 2026 week 2)
- Play-by-play data (special-teams EPA source)
- 2025 season as the association baseline for the gate
## Findings (numbers and facts, not vibes)
- 5 of 8 components pass the |r| ≥ 0.08 gate: CPOE (+0.176), time to throw (+0.110), air yards differential (+0.184), rush yards over expected (+0.124), YAC over expected (+0.171).
- 3 components stored-but-unused: aggressiveness (-0.057), separation (+0.010), special teams EPA (+0.054).
- Strongest gate-passing signal is air yards differential (+0.184); weakest live signal is time to throw (+0.110).
- Special-teams EPA sample n=272 vs n=255 for all NGS components (INFERENCE: different coverage/availability window, not explained).
- Doctrine: "Next Gen summary tables are ingested to learn. They are not stolen commercial feeds. Raw RFID tracking, PFF grades, and SIS charting stay out."
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- CPOE live (+0.176): QB-BEHAVIOR
- time to throw live (+0.110): QB-BEHAVIOR, OL
- air yards differential live (+0.184): QB-BEHAVIOR, SCHEME
- rush yards over expected live (+0.124): SCHEME, OL
- YAC over expected live (+0.171): QB-BEHAVIOR, SCHEME
- aggressiveness stored unused (-0.057): QB-BEHAVIOR (INFERENCE: negative sign — more aggressive throws associated against home wins)
- separation stored unused (+0.010): OTHER
- special teams EPA stored unused (+0.054): TRUST-SIGNAL (INFERENCE: below gate, echoing the separate situational-edges finding that ST EPA correlates the wrong way)
## Engine-actionable? (yes/no + one-line what)
Yes — directly consumed: five NGS components (CPOE, time-to-throw, air-yards differential, RYOE, YACOE) pass the |r|≥0.08 gate into the week-3 tilt, capped at 0.15 of their signed family value.
