# ai/phase0/OWNER_DECISION_PACKET_2026-07-21.md
## What it is (1-2 sentences)
Owner decision packet closing Phase 0 (repository truth/convergence/evidence audit, 2026-07-21): lists what needs Garrett's decision before Phase 1 begins. Nothing merged, deployed, or activated; 5 owner decisions requested.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — decision inventory, no math.
## Data sources named
PR #145 (closed, split into #147–#151, all open drafts), PR #146 (NOVA); branch `docs/phase0-truth-convergence-2026-07-21` based on main @ c19a00d.
## Findings (numbers and facts, not vibes)
1. `stripe.ts` in #147 is REJECT_UNSAFE: idempotency-key design can replay an old checkout session or collapse two distinct purchase attempts — needs durable checkout-attempt ID redesign.
2. `settle-sport.ts` in #147 is REJECT_UNSAFE: infers POSTPONED from a single "completed=true but scores missing" observation with no corroboration and non-atomic writes — false POSTPONED voids pending picks incorrectly; real-money settlement logic.
3. `ledgers.ts`, `moderation-actions.ts` need actor-identity redesign (admin vs background-service vs owner-only not distinguished); `moderation-actions.ts` had ZERO auth before this session's fix.
4. 35 integration-research docs (Waves 1–8, #149) should move to archive, not product main.
5. `credit-pool.ts` dollar figures are unverified (inferred from model-ID string shape, never reconciled to billing) — treat as hints, not facts.
- NOVA live-source validation has no successful receipt (preserved FAILED_CLOSED; session env had DNS failures).
- Next smallest coherent unit: `fix/ci-postgres-health` (one file, isolated, already verified).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (engineering governance only): settlement-logic correctness standard relevant to pick settlement reliability, but no sports intelligence content.
## Engine-actionable? (yes/no + one-line what)
No — internal PR/merge governance; the settlement-corroboration lesson (never infer game state from a single observation) is a standing data-quality rule, not new intelligence.
