# docs/research/2026-09-28/orchestration/public-private-surface-doctrine.md
## What it is (1-2 sentences)
Garrett's HARD standing rule (2026-09-28) extending the NGS internal-only doctrine to all proprietary GSE data: the public website shows ONLY projections and rankings (plus published picks and outcomes); all data, metrics, signals, and methodology stay internal.
## Key metrics/methods (formulas where given, else "not specified")
Not specified. Contains a code-search-verified exposure inventory (from `origin/main`, 2026-09-28): pages to pull behind the fence (`/methodology`, `/intelligence/metrics`, `/nflverse`, `/players`, `/stats/*`, `/parlay-mri`, `/fantasy/dfs`, `/trends`, `/edge-index`, `/observatory`, `/academy`), API routes to fence (`/api/clv`, `/api/calibration`, `/api/gse/v1/truth`; review for keyed `/api/v1/signals` and `/api/nflverse/qbr`), and keep-list (`/api/projections`, `/api/dfs/salaries` gated, `/api/proof/ledger` gated, `/api/performance` 503-gated). Fence pattern: `no-raw-ngs-fence.ts` FencePlugin + trust-gate guardrails + readiness gates (`canExposePerformanceStats`, `PUBLISH_LEDGER`, `canPublishProjections`).
## Data sources named
nflverse (CC-BY-4.0 noted as openly licensed — pulled anyway under product posture, not legal posture); internal surfaces named: signal ledger, weak-signal registry, source registries, proof ledger (`loadLedgerView()`).
## Findings (numbers and facts, not vibes)
- Hard doctrine dated 2026-09-28, issued by Garrett directly.
- Keep list is exactly four things: player/team projections, rankings (rest-of-season, week-by-week, positional), published picks and outcomes/proof, honest risk disclosures.
- Explicitly banned from public: raw data rows, metric values AND names (EPA, QBR, WOPR, target share, separation named as examples), signal values/identifiers, frameworks, factor lists, weights, aggregation formulas, model internals, source registries, "how we read the numbers" write-ups, and which sources were used/refused.
- `/methodology`'s current stance ("framework public, weights proprietary") is superseded — the framework itself goes internal too.
- Routes behind env gates currently off (performance stats, ledger) are compliant today; doctrine binds their future content.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: this is the master surface-policy doc; any public-facing engine output (projections, rankings, proof ledger) must be gated per it.
- OTHER: competitive-intel rule — even the cleared/forbidden source registry page is under review because it reveals refused sources.
## Engine-actionable? (yes/no + one-line what)
Yes — this is a standing binding rule: any public engine surface must expose only projections/rankings/pick-records; all metric names (EPA, QBR, WOPR) and signal identifiers are internal-only.
