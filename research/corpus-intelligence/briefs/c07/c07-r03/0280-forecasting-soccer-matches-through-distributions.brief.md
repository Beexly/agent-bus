# arxiv-program/research/2026-09-21/arxiv-deep/0280-forecasting-soccer-matches-through-distributions.md
## What it is (1-2 sentences)
Deep-dive of Mendes-Neves et al. (2025): under the 2023 Springer Soccer Prediction Challenge's results-only-data constraint, they forecast match outcomes by modeling distributions of shot quantity and shot quality from ELO ratings, then Monte Carlo-simulating games — rather than predicting win probabilities or goal counts directly. Ledger verdict: ADAPT the architecture (latent event distributions → simulation) to NFL play-count and EPA distributions, not the soccer specifics.
## Key metrics/methods (formulas where given, else "not specified")
- ELO: ELO_{i(t+1)} = ELO_{it} + K(O_{ijt} − P_{ijt}) (Eq. 5); P_{ijt} = 1/(1 + 10^{−(ELO_{it}−ELO_{jt})/a}) (Eq. 6); K=32, a=400, initial rating 500, O ∈ {1, 0.5, 0}.
- Quantity distribution: Quant_H = N(μ_quant, σ_quant²) (Eq. 1), μ_quant, σ_quant = f(ELO_H, ELO_A); Quality: Qual_H = N(μ_qual, σ_qual²) (Eq. 2).
- Simulation: hs = [S_1..S_N], S ~ Qual_H, N ~ Quant_H (Eq. 3); Home Goals = Σ_{i=1..N} I(hs_i > X_i), X_i ~ U(0,1) (Eq. 4).
- Two-stage pipeline: (1) train regressors from (ELO_home, ELO_away) → mean of shot quantity and mean of shot quality (goals/shots); (2) train second-stage models on the first model's training residuals to predict the standard deviation (uncertainty), assuming normal distributions; algorithms tested: LR, KNN, Decision Tree, RF — RF best in development, LR submitted under time constraints.
- Per-row simulation: team ELO drawn from last-10-games mean/std; (n_simulations × 50) matrix sampling shot quality; shot count sampled from quantity distribution (zero out beyond shot count); correct-score via mode of simulated scores (chosen on MAE).
- Betting evaluation: Strategy 1 = bet 1 unit whenever bookmaker odds > model estimate; Strategy 2 = bet 1/(forecasted odds) units when bookmaker odds > model estimate.
## Data sources named
- football-data.co.uk European league matches (results + shots); challenge dataset lacked shots. Code: https://github.com/nvsclub/SpringerSoccerChallengeCode. Validation: last 300 games; test: football-data.co.uk test set, 50-run averages.
## Findings (numbers and facts, not vibes)
- Validation (Table 2): RPS — LR 0.215, KNN 0.213, DT 0.215, RF 0.213; RMSE (median) — LR 1.76, KNN 1.73, DT 1.77, RF 1.74; MAE — LR 1.87, KNN 1.79, DT 1.83, RF 1.80; competition submission LR: RPS 0.216, RMSE 1.70 (baseline: 1-1 draw every game RMSE 1.68, MAE 1.73).
- Test (Table 3, avg of 50 runs): RPS 0.201 vs bookmaker 0.198 (worse than bookmakers); RMSE 1.58 (median) / 1.64 (mode); MAE 1.65 / 1.66.
- Betting rentability: Strategy 1: −0.8% absolute (+4.8% over the −5.6% bookmaker-margin baseline); Strategy 2: +1.1% absolute (+6.7% over baseline).
- Figure 4 bias analysis: systematically underestimates draws — boosting draw likelihood by 27% improves RPS marginally; challenge finish within 5% of top entries.
- Limitations: profitability claim on an unaudited window (no date discipline, no significance test, no stated test-set game count; Strategy 1 is −0.8% absolute); model does not beat bookmaker probabilities; normal assumption mis-specified for skewed count data (truncation instead of negative binomial); quantity/quality independence assumed not tested; validation split leakage not audited.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Generative architecture pattern "forecast latent process distributions, then simulate games" as a cheap alternative to closed-form scoreline models; NFL port: per-team distributions for offensive play counts (negative binomial) and EPA-per-play (normal/Student-t), 10k games/matchup → moneyline/spread/total probabilities from empirical frequencies (OTHER)
- Two-stage uncertainty trick: mean model on labels, then model on absolute residuals to get per-game σ — cheap uncertainty estimator without Bayesian machinery (OTHER)
- Joint-sampling improvement: model pace and efficiency as a joint distribution (copula or EPA-per-play | pace decile) since fast games systematically tilt efficiency — targets the tail-miscalibration the paper's independence assumption leaves on the table (OTHER, INFERENCE: copula experiment is the deep-dive's design, not the paper's)
## Engine-actionable? (yes/no + one-line what)
yes — prototype the NFL simulation pipeline (GB mean models + residual-variance trick + 10k game sims into the calibration stack), gated on walk-forward 2024 moneyline Brier beating bookmaker-consensus Brier by ≥0.002 AND GSE's current engine by ≥0.002.
