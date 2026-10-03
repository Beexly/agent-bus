# docs/arxiv-program/research/2026-09-21/arxiv-deep/0492-analysing-skill-predominance-in-generalized-fantasy.md

## What it is (1-2 sentences)
Das, Sarkar, Maitra & Mukherjee (2026, arXiv:2512.18467): analyzes whether measurable skill emerges in a limited-selection fantasy cricket contest ("Expert of Experts" — users pick among 2–4 expert-designed teams under a shared prize pool), via simulation and bot-vs-bot IPL 2024 data. File verdict: **REJECT** — cricket fantasy contest-design paper with no transfer path to NFL win/spread/total modeling.

## Key metrics/methods (formulas where given, else "not specified")
- Expert-team scores: (P_1,…,P_n) ∼ LogNormal(μ,Σ), equicorrelated log-scores ρ=0.4; win probabilities π_i = P(P_i ≥ P_j ∀j≠i) via Monte Carlo.
- Analytical players: beliefs p ∼ Dirichlet(απ), calibration α ≥ n/(4δβ²)−1 (Chebyshev + union bound, P(|p_i−π_i|≥β) ≤ 1/(4(α+1)β²) ≤ δ/n); team choice ∼ Multinomial(1,p). Random players ∼ Multinomial(1,1_n/n).
- Payoff: shared prize pool (Rs. 25 × 1000 × 80% = Rs. 20,000); winners' selectors split the pool (20,000/N_i).
- Metrics: Selection Ratio = analytical share / random share on team i; Mean Winnings including zeros; Average Gain over Random (matchwise and tournament).
- Extensions: experts ∈ {2,3,4}; correlation ρ ∈ {0.1,…,0.9}; Impact Player with boosted score B_ij = P_i(1−S_i) + max(S_i·P_i, I_j), S = lowest-contributor Dirichlet-minimum share.
- Regressions: G_i = β0 + β1E + β2C + β3V_μ + β4Σ̄² + ε_i (E=#experts, C=common players, V_μ=between-team variance, Σ̄²=within-team variance), OLS, plus quadratic extension with C².

## Data sources named
- Simulated: n=4 teams, N=1000 players, τ=0.2 analytical fraction, β=0.04 at 95% confidence; π_i estimated from 100,000 draws; 10,000 match iterations per configuration.
- Real: IPL 2024 — 71 completed matches (scorecards via Cricbuzz Rapid API), 263 registered players with career stats (ESPN Cricinfo); analysis on the final 10 completed matches, 10,000 runs per configuration, 1,000 skill users per strategy vs 16,000 random users, perturbation p=0.05.
- Code: https://github.com/Supratim2004/Expert-of-Experts (stated, not verified).

## Findings (numbers and facts, not vibes)
- Simulation: picking the best team yields LOWER mean winnings — crowding dilutes the prize (more selectors split the pool). Fewer analytical players (τ=0.1) → strongest skill advantage; smaller β (better estimates) → higher mean winnings, though the β effect is mild.
- Experts/correlation: 4 experts → higher mean winnings than 2–3; skill advantage generally falls as ρ rises, except in unequal-mean cases where very high correlation makes teams clearly differentiable.
- Impact player: F-statistic (total variance vs IID) = 28.18735 (Different_mean) and 22.63239 (Different_mean_and_std) — both ≫ 1, i.e., skill-asymmetric impact players greatly increase outcome dispersion.
- Real IPL 2024: skill presence "limited" — many configurations show NEGATIVE average gain over random for skill strategies; gain increases with experts, inverted-U in common players (rises then falls); with impact player, gains shift positive.
- Regressions: #experts coefficient +17 to +22, p<0.001 in every spec (StrictOnForm: 20.737; IP StrictOnForm: 21.727/19.109; OneThirdForm: 17.839/15.558; IP OneThirdForm: 17.056/19.001). Between-team variance V_μ positive when significant (0.030/0.028, p=0.000; 0.038, p=0.000 for IP). Quadratic (IP OneThirdForm): Common Players 12.375 (p=0.075), C² −0.448 (p=0.053) — inverted-U confirmed. R² ≈ 0.15–0.355.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: the one transferable mechanism — shared-prize-pool crowding making best-team selection less profitable — is a DFS-contest observation (corpus gap #10 notes academic contest-theory/ownership-equilibrium papers are absent), but this paper models no ownership equilibrium and no NFL DFS; it is a qualitative design note at most, already standard contrarian-ownership practice in GSE's DFS work.

## Engine-actionable? (yes/no + one-line what)
No — cricket contest design with simulation-artifact results; no model, feature, or target applicable to NFL win/spread/total (the chalk-dilution curve on real DK GPP structures would be a new project, not an implementation of this paper).
