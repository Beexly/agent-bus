# arxiv-program/research/2026-09-21/arxiv-deep/0546-low-rank-for-rank-uncertaintyaware-taskspecific.md
## What it is (1-2 sentences)
arXiv:2605.29395v2 (MIT/Purdue) — a low-rank task×model ability matrix Θ⋆ with entrywise guarantees and simultaneous rank confidence sets (three-way top-K certification) under sparse pairwise BTL comparisons, validated on synthetic data and the LM Arena 140K dataset. Verdict in the file: ADAPT — port the low-rank context×team rating matrix and the three-way pick-certification machinery to GSE's ranking/pick-confidence tiers.
## Key metrics/methods (formulas where given, else "not specified")
- Low-rank Θ⋆ ∈ R^{d_t×d_m}; BTL link Pr(Y_i=1|X_i) = σ(Θ⋆_{t_i,m_i} − Θ⋆_{t_i,m'_i}); row-centering Θ⋆1=0.
- Estimation: nuclear-norm-penalized BTL initializer → row-wise pairwise-logistic refinement; entrywise bound ‖Θ̂−Θ⋆‖∞ ≤ ε_n = C·poly(a,μ,r,κ,B)·√(d̄ log^c(nd̄)/n).
- Hamming: Ham_{K,t} ≤ R_{K,t}(2ε_n; Θ⋆); exact top-K recovery if K-gap Δ_K(t) = Θ⋆_{t,(K)}−Θ⋆_{t,(K+1)} > 4ε_n.
- Debiased one-step estimator: ψ̂_Γ = ⟨Γ,Θ̂⟩ + (1/n)Σ_i (Y_i−σ(η̂_i))⟨Ĥ_Γ, X_i⟩; efficient variance V_eff(Γ) = ⟨P_T Γ, A^{−1}P_T Γ⟩; joint covariance Σ_jk = ⟨P_T Γ_j, A^{−1}P_T Γ_k⟩ (non-diagonal).
- Rank confidence band: R̂_t(m) = [1+A_t(m), d_m−B_t(m)], A_t(m) = certified-above count, B_t(m) = certified-below count; multiplier bootstrap critical value c_{t,m}(1−α) from max of correlated studentized errors.
- Three-way top-K: certify m ∈ S⋆_K(t) if d_m−B_t(m) ≤ K; certify m ∉ S⋆_K(t) if 1+A_t(m) > K; else unresolved. Extends simultaneously across tasks (Cor. 5.2) and to inner/outer top-K set confidence.
- Key assumptions: exact/approx low rank, μ-incoherence, near-uniform sampling; auxiliary-sample initializer (n_aux ≍ n) + three-way sample splits are load-bearing; signal floor ‖Θ⋆‖_F ≥ c_sig√d⋆.
## Data sources named
Synthetic: d_t=d_m=50, true rank r⋆=5, α=5, n ∈ {4,000, 8,000, 16,000, 32,000} BTL comparisons, N=200 trials, 6-fold cross-fitting. LM Arena 140K dataset (public, Hugging Face); top-30 most-compared models; d_t=10 task categories; n=81,150 comparisons; rank r=3 (top-3 singular values capture >94% energy); subsampling f ∈ {0.02,0.05,0.10,0.20,0.50,1.0}. Ground truth T⋆ = full-data per-task BTL MLE (itself an estimator). No code released.
## Findings (numbers and facts, not vibes)
- Estimation: at n=4,000, per-task BTL Frobenius error >1000 — nearly two orders of magnitude above the joint estimator.
- Table 1 top-K Hamming (K=5, mean over 50 tasks): joint 0.482/0.339/0.237/0.167 vs per-task BTL 0.730/0.617/0.479/0.360 at n=4k/8k/16k/32k. K=10: joint 0.388/0.257/0.181/0.129 vs 0.596/0.489/0.366/0.269.
- Table 3 (single-task rank CI, n=16,000): joint coverage 1.000, certification rate 0.289, mean width 36.7; per-task BTL 0.967 / 0.081 / 44.6.
- Table 4 (simultaneous, 50 tasks, n=32,000): joint resolves 0.315 (5× per-task BTL's 0.056), width 31.3 vs 46.4, both at nominal coverage.
- Table 5 (Arena): at f=0.50 crossover — dense data per-task BTL slightly wins (0.198/0.134 vs 0.221/0.144); misspecified rank-3 becomes the binding constraint.
- Table 6 (gemini-2.5-pro, math, true rank 1): f=0.20 — joint certifies top-10 on 22% of trials (width 15.9) vs BTL 0%; f=1.0 both 100% (7.4 vs 6.1). Table 7: simultaneous across 10 tasks at f=1.0 — joint resolves 0.866 (width 6.7) vs BTL 0.610 (9.1); on the analytical task, BTL never certifies top-10 at any f, joint certifies on every trial at f=1.
- Gaussianity check: ρ_emp=0.365 vs ρ_thy=0.443; 95% ellipse 0.950 coverage.
- GSE implementation spec in file: (1) context-specific team-strength matrix — rows = 8 game-context clusters (spread/total/rest/dome/divisional or per-week slices), columns = 32 teams, outcomes as BTL comparisons, borrow strength for early-season sparsity; data nflverse 2015–2025; ~2 weeks. (2) Three-way pick certification — simultaneous rank CIs via multiplier bootstrap over correlated pick-return gaps; publish picks as certified top-K / certified non-top-K / unresolved instead of bare lists; ~2 weeks.
- Reproducible test: rolling-origin (fit 2020–2022 → predict 2023; refit → predict 2024); compare next-season SU log-loss of low-rank context ratings vs per-context BTL; top-8 Hamming per context vs SRS; rank-CI width/certification rate.
- Acceptance gate: ADOPT low-rank estimator if it beats per-context BTL on next-season SU log-loss by ≥0.003/game over 2023–2024 AND strictly narrower mean rank CIs at ≥ nominal coverage; ADOPT three-way certification for publication only if "certified top-K" beats "unresolved" picks on ATS ROI by ≥2pp on 2022–2024 backtests. REJECT otherwise. Contexts=8, K=8, α=0.05 fixed in advance.
- Improvement experiment: low-rank ordered-probit/margin model — P(margin > s) = Φ((Θ_{t,m}−Θ_{t,m'}−s)/τ), keeping the same pipeline; hypothesis: margin info tightens K-gap resolution and certifies top-K membership weeks earlier.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — team-strength estimation and pick-confidence methodology; no QB/coaching/OL/scheme content. (Potentially SCHEME-adjacent via the 8 game-context clusters, but the contexts are situational, not scheme-based — tagged OTHER, not SCHEME.)
## Engine-actionable? (yes/no + one-line what)
Yes — prototype the low-rank context×team rating matrix on nflverse 2015–2025 and test whether it beats per-context BTL on held-out SU log-loss; if so, port the three-way top-K certification to replace bare pick rankings.
