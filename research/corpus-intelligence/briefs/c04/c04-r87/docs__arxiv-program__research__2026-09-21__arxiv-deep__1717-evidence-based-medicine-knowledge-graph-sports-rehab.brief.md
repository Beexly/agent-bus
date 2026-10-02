# docs/arxiv-program/research/2026-09-21/arxiv-deep/1717-evidence-based-medicine-knowledge-graph-sports-rehab.md
## What it is (1-2 sentences)
Deep-read ledger of Zhang et al. (arXiv:2601.00216v1): a sports-rehabilitation RAG system (SR-RAG) that structures retrieval around evidence-based-medicine principles — PICO-schema GraphRAG, HyDE query expansion, ColBERT/BGE reranking, separate retrieval pools by evidence grade A–E, and a Bradley–Terry pairwise reranker with monotone grade biases (BETR) — evaluated on a new 1,637-question sports-rehab benchmark. Verdict in the file: ADAPT the ranking machinery and source-tiering discipline to GSE's injury-news pipeline; adopt no artifacts.

## Key metrics/methods (formulas where given, else "not specified")
- SR-RAG pipeline: (1) PICO-schema GraphRAG — retrieve from a KG by matching the question's PICO structure (357,844 nodes, 371,226 edges, 44,033 PICO-aligned medical nodes); (2) PICO-guided HyDE — hypothetical PICO-structured answer as dense retrieval query; (3) ColBERT + BGE reranking; (4) separate evidence-grade pools — retrieval runs independently within each grade A–E so weak evidence cannot drown out strong evidence; (5) BETR reranker: P(d+ ≻ d−|q) = σ(a·Δs + u_{t+} − u_{t−}), Δs = base relevance-score gap, u_t learned grade biases constrained monotone in evidence grade (u_A ≥ u_B ≥ … ≥ u_E), MAP priors; trained on pairwise human preference labels.
- Generator: DeepSeek-V3 (also tested with other backbones), conditioned on reranked evidence.
- Metrics: Recall@10; nugget coverage; faithfulness (fraction of generated claims supported by retrieved evidence); semantic similarity; PICOT match.
- Benchmark: 1,637 QA pairs, 983/327/327 train/val/test; 5 clinicians rating 20 questions; human-verified subset n=80.

## Data sources named
PubMed, Embase, and authoritative rehabilitation-organization sources; 21 rehabilitation conditions. No public code repository or dataset download link found in the text (PICO annotations, grade labels, QA pairs not released) — treat as non-reproducible from artifacts, reproducible from method description only.

## Findings (numbers and facts, not vibes)
- DeepSeek-V3 + SR-RAG (test): R@10 0.812; nugget coverage 0.830; faithfulness 0.819; semantic similarity 0.882; PICOT match 0.788.
- Baselines: naive RAG 0.643 / 0.718 / 0.769 / 0.841 / 0.582; Youtu-GraphRAG 0.741 / 0.773 / 0.798 / 0.868 / 0.659; Med-R2 0.724 / 0.758 / 0.803 / 0.861 / 0.678. SR-RAG leads on every metric.
- Ranking ablation (four quality metrics): full BETR 3.51 / 0.473 / 0.847 / 0.641 vs semantic-only 3.18 / 0.362 / 0.781 / 0.523 vs heuristic grade weighting 3.34 / 0.418 / 0.814 / 0.586 — full BETR wins on all four, but heuristic gets most of the way there (0.814 vs 0.847 on the third metric).
- Human-verified n=80: SR-RAG PMhv 0.762 vs Med-R2 0.649 — ranking preserved under human judgment; clinician ratings of the top system 4.66–4.84/5 across 20 questions.
- No latency/cost analysis of the five-stage pipeline (GraphRAG + HyDE + ColBERT + BGE + BETR + DeepSeek-V3) — production cost unaddressed.
- File's GSE acceptance: ADAPT the architecture; REJECT the learned BETR tier biases if heuristic tier weighting matches them within 2 pp on faithfulness; REJECT the full five-stage pipeline if end-to-end latency exceeds GSE's news-ingestion SLA (keep tiered pools + heuristic weighting only).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: evidence-tiering (official injury reports > beat writers > aggregators > social speculation) with separate retrieval pools and monotone tier biases is a trust-ranking mechanism for injury news; the faithfulness metric (claims must cite sources) is a trust gate for any generated injury summary.
- OTHER: the retrieval/ranking architecture itself (PICO-schema → GSE injury schema: player, body part, mechanism, status, timeline).

## Engine-actionable? (yes/no + one-line what)
yes — build gse/injury/evidence_rag.py: separate retrieval pools per source tier (T1 official reports … T4 social/unverified) over the injury-news archive, schema-guided HyDE query expansion, a BETR-style pairwise reranker on analyst preference labels with monotone tier biases, and a faithfulness constraint where every factual claim cites a source with T1 outranking on conflicts; add a temporal-tiering improvement (recency decay within tiers) and an adversarial T1-vs-T4 conflict eval.
