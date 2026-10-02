# docs/data-sources/research/misc/competitor-scrape-2026-09-12.md
## What it is (1-2 sentences)
Reference note from a 2026-09-12 founder scraping agent capturing competitor props/odds table columns (LineStar, PropFinder), Statcast metric definitions, scoring/optimization logic from RotoWire/SaberSim/PickFinder/RBSDM, and calibration formulas scraped from sklearn/arXiv sources.
## Key metrics/methods (formulas where given, else "not specified")
- Platt scaling: p(y=1|f) = 1/(1+exp(Af+B)), A/B fitted by MLE
- Isotonic regression objective: sum (y_i − f^i)^2 s.t. f^i ≥ f^j whenever f_i ≥ f_j
- Temperature scaling: softmax(z/T)
- EV50: average of hardest 50% of batted balls (batter) / softest 50% allowed (pitcher)
- Grouping loss (arXiv 2210.16315): "given the calibration loss, the missing piece to characterize individual errors is the grouping loss"
- PickFinder method: every price vs a devigged fair line, ranked by edge
- SaberSim: simulates every game thousands of times, play-by-play
- LineStar target props table columns: position/team, Recent Form (Last 5/10, Season, Last LG), Projection (confidence), Market (odds, prop line/type), Edge (+EV, Edge %), Matchup (Matchup+ Imp, Matchup), Pick/consensus, Over/Under, Chat
- GSE gap vs LineStar noted: missing Recent Form windows, Matchup impact, Over/Under consensus (GSE already ships Sal, Proj, Val, Ceil, pOwn%, Lev)
## Data sources named
LineStar, PropFinder, RotoGrinders, RotoWire, SaberSim, OddsShopper, Statcast/Baseball Savant, FanGraphs, Baseball-Reference, Pro-Football-Reference, Basketball-Reference, Hockey-Reference, NFL Savant, RBSDM, The Odds API, Polymarket, DraftKings, scikit-learn, arXiv, nflverse
## Findings (numbers and facts, not vibes)
- Statcast qualifiers: 2.1 PA/team game (batters), 1.25 PA/team game (pitchers)
- PropFinder NFL columns: target share, snap counts, coverage matchups, weekly usage trends, hit rates, opponent matchup ranks, QB rankings, win totals, home-field advantage, weather, model spreads/totals/projections/win probability
- RotoWire optimizer logic: maximize projected fantasy points per roster spot under salary-cap constraints + stacking
- SaberSim: high-upside lineup optimization for ROI with player exposure controls, team stacks, game stacks
- RBSDM: EPA and Weighted EPA views with garbage-time win-probability filter
- "What to scrape next" backlog: LineStar Props deep page (logged in), PropFinder cheatsheets (sign-in gated), SaberSim optimizer ($7/7-day trial), OddsShopper Portfolio EV devigging method, FanGraphs model families (ATC, THE BAT, Steamer, ZiPS) and weights, nflverse NGS (sprint speed, time to throw, separation), PrizePicks/Underdog public pick %
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Calibration formulas (Platt/isotonic/temperature) are the standard calibration stack to benchmark any GSE calibration card against [OTHER]
- EV50 (hardest-50% batted balls) as a quality metric is the Statcast analogue of tail-quality weighting for NFL receiving props [OTHER]
- The 2.1/1.25 PA qualifier convention is a sample-size gating pattern GSE can mirror for props eligibility [TRUST-SIGNAL]
- Coverage matchups + target share columns in PropFinder map directly to GSE WR/TE props inputs [SCHEME]
- Public pick % (PrizePicks/Underdog consensus) wanted as a "5,000-over / 3,700-under" weighting factor [TRUST-SIGNAL]
## Engine-actionable? (yes/no + one-line what)
Yes — implement temperature scaling softmax(z/T) and Platt scaling as calibration fit options in the engine's calibration layer, and add devigged-fair-line edge ranking to props evaluation.
