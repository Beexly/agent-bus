# docs/arxiv-program/research/2026-09-21/arxiv-deep/0281-causal-hangover-effects.md
## What it is (1-2 sentences)
Read-note on Santucci & Lax (2024, arXiv:2412.21181) testing whether playing in a nightlife city ("party city") the day before a game causally hurts next-day NBA/MLB performance vs bookmakers' expectations, using lagged game location as proxy. Verdict recorded in the file is ADAPT: the quasi-experimental design is a portable template for NFL situational spots; the nightlife finding itself is NBA/MLB-specific, not NFL-actionable.

## Key metrics/methods (formulas where given, else "not specified")
- Logistic: logit P(cover spread) = β_party·Party + controls (rest, jetlag via logged travel distance + east-west bearing interaction, home, lagged possession-change fatigue, time of day) — NBA
- MLB: logit P(win | moneyline-implied probability) with party continuous ×weekend
- Mechanism drill-down: OLS of team points allowed/scored on party indicators
- Identification argument: efficient market ⇒ P(beat spread) ⊥ last game location; residual lagged-"party city" effect = causal hangover. Placebo test: party × (>24h rest) interaction expected null.
- Party measures: discrete = visited LA or NYC within 24h (from retired-player interviews); continuous = rescaled log(BLS musician establishments in last-game MSA), zero if last game >24h ago

## Data sources named
- covers.com (scraped spreads/moneylines); basketball-reference.com / baseball-reference.com (outcomes); BLS Quarterly Census (sound recording studios, musical groups, music publishers per MSA-quarter 2010–2016, lagged one year); ESPN (minutes data). No code repo or data links stated.

## Findings (numbers and facts, not vibes)
- NBA (n=9,517 back-to-back obs): party discrete −0.557*** (SE 0.149); party continuous −0.158* (SE 0.095). All other controls insignificant (spreads already price rest/jetlag/travel/home). Log-likelihood −6586.3, AIC 13200.6.
- MLB (n=26,473): continuous nightlife ×weekend −0.120* (SE 0.071); no-weekend 0.137 (SE 0.134, n.s.); bookmaker odds 2.682*** (0.158).
- Points models (n=6,234): party discrete → +2.970*** points allowed (SE 0.835); continuous → +1.661*** allowed (SE 0.644); points scored −0.139 (n.s.). Mechanism = defense, not offense. R² ≈ 0.09.
- Placebo (NBA, >24h rest): 0.053 (SE 0.084) — null not rejected; effect dissipates with rest.
- Betting backtest (MLB, $100 flat on positive-EV spots): positive all 7 seasons 2011–2017 (2016 ended +$11.5k; worst drawdown $89 early 2016); no CIs or Sharpe reported.
- Weaknesses: party proxies unvalidated (San Antonio misranks in appendix); NBA travel schedule unobserved (proxy noisy); identification assumption asserted while their own Figure 1 shows last-game location correlates with next-day opponent; MLB series structure confounds home-vs-road partying; MLB continuous measure p<0.1 at n=26k is weak.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: design pattern for validating latent behavioral edges — market-implied expectation as control, placebo time-window as falsification. Genuine causal-inference-via-market-design, adjacent to GSE's causal-inference ML brief.
- COACHING: situational-spot mining lane — fits GSE's existing referee-crew totals work and 2026-09-19 x-sweep situational work.
- OTHER: NFL transfer = the template, not nightlife — lagged-context features (short rest, cross-country travel, Thursday-after-Sunday, altitude back-to-back, dome→cold) regressed ATS-cover conditioning on de-vigged market lines.

## Engine-actionable? (yes/no + one-line what)
Yes — port the design as an NFL situational-spot screener (nflverse 2006–2025 + de-vigged consensus lines, logistic ATS-cover with market-implied offset, FDR across candidate spots, placebo on ≥10 days rest) with a hard adoption gate (≥54.5% cover over ≥200 obs, FDR-adjusted p<0.05, CLV beat-rate >50%). Estimated 2–3 days + 1 day for placebo harness.
