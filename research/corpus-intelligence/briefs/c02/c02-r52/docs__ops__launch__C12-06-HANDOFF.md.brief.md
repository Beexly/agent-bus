# docs/ops/launch/C12-06-HANDOFF.md
## What it is (1-2 sentences)
The "2am handoff" for the C12 launch-closeout cycle (branch `hermes/c12-close-the-pass`): everything fixed, verified (typecheck 0, lint 0, lint:brand 0, 151 tests green), and pushed; it documents what is safe to ship free-only today, the ordered go-live checklist, preconditions for opening paid, and known unknowns. It is an ops launch-state document, not a sports-intelligence document.

## Key metrics/methods (formulas where given, else "not specified")
- Verification state: typecheck 0, lint 0, lint:brand 0, 151 tests green, all fixes committed and pushed to origin.
- Price-readiness check: `node scripts/check-deploy-readiness.mjs` now FAILS on any amount/interval/currency mismatch across all six price vars; `node scripts/check-deploy-readiness.mjs` exits 0 required.
- Flag-flip order (out-of-order = permanent calibration loss): OUTCOME_LEARNING → backfill → CANONICAL_HISTORY, run on the console with the backfill between them.
- Cron coverage: 26/26 cron routes verified auth-first this cycle (C12-01 §2.1 pattern: auth as first statement).
- Stripe LIVE keys in environment since 2026-07-09; unexercised even in TEST mode this cycle.
- Paid precondition matrix: counsel signs terms + privacy (founder); ESPN commercial-display rights decision (founder); Stripe TEST full cycle; one graded pick → email (and push once VAPID set) E2E; prices match advertised phase; Neon backup/PITR retention window + one restore test; ratify two ACCEPTED rows.

## Data sources named
- Stripe dashboard (customers, checkout); Neon console (backups/PITR); ESPN public feed (commercial-display rights question); Vercel dashboard + Production env (`PAID_CHECKOUT_OPEN` switch); cron secret; readiness script output.

## Findings (numbers and facts, not vibes)
- 5 blockers fixed (S1, S2, S3, S10-disclosure, #16-precision); two carry ACCEPTED (founder-to-ratify) residuals: S10's underlying feed use and #16's paid-ordering [OTHER].
- PART 2 seven items: 7/7 closed in C12-01; zero items left as bare RECOMMENDED [OTHER].
- New paid checkouts are closed server-side by one switch (`PAID_CHECKOUT_OPEN=false` in Vercel Production); free surface (board, stats, records) intact [TRUST-SIGNAL].
- Two things genuinely unknown: whether Neon backups/PITR exist, and whether ESPN's public feed may legally be displayed commercially [TRUST-SIGNAL, OTHER].
- Weakest claim in the handoff (self-identified): "no marketing email system exists" rests on a negative grep across `apps/web/lib` plus two worker packages — unconfirmed across every package [TRUST-SIGNAL].
- Most likely first-72h failures: (1) accidental paid re-open (one console click); (2) a new cron route without auth; (3) backfill run out of order (calibration floor counts stay 0 despite settled picks) [OTHER].
- C11's D-0..D-15 definitions are lost; recovery path is re-running C11 with `--max-tokens 16000` or the founder's saved transcript [OTHER].

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the free-only default (`PAID_CHECKOUT_OPEN=false`, checkout 503s `paid_checkout_closed`) and the strict flag-flip ordering (OUTCOME_LEARNING → backfill → CANONICAL_HISTORY) protect calibration integrity at launch.
- TRUST-SIGNAL: ESPN commercial-display rights are undecided — legal exposure on a displayed feed source.
- OTHER: all other findings are launch-ops state (Stripe, Neon PITR, cron auth, readiness script), not engine intelligence.

## Engine-actionable? (yes/no + one-line what)
No — it is a launch-readiness state record with no sports intelligence; the only engine-adjacent note is the calibration-safe flag-flip ordering.
