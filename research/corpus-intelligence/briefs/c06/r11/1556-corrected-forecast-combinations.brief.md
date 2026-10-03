# arxiv-program/research/2026-09-21/arxiv-deep/1556-corrected-forecast-combinations.md
## What it is (1-2 sentences)
Paper (arXiv:2601.09999): combined forecast errors are often strongly autocorrelated (54% in the 1969 Bates–Granger example, overlooked for 55+ years); adding a fraction γ≈0.5 of the previous combined error to the next forecast delivers gains exceeding the original combination gains (UNEMP corrected-mean relative RMSFE 0.47–0.51 vs OLS-optimal 1.03 — the forecast combination puzzle mitigated), plus a GLS one-step estimator that learns weights and γ jointly.
## Key metrics/methods (formulas where given, else "not specified")
- Two-step correction: f^{CZZ}_{T+h|T} = f^{ZZ}_{T+h|T} + γ·e^{ZZ}_{T|T−h}; default γ = 0.5; estimated γ̂ = argmin_γ Σ[y − (f + γe)]², bound −1<γ<1.
- One-step GLS: y_{t+h} = Σwⱼf_{j,t+h|t} + γ(y_t − Σwⱼf_{j,t|t−h}) + ξ (quasi-differenced Hildreth–Lu); general ARMA(p,q): min_w (y−Fw)′Ω(γ)⁻¹(y−Fw) s.t. w′ι=1 → w^{opt} = Σ̃⁻¹ι/ι′Σ̃⁻¹ι.
- Theorems 1–2: corrected forecast weakly dominates in conditional and unconditional MSE; Theorem 3: GLS weakly dominates OLS out-of-sample under dependence; Theorem 4: risk bound |R(w^{opt})−R_n(ŵ^{GLS})| ≤ 2a_Tc².
- Baselines: individual forecasters, uncorrected mean, uncorrected OLS-optimal (relative MSFE 1.0315 — the puzzle).
## Data sources named
Bates & Granger (1969) Table 1 (12 monthly passenger-miles errors; MSFE ES 196 / BJ 188 / EW 150); U.S. Survey of Professional Forecasters (Philadelphia Fed), h=1 quarterly, UNEMP/RGDP/INDPROD 1969Q1–2025Q2, CPI 1981Q3–2025Q2; COVID 2020Q1–2022Q4 set to missing.
## Findings (numbers and facts, not vibes)
- Motivating example: corrected EW MSFE 103 vs EW 150 (−31% correction gain vs −20% combination gain).
- UNEMP mean+γ0.5: relative RMSFE 0.83–0.86 across periods; mean+γ0.65: MSFE 0.0729 (0.4663); OLS-optimal+γ0.5: 0.0915 (0.5850, −41%); GLS one-step: 0.0825 (0.5275) — beats two-step, nearly catches corrected mean.
- RGDP γ=0.5: 0.85–0.92 incl. COVID (~10% gain); INDPROD γ=0.5: 0.83–0.87 ex-COVID; CPI γ=0.5: 0.70 (−30%) in 2022–2025, 0.84 (−16%) hist-optimal.
- With COVID in-sample, correction hurts (UNEMP 1.16–1.53) — outlier propagation; hist-optimal γ (0.4–0.54) ≈ fixed 0.5 in performance.
- Correction removes error autocorrelation (Figure 4); corrected optimal still loses to corrected mean — puzzle mitigated, not solved.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: error-autocorrelation correction layer downstream of the engine consensus — publish f_{t+1} + γ·e_t per market; skip after |e_t| > 3σ weeks (the COVID lesson); auto-set γ=0 if ACF(1) collapses.
- TRUST-SIGNAL: weekly error-ACF monitoring is itself an engine-health/QC signal for the public results ledger.
- OTHER: team-conditional hierarchical correction (team-level μ, ρ shrinkage) is the paper's-improvement experiment — biases persist by coaching system, not league-pooled.
## Engine-actionable? (yes/no + one-line what)
Yes — near-free: add γ=0.5 × last week's consensus error to this week's forecast per market (hours of work), with outlier skip and ACF(1)≥0.15 premise check; gate: ≥3% margin-RMSE reduction and ≥1% ATS-Brier improvement on 2024 holdout, no single week contributing >25% of gain.
