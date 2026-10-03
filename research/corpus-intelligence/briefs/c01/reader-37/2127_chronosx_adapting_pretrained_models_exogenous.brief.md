# arxiv-program/research/2026-09-21/arxiv-deep/2127-chronosx-adapting-pretrained-models-exogenous.md
## What it is (1-2 sentences)
A full research ledger on ChronosX (arXiv:2503.12107v1, Ansari et al. 2025): lightweight adapter blocks (Input/Output Injection Blocks) that let frozen pretrained time-series foundation models consume past and future exogenous covariates without retraining the backbone. Verdict: ADOPT — frozen-backbone + covariate adapters as the cheapest credible path to weather/injury/rest-aware sports forecasting.

## Key metrics/methods (formulas where given, else "not specified")
- Input Injection Block (IIB): ẽ_t = e_t + W_2·σ(W_1·[e_t; x^past_t] + b_1) + b_2 (residual FFN; identity when covariates are zero/uninformative).
- Output Injection Block (OIB): logits̃_t = logits_t + FFN([logits_t; x^future_t]).
- Objective: same as backbone (cross-entropy for Chronos; MSE for TimesFM/MOMENT variants).
- Evaluation metrics: WQL (quantiles 0.1–0.9, 100 sample paths), MASE; aggregated by geometric relative to baseline. Exact WQL/MASE deltas tabulated in paper only, not reproduced in the ledger.
- Training modes compared: adapter-only (frozen backbone) vs full fine-tuning vs frozen zero-shot vs covariate-free fine-tuning; tested on Chronos, MOMENT, TimesFM.

## Data sources named
32 synthetic datasets constructed by the authors: each 100 daily series of length 1827, prediction horizon 30; past-only and future-known covariates with known ground-truth effects. Synthetic generation code in paper repo.

## Findings (numbers and facts, not vibes)
- Adapter-augmented models beat frozen backbones on covariate-driven datasets across all three backbones (Chronos, MOMENT, TimesFM).
- Adapter-only training matches or approaches full fine-tuning performance at a fraction of trainable parameters.
- IIB and OIB are complementary: past-covariate effects recovered by IIB, future-known effects by OIB; combination is best.
- Channel-discipline rule recorded in ledger: future covariates are truly known at forecast time (weather forecasts, rest days, venue); injury reports are NOT future-known and belong in the past channel or as nowcasts. Any post-kickoff value in the future channel = leakage fail.
- Real-sports caveat: covariates are noisy/partially observed/confounded — expect smaller gains than synthetic; no treatment of missing covariates or ragged alignment (bye weeks, postponed games).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (engine forecasting infra): the IIB/OIB adapter design ports almost verbatim to a Chronos/Moirai-backed GSE forecaster — IIB past covariates would be team rolling EPA differential, injury-derived ELO adjustments, line-movement history, rest-day differential history; OIB future covariates would be forecast weather (temp/wind/precip), dome flag, days rest, travel miles, known QB starter, opening/closing spread.
- OTHER (QB-BEHAVIOR adjacent): no direct QB content; potential INFERENCE — situational QB series (e.g., per-game pressure-to-sack rates) could sit in the past channel, but the ledger does not propose this.

## Engine-actionable? (yes/no + one-line what)
yes — GSE implementation spec included: frozen sports-Chronos (2123) or Moirai (2126) backbone, residual FFNs for past/future covariate channels, adapter-only training first (~1 GPU-day), effort 2–3 engineer-weeks; acceptance gate = adapters beat covariate-free fine-tuned backbone by ≥0.01 WQL on 2022–2024 walk-forward AND ablation with shuffled covariates shows no gain; hard reject on any future-channel leakage (values timestamped ≤ kickoff − 60 min).
