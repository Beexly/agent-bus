# arxiv-program/research/2026-09-21/arxiv-deep/1160-robust-forecast-aggregation.md
## What it is (1-2 sentences)
"Robust Forecast Aggregation" (Arieli, Babichenko, Smorodinsky 2018, arXiv:1710.02838) studies an ignorant aggregator combining experts' probabilistic forecasts under square loss, deriving minimax-optimal schemes for two-expert settings and an impossibility result for many experts. Ledger verdict: ADAPT — precision-weighted and average-prior schemes are implementable upgrades to how GSE blends model and market probabilities.
## Key metrics/methods (formulas where given, else "not specified")
- Relative loss L(f,P) = E[(f(x(s)) − x̂(s))²]; regret R_C(f) = sup_{P∈C} L(f,P).
- Blackwell-ordered experts: precision scheme f_pre with weights ∝ φ(x) = 1/(x(1−x)) when |x₁−x₂| ≤ 0.4, ∝ √φ(x) when > 0.4; snap to 0/1 at extremes, 1/2 on (0,1)/(1,0).
- Conditionally independent: average-prior scheme f_avg — Bordley Bayes formula with dummy prior μ̂ = (x₁+x₂)/2; variant μ̂ = 0.49(x₁+x₂), +0.02 if sum > 1.
- Bordley aggregation: P(ω=1|s) = (1−μ)^{n−1}Πx_i / [(1−μ)^{n−1}Πx_i + μ^{n−1}Π(1−x_i)].
- Assumptions: binary state, common prior, non-strategic experts, square loss, one-shot.
## Data sources named
None — pure theory; adversarial information structures constructed via posterior-belief martingales (Aumann–Maschler splitting lemma); worst-case optimizations verified numerically in Matlab.
## Findings (numbers and facts, not vibes)
- Thm. 1 (Blackwell): minimax regret = (1/8)(5√5−11) ≈ 0.0225, achieved by precision scheme. Naive baselines worse: DeGroot simple average = 1/16 = 0.0625; follow-the-most-extreme = 0.0714 (worse than averaging).
- Thm. 2 (conditionally independent): R(f_avg) = 0.0260 vs lower bound 0.0225 (gap 0.0035; Prop. 2 variant → 0.0250).
- Thm. 4 (many i.i.d. experts): R ≥ 1/4 − 3√(log n/n) → 1/4 as n→∞ — with many conditionally-i.i.d. experts and unknown prior, no scheme beats predicting 1/2.
- Prop. 1: with unrestricted correlation, nothing beats 1/2.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Model+market blending: replace simple averaging of GSE probability and market-implied probability with precision weighting — precision weighting cuts worst-case regret ~3× vs averaging (OTHER — forecast-combination lane).
- TRUST-SIGNAL: "follow the sharper forecast" is provably worse than averaging (0.0714 > 0.0625) — a guardrail against extremizing toward the more confident source; and averaging >~3 correlated sub-model outputs without a fitted prior is provably vacuous (ensemble guardrail).
## Engine-actionable? (yes/no + one-line what)
Yes — implement the precision scheme (closed-form, ~1 day) for the GSE-model vs market-implied probability blend, gated on beating simple averaging on backtested Brier score; reject follow-the-extreme as a combination rule.
