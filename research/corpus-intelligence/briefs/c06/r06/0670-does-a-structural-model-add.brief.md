# arxiv-program/research/2026-09-21/arxiv-deep/0670-does-a-structural-model-add.md
## What it is (1-2 sentences)
Pitcan (2026) asks whether a structural Dixon–Coles football forecasting model adds any information beyond the de-vigged closing price in Serie A — the answer is no (fitted log-pooling weight ŵ = 0.000) — and then shows what a calibrated model is still good for: "match leverage," the change in season-objective probability between winning and losing a given fixture.
## Key metrics/methods (formulas where given, else "not specified")
- Shin margin removal (Eq. 1): p_i(z) = (√(z² + 4(1−z)·π_i²/Π) − z) / (2(1−z)), root by bisection.
- Dixon–Coles: log λ = γ + α_h − δ_a, log μ = α_a − δ_h (Eq. 2); joint mass with low-score correction τ_ρ (Eq. 3–4); age-weighted likelihood w(Δt) = exp(−ξΔt), ξ=0.002/day (half-life 347 days) (Eq. 5).
- Incremental info: logarithmic opinion pool p^{(w)}_i ∝ (p^M_i)^{1−w}(p^S_i)^w, w ∈ [0,1] (Eq. 8); ŵ fit by minimizing validation log loss.
- Match leverage: L_m = P(Ω|win m) − P(Ω|lose m) (Eq. 9), estimated by post-hoc conditioning on one season simulation (Eq. 10).
## Data sources named
football-data.co.uk — 19 Serie A seasons (2007–08 to 2025–26), 7,220 matches; Bet365 opening all seasons; Pinnacle opening/closing from 2012–13. Code: github.com/pitcany/seriealeverage (126 tests).
## Findings (numbers and facts, not vibes)
- Test n=2,660: Market (Shin de-vigged) RPS 0.1905 [0.1856, 0.1957], log-loss 0.9620, Brier 0.5717, accuracy 54.8%; Dixon–Coles RPS 0.1972, log-loss 0.9858, accuracy 53.4%.
- Pooling weight ŵ = 0.000 on validation; log loss monotone increasing in w on [0,1] on both validation and test — genuine boundary solution.
- Paired RPS difference market−model: +0.0067, 95% CI [0.0046, 0.0088]; market wins RPS in all 7 test seasons.
- Unconstrained w∈[−1,1]: validation minimum at −0.225, test improvement only 0.00062 log-loss [−0.00105, 0.00231] (intervals contain zero).
- Calibration: DC home-win slope 0.995 vs market 1.103; ECE(H) 0.0208 vs 0.0285; market wins on sharpness, not calibration.
- Match leverage example (Fiorentina, 1 Mar 2026): Lecce away L=0.073 vs Inter home L=0.033 — 2.25× leverage (gap ≈8 MC SEs).
- Shin fitted z over 17,479 complete books: median 0.017, max 0.061.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the logarithmic-pooling-weight diagnostic is GSE's headline market-benchmark protocol — "does the engine add anything beyond the de-vigged close?" quantified as ŵ; Shin de-vig audit replaces proportional normalization.
- OTHER: NFL game-leverage layer (P(playoffs|win) − P(playoffs|loss) per fixture) as weekly content + decision-support product.
## Engine-actionable? (yes/no + one-line what)
yes — (1) Adopt the log-opinion-pool weight ŵ as GSE's primary market-benchmark protocol (engine vs de-vigged closing price); (2) implement Shin de-vig exactly per Eq. 1; (3) build weekly NFL game-leverage via post-hoc conditioning on a season simulation.
