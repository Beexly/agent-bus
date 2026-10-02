# ai/phase0/PHASE1_EXECUTION_ADDENDUM_2026-07-22.md
## What it is (1-2 sentences)
An append-only 2026-07-22 addendum correcting Phase-0 "shipped/complete" vocabulary to draft-branch statuses, recording the Phase-1 PR split (#147 → #152–#158) and second-pass remediation gates — notably a competing-settlement-design conflict (#144 vs #157) and race-prone settlement quarantine logic.

## Key metrics/methods (formulas where given, else "not specified")
- Vocabulary correction: "shipped" → one of `IMPLEMENTED_ON_DRAFT_BRANCH` / `CI_GREEN_IN_ISOLATION` / `NOT_MERGED` (`main` still at `c19a00d`) / `NOT_STACK_VALIDATED`.
- Settlement-quarantine race findings (#157): the increment is atomic but threshold detection is not — concurrent runs can double-flag or miss thresholds; no run ID/source-observation identity means retries count as fresh corroboration.
- Required settlement design (remediation): append-only `SettlementObservation`, `SettlementAnomaly`, `SettlementDecision`, `PickSettlementEvent`/outbox; unique dedup key; anomaly promoted exactly once in a transaction; late scores **resolve** anomalies (never delete evidence); tests: 100 concurrent observations, duplicate run ID, retry-same-payload, threshold-once, late-scores-resolve-not-delete, worker/cron race, terminal-game late regression.
- #144 + #157 convergence rule: the settlement transaction updates the pick result, appends settlement evidence, and appends a `PickSettlementEvent`/outbox row atomically; a separate notification worker claims the row and sends idempotently — never do irreversible notification work inside the settlement loop.

## Data sources named
None sports-related. Settlement domain: sports observations, anomalies, grading, settlement decisions (canonical ownership map §5).

## Findings (numbers and facts, not vibes)
- #155 actor identity `REQUEST_CHANGES`: `fileReport()`, `appealAction()`, `takeAction()`, `decideAppeal()` all trust caller-supplied identity (impersonation/double-appeal/reviewer-spoofing); required `TrustedActor = HUMAN | SERVICE | SYSTEM` with server-derived non-empty subjectId.
- #156 checkout idempotency `REQUEST_CHANGES`: token in React `useRef` lost on reload; required additive `CheckoutAttempt` model (id, clientIntentId, userId, customerId, tier, interval, priceId, currency, requestFingerprint, status CREATED|SESSION_CREATED|COMPLETED|FAILED|EXPIRED, stripeSessionId, refs, timestamps, lastErrorKind, audit); same intent+different fingerprint → `409`.
- Dispositions: #148/#151 `SUPERSEDE_AFTER_REPLACEMENT_LINKED` (#151 repeats the provider-vs-payer error — labels a failed direct call's provider "used" and "cash billed" from routing, not reconciliation); #149 `ARCHIVE_AND_CLOSE`; #150 `PARK_LOW_PRIORITY`; #146 `FREEZE_AND_SPLIT` into 6 units.
- Authority boundary honored: no merge, deploy, production migration, billing activation, or secret change — all Phase-1 work reversible draft-branch operations.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the append-only anomaly-evidence design (observations → anomalies → decisions, resolve-never-delete) is the correct pattern for GSE trust signals and anomaly flags — sports anomalies (line moves, injury reports) should be evidence-appended, never overwritten.
- OTHER: the "resolve, never delete" + transactional-outbox rules apply to any engine grading/pick-settlement pipeline GSE runs.

## Engine-actionable? (yes/no + one-line what)
yes — if GSE grades engine picks, copy the append-only settlement-evidence design (observations/anomalies/decisions, resolve-never-delete, transactional outbox for notifications).
