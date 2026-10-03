# brain/signal-ledger.md
## What it is (1-2 sentences)
Doctrine-only proposal (Prompt 1 §4.5, Component 8; BLOCKED — schema does not exist in the database, pending approved change proposal) for the Sports OS Signal Ledger: the full-lifecycle, append-only audit trail for every pick, recommendation, Brain answer, and public claim — from intake through settlement and calibration update.
## Key metrics/methods (formulas where given, else "not specified")
- 30+ ledger event types in 5 phases: Phase 1 intake (question_asked, pick_initiated, source_searched, source_retrieved, entity_resolved); Phase 2 processing (evidence_retrieved, evidence_created, odds_captured, line_movement_detected, market_gravity_scored, model_score_generated, confidence_assigned, risk_assigned, weakening_signal_noted, contradiction_detected); Phase 3 review gate (explanation_generated, public_gate_checked/passed/failed, human_review_queued/completed, human_override_applied); Phase 4 publication (answer_published/withheld, pick_published/withheld, public_claim_created/retracted); Phase 5 settlement (game_completed, result_recorded, pick_settled, settlement_reviewed, calibration_updated, model_version_recorded).
- `PickResult` enum: WIN | LOSS | PUSH | VOID. Proposed `LedgerEntry` carries id (UUID), eventType, outputId, outputType (pick|answer|public_claim), entityIds, evidenceIds, modelVersion, operatorId, eventAt, metadata, immutable:true.
- Calibration feedback loop: every pick's `confidencePredicted` (0–100) is compared at settlement to actual outcome; `calibration_updated` records the delta, which adjusts future confidence for the same model version.
- Governance bar (per ADR source-freshness guide): a model version must accumulate 30+ settlements before its win-rate is reported publicly.
- Append-only rule: entries never modified or deleted; corrections are new entries referencing the corrected one. Prereqs: Evidence Vault + Entity Graph schemas implemented, stable versioned Pick schema, Prisma migration proposal, DB-level append-only enforcement (no UPDATE/DELETE), settlement workflow design.
## Data sources named
None directly; cross-references Evidence Vault, Entity Graph, Market Gravity, Claim Governance (`docs/brain/claim-governance.md`), Operator Cockpit governance, ADR `source-freshness-and-deploy-readiness-guide.md`; parent `docs/intelligence/SPORTS_OS_INTELLIGENCE_NETWORK_MASTER_PLAN.md`.
## Findings (numbers and facts, not vibes)
- The ledger is the named foundation for the Calibration Transparency page (`/intelligence/calibration` — future, blocked until 30+ settlements), the Pick Provenance Timeline (signature component — future), and the Loss Room post-settlement autopsy.
- Six implementation prerequisites are enumerated before any schema creation; BLOCK-2 in `reports/agent-handoffs/ACTIVE_AGENT_RELAY.md` is the tracking reference.
- The public_gate_failed / pick_withheld / answer_withheld events formalize a fail-closed publication path with recorded reasons — pairs with the prompt-leak policy's VOID-in-ledger rule.
- `human_override_applied` events make operator interventions auditable rather than invisible.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the append-only ledger + 30+ settlement public-reporting bar + calibration feedback loop (predicted-vs-actual deltas adjusting future confidence) is the accountability mechanism for public calibration claims.
- OTHER: ops/audit infrastructure.
## Engine-actionable? (yes/no + one-line what)
Yes — implement the calibration feedback loop: record confidencePredicted per pick, settle WIN/LOSS/PUSH/VOID, and feed the delta back into future confidence scoring once 30+ settlements per model version accumulate.
