# docs/dfs/research/2026-09-25/dfs-week3/PROVENANCE.md
## What it is (1-2 sentences)
Full provenance and exact math for a LOCAL-ONLY Week 3 DraftKings Sun–Mon Special optimizer run (9/25): projection formulas, weather/usage/ownership adjustments, construction-rule repairs, and exclusions — nothing entered, no DK account touched.
## Key metrics/methods (formulas where given, else "not specified")
- Projections: proj = 0.6×appg + 0.4×propsImplied (propsImplied: non-QB = recYds/10 + receptions×1 (PPR) + rushYds/10 + tdProb×6; QB = passYds/25 + passTD×4 + rushYds/10 − 0.8 INT expectation). tdProb = 100/(odds+100) for +odds, |odds|/(|odds|+100) for −odds. appg = DK AvgPointsPerGame (2-game sample).
- Case Keenum fill: 200.3/25 + 1.0×4 + 9.1/10 − 0.8 = 12.12 (FantasyPros projection, no lines posted).
- Weather multipliers: TEN@NYG (rain 92% ppop, 23–31 mph gusts): QB/WR/TE ×0.90, DST +1.5; SEA@WAS, LAC@BUF, LAR@DEN: QB/WR/TE ×0.95.
- Usage multipliers: Kalif Raymond +15%, D'Andre Swift +10%, Burden III −10%, Odunze −10%, Freiermuth +10%, Andrews +10%; Cole Kmet +0% (narrative only, documented).
- Floor/ceiling: skill floor = proj×0.55 (QB ×0.60), ceiling = proj×1.7; DST floor ×0.3 / ceiling ×2.2; Keenum ceiling ×1.5.
- Ownership ALL PROXY: salary-prior own = 0.03 + 0.22×(salary−2500)/(8800−2500), clamped [0.015, 0.30]; buzz +0.05 / named pivots −0.02.
- GPP construction rules (measured effect on 41-lineup portfolio): double-stack (QB + ≥2 same-team catchers) — 39.5% of top-100 Milly lineups vs 28.6% field; engine output repaired 4/41 → 41/41. No-TE-in-FLEX repaired 38/41 → 0/41. Final: 36 unique lineups, all re-validated (9-man, ≤$50K, stack satisfied).
## Data sources named
dk-sunmon-slate-salaries-week3.csv (767 players, DK salaries + AvgPointsPerGame); week3-props-ownership.md (prop lines); week3-injuries.md (87 rows excluded IR/OUT/D; extra questionable-leans excluded); week3-usage-bears.md; week3-venues-weather.md (Open-Meteo pull 9/25 ~2:35pm CT); gpp-winning-lineup-construction.md; optimizer = apps/web/lib/fantasy/dfs-optimizer.ts (exact branch-and-bound + exposure-controlled generateLineups).
## Findings (numbers and facts, not vibes)
- Double-stack repair effect: 4/41 → 41/41 lineups compliant; TE-in-FLEX: 38/41 → 0/41; final portfolio 36 unique lineups, zero validation violations.
- Exclusions: 87 DK-CSV rows excluded on IR/OUT/D status (IR 70 + OUT 14 + D 3); notable outs: Puka Nacua (doubtful), Goedert (out), Njoku (IR), Jaxson Dart (out for season), Jayden Daniels (out), Caleb Williams (expected out).
- 39.5% of top-100 Milly lineups double-stack vs 28.6% of field.
- Keenum (no lines): projected 12.12 via FantasyPros; ceiling capped ×1.5 (38 yrs old, no NFL pass since Dec 2023).
- Engine patch delivered: engine-patch-double-stack-te-flex.patch (git-apply-verified, opt-in flags, cash mode ignores both).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: complete DFS harness blueprint — exact prop-implied projection formulas, weather/usage multiplier values, proxy-ownership prior formula, GPP construction rules with measured lift, and an engine patch; directly documents the total-signal program's adjustment-layer pattern (multiplicative weather/role adjustments on base projections).
- TRUST-SIGNAL: every fill/assumption is documented and flagged in code (Keenum, Hubbard receptions, McBride yardage, Barkley rushing); limitations stated (dual-threat QB rush-TD equity understated; appg is a noisy 2-game sample; ownership 100% proxy).
## Engine-actionable? (yes/no + one-line what)
yes — the prop-implied projection formulas, weather/usage multiplicative adjustments, proxy-ownership prior, double-stack/no-TE-flex rules, and the verified engine patch are directly reusable as the DFS adjustment-layer + optimizer-hardening spec (with ownership flagged as the highest-value missing datum).
