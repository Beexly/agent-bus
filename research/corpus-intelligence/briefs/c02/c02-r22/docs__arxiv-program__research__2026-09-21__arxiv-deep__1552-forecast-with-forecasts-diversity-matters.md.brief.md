# docs/arxiv-program/research/2026-09-21/arxiv-deep/1552-forecast-with-forecasts-diversity-matters.md
## What it is (1-2 sentences)
A deep read of Li, Kang, Li, Zhang & Petropoulos (2021), "Forecast with Forecasts: Diversity Matters" (arXiv:2012.01643). It learns ensemble combination weights from pairwise disagreement (diversity) among pool members' own out-of-sample forecasts via XGBoost + softmax, replacing FFORMA's 42 hand-crafted time-series features — diversity-only matches FFORMA, and diversity+FFORMA features (FD) significantly beats all baselines. Verdict in file: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Ambiguity decomposition (Krogh & Vedelsby, 1994): MSE_comb = Σᵢ wᵢ MSEᵢ − Σ_{i<j} wᵢ wⱼ Div_{i,j}, Div_{i,j} = (1/H) Σ_h (f_{ih} − f_{jh})².
- Scale-normalized diversity (Eq. 3): Div_{i,j} = [Σ_h (f_{ih} − f_{jh})²] / [Σ_{p<q} Σ_h (f_{ph} − f_{qh})²] — sums to 1 across pairs.
- Weight optimization (Eq. 4): argmin_w Σₙ Σᵢ w(Divₙ)ᵢ · Errₙᵢ; softmax parameterization w(Divₙ)ᵢ = exp{y(Divₙ)ᵢ}/Σᵢ exp{y(Divₙ)ᵢ}.
- Combination (Eq. 5): fₙ = (1/M)Σᵢ wₙᵢ fₙᵢ (INFERENCE: the 1/M factor contradicts softmax weights summing to 1; likely typographical — reimplementation should use Σ wᵢfᵢ).
- Joint cost (Eq. 6): Err = ½ (MASE/MASEnaive2 + MSIS/MSISnaive2), naive2 = naïve on seasonally adjusted data (M4 convention).
- 56 diversity features per series: 28 pairwise diversities from upper 95% prediction intervals + 28 from lower intervals, over an 8-method pool (auto.arima, ets, tbats, stlm+AR, rw with drift, thetaf, naïve, snaïve; R `forecast` v8.12; nnetar excluded — no prediction intervals). Point-forecast diversity deliberately omitted (midpoints carry no extra information).
## Data sources named
M4 competition dataset (Makridakis et al., 2020): 100,000 series across yearly (23,000), quarterly (24,000), monthly (48,000), weekly (359), daily (4,227), hourly (414), from demographics/finance/industry domains; horizons 6/8/18/13/14/48. Public (M4comp2018 R package). FMCG case study: monthly sales of SKUs for a major North American food manufacturer (USA + Canada), 51 periods (April 2013 – June 2017), 955 SKU×location series after trimming; horizon 12; training periods 1–27, validation 28–39, test 40–51. FMCG data proprietary (not shared). No code repository link.
## Findings (numbers and facts, not vibes)
- Table 2 overall mean MASE: SA 1.9040, FFORMA 1.5586, Diversity 1.5478, FD 1.5507. Overall MSIS: SA 17.5077, FFORMA 14.5934, Diversity 14.0197, FD 14.0254. [OTHER]
- Diversity beats FFORMA in most frequencies except weekly and daily (MASE). Paper states Diversity's mean MASE is 18.71% lower and MSIS 19.92% lower than SA overall. [OTHER]
- MCB significance tests: Diversity vs FFORMA difference not statistically significant (overall mean ranks: FD 2.36, Diversity 2.40, FFORMA 2.40, SA 2.85); FD significantly better than Diversity, FFORMA, and SA overall — diversity (future information) and historical features complement each other. [OTHER]
- Trade-off curves (60%–99% intervals): Diversity offers the best upper-coverage vs. scaled-upper-PI trade-off in all frequencies except yearly. [OTHER]
- FMCG case (Table 3): Diversity MASE 0.9365 / MSIS 8.0066; FD 0.9367 / 7.9189; FFORMA 0.9599 / 8.1254; SA 0.9555 / 8.5085 — diversity beats FFORMA on both metrics with only 955 training series, no massive reference set needed. [OTHER]
- Caveats (from file): M4 results benefit from postsample experimentation/tuning (authors' admission — not directly comparable with live M4 contestants); the diversity→weight map must be retrained when pool members change; no pool-selection (all forecasts included, weights near zero still in); no full predictive-density combination; XGBoost hyperparameters not reported. [OTHER]
- GSE overlap (from file): no GSE work learns ensemble combination weights from forecast diversity — new capability, not a duplicate; complements ledger [1548] WIRED (weights experts by past CRPS/historical skill) — WIRED weights on historical skill, this paper weights on current-horizon disagreement. [OTHER]
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Compute per-slate pairwise diversity matrix among engine sub-models' forecast vectors (Eq. 3 adapted to game outcomes) and learn softmax combination weights via gradient-boosted trees minimizing a joint cost (scaled log-loss + scaled Brier, mirroring Eq. 6): OTHER, TRUST-SIGNAL.
- Horizon-side meta-features need only the forecasts themselves, never the actuals — weights can be produced at slate time before kickoff: OTHER.
- Historical-skill weighting (WIRED-style) and current-horizon disagreement weighting are complementary (FD significantly beats each alone): OTHER, TRUST-SIGNAL.
- Tail-aware extension: quantile-level (τ = 0.1…0.9) diversity with CLV-weighted cost — disagreement in the tails as orthogonal upset/blowout signal: OTHER.
## Engine-actionable? (yes/no + one-line what)
Yes — build a diversity-weighted ensemble combiner for GSE's sub-models (pairwise diversity per slate → XGBoost/LightGBM → softmax weights → weighted consensus), backtested on 2023–2024 slates and applied to 2025, adopting only if it beats simple-average by ≥2% relative log-loss and a static skill-weighted baseline by ≥1% with calibration slope in [0.9, 1.1].
