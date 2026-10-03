# docs/arxiv-program/research/2026-09-21/arxiv-deep/0887-final-market-prices-information-aggregation.md
## What it is (1-2 sentences)
Full-text read of arXiv:2509.14645v3 (Hanyu et al., 2026), an empirical market-microstructure paper on Japan Racing Association parimutuel betting that tests whether final prices fully aggregate information, finding that late odds-movement paths predict returns well beyond what final odds imply. Verdict: ADAPT — the late-odds-movement finding is the most directly market-actionable in its wave; the adaptation is a steam-detection feature, not a blind follow-the-move system.

## Key metrics/methods (formulas where given, else "not specified")
- Return regression: return_i = β_0 + β_1·final_implied_prob_i + β_2·late_move_i + race FE + ε_i, SEs clustered.
- Headline estimate: β_2 = −0.3386 (SE 0.0392), ≈ 8.6σ significant; n = 894,127.
- Economic translation: a 10% late move implies ~14× the return association of an equivalent cross-sectional final-odds difference (at median odds 25.5).
- Descriptive: nearly half (~50%) of all JRA wagering volume arrives during the final five minutes before post time.

## Data sources named
JRA-VAN data (commercial Japanese racing data product): 63,372 races, ~895,090 horse-race observations, 2004–2023; main regression sample 894,127 observations. Schema: per horse per race — timestamped odds snapshots, final odds, finish position, win/place payoffs. Not directly replicable by GSE.

## Findings (numbers and facts, not vibes)
- Late-movement coefficient −0.3386 (SE 0.0392) — final-odds-only "sufficiency" null is rejected; the path adds information.
- ~50% of wagering in the final five minutes (extremely back-loaded market).
- 10% late move ≈ 14× return association of an equivalent final-odds cross-sectional difference at median odds 25.5.
- Robustness across subperiods (stated). Ex-post association, not a proven tradable edge — execution at pre-move price is unavailable to a follower; parimutuel late money moves the price against itself.
- No decomposition of whose money moves late (informed syndicates vs public steam); JRA-only.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — steam-detection feature family: ingest timestamped odds from Pinnacle/sharp books; compute late-window move features (final-30-min implied-probability velocity, acceleration, volume proxy via move size) as pick-model features, NOT a standalone signal. Paper's key lesson: the move's *path* matters beyond the final price — engineer path features (velocity, convexity), not just start-vs-end deltas.
- TRUST-SIGNAL — ex-post regression ≠ tradable strategy; backtest any follow-steam rule with realistic execution (post-move price + slippage). Boundary to test first: parimutuel-vs-fixed-odds mechanics.
- OTHER — steam-vs-noise decomposition improvement: separate "informed" (persistent moves consistent with syndicate action) vs "public steam" (correlated with media/betting splits); fade public, follow informed; success = positive mean CLV where naive follow-steam is flat.

## Engine-actionable? (yes/no + one-line what)
Yes — build late-odds-path steam features (velocity/convexity) on GSE's Pinnacle odds archive and gate: late-move features must add significant CLV explanatory power beyond final odds (p < 0.01 on the move coefficient in at least one league), else the finding is parimutuel-specific.
