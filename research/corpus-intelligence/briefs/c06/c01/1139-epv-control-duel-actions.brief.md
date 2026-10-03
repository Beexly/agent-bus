# arxiv-program/research/2026-09-21/arxiv-deep/1139-epv-control-duel-actions.md
## What it is (1-2 sentences)
Extends Expected Possession Value (EPV) in soccer with three innovations: time-decayed within-possession credit (γ=0.95/second), possession-risk accounting (own future xG minus opponent's), and symmetric-duel skill ratings via modified Glicko-2 with a defender-advantage term. Then predicts next-season Pass Carry Reward (per-60 ΔEPV) from ~600 features with LightGBM, beating naive carry-forward by ~38% RMSE.
## Key metrics/methods (formulas where given, else "not specified")
- PV(c_i) = 1−Π_j(1 − γ^(t_j−t_i)·xG_j[t_j≥t_i]), γ=0.95 per effective second (stylistic choice, untuned)
- Possession risk: own future decayed xG sum minus opponent's future decayed xG sum
- Duel PV: PV(d_i) = PV(e_{i+1}) if same possession, else −PV(e_{i+1})
- ΔEPV reward branches (keep/turnover-penalized-twice/goal/duel-lead); PCR(player) = 60·ΣΔEPV(pass∨carry)/minutes
- Modified Glicko-2 duel rating: μ' = μ + φ'²g(φ_j)(s_j − E(μ + a, μ_j, φ_j)), a = defender advantage; context win-prob via LightGBM (no skill features)
- Transfer bias correction PCR_adj = PCR·0.8^(Δratings + pl) — ad hoc fudge factor
- Custom losses: per-player-appearance-weighted log-loss (xG) and MSE (EPV), dividing by player's appearance count
## Data sources named
Proprietary multi-league event data (through 2023/24, unnamed, not public); FIFA/EA Sports FC 24 contract-duration data (Kaggle) for stay-in-data model
## Findings (numbers and facts, not vibes)
- Next-season PCR, all data >100min: baseline RMSE 0.053 → model 0.033 (~38% relative), MAE 0.036 → 0.023; >1000min: 0.042 → 0.031
- Hardest slice (new team/new league): RMSE 0.061 → 0.037; easiest (same team/league): 0.050 → 0.032
- Duel ratings: van Dijk top aerial 1762 (2,167 duels, 71.9% wins); B. Ostojic top ground 1695 (279 duels, 73.1%)
- Case: Zlatan aerial win 61.1% vs Leão 35.8% at similar a-priori difficulty (39.2 vs 40.5)
- No CIs/significance tests; γ untuned; 600-feature set details partial (appendix truncated)
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: per-play ΔEDV attribution framework — adapt as NFL "Expected Drive Value" (passer/receiver split, rusher full, turnover penalized twice) to grade QB decision value per play
- OL: duel-skill analog — pass-rush win / contested-catch rates via modified Glicko-2 with context advantage terms (down/distance, receiver advantage)
- OTHER: per-player-appearance-weighted loss functions for low-volume player projections (deeper waiver/projection coverage); position-dependent γ discount as improvement direction
## Engine-actionable? (yes/no + one-line what)
Yes — build NFL Expected Drive Value pipeline on nflverse (γ tuned ~0.90–0.99) + Glicko-2 contested-play ratings; gate: EDV-derived ratings beat EPA carry-forward by ≥0.05 R² for WR/TE and ≥0.03 for QB on 2023 AND 2024 holds-out, and contested-catch Glicko-2 shows Spearman ≥0.45 year-over-year stability.
