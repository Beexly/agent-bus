# docs/arxiv-program/research/2026-09-21/arxiv-deep/0746-improving-probabilistic-forecasts-extreme-wind.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2407.15900 (Wessel et al., 2024), which trains EMOS post-processing models with threshold-weighted CRPS (twCRPS) instead of plain CRPS to improve extreme-wind forecasts, then linear-pools the tail-focused and body-focused models. Verdict: ADAPT — method transfers to GSE tail-sensitive forecasts (blowouts, shootouts, DFS ceilings); the wind application itself is not adopted.
## Key metrics/methods (formulas where given, else "not specified")
- twCRPS(F,y;w) = ∫ w(z)·(F(z) − 1{y≤z})² dz, with w(z) = 1{z > t}; thresholds t at climatological 80th/90th percentiles.
- EMOS: y|x ~ TN(μ = a + b·x̄, σ = c + d·s) truncated at 0; location from ensemble mean, scale from ensemble SD, plus seasonal harmonics.
- Linear pool: F_λ = λ·F_tail + (1−λ)·F_body, recommended λ=0.6.
- Evaluation: twCRPSS / CRPSS skill scores relative to baselines (raw ensemble, CRPS-EMOS, NLL-EMOS, climatology).
## Data sources named
MOGREPS-G 18-member ensemble, 124 UK stations, 48h lead time; train 2019-04-01–2020-12-31, test 2021-01-01–2022-03-31; UK Met Office channels.
## Findings (numbers and facts, not vibes)
- twCRPS-trained EMOS vs CRPS-trained: ~0.8% twCRPS skill gain at the 80th-percentile threshold, ~1.3% at the 90th; maxima ~1.4% and ~2.5% across stations/models.
- Small body-cost: plain CRPS degrades slightly under twCRPS training.
- Linear pool at λ=0.6 retains most tail gain while controlling most body loss; recommended operating point.
- NLL training competitive on body, worse in tail.
- File proposes GSE spec: twCRPS objective with thresholds at 80th/90th percentile of totals/margins, twin models pooled at λ=0.6, effort ~4–5 days; acceptance gate = ≥1% 90th-percentile twCRPS gain with ≤0.5% body degradation on 2024–2025 test; improvement idea: weight at economic-value thresholds (key numbers) rather than statistical extremes.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Calibration methodology for tail-emphasis training (OTHER: calibration lane, new capability per file's overlap check — GSE calibration is currently body-focused Platt/isotonic/CQR).
## Engine-actionable? (yes/no + one-line what)
Yes — add twCRPS training objective + λ=0.6 linear pooling to game-total/margin distribution models for blowout/shootout forecasting.
