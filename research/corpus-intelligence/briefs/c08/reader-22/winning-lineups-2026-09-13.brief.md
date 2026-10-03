# docs/dfs/research/2026-09-13/deep/winning-lineups-2026-09-13.md
## What it is (1-2 sentences)
Historical-evidence compilation of what wins FanDuel NFL Classic/GPP contests — stack rates, FLEX defaults, winner ownership, winning scores, and peer-reviewed backing — with each claim labeled hard data vs analyst opinion.
## Key metrics/methods (formulas where given, else "not specified")
- NBC Sports 2015 stacking study (n=170 FD top-10 lineups): QB-WR **40.59%** (most common, ~2x next), RB-WR same-team 20.59% (despite −0.07 correlation), game stack 4+ players 15.29%, QB-WR+bring-back 7.06% ("best performing correlation play"), RB-DEF + bring-back <1% (worst play).
- 4for4 FD Sunday Million winners 2020–22: 40 of 42 DK Millionaire winners since Week 1 2020 used a QB stack; only 3 FD winners since 2020 had <4 correlated players; only 5 won a double stack with no bring-back; **59% of last 59 FD winners flexed RB** (35/59).
- Ownership: 2022 FD winners averaged **85.1%** cumulative (~9.4%/spot); 22 of 52 2019–21 winners ≥120% cumulative; 2025 Sunday Million needed **~225 pts** to win (200 pts = 83rd). Haugh & Singal (2020): full opponent model raised 17-week expected P&L $1,400 → $6,000.
- Implied 50-man bar (INFERENCE): ~170–190 to typically win on a 14-game slate, build for 200+ anyway; 3X salary rule (every player needs a realistic path to 3× salary).
## Data sources named
NBC Sports "Impact of Stacking in DFS" (2015, 170 FD lineups); 4for4 "Winning GPP Lineup Review" 2019–2022 (59 FD winners); Footballguys FanDuel GPP Guide (2025); FantasyLabs SimLabs / Billy Ward; RotoBaller; RotoWire; Haugh & Singal Management Science 2020; Hunter, Vielma & Zaman 2016; TheHuddle/TheSpun.
## Findings (numbers and facts, not vibes)
- QB + ≥1 pass-catcher is near-mandatory (40/42 winners); QB-WR-TE was the best triple stack; QB-WR + bring-back is the highest-ROI correlation.
- FLEX default = third RB (59% of winners); TE-in-FLEX is a salary-structure play, not correlation.
- Winners are NOT full-fade: ~85% cumulative ownership; in a 50-man (vs 100k) chalk tolerance is higher — play good chalk, find leverage in 2–3 spots.
- Never pair DST with an opposing bring-back (<1% hit rate, historically worst construction); RB + own-team DST is a distinct, viable construction.
- Week 1 (opinion): passing rust → buy proven chemistry and carry volume; matchup data stabilizes ~Week 5.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: QB-WR 40.59% stack rate and QB-centric primary stacks in every 2022 winner — stack logic is QB-driven correlation.
- SCHEME: blowout-script construction (RB + own-team DST, no bring-back) is a game-script exploitation, not a correlation play.
- COACHING: Week 1 "buy proven chemistry, not new schemes" — coaching-change caution backed by FantasyLabs (2025 matchup data stale in Week 1).
- OTHER: ownership/variance management (Haugh & Singal opponent modeling; flatter 50-man payout → expectation matters more than variance).
## Engine-actionable? (yes/no + one-line what)
Yes — codify the 6-line construction rules (double stack, mandatory bring-back, RB-default FLEX, no DST+opp bring-back) as optimizer constraints/validators (a patch implementing this later appears in PROVENANCE.md).
