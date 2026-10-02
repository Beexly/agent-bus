# arxiv-program/research/2026-09-21/arxiv-deep/2127-chronosx-adapting-pretrained-models-exogenous.md
## What it is (1-2 sentences)
A ledger (read 2026-09-22) on ChronosX (Ansari et al. 2025, arXiv:2503.12107): lightweight covariate adapters (residual FFNs) on frozen pretrained time-series foundation models — an Input Injection Block for past-observed exogenous variables and an Output Injection Block for future-known covariates — without retraining the backbone. Ledger verdict: ADOPT — covariate adapters on a frozen TSFM backbone are the cheapest credible path to weather/injury/rest-aware sports forecasting.
## Key metrics/methods (formulas where given, else "not specified")
IIB: ẽ_t = e_t + W_2·σ(W_1·[e_t; x^{past}_t] + b_1) + b_2 (residual FFN; identity when covariates are uninformative). OIB: logits̃_t = logits_t + FFN([logits_t; x^{future}_t]). Objective: same as backbone (cross-entropy for Chronos; MSE for TimesFM/MOMENT). Metrics: WQL (quantiles 0.1–0.9, 100 sample paths), MASE, geometric aggregation. Training modes: adapter-only (backbone frozen) vs full fine-tuning. Backbone-agnostic: demonstrated on Chronos (tokenized), MOMENT (patched encoder), TimesFM (patched decoder).
## Data sources named
32 author-constructed synthetic datasets: 100 daily series each, length 1827, prediction horizon 30, past-only and future-known covariates with known ground-truth effects. Model-agnosticism tests on Chronos, MOMENT, TimesFM.
## Findings (numbers and facts, not vibes)
- Adapter-augmented models beat frozen backbones on covariate-driven datasets across all three backbones.
- Adapter-only training matches or approaches full fine-tuning performance at a fraction of the parameters.
- IIB and OIB are complementary: past-covariate effects via IIB, future-known effects via OIB; the combination is best (exact WQL/MASE deltas tabulated in the paper, not quoted in the ledger).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: engine wiring — IIB covariates for sports: team rolling EPA differential, injury-derived ELO adjustments, line-movement history, rest-day differential history; OIB future-known: forecast weather (temp/wind/precip), dome flag, days rest, travel miles, known QB starter, opening/closing spread. Residual form means adapters can't hurt much when covariates are noise.
- TRUST-SIGNAL: strict channel discipline required — nothing in the future channel that isn't known pre-kickoff; injury reports timestamped after lineup lock belong in the past channel; synthetic-benchmark gains overstate real-world noisy/confounded covariate gains, and adapter-only ≈ full-FT was shown only on synthetic data.
- SCHEME: venue/rest/travel covariates in the OIB are direct scheme-context inputs to game-outcome forecasting.
## Engine-actionable? (yes/no + one-line what)
yes — build adapter-only ChronosX on the frozen sports Chronos/Moirai backbone with IIB/OIB covariate channels, then full-FT comparison; acceptance = beats covariate-free fine-tuned backbone by ≥0.01 WQL on 2022–2024 walk-forward AND shuffled-covariate ablation shows no gain; plus a "late-news" IIB re-run in the final 60 minutes before kickoff; 2–3 engineer-weeks on top of the backbone; not yet built.
