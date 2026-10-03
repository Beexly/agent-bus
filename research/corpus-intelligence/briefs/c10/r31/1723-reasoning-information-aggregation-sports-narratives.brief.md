# arxiv-program/research/2026-09-21/arxiv-deep/1723-reasoning-information-aggregation-sports-narratives.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2406.12084v2 (Hu et al., 2026), which tests whether LLMs can aggregate scores from NBA play-by-play narratives, introducing the Discounted Cumulative Accuracy (DCA) metric, a divide-and-conquer batching protocol, and SportsGen, a controllable synthetic narrative generator for hallucination stress-testing. Verdict ADAPT: adapt the evaluation methodology (DCA, DnC-10 batching, synthetic stress testing), never the expectation that LLMs do this unaided — even GPT-4o fails exact aggregation on real narratives.
## Key metrics/methods (formulas where given, else "not specified")
- DCA = Σ_{t=0}^{T} p_t(1 − t/T), with p_t = (1/N)Σ_n 1{|s_n − s*_n| = t} — exact accuracy at T=0, linear near-miss discount as T grows (DCG-inspired). Tolerances tested T ∈ {0,1,3,5,10}; rankings stable across T.
- Strategies: monolithic vs divide-and-conquer batches of 1/3/10/30 plays (DnC-{1,3,10,30}) or by player (DnC-P), aggregate partial sums.
- SportsGen: turn-by-turn Markov action graph over 16 actions; team efficiency E ∈ [0,100]; S:NS ratios ∈ {1:2, 1:3, 1:4, 1:5}; per-action Gaussian timestamps; templates expanded by GPT-4o; avg game 466 plays / 6,229 tokens.
## Data sources named
28,492 NBA games (2002–2023) from ESPN play-by-play; D_H = 400 human-written narrative quarters (eval); D_S = 480 synthetic quarters per setting; models tested: GPT-4o, GPT-3.5-Turbo, Claude-3-Opus/Sonnet/Haiku, Gemini-Pro-1.5, Llama-3-8B/70B-Instruct.
## Findings (numbers and facts, not vibes)
- Monolithic accuracy: Claude-3-Opus 67.20% / DCA 93.56; GPT-4o 45.54% / 86.70; Llama-3-70B 17.45%; Llama-3-8B 4.43% (severe score hallucination); Gemini-Pro-1.5 4.58% (weakest analytical reasoning). (OTHER: LLM numeric-extraction ceiling)
- Divide-and-conquer: GPT-4o DnC-10 → 88.61% accuracy / 98.41 DCA (nearly doubles monolithic); Claude-3-Opus DnC-10 84.16%; Llama-3-70B DnC-3 80.45%. Batch-10 optimal for strong models, batch-3 for weaker; batch-1 underperforms everywhere. (OTHER: default inference protocol for narrative aggregation)
- Denser scoring degrades all models; symbolic substitution (fictional names) degrades GPT-4o/Llama-3-70B, Claude-3-Opus most resilient. (OTHER: adversarial stress dimensions)
- Human/GPT-4 preference: SportsGen preferred 39%, tie 7–9%, NBA narratives 52–54% — synthetic is competitive but not identical. (OTHER)
- DnC-10 costs ~10× the calls of monolithic — accuracy gain has an unquoted price. (TRUST-SIGNAL: cost-per-accuracy Pareto frontier must be measured before production use)
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- GPT-4o 45.54% → 88.61% via DnC-10 batching: OTHER (mandate DnC-10 batching for all GSE narrative-aggregation inference; monolithic is rejected for numeric extraction)
- DCA tolerance metric with stable rankings: OTHER (standard metric for all numeric-extraction evals; default T=3 for point totals)
- SportsGen controllable-stress framework: OTHER (template for GSE's hallucination auditing: SportsGen-NFL with dense-scoring, no-huddle, penalty-heavy scenarios)
- 10× call cost of DnC-10 unquoted: TRUST-SIGNAL (measure accuracy-per-dollar; DnC-3 may be the production Pareto choice)
- Score-summation is the easiest possible aggregation — real per-player attribution is strictly harder, so these accuracies are an upper bound: TRUST-SIGNAL (attribution gap must be quantified separately)
## Engine-actionable? (yes/no + one-line what)
yes — implement DCA as the standard numeric-extraction eval metric, DnC-10 batching as default inference (with a cost-aware Pareto check), and a SportsGen-NFL synthetic stress harness gating any extraction model at DnC-10 DCA(T=3) ≥ 0.90.
