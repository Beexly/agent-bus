# research/2026-09-19-dk-week2/deep/rb-phase2.md
## What it is (1-2 sentences)
RB lane Phase 2 gap-hunt (2026-09-19): every Phase 1 RB read re-checked against the internal corpus with verdicts (CONFIRMED / SHARPENED / NEW / FLAG), covering bellcow XFP shares, Irving's directional-run data vs CLE, route-participation role changes, scheme/playcalling tendencies, OL/DL pressure cross, and rush-YPA regression flags.

## Key metrics/methods (formulas where given, else "not specified")
- FantasyPtsData backfield XFP share (Wk1), slate-relevant: Achane 95%, Javonte 95%, Taylor 93%, Jeanty 87%, Bijan 84%, Hampton 81%, Irving 80%, Henry 80%, Breece 78%, Montgomery 77%, Saquon 75%, Rhamondre 74%, Chase Brown 73%, K. Walker 73%, Swift 71%, Hubbard 71%, Etienne 71%, CMC 66%.
- @statyxio Irving runner metrics: 3.88 YAC/att (76th pct), 0.63 evaded tackles/att (99th), 62.5% rush success (99th), 12.5% 10+ rate (63rd), 0.0% breakaway 15+ (31st), 87.5% stuff avoidance (63rd); run-path: Interior 62.5% vs CLE ranked 31/32 ("Softer").
- MediJo20 career rushing EPA/TD rates: Henry 0.1 EPA/gm + 0.82 TD/gm; Taylor 0.0 + 0.83; Kamara -0.75/0.51.
- Paganetti Wk1 rush-YPA regression: overperformed KC +2.8, CHI +2.0, CAR +1.2, PHI +1.0, BAL +0.9, SF +0.8, TB +0.5; underperformed CLE -1.3, TEN -1.2, GB -1.1, NE -0.8, LAC -0.7, WAS -0.6, NO -0.5.
- benbbaldwin v3 team tiers: SF 65.6, KC 65.5, BAL 65.2 (elite); CLE 20.1, MIA 25.6 (bottom).

## Data sources named
FantasyPtsData bellcow report (Wk1 CSV); statyxio (9/18); @MagicSportsGuy RB route notes (StatRankings, 9/18); ffdataroma Irving thread (9/18); mediJo20 rushing-EPA-vs-TDs CSV (1999–2026); FTN charting via @sfdata9ers playcalling tendencies (Wk1); hawkblogger pressure rates (Wk1); hb-pass-protectors Wk1; paganetti rush-YPA regression Wk1; benbbaldwin v3 tiers; Sharp 9/18; RotoWire 9/17; NBC 8/28; ninerswire 9/17; sportradar 9/17; fantasysixpack 9/18; dknetwork.

## Findings (numbers and facts, not vibes)
- Javonte 95% bellcow + 55.6% route participation + .25 TPRR (14th; vs .19/38th in 2025) = rarest combo in tier 2; best PPR-floor play under $6.5K; 22.7 proj touches (5th).
- Saquon route collapse: 8 routes Wk1 vs 14.5/game in 2025; 1.89 value (worst among pay-ups); dknetwork projects RB20 at $7,000 — active fade verdict.
- Irving's .33 TPRR (21 routes) vs Gainwell 13 routes/1 target is top-5 among sub-$6.5K backs; RISK: Sean Tucker full-practice all week, preseason short-yardage/goal-line specialist, may vulture TDs — check inactives.
- CMC 66% bellcow is lowest of any pay-up; Black led SF in carries Wk1; if Black (Q, groin) sits, CMC's share spikes.
- Chris Brooks $4,800 led GB RBs in Wk1 snap share; Lloyd 3.7 DK pts — Lloyd a TRAP at $5,300, Brooks the leverage.
- Taylor 93% bellcow (23.1 proj, #4) and K. Walker 73% (37.1 DK Wk1, 173 rush yds led NFL) both on slate with TBD salaries — if either posts ~$6K they break the value board.
- Swift built on CHI +2.0 team YPA overperformance in 59–37 outlier — still best value, tempered.
- Cheap PPR punts: Justice Hill $4,200 (6.5 proj), Jaylen Warren $5,400 (4.8 proj targets), Rico Dowdle $4,900 (4.4 proj targets).
- Scheme: TB 25.5% play-action (1st), 70.6% motion; LAC 84.3% motion (1st); NO 22.1% no-huddle (2nd) helps Etienne's 8.4 proj targets.
- KC generates 56.3% pressure (1st); MIA allows 40.5% (2nd-worst) while generating 6.5%.
- Jordan Mason 53% bellcow is dead (IR); MIN backfield now Jones + Dallas/Claiborne, bellcow share unknown.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **TRUST-SIGNAL**: small-sample discipline — Irving's 8 mapped carries flagged as directional-only ("percentile ranks are directional, not gospel"); Paganetti Wk1 regression framed as regression-watch not fades; Jayden Higgins ACL single-source quarantine noted in the companion phase file.
- **OL**: CIN generates 44.4% pressure (4th) but is soft vs run (dknet A+ matchup for Montgomery; CIN allowed 29th-most DK pts to RBs 2025) — the matchup is specifically run-D, not pass-rush; TB RT Goedeke -2.9 pass-pro (3rd-worst) is checkdown-friendly for Irving; CHI's Darnell Wright -2.5 cleared to play.
- **SCHEME**: play-action/motion rates as RB-scheme support (TB 1st PA, LAC 1st motion) — engine-relevant scheme fingerprints for backfield projection.
- **OTHER**: role-change detection via route participation + TPRR vs prior year (Javonte .25/14th vs .19/38th 2025) — the formula for flagging genuine receiving-role changes vs noise.

## Engine-actionable? (yes/no + one-line what)
Yes — implement the bellcow XFP share × route participation × TPRR triple-screen as a weekly role-change detector (Saquon fade and Javonte upgrade both came from it).
