# docs/arxiv-program/research/2026-09-21/arxiv-deep/0477-econometrics-for-decision-making-building-foundations.md
## What it is (1-2 sentences)
Deep-read ledger of Manski (2021) "Econometrics for decision making: building foundations sketched by Haavelmo and Wald" (Haavelmo Lecture, Univ. of Oslo) — argues econometric models should be evaluated by regret across the full *state space* (all feasible states of nature), not by fit within the *model space*; applies Wald decision theory to prediction and binary treatment choice with new numerical maximum-regret findings. Verdict: ADAPT (conceptual) — adopt the decision-theoretic evaluation principle for GSE pick-selection and staking.

## Key metrics/methods (formulas where given, else "not specified")
- Wald SDF criteria: (1) max average welfare; (2) maximin welfare; (3) MMR = min_{c} max_{s}[max_{d} w(d,s) - w(c,s)].
- Hodges-Lehmann (1950) MMR predictor for [0,1] outcomes: (mu_N sqrt(N) + 1/2)/(sqrt(N)+1).
- Missing-data midpoint predictor max regret: 1/4[P(delta=1)^2/K + P(delta=0)^2].
- MMR fractional allocation: z_MMR = E[y(b)|delta(b)=1]*p + {1-E[y(a)|delta(a)=1]}(1-p); max regret z_MMR(1-z_MMR) fractional vs min(z_MMR,1-z_MMR) deterministic singleton.
- Binary-choice regret: R_{c(.)s} * |w(a,s) - w(b,s)|; as-if optimization: c[s(psi)] in argmax_c w[c,s(psi)].
- Numerical max-regret via Monte Carlo (5,000 samples/state) over discretized state-space grids, N=25–100.

## Data sources named
Utah juvenile sentencing/recidivism illustration (Manski & Nagin 1998: males born 1970–1974, convicted before 16; 11% confined, 23% of those no reoffense in 2 yrs; 89% non-confinement, 41% no reoffense). Numerical tables computed by STATA programs (Manski & Tabord-Meehan 2017; Litvin & Manski 2021); no repository URL.

## Findings (numbers and facts, not vibes)
- Utah example: max regret of mandate-confinement (a)=0.45 vs mandate-no-confinement (b)=0.55, so (a) minimizes maximum regret — yet the empirical-success rule picks (b) because 0.41>0.23: as-if optimization selects the MMR-inferior treatment.
- AMMR max regret roughly invariant in p, rises from ~0.34 (N=25) to ~0.40 (N=100) — more data makes the deterministic rule less randomized and *more* regrettable, approaching 1/2 as N->infinity (fn: N=1 gives 1/4 for all p).
- Midpoint predictor beats sample-average-of-observed-outcomes: max MSE ~1/4 the size at observability <=0.8, ~1/2 at 0.9 (Table 1A: N=100, 0.1952 at P(delta=1)=0.1, 0.0620 at 0.5, 0.0025 at 1.0; Table 2A: 0.7779, 0.2404, 0.0025).
- Identification (missing-data bias) dominates imprecision when observability <0.7.
- ES rule max regret = exactly max(p,1-p) in the known-distribution case.
- Coarse-grid max regret is a *lower bound* on true max regret (paper's own footnote).

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- As-if optimization (plug engine prob into Kelly as if true) can select the MMR-inferior treatment — Utah 0.45 vs 0.55 case — OTHER (decision-policy warning).
- Evaluate betting rules by maximum regret across a state space of plausible true-prob worlds (engine prob +/- calibration error) rather than EV under the point estimate — TRUST-SIGNAL (evaluation framework).
- MMR-capped Kelly: use as risk overlay (cap stakes where max regret exceeds threshold), NOT as Kelly replacement — OTHER (staking design).
- Identification dominates imprecision below 0.7 observability — TRUST-SIGNAL (missing-data caution; analog: missing closing lines in CLV analysis).

## Engine-actionable? (yes/no + one-line what)
Yes — add a regret-based staking audit: compute worst-case regret (vs oracle Kelly) of current staking across a per-bet calibration-error state space, and adopt an MMR-capped Kelly overlay iff walk-forward shows >=90% of full-Kelly log growth with >=30% lower worst-case regret.
