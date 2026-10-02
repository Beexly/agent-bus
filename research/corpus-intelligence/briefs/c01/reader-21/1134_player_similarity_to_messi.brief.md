# arxiv-program/research/2026-09-21/arxiv-deep/1134-player-similarity-to-messi.md
## What it is (1-2 sentences)
Full-ledger read of arXiv:1802.00967 (2018): ranks 28 hand-picked European soccer players by Manhattan (L1) distance from Messi's vector across 17 WhoScored 2017–18 season aggregate features. Verdict in the file: ADAPT — an interpretable normalized-distance player-retrieval template for GSE "players like X" tooling, after replacing min-max with robust scaling and adding position/role controls.

## Key metrics/methods (formulas where given, else "not specified")
- Min-max normalization of all 17 features (four criteria treated as minimization/cost-type).
- Manhattan (L1) distance across 17 normalized dimensions from Messi's reference vector; rank ascending.
- Pearson correlations among features (all p=0.01): passes–key passes 0.80; dispossessions–dribbles 0.78; dribbles–fouled 0.77; through balls–key passes 0.73.
- Closest-to-Messi distances: Coutinho 3.769, Hazard 4.069, Thauvin 4.140, Dybala 4.254.
- Improvement proposals in the file: robust scaling (median/IQR), Mahalanobis or correlation-aware weighted-L1, supervised feature weights learned by optimizing comp-based forecast accuracy; reproducible test gate = distance-weighted mean of 5 nearest historical comps must beat trailing-4-week average on next-4-week PPR/game MAE by ≥5% on 2025 holdout.

## Data sources named
- WhoScored 2017–18 season data through Jan 31 (scraped; ~20–24 matches/player); appendix tables in the paper.
- Proposed GSE features: nflverse + FTN charting (target share, aDOT, YPRR, YAC, contested-catch rate, alignment splits); per-route/per-snap normalization.

## Findings (numbers and facts, not vibes)
- 29 players (Messi + 28), 17 features; ranking conditional on author's shortlist.
- Redundant-feature double-counting: passes and key passes correlated 0.80 — counted nearly twice under equal weighting.
- No per-90 normalization — playing-time differences contaminate comparisons.
- No train/test split, no predictive validation, no baseline; descriptive ranking only.
- Effort estimate in file: 3–4 days for NFL feature pipeline + retrieval API.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: methodological — formalized player-similarity retrieval (comps) for DFS matchup research and "players like X" content.
- QB-BEHAVIOR (indirect): same retrieval machinery could comp QBs by behavioral signature (target concentration/HHI, aDOT, scramble rate) — the file proposes WR/RB retrieval; QB extension is INFERENCE.

## Engine-actionable? (yes/no + one-line what)
Yes — port the "players-like-X" comp engine to NFL with robust scaling, correlation-aware weighting, and position/role controls, gated on comp forecasts beating trailing averages by ≥5% MAE.
