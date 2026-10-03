# docs/dfs/research/2026-09-25/gpp-winning-lineup-construction.md

## What it is (1-2 sentences)
An evergreen structural research synthesis on winning DK NFL Classic GPP lineups, compiled 2026-09-25: stack rates, ownership distributions, correlation coefficients, salary usage, and contest-size theory drawn from published winner studies (2016–2026). No player picks; explicitly warns that nearly all quantitative findings come from large-field main-slate studies and do not transfer 1:1 to ~1K-entry Sun-Mon slates.

## Key metrics/methods (formulas where given, else "not specified")
- Product ownership (duplicate-risk metric from ETR): duplicate probability scales with the *product* of rostered players' ownerships; winners had same sum ownership but ~half the product ownership of the field.
- Leverage ratio: (Top-100 usage rate) / (field usage rate) for a structural choice (e.g., QB+2WR double stack field 28.6% vs Top-100 39.5%).
- Value threshold: salary-return multiples (4X baseline for a $50K salary cap; e.g., Likely $3,500 returned 5.5X).
- Late-swap decision rule (Bales): if early lineup is underdog to cash, pivot contrarian in late games; if ahead, play chalk to block the field.

## Data sources named
- Establish The Run / Adam Levitan studies: Sep 2021 (2020 season Top-100 Milly), Oct 2020 (2017–19 Top-10), Sep 2023 (2022 season Top-100), 2022 DFS Strategy Guide PDF; Sep 2026 ownership article (45 Milly winners 2016–18)
- 4for4 NFL DFS Playbook (QB/Defense/TE, preseason 2021; 2019–20 winners), 4for4 2019 GPP review, 4for4 "Cracking the DFS Code" promo (directional only)
- RotoGrinders 2019 Top-10 Milly analysis (150 lineups); FantasyLabs Aug 2018 (2017 winners), Justin Bailey Nov 2021 (small-field), Oct 2024 Milly review; SportsHandle Jan 2017 (2016 winners)
- DFS Army Sep 2022 (2021 winners), DFS Army Aug 2023 "Domination Station" manual, DFS Army Dec 2023 Week 14 winner review
- DK Network winner reviews: Zach Thompson Week 16 2025, Week 17 2025; DK Network Aug 2025 Milly guide
- FantasyFootballers DFS Milly Maker Trends (~Aug 2023), Tournament Takes (Sep 2026), contest selection guide
- FantasyAlarm 2026 strategy guide; Sports Gambling Podcast Sep 2020 flowchart; DFF DFS Primer 2023; RotoBaller Thunder Dan 2020; Footballguys Dec 2018; DFSMastermind Jul 2025

## Findings (numbers and facts, not vibes)
- QB stack rates among winners: 16/17 (2020), 17/17 (2017), 10/14 (2016) outright winners used a QB stack; 143/150 (95.3%) of 2019 Top-10 used a QB-based stack [QB-BEHAVIOR, SCHEME]
- Double stack (QB + exactly 2 teammates): field 28.6% vs Top-100 39.5% — Levitan's "biggest edge" [QB-BEHAVIOR, SCHEME]
- Naked QB: field 17.4% vs Top-10 6.4% — "a losing bet" [QB-BEHAVIOR]
- Bring-back one opponent: field 34.6% vs Top-100 52.5%; bring-back one WR: field 25.5% vs Top-100 48% ("best leverage") [SCHEME]
- Correlation coefficients: QB–opposing QB 0.58–0.59 (highest); QB–same-team WR1 0.53–0.55; QB–same-team TE1 0.47; QB–opposing WR2/RB1 0.41; QB–same-team RB1 0.42 league-wide but role-dependent (Chiefs 0.63, Saints −0.11, Jaguars −0.66) [QB-BEHAVIOR, SCHEME]
- 4for4 data: when a QB posts 25+, 61% chance the opposing QB posts 25+ [QB-BEHAVIOR]
- Winners' cumulative ownership: Top-100 sat in 75–125% band 62.2% of the time vs 53.2% field; sum ownership nearly identical (113.4% vs 113.9%) but product ownership ~half the field's [TRUST-SIGNAL]
- 43 of 45 Milly winners (2016–18) had ≥1 player under 5% owned; 38 of 45 had ≥1 player over 20% owned [TRUST-SIGNAL]
- Salary: over half of 2019 winners spent all $50,000; only one winning lineup left >$200 unused; "zero edge in leaving money on the table" four years running [OTHER]
- DST: winners averaged ~$2,959–$3,300 (~6% of cap); salary→points correlation 0.28 (weakest of any position); winner DST ownership averaged 10.9% [OTHER]
- TE: winners averaged ~$4,653–$4,769; "spend at the extremes, not the middle"; only 3 of 67 Milly/Sunday Million winners used a TE in FLEX; TE-in-FLEX field 19% vs top-100 12% (negative leverage) [SCHEME]
- FLEX distribution across six studies (2015–2019): RB 35–59%, WR 29–56%, TE ≤12% — TE-in-FLEX consistently worst [SCHEME]
- RB1 + same-team DST: RB1s get a production bump when their DST scores 15+ (4for4); defense stacked in 10 of 17 2021 winners, 6 with an RB — positive but weak [SCHEME]
- Winning scores cluster 218–231; 2023 season averaged ~240 over 14 weeks; ~4.6X salary on average [TRUST-SIGNAL]
- Real examples: Lamar triple stack 230.84 (Week 14 2023); Herbert triple stack 218.2 with 1.5%-owned Johnston, 2.0%-owned Jeanty (Week 16 2025); Maye triple 218.24 with $2,500 Michael Mayer (~7.2X) (Week 17 2025) [QB-BEHAVIOR, SCHEME]
- RB1–RB2 same team negative tendency (Saints −0.19, Jaguars −0.63); RB–opposing RB −0.31 [SCHEME]
- Max-entry players outperform single-entry players in every metric; single-entry players over-indexed sub-5% CPT darts (25.4% vs 16.3%) — "don't over-rotate into sub-5% darts" with 1–3 bullets [TRUST-SIGNAL]
- Sun–Mon MNF mechanics: DK roster spots lock at each player's own kickoff; MNF players swappable until Monday kickoff; FD locks entire lineup at first game. No published study tracks how Sun–Mon winners used MNF — explicit gap [OTHER]
- "Punt QB" claim (sub-$5K QBs win rate 2%→22%, 2022–25): sourced only from an AI summary of a promotional video, flagged directional-only and contradictory to Levitan's data [OTHER, TRUST-SIGNAL]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB stacking/leverage rates → QB-BEHAVIOR, SCHEME
- QB–pass-catcher correlation matrix (including role-dependent QB–RB1 coefficients) → QB-BEHAVIOR, SCHEME
- Ownership band 75–125%, product-ownership doctrine, sub-5% slate-breaker rule → TRUST-SIGNAL
- MNF/late-swap mechanics and information-driven swap doctrine → COACHING (roster management decision logic), OTHER
- Era tension in QB salary tier ($6K vs $7K+ spend) → TRUST-SIGNAL (era-dependence caveat)
- Large-field provenance caveat on every number → TRUST-SIGNAL (source provenance is itself the signal)
- Explicit gaps (no ~1K-field studies, no MNF-usage studies, no QB-vs-opp-DST coefficient) → OTHER (research agenda)

## Engine-actionable? (yes)
Ownership/leveraging barbell rule (100–125% cumulative, high-owned anchors + sub-10% satellites) can be encoded as a GPP lineup-scoring constraint.
