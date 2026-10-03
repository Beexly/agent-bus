# revenue/OFFER_COMPLIANCE_CHECKLIST.md
## What it is (1-2 sentences)
A 15-item pre-publication compliance checklist (dated 2026-07-04) that every offer must pass before appearing publicly. It gates on partner/offer approval status, expiry, surface permissions, and high-risk disclosures.
## Key metrics/methods (formulas where given, else "not specified")
Not specified (checklist, no formulas). Key thresholds named: minimum age 21 or higher for high-risk offers; user state must be known and eligible (not restricted) for high-risk offers; terms URL + disclosure + responsible-gaming text required for high-risk offers.
## Data sources named
None (internal process doc). Code surfaces referenced: apps/web/lib/revenue/offer-eligibility.ts and apps/web/lib/revenue/banned-copy.ts.
## Findings (numbers and facts, not vibes)
- 15 checklist items: partner exists, partner approval approved, partner approval not expired, offer approval approved, offer not expired, partner+offer allow target surface, terms URL exists (high-risk), disclosure exists, responsible-gaming text exists (high-risk), minimum age 21+ (high-risk), user state known (high-risk), user state eligible, user state not restricted, copy scan passes, manual review complete.
- High-risk offers require: terms URL, disclosure, responsible-gaming text, age >= 21, known/eligible state.
- Manual review is the final gate after automated copy scan.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- 15-item compliance gate with partner approvals and responsible-gaming text -> TRUST-SIGNAL (provenance/integrity posture for the product's trust moat).
- No QB/COACHING/OL/SCHEME content -> OTHER for all other items.
## Engine-actionable? (yes/no + one-line what)
No - it is a revenue/affiliate compliance process doc, not an engine data or modeling input.
