# research/gse/finish-line-no-claim-scan.md
## What it is (1-2 sentences)
As-of 2026-06-29 compliance scan (grep sweep + in-suite CI scanner) of the GSE waitlist branch, certifying no performance claims, no Stripe/pricing, no sportsbook path, no schema migration, and no production wiring; superseded on deploy status only (branch merged as PR #57 on 2026-06-30, prod DB live with 397 settled picks).
## Key metrics/methods (formulas where given, else "not specified")
Method: grep sweep over user-facing + lib surfaces plus in-suite CI scanner (`runNoClaimGuard` + `hasNoPerformanceClaim`) run over copy, 50 content posts, rendered page, email drafts, research briefs. Banned-term list: win-rate, ROI, accuracy, edge, profit, guaranteed, picks, sportsbook, betting advice, Stripe, pricing, checkout, affiliate, performance claim. Schema gate check: `grep -c WaitlistLead packages/db/prisma/schema.prisma` = 0.
## Data sources named
None named as data sources (file store `.gse-local/` for waitlist leads; no DB).
## Findings (numbers and facts, not vibes)
- Verdict: CLEAN on all 8 properties (no positive performance claim, no Stripe/pricing, no sportsbook/affiliate, no email send, no schema migration, no live DB wiring, no production deploy, backtest-false preserved).
- Every banned-term occurrence appears only in a disavowing/policy context (e.g., `no-claim-rules.md` ban lists; scanner's own block patterns).
- Backtest truth preserved: `BACKTEST_TRUTH.beatsNaive === false`; page surfaces "10,301 samples" and "does not beat naive"; code<->doc drift guard test asserts it.
- Waitlist CI suite 49/49 GREEN at the time (includes the no-claim scanner).
- UPDATE note: by 2026-06-30 the branch was merged to `main` (commit `6084550c`) and prod DB went live; `/api/performance` returns real data with 397 settled picks; the no-claim verdict still holds.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Backtest truth "beats naive = false" over 10,301 samples surfaced honestly on the page — TRUST-SIGNAL (public honesty about model limitations)
- No-claim CI gating every run on copy/posts/emails/briefs — TRUST-SIGNAL (compliance discipline)
- 397 settled picks live in prod via `/api/performance` — OTHER (operational state)
## Engine-actionable? (yes/no + one-line what)
No — historical compliance audit of a 2026-06 waitlist branch; operational context only, no modeling signal.
