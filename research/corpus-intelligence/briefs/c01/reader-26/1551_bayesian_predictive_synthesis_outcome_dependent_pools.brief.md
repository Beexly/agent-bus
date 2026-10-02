# arxiv-program/research/2026-09-21/arxiv-deep/1551-bayesian-predictive-synthesis-outcome-dependent-pools.md
## What it is (1-2 sentences)
Ledger note on Bayesian Predictive Synthesis with Outcome-Dependent Pools (Johnson & West 2023, arXiv:1803.01984): the foundational supra-Bayesian framework for combining predictive densities with outcome-dependent weights, cross-model dependence modeling, time-varying synthesis via discount factors, and a mandatory diffuse "safe haven" baseline for model-set incompleteness. Verdict in-file: ADAPT — a principled blueprint for GSE's combination of engine + market + Elo margin densities.

## Key metrics/methods (formulas where given, else "not specified")
- Supra-Bayesian synthesis: p(y|H) = ∫ α(y|x) h(x) dx, h(x) = Πj hj(xj) (1) — via Jeffrey's rule, not Bayes; α(y|x) is the synthesis function.
- Mixture synthesis: α(y|x) = ω0 h0(y) + Σj ωj δxj(y); outcome-dependent: α(y|x) = ω0(x)h0(y) + Σj ωj(xj)δxj(y) (5); cross-model: ωj depends on full x (6). Generalized linear pool: p(y|H) = Σj wj(y) hj(y) (3).
- Recalibrated densities: h'j(y) = wj(y)hj(y)/cj, cj = ∫ωj(y)hj(y)dy; Gaussian-weight example ωj(xj) = qj exp(−(xj−μj)²/(2σj²)) — model j trusted most near μj; Gaussian-well variant down-weights a model in regions it favors.
- Consensus weighting: ωj(x) = qj exp(−ej²/(2νj)), ej = xj − E[xj|x−j] (8) — down-weights forecasts far from conditional consensus; herding weighting: ωj(x) = qj(1 − d·exp(−ej²/(2νj))) (9) — discounts agreement when models are expected to agree, rewards diversity.
- Dynamic BPS: time-varying βt (biases), Σt (cross-model dependence), qt (base weights); NIW prior on (βt,Σt), Dirichlet on qt; evolution via discount factors; sequential Gibbs sampler with latent mixture indicator z (Appendix A) + variational-Bayes projection of MCMC posterior to NIW/Dirichlet (Appendix B).
- Safe haven h0: diffuse baseline required for model-set incompleteness (M-open) — BPS never degenerates to a single wrong model, unlike BMA.

## Data sources named
- Daily EUR/USD log price 7/1/2016–12/30/2016, 130 trading days (includes US presidential election FX shock); model set J=3 dynamic linear models (M1 TVAR(2), M2 TVAR(5), M3 linear-growth DLM) + M0 TVAR(1) baseline "safe haven". Demonstration only; no public link.

## Findings (numbers and facts, not vibes)
- Table 1 (normalized; RMSE ↓, log score ↑; BPS = reference 1.00/1.000): BMA 1.09/0.956; BMAx 1.08/0.956; POOL 1.05/0.965; POOLx 1.06/0.963; M0 1.09/0.946; M1 1.10/0.946; M2 1.11/0.945; M3 1.15/0.886.
- BPS beats every comparator on both metrics: ~9% RMSE improvement over BMA, +4.4 points log score over BMA's 0.956.
- Dependence learning: 1-day-ahead cross-model correlations 0.3–0.5 (strong herding, models nearly identical short-term); 5-day-ahead correlations near-zero/weak positive, breaking down around the election shock and partially recovering.
- Effective MCMC weights (Fig. 6b) differ markedly from Dirichlet base weights (Fig. 6a) — difference wholly due to outcome-dependent weighting.
- Caveats in-file: single 130-day sample, no significance tests; all models are near-duplicate DLMs so dependence machinery is untested on diverse expert sets; BMA comparison flattered because BMA scores 1-step-ahead while BPS is built for the 5-step target; Gibbs+rejection+VB per step is heavyweight.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Direct blueprint for GSE's seasonal combination layer: engine v5.2.7 margin density + de-vigged market margin density + Elo margin density + diffuse historical margin distribution as safe haven; outcome-dependent Gaussian weights let each model be trusted where it historically wins (engine in close games, market in blowouts).
- [OTHER] Consensus down-weighting (8) applies when engine and market herd; herding weighting (9) rewards model diversity — INFERENCE: directly relevant to correlated-submodel ensembles inside the engine too.
- [SCHEME] Improvement experiment in-file: condition weights on game state ωj(y,s) with s = (spread bucket, divisional flag, weather flag) — hypothesis: model expertise is regime-specific (engine better in divisional games, market better in extreme weather).
- [TRUST-SIGNAL] CEPT (Garrett's causal lane) is complementary — it could score whether BPS's synthesized expert has real causal skill; no duplication.

## Engine-actionable? (yes/no + one-line what)
Yes — build "GSE-BPS": static constant-weight mixture with bias terms fit by log score on 2023–2024, then outcome-dependent Gaussian weights, then weekly discount-factor dynamics; ADOPT only if 2025 mean log score beats equal-weight pool by ≥0.02 nats and beats BMA-style weighting with 80% interval coverage in [0.75, 0.85].
