# arxiv-program/research/2026-09-21/arxiv-deep/0535-riskaware-preference-learning-for-stochastic-outcomes.md
## What it is (1-2 sentences)
Full-paper brief of a robot-navigation preference-learning study (Tung et al., arXiv:2607.15483v1) comparing Expected-Utility vs Cumulative-Prospect-Theory (CPT) learners inside a Bradley-Terry pairwise-preference framework. Verdict: ADAPT — the machinery (CPT value + Prelec probability weighting inside a BT likelihood) is the textbook formalization of the favorite–longshot bias, with a concrete spec for fitting market probability distortion in GSE's EV pipeline.

## Key metrics/methods (formulas where given, else "not specified")
- Bradley–Terry: P(A≻B) = σ(β(V(A) − V(B))), β>0.
- CPT value function: v(x) = x^α (x≥0); v(x) = −λ(−x)^η (x<0), λ>1 loss aversion.
- Prelec probability weighting: w(p) = exp(−(−ln p)^γ); γ<1 overweights rare events. Decision weights π_i via rank-dependent cumulative transformation (Tversky & Kahneman 1992).
- CPT value: V_CPT(A) = Σ_i π_i v(θᵀφ(o_i) − r), r = reference point.
- Teacher profiles: T&K (α=0.88, η=0.88, λ=2.25, γ=0.61, δ=0.69) and Strong (α=0.80, η=0.80, λ=3.00, γ=0.50, δ=0.50). Target metric: held-out action regret.

## Data sources named
Synthetic 2D social-navigation simulation (Helbing–Molnár pedestrian model via pysocialforce; K=50 stochastic rollouts per scene×action; 5-dim features: clearance, pedestrian deviation, robot progress, path smoothness, collision count). No human data, no real-world data — validation explicitly future work.

## Findings (numbers and facts, not vibes)
- EU teacher → EU learner wins (extra CPT parameters hurt sample efficiency — expected).
- CPT (T&K) teacher → CPT learner substantially beats EU learner; CPT regret decreases steadily with N while EU learner plateaus higher. Pattern more pronounced under Strong teacher.
- Core claim: when preferences are risk-sensitive, an EU learner "explains" risk-sensitive choices by distorting recovered rewards — conflating what users value with how they weight uncertainty; the CPT learner separates the two.
- No numeric regret values quoted in extract (curves in Figure 2); 5 seeds; no significance tests; no baselines beyond EU-vs-CPT.
- INFERENCE: the paper's betting-relevant consequence (overweighting small probabilities → longshot overbetting = favorite–longshot bias) is named in the brief's GSE overlap section as the textbook CPT prediction, not demonstrated on market data in the paper.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (market microstructure / behavioral economics): CPT probability-weighting formalizes the favorite–longshot bias mechanism.
- QB-BEHAVIOR (speculative): the CPT framing (loss aversion λ, reference-point r, gain/loss asymmetry) is the natural parametric language for modeling QB risk-sensitivity (e.g., 4th-down conservatism, red-zone aggressiveness) if behavioral data exist — not demonstrated in the paper.
- TRUST-SIGNAL: the brief's reproducible test gates adoption on measuring the distortion (γ<1 with 95% CI excluding 1) rather than assuming it — honest calibration-state labeling discipline.

## Engine-actionable? (yes/no + one-line what)
Yes — fit Prelec w(p) mapping GSE calibrated probabilities → market-implied probabilities on NFL moneyline history to quantify longshot/favorite distortion zones, then CPT-adjust edge calculation in the EV pipeline; gates: fitted γ<1 (95% CI excludes 1) AND ≥2pp ROI gain over naive edge on a 2024–2025 holdout.
