# arxiv-program/research/2026-09-21/arxiv-deep/1828-deep-generative-symbolic-regression.md
## What it is (1-2 sentences)
Full-text read of Holt, Qian & van der Schaar (2024), "Deep Generative Symbolic Regression" (arXiv:2401.00282): a two-step framework that pre-trains a conditional generative model p_θ(f|D) of equations and then gradient-refines the posterior at inference time (NGPQT) before discrete MAP search — shown to generalize to MORE input variables at inference than seen in pre-training. Verdict in file: ADAPT — the answer to GSE's "many correlated features" equation-discovery problem, pending a noisy-sports-data test.

## Key metrics/methods (formulas where given, else "not specified")
- DGSR framework: (1) Pre-training — conditional generative model p_θ(f|D), θ={ζ,φ}: Set Transformer encoder (permutation-invariant over {(X_i,y_i)} pairs, handles variable n) → latent V∈ℝ^w; Transformer decoder with hierarchical tree-state representation — generated tokens converted to tree states, embedded to d_s dims, concatenated to V → U∈ℝ^{w+d_s}. End-to-end loss = NMSE(f̂(X), y) = MSE/var(y) over mini-batches of t datasets × k sampled equations; non-differentiable token→equation step handled by policy gradients (RL-style pre-training gradients). (2) Inference — encode observed D, refine posterior with NGPQT (neural-guided priority queue training) on the same NMSE loss, then discrete Monte-Carlo search for the MAP equation.
- Recovery metric: A_Rec% = % of κ random-seed runs finding the true equation f*, plus average equation evaluations γ.
- Three demonstrated properties: (P1) invariance-aware representations (learns equation equivalences; generates distinct-but-equivalent truths with zero test NMSE after simplification; valid-equation generation rate high vs. NGGP's mostly-invalid); (P2) efficient inference refinement; (P3) recovers truths with d=12 variables after pre-training on fewer.
- Assumptions listed in file: NMSE is a good proxy for the Bayesian posterior; pre-training distribution covers test-truth structure; 10·d samples suffice to identify d-variable equations.

## Data sources named
- Pre-training: synthetic (equation, dataset) pairs.
- Evaluation: Feynman equations (d≥2, plus d=5 sets), synthetic d=12 sets (10·d samples per problem, independent 10·d train/test), SRBench ground-truth datasets (La Cava et al. 2021), R rationals (Krawiec & Pawlak 2013).
- No sports data in the paper; no code URL confirmed in the extracted text.

## Findings (numbers and facts, not vibes)
- SRBench ground-truth: DGSR 63.25% recovery vs. previous best 52.65% — new state of the art.
- R rationals: +10% recovery rate over prior best.
- Higher recovery than all baselines on many-variable sets (Feynman d=5, Additional Feynman, Synthetic d=12) with FEWER equation evaluations than RL methods; NESYMRES has the fewest evaluations but "significantly lower recovery rate" — DGSR is the better speed/accuracy tradeoff.
- Ablation: ≥10% better than NGGP on Feynman d=5; both pre-training and the encoder contribute (Table 4).
- P3 demonstrated: truths with more input variables than pre-training are recovered via inference-time refinement.
- Limitations: all evaluation on synthetic, noise-free equations — no noise study; recovery metric rewards exact-truth finding, not predictive quality; sports team-season data is ~32 rows/season (the low-n regime is untested); no wall-clock numbers for refinement; no public code.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (engine method — equation discovery): the pre-train-on-few-variables / refine-at-inference architecture directly targets GSE's many-correlated-features problem (e.g., d=12–20 candidate inputs per metric); P3 is the killer feature — pre-train on cheap low-dimensional sports equations, refine on the full 15-feature problem. Replaces 1827 (NeSymReS: no inference refinement, lower recovery) as the upgrade path.

## Engine-actionable? (yes/no + one-line what)
Yes — reimplement DGSR-lite (Set Transformer encoder + Transformer decoder with tree-state embeddings; pre-train on synthetic sports-plausible equations with d=4–8, then NGPQT-style REINFORCE refinement on nflverse team-game slices) with the acceptance gate: ADOPT inference-time refinement only if it improves 2024–2025 held-out RMSE ≥8% over no-refinement decoding at equal-or-fewer evaluations.
