# docs/adr/005-entity-graph-minimal-schema.md
## What it is (1-2 sentences)
ADR (2026-08-13, status: proposed, migration NOT applied) specifying a minimal two-Prisma-model entity graph (`Entity` + `EntityEdge`) to enable entity resolution for evidence attribution, injury/depth-chart intelligence, rumor-cluster linking, and claim provenance.
## Key metrics/methods (formulas where given, else "not specified")
not specified (schema design, no formulas)
## Data sources named
- `docs/brain/entity-graph.md` (doctrine: ~30 canonical entity types), `docs/brain/source-hierarchy.md` (provenance tiers)
- External identity keys: nflverse id, ESPN id, odds-api key stored in `external_ids` JSON
## Findings (numbers and facts, not vibes)
- Two additive models only; unique invariant on `(entity_type, normalized_name, sport)`; `sport` is `NOT NULL DEFAULT ''` (deliberate, defeats Postgres NULL-distinct UNIQUE bypass).
- Every `EntityEdge` carries provenance: `source_tier`, `source_ref`, `observed_at` — an unsourced edge cannot be written (maps to engine trust-signal requirements).
- Traversal via recursive CTEs in Postgres; explicit decision NOT to use Neo4j/graph DB (operational tax for shallow 4-hop traversals).
- Migration SQL committed but NOT applied; owner-only action.
## Intelligence connections
- [TRUST-SIGNAL] Mandatory provenance on every edge (`source_tier` + `observed_at`) directly implements the engine's claim-attribution provenance requirements.
- [COACHING] [OTHER] `belongs_to`/`plays` edges with `valid_from`/`valid_to` temporal bounds support roster/team-membership change tracking without deleting history.
## Engine-actionable? (yes/no + one-line what)
yes — wire the two-model entity graph (unapplied migration) to back evidence attribution and rumor-cluster→player linking.
