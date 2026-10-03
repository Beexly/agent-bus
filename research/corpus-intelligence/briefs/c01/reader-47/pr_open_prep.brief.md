# gse/pr-open-prep.md
## What it is (1-2 sentences)
Historical PR-open prep package for the local no-claim founding waitlist (PR #57, merged into main on 2026-06-30); includes a no-claim copy compliance scan and backtest-truth disclosure ("beats naive = false").
## Key metrics/methods (formulas where given, else "not specified")
- Validation gates: typecheck 0 errors, lint 0, waitlist 49/49 tests, guardrails 6/6.
- `/api/performance` returns real data: **397 settled picks** (post-merge update).
- Backtest truth surfaced unspun: "beats naive = false" with a code↔doc drift guard.
## Data sources named
- Local-file waitlist store (gitignored `.gse-local/`); no external data sources.
## Findings (numbers and facts, not vibes)
- PR merged as commit `6084550c`; 13 commits total in the ahead set (4 pushed PR2 core + 9 local-only hardening commits).
- Compliance scanner ran over copy, 50 content drafts, rendered page, email drafts, and research briefs: **0 block flags**.
- Anti-bot: off-screen honeypot + submit-timing guard with edge-case tests.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- None — pure web/product operations doc; no football content. (OTHER: no engine-relevant signal)
## Engine-actionable? (yes/no + one-line what)
No — release-process documentation only; the one useful datum is the 397 settled picks figure and the honest "beats naive = false" calibration baseline, both already landed.
