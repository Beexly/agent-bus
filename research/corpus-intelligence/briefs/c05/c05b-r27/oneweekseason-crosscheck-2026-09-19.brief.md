# research/2026-09-19-dk-week2/verify/oneweekseason-crosscheck-2026-09-19.md
## What it is (1-2 sentences)
Verification ledger (2026-09-19 ~11:15 AM CT) cross-checking a new third source — OneWeekSeason.com DK Week 2 main-slate salaries, projections, and projected ownership (ownership timestamped 6:00 AM PDT Sat 9/19) — against two existing second-party sources, with first ownership numbers of the week and an unresolved conflict log.

## Key metrics/methods (formulas where given, else "not specified")
- Confirmation rule: salary matches across The Huddle (9/19) + DK Network (9/15 or 9/17) + OneWeekSeason (9/19) = three-source confirmation; none endpoint-verified (DK API Akamai-blocked).
- Scope: 13-game MAIN slate only; ~40 skaters + 16 DSTs; partial ownership.

## Data sources named
OneWeekSeason.com (Minis phone extract; raw/oneweekseason-salaries-minis-extract-2026-09-19.md, cleaned raw/salaries-cleaned-2026-09-19.md); The Huddle (9/19); DK Network (9/15, 9/17); fantasyalarm (9/18, DST salaries); raw/qb-salaries.csv, rb-salaries-projections.csv, wr-salaries-projections.csv, te-salaries.csv (internal).

## Findings (numbers and facts, not vibes)
- Confirmed salaries (3 sources): QBs 19/19 (Lamar $7,300; Caleb $6,800; Hurts $6,700; Burrow $6,600; Dak $6,400; Daniels $6,300; Purdy $6,200; Herbert $6,000; Lawrence $5,800; Nix $5,700; Mayfield $5,600; Stroud $5,500; Young $5,400; Shough $5,300; Lock $4,900; Geno $4,800; Wentz $4,600; Watson $4,500; Cousins $5,000); RBs 7/7 (Bijan $8,200; CMC $8,000; Henry $7,200; Barkley $7,000; Jeanty $6,800; Javonte $6,400; Breece $6,200); WRs 9/10 (Jefferson $7,800; Chase $7,600; Lamb $7,300; Pickens $6,300; G. Wilson $6,000; McLaurin $5,200; Doubs $5,000; Evans $6,600; Hutchinson $3,500); TEs 3/3 (Andrews $4,400; Ferguson $3,800; Mayer $3,600); DSTs matching fantasyalarm: SF $3,800; PHI $3,700; TB $3,600; JAX $2,400; MIN $2,600.
- First ownership numbers of the week: Bijan 40.10%; Javonte 22.16%; Henry 22.19%; CMC 21.93%; Lamb 20.32%; Pickens 17.85%; Chase 17.17%; Andrews 17.13%; Mayer 14.07%; Dak 12.01% (highest QB); Hurts 2.90%; Burrow 2.22%; TB DST 9.65% (highest DST); JAX DST 2.68%; MIN DST 1.53%.
- Ten DST salaries first data point: NE $3,100; HOU $3,000; DAL $2,900; ATL $2,900; PIT $2,800; CIN $2,700; ARI $2,500; WAS $2,500; NYJ $2,400; CLE $2,200; LAC $3,200 replaces stale 2025 $3,400 do-not-use figure.
- Model disagreements vs consensus: Jeanty 12.67 vs DKNet 22.5 (−9.8); Henry 18.07 vs 24.0 (−5.9); Lamb 21.67 vs 15.8 (+5.9); Dak 25.04 vs 20.9 (+4.1); Lamar 17.44 vs 20.2/21.2 (−2.8/−3.8); Drew Lock 19.14 has no consensus comp (treat skeptically).
- Hard conflict UNRESOLVED: Jerry Jeudy — OneWeekSeason DEN vs JAX $5,100 vs Huddle $3,900 @ TB on CLE; team and salary both conflict; neither usable until lobby-checked.
- Staleness flag: Brock Purdy rows show 23.06 proj / 9.87% ownership on a player OUT (toe/shoulder, 2–5 weeks) — ownership column may predate Friday news.
- CIN DST $2,700 vs fantasyalarm's CAR $2,700 — possible team misattribution; lobby-check both.
- Corrupt rows dropped: Derek Carr, Travis Kelce (SNF contamination), Sean McAllister, Jalen Nailor-on-LV; "Romelius Doubs" repaired to Romeo Doubs.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **TRUST-SIGNAL**: the three-source confirmation rule + unresolved-conflict quarantine (Jeudy neither-team-neither-salary) is the same stale-data discipline pattern as games-phase3; model-vs-consensus disagreement logging (OWS hot on WAS@DAL, cold on Lamar/Henry/Jeanty) is engine-relevant signal-divergence tracking.
- **OTHER**: ownership-timestamp freshness check — Purdy's dead rows reveal the ownership column may predate Friday news; ownership staleness is an input-risk, not a settled input.

## Engine-actionable? (yes/no + one-line what)
Yes — feed projection-model disagreements (Jeanty −9.8, Henry −5.9, Lamb +5.9 vs consensus) into the engine as signal-divergence flags, with ownership staleness checks before any roster-exposure use.
