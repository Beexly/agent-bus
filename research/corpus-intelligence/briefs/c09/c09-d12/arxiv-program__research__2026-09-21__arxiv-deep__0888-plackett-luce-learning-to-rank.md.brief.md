# arxiv-program/research/2026-09-21/arxiv-deep/0888-plackett-luce-learning-to-rank.md
## What it is (1-2 sentences)
Learning-to-rank method paper introducing PLRank: the Plackett–Luce (ListMLE) listwise loss inside gradient boosting with regression trees; verdict ADAPT as the loss function for a GSE pick-ranking model (web-search validation only, no sports).

## Key metrics/methods (formulas where given, else "not specified")
- PL log-likelihood over a ranked list: L = Σ_i [s_{π(i)} − log Σ_{j≥i} exp(s_{π(j)})], document scores s from the boosted ensemble.
- Exact functional gradient of the PL loss w.r.t. each document's score (paper's Eqn 9) plus Newton leaf-value step for regression trees.
- Multi-permutation ground truth via a compression scheme; compared against LambdaMART and McRank.

## Data sources named
Yahoo 2010 learning-to-rank set (519 features per query-document pair); Microsoft 30K (MSLR-WEB30K-class) web-search ranking set. Public LETOR-style datasets.

## Findings (numbers and facts, not vibes)
- Yahoo 2010 NDCG@10: PLRank 0.7902–0.7903 vs LambdaMART 0.7809 (~1–1.2 pts); industry-tuned PLRank(obj=1) 0.802 vs LambdaMART 0.796.
- Microsoft 30K: PLRank matches LambdaMART/McRank across measures.
- Training complexity same order as LambdaMART; McRank 250+h vs PLRank 126h single-core.
- Instability rule (empirical, dataset-specific): linear ListMLE unstable unless feature count is large vs avg docs/query — ~200 features needed for NDCG@1, ~100 for NDCG@10 on Yahoo; MS30K linear ListMLE ~8 pts worse than the classification approach.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (ML methodology): listwise PL loss is the theoretically right objective for ranking betting opportunities (slate = "query," candidate bet = "document," graded relevance = realized CLV/profit bucket) vs current sort-on-edge approach.
- OTHER (design rule): feature-richness precondition — prefer boosted trees over linear ListMLE when feature count is small relative to slate size.

## Engine-actionable? (yes/no + one-line what)
Yes — train GSE's pick-ranker with the PL/ListMLE listwise loss on slate-ranked CLV buckets and backtest NDCG@10 + top-decile realized ROI vs a pairwise ranker (accept if ≥0.005 NDCG@10 gain or higher top-decile CLV, p<0.1).
