# fable/SYSTEM_ARCHITECTURE.md
## What it is (1-2 sentences)
Architecture note describing FABLE as an evidence-and-governance layer sitting over existing Sports repo capabilities (ingestion, metrics, prediction engine) rather than a new ingestion pipeline.

## Key metrics/methods (formulas where given, else "not specified")
Not specified. No formulas, thresholds, or numeric gates are stated. Named primitives only: uncertainty ranking, local labeling manifests, drift statistics, parity checks, AWS gates — each described as a pure function utility for future routes/jobs/dashboards after owner approval.

## Data sources named
- `apps/web/lib/scraping/source-rights-registry.ts` — rights-gated source entries
- nflverse ingestion
- package ingestion modules
- existing web and prediction-engine modules (metrics and calibration)

## Findings (numbers and facts, not vibes)
- FABLE introduces no new ingestion pipeline; it exposes missing primitives importable by future routes, jobs, or dashboards after owner approval.
- Data flow order: (1) rights-gated source registry, (2) nflverse/package ingestion unchanged, (3) metrics and calibration unchanged in existing modules, (4) new FABLE pure-function utilities, (5) docs and tests record what is proved vs. blocked.
- No numbers, dates, sample sizes, or effect sizes in this file.

## Intelligence connections
- **OTHER — calibration/sizing program:** The stated data flow confirms calibration stays inside existing web and prediction-engine modules; FABLE adds drift statistics and uncertainty ranking utilities as shared primitives, which could serve the calibration lane once approved — but nothing here is wired yet (file explicitly says "after owner approval").
- **OTHER — trust-target intake:** Source-rights registry as step 1 of the data flow aligns with the trust-signal doctrine (rights markers before storage/demo), but this file adds no new intake mechanism.
- **OTHER — tracking lane:** Uncertainty ranking and drift statistics are the only named primitives relevant to tracking; no implementation details given.

## Engine-actionable? (yes/no + one-line what)
No — architecture statement only; no parameters, gates, or code interfaces specified.
