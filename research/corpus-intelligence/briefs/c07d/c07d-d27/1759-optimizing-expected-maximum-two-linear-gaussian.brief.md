# arxiv-program/research/2026-09-21/arxiv-deep/1759-optimizing-expected-maximum-two-linear-gaussian.md
## What it is (1-2 sentences)
An exact method for jointly optimizing TWO correlated DFS lineups to maximize the expected value of the better of the two — E[max(X₁,X₂)] under a multivariate Gaussian player-score model — solved as a mixed-integer nonlinear program (MINLP) with a cutting-plane algorithm, and backtested with real money on DraftKings NFL Showdown contests (+55.6% ROI vs −45.2% for the max-EV heuristic).

## Key metrics/methods (formulas where given, else "not specified")
- Closed-form E[max] of two correlated Gaussians (verbatim from file):
  `E[max(X₁,X₂)] = μ₁Φ(δ) + μ₂Φ(−δ) + θφ(δ)`, where `δ = (μ₁−μ₂)/θ`, `θ = √(σ₁² + σ₂² − 2σ₁₂)`, Φ/φ standard normal CDF/PDF.
- Objective: `max E[max(cᵀx₁·ξ, cᵀx₂·ξ)]` where `ξ ~ N(μ, Σ)`, x₁,x₂ binary lineup vectors.
- Alternate form: `θ = √(σ₁²+σ₂²−2ρσ₁σ₂)`.
- NP-hardness proved even with unconstrained feasible region (reduction in paper).
- Cutting planes: at incumbent (x̂₁,x̂₂), add cut `η ≤ E[max](x̂) + gᵀ(x−x̂)` using subgradients of the closed form (integer L-shaped method extension).
- Heuristic baseline: solve two independent max-EV lineups.

## Data sources named
- FantasyData projections (commercial, for means); 2014–2017 NFL seasons historical player performances; variances from 50 historical same-position player performances nearest in projected points; correlations from 50 historical player-pair co-performances, zeroed when p-value > 0.25, PSD repaired via `cov_nearest` (statsmodels); 16 DraftKings 2018 NFL season Showdown contests with actual contest results (entry fees, payouts, winner scores).

## Findings (numbers and facts, not vibes)
- Exact method totals across 16 contests: entry fees $9,674; winnings $15,050; profit +$5,376; ROI +55.6%.
- Heuristic (two independent max-EV lineups) totals: entry fees $9,674; winnings $5,300; profit −$4,374; ROI −45.2%. Same spend, opposite sign.
- Table 4 averages: Exact — EV 94.65, objective (E[max]) 112.15, actual best entry 100.09. Heuristic — EV 95.84, objective 105.47, actual best entry 97.41.
- Heuristic's average EV was 1.19 points HIGHER than exact, but exact's E[max] objective was 6.68 points higher; exact's actual best entry beat heuristic's by 2.68 points.
- Core result: maximizing E[max] beats maximizing EV for multi-entry GPPs, even when individual lineups have lower mean.
- Showdown rules modeled: 6 players (5 flex + 1 captain); captain costs 1.5× salary and scores 1.5× points; no duplicate player per entry; ≥1 player from each team; only players projected ≥ 5 points eligible.
- Second application in paper (stochastic knapsack-style) exists but DFS is the substantive one.
- Limitations stated: 16 contests is small (wide CIs on +$5,376); contest selection rule undescribed ("available" contests → selection bias); payoff accounting assumes entries added without displacing others (not zero-sum realistic); only 2 entries optimized (no closed form for n>2; references 2407.13438 EMS/SAA as the n>2 path); Gaussian tails understate boom/bust asymmetry (captain 1.5× is skewed); 50-NN covariance estimation is ad hoc, cov_nearest repair can distort high-leverage stack correlations.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER — DFS CONSTRUCTION / GPP OPTIMIZER]: This is a directly engine-actionable optimizer upgrade. The mechanism: for GPP portfolio construction, the objective should be E[max score across entries], not sum-of-EVs, and correlation structure (QB-WR stacking correlations) is a first-class input to the objective. Serves the DFS construction lane: "duel mode" 2-entry Showdown optimizer using the closed form (μ₁, μ₂, σ₁, σ₂, ρ) as the GSE optimizer objective, with GSE's own means/variances/correlations replacing FantasyData/50-NN inputs. For n>2 entries, the n-entry SAA/PROP+ approach of ledger 1760 takes over, with this exact 2-entry solution as warm start and optimality-gap benchmark.
- [OTHER — CALIBRATION / BACKTESTING]: Real-money backtest discipline is the trust-signal analogue for the optimizer lane: report entry fees, winnings, profit, ROI, and average best-entry score against the top-2-EV baseline — not just simulated EV. Serves calibration/sizing.
- [QB-BEHAVIOR]: INFERENCE — the correlation matrix is the highest-leverage input; QB-WR stack correlations from game-script-conditioned co-performance should replace the paper's 50-nearest-pair hack, because the exact method's edge comes from exploiting correlation in the E[max] objective.
- [SCHEME]: INFERENCE — Showdown/captain-mode constraint encoding (1.5× captain cost/score, ≥1 player per team, no duplicates) is directly portable to GSE's optimizer constraint layer.
- CONTRADICTION flag: the file's Gaussian assumption contradicts the standing GSE view (and its own §9) that fantasy scores are skewed — the acceptance gate in the file itself says reject/swap to skew-t or empirical copula if the optimizer systematically under-selects high-variance captain plays.
- Referenced papers/datasets by name: arXiv:2112.07002v2 (Bergman, Cardonha, Imbrogno, Lozano, 2022); 2407.13438 (EMS/SAA n-entry approach, ledger 1760); ledger 1091 (multi-entry portfolio IP); single-lineup MILP ledgers 1604.01455, 2309.15253, 2411.11012; statsmodels `cov_nearest`; FantasyData.

## Engine-actionable? (yes/no + one-line what)
Yes — implement closed-form E[max] two-entry Showdown "duel mode" in the GSE optimizer with GSE's own correlation matrix; acceptance gate: exact 2-entry beats top-2-EV baseline by ≥2.0 realized best-entry points on ≥20 2024 Showdown contests AND ≥4.0 simulated E[max] improvement, else swap Gaussian for skew-t/copula.
