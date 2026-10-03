# docs/gse/pr2-waitlist-implementation-readiness.md
## What it is (1-2 sentences)
A plan-only, verified readiness brief (authored 2026-06-29) for a future PR2 implementing the GSE waitlist lead-capture surface: backtest truth to carry, current repo structure, route candidates, data/storage options, analytics events, validation plan, tests, owner gates, and stop conditions. Explicitly not implemented — the document is a handoff spec for a later agent.
## Key metrics/methods (formulas where given, else "not specified")
not specified — no formulas. Backtest truth carried forward verbatim: out-of-sample samples **10,301**; model MAE ≈ **5.180**; naive MAE ≈ **4.9999**; beats naive = **false**. This blocks all performance claims; waitlist is a process/trust/lead-capture lane, never a performance lane.
## Data sources named
Internal only: `apps/web/app/**`, `apps/web/app/api/<name>/route.ts`, `apps/web/lib/analytics/events.ts`, `apps/web/lib/compliance-scanner/rules.ts`, `packages/db/prisma/schema.prisma`, `apps/web/__tests__/guardrails.test.ts`, `scripts/guardrails/{trust-gate,model-freeze,draft-only,claude-api-usage}.mjs`, `docs/gse/backtest-transparency.md`, `docs/gse/no-claim-rules.md`, `docs/gse/analytics-events.md`, `docs/gse/owner-approval-queue.md`, `docs/gse/decision-audit.md`.
## Findings (numbers and facts, not vibes)
- Waitlist page and API route did not exist (net-new); `components/gse/` does not exist — repo convention is `components/gsn/`; `zod ^3.23.8` verified in `apps/web/package.json`.
- Preferred storage: new `WaitlistLead` table (Option B) with consent/provenance columns (`consentGiven`, `consentTimestamp`, `copyVersion`, `utmSource`, `utmCampaign`, `referrer`, `path`), soft-delete, owner-review-only status (`QUEUED | NEEDS_INTAKE | APPROVED | DECLINED`).
- Seven no-op analytics events specified: `waitlist_viewed`, `waitlist_started`, `waitlist_submitted`, `audit_offer_clicked`, `transparency_read`, `claim_gate_hit`, `research_brief_clicked` — no third-party pixel without an owner gate.
- Seven tests mandated incl. copy-compliance (zero `block` hits on banned claim vocabulary), backtest-truth presence, consent hard-gate (`consentGiven === true` server-side), zod re-validation, email dedupe, no-op analytics, owner-only review transitions.
- Six stop conditions (halt and ask owner), incl. any attempt to add public performance claims or relax a compliance-scanner `block` rule; scope cap of ~5 files.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- No-claim / claim-gate doctrine (banned vocabulary: win-rate, ROI, accuracy, edge, guarantee, profit, hit-rate) — OTHER
- Backtest-truth transparency requirement (10,301 samples, beats-naive=false must be surfaced) — OTHER
- `claim_gate_hit` guard signal as a governance event — OTHER
## Engine-actionable? (yes/no + one-line what)
No — a pre-implementation spec whose only engine-adjacent content is the already-enforced no-claim gate.
