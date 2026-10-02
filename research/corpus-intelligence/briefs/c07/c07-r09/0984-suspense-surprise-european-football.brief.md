# arxiv-program/research/2026-09-21/arxiv-deep/0984-suspense-surprise-european-football.md
## What it is (1-2 sentences)
Full read of arXiv 2506.21253v1 (Flepp, Pawlowski & Richardson, 2025): replaces failed outcome-uncertainty (UOH) with two within-match entertainment metrics from Ely, Frankel & Kamenica (2015) — **suspense** (forward-looking: variance in beliefs about the outcome in the next period) and **surprise** (backward-looking: belief shift between periods) — computed minute-by-minute for 25,389 real men's matches (2010/11–2023/24) and 725 women's matches across Europe's top five leagues, validated against TV audiences.

## Key metrics/methods (formulas where given, else "not specified")
- In-play outcome model: each match is a "Poisson match" — X ~ Poisson(λH), Y ~ Poisson(λA), independent; scoring rates spread across 90 minutes via league-specific empirical minute-by-minute goal distributions; red cards adjust rates (penalized team × 2/3, opponent × 1.2, per Vecer et al. 2009). Per minute, Gt ~ Bernoulli(p_t^S); 100,000 simulations per minute → 9M simulated minutes per match; injury time folded into minutes 45/90 (exactly 90 periods).
- Per-match (λH, λA) calibrated via optimization (Buraimo et al. 2020) matching overround-removed closing 1X2 implied probabilities AND O/U (0.5–5.5) implied probabilities — market-anchored rates.
- Surprise = Σ_{t=1}^{90} sqrt((p_t^H−p_{t-1}^H)² + (p_t^D−p_{t-1}^D)² + (p_t^A−p_{t-1}^A)²)
- Suspense = Σ_{t=1}^{90} sqrt(Σ_{j∈{H,D,A}} [p_{t+1}^{HS}((p_{t+1}^j|HS_{t+1})−p_t^j)² + p_{t+1}^{AS}((p_{t+1}^j|AS_{t+1})−p_t^j)²])
- Benchmark from 13,260,000 simulated matches (1,326 (λH,λA) combos × 10,000): perfectly balanced matches at 10th/90th percentile scoring → suspense [6.03, 6.89], surprise [1.17, 1.74].
- Trends via OLS of ln(suspense)/ln(surprise) on continuous season + top-team × season interactions, SEs clustered at home–away pair level.

## Data sources named
fbref.com (match events: goal/red-card timing); oddsportal.com (pre-match closing 1X2 + over/under 0.5–5.5 odds); TV-demand sample: 790 televised EPL matches (Sky/BT, 2013/14 2nd half–2018/19) merged with Buraimo et al. (2022) audience data. No code or data released.

## Findings (numbers and facts, not vibes)
- Classical outcome-uncertainty (abs diff of pre-match win probs) correlates only −0.39 with suspense and −0.18 with surprise; non-significant in the TV-demand regression.
- TV demand: ln(suspense) β=0.042 (p=0.015), ln(surprise) β=0.050 (p=0.004) on ln(audience); first PC of both (83% variance) also significant; suspense loses significance when surprise is included (small N=790).
- Top-5 average suspense 5.85 (SD 2.14) — below benchmark lower bound 6.03 (p<0.01) in every league; average surprise 1.41 (SD 0.80) — inside benchmark [1.17, 1.74]. EPL lowest suspense (5.74), Ligue 1 highest (5.99).
- Simulation: suspense peaks at λH=λA=0.5, zero at (0,0) despite perfect balance; surprise increases strictly with equal scoring rates (max at 5,5). Raising one team's rate moves suspense and surprise in opposite directions (λH 1→1.5 at λA=1: suspense ↓, surprise ↑).
- Trends: EPL suspense −0.6%/season, driven entirely by Man City matches (−3.9%/season suspense, −2.5%/season surprise); Bundesliga −0.7%/season suspense, −0.5%/season surprise (not top-team driven); La Liga +0.6%/season baseline (Real Madrid +4.5%, Barcelona +5.6% suspense); Ligue 1 PSG −3.1%/season suspense, −2.4%/season surprise.
- Women's 2023/24: suspense 4.93, surprise 1.24; Barcelona Liga F extreme: suspense 1.57, surprise 0.37 (won every match but one draw).
- Verdict in file: **ADAPT**; numeric gate: reproduce on EPL 2023/24 with mean suspense < 6.03 and mean surprise ∈ [1.17, 1.74].

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Content/slate-scheduling instrument — "match entertainment engine" (suspense/surprise rankings, chaos index for slate selection: high-surprise slates = more lineup differentiation value; INFERENCE: maps naturally onto GSE's DFS slate product).
- OTHER: Demand-modeling — in-play belief dynamics beat pre-match outcome uncertainty as a demand proxy; informs content-scheduling (which games get full production treatment).

## Engine-actionable? (yes/no + one-line what)
Yes — pre-match expected-suspense/surprise per fixture computable from GSE's own win-probability model as a chaos-index feature for DFS slate selection and watch-guide content prioritization.
