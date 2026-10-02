# docs/arxiv-program/research/2026-09-21/arxiv-deep/1679-factor-graphical-models-forecast-errors.md

## What it is (1-2 sentences)
A factor graphical model (FGM) for combining forecasts: strip common error factors (via PCA) from the forecast-error panel, estimate the sparse precision of the idiosyncratic residuals with GLASSO, and reconstruct the full precision via Sherman–Morrison–Woodbury to form optimal Bates–Granger weights. Corpus verdict: ADAPT — the deployable static core of the regime-dependent extension (ledger 1675), arguably the first version to implement given GSE's short samples.

## Key metrics/methods (formulas where given, else "not specified")
- Factor error model (3.1): e_t = Bf_t + ε_t; Σ = BΣ_fB′ + Σ_ε.
- Optimal weights (3.7): w = Θι_p/(ι_p′Θι_p); MSFE(w,Σ) = w′Σw. Weight-estimation error bound (3.9): ‖ŵ−w‖₁ controlled by ‖(Θ̂−Θ)ι‖₁ — precision-matrix consistency ⟹ weight consistency.
- SMW reconstruction (4.1/4.3): Θ = Θ_ε − Θ_εB[Θ_f + B′Θ_εB]⁻¹B′Θ_ε (sample analogue in 4.3).
- Factor GLASSO (4.2): Θ̂_{ε,λ} = argmin trace(W_εΘ_ε) − logdet(Θ_ε) + λΣ_{i≠j}d̂_{ε,ii}d̂_{ε,jj}|θ_{ε,ij}|, W_ε = Σ̂_ε + λI.
- EBIC tuning: λ_EBIC = argmin_λ {−2l(Θ_{ε,λ}) + log(T)·df(Θ_{ε,λ}) + 4·df(Θ_{ε,λ})·log(p)·η}, η=1. (CV overfits per Liu et al. 2010; STARS overselects per Zhu & Cribben 2018.) GIC for nodewise-regression λ_j.
- Factor estimation: PCA on the error panel; number of factors q chosen by Bai–Ng IC1 (empirically usually q̂=1).
- Theorems (§5): consistency of Θ̂ in operator and ℓ₁/ℓ₁ norms, of ŵ in ℓ₁, and of the estimated MSFE.
- Two variants: Factor GLASSO (Algorithm 3) and Factor nodewise regression / Factor MB (Algorithm 4).
- Key diagnostic: plain GLASSO under factor structure shrinks almost all partial correlations to zero, degenerating the estimate — never run vanilla GLASSO on raw model-error precision.

## Data sources named
- Monte Carlo: 100 simulations.
- Macro application: McCracken–Ng 128 monthly series, 1960:01–2020:07, T=726; rolling 120-obs window; p=120 FAR models; 7 indicators (INDPRO, S&P500, CPI, consumption, M1, UNRATE, FEDFUNDS).

## Findings (numbers and facts, not vibes)
- Monte Carlo (100 sims): Factor GLASSO and Factor MB dominate EW, plain GLASSO, and plain nodewise regression in precision-matrix error and weight error; Factor GLASSO's weights converge faster even though Factor MB's precision matrix converges faster in matrix norms. EW's weight estimate shows no convergence (Smith & Wallis 2009) yet remains decent on MSFE. FGM wins even in a low-dimensional setup deliberately favorable to EW/non-factor methods.
- Macro application: Factor GLASSO and Factor MB beat EW, GLASSO, and nodewise regression across horizons; the factor benefit is larger at longer horizons (h≥2); Factor GLASSO > Factor MB for most series.
- Smoking gun: plain GLASSO is worse than EW for FEDFUNDS, while Factor GLASSO beats EW — the gain comes from the factor structure, not from graphical models per se.
- q̂ chosen by Bai–Ng IC1 was usually 1 in the macro application.
- GSE-specific predictions in the file: (a) factor benefit grows with horizon ⇒ FGL should help multi-week/futures ensembles more than single-game; (b) q̂ will likely be small (1–2).
- Limitations: static loadings (no break adaptation — 1675's regime-dependent extension supersedes when breaks are detectable); Gaussian/linear factor assumptions; PCA factor estimates add noise at small T; weights are unconstrained Bates–Granger (can go extreme/negative — consider convex constraints per Conflitti et al. 2015); macro evidence only, no sports validation.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Strip common error factors (market-wide mispricing weeks, weather slates, injury-wave weeks that make all models err together) from GSE's component-model error panel before estimating combination weights — SCHEME (regime/error-structure modeling) + OTHER (ensemble machinery).
- Bates–Granger optimal weights w = Θι/(ι′Θι) from factor-aware precision as the principled alternative to equal weighting — TRUST-SIGNAL (evidence-grounded model weights).
- Factor-benefit-grows-with-horizon finding applied to GSE's multi-week/futures ensembles — SCHEME (horizon-dependent combination).
- Plain-GLASSO degeneracy diagnostic as a built-in check for factor structure in GSE's model-error panel — OTHER (methodology guardrail); INFERENCE: a check like this protects the engine from silently degenerate precision estimates.
- Tracking q̂ (Bai–Ng IC1) stability across seasons: q̂≈1–2 supports the static version, drift supports upgrading to the regime-dependent extension — SCHEME (regime detection).

## Engine-actionable? (yes/no + one-line what)
Yes — deploy static FGL as the first ensemble-weighting version: PCA-strip common error factors from the component-model error panel, EBIC-tuned weighted GLASSO on idiosyncratic residuals, SMW reconstruction, Bates–Granger weights; pass criterion: Factor GLASSO beats EW and plain GLASSO out-of-sample with the edge widening at longer horizons; add the regime-dependent extension (1675) once enough post-break data accumulates.
