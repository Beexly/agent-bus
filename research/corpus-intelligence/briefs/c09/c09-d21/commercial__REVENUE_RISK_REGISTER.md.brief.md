# commercial/REVENUE_RISK_REGISTER.md
## What it is (1-2 sentences)
A dated revenue-risk register (2026-07-04) listing 10 commercial risks with severities, mitigations, and the code/doc surfaces that enforce them, plus a hard rule that commercial pressure cannot override source rights, claim safety, disclosure, responsible-gaming controls, model freeze, or no-bet decisions.
## Key metrics/methods (formulas where given, else "not specified")
not specified — qualitative risk table, no formulas.
## Data sources named
None. Code/doc surfaces referenced: media pages/docs, claim-safety.ts, banned-copy.ts, disclosure-policy.ts, responsible-gaming-policy.ts, offer-eligibility.ts, media docs + package definitions, sponsor-packages.ts, partner-score.ts, closeout audit.
## Findings (numbers and facts, not vibes)
- 9 risks rated HIGH: fake audience claim (block until real analytics exist), unsupported ROI or win-rate claim (claim scanner + manual evidence gate), undisclosed sponsor mention (disclosure review), regulated offer with unknown state (fail closed), partner-approved-but-offer-unapproved and offer-approved-but-partner-expired (separate approvals + expiry checks), sponsor influence over model/editorial (sponsor cannot control list), premature API launch (shadow seam first).
- 1 risk rated MEDIUM: duplicate revenue logic (reuse media-revenue where possible).
- Hard rule: commercial pressure cannot override source rights, claim safety, disclosure, responsible-gaming controls, model freeze, or no-bet decisions.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: revenue/compliance risk governance — no football intelligence content.
## Engine-actionable? (yes/no + one-line what)
no — commercial compliance doc; only indirectly relevant via the claim-safety gate that governs published picks.
