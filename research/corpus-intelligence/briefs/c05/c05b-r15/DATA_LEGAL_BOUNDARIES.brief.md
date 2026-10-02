# fable/DATA_LEGAL_BOUNDARIES.md
## What it is (1-2 sentences)
Legal boundary doc for the fable (source/claim-accountability) layer: the source registry is the current source of truth for what data sources may be used, with high-value allowed lanes and blocked/conditional lanes, plus executable validation via `npm run fable:sources`.

## Key metrics/methods (formulas where given, else "not specified")
- Boundary source: `apps/web/lib/scraping/source-rights-registry.ts`; adapter `apps/web/lib/fable/source-registry.ts`; test `apps/web/lib/fable/source-registry.test.ts`.
- Rules: source status in the registry is the current source of truth; open/approved API sources usable only per their flags; public fallback sources support derived facts only when the registry allows; vendor candidates and permission-required sources stay blocked/conditional until written owner/legal approval; AWS storage inherits the same storage flag as local storage.
- Allowed lane: nflverse is the primary NFL dataset lane with attribution required.
- Blocked/conditional: sources with permission requirements, technical controls, or manual-only status cannot be automated; broadcast or pundit content is manual claim-accountability work unless a written license exists.
- Machine-readable schema: `schemas/fable/source-registry-entry.schema.json`; executable validation: `npm run fable:sources`.

## Data sources named
- nflverse (primary NFL dataset lane, attribution required).

## Findings (numbers and facts, not vibes)
- nflverse is the sole named high-value allowed lane; all vendor/permission-required sources remain blocked or conditional until written approval.
- Broadcast/pundit content cannot be automated for claim-accountability work without a written license — a binding constraint on the film-pipeline plan's footage question.
- Storage migration (local → AWS) does not change any source's rights flag.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- nflverse as the primary licensed NFL dataset lane — TRUST-SIGNAL (rights-clean data provenance)
- Broadcast/pundit content automation block absent written license — OTHER (legal fence binding the film pipeline)
- Source-registry-as-truth + executable validation (`npm run fable:sources`) — TRUST-SIGNAL (machine-enforced rights discipline)

## Engine-actionable? (yes/no + one-line what)
No — it is a standing boundary doc; it constrains the film pipeline (broadcast footage needs a written license) but contains no engine signal to wire.
