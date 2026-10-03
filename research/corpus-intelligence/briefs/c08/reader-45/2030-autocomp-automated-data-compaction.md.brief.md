# docs/arxiv-program/research/2026-09-21/arxiv-deep/2030-autocomp-automated-data-compaction.md
## What it is (1-2 sentences)
Ledger note on arXiv:2504.04186v1 (Microsoft/LinkedIn/UMD, 2025): AutoComp, an OODA-structured framework (Observe–Orient–Decide–Act) for automated data compaction of log-structured tables (Delta/Iceberg/Hudi) at LinkedIn scale, with multi-objective ranking math and production deployment numbers from 35K OpenHouse tables.
## Key metrics/methods (formulas where given, else "not specified")
- File-count reduction trait: ΔF_c = Σ_i 1(FileSize_{i,c} < TargetFileSize_c), over candidate files below target size (e.g. 512 MB).
- Compute cost: GBHr_c = ExecutorMemoryGB × (DataSize_c / RewriteBytesPerHour).
- Min-max normalization: T'_i,c = (T_i,c − min(T_i)) / (max(T_i) − min(T_i)).
- MOOP scalarized score: S_c = w_1·T'_1,c − w_2·T'_2,c (weights sum to 1; experiments 0.7 file-count-reduction / 0.3 compute-cost).
- Production dynamic weight: w_1 = 0.5·(1 + UsedQuota/TotalQuota), tying compaction aggressiveness to HDFS namespace-quota pressure per tenant.
- Top-k selection: greedy fit of highest-scoring candidates within compute budget (production: 226 TBHr budget → ~2,500 tables/iteration).
- Two triggering modes: optimize-after-write hooks (push) and periodic standalone service (pull); partition-scoped candidates reduce Iceberg conflict probability (conflicts observed even across disjoint partitions).
## Data sources named
LinkedIn OpenHouse Iceberg tables (production, 35K tables, Azure E8s v3); synthetic: CAB-gen over TPC-H-derived schemas (500 GB, 20 databases, 5 hours); TPC-DS SF=1000 (16-node Spark), TPC-DS/TPC-H SF=100 with Delta Lake v2.4.0 / Iceberg v1.2.0. Code not released; LST-Bench extensions open-sourced.
## Findings (numbers and facts, not vibes)
- Pre-compaction: 83% of files <128 MB on OpenHouse-managed Iceberg tables.
- TPC-DS SF=1000: 3% data maintenance degraded single-user runtime by 1.53×; compaction restored baseline.
- No-compaction baseline: file count grew ~2,640 files/hour; baseline incurred +25 min over the 5-hour limit; compaction eliminated it.
- Production: manual compaction shifted <128MB files 83%→62%, then stalled (month 2→3 distribution nearly unchanged); manual top-100 → AutoComp top-10 reduced 6.59M→7.44M files (+12%) while compacting 10× fewer tables.
- 30-day scan-heavy workload (1,291 tables): file-count reductions correlated with lower files-scanned, query time, query cost; unscheduled tables showed recurring sawtooth re-fragmentation.
- open() calls declined sharply after month-4 manual compaction (tables averaging 42M small files at 64 MB avg) and kept declining with AutoComp from month 9+; pre-compaction symptom was read timeouts / thundering-herd retries.
- Auto-tuning: TPC-DS WP1 query time cut up to 2× with tuned thresholds; TPC-H: default (no compaction) won — compaction of full non-partitioned tables too costly; small-file-count vs entropy triggers performed comparably with tuned thresholds.
- Estimator error: compute cost underestimated 19% (108 predicted vs 129 TBHr actual); file-count reduction overestimated 28%.
- Cost scale: ~3K raw tables consume 150 TBHr/day avg, 600 TBHr/day peak — why blanket periodic compaction was infeasible.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: data-ops — operational maintenance layer for GSE's Delta gold layer (weekly feature builds as small-file generators); traits/thresholds portable: compact iff ΔF ≥ 10% or files-scanned-per-query doubled since last compaction; OPTIMIZE off-peak, never concurrent with builds.
- OTHER: monitoring early-warning — files-scanned-per-query and training-join latency as fragmentation canaries (expect sawtooth if hook misfires); adopt hook only if 8-week fragmentation degrades the training-path join ≥20%.
## Engine-actionable? (yes/no + one-line what)
Yes — spec: one maintenance script (optimize-after-write hook on weekly feature build + two metrics logged per week); ~50-line policy; only if fragmentation actually materializes at GSE scale. INFERENCE: small effort, pure infra hygiene, not model signal.
