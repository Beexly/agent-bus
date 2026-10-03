# arxiv-program/research/2026-09-21/arxiv-deep/0174-beating-the-market-with-a-bad.md
## What it is (1-2 sentences)
Formalizes the market taker's advantage over the market maker and proves that a strictly inferior price-predicting model can generate systematic profits by training with a decorrelation objective that penalizes agreement with the market alongside prediction error. Verdict in the source: ADOPT — the MSE* decorrelation training objective is directly implementable in GSE's model training and complements fractional-Kelly staking.
## Key metrics/methods (formulas where given, else "not specified")
- Kelly wealth growth decomposition (Eq. 32): W_G = D_KL(R||M) − D_KL(R||T); positive Kelly returns ⟺ XENT_Ω(R,T) < XENT_Ω(R,M).
- Ideal decorrelation loss (Eq. 59): MSE*_Ω(R,M,T) = (1/|Ω|) Σ_i (t_i − r_i)² + γ·(t_i − r_i)(m_i − r_i), γ > 0.
- Betting-adapted loss (5.4): MSE*_Ω(R,M,T) = E[(T − R)² − γ·(T − M)²], m_i = bookmaker probabilities from odds; penalizes estimates too close to market price; γ trades accuracy vs decorrelation.
- Buy-low-sell-high (Eq. 33): m_i < t_i ⟹ bet home; m_i > t_i ⟹ bet away. Expected returns: betting (Eq. 35): E_R[ρ_i] = r_i/m_i − 1 / (1−r_i)/(1−m_i) − 1 (rendering uncertain).
- Strategies: (i) unif — uniform unit stakes on positive-EV opportunities; (ii) sharpe — Markowitz MPT maximizing Sharpe (Eqs. 20–21) with E_R[w_i] = (r_i/m_i − 1)·f_i (61) and Bernoulli variance Var_R[w_i] = (1−r_i)r_i f_i²/m_i² (62), sequential quadratic programming, one side per game, positive-estimated-EV only.
- Theorems: for unbiased estimators, Corr[T,M|R] = −1 maximizes essential profitability (Thm 4.1); fractional Kelly benefits from decorrelation while full Kelly is blind to it (4.4–4.4.1); MSE* admitted as intuition not formal derivation (7.1).
## Data sources named
NBA box-score data 2000–2014 (public NBA box scores; features = aggregated basic player stats for home/away from preceding matches + preceding seasons); Pinnacle closing odds 2010–2014 (margin ≈ 2.5%); multiple bookmakers 2000–2010 (margin ≈ 4.5%). Evaluation: seasons 2006–2014, 9,093 games, chronological train/test. Simulated: multivariate Beta (R,T,M) triples, Var(M) = 0.054, Var(R) = 0.08, correlations over {0.85, 0.90, 0.95}, 30 bets/round, 10,000 rounds. No code link stated.
## Findings (numbers and facts, not vibes)
- Real-data Table 3 (means ± SE over 10 runs, 2006–2014): without odds feature, γ | W_sharpe | W_unif | Accuracy: 0.0 | 0.38±0.10 | −5.12±0.11 | 67.62; 0.2 | 1.05±0.12 | −3.31±0.13 | 67.47; 0.4 | 1.74±0.14 | −1.73±0.18 | 67.15; 0.6 | 1.32±0.14 | −0.61±0.28 | 66.19; 0.8 | 1.10±0.29 | −0.39±0.22 | 64.93; 1.0 | −1.92±0.81 | −2.59±0.57 | 61.30. Best at γ=0.4, accuracy below the bookmaker's 69±2.5.
- With odds feature: γ=0.4 | 1.49±0.10 | −1.30±0.12 | 67.48 (also best). unif never profitable on real data (best −0.39±0.22).
- Model–market Pearson correlation: 0.87 (no-odds) vs 0.95 (with-odds) — the odds feature raises correlation.
- Simulation Table 4 (profits in %): at Corr(T,R)=0.85: Corr(T,M)=0.85 → W_sharpe 11.15%, W_unif 3.14%, acc 70.11%; 0.90 → 6.14%, 0.52%, 70.05%; 0.95 → −1.73%, −5.46%, 70.08% — profits decay monotonically as Corr(T,M) rises at fixed accuracy.
- Example 4.2: half-Kelly on decorrelated estimates yields W_G = 0.038 > 0 vs 0 on coincident estimates.
- Caveats: decorrelation can hurt if the model is already superior to the market (4.3); theory omits the spread; profit units in Table 3 not normalized.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — bettor-side training objective: MSE* decorrelation loss for GSE's win-probability model, traded off with accuracy via γ, then staked with fractional Kelly.
- TRUST-SIGNAL — INFERENCE: the regime check (verify the model is NOT already XENT-superior to the market before applying γ > 0) is a stated adoption precondition in the source — measuring model-vs-market XENT is itself a calibration-honesty gate.
## Engine-actionable? (yes/no + one-line what)
Yes — ADOPT: add a −γ·(t_i − m_i)² decorrelation penalty (m_i = de-vigged consensus market probability) to the win-probability training loss, sweep γ ∈ {0.2, 0.4, 0.6} on a 2020–2024 chronological test with sharpe-style staking, only if the model is not already XENT-superior to the market.
