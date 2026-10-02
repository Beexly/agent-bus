# arxiv-program/research/2026-09-21/arxiv-deep/0094-football-is-becoming-more-predictable-network.md
## What it is (1-2 sentences)
Soccer predictability study (Maimone & Yasseri, arXiv:1908.08991, published Royal Society Open Science) using a minimalist rolling-window logistic model on 87,816 matches across 11 European leagues (1993/94–2018/19) to test whether football became more predictable over 26 years — it did, tracking rising inequality (Gini) and declining home-field advantage. The reader's verdict was ADAPT — adopt eigenvector-centrality strength ratings as an NFL benchmark feature plus the predictability/Gini monitoring frame; reject the bare-bones logistic model as an engine candidate.
## Key metrics/methods (formulas where given, else "not specified")
- Training window: past N matches normalized by season length T: n = N/T (headline n = 0.5).
- Network model: directed graph loser→winner weighted by points; strength = eigenvector centrality; x = home centrality − away centrality.
- Probability map (Eq. 4.1): y = 1/(1 + exp(−(x−μ)/s)); μ fitted by OLS, y=1 home win, y=0 away win; μ quantifies home-field advantage. Ties excluded.
- Market benchmark (Eq. 4.2): Prob(HomeWin) = (1/h)/(1/h + 1/a); Prob(AwayWin) = (1/a)/(1/h + 1/a).
- Elo comparison: E_i = 1/(1 + 10^((R_j−R_i)/400)); R'_i = R_i + K(S_i − E_i), K=32, start 1500.
- Brier (Eq. 4.6): P = 1/((1−n)T)·Σ_jΣ_i (f_ij − E_ij)². AUC with π swept.
## Data sources named
football-data.co.uk; Bet365 payoffs (home/draw/away). Public: Dryad https://doi.org/10.5061/dryad.8931zcrrs + Supplementary dataset.zip.
## Findings (numbers and facts, not vibes)
- Positive AUC trend in England, France, Germany, Netherlands, Portugal, Scotland, Spain; first-10-vs-last-10 t-test significant for England (AUC p=0.0330), Germany (0.0326), Portugal (0.0044), Spain (0.0097); Gini t-test significant for England (0.0009), Germany (0.0367), Portugal (0.0000), Spain (0.0001). All leagues "tend to converge towards 0.75 AUC."
- Gini–AUC correlation: Spain 0.874, England 0.823, Germany 0.805, Scotland 0.723, Portugal 0.694, Turkey 0.686, Netherlands 0.676, Italy 0.622, France 0.563, Greece 0.561, Belgium 0.413.
- Home advantage declining in all leagues (μ over time, Fig. 2).
- Network model beats Elo AUC in ~61% of cases (170 of 280 league-seasons); trends hold under Elo too.
- Network model "underperforms the market on average," but Brier/AUC differences "statistically indistinguishable at the 2% significance level for the majority of year-leagues."
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Eigenvector-centrality team-strength rating — new to GSE's rating inventory (Elo, Massey, Colley, Glicko, Bradley-Terry covered; PageRank-style centrality not implemented) — OTHER.
- NFL predictability-trend monitor (points-Gini vs engine AUC, 2002–2025): tests whether the salary-capped NFL gentrified or stayed parity-locked — TRUST-SIGNAL.
- Rolling home-advantage μ trend: extends the repo's "rest/bye edge vanished post-2011" lane — COACHING (also OTHER).
## Engine-actionable? (yes/no + one-line what)
Yes — build time-decayed eigenvector-centrality ratings on nflverse 2002–2025 and adopt as a permanent benchmark feature iff it beats the repo's Elo baseline on AUC in ≥55% of seasons with ≤ equal log-loss; separately run the NFL Gini-vs-AUC and home-advantage trend analyses.
