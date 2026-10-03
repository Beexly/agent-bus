# research/2026-09-19-dk-week2/deep/x-sweep4.md
## What it is (1-2 sentences)
Final breaking-news sweep (Sweep 4) of DK NFL Week 2: last-chance injury/designation items new since the Saturday-afternoon Sweep 3 (2026-09-19), plus a Sporting News headline crawl establishing 2026 roster facts and a T Shoe Index Week 2 projections CSV.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — news aggregation via `browser.search` (news vertical, since=2026-09-19) + one Sporting News index crawl, deduplicated against Sweeps 1-3 and the briefing corpus.
## Data sources named
commanderswire, chiefswire, ravenswire, coltswire, vikingswire, broncoswire, SI, The Athletic (Jeff Zrebiec), Sporting News (Anne Erickson/Matt Sullivan/Hunter Cookston/Horace Shivers bylines).
## Findings (numbers and facts, not vibes)
- Commanders: LB Frankie Luvu (groin) and TE Chig Okonkwo (hamstring) officially OUT vs DAL; Quinn said TE replacement "could be the one to watch" Colson Yankoff (Sinnott, Bates also mix: "none offer the same type of athleticism as Okonkwo"); Luvu OUT = "I like him as a blitzer... we'll definitely miss Frankie" (blitz-unit downgrade); LB comms to Sonny Styles and Leo Chenal.
- Ravens: Zay Flowers DOUBTFUL (hamstring, not expected to play); OUT: DT Nnamdi Madubuike, ILB Teddye Buchanan, CB T.J. Tampa; QUESTIONABLE: OLB Trey Hendrickson (finger), LG John Simpson, LT Ronnie Stanley; WR depth behind Bateman: Chris Moore, Devontez Walker (full practice, was groin), LaJohntay Wester; Elijah Sarratt could debut.
- Vikings: Kyler Murray (concussion) OUT, Carson Wentz starts; WR Jauan Jennings OUT (personal matter); RT Brian O'Neill (knee) QUESTIONABLE. Bears listed nobody — clean bill of health.
- Broncos: WR Marvin Mims (foot) OUT — All-Pro returner with career 15.9-yard punt-return average (NFL record); RB RJ Harvey (hamstring) QUESTIONABLE (W1: Dobbins 8 carries, Harvey 3, Coleman 0; Harvey 4/4 receiving); Jaguars: all 53 healthy and cleared.
- Chiefs (SNF): LT Josh Simmons (back) OUT second straight game; rookie Kahlil Benson starts at LT; "no clear timeline for Simmons' return."
- Colts: WR Ashton Dulin (ankle) OUT; W1: 10 offensive snaps + 19 ST snaps; Laquon Treadwell becomes WR4.
- Bears: D'Andre Swift, Kyle Monangai, Darnell Wright, Ozzy Trapilo (first full practice since PUP), Xavier Woods (groin) all full, no designations; Woods' return creates safety/slot rotation question (Cam Lewis started W1; Malik Muhammad in slot praised by Ben Johnson).
- 2026 roster facts (headline-level, flagged for corroboration): Geno Smith is Jets' starting QB; Lamar Jackson is Ravens' QB; Caleb Williams is Bears' QB; Jaxson Dart is Giants' QB; Giants 1-0 after W1 win over Cowboys.
- File produced: `raw/x-t-shoe-index-wk2-lookahead.csv` (T Shoe Index Week 2 projections, 8-day-old lookahead, transcribed for model-projection record).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: Quinn on Luvu as the blitzer and Okonkwo as irreplaceable athlete (scheme quotes: "There's an energy that comes with him... I like him as a blitzer"); Ben Johnson's safety/slot rotation decision with Woods' return; 17 named accounts searched, zero new indexed posts.
- OL: KC LT Josh Simmons OUT, rookie Kahlil Benson starting at LT (Mahomes blind side, SNF); BAL LT Ronnie Stanley QUESTIONABLE; MIN RT Brian O'Neill QUESTIONABLE.
- TRUST-SIGNAL: Quinn's "could be the one to watch" on Colson Yankoff as Okonkwo replacement; Devontez Walker full practice as Flowers-down WR depth; Sarratt possible debut.
- OTHER: News-sweep methodology and timing (90-min pregame inactives as final word) documents the injury-intake pipeline's cadence.
## Engine-actionable? (yes/no + one-line what)
Yes — OL injury flags (KC LT rookie starting, BAL LT Q) feed the OL/pressure module, and Luvu's blitz-unit downgrade is a team-pressure-rate adjustment input.
