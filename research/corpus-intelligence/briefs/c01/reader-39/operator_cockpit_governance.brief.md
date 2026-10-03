# brain/operator-cockpit-governance.md
## What it is (1-2 sentences)
The doctrine for Sports OS's Operator Cockpit — the internal mission control that surfaces pipeline state (stale data, contradictions, rumor radar, evidence review) to operators — including the panel inventory, the cockpit→public promotion workflow, data-status classifications, and mandatory gate tests.

## Key metrics/methods (formulas where given, else "not specified")
Not specified. Quantifiable invariants: data statuses LIVE/REFRESHING/STALE/BOOTSTRAP/DEMO/ERROR; any pick generated on STALE/BOOTSTRAP/DEMO data must be flagged and never published; 13 mandatory gate tests must pass on every commit touching cockpit routes, auth config, or public surfaces (named: public-copy-scanner, trust-claims, brand-voice-vocabulary, no-fake-percentages, readiness-gate-enforcement, readiness-gates-contract, public-performance-policy, performance-gate, promotions-guards, route-smoke, admin-routes-gating, cockpit-page-a11y, public-copy-scan-strong).

## Data sources named
Evidence Vault, Signal Ledger, Signal Activity Feed, Weak Signal Engine (rumor radar input), Research Lab queue, Claim Governance (`docs/brain/claim-governance.md`), Brain answer review workflow; ADR `public-cockpit-boundary-and-gate-integrity-contract.md`.

## Findings (numbers and facts, not vibes)
- Cockpit panels: 9 existing (`/cockpit`, `/cockpit/sources`, `/cockpit/agent-runs`, `/cockpit/market-twin`, `/cockpit/jarvis/trend`, `/cockpit/calibration`, `/cockpit/pick-memory`, `/cockpit/promo-desk`, `/cockpit/operator-registry`); 5 pending (Review Queue, Evidence Review, Contradiction Alert, Publication Gate, Signal Activity Feed — the first three blocked on Evidence Vault, Publication Gate on Claim Governance, Signal Activity Feed on Signal Ledger).
- Operator permissions include overriding a model confidence score (with logged reason), approving/rejecting picks and Brain answers, retracting published claims, and queueing Tier-5 verification tasks; forbidden include publishing any cockpit surface publicly, bypassing Evidence Vault/Signal Ledger gates, or deleting Signal Ledger entries (append-only).
- Cockpit→public promotion workflow is an 8-step gated chain: publication review → evidence link check → source tier check → contradiction check → freshness check → language check → queue → human review → operator confirm → publish → Signal Ledger records publication.
- No cockpit route is public; no cockpit URL may appear in a public API response; bootstrap/demo data must never reach a public surface.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the tier-verification machinery — rumor radar (unverified) vs evidence review (Tier 1–2 verified), contradiction alerts, and the requirement that claims meet minimum tier before approval — is the trust-signal intake governance layer; weak-signal engine feeds rumor radar.
- OTHER: operational governance, not sports intelligence; no QB-behavior, coaching, OL, or scheme data. The stale-data flagging rule (never publish picks generated on STALE/BOOTSTRAP/DEMO) is relevant to engine output integrity.

## Engine-actionable? (yes/no + one-line what)
No — governance doctrine for internal operations; nothing to wire into the prediction engine.
