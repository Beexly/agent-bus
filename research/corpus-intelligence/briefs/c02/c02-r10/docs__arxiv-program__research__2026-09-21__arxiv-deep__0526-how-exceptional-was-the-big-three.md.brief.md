# docs/arxiv-program/research/2026-09-21/arxiv-deep/0526-how-exceptional-was-the-big-three.md

## What it is (1-2 sentences)
A Bayesian dynamic Bradley–Terry state-space rating paper (Leonelli 2026, arXiv:2608.27362v1, Eur. J. Oper. Res.) asking whether the Federer–Nadal–Djokovic era was the most dominant in tennis history, using peaks-over-threshold exceedances on latent strengths. Verdict in file: ADAPT — the dynamic BT model (Glicko-style Gaussian filtering + Platt recalibration) is portable to NFL dynamic team-strength ratings, plus robust dynasty-summary methodology.

## Key metrics/methods (formulas where given, else "not specified")
- Dynamics: θ_{i,t} = θ_{i,t−1} + w_{i,t}, w_{i,t} ∼ N_S(0, τ² R(ρ)) independently across players; initial θ_{i,t0i} ∼ N_S(0, σ_0² R(ρ)); R(ρ) exchangeable correlation with off-diagonal ρ (Eq. 4).
- Match probability: P(i defeats j | θ_{i,t}, θ_{j,t}) = [1 + exp{−a_f (θ^{(s)}_{i,t} − θ^{(s)}_{j,t})}]^{−1} (Eq. 5); a_3 = 1 normalization, a_5 estimated from relative upset frequency.
- Posterior: p(Θ | y, ψ) ∝ ∏_i [p(θ_{i,t0i}) ∏_{t>t0i} p(θ_{i,t}|θ_{i,t−1})] ∏_m p(y_m | θ_{i_m,t_m}, θ_{j_m,t_m}) (Eq. 6); ψ = (τ, σ_0, ρ, a_5) fixed at marginal-likelihood maximizers via grid search.
- Filtering: mean-field across players + Laplace Gaussian approximations per player (Glickman 1999), iterated to convergence (single Fisher-scoring step fails with many matches/period); Gaussian pseudo-observations → linear-Gaussian state space; trajectory sampling via Carter–Kohn; 300 posterior samples.
- Dominance: exceedance counts N_t(u) at rate-calibrated thresholds (mean N̄=1 and N̄=2 players/period); persistence via lag profiles {π_k} and block profiles {β_w} (fixed-window averages, NOT run lengths); cross-surface upper-tail dependence via Ledford–Tawn χ/η.
- Relative strength referenced to contemporaneous field (mean strength of 10th–100th ranked players); ~400 rating points ≈ 10:1 odds.
- Platt recalibration on logit scale: intercept 0, slope 0.851 (fit on odd years, evaluated on even years).

## Data sources named
- 197,926 men's professional singles matches (ATP tour, 1968–2025) from the TML-Database; 188,771 with prior history contribute to estimation; analysis 1978–2025 (1,924 weekly periods, median 558 active players/period).
- Surface analysis: 143,383 matches on hard/clay/grass (carpet excluded), 4,970 players, 1,818 periods.
- Replication code + data: https://github.com/manueleleonelli/Tennis_Extremes.

## Findings (numbers and facts, not vibes)
- Model fit: predictive accuracy 0.675, Brier 0.207 on 188,771 matches; Platt recalibration removes overconfidence (predicted 0.934 → observed 0.910 in highest band; reliability flat to 0.006 post-calibration). [TRUST-SIGNAL, OTHER]
- Summary-function robustness (25 simulated records): longest-run estimate/true ratio mean 1.75 (Elo) / 1.32 (posterior median), s.d. 0.87/0.60 — non-robust; fixed-window lag persistence π_1 ratio mean 1.12/1.08, s.d. 0.07/0.06 — robust. Fixed-window summaries win; run-based statistics are unreliable under estimation error. [TRUST-SIGNAL, OTHER]
- Cross-surface model: ρ̂ = 0.90 (interior max, τ = 0.05), accuracy 0.667; +1,365 prequential log-likelihood units over independent (ρ=0). [SCHEME, OTHER]
- Era order statistics (Table 2): 1978–1989 block above every later block at every rank (rank-1: 397 [376,424] vs 364 [347,387] (2002–2013), 377 [350,400] (2014–2025)); 1990–2001 anomalously low (264 [246,284]). [OTHER]
- Concurrent dominance (Table 5): at strict threshold (N̄=1), only 2002–2013 has periods where three-way dominance is more probable than not — 57 such periods vs none in any other block; 1990–2001 upper tail effectively unoccupied (E[N_t]=0.42/0.02). [OTHER]
- Sojourn above threshold (N̄=2, weekly periods): Federer 612 (526,714), Djokovic 578 (457,657), Nadal 510 (396,598), Lendl 408, McEnroe 365, Connors 305, Murray 215, Borg 205, Becker 116, Sampras 113. [OTHER]
- Cross-surface upper-tail dependence: χ = 0.60 (hard–clay), 0.65 (hard–grass), 0.50→0.40 (clay–grass); 8 players extreme on all three surfaces at q=0.90 (vs 0.20 under independence); P(extreme on all three) > 0.5 only for Djokovic (1.00), Federer (1.00), Nadal (0.97), Murray (0.91) — no predecessor above 0.12. [OTHER]
- Peak strength: only Djokovic separates from the field; Federer and Nadal are indistinguishable from Borg, McEnroe, Lendl on peak. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Port the weekly dynamic BT state-space model to NFL team ratings with multi-component strength vectors (offense/defense or pass/run splits) and an estimated exchangeable correlation ρ (tennis found ρ̂=0.90 — components track tightly; INFERENCE: offense/defense components may show similar correlation in NFL). (SCHEME, OTHER)
- Calibration hygiene: Platt slope 0.851 means the raw dynamic model was systematically overconfident — any dynamic NFL rating module needs the odd-year-fit/even-year-eval Platt protocol built in. (TRUST-SIGNAL, OTHER)
- Dynasty/comparison summaries must use rate-calibrated exceedance counts and fixed-window persistence profiles — never longest-run statistics — a methodological rule for any GSE "best team of the decade" content. (TRUST-SIGNAL, OTHER)
- Rate-calibrated thresholds solve the cross-era comparison problem (comparing gaps, not levels) — reusable for cross-season NFL team-strength normalization. (SCHEME, OTHER)

## Engine-actionable? (yes/no + one-line what)
yes — Build a weekly dynamic BT NFL team-rating module (random-walk dynamics, offense/defense vector with estimated ρ, iterated Glickman filter, Carter–Kohn sampling, Platt odd/even recalibration); accept if out-of-sample Brier ≤ static BT/Elo baseline.
