# docs/intelligence/monetization-lanes.md
## What it is (1-2 sentences)
Doctrine-only map of the 15-component Sports OS product ecosystem into six monetization lanes (subscription intelligence, Galaxy Vault, Almanac, fantasy vertical, developer API, media studio) with dependency-ordered sequencing and strict approval gates. Source: Prompt 1 §3 · `docs/galaxy-monetization-expansion-master-plan-v3.md`.

## Key metrics/methods (formulas where given, else "not specified")
not specified — no formulas. Claim governance threshold: no win-rate claims without 30+ settled picks per model version.

## Data sources named
None external — internal docs only (`docs/intelligence/SPORTS_OS_INTELLIGENCE_NETWORK_MASTER_PLAN.md`, `docs/galaxy-monetization-expansion-master-plan-v3.md`, `docs/adr/pre-implementation-change-proposal-template.md`, `docs/vault-content-system/`, `docs/rd-2026-05-23/galaxy-almanac-sample-essay.md`, `docs/brain/fantasy-war-room.md`, `docs/intelligence/developer-innovation-layer.md`, `docs/design/media-studio-doctrine.md`).

## Findings (numbers and facts, not vibes)
- Live tiers (server-side enforced): Free $0 (1 pick/day, no confidence scores); Pro $19/mo (all picks, confidence scores, line movement); Elite $49/mo (all Pro + early access, analytics, alerts).
- 15 components mapped to 6 lanes; lanes ordered by readiness (dependency count).
- Sequencing: NOW — Lane 1 (Subscription Intelligence, implemented: /pricing, Stripe checkout, webhook settlement); NEXT — Lane 3 (Galaxy Almanac, low-dependency copy work); AFTER VAULT + LEDGER SCHEMA APPROVAL — Lane 2 (Galaxy Vault) and Lane 4 (Fantasy Intelligence); AFTER LANES 1–4 STABLE — Lane 5 (Developer/API, highest dependency count) and Lane 6 (Media Studio).
- Blocked items: Evidence Vault schema, Signal Ledger MVP, Fantasy War Room schema, Entity Graph — all schema-approval blocked.
- Approval required for: new Stripe price ID/tier, Pro/Elite feature-access changes, publishing win-rate/accuracy claims (minimum 30+ settled picks per model version), any new paid surface, B2B API (licensing, rate limiting, attribution policy), sportsbook affiliate integrations (legal review).
- Anti-patterns (never): fake win-rate claims; "guaranteed picks"/certainty language; showing confidence scores on Free tier even temporarily; sportsbook affiliate links without legal review; CSS-only paywalls (server-side enforcement required); publishing a pick before its evidence has been source-checked.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: 30+ settled-picks-per-model-version claim threshold; pick-provenance timeline, calibration data, methodology transparency as the Vault value proposition; "publish no pick before evidence is source-checked" rule.
- OTHER: monetization/business doctrine (tiers, lanes, sequencing).

## Engine-actionable? (yes/no + one-line what)
Yes — the 30+ settled-picks-per-model-version threshold and the evidence source-check gate define the calibration and publication bars the engine must clear before any public performance claim.
