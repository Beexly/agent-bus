# docs/arxiv-program/research/2026-09-21/arxiv-deep/0599-estimation-of-skill-distributions.md
## What it is (1-2 sentences)
Deep read of Jadbabaie, Makur & Shah (2020), arXiv:2006.08189v1: a two-stage estimator (rank centrality → Parzen-Rosenblatt kernel density) that learns the *distribution* of skill across a population of agents from noisy win/loss observations, with near-minimax-optimal rates, used to derive a negative-entropy "skill score" quantifying league competitiveness. Verdict ADAPT — port the negative-entropy skill score as a league/season competitiveness content metric; the density-estimation machinery itself is overkill for the engine.
## Key metrics/methods (formulas where given, else "not specified")
- Stage 1 — rank centrality: empirical stochastic matrix S(i,j) = (1/(2np))Z(i,j) (i≠j); leading left eigenvector π̂* (eq. 5); α̂_i = π̂*(i)/‖π̂*‖∞ (eq. 6).
- Stage 2 — KDE (eq. 7): P̂*(x) = (1/nh)Σ_i K((α̂_i−x)/h); Epanechnikov K_E(x)=¾(1−x²)𝟙{|x|≤1}; bandwidth h = 0.3·n^{−1/4} (ad hoc); theoretical bandwidth eq. 8.
- Skill score (eq. 12): negative differential entropy −h(P_α) = ∫P_α(t)log(P_α(t))dt = D(P_α‖unif([0,1])). Delta-like concentrated PDF = balanced/unpredictable; near-uniform = skill-dominated spread.
- Theorems: BTL skill-parameter estimation minimax lower bounds Ω̃(n^{−1/2}) for relative ℓ∞ (Thm 1) and ℓ₁ (Thm 2); skill-PDF MSE upper bound Õ(n^{−η/(η+1)}) for η-Hölder, Õ(n^{−1+ε}) for smooth densities (Thm 3) — near-minimax-optimal.
- Laplace smoothing: each observed game counted as 20 games + 1 added win per player (strong prior shrinking α̂ toward equality).
## Data sources named
Wikipedia (ICC Cricket World Cups 2003–2019, FIFA Soccer World Cups 2002–2018, 2018–19 European leagues EPL/La Liga/Bundesliga/Ligue 1/Serie A); CRSP US Survivor-Bias-Free Mutual Funds Database (n=3260 funds, Jan 2005–Dec 2018).
## Findings (numbers and facts, not vibes)
- Cricket World Cups: negative entropy decreases 2003→2019, reaching near 0 in 2019 — 2019 the most unpredictable/exciting; in 2003 Australia and India dominated.
- Soccer World Cups 2002–2018: negative entropies roughly constant and away from 0 — outcomes stayed unpredictable.
- European soccer 2018–19: EPL has the highest negative entropy (tallest, narrowest skill-PDF peak) — ranked most competitive of the five leagues.
- Mutual funds: negative entropy maximized in 2017, minimized in 2008 (Great Recession); 2008 skill PDF much more spread out; flatter post-2008 distributions indicating industry dominated by more skilled funds after the crisis.
- Theory (Table 1): relative ℓ∞ loss upper Õ(n^{−1/2}) [10], lower Ω̃(n^{−1/2}) (Thm 1); relative ℓ₁ upper O(n^{−1/2}), lower Ω̃(n^{−1/2}) (Thm 2).
- Draws ignored entirely; no numeric entropy tables, no CIs, no numeric predictive baselines — evidence is visual (Figure 1 plots).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: negative-entropy "skill score" / competitiveness metric — content/stat product (league competitiveness ranking by season), and the rank-centrality + KDE pipeline for estimating cross-sectional NFL team-strength distributions.
- TRUST-SIGNAL: INFERENCE — a competitiveness score that correlates with upset rate could serve as a public-facing calibration-adjacent trust signal ("most wide-open NFL season since…"), though the file itself frames it as descriptive, not predictive.
## Engine-actionable? (yes/no + one-line what)
Yes (content lane, not prediction engine) — build weekly/seasonal NFL "Competitiveness Index" from rank centrality + KDE on nflverse results (0–100 normalized, 1999→2026 trend), ADOPT for content if |Spearman(score, upset rate)| ≥ 0.5 on 2015–2025 and beats Elo-stdev baseline by ≥0.15; do not wire into predictions.
