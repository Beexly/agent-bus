# arxiv-program/research/2026-09-21/arxiv-deep/0535-riskaware-preference-learning-for-stochastic-outcomes.md
## What it is (1-2 sentences)
arXiv:2607.15483v1 — a robot social-navigation paper comparing Expected-Utility vs Cumulative-Prospect-Theory (CPT) preference learners inside a Bradley–Terry likelihood, using synthetic EU vs risk-sensitive users. Verdict in the file: ADAPT — the domain does not transfer, but the machinery (CPT value + Prelec probability-weighting inside BT) is a parametric formalization of the favorite–longshot bias, intended for fitting to market-implied probabilities to quantify betting-market probability distortion.
## Key metrics/methods (formulas where given, else "not specified")
- Bradley–Terry: P(A≻B) = σ(β(V(A) − V(B))), β>0 inverse temperature.
- EU value: V_EU(A) = Σ_i p_i θᵀφ(o_i).
- CPT value: V_CPT(A) = Σ_i π_i v(θᵀφ(o_i) − r), r = reference point.
- CPT value function: v(x) = x^α for x≥0; v(x) = −λ(−x)^η for x<0, λ>1 (loss aversion).
- Prelec probability weighting: w(p) = exp(−(−ln p)^γ); γ<1 overweights rare events; decision weights π_i from rank-dependent transformation over cumulative probabilities (Tversky & Kahneman 1992).
- Synthetic teacher profiles (Table I): T&K (α=0.88, η=0.88, λ=2.25, γ=0.61, δ=0.69); Strong (α=0.80, η=0.80, λ=3.00, γ=0.50, δ=0.50). Ground-truth θ⋆ = [0.10, −0.20, 0.30, 0.05, −0.25]. K=50 stochastic rollouts per scene×action.
## Data sources named
Synthetic only: 2D simulated social-navigation environment (corridors, intersections, doorways, open spaces; Helbing–Molnár social force pedestrian model via pysocialforce); 7 parameterized robot meta-actions; feature vectors f ∈ ℝ⁵ (min pedestrian clearance, pedestrian deviation, robot progress, path smoothness, collision count). No human-subject data, no code/repo stated.
## Findings (numbers and facts, not vibes)
- EU teacher → EU learner wins (extra CPT parameters reduce sample efficiency).
- T&K CPT teacher → CPT learner substantially beats EU learner; regret decreases steadily with N while EU learner plateaus higher. Strong CPT teacher → same pattern, more pronounced.
- Core finding: under a risk-sensitive teacher, an EU learner "explains" risk-sensitive choices by distorting the recovered reward — conflating what users value with how they weight uncertainty; the CPT learner separates the two.
- No numeric regret values quoted in the extract (curves in Figure 2 only); 5 seeds; no significance tests; no baselines beyond EU/CPT.
- GSE implementation spec in file: fit w(p)=exp(−(−ln p)^γ) mapping GSE model probabilities → market-implied probabilities over historical NFL moneyline/spread markets; estimate γ per segment (public vs sharp games, primetime vs not); output a per-game "CPT adjustment" re-weighting the EV calc. Effort estimate: 2–3 engineer-days.
- Reproducible test gate: ADAPT if fitted γ<1 with 95% CI excluding 1 on 2020–2023 fit AND CPT-adjusted edge selector beats naive edge selector by ≥2pp ROI on 2024–2025 holdout; REJECT if γ≈1 or no ROI gain.
- Improvement experiment: two-sided CPT mixture — market-implied p = π·w_public(GSE p; γ_pub) + (1−π)·w_sharp(GSE p; γ_sharp≈1), π from betting% vs handle% splits; the estimated π per game becomes a sharp-action feature.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — no QB/coaching/OL/scheme content; market-probability distortion model for the betting/EV lane. (TRUST-SIGNAL only in the broadest sense — market behavior reveals public vs sharp dynamics — not a player/coach quote.)
## Engine-actionable? (yes/no + one-line what)
Yes — fit Prelec γ on historical NFL moneyline/spread closings vs GSE calibrated probabilities; use estimated longshot distortion (γ<1) to CPT-adjust edge calculations before EV thresholds.
