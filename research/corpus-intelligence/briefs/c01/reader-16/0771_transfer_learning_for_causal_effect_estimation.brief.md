# arxiv-program/research/2026-09-21/arxiv-deep/0771-transfer-learning-for-causal-effect-estimation.md
## What it is (1-2 sentences)
Research deep-read of arXiv:2305.09126v3 (Wei et al., 2023): an ℓ₁-regularized transfer-learning framework (ℓ₁-TCL) for estimating average causal effects in a data-poor target domain by rough-estimating nuisance parameters on a data-rich source domain, then Lasso-correcting the sparse source–target parameter difference before plugging into IPW/OR/DR estimators. Reader verdict: ADAPT for GSE cross-league/cross-era causal questions.

## Key metrics/methods (formulas where given, else "not specified")
- Two-step ℓ₁-TCL: (1) rough GLM fit on source β̂_s = argmin_b n_s⁻¹Σᵢ[−z_{i,s}x_{i,s}ᵀb + G(x_{i,s}ᵀb)]; (2) bias correction β̂_t = argmin_b n⁻¹Σᵢ[−zᵢxᵢᵀb + G(xᵢᵀb)] + λ_PS‖b−β̂_s‖₁; (3) plug β̂_t into IPW/OR/DR estimators for ACE.
- Recovery bound (Thm. 1): |τ̂_TL − τ| = O(s√(log d/n) [bias-correction] + sd√(log d/n_s) [rough-estimation]) w.h.p. ≥ 1−1/n; consistency needs n_s ≫ s²d²log d vs n ≫ d² without transfer.
- Sparsity assumption: Δβ = β_t − β_s, ‖Δβ‖₀ ≤ s.
- NN extension: Dragonnet / 3-headed TARNet variant with zero-initialized sparse weight-difference estimation; hyperparameter selection via SMD goodness-of-fit score (not CE/MSE).

## Data sources named
- In-hospital EMRs from two academic level-1 trauma centers (2018): source n_s = 207 treated + 1249 control; target n = 58 treated + 700 control; 34 features (demographics, vitals, labs); outcome 28-day mortality.
- IHDP pseudo-real dataset (Brooks-Gunn et al. 1992; Hill 2011): 747 subjects (139 treated / 608 control), 25 covariates; source–target split by a binary covariate; 50–1000 trials.
- Code: https://github.com/SongWei-GT/L1-TCL (public). EMR data not public.

## Findings (numbers and facts, not vibes)
- Real data (truth: vasopressors reduce 28-day mortality): target-only IPW = +0.0002 (wrong sign); merged-domains = +0.0441 (worse, biased toward source); ℓ₁-TCL TLIPW = −0.0013 (correct sign, most accurate); in synthetic analogue with τ=−0.067, ℓ₁-TCL was closest to truth. 90% CI covered zero — sign recovery, not significance.
- Propensity-support overlap: source–target parameter difference supported on only 6 of 34 features (empirical justification of sparsity).
- IHDP absolute ACE error, mean (sd), in-sample, 3-headed TARNet + DR: TO-CL 0.415 (0.349), WS-TCL 0.337 (0.273), ℓ₁-TCL 0.289 (0.238); out-of-sample: TO-CL 0.360 (0.301), WS-TCL 0.324 (0.282), ℓ₁-TCL 0.301 (0.259). ℓ₁-TCL best in/out of sample; OR-based plug-ins beat IPW under NN misspecification.
- Simulations: ℓ₁-TCL beats target-only across n ≪ d regimes, consistent with O(s√(log d/n)).
- Proposed GSE test: 2018–2025 nflverse play-by-play; target = effect of 2024 kickoff-rule change on return rate/return EPA (target 2024–2025, source 2018–2023). Pass gate: semi-synthetic absolute error ≤ 0.7× target-only error.
- Effort estimate: ~3 days to implement ℓ₁-TCL (GLM version "a few dozen lines on top of sklearn LogisticRegression"); ~1 day per causal question.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Methodological: cross-domain causal estimation recipe for data-poor targets (rule changes, coordinator changes, short-rest effects) borrowing from data-rich sources — feeds the causal/injury lane, not player behavior directly.
- [OTHER] Warning: naive pooling of eras/leagues can *increase* bias (merged-domains worse than target-only) — directly relevant to any model that trains across NFL seasons without regime checks.
- [COACHING] Application named: estimate effect of a mid-season coordinator change on EPA/play via transfer from prior seasons.
- [OTHER] Pre-flight diagnostic named: compare fitted ℓ₁ propensity supports across domains; proceed only if difference is sparse (paper's case: 6/34).
- [OTHER] Improvement experiment: adaptive empirical-Bayes ℓ₁ weights from source-domain support overlap instead of uniform Lasso penalty.

## Engine-actionable? (yes/no + one-line what)
Yes — implement ℓ₁-TCL (GLM version, ~3 days) as the cross-era/league causal estimation module for rule-change and coordinator-change questions, with the mandatory support-overlap sparsity diagnostic before trusting any transfer.
