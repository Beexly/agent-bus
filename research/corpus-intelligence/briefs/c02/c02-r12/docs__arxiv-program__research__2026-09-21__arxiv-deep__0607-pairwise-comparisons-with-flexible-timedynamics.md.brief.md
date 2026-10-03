# docs/arxiv-program/research/2026-09-21/arxiv-deep/0607-pairwise-comparisons-with-flexible-timedynamics.md

## What it is (1-2 sentences)
A KDD '19 paper (arXiv:1903.07746v2) modeling competitor skill as continuous-time Gaussian processes with composable covariance kernels (piecewise-constant for season breaks, Matérn for within-season form), applied to tennis, NBA, football, chess (7.17M games), and StarCraft. It strictly generalizes Elo/TrueSkill (recovered as a Wiener-kernel special case) and beats them on prequential log-loss while providing honest uncertainty on team strength.

## Key metrics/methods (formulas where given, else "not specified")
- Score process: s_m(t) ~ GP[0, k_m(t,t′)] (eq. 1); competitor score s_i = x_iᵀ s(t*); observations (x_i, x_j, t*, y).
- Likelihoods: ordinal probit/logit (win/loss/tie), Gaussian on point difference, Poisson-exp on points scored (Maher 1982).
- Kernel library: constant (offset), piecewise-constant (discontinuities across seasons), Wiener (Brownian — subsumes Elo/TrueSkill), Matérn(ν) (ν=1/2 = mean-reverting Brownian), linear (trends); composed by addition/multiplication.
- Inference: variational (EP or reverse-KL) with mean-field factorization; linear-time iterations, <100 to converge (Δ log-marginal-likelihood < 10⁻³); embarrassingly parallel; reference implementation https://github.com/lucasmaystre/kickscore; Go port gokick: 7M chess observations at ~5 s/iteration on 16 threads (2× Xeon E5-2680 v3).
- Validation: chronological 70/30 train/test; hyperparameters by log-marginal-likelihood (Bayesian) or LOO log-loss; prequential prediction uses all data up to the day before t*.

## Data sources named
ATP tennis: 20,046 players / 618,934 matches (1991–2017); NBA: 102 teams / 67,642 games (1946–2018); world football: 235 teams / 19,158 matches (1908–2018, ties); ChessBase small: 19,788 / 306,764 (1950–1980); ChessBase full: 343,668 / 7,169,202 (1475–2017); StarCraft WoL 4,381 / 61,657; HotS 2,287 / 28,582 (no timestamps). Public (Sackmann tennis, basketball/football sources listed) except ChessBase (commercial).

## Findings (numbers and facts, not vibes)
- **Prequential log-loss / accuracy (Table 3):** ATP tennis 0.552/0.714 (Affine+Wiener) vs Elo 0.563/0.705, TrueSkill 0.563/0.705; NBA 0.630/0.645 (Constant+Matérn 1/2) vs Elo 0.634/0.644; world football 0.926/0.558 vs Elo 0.950/0.551, TrueSkill 0.937/0.554; chess 1.026/0.474 (Constant+Wiener) vs Elo 1.035/0.447. GP wins or ties everywhere; different sports need different learned kernels. [SCHEME, OTHER]
- **Learned timescales of the dynamic component:** 1.75 years (basketball — volatile) vs 7.47 years (tennis — stable); score trajectories recover known history (Celtics '60s, Bulls '95–96). [SCHEME]
- **Likelihood ablation (Table 4):** Gaussian on point differential best for NBA (0.627 vs 0.630); Poisson-exp best for football (0.922 vs 0.926) — using the score beats using only the outcome. [SCHEME]
- **Home advantage as a learned feature (Table 5):** football log-loss 0.926→0.900, accuracy 0.558→0.579; chess White advantage 1.026→1.019. [SCHEME]
- **Inference quality:** mean-field vs exact Gaussian inference identical to 4 decimals (0.634 log-loss / 0.664 accuracy on NBA 2000–2005); EP vs reverse-KL identical to 3 decimals (authors recommend reverse-KL for stability). [OTHER]
- **Intransitivity:** pairwise interaction features s_ij added to s_i − s_j beat the purpose-built Blade-Chest model on StarCraft. [OTHER]
- **Scale caveat:** gains over Elo are modest (0.004–0.024 log-loss); the win is flexibility + uncertainty + interpretability, not a predictive revolution. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Composite-kernel GP time-varying team strengths (piecewise-constant season breaks + Matérn-1/2 within-season form + constant baseline): SCHEME — team ratings → spread/ML engine prior.
- Home advantage as a learned feature rather than a fixed point value: SCHEME.
- Gaussian likelihood on point differential instead of binary outcome: SCHEME — score-aware training signal.
- Lineup/injury features encodable in the sparse feature vector x_i (cited Maystre et al. 2016, not demonstrated): SCHEME — post-injury regime changes without Elo-style lag; INFERENCE: closest to GSE's injury-edge lane.
- Posterior credible intervals on team strength for honest uncertainty on published content: OTHER.
- Intransitivity via pairwise interaction features: OTHER — no NFL analogue shown in the paper.

## Engine-actionable? (yes/no + one-line what)
Yes — implement GSE-GP team strength: 32 NFL teams + learned home-advantage feature, piecewise-constant (season boundaries) + Matérn-1/2 kernel, Gaussian likelihood on point differential, fit on 2015–2026 nflverse; gate on beating canonical Elo on prequential log-loss over 2023–2025 or strictly better underdog calibration.
