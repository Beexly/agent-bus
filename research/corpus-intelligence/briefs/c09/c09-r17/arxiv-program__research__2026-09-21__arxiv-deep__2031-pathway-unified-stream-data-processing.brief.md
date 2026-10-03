# arxiv-program/research/2026-09-21/arxiv-deep/2031-pathway-unified-stream-data-processing.md
## What it is (1-2 sentences)
Full-paper research ledger on Bartoszkiewicz et al. (Pathway.com, 2023) "Pathway: a fast and flexible unified stream data processing framework" (arXiv:2307.13116v1), verdict ADAPT. It evaluates a unified batch/streaming engine (Rust incremental dataflow + Python Table API) with measured batch/stream parity and backfilling benchmarks; the ledger treats it as the reference design for any future GSE real-time signal layer and adopts its "same code, batch and streaming" parity principle as GSE policy.
## Key metrics/methods (formulas where given, else "not specified")
- Two-layer design: Python layer builds/optimizes the computation graph → internal dataflow assembly in Rust (modified differential dataflow + custom operators on modified LSM tree); same code runs batch and streaming; inserts/deletes/modifications propagate as deltas.
- Consistency stronger than eventual: single non-sharded input, user-controlled output progress via injected COMMIT control messages (no approximate watermarking); bounded streams replay to identical results.
- No equations stated. Connectors: Kafka, Debezium CDC, file formats (Rust layer); REST/websockets (Python).
## Data sources named
Streaming wordcount: 76M words (16M burn-in discarded, 60M measured), 5,000-word dictionary, Kafka-sourced, 5 reps median; PageRank: LiveJournal graph, 4,847,571 nodes, 68,993,773 edges. Machine: 12-core AMD Ryzen 9 5900X, 128 GB RAM, SSD, Docker core limits. Benchmarks reproducible from pathwaycom public repo.
## Findings (numbers and facts, not vibes)
- Streaming wordcount: Flink and Pathway on the Pareto front, dominating Spark Structured Streaming and Kafka Streams; Pathway dominates Flink's default streaming setup on sustained throughput and Flink's minibatching setup on latency.
- Batch PageRank (LiveJournal, seconds, 1/2/4/6 cores): Flink 215/132/96/83; Spark 556/340/193/143; Spark GraphX 130/78/44/35; Pathway public build 171/95/54/47; Pathway benchmark release 108/63/44/39. On like-for-like Table-API logic Pathway is fastest; GraphX (specialized, non-equivalent) wins overall on 6 cores.
- Streaming PageRank (seconds): 400K edges — Flink 91/56/29/18 vs Pathway 2.2/1.3/0.7/0.6 (~40×); 5M edges — Flink 3350/3190/1286/830 vs Pathway 61.0/36.1/21.4/17.3 (~48×; Flink hit memory issues beyond).
- Backfilling (5M edges): Flink 380/200/110/85 vs Pathway 13/8/4/4. Full LiveJournal backfill (68.99M edges): Flink did not finish (OOM or >2h on 6 cores); Pathway finished in 150/90/58/49 s (single-edge stream) and 266/160/100/83 s (500K-edge stream). Spark variants cannot express this workload at all.
- Adversarial note (ledger): vendor-authored (all authors Pathway.com staff); benchmarks are methodologically detailed and the repo is public; treat 40–48× streaming margins as upper bounds.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — data-infrastructure lane: parity/backfilling pattern for GSE's feature pipeline; relevant to future live odds-tick / injury-news real-time features, not to football-domain modeling.
## Engine-actionable? (yes/no + one-line what)
yes — adopt as policy (not build): parity principle (any future real-time feature path must run identical batch/stream logic; reject lambda architectures) and the frozen-prefix hash CI harness (pin weeks 1–17 snapshot hashes, assert equality on recompute) as a ~1-day test harness on the existing batch pipeline.
