# docs/arxiv-program/research/2026-09-21/arxiv-deep/0235-introducing-grid-war-rethinking-war-for.md

## What it is (1-2 sentences)
Reformulates MLB starting-pitcher WAR as "Grid WAR": context-neutral win probability added above replacement computed per game from a Poisson/Skellam scoring grid (Empirical Bayes, park-adjusted), then summed over the season — proving via Jensen's inequality that the standard average-then-convert WAR systematically undervalues volatile players. Empirically predicts future performance better than FanGraphs RA/9 and FIP WAR on 2010–2019 Retrosheet/Statcast data.

## Key metrics/methods (formulas where given, else "not specified")
- GWAR = f(I,R) − w_rep; mid-inning: Σ_{r≥0} g(r|S,O) f(I, r+R) − w_rep; w_rep = 0.428 (calibrated so Σ GWAR 2010–2019 = Σ FanGraphs RA/9 WAR)
- Grid f(I,R): P(win | R runs through I innings), league-average offense; inning runs X_i, Y_i ~ i.i.d. Poisson(λ_X), Poisson(λ_Y); f = P(Σ_1^9 X_i > R + Σ_{I+1}^9 Y_i) + ½·P(Σ_1^9 X_i = R + Σ_{I+1}^9 Y_i)
- I=9 → Poisson(9λ_X); I<9 → Skellam(9λ_X, (9−I−1)λ_Y); prior λ_X, λ_Y ~ N_+(λ, k·σ²_λ), k = 0.28 chosen to minimize log-loss; posterior-mean grid via Monte Carlo B=100
- Central claim (Eq. 1.1): WAR(R) convex in runs allowed ⇒ WAR(E[R]) ≤ E[WAR(R)] — averaging-then-converting undervalues WAR (Jensen)
- Park effects α: ridge regression on half-inning runs (park + team-offense-season + team-defense-season fixed effects, 3-year windows); ballpark adjustment λ → λ + α
- Talent estimation: parametric Empirical Bayes shrinkage (Brown 2008 style), shrunk toward overall mean by games pitched, mapped to ranks

## Data sources named
- Retrosheet play-by-play, every plate appearance 2010–2019 featuring a starting pitcher (scraped 1990–2020); Statcast since 2008 (auto-scraped at gridwar.xyz)
- FanGraphs RA/9 WAR and FIP WAR via R `baseballr` package (Petti & Gilani 2021)
- Code: github.com/snoopryan123/grid_war (R); Shiny app gridwar.xyz

## Findings (numbers and facts, not vibes)
- Predictive RMSE of 2019 GWAR ranks (2010–2018 fit): GWAR-based 10.2 vs FWAR(RA/9)-based 12.4 vs FWAR(FIP)-based 13.1 [OTHER]
- Extreme pitchers: GWAR beats FWAR on 5 most-undervalued vs RA/9 (7.2 vs 15.7), vs FIP (5.1 vs 15.0), 5 most-overvalued vs RA/9 (10.7 vs 14.0), vs FIP (10.2 vs 18.0) [OTHER]
- GWAR vs FWAR scatter regression: y = 0.47 + 0.85x (slope < 1 → standard WAR undervalues worse pitchers, overvalues better ones) [OTHER]
- Koufax 1966: 11.54 GWAR (best season ever, 41 games) vs 20th by FanGraphs WAR — three blow-up games overweighted by averages [OTHER]
- Whitey Ford: 78 career GWAR (19th since 1952) vs 53 FWAR (49th); Catfish Hunter: 52 GWAR (32nd) vs 37 FWAR (107th) [OTHER]
- Scherzer 2014 6-game stretch: standard WAR drops 2 → ½ after one blow-up; "real" WAR ≈ 1.5 (max single-game damage −0.40) [OTHER]
- Structure finding: all pitchers have great games; great pitchers have few terrible games — averaging dilutes mediocre pitchers' good games ("undervaluing mediocrity") [COACHING]
- FWAR(FIP) most stable season-to-season; GWAR ≈ FWAR(RA/9) noisier — stability ≠ predictiveness [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING — per-game convex aggregation + Empirical Bayes shrinkage is the talent-evaluation template: volatile QBs whose good games are diluted by season averages are systematically mispriced by average-based metrics
- TRUST-SIGNAL — the Jensen/convexity rule is an audit rule for GSE's own public metrics: any "average-then-convert" valuation is biased against volatility, and volatile-QB mispricing is a stated GPP leverage angle
- OTHER — the baseball grid and Poisson-innings machinery are sport-specific; no direct QB-behavior, OL, or scheme findings

## Engine-actionable? (yes/no + one-line what)
yes — install the per-game convex aggregation design rule (compute value per game, then sum — never average-then-convert a convex value mapping) and build an NFL context-neutral per-game QB WPA grid from drive-level Poisson scoring with Empirical Bayes shrinkage for small-sample QB ratings
