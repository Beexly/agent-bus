# arxiv-program/research/2026-09-21/arxiv-deep/0978-bookmakers-mispricing-home-advantage.md
## What it is (1-2 sentences)
A 2020 arXiv paper (2008.05417, Deutscher & Winkelmann) testing whether bookmakers repriced the disappearance of home advantage when the German Bundesliga restarted behind closed doors after the COVID-19 break, using an efficiency logit of bet outcomes on implied probabilities plus regime dummies.

## Key metrics/methods (formulas where given, else "not specified")
- Implied probability (de-margined): π̂_i = (1/O_i) / (1/O_h + 1/O_d + 1/O_a), i ∈ {h, d, a}, O_i = average odds.
- Bookmaker margin: margin_m = Σ_i O_{m,i}^{-1} − 1.
- ImpProbDiff = π̂_h − π̂_a (positive ⇒ home favourite per bookmaker).
- Efficiency logit (MLE via R glm): logit(Pr(Won_i = 1)) = β_0 + β_1·ImpliedProbability_i + β_2·Away_i + β_3·BettingAfterRound25_i + β_4·COVID_i + β_5·(Away_i·COVID_i) + β_6·RoundAfterRound25_i + β_7·(RoundAfterRound25_i·COVID_i); efficient-market null: no coefficient beyond β_1 differs from zero.
- Method follows Forrest & Simmons (2008) / Franck et al. (2011) efficiency-test design.

## Data sources named
football-data.co.uk (match results + pre-game odds, 30–56 bookmakers per match, average odds used). Sample: 2019/20 Bundesliga split at round 25 (Mar 9, 2020): 223 matches with spectators, 83 matches without spectators (rounds 26–34 + 2 postponed); reference 2014/15–2018/19: 1,125 matches rounds 1–25, 405 matches rounds 26–34. Regression N = 3,672 (each match counted twice: bet-on-home and bet-on-away).

## Findings (numbers and facts, not vibes)
- Table 1: home wins 49.63% (prior-season R26–34) → 32.53% (closed-door); away wins 26.91% → 44.58% (+65% relative); draws 23.46% → 22.89%.
- Table 2: away goals exceeded home goals for the first time (1.66 vs 1.43); home goals −20%.
- Table 5 logit (N=3,672, AIC=4,322.4): ImpliedProbability 4.530*** (0.231); Away −0.162** (0.080) (pre-COVID home bias); BettingAfterRound25 0.032 (ns); COVID −0.606** (0.268); Away×COVID +1.136*** (0.358); round-trend interactions all insignificant → bookmakers never adjusted during the 9 closed-door rounds.
- Table 4 margin regression: margin on |ImpProbDiff|: −0.002*** per unit prob-difference; season −0.001***; R² = 0.468; N = 1,836. Margins 4.79% (closed-door) vs 4.83% (with spectators) — margins did NOT rise despite higher bookmaker uncertainty.
- Table 6 ROIs (level stakes): away bets closed-door +14.71% vs home bets −33.84%. Baselines: 2014/15–2018/19 R26–34 home +6.24% / away −15.52%; 2019/20 with spectators away +5.53%.
- Table 7 (ImpProbDiff bins): bookmakers favoured home in ~60% of closed-door matches (avg +7.73 pp); in 39 "close" matches (|ImpProbDiff| ≤ 0.3): 19 away wins vs 9 home wins; heavy home favourites (Δ>45 pp): only 11 of 16 won.
- Limitations noted in file: 83 closed-door matches is a small sample (+14.71% ROI has wide error bars, no t-stat); average odds (not best available); flat stakes, no Kelly/variance adjustment.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (OTHER) Market-microstructure tool: the "logit of Won beyond implied probability with regime dummies" is a directly reusable bookmaker-lag detector — flag any regime dummy |z| > 2 as an edge window; fills the corpus gap on "when public models beat liquid closes."
- (COACHING) INFERENCE: regime dummies generalize to coaching-driven regime changes (new HC/playcaller, scheme overhauls) — bookmakers may lag those repricings too; the file does not test this.
- (OTHER) Operational insight: mispricing concentrates in "balanced" games (small |ImpProbDiff|) during regime transitions (19 vs 9 away wins in close matches) — GSE mispricing alerts should widen on balanced games during transitions.
- (TRUST-SIGNAL) INFERENCE: margins did not rise when uncertainty rose — books did not protect themselves, consistent with overconfident pricing; treat static margins as a weak trust signal.

## Engine-actionable? (yes/no + one-line what)
Yes — build a standing bookmaker-lag monitor running nightly `won ~ implied_prob + regime dummies` logits per league/market (rule changes, weather regimes, neutral-site, attendance shocks), flagging regime-dummy |z| > 2 as candidate edge windows; de-vig formulas (π̂_i, margin) slot directly into the odds-normalization pipeline.
