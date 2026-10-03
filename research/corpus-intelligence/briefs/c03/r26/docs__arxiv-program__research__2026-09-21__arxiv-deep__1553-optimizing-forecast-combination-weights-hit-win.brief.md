# docs/arxiv-program/research/2026-09-21/arxiv-deep/1553-optimizing-forecast-combination-weights-hit-win.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2503.20082 (van Eijk & Ghosh 2025: "Optimizing Forecast Combination Weights Using Exponentially Weighted Hit and Win Rate Losses"). Trains forecast-combination weights on 0-1 hit/win-rate losses vs. a consensus (directional outperformance) using a Cauchy-CDF surrogate optimized with COBYLA, with exponentially time-discounted weights and Bayesian missing-data imputation; the "beat-the-consensus" framing is the GSE analogue of beat-the-closing-line. Verdict: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Linear pool: ŷ_t(ω,ω₀) = ω₀ + Σⱼ ωⱼ x_{t,j}, ω ∈ simplex S_m, ω₀ ∈ ℝ free intercept.
- Discount weights: p_t(λ) = e^{−λ(L−t)}(1−e^{−λ})/(1−e^{−λL}) (Eq. 1); λ=0 ⟺ equal weighting.
- Hit target: ỹ_t = I(y_t > ŷ_t(ω̄)) (Eq. 2, beat/miss vs. equally-weighted consensus); hit-rate loss = Bernoulli NLL (Eq. 3).
- Relative bias: R_t = (y_t − ŷ_t(ω,ω₀))/(y_t − ŷ_t(ω̄)); win rate = Pr(|R_t|<1); win-rate loss = I(|R_t|−1>0) (Eq. 4).
- Cauchy-CDF surrogate for win loss: (1/L)Σ_t p_t(λ)·[(1/π)arctan((z_t−z₀)/γ̂)+1/2], z_t=|R_t|−1, z₀=0; γ̂ solved via uniroot so support [z_min,z_max] covers 1−ϵ of mass (ϵ=0.005); Cauchy preferred over logistic as tighter indicator approximation.
- Three estimators: (a) QP — exponentially discounted weighted least squares via solve.QP, λ grid {0,0.25,0.5,0.75,1}, row-mean imputation; (b) full hierarchical Bayesian (y_t ~ N(w₀+Σxω, σ²/p_t(λ)); ω~Dir(1); w₀~N(0,1000); λ~U(0,1) learned; σ²~InvGamma(0.1,0.1); AR(1) missing-data imputation, rjags 2 chains × 30k, 40k draws); (c) NLP — direct hit/win-loss optimization with COBYLA (nloptr), init ω=1/m, ω₀=0.
- Lemma 1: inverse-variance weights w*_j=(1/σ²_j)/Σ_k(1/σ²_k) strictly beat equal weights when variances differ; correlated extension ω*=(1'Σ⁻¹1)⁻¹Σ⁻¹1 when Σ⁻¹1⪰0.
## Data sources named
I/B/E/S analyst forecasts via WRDS (proprietary subscription): top 25 tech companies by market cap (Yahoo Finance), 2 dropped for <9 years history → 23 companies; quarterly revenues 2015–2023 (36 quarters), one-quarter-ahead analyst forecasts, log scale (y_t=log(A_t), x_{t,j}=log(F_{t,j})). No repo/code URL (promised post-publication). Software: quadprog, Matrix (nearPD), rjags/JAGS, coda, nloptr. Data not replicable by GSE, but the method is data-agnostic.
## Findings (numbers and facts, not vibes)
- Rolling-window CV: T=36 quarters, window L=12 → F=24 folds, strictly time-ordered; analyst filter ≥90% presence; baselines: equally-weighted consensus, naïve (ŷ_{t+1}=y_t), seasonal naïve (ŷ_{t+1}=y_{t−3}); externals: AKAnomics 66% hit rate, Fleder & Shah 2019 57.2% win rate over 306 predictions.
- Hit rates (mean over λ): QP 79.7%, NLP 79.2%, Bayesian 82.4%; best single: NLP λ=0 at 83.2%. Benchmarks: naïve 39.7%, seasonal naïve 28.1%, AKAnomics 66%. Standouts: ANET/CRM/KLAC 100% (all methods); IBM 45.9–58.3% (worst).
- Win rates (mean over λ): QP 61.2%, NLP 68.7%, Bayesian 62.7%; best single: NLP λ=0 at 71.9%. Benchmarks: naïve 17.0%, seasonal naïve 6.7%, Fleder & Shah 57.2% (552 predictions per model here).
- Discounting finding: weak evidence for λ>0; Bayesian posterior mean λ≈0.098–0.099, median≈0.082, mode≈0; NLP/QP best at λ=0. Paper: "setting λ=0 would possibly provide the best forecasts."
- Weight structure (CSCO fold 24): QP weights sparse — 1.000 on one analyst at λ=0 (winner-take-all); NLP (hit) and Bayesian weights ≈ uniform (~0.1); NLP (win) ≈ uniform. QP sparsity "likely illustrates why quadratic programming did not outperform."
- All tests span COVID-19 (2015–2023), i.e., through market stress — a robustness plus.
- Limitations: consensus-relative targets defined against the equally-weighted consensus of the same inputs (degenerate constant shift could game the hit target; win-rate metric cleaner); AKAnomics comparison uncontrolled (undisclosed universe); narrow large-cap tech universe; λ-grid results are research-setting (production commits to one λ); row-mean vs. Bayesian imputation asymmetry; analyst ≥90% filter introduces mild survivorship bias; λ≈0 finding may not transfer to sports (recent-form discounting usually valuable); Cauchy γ̂ refit per window with no stability analysis.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Beat-the-consensus framing (hit rate = correct beat/miss sign vs. consensus; win rate = closer than consensus) is the exact GSE analogue of beat-the-closing-line — TRUST-SIGNAL
- Cauchy-CDF surrogate for discontinuous 0-1 win-rate loss enables direct optimization of CLV-style objectives — a portable technique for training GSE's combiner — OTHER (combiner training)
- NLP win objective beats QP/Bayes on win rate (68.7% vs 61.2%/62.7%); QP's winner-take-all sparsity underperforms uniform-ish weights — OTHER
- Bayesian AR(1) missing-data imputation relevant if GSE ever combines patchy third-party pick sources — OTHER (low priority, engine-only currently)
- Asymmetric win-rate loss improvement experiment: magnitude-weight the surrogate by |actual − consensus| to optimize expected CLV, not just win count — OTHER
## Engine-actionable? (yes/no + one-line what)
Yes — train GSE's combiner on the Cauchy-CDF surrogate of a beat-the-consensus win loss (simplex weights + intercept, COBYLA/SLSQP, recency discount λ tuned on validation — expect λ>0 in sports unlike the paper), with acceptance gates: win rate vs. consensus ≥55%, beat-the-close ≥52.5% on 2025 holdout, Brier no worse than +1% vs. simple average; ~1 engineer-week Python prototype on engine logs + The Odds API closing lines + nflverse.
