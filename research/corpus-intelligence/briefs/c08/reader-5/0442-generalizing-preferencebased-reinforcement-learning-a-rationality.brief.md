# docs/arxiv-program/research/2026-09-21/arxiv-deep/0442-generalizing-preferencebased-reinforcement-learning-a-rationality.md
## What it is (1-2 sentences)
Deep read (arXiv:2607.11432v1) of Comparison-based RL (CbRL): a generalization of preference-based RL where the expert may label trajectory pairs "incomparable" (∥) in addition to preferring/indifferent, introducing the MOBT (multi-objective Bradley–Terry) model that recovers a Pareto frontier of policies from comparison feedback. Zero real data — all simulated.

## Key metrics/methods (formulas where given, else "not specified")
- MOBT scores (eqs. 6–10): h_≻ = 1_d^⊤δ/(2d); h_≺ = −1_d^⊤δ/(2d); h_≍ = α; h_∥ = √d·std(δ(τ,τ′)) + β; f(∘|τ,τ′) = softmax over h_∘. Incomparability = dispersion across objectives = conflict measure.
- Impossibility (Prop. 2.1): no rationality model f satisfies the desiderata AND has convex −log f in δ — non-convexity is intrinsic.
- Sample complexity (Thm 3.2, eq. 80): D_KL(P_{θ*}∥P_{θ̂}) ≤ 5ν√(((dk+2)log(12RL√N/ν)+log(1/δ))/N), ν=1+10RΛ√(dk), Lipschitz L=8Λ(√d+2).
- Learning: MLE under linear-utility u(τ)=Wφ(τ), ADAM (lr 1e-3, batch 256, ≤5000 epochs, 20% validation, early-stopping patience 10).

## Data sources named
None real. Simulated: 5×5 GridWorld (3 objectives), 1-D LQR (2 costs, closed-form Pareto frontier), multi-objective Hopper (mo-hopper-2obj-v5, MO-Gymnasium). K=500–10,000 pairs × M=1–10 labels (up to N=100,000 comparisons) from a synthetic SimTeacher. Code promised "after acceptance" — no public URL.

## Findings (numbers and facts, not vibes)
- Test KL: GridWorld 0.17±0.01 (K=500/M=1) → 0.04±0.01 (K=5000/M=10); MO-Hopper 0.15±0.02 → 0.05±0.01.
- Extended baselines (GridWorld, N=2000, TV distance): BT 0.6113±0.0036, TM 0.6115, RK-discard 0.4022, RK-as-tie 0.4613, Davidson-discard 0.4014, Davidson-as-tie 0.4594, MOBT 0.0435±0.0139 — order of magnitude lower; mislabeling incomparables as ties is worse than discarding them (0.4613 vs 0.4022).
- Pareto frontier recovery (LQR): hypervolume ratio 0.86±0.28 (1000 pairs) → 0.96±0.21 (5000 pairs).
- Optimization: local-optima count grows with incomparability ratio p; loss spread stays acceptable even at p=0.6.
- Limitations: no real human feedback; d assumed known; robustness KL grows with SimTeacher mistake probability ε; open challenge — informativeness decays with d, credit assignment ambiguous in high dimensions.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — multi-objective pick selection: objectives d=3 (expected edge/CLV, cover probability, variance/Kelly fraction); recover pick Pareto frontier per slate; learn Garrett's implicit edge-vs-safety-vs-variance weighting from his posted vs skipped picks.
- TRUST-SIGNAL — the incomparability/abstain label is a principled "learn to abstain" signal: record ∥ for considered-but-unposted draft picks; fit the MOBT-style softmax to estimate when Garrett rationally abstains.

## Engine-actionable? (yes/no + one-line what)
Yes — build a comparison-log dataset from 2024–25 posted vs skipped picks and fit the MOBT preference model; gate: ≥0.05 nats/comparison test log-likelihood over scalar BT on 2025 H1, and Pareto-frontier-filtered posted picks match scalar-ranking CLV on 2025 H2.
