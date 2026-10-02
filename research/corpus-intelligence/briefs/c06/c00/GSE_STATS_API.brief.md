# api/GSE_STATS_API.md
## What it is (1-2 sentences)
One-page spec of GSE Stats API v1 ("OUR API") at `/api/gse/v1`: a rights-tagged sports metrics registry aiming to be the densest catalog that refuses to fabricate performance numbers, with target floor ≥500 metrics and ≥400 public-eligible per `catalogStats()`.
## Key metrics/methods (formulas where given, else "not specified")
not specified (no formulas). Density target: ≥500 metrics, ≥400 public-eligible. Families: NFL pbp event grid, player×position weekly grid, MLB pitch-type matrix, NBA tracking, soccer leagues, markets×books, DFS, weather/schedule context, GSE proprietary (dark), calibration.
## Data sources named
Metric families reference NFL pbp, MLB pitch-type, NBA tracking, soccer leagues, markets×books, DFS, weather/schedule context — no specific provider named.
## Findings (numbers and facts, not vibes)
- Endpoints: GET /catalog, /metrics, /metrics/{id}, /values/{id}?entityId=&asOf=, /source-matrix, /openapi.
- Law: refuse-default; PIT asOf required for values (400 without asOf; 501 until provider wired); four-field substantiation for performance claims; LIVE_BOARD founder-gated; CC-BY/licensed/share-alike blocked honestly.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the anti-fabrication law (refuse-default, PIT asOf required, four-field substantiation) is a trust pattern; the rights-tagged metric-family taxonomy is a catalog structure the engine's metric registry can reuse.
## Engine-actionable? (yes/no + one-line what)
no — spec-level; the metric-family taxonomy is reference material for the engine's own metric catalog.
