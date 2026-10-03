# docs/arxiv-program/research/2026-09-21/arxiv-deep/1518-conformal-win-probability-ncaa.md
## What it is (1-2 sentences)
A deep read of Johnstone & Nettleton (2022, rev. 2026), "Using Conformal Win Probability to Predict the Winners of the Cancelled 2020 NCAA Basketball Tournaments" (arXiv:2208.08598). It builds honest, distribution-free single-game win probabilities from a conformal predictive distribution (CPD) over margin of victory, plus closed-form tournament-field and tournament-win probabilities (Edwards 1991 recursion; Poisson-binomial upset-count field probability), and shows conformal win probability beats logistic/linear-regression win probabilities on calibration and log-loss. Verdict in file: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Conformal p-value: π(y_c, τ) = (n+1)^{-1} Σ_{i=1}^{n+1} [𝕀{R_i(y_c) < R_{n+1}(y_c)} + τ·𝕀{R_i(y_c) = R_{n+1}(y_c)}] (Eq. 11); conformity scores R = y − ŷ (signed residuals, τ=1/2 mid-p-value smoothing); win prob for home team u = 1 − π_w(0, 1/2).
- Coverage guarantee: P(y_{n+1} ∈ C_{1−α,τ}(x_{n+1})) ≥ 1 − α (Eq. 13); requires only exchangeability.
- Normal-linear predictive prob: P(y_{n+1} > s) = 1 − F_{t,n−p}((s − ŷ_{n+1})/(σ̂√(1+x′_{n+1}(X′X)^{−}x_{n+1}))) (Eq. 14).
- Logistic: logit(p_i) = x_i′β, p̂_i = e^{x_i′β̂}/(1+e^{x_i′β̂}) (Eq. 15).
- Calibration definition: E_p̂[|P(ẑ=z | p̂=p) − p|] = 0 (Eq. 21); log-loss: logL(p̂, z) = z·log(p̂) + (1−z)·log(1−p̂) (Eq. 22).
- Tournament-win recursion: q_uJ = q_u(J−1)·Σ_s p_us·q_s(J−1) (Eq. 3) — zero Monte Carlo error.
- Field probability: P(F_u=1) = P(C_u=1) + P(L_u ≤ t_u) − P(C_u=1, L_u ≤ t_u), upset count L_u a Poisson-binomial sum of independent non-identical Bernoullis over 32 conference tournaments (Eqs. 4–8).
- Team strength model: y_uvw = x_uvw′β + ε_uvw with home-court μ plus θ_u − θ_v differentials (Harville-style, Eqs. 16/17).
## Data sources named
Two fully audited new datasets authored for the paper: observed margins of victory for NCAA Division 1 men's and women's basketball, 2014–2015 through 2020–2021 (7 seasons each); schema: home team, away team, margin of victory (home − away), period/week, neutral-site flag. Public via the paper's GitHub repo: https://github.com/chancejohnstone/marchmadnessconformal.
## Findings (numbers and facts, not vibes)
- Pooled relative log-loss (Table 7): Women — conformal 1.00, linear 1.01, logistic 1.02. Men — conformal 1.00, linear 1.02, logistic 1.03. [OTHER, TRUST-SIGNAL]
- Relative log-loss by season×league (Figure 8): conformal best in all combinations except women's 2015–16 and men's 2020–21; in those two cases within 1% of the best method. [OTHER, TRUST-SIGNAL]
- Reliability plots (Figure 7): all three methods comparable at high win probabilities; conformal markedly better calibrated at LOW win probabilities (points sit closest to the diagonal). [TRUST-SIGNAL]
- 2020 case study strengths: women's top — Baylor 40.68, South Carolina 40.30, Oregon 39.32; men's — Kansas 25.26 (rank 1 in all exemplar + expert brackets' tournament-win columns), Gonzaga 22.79, Duke 22.31. [OTHER]
- Tournament-win probabilities stable across brackets (e.g., women's Baylor 0.289/0.289/0.289/0.277/0.303/0.221 across 6 brackets; South Carolina 0.278/0.277/0.278/0.267/0.276/0.304). [OTHER]
- Coverage guarantee needs only exchangeability, not normality; the paper notes exchangeability within a season is shaky (injuries, form, schedule) but empirical calibration holds. [TRUST-SIGNAL]
- GSE overlap (from file): GSE already runs conformal machinery — cqr.ts with a coverage bug caught in 2026-09-21 reads; this paper's CPD-on-MOV is a different object (full predictive CDFs, arbitrary threshold probabilities: win, cover spread) — complementary, not duplicate. [TRUST-SIGNAL]
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Calibrated win probabilities without distributional assumptions (full CDF over margin of victory; moneyline = 1−π(0,1/2), spread-cover = π(−s,1/2)): TRUST-SIGNAL, OTHER.
- Closed-form tournament/bracket probabilities via Edwards recursion (no Monte Carlo error) for playoff brackets: OTHER.
- Low-probability calibration edge (conformal best where underdogs matter): TRUST-SIGNAL.
## Engine-actionable? (yes/no + one-line what)
Yes — build an NFL conformal win-probability head off margin-of-victory CPDs (moneyline prob = 1 − π(0, 1/2), spread-cover at line s = π(−s, 1/2)) with weekly-refit team strengths, gated on ≥1% log-loss beat of logistic plus ≤0.03 calibration error in the 0.05–0.35 predicted bucket.
