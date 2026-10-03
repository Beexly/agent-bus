# docs/arxiv-program/research/2026-09-21/arxiv-deep/0261-performance-considerations-on-execution-of-large.md
## What it is (1-2 sentences)
Read-note on Pawlik, Figiela & Malawski (2019) benchmarking large bag-of-tasks workloads (5,120 concurrent Linpack tasks) on AWS Lambda, Google Cloud Functions, and IBM Cloud Functions to quantify parallelism ceilings, throttling, and cost pathologies. Verdict recorded in the file is ADAPT — the 2019 numbers are stale, but the benchmark methodology transfers to GSE's batch pipelines.

## Key metrics/methods (formulas where given, else "not specified")
- No equations — empirical measurement study. Method: launch 5,120 concurrent identical invocations (Linpack 3408×3408), record per-invocation GFlops and wall-clock, aggregate mean/SD per memory config; analyze (a) achieved-parallelism ramp over time, (b) performance vs allocated memory, (c) API latency outliers, (d) 100 ms billing-granularity cost interaction.

## Data sources named
- None public — benchmark harness described but no dataset or repo link; workload reproducible in principle (HyperFlow + Linpack). Regions: AWS eu-west-1, GCF us-central1, IBM UK; client in Krakow.

## Findings (numbers and facts, not vibes)
- Mean GFlops (SD): AWS 256MB 2.95 (1.38), 512MB 4.62 (1.40), 1024MB 10.10 (4.27), 1536MB 14.04 (7.18), 2048MB 27.26 (8.37), 3008MB 27.05 (8.40); GCF 256MB 6.92 (6.23), 512MB 9.54 (3.03), 1024MB 16.11 (1.60), 2048MB 20.23 (2.03); IBM 256MB 7.35 (3.47), 512MB 7.15 (3.50).
- Performance scales with memory on AWS and GCF but saturates (AWS 2048→3008MB flat; IBM flat across settings).
- AWS and IBM show stepped parallelism around ~1,000 concurrent executions; GCF appears rate-limited rather than parallelism-stepped.
- Function-API call latency outliers reached 1,000 ms; per-task variability high (SDs 30–90% of mean at low memory).
- Authors conclude FaaS is viable for bursty workflow stages but hidden throttles and variance must be measured, not assumed.
- All absolute numbers describe 2019 vendor infrastructure — must never be quoted as current.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (infrastructure): burst-parallel batch design for GSE pipelines (nightly nflverse pulls, 29-CSV gse-lab recomputation, Monte Carlo slates). Fills an infra gap, not a modeling gap.

## Engine-actionable? (yes/no + one-line what)
Yes — adapt the benchmark protocol (concurrency-ramp detection, per-task wall-clock mean/SD, cold-start rate, per-unit cost) to GSE-representative payloads before bursting batch jobs to serverless; trigger: any batch job exceeding ~2h wall-clock or 8 vCPU-hours. Estimated 1–2 days to port the harness.
