# docs/brain/ask-the-brain.md
## What it is (1-2 sentences)
The doctrine-only specification (Status: Doctrine; implementation requires an approved change proposal) for Sports OS's source-backed Q&A/research system ("Ask the Brain"), which produces structured, evidence-cited answers to sports intelligence questions with confidence levels, supporting and weakening signals, and publication-safety gates; launch sequence is internal cockpit only → limited public beta → public launch.
## Key metrics/methods (formulas where given, else "not specified")
not specified — schema/doctrine specification, no statistical formulas.
- **BrainAnswer schema (required fields):** answerId, question, askedAt/answeredAt, modelVersion; directAnswer (1–3 sentences); confidenceLevel (LOW/MEDIUM/HIGH) + confidenceScore (0–100); evidenceUsed (EvidenceRef[] with evidenceId, sourceTier 1–6, sourceLabel, retrievedAt); sourceQuality (OFFICIAL/LICENSED/TRUSTED_SECONDARY/MARKET/WEAK_SIGNAL/MIXED); highestSourceTier/lowestSourceTier (1–6); whatChanged; supportingSignals[]; weakeningSignals[]; missingData[]; marketContext?, fantasyImplication?, pickImplication?; publicSafeStatus (PUBLIC_SAFE/COCKPIT_ONLY/WITHHELD) + publicSafeReason?; lastUpdated, staleAt?.
- **Confidence definitions:** HIGH = multiple Tier 1–2 sources agree, no material weakening signals, recent verification; MEDIUM = Tier 1–3 present with some weakening signals or approaching TTL; LOW = Tier 3–4 only, significant weakening, or stale/unverifiable. HIGH confidence on Tier-4-only evidence is forbidden.
- **Public Safety Gate:** publicSafeStatus must be PUBLIC_SAFE; highestSourceTier 1–3 (Tier 4 requires market-context caveat); weakeningSignals displayed alongside — never omitted; must pass the public-copy scanner; no forbidden language (casino, guaranteed, locked, etc.); claim governance operational before any public answers.
- **Hard prohibitions:** never fabricate evidence; never HIGH without Tier 1–2 corroboration; never omit weakening signals; never imply insider access or sharp-money confirmation; never answer with Tier-5-only evidence on any user surface; never produce pick recommendations directly (picks flow through Component 1 with the Brain as one input).
- **Public launch gates:** minimum 30 settled picks per model version before any accuracy claim is shown; public-copy scanner + brand-voice tests pass for every answer template; source transparency pages (/intelligence/source-hierarchy, /intelligence/how-it-works) live first.
## Data sources named
Evidence Vault (docs/brain/evidence-vault.md), Entity Graph (docs/brain/entity-graph.md), Signal Ledger (docs/brain/signal-ledger.md), Market Gravity (docs/brain/market-gravity.md), Claim Governance (docs/brain/claim-governance.md), Operator Cockpit governance (docs/brain/operator-cockpit-governance.md).
## Findings (numbers and facts, not vibes)
- Example questions covered: injury rehab status, offseason scheme changes, 30-game hard-hit% trend, strikeout prop line movement, Reddit rumor confirmation against official sources, target-share trend since WR1 went on IR, team pass defense vs slot receivers (injury/scheme/line-movement rumor-check use cases).
- Public launch requires at least 30 settled picks per model version before any accuracy claim — a concrete, testable bar (compare with conformal audit's n >= 30 public-display threshold).
- Three launch phases with escalating gates; cockpit-only until claim governance and source transparency validation pass; human review required for any answer used in a public pick rationale (Phase 1).
- Schema requires highest AND lowest source tier per answer — exposes weak-link evidence explicitly.
- Forbidden public-copy language explicitly includes "casino", "guaranteed", "locked".
- Every answer must state what would weaken it (weakeningSignals, missingData) — adversarial self-critique is a schema requirement, not an optional flourish.
- Document is doctrine only; Evidence Vault, Entity Graph, and Signal Ledger must exist before implementation.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Source-backed Q&A with explicit Tier 1–6 evidence linkage per answer: TRUST-SIGNAL
- HIGH-confidence floor (Tier 1–2 corroboration required); HIGH on Tier-4-only forbidden: TRUST-SIGNAL
- Weakening-signals-and-missing-data as mandatory schema fields (adversarial honesty by design): TRUST-SIGNAL
- Injury-rumor verification workflow (Reddit claim vs official source): TRUST-SIGNAL
- Scheme-change offseason questions as a first-class Brain use case: SCHEME, COACHING
- Slot-receiver pass-defense matchups as an example question: SCHEME
- No sharp-money/implied-insider claims; no direct pick recommendations: TRUST-SIGNAL
- 30-settled-picks-per-model-version bar before accuracy claims: TRUST-SIGNAL
- Public-copy forbidden language (casino, guaranteed, locked): TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
Yes — when the Brain is built, the BrainAnswer schema's required evidence-tiers, weakening-signals, and confidence floors are the machine-readable spec for the calibration/trust layer; it is the natural consumer of both the conformal gates (numeric confidence) and the source-risk tiers (evidence quality).
