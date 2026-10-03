# research/2026-09-19-dk-week2/deep/gse-lab-and-optimizer-crosscheck-2026-09-19.md
## What it is (1-2 sentences)
A correction pass recording that GSE's own data (gse-lab tables, engine DB, DFS optimizer) had not been used in Week 2 DFS research, then fixing it: direct mining of the gse-lab Week 1 2026 EPA/pressure/turnover-luck tables plus a live run of the repo's exact DFS optimizer (`dfs-optimizer.ts`) on the Week 2 slate in cash and leverage modes, with adversarial conflict notes and two revised 15-game GPP lineups.
## Key metrics/methods (formulas where given, else "not specified")
- **Leverage scoring (exact formula given)**: `ceiling / (own*100 + 1.5) * 6 + ceiling * 0.45`
- **Floor/ceiling derivation (explicitly labeled uniform-derived)**: floor = 0.55 × proj; ceiling = 1.6 × proj
- **Cash mode**: max projected points (`optimizeOne`, exact DP, `stack:true`)
- **Ownership**: OWS real for 45 players; 86 positional-prior estimated, labeled
- **Projection hierarchy**: DK Network > FantasyPros > OWS (77/21/12 + 9 FIC)
- **Slate pool**: 131 players; salaries from Huddle-corroborated `[2P]` raw CSVs
- **GSE-lab EPA percentiles**: higher percentile = better unit; one-game 2026 samples, described as descriptive of Week 1 not predictive truth (unit_matchups_2026.csv, rush_pressure_2026.csv, turnover_luck_2026.csv)
- **Props-consensus excluded**: `our_projections.csv` / `game-projections.md` are Week 1 (BUF@DET 9/17) vintage — stale for Week 2, not used; engine Neon DB (spread/moneyline/total only) not queried
## Data sources named
docs/research/2026-09-17/gse-lab/: `unit_matchups_2026.csv`, `rush_pressure_2026.csv`, `turnover_luck_2026.csv`; `apps/web/lib/fantasy/dfs-optimizer.ts` (`optimizeOne`); Huddle-corroborated `[2P]` raw CSVs (salaries); DK Network / FantasyPros / OWS projections; OWS ownership; props-consensus `our_projections.csv`, `game-projections.md` (stale, excluded); engine Neon Postgres DB (not queried; credential transient).
## Findings (numbers and facts, not vibes)
- **Cash-optimal lineup**: 159.2 proj, $50,000 salary used, 73% own — Stroud ($5.5K) + Hutchinson ($3.5K) + Schultz ($3.2K) HOU triple-stack; Henry ($7.2K); Jeanty ($6.8K); Swift ($6.3K); JSN ($8.1K); C. Watson ($6.2K); LAC DST ($3.2K).
- **Leverage-optimal lineup**: 142.7 proj, $49,600, 42% own — Lock ($4.9K, 1.6%) + JSN ($8.1K) SEA stack; Swift ($6.3K); Etienne ($6.0K, NO); Olave ($7.2K); C. Watson ($6.2K); Hutchinson ($3.5K); Ferguson ($3.8K); TB DST ($3.6K).
- **GSE-lab Week 2 edges (own numbers, EPA percentiles, Week 1 2026)**: WAS@DAL — shootout confirmed (DAL pass D 3rd pct [worst] vs WAS pass O 61st; DAL pass O 77th vs WAS pass D 35th); JAX vs DEN — JAX DST lab #1 (JAX pass D 100th vs DEN pass O 9.7th; DEN rush D 0.00 [worst]); CLE@TB — CLE pass O 0.00 (league-worst) vs TB pass D 67.7; LV vs LAC — LV pass O 67.7 / rush O 87.1 vs LAC pass D 16.1, LAC offense 29th/6.5th; BAL vs NO — BAL rush O 96.8, BAL pass D 96.8 vs NO pass O 38.7 (Shough fade); SF vs MIA — SF pass O 80.6 / rush O 93.5 vs MIA pass D 32 / rush D 12.9; KC vs IND — novel edge nobody had: KC rush O 100th vs IND rush D 3.2 (Pacheco/Hunt); CHI vs MIN — CHI pass O 90.3 / rush O 90.3, MIN rush D 100th; NYG@LAR — NYG pass O 96.8 vs LAR pass D 19.4, LAR rush D 6.45 vs NYG rush O 71 (Dart/Skattebo case); PHI vs TEN — PHI pass O 64.5 vs TEN pass D 12.9 / rush D 16.1 (smash spot); HOU vs CIN — Stroud mixed: CIN pass D 87.1 (good, tempers) but CIN pressure forced 12.9th vs HOU allowed 66.1 (clean pocket holds); CAR vs ATL — Bryce tempered: ATL pass D 83.9 / rush D 90.3, CAR allows pressure 19.4th (low-volume game); NE vs PIT — Maye faces PIT pass D 93.5, NE rush O 3.2 (worst); NYJ vs GB — NYJ offense 87/84th but GB D 64.5/64.5, GB rush O 0.00 vs NYJ D 80.6/74.2.
- **Adversarial conflicts vs hand-built lineups**: solver fades Dak/CeeDee/Pickens (salary+ownership) for the HOU triple-stack — agrees with Stroud/Schultz/Henry/Jeanty core of hand-built L2; solver loves D'Andre Swift ($6.3K, 22.0 DKN proj) and Christian Watson ($6.2K, 17.1) — in neither hand-built; solver's cash LAC DST (8.47 proj) conflicts with the INT-luck downgrade (+7.11) — pure-proj solver can't see luck regression, human+lab wins; solver's Olave (17.7 DKN) conflicts with lab (BAL pass D 96.8) — faded on lab grounds; Stroud's case survives narrowed (clean pocket yes, CIN pass D 87.1 says efficiency earned not given).
- **Revised 15-game GPP lineups**: L1 "Lab + solver consensus" $49,400 (~78% own): Stroud 5500 / Henry 7200 / Swift 6300 / JSN 8100 / Metcalf 5200 / Hutchinson 3500 / Schultz 3200 / FLEX CMC 8000 / JAX DST 2400; L2 "MNF + contrarian" $50,000: Geno 4800 / Swift 6300 / Skattebo 5900 / Nabers 6500 / C. Watson 6200 / Coker 5100 / Andrews 4400 / FLEX Bijan 8200 / TB DST 2600.
- **Injury-verified exclusions (9/19)**: Bowers (doubtful), Flowers (doubtful), N. Collins (OUT), Mason (IR), Darnold/Kyler Murray/Purdy (OUT), London (status disputed), Jeudy (team/salary conflict), Kelce (implausible row).
- **Still gated**: lobby salary verification (all `[2P]`); Sunday 11:30 CT inactives; Puka (hip) + Banks (calf) Saturday reports; SNF KC-backfield salaries (lab edge, no pool data); 15-game ownership for SNF/MNF pieces.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Pure-projection solver can't see turnover-luck regression (LAC DST 8.47 proj vs +7.11 INT-luck downgrade) — regression/luck-adjustment layer is a missing engine component — OTHER
- Leverage formula explicitly weights ceiling against ownership: `ceiling/(own*100+1.5)*6 + ceiling*0.45` — portable engine primitive — OTHER
- Floor=0.55×proj / ceiling=1.6×proj as uniform-derived range proxy — portable distribution primitive, flagged as labeled/approximate — OTHER
- Lab-vs-consensus fights resolved by lab: Olave (17.7 DKN proj) faded on BAL pass D 96.8 — SCHEME
- Solver faded Dak/CeeDee/Pickens on salary+ownership, human+lab agreed on HOU triple-stack instead — OTHER
- CIN pressure forced 12.9th vs HOU allowed 66.1 (clean pocket holds) — the pocket-vs-efficiency tension narrows Stroud's case — OL
- Shough fade: BAL pass D 96.8 vs NO pass O 38.7 — QB-BEHAVIOR
- Dart/Skattebo case from NYG pass O 96.8 vs LAR pass D 19.4, LAR rush D 6.45 vs NYG rush O 71 — SCHEME
- Methodology honesty: one-game samples labeled descriptive-not-predictive; stale props-consensus deliberately excluded; ownership partially estimated and labeled — TRUST-SIGNAL
- Explicit gating list (salary verification, 11:30 CT inactives, Puka/Banks reports, SNF salaries, SNF/MNF ownership) — TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the published leverage formula, floor/ceiling multipliers, and the gse-lab percentile tables as first-party priors in the optimizer, and build the missing turnover-luck adjustment layer the solver demonstrably lacks.
