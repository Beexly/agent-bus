# arxiv-program/research/2026-09-21/arxiv-deep/1128-causal-orders-inconsistent-knowledge.md
## What it is (1-2 sentences)
Deep read of arXiv:2412.14019 (Baldo et al. 2025, "Retrieving Classes of Causal Orders with Inconsistent Knowledge Bases" / MATS). A pipeline that queries an LLM repeatedly for pairwise causal-direction judgments, builds self-consistency score matrices, and enumerates equally optimal causal orderings via weighted feedback arc set optimization; verdict ADAPT as a hypothesis-ranking tool only, never as evidence.
## Key metrics/methods (formulas where given, else "not specified")
- Method: prompt LLM repeatedly for pairwise direction ("Does {var_i} cause {var_j}? (A) Yes (B) No", expert-framing system prompt, temperature 0.1, 5 runs with rephrasing) → self-consistency score matrix → semi-complete partial DAG → dense MPDAG / maximally consistent acyclic tournaments → solve weighted feedback arc set (NP-hard) to enumerate equally optimal causal orders.
- Evaluation metrics: D_top (topological-order distance, lower is better) and SHD vs NOTEARS.
- Baselines: NOTEARS (linear and nonlinear), PC/GES-style data-driven methods on 1,000 simulated samples per graph.
- LLMs tested: GPT-4.1-nano (temp 0.1), mistral:7b, llama3.1.
- Assumptions: LLM parametric knowledge holds correct causal direction signal; repeated rephrased queries elicit an honest consistency distribution; pairwise consistency scores are meaningful edge weights.
## Data sources named
12 epidemiology/public-health causal DAGs from bnlearn + literature: Asia (6 nodes/8 edges), Cancer (7/5), Climate (8/8), Covid 1-4 (9-12 nodes), Genetic (13), MSU (14), Neighborhood (15), Sachs (16/11/17), Supermarket (17/7/12). 1,000 simulated samples per graph for data-driven baselines (linear and nonlinear variants). Code: github.com/Federic0Bald0/MATS (stated).
## Findings (numbers and facts, not vibes)
- MATS achieved the lowest D_top on 7/12 linear graphs and 8/12 nonlinear graphs.
- On four graphs, MATS returned exclusively correct causal orders.
- SHD vs NOTEARS: MATS competitive or better across the 12 graphs (per-graph values in paper Table 9; aggregate claim, not uniform dominance).
- LLM ablation: gpt-4.1-nano and mistral:7b returned 0.00 +/- 0.00 D_top on most small graphs (Asia, Cancer, Climate, Covid 1-4); llama3.1 worse (e.g., 13.00 +/- 0.00 on Supermarket).
- Stated limits: LLM knowledge dependence, quadratic pairwise query cost, dense output graphs, frequent inability to identify total effects.
- Leakage: benchmark contamination plausible (Asia, Cancer, Sachs are textbook graphs the LLM may have memorized).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: hypothesis-generation infrastructure for engine feature causality; no QB/coaching/OL/scheme specifics.
## Engine-actionable? (yes/no + one-line what)
Yes — build a MATS-style prompter over ~30 candidate engine features (2-3 days), but use output ONLY as a ranked hypothesis list gated by the reproducible test: recover >=4/5 known-direction pairs (e.g., 4th-down aggressiveness -> win probability added, not reverse) on GSE nflverse lab data before any hypothesis enters the causal validation backlog; REJECT any direct use of LLM orders in the engine.
