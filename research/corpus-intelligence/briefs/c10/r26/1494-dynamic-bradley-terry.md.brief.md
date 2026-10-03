# arxiv-program/research/2026-09-21/arxiv-deep/1494-dynamic-bradley-terry.md
## What it is (1-2 sentences)
Deep-read ledger for arXiv:2003.00083v1 (AISTATS 2020, CMU): nonparametric kernel-smoothing extension of the Bradley-Terry model to time-varying team strengths, with existence/uniqueness conditions and uniform oracle bounds. Verdict: ADAPT — as a minimalist theory-backed team-strength benchmark and a smoothing primitive for GSE's power-rating pipeline, not as a ratings replacement.
## Key metrics/methods (formulas where given, else "not specified")
- Model: logit(p_ij(t)) = β_i(t) − β_j(t), Σ_i β_i(t) = 0 (Eq. 2).
- Procedure: (1) kernel-smooth pairwise data: X̃(t) = Σ_m W_h(t,t_m) X^(m), Gaussian kernel, bandwidth h via LOOCV (Appendix 9.2); (2) fit static BT on smoothed data: β̂(t) = argmin_{Σβ_i=0} R(β;t), R = negative log-likelihood on X̃_ij(t) (Eq. 6); (3) rank by β̂(t). Reduces to static BT when all t_m equal.
- Existence/uniqueness: Ford (1957) condition adapted — Condition 4.1: every partition of teams has an i→j edge with X̃_ij(t)>0 (strong connectivity of smoothed comparison graph); Theorem 4.1. W.h.p.: P(Cond 4.1 holds ∀t) ≥ 1 − 4N²exp(−NTp_min/2) (Thm 5.1).
- Oracle bounds: pointwise ‖β̂(t)−β*(t)‖_∞ ≤ 48M*(t)κ_h(t) + C_s·h (Thm 5.2); uniform version with log(NT) bandwidth (Thm 5.3); simplified via K = exp(1/p_min): ≤ 72Kκ_h(t) + C_s·h (Thm 5.4). Rates O(max{M*κ_h, (log N/(NT))^{1/3}}), matching Hölder-1 nonparametric rate (exponent 2/3).
- Assumptions: (A5.1) each pair plays ≥T̲>0 times, controlled spacing (D_m, D_M); (A5.2) p_ij(t) Lipschitz, ≥ p_min > 0; (A5.3) symmetric bounded kernel with finite total variation.
## Data sources named
Simulations: N=50 teams, M=50 time points, n_ij(t)=1; strengths from Gaussian processes; 20 repeats (BT-true and model-agnostic settings). Real: 5 NFL seasons 2011–2015 via nflWAR package (Yurko et al. 2018), N=32 teams × M=16 rounds. Comparison: FiveThirtyEight NFL ELO (Paine 2015, uses margin of victory). Code: https://github.com/shamindras/bttv-aistats2020.
## Findings (numbers and facts, not vibes)
- BT-true simulation: rank displacement 2.29 (dynamic BT) vs 3.75 (win rate) vs 3.75 (static BT); LOO prob error 0.37 (both BTs) vs 0.44 (win rate); LOO nll 0.55 vs 0.56.
- Model-agnostic: rank displacement 5.48 vs 10.68/10.70; LOO prob 0.49 (all — near coin flip, GP noise); LOO nll 0.68 vs 0.71.
- NFL 2011–2015: dynamic BT season-end top-10s matched 6–10 of ELO's top 10 each season despite using no margin-of-victory information; average rank displacement vs ELO 3.4–5.0 across seasons (Table 3).
- LOOCV optimal bandwidth h*=0.03 in Figure 3 (Gaussian-process experiment); runtime comparison Figure 4; Condition-4.1 frequency Tables 4–6; MLE divergence example Figure 5.
- Limitations: targets smoothly changing strengths, can miss abrupt changes; oracle bounds need κ_h(t)→0 and p_min away from 0; no home-field term; NFL validation is rank-overlap only, no probabilistic forecast skill; simulations smooth by construction.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- "Dumb baseline" discipline: any feature-rich engine rating must beat kernel-smoothed dynamic BT's LOO log-likelihood on a rolling basis: [TRUST-SIGNAL]
- LOOCV bandwidth tuner as data-driven alternative to hand-picked decay factors for any time-varying strength curve: [OTHER]
- Existence check (Condition 4.1 strong connectivity) as cheap principled guardrail before fitting any pairwise rating, esp. early-season: [TRUST-SIGNAL]
- Wins-only, no margin, no home field, no covariates — minimalist benchmark, never production rating: [OTHER]
- Improvement experiment: dynamic BT as prior mean of a feature-rich Elo/Glickman-style state-space update with margin-of-victory and home-field features moving off it: [OTHER]
## Engine-actionable? (yes/no + one-line what)
Yes — fit LOOCV-tuned kernel-smoothed dynamic BT on weekly NFL outcomes as the minimalist power-rating benchmark the engine's ratings must beat, and adopt the Condition 4.1 connectivity guardrail before publishing any pairwise rating.
