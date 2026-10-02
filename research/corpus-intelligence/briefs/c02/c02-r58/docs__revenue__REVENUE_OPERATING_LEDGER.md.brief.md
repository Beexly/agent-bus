# docs/revenue/REVENUE_OPERATING_LEDGER.md

## What it is (1-2 sentences)
A 2026-07-04 revenue operating ledger: a 9-row status table of the GSE revenue surfaces, showing which surfaces are live versus draft/pure-utility/not-active.

## Key metrics/methods (formulas where given, else "not specified")
- Status categories per surface: "draft/manual", "pure utility", "not active". No formulas.
- Utility function names recorded as evidence: `scoreRevenuePartner`, `scorePartnerRisk`, `evaluateOfferEligibility`, `reviewDisclosure`, `reviewResponsibleGaming`, `auditRevenueSurface`, `SPONSORSHIP_PACKAGES`.

## Data sources named
- Internal evidence references only: `SPONSORSHIP_PACKAGES` constant; the six named utility functions. No external sources.

## Findings (numbers and facts, not vibes)
1. Of 9 revenue surfaces, 0 are live: media sponsorship packages = draft/manual; live affiliate links = not active (evidence: "none added"); live provider integration = not active (evidence: "none added"). [OTHER]
2. Six surfaces exist as pure utility functions with no live deployment: partner fit scoring, partner risk scoring, offer eligibility, disclosure review, responsible-gaming review, revenue surface audit. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Zero live revenue surfaces; all revenue tooling is utility-stage — OTHER (business-ops context, not engine intelligence).

## Engine-actionable? (yes/no + one-line what)
No — revenue ledger only; no data, method, or signal relevant to the prediction engine.
