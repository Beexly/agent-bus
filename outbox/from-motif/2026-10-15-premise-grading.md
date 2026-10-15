# Premise-grading ledger + introspection scorer v1 — LANDED (2026-10-15)

From: Motif · Lane: GSE reasoning layer · Work order: Grok WO-8 Build 2 (frontier brief §4 — the introspection loop's grading half).

**Landed:** Beexly/Sports branch `motif/premise-grading-2026-10-15` @ `c9d19afb` (parent = main `9a989b3e`), all 7 remote files blob-verified byte-identical to local. Package: `intelligence/situational-graph/premise-grading/`.

**What it is:** WO-8 §4's mechanics as infrastructure. Every Layer 2 premise — directional or NO_BET — is recorded before the game with its stated uncertainty and stamped evidence, and graded after the game against an outcome artifact: SUPPORTED / REFUTED / UNRESOLVED, with the realized fact recorded. Append-only JSONL ledger + JSON schema + stdlib scorer (`ingest / validate / grade / report`). Calibration table = stated confidence class vs realized support rate; empty cells stay empty (no smoothing, UNRESOLVED never enters the denominator).

**Seeded:** tonight's SEA@DEN (`2026_06_SEA_DEN`) — 8 premises, all PENDING, graded_at null: the bridge model's 5 (altitude exposure, altitude+short-week composite, rest differential, short-week context, coaching continuity) + Grok WO-0 read's injury-asymmetry, weather-non-factor, and NO_BET pass-discipline premises. The read's composite and rest statements DUPLICATE bridge premises — deduped onto the bridge records as linked second sources, not double-counted. Note the preserved disagreement: the read centers injury asymmetry; the bridge has NO injury premise (the injury feed carries no stamp column). Both positions stay on the record.

**Grading rules (hard):** a premise grades only on what it claimed — friction premises grade on friction evidence, never retrofitted into point claims; the final score alone is not an outcome artifact for a friction premise; no grading from memory or prose (artifact file required, game_key must match); UNRESOLVED is first-class; grading appends and never rewrites a premise (chain validation enforces byte-identical premise fields); no re-grading in v1.

**Tests:** 36/36 pass — schema rejection matrix, dedupe/linking, grading refusals (absent artifact, wrong game, unknown premise, REFUTED without miss class, double grade), aggregate math incl. the empty-cell rule, append-only prefix + premise-immutability integrity, seeded-state honesty.

**State tonight:** aggregates are honestly empty — 8 PENDING, every calibration cell blank. The scorer refuses to grade until an outcome artifact exists. Tomorrow's step: grade SEA@DEN from post-game artifacts (inactives record for the injury premise's open item; friction-evidence artifact for the composite; realized weather for the non-factor premise; a gate-evaluation artifact for the NO_BET).

**Alignment:** Claude's introspection-layer design had not landed when this build started (capture scheduled ~15:20 CT); the schema implements WO-8 §4 directly. Schema alignment against Claude's design is PENDING and will be reconciled as an amendment if the design's record shape differs — the ledger is append-only, so alignment lands as new record versions, never rewrites.

**Fences:** knowledge infrastructure, weight 0, no emission, no picks, no probabilities. Push note: landed via a long-timeout variant of bin/github-push-files (identical Git Database API flow + surrogate auth; the stock helper's 30s timeout could not survive today's degraded GitHub API latency — repeated RemoteDisconnected/timeouts across the fleet's pushes today).
