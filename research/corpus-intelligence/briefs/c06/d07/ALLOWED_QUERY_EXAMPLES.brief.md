# fable/aws/clean-rooms-demo/ALLOWED_QUERY_EXAMPLES.md
## What it is (1-2 sentences)
A minimal 521-byte demo document listing six conceptual, synthetic "allowed query" examples for the AWS Clean Rooms demo — i.e., the sanctioned query shapes for privacy-safe aggregate analysis (event classes by uncertainty bucket, freshness-vs-latency comparisons, fixture overlap counts without row exposure, etc.). All examples are explicitly conceptual and synthetic — no real queries, datasets, or results.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — no formulas, thresholds, methods, or numbers are given.
## Data sources named
None named — no datasets, tables, or providers are identified; all examples are conceptual.
## Findings (numbers and facts, not vibes)
- Six allowed query shapes: (1) aggregate event classes by uncertainty bucket when count above threshold; (2) compare source freshness buckets to partner aggregate rates; (3) count fixture-level overlap without exposing row-level records; (4) compare role-shock buckets to aggregate DFS roster-change rates when count above threshold; (5) compare public-event timing classes to aggregate market-movement buckets; (6) compare data-quality buckets to provider aggregate latency buckets.
- The file is 521 bytes, dated 2026-09-09, with no concrete numbers, schemas, or thresholds defined.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Bucketized aggregate querying (uncertainty/freshness/data-quality buckets) with count thresholds — TRUST-SIGNAL
- Public-event timing vs market-movement bucket comparison — OTHER (market)
- Role-shock buckets vs DFS roster-change rates — SCHEME (INFERENCE: role-shock = personnel/role changes, DFS angle)
## Engine-actionable? (yes/no + one-line what)
No — conceptual demo stubs only, no schemas, thresholds, or real query shapes to implement.
