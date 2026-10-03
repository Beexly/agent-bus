# docs/arxiv-program/research/2026-09-21/arxiv-deep/1126-causal-icm-multi-task-gaussian.md

## What it is (1-2 sentences)
Ledger of arXiv:2405.20957v3 (Dimitriou et al., 2024), Causal-ICM — a rank-2 intrinsic coregionalization multi-task GP that fuses a small randomized trial (unconfounded, tiny) with a large observational study (rich coverage, hidden confounding) to estimate CATE, with a single borrowing parameter ρ∈(0,1). Verdict: ADAPT — gives GSE a principled way to combine a small trusted evidence source (verified engine outcomes) with larger biased historical data while quantifying, not hiding, borrowing uncertainty.

## Key metrics/methods (formulas where given, else "not specified")
- Model: fᵉ(x) = u₁(x); fᵒ(x) = ρ·fᵉ(x) + √(1−ρ²)·u₂(x); u₁,u₂ ∼ GP(0,k) independent, shared base kernel k across tasks.
- Posterior variance lower bound (proved, Appendix F): Vᵉ(x*) ≥ (1−ρ²)·Vᵉ_De(x*) — borrowing shrinks uncertainty by at most a ρ-tied factor.
- Confounding function posterior: η(x*)|X,y ∼ N(mᵉ(x*)−mᵒ(x*), Vη(x*)).
- ρ selected by 5-fold CV over grid {0.0,0.1,…,1.0} minimizing weighted held-out RCT error.
- Baselines: experimental-only GP, observational-only GP, Kallus et al. (2018) experimental-grounding GP, Integrative HTE, Power Likelihood (Lin et al. 2025), RF, XGB T-learner.
- GSE spec: two-source GP (gpytorch, ≤500 inducing points for ~10k rows); source A = verified pick outcomes (picks DB, model v5.2.7, SPREAD), source B = all historical engine predictions; shared RBF kernel on spread/total/rest/weather; ρ grid {0.1,…,0.9} via rolling-origin time-split CV on source A only; per-pick posterior mean edge + bound-inflated variance → calibration (Venn-Abers/isotonic) and Kelly sizing.

## Data sources named
- Simulations per Appendix H formulas (~200–300 RCT + ~1,000 observational observations per dataset; 100 datasets per setting).
- Tennessee STAR class-size study: 422 randomized + 2,593 observational + 379 held-out validation observations.
- Code: https://github.com/EvanDimitriou/CausalICM (stated, not verified fetched).

## Findings (numbers and facts, not vibes)
- Tennessee STAR validation RMSE: Causal-ICM **6.29**; RF **6.27** (tie); experimental GP 6.36; experimental grounding GP 6.38; observational GP 7.47; Integrative HTE 11.84. Real-data win is a tie — the claimed advantage is robustness under misspecification.
- Multivariate setting 2 under misspecification (mean RMSE, SD): Causal-ICM 2.586 (1.513) vs GP exp 3.422 (2.186), GP obs 3.580 (0.796), grounding 3.582 (1.713), Integrative HTE 21.883 (3.330).
- Observational-size sweep: at n_obs=2000, Causal-ICM 0.934 (0.674) vs Integrative HTE 1.576 (0.318), power likelihood 1.161 (0.606), grounding 1.660 (0.443), GP obs 1.377 (0.062) — Causal-ICM improves as biased data grows while Integrative HTE degrades.
- Out-of-support MSE: Causal-ICM 1.071 (0.722) vs Integrative HTE 3.153 (0.919), Kallus GP 43.461 (42.069); in-support 0.252 (0.099), best of all methods.
- ρ sensitivity: RMSE minimized near ρ=0.8 (0.305), rising at ρ=1.0 (1.095) where confounding stops being absorbed; RBF kernel 0.822 (0.651) beats Matérn 3/2, 5/2.
- Runtime (setting 2): Causal-ICM mean 4.56 s vs Integrative HTE 6.01 s over 100 datasets (cubic GP scaling; inducing points suggested).
- Limitations: single global ρ can't represent spatially varying confounding; GP cubic scaling needs inducing points at nflverse scale; ρ CV consumes scarce experimental data (unexplored at n<100); variance bound is a posterior-uncertainty guarantee, not finite-sample coverage.
- New capability for GSE: no coregionalization/RCT+observational fusion work in repo (greps for "coregionalization" return only assignment files); FineCausal (2503.23911) is fine-grained causality, not multi-source fusion.
- Acceptance gate proposed: ADOPT if on 2026 holdout Causal-ICM beats pooled-GP Brier by ≥0.005 overall and ≥0.01 on the out-of-support slice, with ρ̂ stable across folds (SD ≤ 0.15); REJECT if ρ̂ collapses to ≈0/≈1 or any baseline beats it.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] Exactly GSE's data situation: small set of verified/settled engine outcomes + large history of model outputs of varying quality — the ρ mechanism quantifies how much of the big biased history can be trusted.
- [OTHER] Causal calibration lane: bound-inflated posterior variance feeds Venn-Abers/isotonic calibration and Kelly sizing rather than point picks.
- [OTHER] Improvement experiment: region-adaptive ρ(x)=sigmoid(g(x)) so borrowing shrinks where source B is unreliable (stale-rating eras, weather-affected totals).

## Engine-actionable? (yes/no + one-line what)
yes — Prototype a gpytorch two-source GP with ρ borrowed from verified picks DB vs. historical predictions on SPREAD only, requiring ≥0.005 Brier gain over pooled-GP before any sizing use (spec in §11–14 of the file).
