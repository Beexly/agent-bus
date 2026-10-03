# ops/GOLDEN_PATH_PROOF.md
## What it is (1-2 sentences)
A 2026-05-29 mapping (by Claude Opus 4.8, branch `claude/awesome-sagan-LOyCa`) of the GSE website's intended "golden path" user journey (Homepage → Today's Board → Decision Room → Evidence/Trust → Coach → No-Bet/Parlay MRI → Autopsy → Command Center → Academy → Report → Demo) onto real routes in a site clone, marking each done/stub/mapped/gap.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — no metrics or formulas; this is a UX/surface audit, verified by a test file (`apps/web/__tests__/game-room-route.test.ts`) asserting onward-links and restraint copy.
## Data sources named
None (codebase routes only: `app/page.tsx` 346L, `/board` 195L, `/room/[gameId]` ~190L, `/cockpit` 482L, `/performance` 546L, `/observatory`, `/vault`, `/methodology`, `/ledger`).
## Findings (numbers and facts, not vibes)
- Decision Room previously dead-ended at a compact risk disclosure; this pass added a "Where This Goes Next" section linking to Public Ledger, Calibration Report, Methodology, Responsible-Play, plus the restraint line "Galaxy declines more games than it publishes. No edge, no pick — that is the process, not a gap."
- Flagged gaps (explicitly NOT built): public Coach (owner-gated), Parlay MRI (deferred-nonblocking), Academy (deferred), dedicated Autopsy (CLAUDE-BUILD-REPAIR candidate), guided Demo (deferred).
- `/observatory` (66L) and `/vault` (57L) are intentional pre-launch stubs that degrade gracefully.
- Verified degraded states: bootstrap/stub states with status badges + explanatory copy + onward links when gates are closed; `prefers-reduced-motion` honored globally.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — site UX/navigation audit; no model or sports-domain intelligence.
## Engine-actionable? (yes/no + one-line what)
No — website surface mapping, not engine input.
