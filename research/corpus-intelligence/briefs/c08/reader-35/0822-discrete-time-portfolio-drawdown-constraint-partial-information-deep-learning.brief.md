# docs/arxiv-program/research/2026-09-21/arxiv-deep/0822-discrete-time-portfolio-drawdown-constraint-partial-information-deep-learning.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2010.15779 (De Franco, Nicolle & Pham, 2020): discrete-time portfolio selection with unknown drift learned via Bayesian filtering (Kalman) under a hard maximum-drawdown constraint, solved with the Hybrid-Now deep-learning algorithm — a pure simulation study (no real data). Verdict: ADAPT — the quantified value of learning-under-uncertainty (+2.94% return, worst drawdown halved) is theoretical backing for GSE learning its edge online under a drawdown cap.
## Key metrics/methods (formulas where given, else "not specified")
- Market: S_{k+1}^i = S_k^i exp(R_{k+1}^i); R_{k+1} = B + ε_{k+1} (B ~ prior μ₀, unknown drift); wealth X_{k+1}^α = X_k^α(1+α_k'(e^{R_{k+1}}−1_d)).
- Constraint: X_k^α ≥ q·Z_k^α a.s., Z_k^α = max_{ℓ≤k} X_ℓ^α, q=0.7 in the study.
- Problem: V₀ = sup_{α∈A₀^q} E[U(X_N^α)], U = CRRA with p=0.8.
- Theory: change of measure + Bayesian filtering → dynamic programming equation; finite-dimensional in Gaussian case via Kalman filter; further reduced for CRRA.
- Numerics: Hybrid-Now (Bachouch et al.) — deep NNs approximating value function/control backward in time. Simulation parameters (Table 2): d=3 risky + riskless, 1-yr horizon, N=24 biweekly rebalances, 1000 trajectories; drift prior mean b₀=[0.05, 0.025, 0.12]; prior covariance diag(0.2², 0.15², 0.1²); noise vol [0.08, 0.04, 0.22]; noise correlation [[1,−0.1,0.2],[−0.1,1,−0.25],[0.2,−0.25,1]].
## Data sources named
None — pure simulation study (TensorFlow 2 implementation per Géron 2019). Strategies compared: Learning vs Non-Learning vs constrained equally-weighted benchmark.
## Findings (numbers and facts, not vibes)
- Learning vs Non-Learning (x₀=1): total performance 9.34% vs 6.40% (+2.94% value of learning); terminal-wealth σ 11.88% vs 16.67%; avg max drawdown −1.53% vs −6.54%; worst MD −11.74% vs −27.18%.
- Learning vs constrained EW: +5.49% return, −1.92% σ, +182.08% Sharpe, avg MD +3.17%, worst MD +10.09%, Calmar +647.56%.
- Learning starts nearly flat for the first period (waits one step to update prior before allocating — "safer approach"); Learning/Non-Learning ratio follows concave value-of-information curve.
- Sensitivity: Learning's advantage grows with prior uncertainty scale unc; as q→0, Non-Learning converges to constrained Merton (both pile into Asset 3, highest drift).
- Caveats in file: DGP matches the Learning model's assumptions (home-field advantage); no model-misspecification test; no transaction costs; 3 assets / small scale; drawdown is on wealth-vs-peak, maps to bankroll, not pick selection.
- File proposes GSE adaptation: per-pick-category Beta-Binomial posterior over true win probability, Kelly stakes from posterior mean shrunk by posterior uncertainty, hard 30% drawdown governor; new categories start at reduced stakes (the "flat first period"); backtest on GSE's 3,411-pick DB walk-forward 2024→2025; gate = Learning staker beats Non-Learning on 2025 ROI with worst drawdown no worse; effort ~4–5 days.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Bayesian edge-learning under a drawdown cap (TRUST-SIGNAL: replaces fixed historical edge estimates with uncertainty-aware online updating; connects to sizing lane, bayesian lane, abstention lane).
- "Flat first period" = abstention-by-uncertainty for new pick categories (OTHER: abstention lane).
- Continuous drawdown-probability stake modulation via ledger-0820 RCK λ as improvement over the hard cutoff (OTHER: sizing lane).
## Engine-actionable? (yes/no + one-line what)
Yes — implement Beta-Binomial edge-learning + 30% drawdown governor on GSE's pick DB and backtest against fixed-edge Kelly.
