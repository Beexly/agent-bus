# docs/arxiv-program/research/2026-09-21/arxiv-deep/0672-estimating-an-nba-player-s.md
## What it is (1-2 sentences)
Deshpande & Jensen (2016) estimate each NBA player's effect on his team's win probability via shift-level Bayesian lasso regression, introducing leverage profiles and a Sharpe-like "Impact Score" (posterior mean / posterior SD) for uncertainty-aware player ranking. Ledger verdict: ADAPT — the win-probability-scale adjusted plus-minus machinery transfers to NFL player-unit valuation (WPA-based adjusted ratings per drive); adopt the methodology, not the NBA numbers.
## Key metrics/methods (formulas where given, else "not specified")
- y_i | P^i, T^i ~ N(μ + P^i'θ + T^i'τ, σ²); y_i = change in home-team WP during shift i; P^i signed player indicators, T^i signed team indicators
- Independent Laplace priors on θ, τ (Bayesian lasso) with Gamma(r,δ) hyper-prior on λ²; Park & Casella (2008) Gibbs sampler (monomvn R package)
- WP surface: binomial counts in [T−3,T+3]×[L−2,L+2] window with Beta prior contributing 350 pseudo-games; posterior mean p̂_{T,L} = (n+α)/(N+α+β)
- Impact Score = E[θ_j|data] / SD[θ_j|data] (Sharpe ratio analogue)
- Leverage profiles (shift-context summaries per player) with Mahalanobis-distance similarity; Impact Ranking by posterior frequency; five-man lineup effects via summed posterior samples
## Data sources named
ESPN play-by-play, 8,365 of 9,840 scheduled regular-season games (85%), NBA 2006–07 through 2013–14; n=35,799 shifts in 2013–14 analysis (29,453 unique ten-player combinations); 488 players, 30 teams.
## Findings (numbers and facts, not vibes)
- Top 2013–14 Impact Scores: Dirk Nowitzki 2.329, Patrick Patterson 1.939, Iman Shumpert 1.823, Chris Bosh 1.802, Manu Ginobili 1.779; LeBron James 1.324 (14th), Kevin Durant 1.410
- Impact Score correlation with RPM: 0.655; with PER: 0.226
- Year-to-year correlation 0.242 (significant vs 500,000-permutation null) vs PER's 0.75; multi-season correlation 0.45
- Rank credible intervals very wide: LeBron [3,317], Durant [2,300], Nowitzki [1,158] — posterior means alone cannot rank
- Garbage-time check: DeAndre Liggins PER 129.47 (84 seconds at 96.7% WP) → Impact Score ≈ 0
- Top lineup Curry–Thompson–Iguodala–Lee–Bogut Impact Score 2.98 (780.25 min)
- Residual-diagnostics appendix: log-odds/inverse-logit transforms and three heteroscedasticity re-weightings (y(4)–y(6)) all rejected vs the original Gaussian model
- Authors' explicit warning: estimates are retrospective/context-dependent, NOT latent talent, and "unsuitable for forecasting"
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: new method for the ratings/player-evaluation lane (regularised WP-added regression with uncertainty-aware ranking) — complements 0667 (blocker-rusher Bradley-Terry) at different granularity
- COACHING: lineup-vs-lineup posterior predictive matchup densities have game-planning content use; the retrospective-not-predictive warning is directly relevant to how GSE frames any similar metric
## Engine-actionable? (yes/no + one-line what)
Yes — NFL adaptation: treat drives as "shifts" (nflverse 2015–2025, y_i = drive WP change via nflfastR WP), regress onto positional-unit indicators (QB, OL unit, skill group, DL, LB, secondary per team) with Laplace/elastic-net priors; output unit-level Impact Scores, leverage profiles with Mahalanobis similarity, and matchup predictive densities. Acceptance gate: adopt as predictive rating only if year-to-year unit correlation ≥ 0.30 on 2018–2024 and 95% CIs exclude zero for ≥20% of starting units; otherwise descriptive only. (~1 week for drive-level prototype.)
