# arxiv-program/research/2026-09-21/arxiv-deep/1490-forecast-combination-reconciliation.md
## What it is (1-2 sentences)
Proves forecast reconciliation for hierarchical/grouped time series *is* forecast combination: for each bottom-level series, hierarchy constraints generate a candidate-forecast set, and combining them spans exactly the unbiased linear reconciliations — MSE-optimal weights recover MinT, and the full problem separates into per-series Bates–Granger problems. Builds a modular finite-sample framework (covariance shrinkage, egalitarian ridge/LASSO weight penalties, joint vs separate estimation) tested on Australian electricity and labor-force data.
## Key metrics/methods (formulas where given, else "not specified")
- Coherence y_t = S·b_t; MinT closed form P*_mint = (S′Σ_h⁻¹S)⁻¹S′Σ_h⁻¹
- Theorem 3.1: P satisfies PS=I ⟺ P = Φ(w)C (combination ≡ unbiased linear reconciliation)
- Proposition 3.3 (separability): per-series w_i^sep = (C⁽ⁱ⁾Σ_hC⁽ⁱ⁾′)⁻¹1/(1′(C⁽ⁱ⁾Σ_hC⁽ⁱ⁾′)⁻¹1) — exactly Bates–Granger (1969); Proposition 3.4: Φ(w*)C = P*_mint (MinT IS per-series optimal combination)
- Framework modules: covariance estimator (Raw/Diag-shrink/Factor-shrink/OLS), weight penalty (eRidge toward equal weights, eLASSO), implementation (Joint/Separate); existing MinT variants arise as unpenalized special cases
## Data sources named
Australian electricity generation hierarchy (daily, Jun 11 2019–Jun 10 2020, 366 days; 67 rolling windows × h=1…7); Australian labor-force grouped data (monthly; 21 rolling windows × h=1…12)
## Findings (numbers and facts, not vibes)
- Electricity overall RMSE: Factor+Joint 11.08 vs MinT(Shrink) 11.09 (unpenalized best); Factor+Separate+eRidge 11.06 — matches or improves on strongest benchmark at every hierarchy level
- LCC worse than unreconciled Base at Levels 1–2; proposed framework uniformly lower overall RMSE than LCC-type methods
- Gains over MinT(Shrink) are ~0.3% relative — headline is interpretability + modularity, not big accuracy; labor-force Table 3 numbers garbled in extraction (qualitative support only)
- Assumes unbiased base forecasts (breaks with biased sports models); Σ̂_h=Σ̂₁ one-step proxy unvalidated; point forecasts only
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: principled multi-source combiner — per-market Bates–Granger weights over candidates {engine prob, de-vigged market prob, Elo prob, ratings prob} with factor-shrinkage covariance + egalitarian ridge toward equal weights; coherence where GSE hierarchies exist (game win probs → season win totals; player props → team totals; spread+total vs moneyline no-arbitrage)
## Engine-actionable? (yes/no + one-line what)
Yes — implement per-target shrunk Bates–Granger combination (~1 week, weights recomputed weekly); gate: beats equal weights AND best single source by ≥0.002 Brier on held-out 2026 in ≥2 of 3 markets (spread/total/moneyline), else keep equal weights; improvement: regime-dependent weights (early- vs late-season) exploiting the NFL efficiency curve.
