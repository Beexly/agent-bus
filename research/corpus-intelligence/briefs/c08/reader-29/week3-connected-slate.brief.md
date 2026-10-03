# docs/reasoning/week3-connected-slate.md
## What it is (1-2 sentences)
The Week 3 (2026) connected-slate DFS artifact: engine-built DraftKings and FanDuel lineups plus top fantasy projections, where "the edge is our number" — half-PPR history shrunk toward 2025, moved by the game composite (`1 + 0.08 * team edge`).
## Key metrics/methods (formulas where given, else "not specified")
- Game-tilt composite: `1 + 0.08 * team edge`.
- DK: 767 rows, 485 priced, 268 unmatched, 14 removed as out; spent $49,900 of $50,000; projection sum 126.78.
- FD: 330 Sunday rows, 313 priced, 14 unmatched, 3 removed as out; spent $60,000 of $60,000; projection sum 119.01 (Monday not on the FanDuel page).
- DST scoring uses sacks, INTs, fumble recoveries, defensive TDs, safeties, points allowed; yards allowed not scored.
- Salaries from the weekly pages; "their projections are not the edge."
## Data sources named
- DraftKings weekly salary pages; FanDuel weekly salary pages.
- Engine's own half-PPR history projections shrunk toward 2025.
## Findings (numbers and facts, not vibes)
- DK lineup (with salary/projection/tilt): Amon-Ra St. Brown 7900/19.79/0.200; Stafford 5900/18.88/-0.024; Davante Adams 6200/17.13/-0.024; D'Andre Swift 6200/15.85/-0.010; Kyren Williams 6100/14.37/-0.024; Rashee Rice 6400/12.12/0.154; Sam LaPorta 4300/10.18/0.200; Dalton Schultz 4200/9.55/-0.075; Steelers DST 2700/8.89/-0.039. Total 126.78.
- FD lineup: Jonathan Taylor 8500/21.90/0.075; Bryce Young 7600/18.35/0.009; Javonte Williams 7300/14.05/-0.029; Zay Flowers 7500/12.56/0.029; Dalton Kincaid 5700/11.95/0.303; Garrett Wilson 7300/11.75/-0.200; Parker Washington 7100/11.60/0.105; Travis Kelce 5500/9.83/0.154; Raiders DST 3500/7.00/-0.055. Total 119.01.
- Top DK-price projections led by Josh Allen 28.62, Jaxon Smith-Njigba 22.09, Jonathan Taylor 21.90, Jahmyr Gibbs 21.79, Brock Purdy 21.59.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: documents the engine's DFS slate pipeline mechanics (pricing coverage counts, spend efficiency, the game-tilt composite formula) and its explicit "edge is our number, not their projections" doctrine.
## Engine-actionable? (yes/no + one-line what)
yes — the game-tilt composite formula and the priced/unmatched/removed accounting pattern are directly reusable in DFS slate-construction wiring.
