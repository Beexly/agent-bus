# brain/claim-governance.md
## What it is (1-2 sentences)
A Sports OS doctrine (Prompt 1 §4.10 · Component 12; status: doctrine only, implementation requires approved change proposal) defining the 7-step workflow every factual/analytical claim must pass before publication, plus non-negotiable win-rate rules and a retraction protocol — the gate between the internal intelligence pipeline and the public product.
## Key metrics/methods (formulas where given, else "not specified")
- 7-step workflow: evidence linking (≥1 EvidenceVault item, sourceTier ≤ 3) → source tier check → contradiction check (CONFLICTED → human review) → freshness check (per-tier TTLs) → language check (public-copy scanner, brand-voice, no-fake-percentages, trust-claims) → human review (certain claim types) → publish or withhold with logged failure reason.
- Non-negotiable rule: no win-rate/accuracy/ROI statistic on any public surface until the Signal Ledger records at least 30 settled picks for the model version cited; before 30 picks, only "Calibration data accumulates as picks settle"; after 30, stats pulled directly from Signal Ledger, CIs shown for 30–100 picks, model version cited.
- Minimum source tiers: injury status (official designation) Tier 1; injury expected-return Tier 1 or corroborated Tier 3 (+ human review); sharp money assertion Tier 1 or Tier 2 specific (+ always human review); model performance stat Signal Ledger 30+ settled picks (+ human review); win-rate Signal Ledger 30+ settled picks per model version (+ always human review).
## Data sources named
Internal systems only: Evidence Vault (`docs/brain/evidence-vault.md`), Signal Ledger (`docs/brain/signal-ledger.md`), Ask the Brain, Operator Cockpit, trust-claim scanner (`apps/web/lib/trust-claims.ts`).
## Findings (numbers and facts, not vibes)
- Prohibited claims (never publish): "guaranteed pick", "sure thing"/"lock", unverified "sharp money is on X", any win-rate before 30 settled picks, "risk-free", "insider information", "definitely playing", "free win", any claim using Tier-5-only evidence.
- Retraction protocol: incorrect/unsupported published claim is immediately retracted; a `public_claim_retracted` event is written to the Signal Ledger; reason logged; if used as pick rationale, the pick is reviewed and users who acted receive a settlement note.
- Existence of a functioning Claim Governance workflow is a prerequisite for: expanding public methodology pages, Ask the Brain public beta, publishing model calibration transparency data, any B2B API exposure.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: this is the trust layer's operational backbone — every injury-availability, sharp-money, or performance claim on public surfaces must be evidence-linked and tier-gated; directly governs how concussion/injury signals and calibration stats can be published.
- OTHER: governance doctrine only (not yet implemented — requires Evidence Vault, Signal Ledger, scanners, PublicClaim schema, human review queue operational first).
## Engine-actionable? (yes/no + one-line what)
Yes — public injury/performance copy is gated on 30 settled picks per model version and Tier 1–2 evidence; build the EvidenceVault → Signal Ledger → claim-gate chain before any public calibration transparency.
