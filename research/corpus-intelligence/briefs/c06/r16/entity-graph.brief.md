# brain/entity-graph.md
## What it is (1-2 sentences)
Doctrine-only proposal (Prompt 1 §4.3, Component 7) for the Sports OS Entity Graph: the canonical reference for every named thing (player, team, coach, coordinator, scheme, game, market, pick, fantasy entities) and their relationships, so that every pick, Brain answer, evidence item, and signal ledger entry resolves to auditable canonical IDs.
## Key metrics/methods (formulas where given, else "not specified")
- 28 canonical entity types: player, team, coach, coordinator, league, season, game, venue, injury, practice_report, transaction, article, reporter, source, rumor_cluster, market, sportsbook, line, prop, model_output, pick, settlement, public_claim, fantasy_league, fantasy_team, fantasy_roster, fantasy_player, fantasy_matchup, fantasy_recommendation.
- Key relationships: player belongs_to team; player has injury; team employs coach/coordinator; coach affects scheme; coordinator defines scheme; scheme affects player (usage); scheme affects fantasy_recommendation; game has market; market has line (per sportsbook); pick uses evidence[], references game/player/market; settlement resolves pick and updates calibration; article written_by reporter; reporter covers team.
- Entity resolution rules: (1) canonical system-assigned UUID per entity, external IDs mapped; (2) dedup across name variants/jersey/external IDs; (3) `last_verified_at` staleness — entities in active picks must be verified fresh before publication; (4) disambiguation by team/sport/position; (5) relationship integrity — a pick may not reference a nonexistent entity.
- Proposed `EntityRef` type: `{ entityType, entityId, displayName, resolvedAt, sourceTier (1–6) }`.
- Implementation status: PROPOSAL — not implemented; schema approval required via `docs/adr/pre-implementation-change-proposal-template.md`; BLOCK-2 reference in `reports/agent-handoffs/ACTIVE_AGENT_RELAY.md`.
## Data sources named
None directly; cross-references Source Hierarchy (`docs/brain/source-hierarchy.md`), Evidence Vault (`docs/brain/evidence-vault.md`), Fantasy War Room (`docs/brain/fantasy-war-room.md`), Market Gravity (`docs/brain/market-gravity.md`), Operator Cockpit, ADR source-freshness guide; parent `docs/intelligence/SPORTS_OS_INTELLIGENCE_NETWORK_MASTER_PLAN.md`.
## Findings (numbers and facts, not vibes)
- The graph is an explicit prerequisite for five components: Evidence Vault, Signal Ledger, Ask the Brain, Fantasy War Room, Market Gravity, and Picks Intelligence.
- `source_tier` (1–6) rides on every entity observation, tying identity resolution to the source hierarchy.
- Status and condition entities (injury, practice_report, transaction) carry `source_tier` and `updated_at` — freshness is structural, not incidental.
- The fantasy entity block (fantasy_league/team/roster/player/matchup/recommendation) is defined but unimplemented — directly relevant to the second-pass F1 finding that the durable schema is still betting-pick-only.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: coach/coordinator entity types with `affects`/`defines` scheme relationships — the canonical schema for coaching-signal modeling.
- SCHEME: scheme as a first-class entity affecting player usage and fantasy recommendations.
- TRUST-SIGNAL: canonical identity resolution + freshness verification before pick publication + relationship integrity are audit/calibration prerequisites.
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the canonical-ID resolution rules, staleness checks, and relationship-integrity gate as the identity layer for the fantasy projection schema (directly answers second-pass F2's NFL-specific identity fragmentation).
