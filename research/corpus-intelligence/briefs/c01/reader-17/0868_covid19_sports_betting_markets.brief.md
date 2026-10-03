# arxiv-program/research/2026-09-21/arxiv-deep/0868-covid19-sports-betting-markets.md
## What it is (1-2 sentences)
Ledger brief for Qureshi & Zaman (2021, arXiv:2109.07581, MIT/Yale) measuring whether COVID-19 made sports moneyline markets inefficient across 109,249 games (2010–2021, NFL/NBA/NHL/MLB/NCAAF/NCAAB). Verdict: ADAPT — the regime-driven market-inefficiency case study; only the NBA's no-fans regime showed a statistically significant exploitable edge.

## Key metrics/methods (formulas where given, else "not specified")
- Implied probability from moneyline: p_u = 100/(100+|o_u|) for o_u ≥ 100; p_u = |o_u|/(100+|o_u|) for o_u ≤ −100 (eq. 1–2).
- Efficiency diagnostic α = −1 + (1/n)Σ_u W_u/p_u (eq. 3); α=0 perfectly calibrated, α<0 efficient, α>0 underdogs win more than odds imply.
- Tests: KS + Mann-Whitney U per sport with Holm-Bonferroni correction; Wilcoxon signed-rank for sign of NBA COVID α.
- Bankroll simulation: daily bankroll M_t, reinvest fraction λ ∈ [0,1] (grid 0.1), allocation weight functions f(p_u): Uniform, p_u, 1/p_u, √(p_u(1−p_u)) (Bernoulli), 1/√(p_u(1−p_u)), √((1−p_u)/p_u) (Moneyline), √(p_u/(1−p_u)) (Inverse Moneyline); M_0 = $100.
- Robust Sharpe γ = median(R)/MAD(R) (eq. 4) — moneyline returns are bimodal, not normal.

## Data sources named
- 109,249 games after filters (favorites ≤ −100; underdogs ≥ +100 or −200…−100), 2010–2021 seasons
- Odds archived from SportsBookReviewsOnline; full dataset + odds at github.com/kai-trading-bot/sports_anomalies
- COVID game definitions per league (NBA bubble from 2020-07-30; NHL 2020-08-01; MLB 2020-07-23; NFL/NCAAF fall 2020; NCAAB none)

## Findings (numbers and facts, not vibes)
- NBA underdog win probability: ~0.30 normal → ~0.38–0.40 COVID; only NBA shows positive α in COVID. KS/MW p ≤ 0.001 at 1% under Holm-Bonferroni; Wilcoxon p ≤ 10^−5.
- NBA COVID α = +0.17 (2019–20) and +0.10 (2020–21); post-COVID (fans back after All-Star Game) α = −0.9, negative again — all at 1%.
- Inefficiency concentrated in implied-prob bin (0.2, 0.3] (underdog odds +233 to +400), 153 games (21.7% of NBA COVID games) — the only bin significant at 1% (MW p = 0.00021/0.0003).
- All other sports' markets stayed efficient; NCAAB MW-significant but negative mean α (not exploitable).
- Mechanism evidence (Table 7): NBA has the lowest total-points coefficient of variation (0.11) of any sport — inherently least random; removing fans plausibly erased home-field advantage and oddsmakers did not reprice.
- Betting simulation: flat $1 on every underdog → 16.7% profit margin. λ=1.0 + inverse-probability (1/p_u) weights → $100 → $2,666 (~26-fold). Probability-weighting (f=p_u) → full ruin within a month. Best risk-adjusted: Bernoulli weights, λ=0.1 → $291.73 with the highest robust Sharpe.
- INFERENCE flagged in file: the 26-fold result is in-sample on a known regime — not a forward claim; backtest assumes liquidity at archived odds and no limits, no transaction costs.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: regime-flag template — hard structural-break covariates (neutral-site games, no/limited attendance, extreme weather, short-rest disruptions) that shrink the home-field advantage prior and widen outcome uncertainty; the paper's mechanism (erased HFA → underdogs underpriced) ports directly to NFL neutral-site/limited-attendance situations.
- OTHER: continuous efficiency monitor recipe (α per league × market × rolling 4-week window, alert at α>0 with Wilcoxon p<0.01) and odds-band conditioning (edge estimates per implied-probability band, not one global number).
- OTHER: staking grid — max-return (λ=1, 1/p) and max-Sharpe (Bernoulli, λ=0.1) sit at opposite corners; cross-reference with the Kelly lane.

## Engine-actionable? (yes/no + one-line what)
Yes — implement the α efficiency monitor on GSE's own pick/market history plus regime flags that shrink HFA prior and condition edge estimates by implied-probability band; numeric gate: detect α > 0 at 1% in any league × window before staking, with +0.10–0.17 as the magnitude that justified real money.
