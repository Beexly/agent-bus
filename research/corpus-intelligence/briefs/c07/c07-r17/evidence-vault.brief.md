# brain/evidence-vault.md
## What it is (1-2 sentences)
Doctrine (BLOCKED — schema not implemented) for the Evidence Vault: the central structured store of every observed fact, source observation, claim, and signal in Sports OS, where no public claim publishes without a vault record and no vault record exists without a declared source tier.

## Key metrics/methods (formulas where given, else "not specified")
- Proposed `EvidenceItem` schema: sourceId, sourceTier 1–6, entityType/entityId, claimType ("injury_status" | "line_value" | "rumor" | ...), observedAt/publishedAt/retrievedAt/validUntil, sourceQuality (OFFICIAL | LICENSED | TRUSTED_SECONDARY | MARKET | WEAK_SIGNAL | LOW_TRUST), confidence 0–100 calibrated against historical results, publicSafe boolean, contradictionStatus (NONE | POSSIBLE | CONFLICTED), humanReviewed, pickIds, claimIds.
- Public-safety gate: publicSafe=true AND tier ∈ {1,2,3} (tier 4 only as caveat-ed market context) AND contradictionStatus NONE/POSSIBLE-with-review AND validUntil not passed AND humanReviewed for Tier-3 primary pick evidence.
- Calibration integration: settlement updates confidence calibration per item; miscalibrated items flagged for model review; Signal Ledger records the delta.
- Prerequisites: Entity Graph schema, Source Registry, Signal Ledger co-design, Prisma migration proposal, humanReviewed gate in promotion checklist, server-side publicSafe enforcement.

## Data sources named
Tier 1 official injury designations/practice reports; Tier 2 licensed APIs (The Odds API); Tier 3 trusted secondary reporting; Tier 4 market movement observations; Tier 5 weak-signal watchlist (cockpit-only); Tier 6 model outputs (never source of truth).

## Findings (numbers and facts, not vibes)
- Status: doctrine only — implementation BLOCKED pending schema approval; `EvidenceItem` type and Prisma table do not exist.
- Must NOT store: PII, BLOCK-11/12 sources (pirated software, leaked system prompts), raw odds data that cannot be redistributed per The Odds API license, unattributed-to-tier content.
- Contradiction resolution: CONFLICTED items cannot standalone-support public claims, queue human review, hold the referencing pick/claim, higher-tier source takes precedence.
- Stale rule: validUntil-expired items must not evidence new picks/claims without re-verification.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Whole doc is the trust layer — TRUST-SIGNAL (provenance, contradiction resolution, staleness, human-review gates).
- No QB/coaching/OL/scheme intelligence — OTHER.

## Engine-actionable? (yes/no + one-line what)
no — doctrine only, implementation BLOCKED; intake for when the SAM/registry change proposal lands.
