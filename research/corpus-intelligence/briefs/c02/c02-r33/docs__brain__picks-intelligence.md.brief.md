# docs/brain/picks-intelligence.md
## What it is (1-2 sentences)
Doctrine for "Picks Intelligence" — the primary user-facing output of the Sports OS intelligence network — defining the mandatory structure of a pick (evidence chain, confidence score, risk annotation, tier gating, settlement, claim governance) and the rules for what a pick can and cannot claim.
## Key metrics/methods (formulas where given, else "not specified")
- PickConfidence = 0–100 number; calibrated against settled picks for the same model version; NOT a win probability.
- Score bands: 80–100 Strong; 65–79 Moderate; 50–64 Lean; 35–49 Watchlist; 0–34 Withheld. Scores <50 must not surface as directional picks publicly.
- New-model-version floor rules: confidence capped at 70 until 30 picks settled; a version with fewer than 10 settled picks cannot surface confidence on any public surface.
- Minimum evidence requirements by pick type: SPREAD 1 Tier1/2 + 3 total; MONEYLINE 1 + 2; TOTAL 1 + 2; PROP 2 + 4; WATCHLIST 0 + 1.
- Risk escalation: any listed risk factor triggers at least MODERATE risk; two HIGH factors or Tier-5-only injury status or stale Tier-1 data → VERY_HIGH.
- Model disagreement above 15 confidence points is a risk factor.
- Win rate = SETTLED_WIN/(SETTLED_WIN+SETTLED_LOSS); PUSH/VOID excluded; displayed as "W–L" with range timestamp; trailing windows (last 30/50/100), never blended across model versions; requires ≥30 settled picks before public display.
## Data sources named
- Evidence tiers 1–5 (Tier 1/2 = primary, Tier 3 = supporting, Tier 4 = market, Tier 5 = weak signals).
- Cross-references: docs/brain/evidence-vault.md, signal-ledger.md, entity-graph.md, market-gravity.md, claim-governance.md, calibration-feedback-loop.md, docs/intelligence/product-ecosystem.md.
## Findings (numbers and facts, not vibes)
- A pick carries 6 mandatory component groups: identity, the call (type/side/line/odds context), intelligence (confidence, risk, tier, evidence chain, weaknesses — required, never empty — market context), provenance, settlement status.
- Tier gate: FREE gets pick direction (1/day max, server-side counted) and freshness timestamp only; PRO adds confidence, evidence summary, risk, market context, weaknesses; ELITE adds pre-line-open early access, analytics dashboard, alerts. Enforced server-side.
- 6 gates before any public surface: evidence chain validated; Tier 1/2 within TTL; confidence ≥50 for directional; claim-governance check passed; model version has ≥10 settled picks (or capped at 70); written to Signal Ledger with PUBLISHED event.
- 8 forbidden claim classes on all surfaces: "lock"/"guaranteed winner", "risk-free"/"free money", "sure thing", "sharp money is on [side]" without Tier 1/2 backing, specific win rates without ≥30 settled picks at that version, "verified inside information", "our model knows something the market doesn't", any implied non-public information access.
- Settlement outcomes: WIN/LOSS feed calibration positively/negatively; PUSH and VOID are excluded from calibration; settlement record is permanent and immutable; post-game direction changes, LOSS→PUSH reclassification without Tier-1 confirmation, and retroactive voiding are forbidden.
- Dependencies not yet required for current surface: Evidence Vault, Entity Graph, Signal Ledger, Source Acquisition Mesh, Claim Governance, Market Gravity — evidence-chain display remains a PRO/ELITE feature gated on those components.
- Status is doctrine-only; implementation requires an approved change proposal (schemas marked PROPOSAL).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: public settlement record per model version with trailing-window W–L and immutable settlement history is the trust mechanism for published picks.
- TRUST-SIGNAL: forbidden-claims list and claim-governance gate prevent tout-style language that erodes credibility.
- OTHER: confidence calibration rules (70-cap for new versions, ≥10 settled before public confidence) and evidence-tier minimums are process integrity mechanics.
- OTHER: risk annotation factors (injury-confirmation tier, line movement vs evidence freshness, model disagreement >15 points, no Tier-1 in last 4 hours) are operational risk flags, not on-field signals.
## Engine-actionable? (yes/no + one-line what)
yes — the confidence calibration regime (30-settle/70-cap, 10-settle public floor, ≥50 public directional floor, evidence-tier minimums by pick type) is a publish-gating spec the engine's pick pipeline must implement.
