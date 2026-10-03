# revenue/PARTNER_SPONSOR_REVIEW_FIXTURES.md
## What it is (1-2 sentences)
The local-only fixture pack that proves GSE's partner/sponsor review workflow behavior before any commercial material reaches a public surface — code at `apps/web/lib/workflows/partner-sponsor-review-fixtures.ts` with tests — with hard locks that nothing in a generated packet can publish, route-expose, externally send, or activate live integrations.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — behavioral fixtures, not statistical methods. Six fixtures with expected outcomes: `creator_tool_affiliate_manual_review` → manual review; `board_meeting_sponsor_independence` → manual review; `sponsor_control_attempt_blocked` → blocked; `regulated_unknown_state_blocked` → blocked; `expired_offer_blocked` → blocked; `unsafe_claim_copy_blocked` → blocked. Every packet locks publishAllowed=false, routeExposureAllowed=false, externalSendAllowed=false, liveIntegrationAllowed=false, affiliateActivationAllowed=false, sponsorApprovalAutomatic=false.
## Data sources named
None — synthetic fixtures reusing existing seams (draft fence workflow packets, revenue offer eligibility, disclosure policy, responsible-gaming policy, commercial copy scanning, partner risk scoring, sponsor package independence boundaries).
## Findings (numbers and facts, not vibes)
- Sponsor independence boundary: sponsors cannot control picks, model outputs, no-bet decisions, loss autopsies, calibration claims, or editorial conclusions; copy stating those boundaries reaches manual review, while any copy/metadata indicating sponsor approval/control over them is blocked.
- Sportsbook-style offers fail closed when user state is unknown, even with disclosure and responsible-gaming text present.
- Evidence-required commercial claims (ROI/proven language) block before manual review; expired offers block even when the partner remains approved.
- Verification command given: run partner-sponsor-review-fixtures, draft-review-fixtures, affiliate-compliance, sponsor-copy-scan, partner-risk-engine, partner-opportunity tests plus typecheck; before merge: typecheck, lint, guardrails, git diff --check.
- Non-approval statement: the pack creates no live partner registry, approvals, real affiliate URLs, outreach, published copy, or sponsor influence rights.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: commercial guardrail architecture for the revenue lane — not engine modeling signal, but the sponsor-independence and claim-safety fences that protect every public-facing pick/calibration claim.
## Engine-actionable? (yes/no + one-line what)
No — this is revenue-lane compliance infrastructure; no modeling or prediction signal for the engine (one-line what: reuse its fail-closed guardrail pattern wherever commercial claims touch model outputs).
