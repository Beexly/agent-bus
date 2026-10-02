# revenue/RESPONSIBLE_GAMING_PARTNER_POLICY.md
## What it is (1-2 sentences)
A short policy gate (updated 2026-07-04) for high-risk offers (sportsbook, DFS, wagering, contest, prize, deposit): they fail closed unless all required disclosures/approvals are present, and unknown user state fails closed.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — no formulas. Fail-closed rule: sportsbook/DFS/wagering/contest/prize/deposit/similar high-risk offers require disclosure text, terms URL, responsible-gaming text, minimum age policy, eligible states, restricted states where applicable, approved surfaces, and separate partner + offer approval. Unknown user state fails closed for high-risk offers.
## Data sources named
None. Code surface named: apps/web/lib/revenue/responsible-gaming-policy.ts and apps/web/lib/revenue/offer-eligibility.ts.
## Findings (numbers and facts, not vibes)
The file is a 21-line policy gate; it contains no numbers, metrics, methods, or findings beyond the fail-closed rule and the two code-surface paths.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
None — this is a compliance/revenue policy with no engine, behavioral, or scheme content (OTHER at most, and even that is a stretch).
## Engine-actionable? (yes/no + one-line what)
No — compliance gate only; no model, metric, or signal content for the engine.
