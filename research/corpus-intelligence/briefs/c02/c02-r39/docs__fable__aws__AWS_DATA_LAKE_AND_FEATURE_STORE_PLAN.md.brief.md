# docs/fable/aws/AWS_DATA_LAKE_AND_FEATURE_STORE_PLAN.md
## What it is (1-2 sentences)
The data-lake/feature-store design plan for AWS usage in the Sports repo: a rights-gated storage design (raw/normalized/derived/report tiers with source-id + rights-snapshot metadata) that currently does not exist — no S3 bucket, Glue catalog, Athena table, or feature store is present.
## Key metrics/methods (formulas where given, else "not specified")
Not specified. Future feature-store requirements are a 5-field record: feature name, source ids, derivation code path, rights snapshot, calibration-or-drift monitoring owner. No formulas.
## Data sources named
No external data sources named. Governing artifact: the source rights registry (which sources permit storage, partner sharing, and model training).
## Findings (numbers and facts, not vibes)
- Current state: zero AWS data infrastructure exists — no S3 bucket, no Glue catalog, no Athena table, no feature store [OTHER]
- Allowed design tiers: raw, normalized, derived, report artifacts — each with source id, rights snapshot, extraction timestamp, attribution metadata [TRUST-SIGNAL]
- 3 blocked operations: storing raw data from storage-disabled sources; sharing partner data without contract; training on training-disabled sources [TRUST-SIGNAL]
- INFERENCE: the 5-field feature record (name, source ids, derivation code path, rights snapshot, monitoring owner) is a reusable feature-lineage contract for the engine even without AWS.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- The rights-snapshot + source-id + derivation-path record maps directly onto the engine's total-signal plumbing (source router, lineage) [TRUST-SIGNAL]
- No QB/coaching/OL/scheme content; infra-governance only [OTHER]
## Engine-actionable? (yes/no + one-line what)
yes — reuse the 5-field feature record and 4-tier separation as the engine's feature-store lineage contract (works locally; the AWS part is not built).
