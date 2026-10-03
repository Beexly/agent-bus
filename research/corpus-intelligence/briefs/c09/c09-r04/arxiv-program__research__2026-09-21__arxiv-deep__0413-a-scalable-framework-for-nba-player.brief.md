# arxiv-program/research/2026-09-21/arxiv-deep/0413-a-scalable-framework-for-nba-player.md
## What it is (1-2 sentences)
A PCA-based player-similarity framework for the NBA (arXiv:1511.04351v2, Bruce 2015): 66 tracking stats reduced to 4 principal components, with a Statistical Diversity Index (SDI) distance metric for finding similar players and team-style aggregation; Motif verdict ADAPT as a role-embedding/replacement-comp system for NFL players from NGS aggregates.
## Key metrics/methods (formulas where given, else "not specified")
- SDI_{ij} = Σ_{k=1}^{4} (t_{k(i)} − t_{k(j)})² — squared Euclidean distance in 4-PC space; lower = more similar
- Team component: t_{k(team)} = (Σ_i m_i t_{k(i)}) / (Σ_i m_i) (minutes-weighted)
- PCA on 66 standardized tracking stats, retain 4 PCs (68% variance); OLS of team win% on 4 team PC scores
- Features: per-48-min, per-touch, per-shot stats only (season totals/per-game deliberately dropped to avoid games/minutes confounding)
## Data sources named
NBA player-tracking aggregates, 2013–2014 regular season (stats.nba.com SportVu era); 482 players available, 360 retained (≥41 games), 66 tracking statistics
## Findings (numbers and facts, not vibes)
- Variance: PC1 42%, PC2 12%, PC3 9%, PC4 4% — first four total 68%
- Win% regression R² = 0.59 (in-sample OLS, 30 teams, no holdout); coefficients: PC2 0.17 (p=0.005), PC3 −0.20 (p<0.001), PC4 0.09 (p=0.013); PC1 (raw usage) not significant — paper's interpretation: ball movement, rebounding, rim protection associate with winning, not raw usage
- Tony Parker comp example: tracking-data most similar = J.J. Barea (SDI 0.7; salaries $12.5M vs $4,687,000 — paper's value-play example); traditional-stats-only most similar = DeMar DeRozan, whose tracking SDI to Parker is 75 with 89 players closer
- Knicks: extremely negative team PC2 from catch-and-shoot offense + poor ball movement (8 of 12 players below the 58 passes/48-min average)
- Reader's limitations: purely descriptive/in-sample, no out-of-sample validation; 32% variance discarded; season aggregates hide role changes/injuries; no temporal-stability test of comps; NFL positions more role-fragmented — position-specific embeddings preferred over one PCA
- GSE overlap: extension — GSE has the NGS metric inventory but no player-embedding or comp-finding system
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Player role embeddings and replacement-comps (WR/RB/TE comps, "cheaper replacement" free-agency queries)
- COACHING: Team-style aggregation via snap-weighted player embeddings as matchup features
- SCHEME: Role classification — stylistic clusters from tracking data beyond positional labels
## Engine-actionable? (yes/no + one-line what)
Yes — build position-specific PCA/SDI nearest-neighbor comp systems on NGS season aggregates (WR/RB/TE separately), with historical-window fitting and the acceptance gate of beating positional-average EPA/target forecasts by ≥0.03 R² on a 2024 holdout
