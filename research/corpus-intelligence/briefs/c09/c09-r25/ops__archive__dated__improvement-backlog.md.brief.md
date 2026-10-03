# ops/archive/dated/improvement-backlog.md
## What it is (1-2 sentences)
Archived dated improvement backlog (2026-05-22) for Claude/Codex slack-time work: item format (what/why/cost/approval status), three open items with IMP-001 shipped, and a declined list.
## Key metrics/methods (formulas where given, else "not specified")
Not specified.
## Data sources named
None.
## Findings (numbers and facts, not vibes)
- IMP-001 (seed `apps/web/components/marketing/` directory) — filed 2026-05-22 by Claude, shipped by Codex in Phase 1.
- IMP-002 (Apex Phase-2 browser QA friction findings F1–F10) — triaged into Phase 1+2; residual items rolled to Phase 3 polish.
- IMP-003 (URGENT at filing): spec + template-code parity gap — 33 files in `apps/web/lib/*/templates/` + 22 product specs in `docs/product/` written to a scratch clone by Claude, never propagated to the primary clone where Codex commits; blocked Phase 3 Studio + Twitter/Discord bots + Model Journal from shipping with locked voice/refusal/compliance contracts; fix = owner copies via `SCRATCH_TO_PRIMARY_COPY_MANIFEST.md` PowerShell script or Codex re-implements from scratch.
- Declined: none yet (at doc date).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: archived dev-process backlog, no football intelligence.
## Engine-actionable? (yes/no + one-line what)
No — stale (May 2026) dev backlog; documents an old cross-clone sync gap, not engine logic.
