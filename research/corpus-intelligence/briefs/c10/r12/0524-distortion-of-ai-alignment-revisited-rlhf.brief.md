# arxiv-program/research/2026-09-21/arxiv-deep/0524-distortion-of-ai-alignment-revisited-rlhf.md
## What it is (1-2 sentences)
Deep-read of arXiv:2609.12651v1 (Oko et al., 2026): a theoretical refinement of RLHF distortion bounds, showing the exponential blowup in Bradley-Terry temperature is a distribution-mismatch artifact and RLHF is an O(β)-distortion utilitarian aligner when preference data are on-policy. Corpus verdict: REJECT — LLM-alignment theory with no sports-relevant method, data, or transfer path.
## Key metrics/methods (formulas where given, else "not specified")
- BT model: P(i prefers x over y) = σ(β(u(x) − u(y))), σ(t) = 1/(1+e^−t).
- Distortion (alignment): Dist(π) = max_{π':KL(π'∥π_ref)≤τ} E[u] / E_{u∼D,x∼π}[u(x)]; social choice: numerator = max_x E[u(x)].
- Assumption 2.1 (distribution mismatch): max_x log(π_ref(x)/µ(x)) = B < ∞.
- Theorem 3.1: Dist(π_Borda) ≤ C1β + 4 (improves prior O(β²)).
- Theorem 4.1: Dist(π_RLHF) ≤ C2·min{e^B·τ, B, Bτ^−1 + 1}·β + 4; at B=0 (µ=π_ref): O(β), matching the algorithm-independent Ω(β) lower bound.
- Effective utility: û(x) = 0 if P_{y∼µ}[u(y)−u(x) > cβ^−1] ≥ 1/2; = cβ^−1 if u(x) > cβ^−1; = u(x) otherwise, 0 < c ≤ 3/16.
- Reward clipping: r_min via fixed-point equation on E_{y∼µ}[σ(r_min − r̄(y))] (numeric constants garbled in text extract, not quoted); r_max = r_min + 2c.
- Assumptions: BT-generated preferences; utilities in [0,1]; large-n MLE convergence; bounded log density ratio; no heterogeneity assumption beyond D.
## Data sources named
Skywork-Reward-V2-Llama-3.1-8B and UltraRM-13B reward models evaluated on 5,000 preference instances from Skywork-Reward-Preference-80K-v0.1 and UltraFeedback (RewardBench); a synthetic 4-alternative experiment (β=10, B=11.5, mirror descent η=10^−3).
## Findings (numbers and facts, not vibes)
- Max pairwise reward difference Δr = 108.8 (Skywork-Reward-V2-Llama-3.1-8B), 25.4 (UltraRM-13B) across 5,000 instances — interpreted as practical reward models operating in the BT nonlinear regime.
- Synthetic experiment: on-policy preference data (µ=π_ref) → distortion converges to 1; mismatched → distortion grows while average reward declines.
- Analytic: Dist(π_Borda) ≤ C1β + 4 vs prior O(β²); Dist(π_RLHF) ≤ C2·min{e^Bτ, B, Bτ^−1+1}·β + 4; optimal O(β) at B=0; prior e^Ω(β) exponential ruled out unless mismatch extreme.
- No code or data availability stated; the empirical component is descriptive (does not measure distortion itself); B estimation via per-completion log-likelihoods noted unstable.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- No sports-relevant method, data, or transfer path; the only near-miss (BT temperature nonlinearity) is about utility aggregation across heterogeneous users, not score prediction: OTHER.
## Engine-actionable? (yes/no + one-line what)
No — theory paper in LLM post-training; the practical takeaway (train on the distribution you'll be applied to) is already enforced by GSE's backtesting; verdict REJECT stands.
