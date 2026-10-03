# docs/gse/next-safe-queue.md
## What it is (1-2 sentences)
A 30-task sequenced queue for GSE's waitlist lane, split into six sections (local hardening, DB migration planning, no-claim release gate, content, public readiness, owner approvals), each task tagged LOCAL (no approval needed) or GATED (owner approval required).

## Key metrics/methods (formulas where given, else "not specified")
- Task gating taxonomy: LOCAL vs GATED with done-conditions per task; no global gate crossed without an explicit GATED flag.
- A1-A8: local hardening — WaitlistStore interface + factory; `waitlist_viewed` client event; in-memory rate-limit/dedupe; `.gse-local/` review CLI (gitignored output); zod max-length/trim edge tests; a11y pass (axe-style); honeypot spam field; local store schema doc.
- B9-B14: DB migration — WaitlistLead Prisma model; hand-authored migration SQL preview; contract tests for both stores; Prisma migration generation (GATED); local Postgres migrate diff empty (GATED); `WAITLIST_STORAGE=db` flip (GATED).
- C15-C18: no-claim release gate on demand; CI-style no-claim scan script (non-zero exit on block flag); waitlist smoke-test script; backtest-truth test asserting "does not beat naive" in rendered HTML.
- D19-D23: 25 no-claim posts scanned; 10 brief topics scanned; one full research brief via `research-brief-template.md`; publishing is GATED.
- E24-E28, F29-F30: all GATED — nav linkage, remove noindex at go-live only, deploy, confirmation email, analytics (no-PII), owner migration approval, owner content-push approval.
- Ordering: A1-A8 first, then C15-C18 and D19-D22 (all LOCAL), GATED items wait on owner.

## Data sources named
- None (operational task list; no data sources).

## Findings (numbers and facts, not vibes)
- 30 tasks total across 6 sections.
- Immediate-safe subset: A1-A8 + C15-C18 + D19-D22 (all LOCAL).
- Hard-gated items: B12-B14, D23, E24-E28, F29-F30.
- Done-conditions are concrete per task (e.g., "tests green", "rapid double-submit handled", "exits non-zero on any block flag").

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the whole queue is guardrail infrastructure for honest launch — no-claim gates, backtest-truth test on rendered page, no-index-until-approved, no-PII analytics, privacy/vendor approval for analytics.
- OTHER: engineering ops sequencing.

## Engine-actionable? (yes/no + one-line what)
No — web-ops task queue, no engine content; flag only the B-items (DB store contract tests) if engine team touches the waitlist store.
