# docs/arxiv-program/research/2026-09-21/arxiv-deep/0506-smart-sports-predictions-via-hybrid-simulation.md

## What it is (1-2 sentences)
A hybrid NBA season-simulation paper (Erazo 2023, arXiv:2304.09918v2) combining discrete-event Monte Carlo game prediction with agent-based rational incentives (teams rest starters or tank for draft position late in the season). Verdict in file: ADOPT for GSE — two portable findings: per-method optimal historical lookback windows, and rule-based rest/tank incentive adjustments that improve late-season accuracy.

## Key metrics/methods (formulas where given, else "not specified")
- Win percentage with prior: p̂_1^i = (π + Σ_{k=1}^{i} x_1^k) / (1 + i), x_1^k ∈ {0,1} win indicator, π ∈ (0,1) prior (0.5 or preseason betting odds).
- Net rating: (points scored − points conceded over games 1..i) / (total possessions); initialized at 0.
- Bernoulli Race: P(team 1 wins) = p_1(1−p_2) / [p_1(1−p_2) + (1−p_1)p_2]; vs average team (p_2=0.5), win prob = p_1 exactly.
- Six methods: (i) Bernoulli Race on win pct; (ii) home-adjusted Bernoulli Race on win pct; (iii) largest value on win pct; (iv) home-adjusted largest value on win pct; (v) largest value on net rating; (vi) home-adjusted largest value on net rating.
- Incentive rules (author-admitted arbitrary, untuned): eliminated teams owning their first-round pick → win pct halved or net rating −5; playoff-classified teams with ≤3 games remaining → same reductions. Play-in accounting: 2012–2019 classified = cannot finish below 8th, eliminated = cannot finish above 9th; 2020–21/2021–22 classified = cannot finish below 6th, eliminated = cannot finish above 11th.
- Lookback sweep: recompute statistics using last N games only; 1,000 runs/season, 95% CI bands.

## Data sources named
- Ten NBA regular seasons 2011–2012 through 2021–2022 via the Python module `nba_api` (box scores, both teams).
- Draft-pick ownership from Pro Sports Transactions.
- Season 2019–2020 excluded (COVID bubble).

## Findings (numbers and facts, not vibes)
- Basic model average accuracy (complete season / 2nd half): (i) 56.9%/57.3%; (ii) 57.9%/58.6%; (iii) 64.1%/66.0%; (iv) 64.3%/66.0%; (v) 63.8%/66.7%; (vi) 63.7%/66.5%. [SCHEME, OTHER]
- Extended (incentive) model (complete / 2nd half): (i) 57.3%/58.0%; (ii) 58.2%/59.2%; (iii) 64.1%/66.2%; (iv) 64.5%/66.4%; (v) 64.0%/67.1%; (vi) 64.0%/67.0% — every method improves under the extended model, gains concentrated in the second half. [COACHING, SCHEME, OTHER]
- Seasons won outright (of 9; complete / 2nd half): (i) 0/0, (ii) 9/9, (iii) 3/4, (iv) 6/5, (v) 6/6, (vi) 3/3 (extended: (v) 5/5, (vi) 4/4). [OTHER]
- Lookback window: accuracy rises, plateaus, then slowly declines as more games are kept. Method (ii) peaks at last 8–15 games; method (vi) peaks at 18–25 games. Same pattern across methods and basic model. [SCHEME, OTHER]
- Home adjustment helps Bernoulli Race (+1pp: (i)→(ii)) but is neutral for largest-value methods (<0.2pp). [OTHER]
- Largest-value methods are strongly biased: systematically over-credit good teams' win totals; Bernoulli Race gives more balanced simulated standings at lower accuracy. [TRUST-SIGNAL, OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- More data is NOT always better: per-predictor optimal lookback windows (8–15 games for win-pct-based, 18–25 for net-rating-based methods) — directly contradicts one-size-fits-all trailing windows. (SCHEME, OTHER)
- Rest/tank incentives are quantifiable accuracy gains: rule-based discounts for eliminated pick-owning teams and locked-seed teams resting starters improved every method, concentrated in the second half. Maps to NFL weeks 16–18 meaningless-game adjustments. (COACHING, SCHEME, OTHER)
- Calibration-vs-accuracy tradeoff: largest-value methods inflate raw accuracy while producing miscalibrated season standings — a trust warning for any engine that reports accuracy without calibration. (TRUST-SIGNAL, OTHER)

## Engine-actionable? (yes/no + one-line what)
yes — Sweep per-predictor trailing-window N on nflverse (acceptance gate ≥0.003 pooled log-loss gain); add tunable rest/tank strength discounts for NFL weeks 16–18 "locked/eliminated" games in the season simulator.
