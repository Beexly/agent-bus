# docs/ops/PLACEABILITY_AND_PERFORMANCE_2026-09-07.md
## What it is (1-2 sentences)
A 2026-09-07 measurement brief (read-only SELECT via Neon MCP, all figures MEASURED) on published-line placeability — whether the engine's averaged lines land on quotable book ladders — plus the surprise finding that placeable picks performed far worse than off-ladder ones. C-119 (step guard for MLB totals) was deliberately not implemented because it would answer C-143 (which line is canonical) by accident.
## Key metrics/methods (formulas where given, else "not specified")
Placeability defined as a line a book actually quotes (1.5/2.5/3.5 ladder for MLB run lines, half-point steps elsewhere). Worst distance from a real line measured: 0.25. Break-even for near-even-money markets: about 52.4% win rate. Moneyline picks only taken at `fairProb >= 0.58` (`scoring.ts`). No formulas given beyond these.
## Data sources named
Neon MCP (read-only); `packages/prediction-engine/src/scoring.ts` (`isPublishableSpreadLine` at :930, `line: avgTotal` at :856); `GROUND_TRUTH_AUDIT_2026-09-07.md`; truth surface `stalePendingPicks`.
## Findings (numbers and facts, not vibes)
- Off-ladder share of published lines: MLB totals 56.4% (382/677), MLB spreads 47.6% (352/739), NCAAF totals 73.1% (79/108), NCAAF spreads 68.6% (118/172), MLS totals 70.7% (53/75), NFL spreads 61.5% (72/117). Refusing to publish off-ladder lines would suppress ~56% of published MLB totals.
- Settled non-bootstrap decided picks: MLB totals on-ladder win rate 36.3% (70/193) vs off-ladder 49.5% (136/275); MLB spreads on-ladder 43.2% (127/294) vs off-ladder 50.0% (116/232). On-ladder MLB totals are ~3.8 standard deviations below a coin flip — not sampling noise. Controls: all cohorts isBootstrap=false; mean bookmakerCount 8.32 on-ladder vs 8.26 off-ladder for totals (not a data-volume artifact).
- Confound named: with ~8 books, on-ladder average = books agreed, off-ladder = books disagreed — so the split is "market consensus" as much as placeability. The engine does materially worse on games where the market is confident.
- Ground-truth caveat: GROUND_TRUTH_AUDIT measured 68 of 590 published moneyline results wrong and 187 of 670 game rows carrying another fixture's final; corruption balance across cohorts unknown; spread/total results never re-derived against ESPN.
- Market win rates (non-bootstrap, decided): NCAAF moneyline 94.1% (102), MLB moneyline 62.8% (608), MLB spread 46.2% (526), MLB total 44.0% (468). NCAAF 94.1% attributed to early-season mismatches, not skill; blended win rate across markets would be misleading in the engine's favor.
- Gate: `PERFORMANCE_STATS_ENABLED` is off; before flipping, the performance surface must be checked for blended-win-rate mixing, and CLV/calibration framing should carry the claim instead of win rate.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: published off-ladder lines cannot be placed, so any public performance claim must use the placeable subset as the denominator; blended win rates across markets are explicitly misleading.
- SCHEME: averaging ~8 book lines creates a synthetic line that sits between quotable numbers up to 73% of the time — line-consensus methodology interacts with what a bettor can actually back.
- OTHER: market-confidence confound — the engine underperforms precisely where book consensus is highest, which is where an edge should live.
## Engine-actionable? (yes/no + one-line what)
Yes — treat market-confidence as an anti-signal: gate or down-weight picks where book consensus is high, since on-ladder/consensus games are the worst-performing subset.
