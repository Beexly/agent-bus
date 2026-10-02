# arxiv-program/research/2026-09-21/arxiv-deep/2028-comparative-study-delta-iceberg-hudi.md

## What it is (1-2 sentences)
Ledger digest of Eswararaj, Nellipudi, Kollati (2025) "A Comparative Study of Delta Parquet, Iceberg, and Hudi for Automotive Data Engineering Use Cases" (arXiv:2508.13396v1, SSRG Int. J. CSE 12(7)). Verdict: ADAPT — a practitioner benchmark with real numbers closing the Delta-vs-Iceberg decision left open in ledger 2026: Delta wins for GSE's Spark-centric ML workload; Hudi rejected; Iceberg is the fallback if a second engine enters.

## Key metrics/methods (formulas where given, else "not specified")
No equations stated. Architecture summaries: Delta = _delta_log JSON transaction log + checkpoints, append-only snapshots, schema enforcement at write time, Z-order clustering; Iceberg = hierarchical versioned metadata + manifest lists, hidden partitioning, partition evolution; Hudi = commit timeline + write markers, CoW/MoR table types, Bloom filters, async compaction, incremental queries.

## Data sources named
Synthetic automotive telemetry: 100 vehicles × 2,000 records × 30 days ≈ 200,000 records (vehicle_id, timestamp UTC, lat/long, engine_temp, speed, acceleration, dtc_code), date-partitioned, sorted by vehicle_id + timestamp, Parquet base. Environment: AWS EC2 m5.4xlarge (16 vCPUs, 64 GB RAM, 256 GB SSD), Apache Spark 3.3.0 standalone — except Delta, run on Databricks Runtime 11.3 (fairness caveat).

## Findings (numbers and facts, not vibes)
- Ingestion time (min): Delta 13.5, Iceberg 14.1, Hudi 9.7.
- Query latency (sec): Delta 4.8, Iceberg 3.2, Hudi 6.4.
- Storage size (GB): Delta 88, Iceberg 76, Hudi 91.
- Throughput (records/sec): Delta 123,456; Iceberg 119,034; Hudi 153,870.
- Compaction time (min): Delta 3.1, Iceberg N/A, Hudi 2.2 (MoR mode).
- Author insights: Hudi fastest ingestion (incremental/upsert); Iceberg best query latency and ~13% less storage; Hudi async compaction outpaced Delta; Delta competitive in Spark but higher latency/storage with compaction+versioning counted.
- Case-study recommendation: Hudi for real-time ingestion, Iceberg for batch analytics, Delta for ML lifecycle — possibly combined.
- Critical fairness flaw: Delta ran on optimized Databricks Runtime 11.3 while Iceberg/Hudi ran vanilla Spark — Delta's numbers flattered, yet Iceberg still beat Delta on latency (3.2 vs 4.8s) and storage (76 vs 88 GB). Single runs, no variance, toy dataset; practitioner-journal, not top-venue peer-reviewed.
- Decision recorded in ledger: gold feature tables + ML training path = Delta Lake; revisit Iceberg if Trino enters; Hudi rejected (no real-time ingestion need — weekly batch builds, append-only odds snapshots).
- Confirmation gate: Delta's point-in-time range-query latency within 20% of Iceberg's AND total storage within 15% on a 5-season GSE replay; else switch gold layer to Iceberg.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Lakehouse decision record: Delta for gold feature tables and the ML training path (OTHER)

## Engine-actionable? (yes/no + one-line what)
Yes — confirm Delta vs Iceberg on GSE's own 5-season replay (query-latency within 20%, storage within 15%) before committing the gold layer; Hudi rejected unconditionally.
