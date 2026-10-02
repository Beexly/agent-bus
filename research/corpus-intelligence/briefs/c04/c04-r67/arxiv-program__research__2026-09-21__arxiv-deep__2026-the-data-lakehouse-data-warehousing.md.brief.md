# arxiv-program/research/2026-09-21/arxiv-deep/2026-the-data-lakehouse-data-warehousing.md
## What it is (1-2 sentences)
A vendor-authored (three Dremio employees) architecture paper (Mazumdar, Hughes & Onofré, 2023, arXiv:2310.08697v1) mapping every traditional RDBMS-OLAP data-warehousing requirement to lakehouse components (object storage + Parquet/ORC + Iceberg/Hudi/Delta table format + decoupled compute), arguing the lakehouse satisfies warehousing and adds open-data architecture plus data-as-code branching. Reader verdict is ADAPT (architecture justification, not tool recommendations).
## Key metrics/methods (formulas where given, else "not specified")
- No equations stated; no quantitative results. Requirement→component mapping: object storage → storage; Parquet/ORC → file format; Iceberg/Hudi/Delta Lake → table format (schema evolution, hidden partitioning, time travel, ACID via optimistic concurrency control); catalog (Hive/Glue/Nessie/REST) → metastore; decoupled compute engines (SQL for BI, Spark for ML, Flink for streaming) → compute.
- Capabilities ported: governance (Ranger, column masking, audit logging), optimistic concurrency control, low latency (compaction, clustering, data reflections/materialized views), schema evolution without rewrites, ACID multi-statement transactions (Nessie/LakeFS), transaction rollback via snapshots.
- Practices ported: star/snowflake modeling in semantic layers (raw → staging → business → application); ELT with schema-on-read landing; SCD type 2/4 via row-level updates + time travel.
- "More" beyond warehousing: open data architecture (multi-engine on one copy), fewer data copies (ML reads Parquet directly), data-as-code (Git-like branching: isolated dev/prod, blue-green data deployment, atomic merge after validation), federation.
## Data sources named
- No datasets, no experiments, no benchmarks. One worked example: telco churn dataset (BigML "churn-bigml-20", trained with RandomForest n_estimators=600, 80/20 split) used illustratively for BI + ML on one Iceberg table; no results numbers reported. References are product docs (Dremio Sonar/Arctic, Tabular, Nessie, LakeFS, Iceberg, Hudi, Delta Lake).
## Findings (numbers and facts, not vibes)
- Zero quantitative results anywhere: no latency, cost, or concurrency numbers; the churn example shows a confusion matrix/classification report figure without quoted numbers.
- The argument is by architectural mapping, not measurement; cloud object storage as cost-effective substrate is asserted qualitatively, not priced.
- Limitations in file: vendor-flavored (Dremio authors; Dremio Sonar/Arctic recommended throughout — marketing-adjacent tool selection); hard parts waved away (compaction/indexing maintenance, governance on raw object storage, operational cost at small scale); the BI-dashboard latency story is less relevant than the ML-direct-access story.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Lakehouse offline-store justification for GSE's analytical layer (Delta Lake on object storage, bronze/silver/gold layers) — OTHER.
- Data-as-code branching (staging branch → backtest gate → atomic prod promotion; blue-green deployment for data) — OTHER.
- Table-format-over-file-format discipline (always query through Delta for time travel/point-in-time feature reconstruction; SCD type 2 for team/coach/roster dimensions) — OTHER.
## Engine-actionable? (yes/no + one-line what)
yes — Adopt the lakehouse layout (Delta + bronze/silver/gold, table-format-only reads, staging-branch promotion gated on the backtest suite) iff time-travel reproduction is byte-identical on a 2024 replay, the branch gate catches an injected corruption, and exactly one physical copy of each raw dataset exists; reject the branching ceremony if merge overhead adds >10% to weekly build time.
