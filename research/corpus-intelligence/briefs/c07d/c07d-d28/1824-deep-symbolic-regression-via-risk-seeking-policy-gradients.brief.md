# arxiv-program/research/2026-09-21/arxiv-deep/1824-deep-symbolic-regression-via-risk-seeking-policy-gradients.md
## What it is (1-2 sentences)
Deep Symbolic Regression (DSR, arXiv:1912.04871): an RNN emits distributions over expression trees trained by a risk-seeking policy gradient that optimizes best-case (top-ε quantile) rather than average reward, plus in-situ token-mask constraints during generation. It beats GP, commercial tools, and vanilla policy gradients on exact expression recovery.

## Key metrics/methods (formulas where given, else "not specified")
- Risk-seeking objective: J_risk(θ;ε) ≜ E_{τ∼p(τ|θ)}[R(τ) | R(τ) ≥ R_ε(θ)] (Eq. 1), where R_ε(θ) is the (1−ε)-quantile of rewards under the current policy.
- Gradient (Proposition 1): ∇_θ J_risk(θ;ε) = E_{τ∼p(τ|θ)}[(R(τ)−R_ε(θ))·∇_θ log p(τ|θ) | R(τ) ≥ R_ε(θ)]
- Monte-Carlo estimate: (1/εN) Σ_i [R(τ⁽ⁱ⁾) − R̃_ε(θ)] · 1_{R(τ⁽ⁱ⁾) ≥ R̃_ε(θ)} ∇_θ log p(τ⁽ⁱ⁾|θ)
- Differs from REINFORCE in two ways: (a) theoretically-prescribed baseline (the quantile); (b) only the top-ε fraction of each batch contributes to the gradient. Mirror-image of CVaR (risk-averse, bottom ε) — DSR is risk-seeking (top ε).
- In-situ constraints: arity enforcement by node type (e.g. cosine = unary → one child), no nested trig, length limits, constant placement, no redundant subtrees — masked at generation time, not post-hoc penalties.
- RNN emits tokens conditioned on previously sampled tokens; parent and sibling embeddings fed as RNN inputs.
- Reward = normalized RMSE-based fitness.

## Data sources named
- Nguyen symbolic regression benchmark suite (Uy et al. 2011): 12 community-vetted benchmark expressions.
- Literature-reported values from Neat-GP, GrammarVAE, BSR, Eureqa setups (recapitulated per their papers).
- Harmonic series partial sums H_n ≈ γ + log(n) + 1/(2n) − 1/(12n²) (Euler 1755) as a discovery bonus experiment.
- Synthetic noise experiments: Gaussian noise on the dependent variable, σ proportional to RMS of y, proportionality constant swept 0 (noiseless) → 0.1.

## Findings (numbers and facts, not vibes)
- DSR significantly outperforms all five baselines (PQT, VPG, GP, Eureqa, Wolfram) in exact recovery rate across the Nguyen suite, p < 10⁻³ (Table 1; bold across all benchmarks).
- Noise: Wolfram "catastrophically fails for even the smallest noise level"; DSR outperforms all baselines at every noise level and dataset size; with 10× data, recovery improves across noise levels (Fig. 4).
- Literature comparisons: DSR "greatly outperforms each study's published results" — Table 8: DSR median RMSE 0 on Neat-1, Neat-2 vs Neat-GP's 0.0779, 0.0579.
- Ablation: risk-seeking objective beats standard policy gradient; in-situ constraints improve recovery.
- Harmonic series: rediscovered H_n ≈ γ + log(n) + 1/(2n) + 1/(11.3776n + 15.725) + 0.327981 with γ ≈ 0.57721 (Euler–Mascheroni constant) emerging naturally — a novel variant of Euler's 1755 formula.
- Hyperparameter tuning done on Nguyen-7 and Nguyen-10 only (grid search: 800 combos GP, 81 each for DSR/PQT/VPG); the other 10 benchmarks effectively held out.
- Noisy runs use exact equivalence anywhere on the reward–complexity Pareto front (to avoid rewarding overfit).
- Limitations noted in the file: benchmark suite is tiny (12 expressions, 1–2 variables); exact-recovery metric is the wrong objective for GSE (predictive metrics matter, not rediscovery); constants are harder for DSR than PySR's BFGS loop (RNN must emit constant tokens); RNN training is sequential and sample-hungry vs embarrassingly parallel GP; literature comparisons recapitulated from papers (reproduction fidelity risk); real sports data has correlated features, regime breaks, measurement error — none tested.
- Reference implementation exists as open-source `deep-symbolic-regression` package (recorded as unverified in file).
- GSE implementation spec in file: risk-seeking fine-tuning as a PySR post-pass — embed PySR hall-of-fame expressions, run small RL loop (REINFORCE with top-ε quantile baseline, ε ≈ 0.2) mutating expressions, reward = held-out-season predictive r, hard constraint mask (forbid: >1 nested trig, single-input expressions, >15 nodes). Alt: DSR-lite in PyTorch (LSTM over prefix-notation token sequences, reward = −NMSE + complexity penalty). Data: nflverse team-season pipeline. Effort: ~2 engineer-days for post-pass; ~1 week from scratch.
- Acceptance gate in file: ADOPT if best ≤15-node expression beats best PySR-only ≤15-node expression by ≥0.03 test r on 2024–2025 with constraint mask preventing degenerate solutions; REJECT if RL loop collapses to PySR's hall-of-fame or underperforms.
- Improvement experiment in file: risk-seeking CVaR scheduling — anneal ε from 0.5 → 0.05 over training (broad exploration early, elite exploitation late), mirroring simulated annealing's temperature schedule.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (engine equation-discovery): the risk-seeking framing is the single most transferable idea — in metric invention GSE cares about the single best equation on the Pareto front, not average batch quality; this directly serves the equation-discovery/calibration program. Full sentence: adopting top-ε best-of-batch optimization for the PySR hall-of-fame post-pass changes the search doctrine from "find many good equations" to "find the one elite equation," which matches how Garrett wants metrics built (one metric per role).
- SCHEME (sports-domain structure): the in-situ constraint mechanism enforces domain priors during generation (e.g., forbid single-variable expressions, enforce monotonicity in EPA, node caps) rather than as post-hoc penalties — serves the metric-invention program by letting football knowledge shape the search space a priori.
- QB-BEHAVIOR: the risk-seeking objective transfers conceptually to QB-behavioral profiles — when profiling QBs we care about elite-case structure (what a QB does at his best under structure) rather than his average throw distribution; the file does not make this connection (INFERENCE).
- CONTRADICTION: the file claims DSR "greatly outperforms" PySR-family GP methods, yet GSE's own stance (in this file's GSE-overlap section) keeps PySR as the production engine — the resolution stated is that DSR's *ideas* port as a post-pass, not that DSR replaces PySR on noisy tabular sports data; untested on sports data.
- UNCERTAIN: whether ε ≈ 0.2 risk-seeking transfers to noisy sports data where the "best case" batch member may simply be the luckiest overfitter — the acceptance gate's constraint mask is the proposed guard, but this is untested.

## Engine-actionable? (yes/no + one-line what)
Yes — implement the risk-seeking PySR post-pass (top-ε quantile RL on hall-of-fame expressions, ε≈0.2, constraint mask: no >1 nested trig, no single-input expressions, ≤15 nodes) against the nflverse team-season pipeline; adopt at ≥0.03 test-r gain on 2024–2025.
