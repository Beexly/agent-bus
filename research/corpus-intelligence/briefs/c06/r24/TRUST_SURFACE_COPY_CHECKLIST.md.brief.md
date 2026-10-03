# ops/TRUST_SURFACE_COPY_CHECKLIST.md
## What it is (1-2 sentences)
The 1-page copy-compliance checklist for every user-facing string: claims must cite a ledger/source or be labeled a claim; invented readiness is a hard fail.
## Key metrics/methods (formulas where given, else "not specified")
- Seven checks: (1) source-or-label every number/claim, (2) no invented readiness (live/proven/ready/DONE only with DoD evidence), (3) gate honesty — PUBLIC_PICKS, LIVE_BOARD, PERFORMANCE_STATS, PRICING_PHASE inert unless founder-flipped, (4) named drop reasons + coverage counts over silent empties, (5) brand-lint vocab (no AI-picks/tip/lock/guaranteed), (6) per-unit proof over scale claims, (7) evidence-before-narrative (implement → test → ledger → PR).
- Locked 2026-09-23 (GSE Main B + C); brand line: "We're not AI. We're math you can read."
## Data sources named
- AGENT_LEDGER, metrics/receipts, documented gates, pricing catalogue (Stripe price IDs must match).
## Findings (numbers and facts, not vibes)
- Fail examples: "Live board is ready" while LIVE_BOARD gate is off; "Our AI locks winners tonight"; un-sourced "millions of…"; C-xx marked DONE without SHA/PR/DoD.
- Pass examples: "TOTAL withheld — top reason confidence_below_floor (n=…)"; PROVEN amounts with matching Stripe price IDs; "sample too small — showing methodology, not a public win rate."
- Maintenance: Figma Ship Bridge runs brand-lint-ui-copy before UI PRs; GSE re-checks /pricing + Subscribe after catalogue changes; exceptions go to GSE Main only.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the entire document is trust-surface copy governance (named drop reasons, gate honesty, per-unit proof).
- OTHER: brand-lint pipeline enforcement, pricing-integrity rules.
## Engine-actionable? (yes/no + one-line what)
Yes — lint every user-facing copy change against the 7 checks (no invented readiness, named drop reasons, per-unit proof).
