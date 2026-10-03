# docs/arxiv-program/research/2026-09-21/arxiv-deep/0436-hockey-player-performance-via-regularized-logistic.md
## What it is (1-2 sentences)
An L1-regularized logistic-regression framework for "partial" player effects in hockey — each player's contribution to which team scores, controlling for teammates, opponents, team-season, and game situation — with λ chosen by corrected AICc and metrics (partial for-% PFP, partial plus-minus PPM) derived from the fitted coefficients. External validation against salary data; NHL-specifics aside, the method is a direct template for NFL snap-level player attribution.

## Key metrics/methods (formulas where given, else "not specified")
- Model: log[q_i/(1−q_i)] = α + u_i′γ + v_i′φ + x_i′β_0 + (x_i ∘ s_i)′(β_s + p_i β_p), y_i = +1 home scored goal i, −1 away.
- Penalized NLL: l(η;y) = Σ log(1+exp[−y_i η_i]) + nλΣ_j(|β_0j|+|β_sj|+|β_pj|). Only player effects penalized; team-season (γ) and special-teams (φ) unpenalized to fully remove confounding.
- λ chosen by corrected AICc: AICc = 2Σl(η̂_λ;y) + 2kn/(n−k−1) (analytic, deterministic; preferred over CV). Fit with gamlr R package, standardize=FALSE (so low-ice-time players are not up-weighted).
- Partial for-%: PFP_sj = (1+exp[−β_0j−β_sj])^−1. Partial plus-minus: PPM_sj = g_sj·PFP_sj − g_sj(1−PFP_sj) = g_sj(1−2·PFP_sj), g_sj = goals player j was on ice for.
- Laplace prior ≡ L1 penalty; MAP ≡ posterior mode. Fully Bayesian reglogit (Gibbs, Polson data augmentation) discussed for posterior intervals.

## Data sources named
- NHL play-by-play from nhl.com, 11 seasons 2002–03 through 2013–14 (2004–05 lockout excluded), regular + playoffs: p = 2,439 players, n = 69,449 goals; Corsi events n_c = 1,329,679; Fenwick n_f = 1,034,154.
- Salaries: blackhawkzone.com + hockeyzoneplus.com; 80% of player-seasons covered.
- Code: https://github.com/TaddyLab/hockey (R, gamlr).
- Covariates: player-presence indicators x_ij ∈ {−1, 0, +1} (12 nonzero per full-strength goal); team-season indicators; special-teams indicators (6 non-6v6 settings + pulled-goalie; >35% of goals on special teams); player×season and player×playoff interactions.

## Findings (numbers and facts, not vibes)
- Top player-season by goals-PPM: Forsberg 2002-03 at 55.5 (~25% above Crosby 2009-10 at 43.5); Crosby holds 4 of the top-10. Bottom: Niclas Havelid −65.94 (2005-06 ATL), Bouwmeester −69.62. — OTHER
- Rankings change dramatically vs the no-confounder model: Crosby drops out of the top 5 per-season when special-teams effects are omitted (penalty-kill time confounds). Goalies' PPM collapse once team-season effects are controlled (they act as team surrogates). — COACHING (situation/time-on-special-teams confounds player ratings; unpenalized situation controls matter)
- Goal vs Corsi rankings differ dramatically: Daniel Sedin tops Corsi-PPM (615.14, 2010-11) but ranks 152nd in goals-PPM (19.45); authors: troubling for Corsi-only analysis since only goal differentials win games. — TRUST-SIGNAL (process metrics vs outcome metrics diverge)
- Salary: PPM more correlated with salary than marginal PM; goals-based metrics more salary-correlated than Corsi-based; PFP > 0.5 cleanly predicts high salary vs marginal FP peaking near 0.5. Highest value 2013-14: Ondrej Palat, 58.27 goals-per-million ($500k salary, 7th-round pick, rookie-of-year nominee). — TRUST-SIGNAL (value-per-dollar framing)
- All playoff innovation coefficients β̂_pj = 0 — no evidence of clutch players. — OTHER
- Limitations: no out-of-sample prediction test (AICc is in-sample); L1 point estimates have no uncertainty; post-selection ranking is selection-biased; goals treated as conditionally independent; salary correlation confounded (rookie contracts; salary ← past performance ← PM). — TRUST-SIGNAL

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: the penalty-kill confounding result (Crosby's rank collapses when special-teams time isn't controlled) is the canonical warning for NFL attribution — snap context (down/distance, situation) must be unpenalized controls, not folded into player effects.
- TRUST-SIGNAL: value-per-dollar framing (Palat 58.27 goals-per-million) is a content template — players whose market price diverges from partial effect; also the process-vs-outcome split (Corsi vs goals) mirrors NFL's EPA vs PFF-grade debates.
- OTHER: no playoff "clutch" effect detected (β̂_pj all zero) — worth a sanity check in NFL post-season data; the unpenalized-confounders + L1-player-effects architecture is the direct estimation template for NFL snap-APM (complement/competitor to nflWAR).

## Engine-actionable? (yes/no + one-line what)
yes — Build NFL partial-PM: L1 logistic on next-score events (or EPA>0 plays) with 22-man on-field indicators, unpenalized team-season + down/distance/score controls; derive NFL PFP/PPM and gate adoption on out-of-sample log-loss and the 2024→2025 team-mover R² test vs nflWAR and raw on/off EPA.
