# arxiv-program/research/2026-09-21/arxiv-deep/1189-converting-college-football-point-spread.md
## What it is (1-2 sentences)
A principled spread→cover-probability conversion that multiplies a zero-mean normal's margin density by empirical *key-number multipliers* (historical ÷ normal-implied probability per integer margin), then column-normalizes into a conditional margin distribution — so a 2.5→3.5 edge counts for far more than 4.5→5.5. College-specific; no backtest of profitability (paper states this explicitly).
## Key metrics/methods (formulas where given, else "not specified")
- Multiplier per margin = historical probability ÷ normal-implied; selected: 0:0, 1:0.9, 2:0.7, 3:2.7, 4:1.1, 5:0.7, 6:0.8, 7:2.1, 8:0.7, 9:0.4, 10:1.3, 11:0.7 (SD=22 fit historical best)
- Matrix: rows margins −60..60 × columns projected spreads −39..39; cell = Normal(col, SD=15) mass over (s−0.5,s+0.5) × multiplier(s), column-normalized; non-integer projections interpolated
- Edge = cover% − break-even%; break-even p = 100·|min(100,odds)|/(100+|odds|) (−110 needs 52.4%)
- Assumes gambler's projection is the conditional mean; pushes explicitly excluded; OT-rule change caveat for margin 2
## Data sources named
Historical college margin probabilities from Boyd (2015), 1980–2014 (margin 3: 9.6%, 7: 7.3%, 10: 4.3%, 14: 4.3%, 1: 3.4%, 4: 3.9%); 2021 CFB (SD 21.01 all games, 15.35 similar-spread); Bill Connelly's SP+ used for illustration (HFA ≈2–2.5); tool at pickswiththeprofessor.com/edge/cfb
## Findings (numbers and facts, not vibes)
- Worked example (Baylor −2.5, SP+ −2.9): plain normal 51.06% vs key-number-adjusted 53.2% cover probability → 0.8% edge (Baylor covered, won by 7 — anecdotal)
- Sanity example: projected to lose by 8, bet at +7.5 → 1.2% edge under the method
- No ROI, win-rate, or CLV reported; columns' expectations within 0.1–0.2 points of projection (fit check only)
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: core spread-infrastructure — rebuild the multiplier matrix with NFL exact margins (nflverse 2000–2024) and NFL conditional SD (Stern 13.861; more recent estimates 13.5), with push-as-half-win handling; wire into the engine: projected spread + book spread + odds → cover probability + edge → Kelly sizing
## Engine-actionable? (yes/no + one-line what)
Yes — rebuild NFL version (~3–5 days) and backtest 2015–2024; gate: reliability slope 0.9–1.1 AND edge>2% backtest positive ROI (CI excluding zero) or mean CLV ≥ +0.5; reject if slope <0.8 or ROI CI includes zero with negative CLV.
