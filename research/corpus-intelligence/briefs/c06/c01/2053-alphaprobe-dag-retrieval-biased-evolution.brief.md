# arxiv-program/research/2026-09-21/arxiv-deep/2053-alphaprobe-dag-retrieval-biased-evolution.md
## What it is (1-2 sentences)
AlphaPROBE reframes automated alpha mining as navigation of a DAG — factors as nodes, evolutionary links as edges — with a Bayesian Factor Retriever balancing exploitation (high |ICIR|) vs exploration (topology penalty, natural-language feedback) and a DAG-aware LLM generator conditioned on the full ancestral trace of the seed. It beat Alpha158, AlphaGen, AlphaForge, AlphaQCM, AlphaSAGE, GP, AlphaAgent, and R&D-Agent on IC/ICIR/RIC/RICIR/AR/MDD/SR across CSI 300/500/1000.
## Key metrics/methods (formulas where given, else "not specified")
- Seed quality = |ICIR| on train (Eq. 5); posterior retrieval with prior/likelihood/topology-penalty/NLF decomposition; embedding model Qwen3-Embedding-4B
- DAG-aware generator: LLM (DeepSeek V3.1 backbone) generates 5 candidates per step conditioned on the full ancestral trace (Eq. 14–15); depth penalty γ=0.05, retrieval penalty ω=0.10
- Factor pool capacity 50, factor length ≤40; evicted factors retained in graph 𝒢 for topology completeness; same dynamic factor integrator for all baselines
## Data sources named
CSI 300/500/1000 via Qlib: train 2010-01–2020-12, validation 2021-01–2022-06, test 2022-07–2025-06; targets 20-day forward returns; code at github.com/gta0804/AlphaPROBE
## Findings (numbers and facts, not vibes)
- CSI300 ablation (IC/ICIR/RIC/RICIR %): full 5.84/39.02/7.20/46.94 vs random retriever 2.95/18.71/3.18/21.65, heuristic 4.54/35.15/5.92/35.71, MCTS 4.75/35.20/5.94/36.86, w/o prior 4.13/34.88/5.68/34.42, w/o likelihood 4.09/34.99/5.66/34.39, CoT generator 5.11/31.79/6.08/39.17 — every component contributes; likelihood and prior matter most
- Same ordering on CSI500 (6.26/52.39/8.78/73.18) and CSI1000 (9.04/70.49/11.35/88.02); controlled drawdowns + faster recoveries in 2023–2024 bear and April 2025 tariff turmoil
- Limitations: DeepSeek V3.1 trained past the test window (LLM-knowledge caveat); |ICIR| quality bakes train-period bias; γ/ω hand-set without sensitivity; no transaction-cost schedule quoted
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: signal-mining architecture — replace GSE's flat signal list with a DAG (node = signal version, edge = derivation: mutation/combination/re-fit; retired signals retained as nodes); Bayesian retriever scoring seeds by posterior = |RankICIR| quality × novelty topology penalty × exploration bonus (priors from MinervaScore grades); DAG-aware generator fed the full ancestral trace (formulas, validation curves, failure notes); two-subgraph (market vs team-strength signals) cross-pollination; improvements: graph-surgery pruning of dead branches (kept as negative examples); cross-lake edges linking the signal DAG to the paper DAG (record which arXiv-mined techniques survived contact with sports data)
## Engine-actionable? (yes/no + one-line what)
Yes — build the signal DAG + Bayesian retriever + ancestral-trace generator (~2 weeks, AlphaPROBE repo as reference); gate: ≥20% more test-significant signals per 100 LLM calls than flat-pool mining AND mean pairwise |corr| ≤0.6 AND no test-season RankIC sign flips; else the topology must not ship.
