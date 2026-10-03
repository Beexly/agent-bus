# docs/arxiv-program/research/2026-09-21/arxiv-deep/2035-lakevilla-multi-table-transactions.md
## What it is (1-2 sentences)
Deep-read ledger of Gotz, Ritter (SAP), Giceva (TU Munich) (2025) "LakeVilla: Multi-Table Transactions for Lakehouses" (arXiv:2504.20768v2): three composable per-transaction features built non-invasively into OTF protocols - LV[R] recovery, LV[CT] complex multi-table transactions, LV[I] isolation via a global version log - giving serializability across the whole lakehouse with negligible overhead. Verdict: ADAPT - close GSE's partial-commit hole across the weekly build's feature/label/metadata tables with the lightweight manifest pattern, not full LakeVilla.
## Key metrics/methods (formulas where given, else "not specified")
- LV[R]: file-based markers reserve snapshot versions at transaction start; transaction sublogs + undo/redo adapt to concurrent changes instead of aborting.
- LV[CT]: marker-based conflict/deadlock detection across all accessed tables; LV[R,CT] gives global serializability.
- LV[I]: global version log object-store layer with atomic validation (R1-R3: read-set freshness, write-set conflicts, version distance); serializability, or snapshot isolation on R2-R3 only; WriteSerializable mode for read-only transactions.
- No closed-form equations; correctness via ordering constructions.
## Data sources named
- YCSB-LH (github.com/goetztj/YCSB-LH, public), CAB-LH, TPC-DS (SF=1000/3000), TPC-H; LV prototype standalone C++ client vs Spark + Delta Lake baseline.
## Findings (numbers and facts, not vibes)
- Headline overhead: 2% on YCSB writes, 2.5% on TPC-DS reads; "observable effects are minimal" once data loading is included.
- LV[I]'s global version log adds ~4 ms per read/write vs baseline (mitigated by WriteSerializable mode); LV[R]/LV[CT] add no latency on single-table workloads.
- Concurrency 1->64 clients: Spark abort rates rose with client count (including read-only YCSB-C aborts from an internal Spark issue); LV[R] had zero aborts and higher throughput; write-heavy workloads lost throughput at high concurrency from commit-time redos.
- LV[CT] table scaling: commit latency flat ~1s up to 32 tables (64 threads), linear beyond (prototype thread-budget artifact, not protocol limit).
- LV[CT] adds exactly 1 write + 5 reads per accessed table; LV[I] adds fewest requests.
- Caveats: prototype is a standalone C++ client, not full engine integration; no failure-injection testing of the recovery path; 2025 pre-production prototype.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Partial multi-table commit is GSE's real consistency risk (training on features from week N with labels from week N-1): TRUST-SIGNAL (data-correctness)
- Atomic manifest-flip pattern (one PUT-if-absent JSON version pointer; all readers route through it; failed builds leave the manifest on the last good version): TRUST-SIGNAL
- Training reads = snapshot isolation via manifest; ad-hoc reads = documented unprotected direct reads (per-transaction modularity): OTHER
- Chaos test: kill-mid-write must leave the manifest on the prior week 10/10 runs: TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
Yes - implement the lightweight atomic-manifest commit pattern for the weekly build (write all table snapshots, flip one manifest pointer the training/serving path reads) with a kill-mid-write chaos test and weekly orphan sweep; skip full LV machinery (single-writer discipline makes it unnecessary).
