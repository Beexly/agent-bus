# arxiv-program/research/2026-09-21/arxiv-deep/1557-regularized-ensemble-forecasting.md
## What it is (1-2 sentences)
Regularized Ensemble Forecasting for Learning Weights from Historical and Current Forecasts (arXiv:2602.11379v2, Su, Guo & Zhang 2026). Derives an ensemble weighting objective that jointly minimizes current-forecast dispersion and regularizes weights toward historical-performance priors (Bayesian EM derivation), with λ tuned by rolling validation — beats every benchmark on the M5 competition and the Survey of Professional Forecasters.
## Key metrics/methods (formulas where given, else "not specified")
- REF objective: w* = argmin_w f(Σᵢ wᵢ²(µᵢ−E[µ])²) + λΦ(w), Σwᵢ=1, wᵢ≥0 (Eq. 3); Φ = L2 Σ(wᵢ−sᵢ)² or entropy Σsᵢlog(1/wᵢ); six Bayesian specs averaged; softmax reparameterization; λ from rolling validation.
- M5: REF rank 1 at every pool size k; +2.26% (k=5) → +6.22% (k=50) over Simple Mean; best RMSSE 0.335 at k=15; p<0.001 vs benchmarks (except CCR at k=20/50: 0.016/0.012); stacking ridge worst (−553.6% at k=20). SPF 2000Q1–2025Q2: REF rank 1 all three indicators — NGDP 1.054 (+4.08%), UNEMP 1.662 (+5.73%), CPI 0.954 (+2.53%). Penalty-share diagnostic: beats current-only methods most when PS high, history-only when PS low. Theorem 1: MSPE = O(1/k)+σy² (same asymptotic rate as simple mean).
## Data sources named
M5 competition: 50 teams' public submissions, 28-day forecasts, 154 series (levels 1–9). Philadelphia Fed Survey of Professional Forecasters (RTDSM initial-release vintages). No code published.
## Findings (numbers and facts, not vibes)
- History-only weighting underperformed the Simple Mean in 8/9 SPF cases (rotating pool makes history unreliable) — yet REF still won by balancing both sources.
- REF's edge over Simple Mean grows with expert pool size; simulation: gains over Winsorized Mean larger at small ρ (dispersed current forecasts), positive RMSE gains at all ρ ∈ {0.2,0.4,0.6,0.8}.
- Limitations: point forecasts only (no quantile/Bernoulli combination); for genuinely new experts the prior is imputed as cross-sectional average; six-spec averaging reported; asymptotic in k.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: penalty-share diagnostic tells when the engine leans on track record vs this-week consensus — new instrumentation for calibration confidence.
- OTHER: ensemble-weighting methodology for GSE sub-models (spread/total engine), with rotating-pool handling for sub-model churn; market-regime-conditioned λ as the NFL improvement (early-season favors current, late-season favors history).
## Engine-actionable? (yes/no + one-line what)
Yes — weekly REF ensemble per market (CCR priors from rolling 8-week errors, λ from rolling validation, six specs averaged); ADOPT if 2024 holdout shows margin RMSE ≥2% and ATS Brier ≥1% vs Simple Mean without λ collapsing to a degenerate regime.
