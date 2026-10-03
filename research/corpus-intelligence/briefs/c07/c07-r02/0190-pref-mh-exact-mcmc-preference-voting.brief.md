# arxiv-program/research/2026-09-21/arxiv-deep/0190-pref-mh-exact-mcmc-preference-voting.md
## What it is (1-2 sentences)
An exact MCMC sampler for target distributions π(x) ∝ p₀(x)e^{s(x)} where the score s(x) is only accessible through stochastic pairwise-preference judges following the Bradley–Terry model: the N-vote acceptance rule α_N(x,x′;K) = min{1, r₀(x,x′)·K/(N−K+1)} is exact for every integer N ≥ 1 and Peskun–Tierney optimal among exact rules with the same proposal and N queries. Verdict in the source: ADAPT — port as GSE's DFS slate/betting-card sampler with a BT-consistent scoring judge, not raw LLM votes.
## Key metrics/methods (formulas where given, else "not specified")
- Target: π(x) ∝ p₀(x)e^{s(x)}. BT pairwise probability: p_J(x≺x′) = σ(s(x′)−s(x)).
- Ideal oracle acceptance: α*(x,x′) = min{1, r₀(x,x′)·p/(1−p)}, r₀ = p₀(x′)q(x|x′)/[p₀(x)q(x′|x)].
- N-vote Pref-MH rule: α_N(x,x′;K) = min{1, r₀(x,x′)·K/(N−K+1)}; K/(N−K+1) unbiased-in-ratio estimator of p/(1−p).
- Multi-judge: α = min{1, r₀·∏_i K_i/(N−K_i+1)}.
- Theorems: (1) no exact oracle-based BT-MH implementation exists with fixed sampling budget; (2) exact detailed balance/stationarity with random unbounded-but-finite expected-N budget; (3) Peskun–Tierney optimal among exact rules with same q and N.
- Assumptions: judge votes follow Bradley–Terry (transitive latent scores, independent votes conditional on the pair), judge stationary; exactness evaporates under non-BT judges.
## Data sources named
2D toy densities (banana, ring); MS COCO prompts (image generation, diffusion base sampler, LLM aesthetic comparator judge); ZINC database molecules (QED, SA, diversity, MolSkill); code: https://github.com/Ariels34/Pref-MH. Convergence diagnostics: R-hat, ESS.
## Findings (numbers and facts, not vibes)
- Image generation: Pref-MH 63.6% preference success vs 7.4% Pointwise-MH vs 4.5% base; aesthetic scores 6.395 / 6.289 / 6.287.
- Molecule design Table 1: Pref-MH QED 0.698±0.002, SA 0.781±0.001, diversity 0.899±0.001, MolSkill mean −1.432±0.398, median −1.116±0.396 (lower MolSkill = better).
- Toy diagnostics: R-hat → 1, ESS grows with chain length for all N ≥ 1; larger N = higher ESS per step at higher query cost.
- Weaknesses (source's adversarial view): no BT-consistency diagnostic reported for the LLM judges; cost per proposal unreported; Pointwise-MH is a weak baseline; optimality is only among exact rules with same q and N.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — DFS slate sampler: exact sampler for preference-tilted distributions; π(x) with x = DFS lineup, p₀ = GSE's lineup-generator distribution, s(x) = BT-consistent slate-quality/contest-selection utility; offline batch generation of diversified slates via local lineup mutations (N = 4–8).
- OTHER — INFERENCE: the BT-consistency diagnostic suite (transitivity violation rate, position-bias test, stationarity/drift test) + repair layer (fit latent BT score model to votes, sample from fitted model) is the precondition that turns the paper's silent assumption into a measured, enforced guarantee.
## Engine-actionable? (yes/no + one-line what)
Yes — ADAPT if walk-forward 2025 shows ≥15% higher realized mean score at equal-or-better diversity vs i.i.d. p₀ draws, and the judge passes BT-consistency diagnostics (transitivity ≥ 95%); never deploy on raw LLM pairwise votes without that check.
