# docs/arxiv-program/research/2026-09-21/arxiv-deep/0935-behavioral-signals-player-modeling.md

## What it is (1-2 sentences)
ArXiv 2112.04379 (Dehpanah, Ghori, Gemmell, Mobasher, 2021): a study showing nine simple behavioral features (strategy, goals, expertise — not outcomes) predict battle-royale ranks better than Elo, Glicko, and TrueSkill, using a trivially simple single-feature sort predictor (Φ) on >75,000 PUBG solo matches.

## Key metrics/methods (formulas where given, else "not specified")
- Prediction function: Φ = arg sort_{i∈{1..n}}((F,p_i)|β) — sort players by one feature (descending; ascending for rank ratio), ties random; no learning at all. One-feature models only.
- Nine behavioral features: β1 games played (experience); β2 kill/death ratio (skill + aggression); β3 firing accuracy = Σkills/Σdamage; β4 survive ratio = Σtime_survived/#games; β5/β6 walking/riding ratio = Σdistance/#games; β7/β8 walking/riding velocity = Σdistance/Σtime_survived; β9 rank ratio = Σrank_percentile/#games.
- New-player defaults: 1500 (Elo/Glicko), 25 (TrueSkill), 100 (β9), 0 (other β).
- Compared vs Elo/Glicko/TrueSkill battle-royale extensions on three setups: all players, top-tier (500 highest win-rate, >10 games, evaluated on first 10 games), frequent (>100 games, evaluated on first 100 games). Metric: NDCG. Features computed from pre-match history only (chronological online prediction).

## Data sources named
- PUBG solo matches: >75,000 matches, 1,700,000 unique players, Kaggle (skihikingkevin/pubg-match-deaths), sorted by timestamp. No code stated. Direct sequel to paper 0934 (same authors; 0934 established NDCG as the metric).

## Findings (numbers and facts, not vibes)
- Table I, average %NDCG (Elo / Glicko / TrueSkill | Φ(β1)..Φ(β9)):
  - All Players: 56.8 / 56.2 / 57.4 | 54.1 / 60.1 / 56.1 / 59.7 / 58.6 / 58.5 / 55.9 / 56.8 / 61.3. Rank ratio β9 = 61.3 best overall; K/D (60.1), survive ratio (59.7), walking (58.6), riding (58.5) ratios all beat best system (TrueSkill 57.4).
  - Top-tier: 73.7 / 62.4 / 79.1 | 59.0 / 71.6 / 57.8 / 79.4 / 69.6 / 67.8 / 56.7 / 57.3 / 85.1. Rank ratio 85.1% best; survive ratio 79.4 edges TrueSkill's 79.1.
  - Frequent: 59.3 / 63.8 / 57.9 | 86.4 / 60.7 / 57.6 / 59.9 / 58.9 / 64.1 / 58.1 / 64.2 / 63.0. Games played β1 = 86.4% — highest of any model in any setup, beats best system (Glicko 63.8) by 22.6 points.
- Behavioral features develop along heterogeneous but consistent paths: top-tier players' K/D spans 0.3–2.0 after 10 games; most top-tier players below 30th-percentile rank ratio after game 2; frequent players hover ~50th percentile.
- Limitations: PUBG solo only (team dynamics excluded); single-feature models (weighted hybrid is stated future work, never tested here); ties broken randomly, unquantified noise; no significance tests; behavioral features are game-specific — only the framework (effort/strategy/expertise aspects) transfers.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Sort-on-one-feature (Φ) as a naive weekly power-ranking baseline every ranking model must beat — e.g., rank all 32 teams by trailing-8-week EPA/play percentile (OTHER)
- Effort/sample-size-aware features: log(snaps observed) / games-played as explicit model features so the model learns that entities with more observations are more predictable (the games-played β1 result) (QB-BEHAVIOR)
- Historical percentile (β9 analog: league EPA/DVOA percentile) as a field-size-normalized baseline feature — the single strongest signal on full populations (QB-BEHAVIOR)
- "Survival" analog for QBs: negative-play avoidance rate (sack+turnover avoidance) as an expertise/strategy signal (QB-BEHAVIOR)
- Behavioral mismatch modeling: teammates with different behaviors outperform same-behavior groups — test QB-receiver style complementarity (aggressive QB + possession receivers) against offensive EPA residuals (INFERENCE: authors' intro hypothesis; deferred as their future work, not tested in this paper) (QB-BEHAVIOR, SCHEME)
- The transferable lesson: input-side engineering (what you feed the model) matters more than the rating algorithm — complements rating-system work (OTHER)

## Engine-actionable? (yes/no + one-line what)
Yes — build NFL behavioral analogs (snaps observed, EPA/play, negative-play avoidance, league EPA percentile), sort-baseline weekly power rankings on single features, and gate adaptation on beating GSE Elo on 2022–2025 walk-forward log-loss by ≥0.005.
