# ops/PIT_VALIDATION.md
## What it is (1-2 sentences)
The point-in-time (PIT) validation law for the feature store and stats API: a set of strict rules preventing look-ahead bias (future leaks) in feature reads/writes, implemented in `@sports/feature-store` (`pit-validate.ts`) and `@sports/stats-api` (`pit-validate.ts`).

## Key metrics/methods (formulas where given, else "not specified")
- Not specified: no formulas or metrics; the file is a correctness-law document.
- Rules (verbatim): 1) `asOf` must be ISO-8601 **with time** (date-only refused — ambiguous for decisions). 2) Query `asOf` must not be beyond wall-clock + **120s skew** (`asof_future` → HTTP 422). 3) Stored rows only readable when `record.asOf <= query.asOf` (equality allowed). 4) Writes require `pitCorrect: true`; `rights_hold` cannot be public. 5) Normalized store writes use `toISOString()` form.
- API codes: `asof_missing` (empty), `asof_invalid` (unparseable / date-only), `asof_future` (beyond skew), `future_leak` (record after query), `pit_flag_false` (write without pitCorrect).
- Functions: `parseAsOfMs`, `validateQueryAsOf`, `validateFeatureWrite`, `validatePitQuery`, `selectLatestAsOf`, `detectFutureLeak`, `assertNoLeak`.

## Data sources named
- None named; the law applies to all feature-store/stats-API rows regardless of source.

## Findings (numbers and facts, not vibes)
- Query timestamps may not exceed wall-clock + 120 seconds (clock skew allowance); violations return HTTP 422 with code `asof_future`.
- Date-only `asOf` strings are refused outright — only ISO-8601 with time is valid.
- A stored row is readable for a query only if `record.asOf <= query.asOf` (equality allowed) — this is the core anti-look-ahead rule.
- Writes to the normalized store are timestamped in `toISOString()` form.
- Writes require the `pitCorrect: true` flag; a write without it is rejected (`pit_flag_false`).
- Records under `rights_hold` cannot be public.
- Two packages implement the law: `@sports/feature-store` (`pit-validate.ts`) and `@sports/stats-api` (`pit-validate.ts`).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Serves the **calibration/sizing** program: `record.asOf <= query.asOf` is the backtest-integrity rule — any historical backtest that replays features must honor this inequality or its results are contaminated by look-ahead; engine backtests should assert `detectFutureLeak`/`assertNoLeak` equivalents.
- [TRUST-SIGNAL] Serves the **trust-target intake** program: the `rights_hold` rule means some rows are intentionally non-public; intake of feature data from other teams/agents should check for rights-hold status before publishing derived signals.
- [QB-BEHAVIOR] / [COACHING] / [OL] / [SCHEME] — INFERENCE: the 120s skew tolerance and ISO-with-time requirement matter for any time-sensitive behavioral features (e.g., injury reports, line movement, depth-chart changes): features timestamped coarsely (date-only) are rejected, so intelligence inputs to those programs must carry full timestamps or they fail validation.

## Engine-actionable? (yes/no + one-line what)
Yes — adopt the `record.asOf <= query.asOf` anti-look-ahead rule and the 120s skew cap as mandatory checks in any engine backtest or feature-replay pipeline.

**References named:** `@sports/feature-store` (`pit-validate.ts`), `@sports/stats-api` (`pit-validate.ts`); functions `parseAsOfMs`, `validateQueryAsOf`, `validateFeatureWrite`, `validatePitQuery`, `selectLatestAsOf`, `detectFutureLeak`, `assertNoLeak`.
