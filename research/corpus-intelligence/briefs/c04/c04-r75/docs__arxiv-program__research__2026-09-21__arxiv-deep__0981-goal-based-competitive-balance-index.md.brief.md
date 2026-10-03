# docs/arxiv-program/research/2026-09-21/arxiv-deep/0981-goal-based-competitive-balance-index.md
## What it is (1-2 sentences)
Deep read of Deb (2021), arXiv:2102.09288v1: a Goal-Based Index (GBI) measuring league competitive balance from actual scorelines (not just W/D/L) under an independent-Poisson scoring model, with a formal χ² test of deviation from perfect balance, shown to explain league revenues where standard concentration indices cannot. Verdict ADAPT — adapt as an NFL parity-regime feature and imbalance detector.
## Key metrics/methods (formulas where given, else "not specified")
- Assumption 1: goals X_ijk ~ independent Poisson(λ_ijk).
- Theorem 1: if all λ_ijk = λ, ∃ λ_0 ≈ 0.88 with P(draw) = 1/3; P(Y1=Y2|λ) = e^{−2λ}·I_0(2λ) (modified Bessel I_0).
- Theorem 2: with 3/1/0 points and iid Poisson(λ), league perfectly balanced; goal difference Y_ij = X_ij1 − X_ji0 ~ Skellam(λ,λ) with pmf P(Y_ij=k) = e^{−2λ}·I_{|k|}(2λ); symmetry extends through tiebreakers (GD, GS, head-to-head).
- GBI (Def. 4): GBI = [1/((2N−1)·λ̂)]·Σ_{i≠j}Σ_{k∈{0,1}} (X_ijk − λ̂)², with N = n(n−1) matches and λ̂ = (1/2N)·Σ_{i≠j}Σ_k X_ijk (mean goals per team-match).
- Theorem 3: under perfect balance, (2N−1)·GBI ~ χ²_{2N−1} asymptotically (Taylor expansion of Poisson LR statistic: −2logΛ = 2Σ X_ijk log(X_ijk/λ̂) ≈ (2N−1)·GBI); reject balance if statistic > χ²_{2N−1;α}.
- Benchmarks: C6 = (n/6)·Σ_{j=1}^6 P_(j) (top-6 point share); HICB = n·Σ_i P_i² (Herfindahl on point shares).
- Revenue panel regression: R_lt = α_l + βt + γ·CB_lt + ε_lt (FE and RE, R `plm`, Hausman test).
## Data sources named
5 European leagues (Bundesliga, EPL, La Liga, Ligue 1, Serie A) × 10 seasons (2009–10 to 2018–19); match scorelines from datahub.io; league revenues (billion €) from Deloitte 2020. ~19–29% of matches drawn per league-season.
## Findings (numbers and facts, not vibes)
- Panel regression (Table 3): GBI coefficient −1.52* (SE 0.72) FE / −1.47* (0.72) RE — the only significant balance coefficient. C6: −0.87 (1.22) / −0.69 (1.23), ns. HICB: −1.57 (2.88) / −1.27 (2.90), ns. Trend 0.20–0.21*** all models. Adjusted R² 0.70–0.71 (GBI) vs 0.67–0.68 (C6/HICB).
- Index correlations: GBI–C6 = 0.52, GBI–HICB = 0.46, C6–HICB = 0.90 — GBI captures different information.
- Simulation: GBI test type-I error ≈ 5% at all λ; power > 99% even when only 1 of 20 teams has a different scoring parameter.
- Theoretical draw probabilities d_λ̂ (0.24–0.28) track observed draw shares (0.19–0.34); anomalies flagged: EPL 2013-14/2018-19, La Liga 2010-11, Ligue 1 2010-11, Serie A 2014-15 (|d_λ̂ − D̂| ≥ 0.05).
- Balance findings: Bundesliga/EPL/La Liga never perfectly balanced (except Bundesliga 2017/18, EPL 2010/11, La Liga 2018/19); Ligue 1 imbalanced every season after 2013/14 (PSG/Monaco investment); Serie A most balanced (significant deviation only 4/10 seasons).
- Hausman p = 0.48 (C6), 0.65 (HICB), 0.73 (GBI) → random effects preferred. 5 leagues × 10 seasons = 50 observations.
- λ_0 = 0.88 has no empirical counterpart (real λ̂ ≈ 1.17–1.59) — a mathematical curiosity, not a practical benchmark.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: GBI-style score-overdispersion as an NFL parity-regime feature — low-parity windows → favourites underperform ATS (proposed test: rolling 8-week overdispersion vs subsequent-8-week ATS favourite cover rate).
- OTHER: χ² imbalance detector as a season-narrative content input ("is the 2026 league unusually top-heavy?" detector for the weekly packet).
## Engine-actionable? (yes/no + one-line what)
Yes — compute rolling-window NFL scoring-overdispersion parity feature on nflverse 2000–2025, test whether it predicts ATS favourite underperformance in totals/spread models (gate: significant correlation on holdout), and use the χ² detector as a weekly parity-check content input.
