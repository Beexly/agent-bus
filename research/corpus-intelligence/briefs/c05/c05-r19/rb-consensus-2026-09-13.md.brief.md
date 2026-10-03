# dfs/research/2026-09-13/rb-consensus-2026-09-13.md
## What it is (1-2 sentences)
Numeric RB consensus for the FanDuel Week 1 Sun-Mon slate (14 games, 0.5 PPR, $60K cap): top-16 rankings with consensus projections, FD salaries, and projected ownership, built from 4 parallel researchers across 12+ free sources with DK full-PPR numbers adjusted -0.5/rec using numberFire reception figures.
## Key metrics/methods (formulas where given, else "not specified")
Numeric consensus = mean of available FD-scale projections (DK full-PPR figures adjusted by -0.5 per reception via numberFire reception counts). Salary cross-checks 2-3x on top names, single full-slate source (thehuddle/USA Today) on the rest; ownership is a hard number only for Gibbs (~40%, FantasyLabs), remainder estimated from "no other RB over 18-20%".
## Data sources named
FantasyPros (0.5-PPR consensus), numberFire (stat-line projections), DK Network (projections + touch model), FantasyLabs (FD salaries/ownership/model ranks), FanDuel Research, thehuddle/USA Today (full-slate FD salary table), fantasyalarm, RotoBaller, PFF, Fox Sports, Packers Wire, thedeepshot.
## Findings (numbers and facts, not vibes)
- Jahmyr Gibbs: unanimous #1, $9,100, 22.8 consensus proj, ~40% owned (DET vs NO, 7-pt favorites, 28.5 team total).
- Jonathan Taylor $8,600/18.2, Bijan Robinson $8,800/17.9 (2,298 scrimmage yds 2025; Allgeier gone), Achane $8,500/17.1, James Cook $7,800/16.2, Derrick Henry $8,300/16.0 (1,595 yds/16 TDs/5.2 YPC at age 32, zero receiving role caps ceiling).
- Value tier: Chase Brown $7,500/15.5 (priced as FD RB9, 50.5 total, "too cheap" per FantasyLabs), Omarion Hampton $7,300/15.1 (chalky 16-20% owned), Javonte Williams $6,800/14.0, MarShawn Lloyd $4,900/11.5 (slate's top punt, 3rd in FD Plus/Minus, but committee risk).
- Injuries/outs: Jacobs OUT (Commissioner's Exempt List); Jeanty (ankle Q, expected to play), B. Hall (groin Q, will play), Swift (Q), Hubbard (Q), Tuten (Q), Love (ankle Q + behind Allgeier on depth chart — fade); Kamara (MCL) -> Etienne instant lead role; Ty Johnson (hammy Q) -> Cook bump; Mitchell (hammy out) -> Hampton bump.
- Hard fades: DEN 3-headed RBBC (team-declared split), PIT Warren/Dowdle true committee, MIN Jones/Mason even split, Judkins (fractured fibula/ankle return, worst RB matchup vs JAX), Pollard ($6,000, no ceiling).
- Source disagreement flag: Bucky Irving — DKN loves him (CIN allowed NFL-high 147.1 rush yds/gm + 5.2 YPC) but RotoBaller has him RB20.
- Salaries run identically across FD slates sharing games (primetime-only differs; excluded from method).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Multi-source consensus methodology with cross-check tiers (2-3x vs single-source) — TRUST-SIGNAL
- Montgomery traded to HOU for C Scruggs -> Gibbs bellcow; Allgeier ahead of Jeremiyah Love on ARI depth chart — OTHER
- DK Network touch-model splits (Montgomery 11.4 vs Woody Marks 14.9; Monangai knee issue) — OTHER
- GPP leverage math: underweight Gibbs at 40%, overweight Taylor/Bijan pivots — OTHER
## Engine-actionable? (yes/no + one-line what)
Yes — the source-tier verification protocol (double/triple-cross-check anchor values, single-source full-slate fill) and the 0.5-PPR DK-to-FD adjustment rule are directly reusable in any slate consensus pipeline.
