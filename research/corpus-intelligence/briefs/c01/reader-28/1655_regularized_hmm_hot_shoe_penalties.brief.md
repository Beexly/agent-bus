# arxiv-program/research/2026-09-21/arxiv-deep/1655-regularized-hmm-hot-shoe-penalties.md
## What it is (1-2 sentences)
A 2019 paper testing the "hot shoe" (hot-hand) effect in football penalty taking with a two-state hidden Markov model carrying a 656-covariate LASSO-penalized logistic emission model, applied to all Bundesliga penalties 1963/64–2016/17. ADAPT verdict in the source: the relaxed-LASSO HMM is the right sparse-regime machinery for GSE player-form modeling, but needs time-gap-aware transitions and genuine holdout validation before production.
## Key metrics/methods (formulas where given, else "not specified")
- S_t ∈ {1,2}; P(Y_t = 1 | S_t = s, x_t) = logit^{-1}(α_s + x_t'β); α_s state-varying intercept, β shared (state-independent).
- Penalized log-likelihood: ℓ(α,β,Γ) − λ Σ_j |β_j| (LASSO); relaxed LASSO refits unpenalized on the selected support.
- Smooth L1: |β| ≈ sqrt((β+c)^2), c = 10^-5; λ grid: 50 values from 5,000 down to 0.0001, selected by AIC/BIC.
- 656 covariates: player indicators, goalkeeper indicators, home, matchday, minute, experience, score-difference categories, score×minute interactions, rule-era dummies.
## Data sources named
All Bundesliga penalties, seasons 1963/64–2016/17; players with ≥5 attempts: 3,482 penalties, 310 penalty takers, 327 goalkeepers. Per penalty: taker, goalkeeper, converted (0/1), home/away, matchday, minute, experience, score-difference category, rule era. Source NOT public; no data URL; no code repository stated.
## Findings (numbers and facts, not vibes)
- Simulation (100 runs, 5,100 obs, 50 covariates with 47 pure noise): relaxed LASSO with BIC selected zero noise covariates in 84/100 runs — best overall; plain LASSO overselected noise.
- Real model (relaxed-LASSO/BIC): state intercepts 1.422 and −14.50 (a near-automatic-goal state and a near-automatic-miss state).
- Transition matrix [[0.978, 0.022], [0.680, 0.320]]; stationary distribution 0.969 / 0.031 — the "cold" state is rare.
- Other fits: AIC-HMM diagonals 0.989/0.386 with intercepts −14.71/1.347; BIC-HMM diagonals 0.987/0.368 with intercepts −18.83/1.360.
- Only goalkeeper selected: Jean-Marie Pfaff, relaxed coefficient −0.125 (reduces conversion odds against him).
- Substantive finding: essentially NO hot-shoe evidence — the cold state holds 3.1% stationary mass and player indicators are mostly unselected; situational effects dominate.
- Limitations: irregular elapsed time between penalties treated as unit steps (transition dynamics misspecified); self-selection of designated takers; omitted European-fixture attempts break sequences; two states may be too coarse; no held-out real-data predictive test; extreme intercepts (−14.5) signal fragile identification.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: direct template for QB behavioral profiles — latent form states (posterior state probabilities as features for player-prop/game models) with sparse high-dimensional covariate selection (injuries, role changes, matchup dummies) inside the regime model.
- OTHER: feature-screening methodology — relaxed-LASSO/BIC as an automatic feature selector for hundreds of candidate player/team features; complements GSE's existing Elo/Glicko/TrueSkill/Kalman continuous-form tooling without replacing it.
## Engine-actionable? (yes/no + one-line what)
Yes — build `gse.regimes.SparseFormHMM` for binary player-event targets (kicker FG / QB pass success / 3rd-down conversion) with time-gap-aware transitions (continuous-time embedding for irregular NFL event spacing), and admit to production only if holdout FG 2022–2024 beats plain logistic by ≥0.005 log-loss AND the simulation replication selects zero noise vars in ≥75/100 runs (source's gates).
