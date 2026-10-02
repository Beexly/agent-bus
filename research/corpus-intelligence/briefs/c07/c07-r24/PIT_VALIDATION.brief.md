# ops/PIT_VALIDATION.md
## What it is (1-2 sentences)
The point-in-time (PIT) validation law for the feature store: hard temporal rules ensuring no feature data leaks future information into backtests or decisions, enforced in `@sports/feature-store` and `@sports/stats-api` via `pit-validate.ts`.
## Key metrics/methods (formulas where given, else "not specified")
Rules: (1) `asOf` must be ISO-8601 with time — date-only refused; (2) query `asOf` must not exceed wall-clock + 120s skew (`asof_future` → HTTP 422); (3) stored rows only readable when `record.asOf <= query.asOf` (equality allowed); (4) writes require `pitCorrect: true`; `rights_hold` cannot be public; (5) normalized store writes use `toISOString()` form. API codes: asof_missing, asof_invalid, asof_future, future_leak, pit_flag_false. Functions: `parseAsOfMs`, `validateQueryAsOf`, `validateFeatureWrite`, `validatePitQuery`, `selectLatestAsOf`, `detectFutureLeak`, `assertNoLeak`.
## Data sources named
`@sports/feature-store` (`pit-validate.ts`), `@sports/stats-api` (`pit-validate.ts`).
## Findings (numbers and facts, not vibes)
- 120-second max future skew on query `asOf`; violations return HTTP 422 with code `asof_future`.
- Date-only `asOf` is explicitly refused (ambiguous for decisions); empty/unparseable rejected with distinct codes.
- No-leak invariant: a record with `asOf` after the query `asOf` triggers `future_leak`; writes without `pitCorrect: true` rejected (`pit_flag_false`).
- Rights gating: `rights_hold` rows cannot be made public, tying data rights to the PIT layer.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] PIT no-leak invariant is the integrity foundation for backtests: lookahead-free evaluation means published accuracy claims survive scrutiny.
- [OTHER] Data-integrity plumbing; no QB/coaching/OL/scheme content.
## Engine-actionable? (yes — engine features must be PIT-gated with explicit `asOf` timestamps (ISO with time) and `pitCorrect` writes; backtests must assert no future-leak before claims are made)
