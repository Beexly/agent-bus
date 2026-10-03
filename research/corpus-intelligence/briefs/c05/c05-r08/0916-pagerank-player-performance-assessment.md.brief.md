# arxiv-program/research/2026-09-21/arxiv-deep/0916-pagerank-player-performance-assessment.md

## What it is (1-2 sentences)
Paper ledger for arXiv:1704.00583v1 (Brown 2017) building a PageRank model on per-game event graphs (reversed pass arcs, goal-node scoring arcs, turnover arcs) to quantify playmaking that box scores miss, via an Integrated Playmaking Metric (IPM). Verdict: ADAPT — ports to NFL target networks for WR/TE involvement metrics (props) and team-aggregated flow differentials (team strength).

## Key metrics/methods (formulas where given, else "not specified")
- Directed graph: n player nodes + 1 goal node; pass i→j drawn as arc j→i (rank flows to playmaker); score = n arcs goal→scorer; dispossession = arc victim→dispossessor; contested miss = arc shooter→defender; initialization arcs (player↔goal + goal self-loop) guarantee primitivity
- Markov chain stationary vector Tᵀv = v; IPM_i = 50n·r_i/(1−r_g) (goal-node rank factored out; mean 50, scale 0–1000, cross-game comparable)
- Propositions 2.1–2.2: spacing guarantees (some bench player always non-negligible; some pair always close)
- Validation: qualitative — IPM ordering vs P/A/R/S/FG% stat lines across 9 games; no predictive target

## Data sources named
- Nine NBA games (2014–2016), manually transcribed play-by-play (passes, dispossessions, scores, misses, fouls, turnovers, stoppages)

## Findings (numbers and facts, not vibes)
- Klay Thompson 41 pts → IPM 50.27 (average); game-toppers: Curry 122.91–132.74, Westbrook 125.96, Lowry 123.55
- 93% of players with ≥5 assists had IPM ≥ 50; 40% of top-10 IPMs had ≤20 P+A+R+S — surfaces "invisible" contributors (Dellavedova, Ronnie Price)
- Aggregate: 87% of IPM<30 players had P+A+R+S ≤ 10; 64% of IPM>70 had P+A+R+S ≥ 25
- Team signal: winning team's starters had higher average IPM in 8/9 games (full-team average only 6/9); top-ranked player was on the losing team 4/9
- Limitations: 9 games only, manual transcription, no prediction experiment, equal arc weights, scaffolding arcs arbitrary

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- NFL target network per game: nodes QB + skill players; arc target→QB on every target (trust/involvement credit even on incompletions) — QB-BEHAVIOR
- Props edge: high-centrality, low recent-yards players (centrality residual vs box-score-implied) as buy candidates on receptions/yards props — OTHER
- Team-aggregated starter/top-11 offensive centrality differential as a team-strength rating feature (8/9 starter signal) — OTHER
- Leverage-weighted arcs: multiplicity = 1 + log(1+air yards) + |WPA| as improvement experiment — OTHER

## Engine-actionable? (yes/no + one-line what)
yes — compute weekly target-network PageRank centrality for WR/TE from nflverse; gate: centrality residual predicts next-week receiving yards beyond targets+air-yards baseline (p<0.05), OR team centrality differential improves week-ahead offensive EPA MAE by ≥3%.
