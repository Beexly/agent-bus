# arxiv-program/research/2026-09-21/arxiv-deep/1797-wisdom-of-the-crowds-forecasting-the.md
## What it is (1-2 sentences)
Wisdom-of-crowds study (Inácio et al. 2020, arXiv:2008.13005v2) on the 64-match 2018 FIFA World Cup forecasting contest (511 registrants, 57 full panels), testing aggregation strategies (Top-n, local/global wisdom, Budescu–Chen contribution weighting, exponential-weights ISP) against statistical models and 100,000 simulated tournaments separating luck from skill.
## Key metrics/methods (formulas where given, else "not specified")
- Scoring: linear transform of Brier score to 0–100 per match (100 = probability 1 on observed outcome); 64-match total.
- ISP-η: p̂_t = (Σⱼw_{j,t}f_{j,t})/(Σⱼw_{j,t}), w_{j,t} ∝ exp(ηR_{j,t−1}); regret R_{j,t−1} = Σ_{t₀<t}[l(p̂_{t₀},y_{t₀}) − l(f_{j,t₀},y_{t₀})]; η ∈ {0.001, 0.01, 0.1, 1}.
- Budescu–Chen: contribution Cⱼ = Σᵢ₌₁ᴺ(Sᵢ − Sᵢ^{−j})/N; weighted average over forecasters with Cⱼ > 0.
- Assertiveness: (3/2)Σᵢ₌₁³(Pᵢ − 1/3)² ∈ [0,1]; 0 = maxi-min (1/3,1/3,1/3), 1 = vertex.
- Bootstrap-like extension to n = 1…1,024 matches (matches treated as exchangeable).
## Data sources named
fifaexperts.com 2018 World Cup contest (site defunct, no data/code); model entrants: Esportes em números (Maher 1982 Poisson), Groll et al. 2018 (random forest), Chance de Gol (bivariate Poisson), Previsão Esportiva (Poisson + expert), FiveThirtyEight; bookmaker-odds-implied forecasts from 18 sites for "Global wisdom".
## Findings (numbers and facts, not vibes)
- Contest totals (of 64 matches): Esportes em números 4650 (72.7 avg, rank 1); Groll et al. 4644 (2); Global wisdom 4634 (3.5); FiveThirtyEight 4634 (3.5); Chance de Gol 4611 (5); Budescu–Chen 4601 (rank 6); Local wisdom 4567 (12.5); Top-1 "follow the leader" 4438 (rank 40 — chasing recent form fails).
- Luck dominates at 64 matches: the actual winner, simulated under her own probabilities, wins only 28.2% of 100,000 tournaments (avg position 4.7 ± 4.8); she needs ≈576 matches for 95% win probability; Global wisdom needs ≈1,024.
- Assertiveness: best forecasters were less assertive; top users' assertiveness declined toward (1/3,1/3,1/3) as the tournament progressed; worst users stayed overconfident — Brier scoring punishes over-assertiveness.
- Third group-stage round hardest to predict (dead rubbers, strategic draws) — structural calendar effect.
- Forecast counts fell 363 (opener) → 101 (third-place playoff) — attrition bias in late aggregates.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: ensemble aggregation — Budescu–Chen leave-one-out contribution weighting as a parameter-free arm for the GSE ensemble aggregator; per-source assertiveness shrinkage (shrink probabilities toward 0.5 by trailing assertiveness-optimal λ) before weighting ("calibrate, then weight" doctrine).
- TRUST-SIGNAL: evaluation honesty — GSE publishes ~270 NFL games/season; this paper says season-long "best model" claims at that n are mostly luck; no model-A-beats-B claim on < ~500 game samples without a truth-knower simulation.
## Engine-actionable? (yes/no + one-line what)
Yes — add the Budescu–Chen aggregation arm (adopt if ≥0.002 Brier gain on 2024–2025 or truth-knower simulation win), run the engine assertiveness audit with recalibration, and adopt the evaluation-honesty rule unconditionally.
