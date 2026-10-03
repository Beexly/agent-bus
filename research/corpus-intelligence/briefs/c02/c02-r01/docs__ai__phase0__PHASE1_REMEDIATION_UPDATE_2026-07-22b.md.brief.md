# docs/ai/phase0/PHASE1_REMEDIATION_UPDATE_2026-07-22b.md
## What it is (1-2 sentences)
An append-only execution update recording the four remediation PRs (#158–#161, all draft, CI-green in isolation) that replaced/superseded the failed Phase 1 PRs (#155, #156, #157, #144) in the GSE AI control-plane program, plus the resulting disposition changes. Nothing merged — `main` remains `c19a00d`.
## Key metrics/methods (formulas where given, else "not specified")
- #160 (payments/checkout): race convergence proven against a fake DB raising real Prisma `P2002`; compound unique + session index disposable-PG psql-proven; 24h checkout-attempt expiry; fingerprint 409 conflicts.
- #161 (settlement): corroboration by `COUNT(DISTINCT runId)`; exactly-once promotion + receipt via unique FK; never auto-voids / never infers POSTPONED.
- Constraint-proven vs mock-proven accounting: #161's four unique constraints, dup-observation no-op, exactly-once decision, single-open-anomaly are **constraint-proven on real Postgres**; transaction atomicity/rollback, race interleavings, channel sending are mock-proven.
## Data sources named
- None (no external data sources; sources cited are repo artifacts: `PHASE1_EXECUTION_ADDENDUM_2026-07-22.md`, `LIVE_PR_REGISTRY_2026-07-22.md`, `AI_CONTROL_PLANE_DESIGN_2026-07-22.md`, Stripe webhooks, disposable-PG test instances).
## Findings (numbers and facts, not vibes)
- 4 remediation PRs opened, all draft, off `main`: #158 (revised, head `39bd416`, AST-based AI transport import boundary with exact adapter-file allowlist), #159 (head `ef80280`, `TrustedActor = HUMAN|SERVICE|SYSTEM`), #160 (head `6bf296f`, durable `CheckoutAttempt`), #161 (head `settlement/evidence-outcome`, converged #157+#144). [OTHER]
- Dispositions: #155 → CLOSED (superseded by #159, closure comment maps all 6 gaps); #156 → CLOSED (superseded by #160, maps all 5 gaps); #157 and #144 → SUPERSEDED by #161 (pending #161 full CI green). [OTHER]
- #161 local test evidence: full test job verified locally (8413 apps/web + 143 pipeline). [OTHER]
- Unchanged truths: `main` = `c19a00d`; nothing merged, deployed, migrated to production, billed, applied, or sent; NOVA source validation remains `FAILED_CLOSED`; next owner-gated step is the sequential merge train beginning #153 → #154. [OTHER]
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Exact-once semantics via unique constraints (settlement/promotion outbox) — a trust/integrity pattern for any graded-pick or payout ledger. [TRUST-SIGNAL]
- Append-only `SettlementObservation`/`Anomaly`/`Decision` + outbox; scores-arrived resolves, never deletes — audit-trail design relevant to grading/pick history integrity. [TRUST-SIGNAL]
- "Constraint-proven vs mock-proven" honesty accounting — the corpus's standing standard that measurement claims must cite which proof tier they reached. [TRUST-SIGNAL]
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the append-only outbox + unique-constraint exactly-once pattern and constraint-proven-vs-mock-proven proof accounting for the pick grading/settlement pipeline.
