# arxiv-program/research/2026-09-21/arxiv-deep/2027-lst-bench-benchmarking-log-structured-tables.md
## What it is (1-2 sentences)
Deep read of Camacho-Rodríguez et al. (Microsoft, 2023), arXiv:2305.01120v3 — LST-Bench: a benchmark for log-structured tables (Delta, Iceberg, Hudi) capturing long-running-deployment behavior (degradation from file accumulation, maintenance resilience, concurrency, time travel) with a new stability metric S_DR. Ledger verdict: ADAPT — informs GSE's Delta-vs-Iceberg choice and gives a quantitative lake-maintenance doctrine.
## Key metrics/methods (formulas where given, else "not specified")
- S_DR = (1/n) Σᵢ₌₁ⁿ (Mᵢ − Mᵢ₋₁)/Mᵢ₋₁ (degradation rate over phase iterations; reciprocal for higher-is-better).
- Framework: tasks → sessions → phases → workload; WP1 Longevity, WP2 Resilience (Optimize phases), WP3 Read/Write Concurrency, WP4 Time Travel.
- Metadata layouts: Delta = commit log + checkpoints every 10 txns; Iceberg = metadata file → manifest lists → manifests; Hudi = commit timeline + nested metadata table.
## Data sources named
TPC-DS dbgen at SF100 (100GB) and SF1000 (1TB) on Azure Data Lake Storage Gen2; Spark 3.3.1 / Trino 420 clusters (1 head + 16× E8as v5); Delta 2.2.0, Iceberg 1.1.0, Hudi 0.12.2; code: github.com/microsoft/lst-bench/ (open source).
## Findings (numbers and facts, not vibes)
- SF1000 Spark TPC-DS: Delta 511K QphDS (2.7→5.2h, 92% degradation); Hudi-CoW 262K (6.2→6.5h, 5%); Hudi-MoR 112K (23→24h, 6%); Iceberg-CoW 549K (2.7→4h, 45%); Iceberg-MoR 493K (2.9→5h, 73%).
- File accumulation degrades performance up to 6.8× without maintenance.
- Engine effect: Spark default writes up to 200× per partition → 5×+ API calls; Trino creates up to 40× fewer files; baselines ~2× faster on Trino; Spark DML caused 2.4× degradation vs Trino-written files (confirmed by cross-reading).
- Optimize impact: Delta SU latency drops 2.3× and 2.6×; Iceberg-CoW 1.5×/1.8×; Iceberg-MoR 2.2×/3.2×; Hudi needs no Optimize.
- S_DR: Hudi <0.07 (most stable, read-intensive); Iceberg up to 0.89 (least stable); Hudi reads ~6× more data (trades stability for raw speed).
- Time travel: no significant latency/storage overhead vs latest-version queries. CoW beats MoR for read-heavy workloads across the board.
- All numbers are untuned out-of-the-box defaults (2023 versions); TPC-DS is OLAP, not an ML feature-table workload.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Delta CoW default for GSE (read-heavy: weekly bulk builds + point-in-time reads); compaction+vacuum doctrine after every weekly feature build — OTHER (data infra).
- S_DR as GSE's lake-health KPI: alert if S_DR >0.1 over 4 weeks on feature-build latency and Sunday serving p99 — OTHER.
- Time travel with no overhead justifies versioned reads in the point-in-time replay test harness — TRUST-SIGNAL (auditability).
- Write-path discipline: writer file-size config dominates layout; avoid Spark's 200× small-file pathology — OTHER.
## Engine-actionable? (yes/no + one-line what)
Yes — schedule Optimize+Vacuum after every weekly feature build (2.3–2.6× Delta latency recovery), track S_DR on build latency and Sunday p99 with S_DR>0.1 alert, configure large writer target file sizes; gate: confirm degradation mechanism exists on GSE's 2024 tables (S_DR>0.1 over 8 unmaintained cycles) and post-Optimize recovery within 10% of fresh baseline — otherwise reject the doctrine as over-engineering at GSE's scale.
