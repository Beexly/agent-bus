# arxiv-program/research/2026-09-21/arxiv-deep/0978-bookmakers-mispricing-home-advantage.md
## What it is (1-2 sentences)
Full read of Deutscher & Winkelmann (2020, arXiv:2008.05417): tested whether bookmakers repriced the disappeared home advantage when the Bundesliga restarted behind closed doors (COVID-19) — they did not. Ledger verdict: ADAPT — the mispricing-lag efficiency test is a reusable market-microstructure tool.

## Key metrics/methods (formulas where given, else "not specified")
- De-vigged implied probability: π̂_i = (1/O_i) / (1/O_h + 1/O_d + 1/O_a); margin_m = Σ_i O_{m,i}⁻¹ − 1
- Efficiency logit: logit(Pr(Won_i=1)) = β₀ + β₁·ImpliedProbability_i + β₂·Away_i + β₃·BettingAfterRound25_i + β₄·COVID_i + β₅·(Away_i·COVID_i) + β₆·RoundAfterRound25_i + β₇·(RoundAfterRound25_i·COVID_i); efficient-market null = no coefficient beyond β₁ differs from zero
- ImpProbDiff = π̂_h − π̂_a; ROI of naive always-bet-home / always-bet-away strategies by period

## Data sources named
- Match results + pre-game odds from www.football-data.co.uk (30–56 bookmakers per match, average odds); 2019/20 Bundesliga split at round 25: 223 matches with spectators, 83 without; reference seasons 2014/15–2018/19

## Findings (numbers and facts, not vibes)
- Home wins 49.63% → 32.53% after the break; away wins 26.91% → 44.58% (+65% relative); away goals exceeded home goals for the first time (1.66 vs 1.43); home goals −20%
- Logit (N=3,672, AIC 4,322.4): ImpliedProbability 4.530***; Away −0.162** (pre-COVID home bias); COVID −0.606**; Away×COVID +1.136*** (0.358); round-trend interactions all insignificant — bookmakers never adjusted over 9 closed-door rounds
- ROIs (level stakes): away bets closed-door +14.71% vs home bets −33.84% (baselines: prior seasons R26–34 home +6.24% / away −15.52%)
- In 39 "close" matches (|ImpProbDiff| ≤ 0.3): 19 away wins vs 9 home wins; bookmakers favoured home in ~60% of closed-door matches (avg +7.73 pp)
- Margins did NOT rise for closed-door matches (4.79% vs 4.83%) despite higher bookmaker uncertainty
- Limitation: 83 closed-door matches is a small sample (+14.71% ROI has wide error bars, no formal t-stat); Bundesliga-only; flat-stake ROIs, no Kelly

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL — bookmaker-lag monitor: nightly logit of won ~ implied_prob + regime dummies flags regime-change edges (|z|>2); mispricing is widest on "balanced" games during regime transitions
- OTHER — market microstructure: regime-change mispricing (rule changes, weather regimes, neutral-site events, attendance shocks) as an engine edge window; de-vig formulas slot into odds normalization

## Engine-actionable? (yes/no + one-line what)
Yes — build a standing bookmaker-lag monitor (logit of won on implied prob + regime indicators per league/market) and widen mispricing alerts on close games during regime transitions; NFL analogue: rerun on 2020 no-fan season expecting Away×COVID > 0
