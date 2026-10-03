# arxiv-program/research/2026-09-21/arxiv-deep/0544-regularization-in-paired-comparison-models-via.md
## What it is (1-2 sentences)
A method paper (arXiv:2606.03805v1, Glickman, Harvard Statistics, 2026) deriving two pseudo-observation regularizers for Bradley–Terry/Thurstone–Mosteller models: (a) fractional balanced pseudo-games between every pair, and (b) weighted pseudo-win/pseudo-loss against a fixed-strength phantom player — both fit in plain `glm`. The GSE ledger verdict is ADAPT — the phantom-player penalty has linear (robust) tails vs ridge's quadratic ones, and the calibration formula gives GSE an interpretable shrinkage dial for early-season ratings.
## Key metrics/methods (formulas where given, else "not specified")
- Pseudo-game regularization: ℓ_δ(θ) = ℓ(θ) + δ Σ_{i<j} log{p_ij(1−p_ij)} (add δ fractional wins AND δ fractional losses to every unordered pair); shrinks ability differences, locally ridge with λ ≈ δJ/4.
- Phantom-player regularization: ℓ_ρ(θ) = ℓ(θ) + ρ Σ_j [log F(θ_j) + log(1−F(θ_j))], phantom strength fixed at θ_0 = 0; anchors individual abilities (resolves location nonidentifiability), locally ridge with λ ≈ ρ/4 but LINEAR rather than quadratic tails (L1-like robustness to extreme θ).
- Calibration formula: if a single observed win (no other info) should imply future-win probability q > 1/2, then q = (1+δ)/(1+2δ), i.e. δ = (1−q)/(2q−1); q = 0.99 → δ = 1/98.
- Bayesian reading: pseudo-game MAP prior ∏_{i<j}[F(Δ_ij)(1−F(Δ_ij))]^δ; phantom-player MAP under independent shrinkage priors ∝ [F(θ_j)(1−F(θ_j))]^ρ.
- Tuning: 10-fold CV (game-level folds) maximizing summed UNREGULARIZED validation log-likelihood; candidates δ ∈ [0.001, 10] log-grid, ρ ∈ [25, 60].
## Data sources named
2025 MLB regular season — 30 teams, 2,430 games, home-team win/loss via the `baseballr` R package (MLB Stats API). Method paper; no proprietary data barrier.
## Findings (numbers and facts, not vibes)
- CV-selected tuning (MLB 2025): ridge λ = 0.01; pseudo-game δ = 1.2589; phantom-player ρ = 40 (≈ 40 pseudo-wins + 40 pseudo-losses = 80 effective games vs a zero-strength team — roughly half a season of phantom weight).
- Fitted strengths (log-ability): Brewers BT 0.386 → ridge 0.240 / pseudo-game 0.263 / phantom 0.258; Rockies −0.979 → −0.580 / −0.643 / −0.629; middle teams (Royals 0.012, Rangers 0.010) barely move — shrinkage is selective for extremes.
- Spread (Milwaukee−Colorado): ordinary 1.365 → ridge 0.820 / pseudo-game 0.907 / phantom 0.887 (one-third to two-fifths reduction); implied neutral-field Milwaukee win prob 0.797 → 0.708 (phantom).
- Phantom-player estimates track ridge most closely (Fig. 4 identity plot); pseudo-game shrinks slightly less.
- Expert-calibration (δ = 1/98 ≈ 0.0102 for q=0.99) vs CV (δ = 1.2589) disagree sharply — paper notes both without reconciling; tuning philosophy must be chosen explicitly.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: phantom-player BT regularization (novel to corpus — anchor-to-reference shrinkage with robust linear tails, not covered by ledger 0542's covariate/Bayesian BT); q-calibration elicitation formula δ = (1−q)/(2q−1) as an expert-interpretable shrinkage dial for early-season NFL power ratings; pseudo-game power-prior as communicable regularization language for public ratings content.
## Engine-actionable? (yes/no + one-line what)
Yes — implement phantom-player-regularized weekly NFL BT power ratings (early-season stabilization, ~2 engineer-days, aug `glm` recipe in paper §2.3) plus the elicited shrinkage dial for published ratings; acceptance gate (≥17 of 24 weekly log-loss windows vs ordinary BT) specified in ledger.
