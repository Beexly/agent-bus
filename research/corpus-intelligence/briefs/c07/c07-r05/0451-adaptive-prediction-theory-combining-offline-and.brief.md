# arxiv-program/research/2026-09-21/arxiv-deep/0451-adaptive-prediction-theory-combining-offline-and.md

Source paper: Li & Guo (2025), arXiv:2512.00342v2. Ledger verdict: ADAPT — port the two-stage protocol and meta-weighting mechanism; drop the control-theoretic machinery.

## What it is (1-2 sentences)
A two-stage adaptive prediction theory: offline nonlinear-least-squares base fitting under correlated non-i.i.d. data with KL-quantified distribution shift, plus an online meta-LMS algorithm running N parallel models aggregated by exponential loss weighting with per-model projected LMS updates. The ledger ports it as GSE's in-season recalibration mechanism: a frozen weekly offline base plus a weekly meta layer of 8–16 low-dimensional drift probes, exponentially weighted by recent Brier/log-loss.

## Key metrics/methods (formulas where given, else "not specified")
- Meta aggregation: y_{t+1}^{pred} = Σ_i w_{t,i} y_{t+1,i}^{pred}; w_{t+1,i} = w_{t,i} exp(−λ l_t) / Σ_j w_{t,j} exp(−λ l_t).
- Per-model projected LMS: β̂_{t+1,i} = Π_D{β̂_{t,i} + φ_t/(d + m_t²)·(y_{t+1} − β̂_{t,i}^τ φ_t)}, with discount accumulator m_{t+1} = γ·(…) (γ ∈ (0,1)).
- Two-stage error decomposition (Theorem 18): J_T ≤ J_mis + J_opt + J_est (mismatch + optimization + estimation).
- Simulation only: target y_{t+1} = a_t σ_t(b x_t + c) + d_t + w_{t+1}, σ_t(x) = 1/(t + e^{−x}); offline grid search over (b,c) ∈ [−3.5,6.5] × [−5.5,4.5], 50 segments/dimension; online N_2 = 500, λ = 1e-3, d = 1e3.
- GSE port: probes on last-4-week EPA differential, injury-adjusted roster-strength delta, market-move direction; weights update weekly; improvement experiment: regime-conditional weight vectors (high QB-injury weeks vs stable weeks).

## Data sources named
No real dataset — pure simulation study (§5 of paper); grid search done in Matlab; no code or repository stated.

## Findings (numbers and facts, not vibes)
- Qualitative only (figures, no tables of numbers): meta-LMS average prediction error lies strictly below single-model LMS and fixed-parameter baselines across the horizon, even though the offline estimate (b̂,ĉ) "fails to converge" per Figure 2 — poor initialization gives a large initial transient, but online adaptation eventually beats no-adaptation.
- No exact error values, confidence intervals, or sample sizes stated — the superiority claim is visual only.
- Limitations flagged: theory constants existential, not computable; NFL drift is abrupt (injuries, QB changes), not smooth bounded drift as assumed; N_2=500 parallel models is cheap for scalar systems but costly for GSE-scale feature spaces.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: in-season recalibration architecture — offline→online two-stage adaptation with multi-model meta-weighting is a new mechanism for GSE's batch/offline engine, complementary to the conformal calibration lane.
- COACHING: the regime-conditional weighting experiment maps to scheme/coaching-shift regimes (e.g., post-coordinator-change teams drifting differently).

## Engine-actionable? (yes/no + one-line what)
Yes — build the weekly meta layer of 8–16 drift probes over the frozen GSE v5.2.7 forecast and adopt it if 2022–2025 walk-forward shows ≥0.005 Brier or ≥0.15 points MAE-vs-close improvement concentrated in weeks 6–18, with no catastrophic weekly degradation (max weekly Brier increase <0.02).
