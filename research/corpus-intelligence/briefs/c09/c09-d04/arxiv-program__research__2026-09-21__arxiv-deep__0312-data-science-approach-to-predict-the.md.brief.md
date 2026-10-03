# arxiv-program/research/2026-09-21/arxiv-deep/0312-data-science-approach-to-predict-the.md
## What it is (1-2 sentences)
Kumar et al. (2022, arXiv:2209.06999v1): ML pipeline predicting player-level Dream11 fantasy-cricket scores (Extra Trees Regressor selected from 22 PyCaret regressors) plus knapsack/greedy team selection under the 100-credit salary cap. Verdict in-file is REJECT — headline R² ≈ 0.99 rests on target-derived features (severe leakage), sampling descriptions are internally contradictory, and there is no contest backtest, ownership model, or payout analysis.

## Key metrics/methods (formulas where given, else "not specified")
Not specified (no equations in the paper; optimizer described qualitatively). Method: Cricsheet YAML → YorkPy → batsman/bowler feature tables → PyCaret comparison of 22 regressors → Extra Trees Regressor → greedy + knapsack optimization maximizing predicted points under 100-credit cap and max-7-players-per-team constraint. Metric: R² only.

## Data sources named
Cricsheet ball-by-ball data (3,100 matches: 1,529 ODI, 756 IPL, 815 T20; time range not precisely stated); YorkPy package; PyCaret (v1.0.0 per references).

## Findings (numbers and facts, not vibes)
- Claimed Extra Trees R² = 0.99 for batsman Dream11-score prediction, 0.97 for bowler, on 100% of dataset at 7:3 train-test split (in-file interpretation: R² ≈ 0.99 on a sports prediction task is a leakage signature, not a modeling achievement).
- Internally contradictory sampling: 0.07% build / 0.93% test in one section; 10% in another; 50/50 train/test in a third — the evaluation actually run is unverifiable.
- No temporal ordering, no walk-forward, no out-of-season backtest; no real contest backtest, no ownership or lineup-duplication analysis, no payout/ROI measurement.
- Features include aggregates computed over windows containing the target match (target leakage); aggregation windows undisclosed, so leakage cannot be bounded.
- Batsman features: runs, balls, 4s, 6s, 50s, 100s, ducks, strike rate, rival, venue. Bowler features: overs, runs conceded, maidens, wickets, economy, rival, venue.
- No code repository stated; not reproducible as a pipeline despite public data.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: negative evidence — GSE's existing NFL DFS work (stacks, ownership, winning-lineup construction, payout-aware optimization) already exceeds this paper's additive points-maximization framing; the budgeted-selection problem is a duplicate of already-better-covered practice.
- OTHER: methodological caution — leakage-free feature discipline (features strictly from matches before the target match) and temporal walk-forward validation are mandatory for any GSE player-projection work.
- OTHER: objective-function lesson — real DFS profit comes from ownership-aware portfolio optimization and correlation (stacking), not mean projected points; this paper optimizes the wrong objective.

## Engine-actionable? (yes/no + one-line what)
No — REJECT as evidence; nothing transfers to NFL DFS beyond a cautionary leakage example, and its team-construction framing is already superseded by GSE's ownership-aware DFS optimizer work.
