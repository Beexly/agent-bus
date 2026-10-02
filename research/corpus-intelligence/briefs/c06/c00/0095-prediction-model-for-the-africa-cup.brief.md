# arxiv-program/research/2026-09-21/arxiv-deep/0095-prediction-model-for-the-africa-cup.md
## What it is (1-2 sentences)
Deep read of Gilch (2019, arXiv:1905.03628): AFCON 2019 win probabilities via nested Poisson regression, where the weaker team's goal rate depends on the stronger team's realized goals, with 100,000-tournament Monte Carlo simulation. Verdict in file: ADAPT — the nested conditional-dependence structure is portable to correlated in-play scoring models; the AFCON fit itself is not an engine candidate.
## Key metrics/methods (formulas where given, else "not specified")
- (2.1) log μ_A(Elo_O) = α_0 + α_1·Elo_O; (2.2) log ν_B(Elo_O) = β_0 + β_1·Elo_O; combined λ_{A|B} = (μ_A(Elo_B) + ν_B(Elo_A))/2; (2.3) log λ_B(E_A, G_A) = γ_0 + γ_1·E_A + γ_2·G_A — simulation realizes G_A first, then G_B conditional.
- Worked example Senegal (1764) vs Ivory Coast (1612): λ_Senegal|IvoryCoast = 1.395; λ_IvoryCoast|Senegal = exp(1.431 − 0.000728·1764 + 0.137·G_A).
- GoF χ_T = Σ (x_i − μ̂_i)²/μ̂_i; generalized Poisson (φ ≈ 1) and negative binomial checked and discarded.
## Data sources named
World Football Elo (eloratings.net); neutral-ground matches of 24 AFCON participants, Jan 2010–Apr 2019 (avg ~29 matches/team). No code/data links.
## Findings (numbers and facts, not vibes)
- GoF p-values: (2.1) avg 0.476 (Namibia 0.048 — only poor fit); (2.2) avg 0.67; (2.3) avg 0.33; Nigeria (2.1) deviance null 71.36 vs residual 66.39, p=0.03 — significant lack of fit.
- Champion probabilities (100K sims): Senegal 15.40, Nigeria 12.10, Ivory Coast 10.20, Egypt 10.10, Ghana 8.60 (Senegal: final 25.20, semifinal 41.20, quarterfinal 67.70, last-16 92.90); third-place-qualifier rule differences "rather marginal."
- No out-of-sample validation in this paper; the "beats bivariate Poisson" claim is delegated to an external technical report.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: the nested structure (underdog's scoring rate conditional on favorite's realized score — a directed dependence distinct from Dixon-Coles' symmetric correction) ports to in-play NFL 2H totals: log λ_underdog2H = γ_0 + γ_1·(favorite strength) + γ_2·(favorite 1H points), capturing garbage-time/protect-the-lead effects.
## Engine-actionable? (yes/no + one-line what)
yes — fit the nested model on nflverse half-level data and adopt for the live-totals lane only if γ_2 is significant (p < 0.05) and holdout log-loss improves ≥0.005 over independent-Poisson.
