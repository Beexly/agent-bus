# docs/arxiv-program/research/2026-09-21/arxiv-deep/1675-regime-dependent-factor-glasso.md
## What it is (1-2 sentences)
Lee & Seregina (arXiv:2209.01697, "A Machine Learning Approach to Forecast Combination with Factor Structure and Structural Breaks"): forecast combination that strips common factor errors via PCA, applies Graphical LASSO only to idiosyncratic precision, and adds regime-dependent breaks via kernel-weighted PCA + time-varying GL. Verdict in ledger: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Bates-Granger optimal weights: w = Θι_p/(ι_p'Θι_p), minimizing MSFE(w,Σ)=w'Σw s.t. w'ι=1.
- FGL: e_t = Bf_t + ε_t; GL on residual precision Θ̂_{ε,τ} = argmin tr(W_εΘ_ε) − logdet(Θ_ε) + τΣ_{i≠j} γ̂_{ii}γ̂_{jj}|θ_{ij}|; Θ̂ = Θ̂_ε − Θ̂_εB̂[Θ̂_f + B̂'Θ̂_εB̂]⁻¹B̂'Θ̂_ε (Sherman-Morrison-Woodbury).
- RD-FGL: discrete kernel K_{γt} = γ·1[t≤T₁] + 1[t>T₁] (γ by CV); time-varying GL with α sparsity + β temporal-consistency penalty, solved by ADMM at O(p³)/iter; Bai-Perron break detection.
- Theorem 1: ‖ŵ−w‖₁ = O_P(ϱ_T d_T² s_T); |MSFE(ŵ,Σ̂)/MSFE(w,Σ) − 1| = O_P(ϱ_T d_T s_T).
## Data sources named
- Monte Carlo: p=T^0.85, q=2√log T, mid-sample break in B and Θ_ε.
- ECB Survey of Professional Forecasters, real GDP growth/inflation/unemployment, 1999–2023, p=45–59 forecasters, 2-quarter-ahead.
## Findings (numbers and facts, not vibes)
- RD-FGL in 90% Model Confidence Set for GDP and inflation (both GFC/COVID-broken), MSFE ratios to equal weights as low as ~0.31–0.44 (60–70% MSFE reduction), ranked 1–3.
- For unemployment (no strong breaks) plain FGL beats RD-FGL; "Not Sparse" (τ=0) variant among the worst — idiosyncratic sparsity necessary.
- EW puzzle explained: equal weights emerge under one-factor/homogeneous-idiosyncratic structure, exactly when FGL adds value by detecting deviations.
- Limitations: Gaussian errors assumed (sports errors skewed/heavy-tailed); break detection near sample end unreliable; one NFL season ≈ 18 weeks × K models is noisy for factor estimation; forecaster panel assumed stable.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Forecast-combination weighting for GSE's correlated model zoo: OTHER (ensemble/weighting methodology). Break detection yields interpretable regime-shift dates in the model-error network — e.g. QB-injury-driven structural events: QB-BEHAVIOR-adjacent INFERENCE (structural break around QB changes), tagged as QB-BEHAVIOR event-marker input.
## Engine-actionable? (yes/no + one-line what)
yes — build an FGL/RD-FGL combiner on GSE's model forecast-error panel (PCA strip of common errors → GL on residual precision → Bates-Granger weights, with Bai-Perron break-aware regime weights around mid-season structural events), replacing "last N weeks" heuristics with CV-chosen pre-break discounting.
