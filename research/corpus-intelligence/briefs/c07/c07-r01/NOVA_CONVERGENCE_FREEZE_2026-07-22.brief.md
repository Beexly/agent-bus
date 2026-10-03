# ai/phase0/NOVA_CONVERGENCE_FREEZE_2026-07-22.md
## What it is (1-2 sentences)
Binding 2026-07-22 convergence record (frozen by owner directive) partitioning six conceptual domains between the NOVA opportunity-engine branch (#146, head `fbc3cfe`) and the AI control-plane stack (#162→#164) plus shared infra (#159 actor, #161 outbox): one canonical owner per domain, read-model-only cross-consumption, no second copies of schemas, cockpit, or owner queue.
## Key metrics/methods (formulas where given, else "not specified")
- Canonical ownership table: credit-program lifecycle→NOVA; AI invocation policy/routing/budgets/attribution→control plane; settlement observations→Settlement domain; actor identity (`TrustedActor` HUMAN|SERVICE|SYSTEM)→shared infra; transactional outbox→shared infra; opportunity lifecycle/Founder OS→NOVA.
- Credit truth flows NOVA→control plane via immutable `CreditGrantSnapshot` `{program, providerScope, state, remainingUsd, expiresAt, observedAt, sourceReceipt}`; `CONFIRMED_CREDITS_ONLY` admits a provider only on a fresh, covering, sufficient snapshot — else fail closed.
- `MoneyState` 13-value union (`not_applicable|hypothetical|discovered|eligibility_unverified|eligible|applied|approved|activated|earned|invoiced|paid|expired|rejected`) with forward-only transition machine; `CreditGrantState` refinement (`APPROVED|ACTIVATED|PARTIALLY_CONSUMED|EXHAUSTED|EXPIRED|REVOKED`) added as per-grant sub-state of activated.
- #146 split into six ordered units S1–S6 (contracts → governor → sources/evidence → Founder OS → persistence → workers); later units may not begin before preconditions merge.
## Data sources named
None external; verified read-only against branch head `fbc3cfe` (merge-base `bf931ab`): 70-file diff, ZERO Prisma models added by #146, zero name collisions on `AiInvocation|AiAttempt|AiFinancialAttribution|AiBudget*|CreditGrantSnapshot|CreditProgram`.
## Findings (numbers and facts, not vibes)
- NOVA persistence is entirely unwired: all state in TypeScript contracts + `data/nova/*.json` + `.nova-runtime/` scratch; S5 (credit/owner-queue tables) is greenfield with no DB collision surface.
- S3 acceptance gate: a source validation run without a reproducible immutable receipt records FAILED_CLOSED; historical failed receipts stay labeled failed — never promoted.
- Collision policy: control-plane names win for telemetry/budget concepts; NOVA names win for credit concepts (`MoneyState`, `CreditGrantState` refinement).
- Append-only hardening addendum: `NOVA_CONVERGENCE_FREEZE_HARDENING_ADDENDUM_2026-07-22.md`.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: fail-closed evidence receipts + "no receipt, no admission" discipline directly mirrors the engine's trust-tiered finals doctrine (DISPUTED holds, never settles blindly).
- OTHER: platform/economics governance architecture; the revenue-lane opportunity scoring (S1 `OpportunityScore`, `MonetizationLaneDefinition`) is product-side, not predictive modeling.
## Engine-actionable? (yes/no + one-line what)
No — governance freeze for infra domains; only the failed-closed evidence-receipt pattern is worth mirroring in engine data pipelines.
