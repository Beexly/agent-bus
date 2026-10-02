# docs/gse/pr2-owner-review-packet.md
## What it is (1-2 sentences)
Historical (superseded 2026-06-30) owner-review packet for PR2: a local, no-claim founding-waitlist path in the GSE web app — a `/waitlist` page + local POST handler storing leads to a gitignored local JSON file. It is fully merged (PR #57, commit `6084550c`) with the prod DB live and `/api/performance` returning real data (397 settled picks).

## Key metrics/methods (formulas where given, else "not specified")
- No-claim compliance proof: copy strings pass the platform compliance scanner (`runNoClaimGuard`, `hasNoPerformanceClaim`) with zero `block` flags — no numeric win/ROI/accuracy/edge/profit, no "guarantee", no "risk-free".
- Backtest-truth proof: `BACKTEST_TRUTH = { samples: 10_301, modelMae: 5.18, naiveMae: 4.9999, beatsNaive: false }` — tests assert the page shows "10,301" and "does not beat naive".
- Validation results: typecheck exit 0, lint exit 0, vitest 24/24 passed (19 waitlist + 5 guardrails); consent-gate, email dedupe, and no-op analytics verified.
- not specified (no sports-math formulas; this is product/compliance process).

## Data sources named
- Internal only: local-file lead store `.gse-local/waitlist-leads.json` (gitignored); durable `WaitlistLead` Prisma table deferred (owner-gated migration).
- Same-origin `fetch("/api/waitlist")` only; no external analytics vendor (no gtag/posthog/segment/mixpanel/amplitude).

## Findings (numbers and facts, not vibes)
- 2026-06-29 prepared; 2026-06-30 update says merged into `main` as PR #57 (commit `6084550c`); `/api/performance` returns real data with 397 settled picks (TRUST-SIGNAL: historical count, confirms real-data prod state).
- Backtest record as of the doc: 10,301 samples, model MAE 5.18 vs naive MAE 4.9999, beats naive = false (TRUST-SIGNAL: honest no-beat-naive baseline, decision-hygiene posture).
- Owner gates still blocked: deploy/push/publish, `WaitlistLead` migration, real analytics, email send, Stripe/pricing, published picks, any performance claims.
- Commit package: 7 tracked edits (incl. `apps/web/lib/analytics/events.ts`, `.gitignore`) + new files (`waitlist-copy.ts`, `waitlist-validation.ts`, `waitlist-store.ts`, `waitlist-form.tsx`, `/waitlist` page, `/api/waitlist` route, 19-test suite) — local commit only, gated on the exact phrase "approve local commit only, no push."

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- 397 settled picks on prod `/api/performance` — TRUST-SIGNAL (real-data verification beats claims; GSE engine pulls for verification similarly).
- 10,301-sample backtest: model MAE 5.18 does NOT beat naive 4.9999 — TRUST-SIGNAL (no-claim governance doctrine; honest baseline publishing).
- Consent-gated, dedupe-by-email local lead capture with no external sends — OTHER (privacy hygiene pattern for any GSE data intake).

## Engine-actionable? (yes/no + one-line what)
Yes — encode the "no-claim proof" pattern (scanner + tests asserting zero performance claims) as the pre-publish gate for any public pick/projection copy.
