# docs/dfs/research/2026-09-13/verify/papers-scoring-strategy-2026-09-13.md
## What it is (1-2 sentences)
A three-mission verification report from 2026-09-13: (1) academic DFS literature review on stacking theory, (2) definitive FanDuel NFL Classic scoring resolution (0.5 PPR confirmed), and (3) independent verification of common winning-lineup statistics (stack rates, double-stack bring-back rates, FLEX-RB rates, ownership averages).
## Key metrics/methods (formulas where given, else "not specified")
- FanDuel NFL Classic scoring: 0.5 PPR; 1 pt per 25 pass yds; 1 pt per 10 rush/rec yds; 6 pts per rush/rec TD; 4 pts per pass TD; −1 per INT; −2 per fumble lost; +3 bonuses at 300 pass yds / 100 rec yds / 100 rush yds. DST: sacks 1, INT 2, FR 2, safety 2, blocked punt 2, return TD 6, defensive TD 6; points-allowed ladder 0=10, 1-6=7, 7-13=4, 14-20=1, 21-27=0, 28-34=−1, 35+=−4.
- RotoWire correlation study (full-season, 4 years of game data): QB–WR1 +0.31; QB–TE +0.27; QB–RB +0.07; same-team WR–WR −0.02.
- Hunter/Vielma/Zaman (arXiv:1604.01455) method: maximize lineup expected score subject to lower bound on variance and upper bound on correlation with previously built lineups.
- Haugh & Singal (Management Science 2021) method: Dirichlet-multinomial opponent-behavior model, portfolio reduced to binary quadratic programs.
- Positional ownership profiles (4for4, all seasons): QBs in winning lineups averaged 4.7% ownership; most expensive WR averaged $8,800; top-owned RB 24%, top-owned WR 22%.
## Data sources named
fanduel.com/rules (official rules, crawled twice); RotoWire ("NFL DFS Picks & Projections: Top Plays & Lineup Strategy for Week 1"; "DFS Football 101"; "Should You Stack in Fantasy Football? The Data on Correlated Draft Picks"); RotoGrinders; ETR; Reddit r/dfsports; Stokastic; SaberSim blog; DFSArmy; FantasyData; Yahoo/ESPN; PFF; Fantasy Footballers; DK Network; FantasyLabs optimizer docs; 4for4 Sunday Million reviews (2022 season); arXiv papers (Hunter et al. 1604.01455; Mahoney & Paniak 2309.15253); Beal/Norman/Ramchurn 2020; Sharpstack (Andy Ash, MIT Sloan 2021).
## Findings (numbers and facts, not vibes)
- FanDuel is 0.5 PPR — full-PPR claims (RotoWire Week 1 article) are wrong; the +3 yardage bonuses are real (older "DFS Football 101" piece claiming no bonuses is stale).
- Peer-reviewed DFS literature (Hunter et al., Haugh & Singal, Beal et al., Sharpstack) endorses variance-maximizing correlated construction; Mahoney & Paniak (2023) found optimal lineups beat random but only reached ~31st percentile vs real DraftKings users.
- QB + 1 pass-catcher stacking: ~85–95% of big-GPP winners stack (INFERENCE on exact rate; "40 of 42" not independently re-countable but directionally supported).
- The "only 5 double-stacks without a bring-back since 2020" claim FAILED: 4for4 found 9 of 11 winning 2022 Sunday Million stacks ran no bring-back; FantasyLabs described multiple no-bring-back winners as viable. Bring-back is a positive-EV play, not a law.
- Same-team WR–WR correlation is −0.02 (full-season) — the second same-team WR buys salary concentration without correlated upside; double-stack is a game-environment bet, not a correlation free lunch.
- "59% of Sunday Million winners flexed a 3rd RB" is UNVERIFIED as exact (traces to single 4for4 pull: 35/59 winners through Week 7 2022); "85% cumulative ownership" is year-dependent (4for4: 85.1% in 2022 vs 117% in 2019–2021). Keep "default FLEX to RB" as a construction rule; drop the precision.
- QBs in winning lineups averaged 4.7% ownership (lowest of any position) — contrarian QB supported; a naked-QB lineup finished 8th in a 2025 Millionaire Maker.
- Salary confirmations (RotoWire Week 1): Higgins $7,200, Egbuka $6,400, Godwin $6,300, Burrow $8,200, Chase $8,900, Mayfield $7,500, Bucky Irving $7,900 (all FanDuel).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB–WR1 +0.31 / QB–TE +0.27 correlation is real (QB-BEHAVIOR, SCHEME); QB–RB +0.07 functionally zero (OTHER).
- Double-stack bring-back is optional, not law (SCHEME, OTHER).
- Peer-reviewed variance-maximization formalization supports correlated construction (SCHEME, TRUST-SIGNAL).
- FanDuel scoring ruleset: 0.5 PPR + bonuses (TRUST-SIGNAL, OTHER).
- Mahoney & Paniak ~31st percentile is a humility check on pure-optimizer builds (TRUST-SIGNAL).
- WR–WR −0.02 target competition effect (SCHEME).
## Engine-actionable? (yes/no + one-line what)
Yes — encode optimizer stacking rule as QB + 1 pass-catcher as the iron rule with double-stack treated as a game-environment bet, retire the bring-back "law", and hard-code the verified 0.5-PPR FanDuel scoring table into the valuation engine.
