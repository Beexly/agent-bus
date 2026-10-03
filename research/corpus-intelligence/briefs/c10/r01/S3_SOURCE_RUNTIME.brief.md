# docs/ai/nova/S3_SOURCE_RUNTIME.md
## What it is (1-2 sentences)
Spec for NOVA S3 (frozen `#146` reference branch, branch `nova/s3-source-runtime`, draft state: implemented on draft branch, NOT merged, not production-active): a failed-closed governed polling runtime for official-source discovery with receipts, checkpoints, salvage, and alerting.
## Key metrics/methods (formulas where given, else "not specified")
- Exact outcome vocabulary: `FETCHED` / `NOT_MODIFIED` / `HELD` / `FAILED`.
- Source receipt schema v1: `sourceId`, `url`, `fetchedAt`, `httpStatus`, `contentType`, `contentLength`, `contentHash` (sha256:hex64), `parserVersion`, `redirectChain`, `effectiveTime` vs `recordedTime`, `freshnessHorizonMinutes`; `receiptFreshness()` grades FRESH/STALE/INVALID.
- Alert rule: `SOURCE_CONSECUTIVE_FAILURE_ALERT` after `policy.failureAlertThreshold` consecutive non-promotable outcomes, re-alerted at exact doublings.
## Data sources named
- `data/nova/official-source-registry.json` (schema v2; every source `enabled:false`, `validationState:candidate`); deterministic convergence-inventory via `npm run nova:inventory`.
## Findings (numbers and facts, not vibes)
- **No receipt means HELD or FAILED — never promoted.** Only `FETCHED`/`NOT_MODIFIED` with valid receipts update snapshots or emit change events (exhaustively tested in `scripts/nova/source-runtime.test.mjs`).
- Crash/mid-run recovery = `FAILED_CLOSED`, never silently resumed; checkpoints salvaged exactly once, idempotent replay, double-counting impossible (tested at each crash point).
- 2026-07-21 live source validation produced no receipt → stays `FAILED_CLOSED` forever, never retroactively promoted (historical receipts doctrine).
- Zero Prisma in this unit (S5 owns persistence); all artifacts append-only JSON under git-ignored `reports/nova/source-runtime/`.
- Redirects same-origin only by default, HTTPS only, bounded hops, full chain on receipt; `billableModelCalls: 0` asserted on every run receipt.
## Intelligence connections
- [TRUST-SIGNAL] The "never promote without a valid receipt" + FAILED_CLOSED-on-unknown-history doctrine is the strictest trust posture in the corpus; apply to any engine signal-promotion path.
- [OTHER] The checkpoint/salvage state machine is a reusable pattern for crash-safe data-ingestion runs.
## Engine-actionable? (yes/no + one-line what)
yes — adopt the receipt-gated promotion rule (no receipt → never promote) and FAILED_CLOSED recovery semantics for the engine's source-ingestion pipelines.
