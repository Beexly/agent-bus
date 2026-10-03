# arxiv-program/research/2026-09-21/arxiv-deep/1153-policy-learning-with-abstention.md
## What it is (1-2 sentences)
A Stanford theoretical paper (Sawarni et al. 2026, arXiv:2510.19672) on learning policies that may abstain (defer to a safe default) under uncertainty, with fast statistical rates, plus an abstention-powered safe-policy-improvement protocol. The source ledger verdict is ADAPT — the disagreement-based abstention rule and the LCB-gated deployment protocol transfer to GSE's post/no-post decision and engine-upgrade certification.
## Key metrics/methods (formulas where given, else "not specified")
- Abstaining value: V^(p)(π) := E[1{π(X)≠∗}v(π,X) + 1{π(X)=∗}g_o(∗,X)], g_o(∗,x) := E[(Y(1)+Y(0))/2 + p | X=x] (abstention earns random-guess value + bonus p).
- Abstaining regret (eq. 2): Reg_n^(p)(π) := V(π∗) − V^(p)(π).
- Theorem 3.1: Reg_n^(p)(π̃) ≲ (d log(nd) + log(1/δ)) / (p n κ²) w.p. ≥ 1−δ — fast O(1/n); p acts as a "synthetic margin."
- Prop 4.3: min_{P∈P_α} V(π) = V^(α/2)(π) − α — abstention bonus p = α/2 equals worst-case value under a W1-ball distribution shift of radius α.
- Algorithm 1: learn near-optimal set Π̂ on D1, project each π ∈ Π̂ to abstain exactly where it disagrees with π̂, then run EWM with abstention on D2. Unknown-propensity variant uses doubly-robust pseudo-outcomes.
- Algorithm 3 (safe policy improvement): grid bonuses → abstaining policies on D_train → impute abstentions with baseline ω → one-sided LCB test V_n(π̂)−V_n(ω) − z_{1−δ/k}σ̂/√n_test > 0 with Bonferroni correction → deploy first passing candidate.
## Data sources named
Purely theoretical + synthetic simulations; no real data. Abstention sims: X i.i.d. standard normal, clipped logistic propensity [0.1, 0.9], κ=0.1, δ=0.05. Safe-upgrade sims: X ∼ U[0,1]^5, τ(X)=2(X1+X2−1), noise variance 0.01–1.0, n ∈ {200,500,1000,2000,5000}, 500 reps per setting, >2,000 total reps, bonus grid {0, 0.01, 0.05, 0.10, 0.20}.
## Findings (numbers and facts, not vibes)
- Safe-upgrade simulations: at n ≤ 500, EWM wins; at n ≥ 1000, Algorithm 3 dominates — highest improvement rate, largest mean value gain among accepted policies, Type-I error ≤ 0.05 across >2,000 reps.
- Abstention beat EWM in most configurations of the abstraction sims (reported qualitatively via figures, no numeric tables — magnitudes are paper claims, not verified numbers).
- Limitations: bonus p is a free parameter (1/p in the rate constant); regret is measured against the best *binary* policy so abstention gets credit for the free bonus; binary treatments only; no real-data validation.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Disagreement-abstention rule (TRUST-SIGNAL): abstain on a post/no-post decision iff K near-optimal selection rules (e.g., 10 bootstrap-resampled logistic heads) disagree — a committee-disagreement rule more principled than a single score threshold; replaces current threshold-based abstention if it wins on selective ROI.
- Safe engine upgrade protocol (TRUST-SIGNAL): LCB-gated deployment — learn candidate selection policy on D_train, impute abstentions with production policy, deploy only if lower-confidence-bound ROI improvement > 0 on D_test; certified upgrades for the public-facing engine.
- Prop 4.3 adaptive-p interpretation (TRUST-SIGNAL): larger abstention bonus early season (regime uncertainty) as a distribution-shift hedge — abstain more in weeks 1–4, decay later (INFERENCE from the paper's result to GSE; paper itself had no season data).
## Engine-actionable? (yes/no + one-line what)
Yes — implement the disagreement-abstention committee for post/no-post (K=10 bootstrap heads, abstain on any disagreement) gated on ≥2 selective-ROI points over the threshold rule at matched abstention rate, plus the LCB safe-upgrade gate for engine version certification.
