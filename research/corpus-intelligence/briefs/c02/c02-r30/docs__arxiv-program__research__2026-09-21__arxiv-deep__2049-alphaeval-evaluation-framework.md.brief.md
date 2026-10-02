# docs/arxiv-program/research/2026-09-21/arxiv-deep/2049-alphaeval-evaluation-framework.md
## What it is (1-2 sentences)
AlphaEval (arXiv:2508.13174, Berkin Chen et al. 2025) is a backtest-free, parallelizable 5-dimension evaluation framework for formula alpha mining, intended as a fast pre-filter to select candidate signals before full backtesting. File verdict: ADAPT — port it as the mining loop's fitness score ahead of the MinervaScore gate.

## Key metrics/methods (formulas where given, else "not specified")
- Predictive Power Score: PPS = β·IC + (1−β)·RankIC, β=0.5; IC = (1/T)Σ_t IC_t (Pearson), RankIC = average Spearman (eqs. 5–10).
- Temporal Stability — Relative Rank Entropy: RRE = 1/(T−1)·Σ_{t=2..T} 1/(1+KL(S_t‖S_{t−1})), rank vectors converted to discrete distributions p(S_{t,i}) = R[S_{t,i}]/Σ_j R[S_{t,j}] (eqs. 11–13); higher = more consistent rankings, lower turnover.
- Robustness — Perturbation Fidelity Score: PFS_D = Corr(S, S′) where S′ = α(X+ε), Spearman between original and perturbed rankings (eq. 14); PFS = min{PFS_N(0,σ²), PFS_t(ν)} over Gaussian and heavy-tailed t(df=3) noise (eq. 15); noise σ = average daily volatility of the market index.
- Financial Logic Score: LLM rates each alpha's symbolic expression/description for logical coherence, economic intuition, interpretability; parsed to a number, averaged over the set.
- Diversity — Diversity Entropy: flatten m alpha signals over (t,n), covariance C ∈ R^{m×m}, eigenvalues λ_i → p_i = λ_i/Σλ_j; DH = (−Σ p_i log p_i)/log m (eqs. 16–17); higher = variance spread across complementary signals.
- Integrated AlphaEval score (weighted combination) used to rank/select alphas.

## Data sources named
Qlib platform: A-share and U.S. stock datasets (Qlib benchmarks). Miners evaluated: GP, AutoAlpha, AlphaEvolve, AlphaGen, AlphaQCM, AlphaForge, FAMA, AlphaAgent (+ random reference). Code open: https://github.com/BerkinChen/AlphaEval.

## Findings (numbers and facts, not vibes)
- Table 2 (A-share; Predictive↑/Stability↑/Robustness↑/Diversity↑/Logic↑): GP 0.017/0.724/0.983/0.693/63.5; AutoAlpha 0.027/0.774/0.971/0.946/64.0; AlphaEvolve 0.028/0.975/0.688/0.897/63.0; AlphaGen 0.034/0.978/0.997/0.650/59.0; AlphaQCM 0.029/0.975/0.996/0.477/62.0; AlphaForge 0.040/0.977/0.677/0.743/62.5; FAMA 0.031/0.868/0.992/0.831/69.0; AlphaAgent 0.041/0.779/0.415/0.812/70.0; Random 0.009/0.844/0.846/0.981/60.0. [TRUST-SIGNAL, OTHER]
- Reading recorded in file: GA-based miners most robust/stable; RL-based stable + robust but low logic; LLM-based best predictive + logic, weaker robustness. [OTHER]
- Fig. 2: portfolios built from integrated-AlphaEval-selected alphas beat any single-dimension selection on cumulative returns. [TRUST-SIGNAL, OTHER]
- Speedup vs. backtesting claimed "significant" (exact factor in the paper's appendix; not extracted in the file — not specified). [OTHER]
- "Consistency with backtesting" asserted without a reported rank-correlation number in the extracted text. [TRUST-SIGNAL]
- Leakage/limitation facts from the file: LLM Logic Score is subjective/model-dependent with no inter-rater reliability reported; PFS perturbations are synthetic input noise and may not reflect real regime breaks; DH can be maximized by mutually anti-correlated junk signals (diversity ≠ quality); no multiple-testing correction anywhere — AlphaEval scores selection quality, not statistical significance. [TRUST-SIGNAL]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Table 2 miner comparison and dimension profiles → TRUST-SIGNAL, OTHER
- Fig. 2 integrated-selection cumulative-return result → TRUST-SIGNAL, OTHER
- Asserted-but-unnumbered backtest consistency and speedup claims → TRUST-SIGNAL, OTHER
- Limitations list (LLM subjectivity, synthetic-noise robustness, DH≠quality, no multiple-testing correction) → TRUST-SIGNAL
- No QB-BEHAVIOR, COACHING, OL, or SCHEME content: this is signal-screening infrastructure.

## Engine-actionable? (yes/no + one-line what)
Yes — port the 5-dimension scorecard as the signal-mining loop's fitness (PPS on ATS-cover residual, week-to-week RRE, PFS under perturbed/dropped-week data, LLM sports-plausibility logic score, eigenvalue DH), plus the file's proposed 6th dimension Market Orthogonality = 1 − |Corr(signal, closing-line-implied edge)|, with the acceptance gate: integrated-score selection must beat IC-only selection by ≥ 0.002 Brier on 2022–2025 and run ≥ 10× faster than walk-forward backtesting.
