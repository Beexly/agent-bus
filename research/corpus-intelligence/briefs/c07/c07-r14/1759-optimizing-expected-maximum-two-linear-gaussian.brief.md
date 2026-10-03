# arxiv-program/research/2026-09-21/arxiv-deep/1759-optimizing-expected-maximum-two-linear-gaussian.md
## What it is (1-2 sentences)
A ledger on Bergman et al. (arXiv:2112.07002v2): jointly optimizing TWO correlated DFS lineups to maximize the expected value of the BETTER of the two (E[max(X₁,X₂)]) via a closed-form Gaussian objective solved exactly with a cutting-plane MINLP algorithm, backtested with real money on 2018 DraftKings NFL Showdown contests.
## Key metrics/methods (formulas where given, else "not specified")
- Closed form: E[max] = μ₁Φ(δ) + μ₂Φ(−δ) + θφ(δ), where δ = (μ₁−μ₂)/θ, θ = √(σ₁² + σ₂² − 2σ₁₂), Φ/φ = standard normal CDF/PDF.
- Objective: max E[max(cᵀx₁·ξ, cᵀx₂·ξ)], ξ ~ N(μ, Σ), x₁,x₂ binary lineup vectors; cutting-plane loop adds cuts η ≤ E[max](x̂) + gᵀ(x−x̂) using subgradients at incumbent.
- NP-hardness proven even with unconstrained feasible region.
- Covariance estimation: variances from 50 nearest same-position historical performances; correlations from 50 analogous player-pairs, p>0.25 zeroed, repaired to PSD via `cov_nearest`.
## Data sources named
FantasyData projections (means), 2014–2017 NFL player fantasy performances (variance/correlation estimation), 16 real DraftKings Showdown contests from 2018 (entry fees, payouts, winner scores). Showdown rules: 6 players (5 flex + 1 captain, 1.5× cost/score), no duplicates, ≥1 player per team, only players projected ≥ 5 points eligible.
## Findings (numbers and facts, not vibes)
- Exact method totals across 16 contests: entry fees $9,674; winnings $15,050; profit +$5,376 (+55.6% ROI).
- Heuristic (two independent max-EV lineups): same $9,674 fees; winnings $5,300; profit −$4,374 (−45.2% ROI).
- Averages: exact EV 94.65, objective 112.15, actual best entry 100.09; heuristic EV 95.84, objective 105.47, actual best entry 97.41. Heuristic EV was 1.19 points HIGHER but exact method's E[max] objective was 6.68 points higher and its realized best entry outscored heuristic by 2.68 points.
- Caveats in ledger: 16 contests selected as "available" (selection bias), payoff accounting assumes added entries don't displace others, only 2 entries supported, 16-contest sample = wide confidence intervals.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Joint E[max] optimization beats independent max-EV lineups in real-money Showdown backtest (OTHER — DFS optimization)
- Covariance estimation via nearest-neighbor historical pair performances with p-value zeroing and PSD repair (OTHER — modeling method)
- Captain-mode (1.5×) lineup constraint formulation (OTHER — DFS rules)
## Engine-actionable? (yes/no + one-line what)
yes — Implement "duel mode" in the GSE optimizer: closed-form E[max] objective over two correlated Showdown lineups (10 lines), captain-mode linear constraints, warm-start for n-entry SAA portfolios.
