# docs/payments/checkout-attempt.md
## What it is (1-2 sentences)
A durable checkout-idempotency contract for Stripe Checkout: a server-side `CheckoutAttempt` state machine guaranteeing one DB row per (user, intent) across reloads, double-clicks, retries, and ambiguous network outcomes. Status: implemented on draft branch `payments/durable-checkout-attempt` (PR #160), NOT merged.
## Key metrics/methods (formulas where given, else "not specified")
- not specified (state machine, not formulas). Key mechanics: compound unique `(userId, activeClientIntentId)` arbitrates create-or-retrieve race; CHECK constraints enforce invariants (immutable `originalClientIntentId`, terminal states release the active key, COMPLETED requires `completedAt`).
- Request fingerprint: canonical-JSON hash of full commercial request (user, tier, interval, price id, currency, quantity, trial terms, promotion policy, tax behavior, commercial-terms version, consent requirement, origin class, metadata version); same intent + changed fingerprint → 409 `checkout_intent_conflict`.
- Reconciliation guards: `CHECKOUT_RECONCILE_MIN_AGE_MS` quiet-period before "no session listed" counts as proof; `CHECKOUT_SESSION_MAX_LIFETIME_MS` bounds the second time-only release path.
- Test evidence includes a "100-concurrent-one-attempt" race proof on real Postgres, CHECK-constraint enforcement, and SET NULL retention.
## Data sources named
- Stripe Checkout sessions / webhooks (`checkout.session.completed`, `checkout.session.expired`); Postgres via Prisma (`checkout_attempts` table, migration `20260722130000_add_checkout_attempt`); daily cron `/api/cron/repair-checkout-attempts` (CRON_SECRET-authenticated, declared in `vercel.json`).
## Findings (numbers and facts, not vibes)
- States: CREATED → REQUEST_IN_FLIGHT → SESSION_CREATED → COMPLETED; AMBIGUOUS and FAILED(proven absent); EXPIRED (key released); CANCELED terminal.
- Hard preconditions: `requireDurableWriteStore("stripe-checkout")` runs BEFORE any Stripe customer/session creation; stub Prisma or unknown durability → typed 503 with zero Stripe side effects. Subscription lookup fails CLOSED: error → 503, live subscription → 409/portal.
- Outcome classification (`stripe-outcome.ts`): DEFINITIVE_REJECTION | AMBIGUOUS_NETWORK_OUTCOME | RETRIABLE_NO_REQUEST_SENT | CONFIGURATION_FAILURE. Elapsed time alone is NEVER proof for in-flight attempts; reconciliation is proof-based, inline (`reconcileOneCheckoutAttempt`) + daily repair job.
- Unresolved attempts past reconciliation are surfaced as per-attempt CockpitTask review items (source `checkout-attempt-repair`, status `NEEDS_REVIEW`, risk HIGH).
- Retention: user delete never deletes the financial audit record (`userId` FK nullable, ON DELETE SET NULL; `subjectUserId`/`subjectEmail` immutable snapshots).
- Migration rehearsal: baseline pre-PR schema via `prisma db push`, apply migration, re-apply for idempotent no-op proof, `prisma migrate diff` empty both directions. Fresh `migrate deploy` from empty DB does NOT succeed on this repo (pre-existing condition: first historical migration assumes `db push`-created base tables).
- Positioning constraint in this doc: "We post when the model finds edge" is the billing-adjacent tier copy; not engine data.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — billing/payments infrastructure idempotency contract; no QB, coaching, OL, trust-signal, or scheme content. Indirectly relevant to monetization reliability of tier narrative (Free/Pro/Elite).
## Engine-actionable? (yes/no + one-line what)
No — pure subscription-billing infra; the only sports-adjacent note is the tier narrative alignment, already documented elsewhere.
