# docs/fable/aws/AWS_TOS_LEGAL_SURFACE_MAP.md
## What it is (1-2 sentences)
A short legal-rights mapping stating that AWS does not change upstream source rights: each class of use (storage, derivation, training, commercial display, partner collaboration) follows a specific rights flag, with the codebase source-rights registries as source of truth and an AWS-specific review checklist before live use.
## Key metrics/methods (formulas where given, else "not specified")
not specified — no formulas, metrics, or thresholds; it is a rights-mapping document.
## Data sources named
- `apps/web/lib/scraping/source-rights-registry.ts`
- `apps/web/lib/fable/source-registry.ts`
## Findings (numbers and facts, not vibes)
- Five mappings: S3 storage follows `storage_allowed`; feature derivation follows `derived_analytics_allowed`; model training follows `model_training_allowed`; commercial dashboards follow `commercial_display_allowed`; partner collaboration follows commercial display, redistribution, and contract terms.
- AWS-specific review required before live use: AWS account owner, region, encryption and retention policy, IAM role boundaries, budget and alarms, data classification. (Six items; no values given.)
- Core principle: "AWS does not change upstream source rights."
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: legal/compliance operations for data sourcing and model training.
- TRUST-SIGNAL (secondary): explicit rights-gating before training or display is trust infrastructure for the data pipeline. INFERENCE on framing.
## Engine-actionable? (yes/no + one-line what)
No direct modeling signal — but the rights flags (`model_training_allowed`, `derived_analytics_allowed`) must be checked in the engine's data pipeline before any scraped/ingested source is used for training, consistent with the standing INGEST-AND-LEARN doctrine.
