# docs/arxiv-program/research/2026-09-21/arxiv-deep/1972-llm-observational-data-causal-discovery.md
## What it is (1-2 sentences)
Ledger note on arXiv:2504.10936 (Fujitsu/TU Dresden, 2025): embeds k=100 sampled observational rows directly in the LLM prompt for causal discovery, testing two prompting strategies — pairwise (O(n²)) and BFS traversal (O(n)) — against PC and GES baselines on BNLearn benchmark networks.
## Key metrics/methods (formulas where given, else "not specified")
- Metrics: precision, recall, F1 (edge classification), NHD (normalized Hamming distance), Ratio. No new equations.
- Method: pairwise prompting (per-variable-pair causal decision, O(n²) queries) vs BFS prompting (LLM proposes edges graph-traversal style, cycle-checked before insertion, O(n) queries); variants add observational data and/or Pearson correlations to the prompt.
- Setup: gpt-4-0125-preview, 4 queries per prompt at temperatures {0, 0.5, 0.7, 1.0}; LLM fixed at k=100 sampled rows vs baselines at n={100, 500, 1000}.
## Data sources named
BNLearn benchmarks: ASIA (8 vars, lung-disease diagnosis), CANCER, SURVEY (transport usage by social group). Sampling strategies tried: random, cluster, systematic, adaptive K-means (no significant difference; random reported).
## Findings (numbers and facts, not vibes)
- BFS+ObsData best overall: F1 0.77 vs PC 0.33 on one dataset (+0.44); 0.90 vs 0.50 on another (+0.40); consistent +0.29 to +0.44 F1 vs GES across datasets.
- Adding observational data: pairwise F1 0.47→0.58 (+0.11); BFS 0.66→0.77 (+0.11). Lowest NHD and Ratio for BFS+ObsData on all datasets.
- Pearson-correlation prompt variants help, but data-in-prompt wins.
- Leakage note (file's own): ASIA/CANCER/SURVEY are textbook networks likely in GPT-4's training data — margin may partly measure memorization; paper does not control for this.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: LLM-based structure learning as an edge-proposal prior feeding statistical methods (NOTEARS/PC/PCMCI+), not as an oracle.
- TRUST-SIGNAL: memorization-control gate — anonymized V1..V35 labels holdout run distinguishes data-driven value from name memorization; edges dropped unless statistically confirmed (probe battery).
## Engine-actionable? (yes/no + one-line what)
Yes — spec: BFS-style prompting over ~35 GSE indicators with sampled team-season rows to propose candidate edges as priors for NOTEARS (ledger 1962) / PC/PCMCI+ (1963); kill pilot if anonymized-label LLM F1 < PC F1 or >50% of proposed edges fail statistical confirmation. INFERENCE: effort ~2 engineer-days; cost gate <$0.50/edge.
