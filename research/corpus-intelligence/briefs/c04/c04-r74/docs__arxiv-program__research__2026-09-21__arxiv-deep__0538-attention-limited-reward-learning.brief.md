# docs/arxiv-program/research/2026-09-21/arxiv-deep/0538-attention-limited-reward-learning.md
## What it is (1-2 sentences)
A deep-read note on Wenqian Xing (Stanford MS&E, 2026), arXiv:2607.04590v1 — an RLHF-theory paper asking when pairwise-comparison labels from rationally inattentive evaluators can even be represented by a scalar Bradley–Terry rating, deriving a cycle-consistency test (Prop. 1) and a "one-eighth law" pricing scalar-reward misfit (Prop. 7), with two empirical case studies. Reader verdict: ADAPT — the cycle-consistency diagnostic + one-eighth law are directly portable to GSE's BT-based rating aggregation and pairwise evaluation of engine variants.
## Key metrics/methods (formulas where given, else "not specified")
- BT baseline (Eq. 1): P[y¹≻y⁰|x] = σ(r(x,y¹) − r(x,y⁰)).
- Attention channel (Eq. 2/8): ℓ_z = η_z + β_z Δ*_z; β_z ≥ 0 attention multiplier (inverse information cost); η_z = default/order/salience term.
- Shannon RI (Eq. 4–5): max_{π_z} E[u_z] − κ_z I_z(ω;a); Lemma 1 generalized logit: log[π_z(1|ω)/π_z(0|ω)] = α_z + β_z{u_z(1,ω)−u_z(0,ω)}, β_z = κ_z⁻¹.
- Cycle criterion (Prop. 1, Eq. 9): scalar representation exists iff Σ_k ℓ_{i_k i_{k+1}} = 0 for every directed cycle.
- BT pseudo-true limit (Prop. 2, Eq. 11): r†(ℓ) = (BᵀWB)⁺BᵀWℓ + O(ε³) (weighted projection onto comparison graph's incidence matrix B).
- One-eighth law (Prop. 7, Eq. 29): inf_r Σ_e ρ_e D_KL(Bern(σ(ℓ_e))‖Bern(σ((Br)_e))) = (1/8)‖ℓ^cyc‖²_W + O(ε³); Hodge decomposition ℓ = ℓ^pot + ℓ^cyc prices the scalar-reward misfit.
- Non-identification (Prop. 3): (reward, attention, defaults) cannot be identified from passive comparisons; sample-complexity lower bound (Theorem 1): distinguishing Δ=δ from −δ needs ~1/(β²δ²) labels.
## Data sources named
Chatbot Arena: 57,477 pairwise battles between 64 LLMs (HF dataset arena-human-preference-55k); ties dropped (31%), ≥100 decisive votes per pair, largest connected component → 32 models, 74 pairs, 15,001 votes, cycle space dim 43. Perceptual comparison study [33]: 25 participants, 31,854 trials, with response times and gaze measurements. Haldane–Anscombe estimates q̂_e = (w_e + 1/2)/(n_e + 1). "Self-contained script reproduces all numbers" (no URL captured in extract). No sports data.
## Findings (numbers and facts, not vibes)
- Chatbot Arena: observed cyclic energy share 4.2% vs parametric bootstrap null mean 2.5%, 95th percentile 3.5% → p=0.008; LR statistic 70.6 on 43 df, p=0.007 — scalar-score representation rejected at 1%.
- Misfit pricing: best scalar fit loses 0.0034 bits/comparison (weighted KL); one-eighth law predicts 0.0038 bits — ratio 0.89 (max log-odds ≈1.8, small-ε hypothesis violated yet law still holds); noise-corrected population misfit ≈0.0013 bits/comparison.
- Projection reversal (Example 1): R* = (2,1,0), ℓ_AB=ε, ℓ_AC=ε, ℓ_BC=5ε → BT ranks B (10ε/3) > A (8ε/3) > C (0), reversed vs deliberative ranking despite every majority correct.
- Perceptual study: psychometric slopes vary 6× across evaluators (heterogeneous β directly observed); label carries 0.33 bits about gap sign but 0.0001 bits about magnitude; response time carries 0.035 bits about magnitude (350× more than the label); 1 s relative gaze dwell → +0.91 (SE 0.03) choice log-odds ≈ a full quality level.
- Stated caveats: Arena cyclicity can arise from aggregation over prompts/annotators, not per-query attention; conditions on platform-sampled pairs; perceptual task is not RLHF annotation; gaze association observational.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: no corpus paper has ever asked whether the BT scalar-rating assumption is falsified by the comparison data — this gives an exact test (cycle sums) and misfit price; NFL head-to-head game graphs are too sparse (~once/year pairs) for the cycle test on raw outcomes — build dense comparison graphs from engine-variant pairwise win rates across backtest weeks instead.
- OTHER: relevant to any human pairwise grading of GSE outputs (write-ups, pick cards) — tie to the 9.2 voice-floor workflow: weak preference may reflect hidden evaluation difficulty (route to second review) rather than genuine indifference; log decision latency alongside labels.
## Engine-actionable? (yes/no + one-line what)
Yes — 2–4 engineer-day diagnostic: build dense comparison graphs (engine variants v5.2.6–v5.2.9 pairwise win rates per backtest week), compute Hodge decomposition of the log-odds field and bootstrap the cyclic-energy-share null; if p<0.05, map top circulating triangles to named regimes and move to regime-conditioned BT ratings (r_i(x) = θ_i + φ_iᵀx); if null, the corpus's BT-rating practice is empirically vindicated — either outcome is informative.
