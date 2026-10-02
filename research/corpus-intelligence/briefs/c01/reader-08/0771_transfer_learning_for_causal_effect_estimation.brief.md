# arxiv-program/research/2026-09-21/arxiv-deep/0771-transfer-learning-for-causal-effect-estimation.md
## What it is (1-2 sentences)
Deep-read ledger for arXiv:2305.09126v3 (Wei et al., Georgia Tech/Emory, 2023) on ℓ₁-TCL: transfer learning for causal effect estimation — rough-fit propensity/outcome nuisance models on an abundant source domain, then Lasso-bias-correct the sparse source–target difference on limited target data, then plug into IPW/OR/DR estimators. Verdict: ADAPT for GSE's cross-era/cross-league causal questions (rule changes, coaching changes, injury-risk factors).
## Key metrics/methods (formulas where given, else "not specified")
- GLM nuisance: β̂_s = argmin_b n_s⁻¹Σᵢ[−z_{i,s}x_{i,s}ᵀb + G(x_{i,s}ᵀb)] (source rough fit).
- Bias correction: β̂_t = argmin_b n⁻¹Σᵢ[−zᵢxᵢᵀb + G(xᵢᵀb)] + λ_PS‖b−β̂_s‖₁ (Lasso on the difference).
- Sparsity assumption: Δβ = β_t − β_s is s-sparse, ‖Δβ‖₀ ≤ s.
- Recovery bound (Thm. 1): |τ̂_TL − τ| = O(s√(log d/n) + sd√(log d/n_s)); consistency needs n_s ≫ s²d²log d vs n ≫ d² without transfer.
- NN extension: rough-train Dragonnet / 3-headed TARNet on source, then estimate sparse weight-difference with zero init on target; hyperparameter selection via SMD goodness-of-fit score (not CE/MSE).
## Data sources named
- Real: in-hospital EMRs from two adjacent level-1 trauma centers (2018): source n_s=207 treated + 1249 control; target n=58 treated + 700 control; 34 features (demographics, vitals, labs); outcome 28-day mortality.
- Benchmark: IHDP pseudo-real dataset (Brooks-Gunn et al. 1992; Hill 2011): 747 subjects (139 treated / 608 control), 25 covariates; 50–1000 trials.
- Simulations: GLM nuisance, n ≪ d regimes (Appx. F).
- Code: https://github.com/SongWei-GT/L1-TCL (public). EMR data not public.
## Findings (numbers and facts, not vibes)
- Real data (truth from literature: vasopressors *reduce* mortality): target-only IPW = +0.0002 (wrong sign); merged-domains = +0.0441 (worse — biased toward source); ℓ₁-TCL TLIPW = −0.0013 (correct sign, most accurate; 90% bootstrap CI still covers zero).
- IHDP in-sample absolute ACE error, 3-headed TARNet + DR: TO-CL 0.415 (0.349), WS-TCL 0.337 (0.273), ℓ₁-TCL 0.289 (0.238). Out-of-sample: TO-CL 0.360 (0.301), WS-TCL 0.324 (0.282), ℓ₁-TCL 0.301 (0.259). ℓ₁-TCL best both.
- Source–target fitted support difference in the EMR case: only 6 of 34 features differed (empirical basis for the sparse-difference assumption).
- OR-based plug-ins beat IPW under NN misspecification.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: estimating a mid-season coordinator/scheme change's causal effect (EPA/play) by borrowing nuisance models from prior seasons — the sparse-difference diagnostic (compare fitted supports across eras) is a pre-flight gate.
- SCHEME: effect of the 2024 kickoff rule change on return EPA — target domain 2024–2025 is data-poor, source 2018–2023 data-rich.
- OTHER: general "never naively merge domains" rule — merged estimator got the answer *worse* than target-only when mechanisms differ; applies to pooling eras/leagues anywhere in the engine.
- TRUST-SIGNAL: the paper's pre-flight support-overlap diagnostic and ≤0.7× target-only semi-synthetic error gate are directly reusable as intake QA for any transferred causal claim.
## Engine-actionable? (yes/no + one-line what)
Yes — implement ℓ₁-TCL (GLM version is a few dozen lines over sklearn LogisticRegression; ~3 days) for cross-era/league causal questions, with the support-overlap diagnostic + semi-synthetic ≤0.7× error gate before ADOPT.
