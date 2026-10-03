# brain/evidence-vault.md

## What it is (1-2 sentences)
Doctrine (status: BLOCKED — schema implementation pending approval) for the Sports OS Evidence Vault: the central provenance-typed store for every observed fact, source observation, claim, and signal in the pick pipeline, with a proposed `EvidenceItem` TypeScript schema carrying source tier, confidence (0–100), public-safety gating, and contradiction status. It is the accountability spine: no public claim without a vault record, no vault record without a declared source tier.

## Key metrics/methods (formulas where given, else "not specified")
Not specified (no formulas). Key parameter definitions:
- `confidence: number` — 0–100, calibrated against historical results.
- `sourceTier: 1 | 2 | 3 | 4 | 5 | 6`.
- `contradictionStatus`: "NONE" | "POSSIBLE" | "CONFLICTED".
- `sourceQuality`: "OFFICIAL" | "LICENSED" | "TRUSTED_SECONDARY" | "MARKET" | "WEAK_SIGNAL" | "LOW_TRUST".
- `publicSafe: boolean` — server-side enforced before any vault item reaches a public API.
- Calibration feedback loop (procedural, not formula): after every settlement, (1) settlement record updates `confidence` calibration on relevant vault items; (2) items materially miscalibrated are flagged for model review; (3) the Signal Ledger records the calibration delta.
- Public-safety rule (all must hold): `publicSafe: true`; `sourceTier` ∈ {1,2,3} (Tier 4 only as market context with caveat); `contradictionStatus` ∈ {NONE, POSSIBLE-with-human-review-note}; `validUntil` not passed or re-verified; `humanReviewed: true` for any Tier-3 item used as primary pick evidence.
- Contradiction resolution: CONFLICTED items cannot be standalone evidence for public claims; human review queued; referencing pick/claim held until resolution; higher-tier source takes precedence.
- Freshness enforcement: item whose `validUntil` has passed is stale — must not back any new pick/public claim without re-verification.

## Data sources named
No external datasets; references internal docs: `docs/intelligence/SPORTS_OS_INTELLIGENCE_NETWORK_MASTER_PLAN.md` (parent), `reports/agent-handoffs/ACTIVE_AGENT_RELAY.md` (BLOCK-1), `docs/brain/entity-graph.md`, `docs/brain/signal-ledger.md`, `docs/brain/source-hierarchy.md`, `docs/brain/claim-governance.md`, `docs/source-registry-spec.md`, `docs/adr/pre-implementation-change-proposal-template.md`, `docs/adr/promotion-publication-checklist.md`. External: The Odds API license terms (raw odds data not redistributable per license).

## Findings (numbers and facts, not vibes)
- Vault stores: official injury designations and practice reports; odds/line data from licensed APIs; trusted secondary reporting; market movement observations; weak-signal watchlist items (cockpit-only, never public-facing); model scores/outputs (Tier 6 — never source of truth); human review decisions and overrides.
- Must NOT store: PII not relevant to sports intelligence; content from BLOCK-11 sources (FL Studio, pirated/cracked software archives); content from BLOCK-12 sources (system-prompts archives, leaked proprietary text); raw odds data not redistributable per The Odds API license terms; content where the source cannot be attributed to a tier.
- Model outputs are Tier 6 by doctrine — content tools, never sources of truth, never the basis of a claim.
- Implementation prerequisites: Entity Graph schema approved/implemented; Source Registry operational; Signal Ledger co-designed; Prisma migration proposal via change-proposal template; `humanReviewed` gate wired into promotion checklist; `publicSafe` enforced server-side.
- Entity Graph: `docs/brain/entity-graph.md` provides entity resolution for vault items (QB-behavioral profiles, coaching entities, OL units would be entities here — INFERENCE).
- Every piece of evidence used in any pick rationale, Brain answer, or public claim must be stored; every Tier-5 watchlist item stored with `publicSafe: false`.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **TRUST-SIGNAL**: The whole doctrine is the trust program's intake spine. The closed calibration feedback loop (settlement → confidence recalibration → Signal Ledger delta) is the mechanism that makes stated confidence meaningful over time; this is the operational counterpart of the Glass Ledger hash-chained public record named in the business plan. Serves calibration/sizing and the trust-target intake program.
- **TRUST-SIGNAL**: The rule that AI/model outputs are Tier 6 and "never a source of truth" is a HARD constraint on any engine calibration/sizing claim — no self-referential confidence inflation. Serves the calibration program.
- **QB-BEHAVIOR / COACHING / OL**: The entity-graph cross-reference plus entityType/entityId fields means any QB-behavioral profile, coaching-tendency profile, or OL-unit signal must resolve to a canonical entity before being admitted as evidence — INFERENCE: this is where per-QB behavioral profiles and coaching-tendency tracking would be anchored when wired. Serves QB-behavioral profiles, coaching tendencies, OL programs once schema exists.
- **OTHER**: The public-safety gate (tiers 1–3 only, human review for Tier-3 primary evidence, freshness TTL) is the enforcement layer behind the 9/28 public/private doctrine (public site shows only projections/rankings). Contradiction-status handling (hold pick until resolved, higher-tier precedence) is a concrete anti-noise mechanism relevant to every signal promotion decision.

## Engine-actionable? (yes/no + one-line what)
No — doctrine/proposal, schema BLOCKED pending approval; file as the design contract the wiring lane must satisfy when implemented.
