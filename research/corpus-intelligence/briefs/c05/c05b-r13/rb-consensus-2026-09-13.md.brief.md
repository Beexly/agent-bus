# docs/dfs/research/2026-09-13/rb-consensus-2026-09-13.md
## What it is (1-2 sentences)
Consensus RB rankings for the Week 1 FanDuel NFL classic Sunday-Monday slate (14 games, 0.5 PPR, $60K cap), built from 4 parallel researchers across 12+ free sources with numeric consensus projections and ownership estimates, plus value plays, fades, and injury flags.

## Key metrics/methods (formulas where given, else "not specified")
Formulas: not specified. Methods: numeric consensus = mean of available FD-scale projections (DK full-PPR numbers adjusted −0.5 per reception using numberFire reception figures); salary cross-checked on 2-3 sources for Gibbs/Henry/Hampton/Lloyd/Javonte/Achane/Bijan, single full-slate-table source (thehuddle) for the rest; ownership = hard number only for Gibbs (~40%, FantasyLabs), rest estimated from "no other RB over 18-20%" + chalk commentary.

## Data sources named
FantasyPros (0.5-PPR consensus), numberFire, DK Network, FantasyLabs, FanDuel Research, thehuddle/USA Today, fantasyalarm, RotoBaller, PFF, Fox Sports, Packers Wire, thedeepshot.

## Findings (numbers and facts, not vibes)
- Consensus top 16 (FD salary | cons. proj | proj own): Gibbs (DET vs NO, $9,100, 22.8, ~40% — unanimous #1 everywhere; Montgomery traded to HOU, Pacheco on IR; 7-pt favorites, 28.5 team total); Jonathan Taylor ($8,600, 18.2, 14-18%); Bijan ($8,800, 17.9, 14-18% — 2,298 scrimmage yds in 2025; Allgeier gone so goal-line share grows); Achane ($8,500, 17.1, 10-14%; LV allowed 31.7 PPR/gm to RBs in 2025); James Cook ($7,800, 16.2, 10-13%; Ty Johnson Q → absorbs passing-down work); Henry ($8,300, 16.0, 12-15%; 1,595 yds / 16 TDs / 5.2 YPC at age 32; zero receiving role caps 0.5-PPR ceiling); Chase Brown ($7,500, 15.5, 10-13%; 50.5 total is slate's highest; 4.0 rec/g); Barkley ($8,100, 15.1, 12-15%; WAS 30th vs run / 4th-most FP to RBs in 2025); Hampton ($7,300, 15.1, 16-20%; -9.5 favorites, 28.5 team total; Mitchell out but Vidal sharing); Javonte ($6,800, 14.0, 10-13%; NYG 2nd-most rush yds to RBs in 2025); Breece Hall ($6,900, 13.0, 8-11%; TEN allowed 34.1 PPR/gm to RBs in 2025, most); Bucky Irving ($7,900, 12.5, 8-12%; CIN allowed NFL-high 147.1 rush yds/gm + 5.2 YPC; Rachaad White gone to WAS; DKN loves, RotoBaller ranks RB20 — disagreement); Skattebo ($6,300, 12.5, 8-11%; DAL gave up 23.4 PPR FPPG to RBs); Etienne ($6,800, 12.0, 5-8%; new 4-yr/$47.4M deal + Kamara MCL); Montgomery ($6,300, 12.0, 6-9%; DK touch model favors Woody Marks 14.9 over him 11.4); Lloyd ($4,900, 11.5, 10-14%; 3rd in FD Plus/Minus; committee risk).
- Punts/contingencies: Allgeier ($5,900, ahead of Jeremiyah Love on depth chart; if Love sits, sneaky leverage); Mike Washington (LV, $4,500, near-min chalk if Jeanty out); Q tags: Swift ($6,600), Hubbard ($5,800), Tuten ($6,700), Love ($5,800, double red flag: ankle + depth demotion); Jeremiyah Love GPP contrarian dart <5% owned, 4th in FD Plus/Minus.
- Hard fades/committee traps: Denver 3-headed RBBC (Dobbins/Harvey/rookie Jonah Coleman, team-declared split); Pittsburgh Warren ($6,500) vs Dowdle ($6,100) true committee; Minnesota Jones ($5,900)/Mason ($5,400) even split; Judkins ($6,400, first game back from fractured fibula/dislocated ankle; JAX allowed fewest rush yds 2025; 7.5-pt dogs); Pollard ($6,000, fine floor, no ceiling, 10.5 DKN proj).
- Injuries/splits (all 2026-verified): Jacobs OUT (exempt list); Jeanty Q (ankle, expected to play); B. Hall Q (will play); Ty Johnson Q → Cook bump; Kamara MCL → Etienne lead; Mitchell (hammy, out) → Hampton bump; Sean Tucker (hammy, inactive) → Irving security; Kene Nwangwu out; Nick Singleton inactive; Bowers (meniscus, out).
- Slate notes: FD salaries identical across shared-game slates (primetime-only differs); ownership estimated except Gibbs (~40%).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER**: Consensus-construction method (multi-source mean projection with PPR adjustment −0.5/rec, salary cross-check counts, ownership hard-number-vs-estimate distinction) is itself a research-process template for building credible consensus tables.
- **TRUST-SIGNAL**: source disagreement explicitly surfaced (DKN vs RotoBaller on Irving; DK touch model vs depth chart on Montgomery) rather than averaged away — disagreement flags are leverage signals.
- **SCHEME**: matchup-funneled picks (CIN allowed 147.1 rush yds/gm, LV 31.7 PPR/gm to RBs, WAS 4th-most FP to RBs) show how defense-vs-position allowed stats drive the value tier.

## Engine-actionable? (yes/no + one-line what)
Yes — the −0.5-per-reception DK-to-FD projection adjustment rule and the "source disagreement = leverage flag" heuristic are directly reusable in consensus-projection pipelines.
