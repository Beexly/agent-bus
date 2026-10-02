# arxiv-program/research/2026-09-21/arxiv-deep/0749-temporal-conformal-prediction-adaptive-risk.md
## What it is (1-2 sentences)
Deep read of Aich, Aich & Jain (2025), arXiv:2507.05470 — "Temporal Conformal Prediction": a rolling-window conformal layer over quantile-regression forecasts with an online Robbins–Monro update of the conformal threshold driven by coverage errors, aimed at adaptive prediction intervals for non-stationary series. Ledger verdict: ADAPT the rolling-conformal + RM coverage-error-correction mechanism for GSE's intervals; do NOT adopt the paper's calibration claims — the paper's own tables contradict its abstract (integrity flag).

## Key metrics/methods (formulas where given, else "not specified")
- TCP (Algorithm 1): (1) fit quantile models q̂_{α/2}, q̂_{1−α/2} on rolling window {r_{i−w}..r_{i−1}}; (2) nonconformity scores ε_{i,τ} = r_i − q̂_{α/2}(X_i) (lower) and q̂_{1−α/2}(X_i) − r_i (upper); (3) conformal threshold C_t = (1−α)-quantile of windowed scores; (4) interval [ℓ_{t+1}, u_{t+1}] = [q̂_{α/2}(X_{t+1}) − C_t, q̂_{1−α/2}(X_{t+1}) + C_t].
- Adaptive layer: coverage error e_t = 1{r_t ∉ [ℓ_t,u_t]} − α; Robbins–Monro update C_{t+1} = C_t + γ_t e_t with γ_t = γ_0/(1+λt)^β, β∈(0.5,1]; Robbins–Monro conditions Σγ_t=∞, Σγ_t²<∞.
- Practical modification (NO theoretical backing — authors' own admission): when r_t falls inside the interval, shrink C_t by a small fraction of γ_t ("forgetting factor") so intervals narrow after volatility passes.
- Theorem 4.2: long-run average coverage → 1−α a.s. under ergodicity (for the unmodified RM rule only).

## Data sources named
Daily log-returns r_t = log(P_t/P_{t−1}), Nov 2017–May 2025: S&P 500 (equities), Bitcoin (crypto), Gold (commodities). Features: 5 lagged returns, 20-day rolling volatility, squared prior return. Baselines: GARCH, Historical Simulation, static Quantile Regression (QR). 1,449 TCP predictions vs 1,701 QR / 1,670 GARCH / 1,468 Hist (different burn-ins). COVID-crash (Feb–Apr 2020) case study.

## Findings (numbers and facts, not vibes)
- Table 1 empirical coverage vs 95% nominal (coverage, avg width): S&P 500 — TCP **0.861**/2.661; QR 0.971/2.229; GARCH 0.827/3.051; Hist 0.931/5.058. BTC — TCP 0.885/9.611; QR 0.969/7.849; GARCH 0.853/11.391; Hist 0.944/18.058. Gold — TCP 0.881/2.202; QR 0.969/1.800; GARCH 0.837/2.618; Hist 0.933/4.024.
- Sensitivity (S&P grid w∈{100,252,500} × γ_0∈{0.005,0.01,0.05}): coverage 0.8463–0.8958, widths 2.58–2.77 — stable but persistently below 95%.
- **Abstract-vs-body discrepancy (integrity flag)**: abstract claims "near-nominal coverage" and S&P widths "5.21 vs 5.06", but Table 1 shows 0.861–0.885 coverage and widths 2.661 vs 5.058; the body honestly admits "TCP's empirical coverage of 86–88% undershoots the 95% target." Cite only the body.
- COVID case study: TCP intervals visibly widen in March 2020 and contract in April — qualitative adaptiveness holds.
- QR "wins" on sharpness but over-covers (0.969–0.971) — miscalibrated in the opposite direction. No ACI (adaptive conformal inference) baseline compared.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — The RM coverage-error feedback mechanism is a new capability for GSE: online/adaptive conformal interval calibration that tracks regime drift in totals lines and pick-performance intervals — GSE's current intervals are static-window.
- OTHER — Improvement experiment carries over: make γ_t a function of detected volatility state (calm/normal/turbulent) instead of pure time decay, since monotone time decay makes late-sample adaptation sluggish by construction (weeks 1–4 and playoff-race episodes are the NFL analogues of the paper's COVID window).
- OTHER — The abstract-integrity flag itself is intel: never cite paper abstracts for calibration claims without checking the tables.

## Engine-actionable? (yes/no + one-line what)
Yes — spec included: implement TCP loop for GSE game-total intervals (rolling QR + windowed conformal threshold + weekly RM update e_t = 1{total outside interval} − α); gate: rolling 2025 coverage within 2pp of nominal with width ≤ static conformal, WITH ACI as a required baseline and ablation of the shrink heuristic (~3 days).
