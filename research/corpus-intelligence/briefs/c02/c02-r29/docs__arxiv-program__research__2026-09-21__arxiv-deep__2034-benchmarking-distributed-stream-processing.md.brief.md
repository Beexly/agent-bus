# docs/arxiv-program/research/2026-09-21/arxiv-deep/2034-benchmarking-distributed-stream-processing.md

## What it is (1-2 sentences)
A stream-processing benchmark methodology paper (arXiv:1802.08496v2, Karimov et al. 2018/2019, DFKI/TU Berlin/TU Delft/Rovio) that introduced sustainable throughput, driver/SUT separation, and event-time latency for stateful operators, and stress-tested Storm, Spark, and Flink under skew and fluctuation. File verdict: ADAPT (methodology only; the 2018 engine numbers are stale).

## Key metrics/methods (formulas where given, else "not specified")
- Not specified (no equations in file).
- Sustainable throughput: maximum ingestion rate sustained without large latency fluctuations — measured by controlling the driver's ingestion rate, not by max-rate ingestion (which just measures backpressure collapse).
- Event-time latency for stateful operators: source production timestamp → sink result emission, measured externally in the driver (prior work measured inside the SUT, hiding backpressure).
- Driver/SUT separation: scalable on-the-fly generator with queues; workload tuning per system disclosed.
- Stress experiments: large windows (60s), extreme single-key skew, fluctuating workloads (0.84 → 0.28 → 0.84 M events/s); latency distributions plotted as time series, not averages.

## Data sources named
- Industrial gaming use-cases from Rovio: in-app purchase tracking per app/channel/item; ad-campaign monitoring. Workloads: windowed aggregation (8s window, 4s slide) and windowed joins; large-window variants; extreme single-key skew; fluctuating profiles. Generated on the fly (no Kafka/Redis bottleneck); 2/4/8-node clusters.

## Findings (numbers and facts, not vibes)
- Windowed aggregation avg latency (seconds): 2-node — Storm 1.4, Spark 3.6, Flink 0.5; 8-node — Storm 2.2, Spark 3.1, Flink 0.2. Lowering load 10% below max collapses latency fluctuation — the "max" point is saturated. [OTHER]
- Storm outperformed Spark by ~8% in sustainable aggregation throughput across configs; Flink bounded by network bandwidth at 4+ nodes (saturation ~1.2M events/s). [OTHER]
- Windowed join sustainable throughput (M events/s): 2-node — Spark 0.36, Flink 0.85; 8-node — Spark 0.94, Flink 1.19 (network-bound). Join avg latency: 2-node — Spark 7.7s, Flink 4.3s; 8-node — Spark 6.2s, Flink 3.2s. Storm's Trident computed incorrect results at larger batch sizes — excluded from joins. [OTHER]
- Large windows (60s, 4s batch): Spark throughput halved, avg latency 10× — fixed with inverse reduce functions (evict old data incrementally instead of recomputing). [TRUST-SIGNAL: recomputing full windows is the failure mode; incremental eviction is the fix]
- Skew (single key): Flink/Storm throughput bounded by one machine slot (Flink 0.48 M/s, Storm 0.2 M/s, no scaling); Spark handled it via tree aggregation (0.53 M/s on 4-node, best of three) — but for joins under skew, Flink went unresponsive and Spark showed extreme latencies. [TRUST-SIGNAL: single-key skew is where streaming systems break; the serving-layer analogue is one popular game dominating game-day request distribution]
- Fluctuating workloads: Storm most susceptible; Flink handled join spikes best. [OTHER]
- The file explicitly rejects the absolute 2018 numbers as decision inputs — methodology only. [TRUST-SIGNAL: no absolute number from this paper is actionable for GSE]
- Proposed GSE acceptance gates: driver's measured sustainable QPS ≥ 2× peak expected game-day QPS; under single-key skew p99 ≤ 50 ms up to 50% of sustainable QPS; spike recovery to p99 ≤ 50 ms within 60 seconds. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Sustainable-throughput evaluation for GSE's serving layer: separate load-driver process, ramp QPS until p99 degrades, define sustainable throughput as ~90% of that knee (the paper's max-vs-90% lesson: at the max point, fluctuations dominate) — OTHER (serving infrastructure), TRUST-SIGNAL (measurement discipline)
- Event-time latency measured externally in the load driver — never trust in-process timers when the serving path joins live odds with point-in-time features — TRUST-SIGNAL
- Single-key-skew stress test = the playoff/Super-Bowl scenario (one entity dominating requests); hierarchical fan-in beats single-slot processing — OTHER, TRUST-SIGNAL
- Cost extension (beyond the paper's blind spot): throughput–latency–cost Pareto surface (cost per 1K served at each QPS level) — OTHER
- No direct QB-BEHAVIOR, COACHING, OL, or SCHEME findings in the file.

## Engine-actionable? (yes/no + one-line what)
Yes — adopt the sustainable-throughput methodology as GSE's serving-layer evaluation standard (external load driver, 90%-of-knee sustainable QPS, skew and spike stress tests against the p99 ≤ 50 ms gate), plus the throughput–latency–cost Pareto extension.
