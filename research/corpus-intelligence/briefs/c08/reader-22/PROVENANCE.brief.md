# docs/dfs/research/2026-09-25/dfs-week3/PROVENANCE.md
## What it is (1-2 sentences)
Full provenance log of the Week 3 DraftKings Sun–Mon optimizer harness run (2026-09-25): exact projection formulas, weather/usage adjustments, injury exclusions, two GPP construction rules applied post-hoc, and measured effects — all LOCAL-only, no contest entered.
## Key metrics/methods (formulas where given, else "not specified")
- Projection: with props, non-QB `propsImplied = recYds/10 + receptions×1 + rushYds/10 + tdProb×6` where `tdProb = 100/(odds+100)` (+odds) or `|odds|/(|odds|+100)` (−odds); QB `propsImplied = passYds/25 + passTD×4 + rushYds/10 − 0.8` (−0.8 = assumed INT expectation). `proj = 0.6×appg + 0.4×propsImplied`; without props `proj = appg`.
- Weather multipliers (Open-Meteo 9/25): TEN@NYG rain/gusts → QB/WR/TE ×0.90, TEN/NYG DST +1.5; SEA@WAS, LAC@BUF, LAR@DEN → pass-game ×0.95.
- Usage: Kalif Raymond +15%; Swift +10%; Freiermuth +10%; Andrews +10%; Burden/Odunze −10%; Kmet unadjusted (narrative-only).
- Floor/ceiling: skill floor proj×0.55 (QB ×0.60), ceiling ×1.7; DST floor ×0.3, ceiling ×2.2; Keenum ceiling capped ×1.5.
- Ownership is 100% proxy: salary prior `0.03 + 0.22×(salary−2500)/6300` clamped [0.015, 0.30] plus buzz nudges.
- Two harness-level construction rules: double stack (QB + ≥2 same-team pass-catchers; research: 39.5% of top-100 Milly lineups vs 28.6% of field) and no TE in FLEX. Measured: 41 lineups → double-stack **4/41 → 41/41**; TE-in-FLEX **38/41 → 0/41**; final portfolio 36 unique lineups. Known behavior: repair can displace a bring-back to complete the double stack.
- Exclusions: 87 IR/OUT/D rows plus lean-out questionables (Bowers, Flowers, Bagent, O'Connell, Okonkwo, Dowdle, Spears, Monangai, Dart-out-for-season, Caleb Williams expected out); kept expected-to-play (Darnold, Warren, Pollard, Nabers, Evans, Kupp, Coker).
## Data sources named
`dk-sunmon-slate-salaries-week3.csv` (767 players, DK AvgPointsPerGame); `week3-props-ownership.md`; `week3-injuries.md`; `week3-usage-bears.md`; `week3-venues-weather.md` (Open-Meteo); `gpp-winning-lineup-construction.md`; `apps/web/lib/fantasy/dfs-optimizer.ts` (branch-and-bound, 60% max exposure, gpp/leverage modes); `engine-patch-double-stack-te-flex.patch` (verified `git apply --check`).
## Findings (numbers and facts, not vibes)
- The projection model is an explicit 60/40 blend of DK AvgPointsPerGame and prop-implied fantasy points, with documented fills (Hubbard 2.0 rec; McBride 7.5 rec × 8.0 ypr) and gaps (Saquon rushing line missing → props skipped).
- The post-hoc harness repair materially changed construction compliance (4→41 double stacks, 38→0 TE FLEX) without touching projections — the patch encodes the same rules inside the engine search.
- Gaps listed: ownership 100% proxy (highest-value missing datum); weather snapshot ages Fri→Sun; appg is a 2-game sample.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: QB proj = passYds/25 + 4×passTD + rushYds/10 − 0.8 INT expectation (documented limitation: understates dual-threat rush-TD equity, e.g. Josh Allen).
- SCHEME: double-stack rule as the primary winner-correlation lever; weather multipliers applied by game script (wind/rain on pass games, DST boost).
- COACHING: Bears-specific usage adjustments (Keenum safety-blanket +15% Raymond, Burden/Odunze −10%).
- TRUST-SIGNAL: every assumption is flagged in code; a silent empty result is made impossible (validation throws).
- OL: not directly modeled in this doc.
## Engine-actionable? (yes/no + one-line what)
Yes — the projection blend formula, weather/usage multipliers, and the double-stack/no-TE-FLEX patch are directly adoptable into the engine (patch is `git apply`-verified against `apps/web/lib/fantasy/dfs-optimizer.ts`).
