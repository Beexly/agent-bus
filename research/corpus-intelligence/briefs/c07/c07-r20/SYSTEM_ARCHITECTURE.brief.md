# fable/SYSTEM_ARCHITECTURE.md
## What it is (1-2 sentences)
A one-page statement of FABLE's architecture: an evidence-and-governance layer over existing Sports repo capabilities that adds no new ingestion pipeline, exposing pure functions (uncertainty ranking, labeling manifests, drift stats, parity checks, AWS gates) for future routes/jobs/dashboards after owner approval.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — no methods, formulas, or metrics; only the data-flow shape: rights-gated source entries (`apps/web/lib/scraping/source-rights-registry.ts`), nflverse ingestion unchanged, metrics/calibration in existing modules, new FABLE utilities as pure functions.
## Data sources named
nflverse and package ingestion modules; `apps/web/lib/scraping/source-rights-registry.ts`.
## Findings (numbers and facts, not vibes)
- FABLE does not introduce another ingestion pipeline — a deliberate constraint (INFERENCE: to avoid duplicating or fragmenting existing data plumbing).
- Docs and tests record "what is proved versus what is blocked" — the layer's purpose is evidentiary governance, not new modeling.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- No football-intelligence content of any tag; pure architecture posture — OTHER (infra/governance).
## Engine-actionable? (yes/no + one-line what)
No — intake-only; describes posture (no new ingestion, pure functions, owner-approved exposure) that builders should respect when extending FABLE, but nothing to wire.
