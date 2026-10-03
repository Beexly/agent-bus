# docs/arxiv-program/research/2026-09-21/arxiv-deep/0406-smogs-social-network-metrics-of-game.md

## What it is (1-2 sentences)
Deep-read ledger of SMOGS (arXiv:1806.06696v1), which models basketball passing as a non-homogeneous spatio-temporal Poisson process with multiplicative latent sender/receiver factors (u_i^T v_j) estimated by MCMC, and reads a win/loss "fragmentation vs. overlap" signature off the latent factors. Verdict: ADAPT — port the latent-factor dyadic machinery to NFL QB–receiver target dyads as a QB–Receiver Chemistry Factors (QRCF) metric.

## Key metrics/methods (formulas where given, else "not specified")
- Pass hazard (6): θ_{i,j}(t) = lim_{ε→0+} P(Y_{i,j}(t) | H(t)) / ε
- Full model (10): log(θ_{i,j}(t)) = X_{i,j}(t)^T β_{i,j} + u_{i,g}^T v_{j,g} + ε_{i,j}(t), latent term (8): z_{i,j,g}(t) = u_{i,g}^T v_{j,g} + ε_{i,j}(t); R = 2 latent dimensions, game-specific
- Preliminary AME (5): log-odds(y_{ij}=1) = β_d x_d + r_i + s_j + u_i^T v_j + ε_{ij} (fit with Hoff's R package amen)
- Thin-plate-spline spatial smoother (11): min Σ_k ‖ñ_k − ξ̄_i(c_k)‖² + λ ∫_S ‖∂²ξ̄_i/∂s²‖²_F ds, λ by GCV, on 1 ft × 1 ft half-court tiles
- 5-dim dyadic covariate W_{i,j}(t): baseline constant; dribble-started indicator; log distance from i to nearest defender; j's closeness rank to i (1–4); passing-route openness (Cervone metric); spatial effects normalized to integrate to 1
- Inference: Metropolis-within-Gibbs (Gibbs for β, U_g, V_g columns; Metropolis for θ intensities); standard multivariate normal priors

## Data sources named
First public SportsVu college-basketball optical tracking dataset (one NCAA D-I team's home games, Dec 2014 – Jan 2015, players anonymized by random ID; 25 Hz snapshots) via three merged XML sources (Boxscore, Play by Play, Sequence Optical); synthetic validation dataset (2 games, 8 players, ~10,000 observations) generated from the model; Hoff et al. R package amen (no code repo stated; dataset download link not given)

## Findings (numbers and facts, not vibes)
- Simulation (Table 1): Latent beats Covariate-only — train LL −10,025.93 ± 189.31 vs −10,719.68 ± 120.26; held-out LL −1,219.80 ± 57.62 vs −1,314.00 ± 43.43
- Real data (Table 2): Latent beats Covariate-only — train LL −679.33 ± 114.51 vs −917.89 ± 220.41; held-out LL −58.52 ± 11.20 vs −64.68 ± 12.59
- Win/loss signature (Figures 1, 4, interpretive only, no classifier): in the win, starters' sender/receiver effects cluster together ("more overlap, more active teamwork"); in the loss, effects lie farther from origin and ball movement is "fragmented"
- No numeric accuracy/AUC for win/loss prediction; conclusions rest on a handful of games (~2 months of one team's home games)
- 90/10 in-game split means held-out LL is not a true out-of-game test; game-specific latent factors cannot predict a future game (no carry-forward mechanism)

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Latent sender/receiver factor model ports to QB–receiver target dyads as a chemistry metric (u_QB^T v_j) — QB-BEHAVIOR, TRUST-SIGNAL
- Fragmentation vs. overlap signature as team-week diagnostic of target-distribution health — COACHING, SCHEME
- Dyadic covariates (defender distance, route openness) translate to dropback features from NGS — OTHER
- Thin-plate-spline smoothing as cheap empirical-Bayes smoother for NFL field surfaces — OTHER
- Game-specific factors cannot carry across games — limitation noted for any production version (INFERENCE: needs dynamic random-walk extension) — OTHER

## Engine-actionable? (yes/no + one-line what)
Yes — build QB–Receiver Chemistry Factors (QRCF): multinomial target-choice model over 5 eligibles with latent QB-sender × receiver-receiver factors; chemistry leaderboard content + fragmentation-vs-EPA hypothesis test on 2024 holdout; accept only if latent factors win held-out log-likelihood AND fragmentation negatively predicts dropback EPA out-of-sample.
