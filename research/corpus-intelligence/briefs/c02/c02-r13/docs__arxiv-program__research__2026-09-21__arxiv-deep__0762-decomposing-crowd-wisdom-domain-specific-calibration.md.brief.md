# docs/arxiv-program/research/2026-09-21/arxiv-deep/0762-decomposing-crowd-wisdom-domain-specific-calibration.md

## What it is (1-2 sentences)
Nam Anh Le (2026, arXiv:2602.19520v2) measures, on 292M trades across ~327K binary contracts on Kalshi + Polymarket, whether prediction-market calibration is domain-agnostic or a structured function of domain × time-to-resolution × trade size — fitting per-cell logistic recalibration slopes and an additive decomposition. Ledger verdict: ADAPT — the logistic-recalibration slope framework, horizon/domain decomposition, extremizing transform, and Bayesian measurement-error calibration are directly portable to GSE's market-relative probability calibration.

## Key metrics/methods (formulas where given, else "not specified")
- Cell-level logistic recalibration: logit(P(y_i=1)) = a + b·logit(p_i), logit(x)=log{x/(1−x)}, fit by MLE (L2 C=10); slope b is the calibration measure: b=1 calibrated; b>1 underconfident (compressed toward 50%, favourite–longshot bias); b<1 overconfident (too extreme). Filters: prices [5,95] cents, markets ≥10 trades, ≥200 trades per cell; 216 cells = 6 domains × 9 horizon bins × 4 size bins.
- Log-likelihood: ℓ(a,b)=Σ_i[y_i log π_i + (1−y_i) log(1−π_i)], π_i=σ(a+b·logit(p_i)).
- Additive decomposition (sequential projection Type I): θ(d,τ,s) = μ(τ) + α_d + β_d(τ) + γ_d(s) + ε, with sum-to-zero constraints Σ_d α_d=0, Σ_d β_d(τ)=0 ∀τ, Σ_s γ_d(s)=0 ∀d.
- WLS: φ̂=argmin Σ w[θ−θ̂]², w=1/SE². SS_tot=Σ[θ−θ̄]²; SS_res=Σ[θ−θ̂]².
- Bayesian hierarchical model (NumPyro HMC, 4 chains × 4000 iters, 2000 warmup; max R̂=1.000, min bulk ESS 4,070, no divergences): θ_obs ~ N(μ(τ)+α_d+β_d(τ)+δ_d·(log s − mean log s), σ²); μ(τ)~N(1.0,0.5²); HalfCauchy(0,1) hyperpriors; non-centred parameterisation.
- Recalibration transform: p* = σ(θ̂·logit(p)) = p^θ̂/(p^θ̂+(1−p)^θ̂); θ̂>1 extremises, θ̂<1 moderates. Example: p=0.70, θ̂≈1.83 (politics, 1 week out) → p*≈0.83.
- Sample note: assignment abstract says "353 million trades across 429,000 binary contracts"; paper body reports 292 million trades across ~327,000 contracts (64.7M on 210,608 Kalshi markets + 227.6M on 116,000 resolved Polymarket contracts). (TRUST-SIGNAL — abstract/body discrepancy suggests the abstract describes an earlier sample)

## Data sources named
Kalshi (CFTC-regulated CLOB, binary $1/$0 contracts, 64.7M trades / 210,608 contracts, ~16.8B contracts traded, cutoff 2025-12-31; ms-precision timestamps; 98.6% of past-close markets resolved definitively); Polymarket (Polygon, 227.6M trades / 116,000 resolved contracts, 61.3B contracts traded; ~3-hour timestamp noise; 42.5% "Other" domain). Domains: Kalshi via deterministic ticker-prefix mapping (Sports NFL/NBA/MLB/NHL, Politics, Crypto, Finance, Weather, Entertainment); Polymarket via regex on titles (Sports/Crypto/Politics comparable; Finance thin: 2,516 vs 38,058; Weather/Entertainment negligible). Code + 216-cell calibration matrix CSV: https://github.com/namanhz/prediction-market-calibration. Data framework: https://github.com/Jon-Becker/prediction-market-analysis/; Kalshi API (trading-api.readme.io), Gamma API/Polygon indexer.

## Findings (numbers and facts, not vibes)
- Table 1 domain stats (Kalshi): Sports 55,637 markets / 43.2M trades / median vol 76 / base rate 41.3%; Politics 6,609 / 4.9M / 127 / 40.2%; Crypto 76,181 / 6.5M / 35 / 40.7%; Finance 38,058 / 4.3M / 38 / 37.7%; Weather 26,911 / 4.4M / 74 / 24.0%; Entertainment 7,212 / 1.5M / 60 / 38.0%. (OTHER)
- Trade sizes heavily right-skewed: median 40 contracts; 0.15% of trades (>10,000 contracts) = ~15% of contract volume. (OTHER)
- Variance decomposition (Type I): universal horizon μ 30.2%, domain intercept α 14.6%, domain×horizon β 26.0%, domain×size γ 16.5%; total R²=0.873, adjusted 0.810 (72 params, 216 cells, residual 12.7%). Type II/III: β 26.0%, γ 16.1–16.5% regardless of order. Weighted (1/SE²): total R²=0.995, μ dominates at 0.74. (OTHER)
- F-tests: α F(5,144)=33.16; β F(40,144)=7.40; γ F(18,144)=10.42 — all p<10⁻¹⁶. (OTHER)
- Horizon effect: cell-mean μ(τ) rises from 0.99 (0–1h) to 1.32 (1mo+). (OTHER)
- Kalshi Sports slopes by horizon (Table 3): 1.10/0.96/0.90/1.01/1.05/1.08/1.04/1.24/1.74 — sports near 1 (roughly calibrated) close to the event, drifting underconfident (b>1) far out. (OTHER)
- Bayesian domain intercepts: Politics +0.151 [0.122,0.179]; Sports +0.010 [−0.020,0.039]; Weather −0.086 [−0.115,−0.057]; Entertainment −0.085 [−0.114,−0.056]. Max frequentist/Bayesian discrepancy 0.005. (OTHER)
- Politics scale effect: Large 1.74 vs Single 1.19; Δ=+0.53, 95% trade-level bootstrap CI [0.29,0.75]; market-clustered mean +0.59 CI [0.13,1.29]. Sports Δ=+0.07 [−0.07,0.26] (null). Polymarket politics Δ=+0.11 [−0.15,0.39] (not significant) — the scale finding is platform-specific to Kalshi. (TRUST-SIGNAL — highest-leverage trading finding does not replicate cross-platform)
- Contract-weighted vs trade-weighted slopes in Politics: contract-weighted exceeds trade-weighted by mean 0.33 (peak 0.54 at 2d–1w); Polymarket gap collapses to +0.05. (TRUST-SIGNAL — aggregation weighting changes the measured calibration)
- Posterior predictive: 208/216 cells (96.3%) inside 95% intervals. (OTHER)
- Polymarket cross-platform means (7 reliable bins): Politics 1.313 vs Kalshi 1.637; Sports 1.082 vs 1.150; Crypto 1.049 vs 1.114. (OTHER)
- Robustness (Appendix A): total R² 0.861–0.885 across price ranges; identical at C=1/10/100 and with volume≥100 filter. (OTHER)
- Temporal stability of the decomposition untested — "an open question" (limitation §7.5). (TRUST-SIGNAL — measurement may drift)
- INFERENCE: the universal horizon drift (0.99 → 1.32) plus sports' own far-out drift to 1.74 is the direct analogue of GSE futures/prop miscalibration far from kickoff — recalibration θ must be horizon-conditional.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
Tagged inline above.

## Engine-actionable? (yes/no + one-line what)
Yes — fit per-cell logistic recalibration slopes on engine probabilities × realised outcomes sliced by sport × days-to-event × liquidity, and serve the extremizing transform p* = p^θ̂/(p^θ̂+(1−p)^θ̂) before Kelly sizing or publication, refit monthly with slope drift as a monitor.
