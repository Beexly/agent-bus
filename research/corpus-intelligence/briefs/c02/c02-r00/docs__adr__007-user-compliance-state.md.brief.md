# docs/adr/007-user-compliance-state.md

## What it is (1-2 sentences)
A 2026-08-13 ADR (status: Proposed, no implementation) from a Hermes continuous run proposing two additive Prisma models — `UserCompliance` and `SelfExclusionEvent` — to give the platform real internal responsible-play gates (age attestation + self-exclusion), while setting zero policy thresholds (all values are "OWNER+COUNSEL VALUE — placeholder").

## Key metrics/methods (formulas where given, else "not specified")
not specified — no formulas. Mechanism rule: the application gate refuses access while `now < selfExclusionExpiresAt`; reversal requires an owner action, self-service reversal is rejected and logged. No minimum age, no state list, no retention period — all placeholders.

## Data sources named
NCPG, GamTalk, Gamblers Anonymous (linked from existing /responsible-play page); `HELPLINE` constant in `lib/brand`; `lib/compliance-scanner/rules.ts`; affiliate-separation and partner-offer-compliance guards; `TERMS_VERSION` attestation constant; existing Prisma `schema.prisma` (LAW 4: off-limits without approved proposal).

## Findings (numbers and facts, not vibes)
- Gap diagnosed: the site points outward to help resources but enforces nothing — no age attestation, no self-exclusion mechanism; a user cannot tell the platform to shut them out. [TRUST-SIGNAL: honesty-about-gaps pattern]
- `UserCompliance` schema: one row per user — userId (plain indexed column, not a Prisma relation to the auth model, keeping the change additive), ageAttestedAt (DateTime?), termsVersionAttested (String?), selfExcludedAt (DateTime?), selfExclusionExpiresAt (DateTime?), createdAt/updatedAt. [OTHER]
- `SelfExclusionEvent` schema: append-only audit log — id (cuid), userId (indexed, no hard relation), requestedAt, expiresAt?, reversedAt (must remain null unless an owner action sets it), reversedBy (owner/admin id, never the user). [OTHER]
- Mechanism-not-policy doctrine: age attestation stores *that the user affirmed*, not their age; identity-document verification explicitly out of scope; self-reversible exclusion rejected as theater ("a self-exclusion undone in a weak moment is theater"); hard deletion rejected (loses audit trail). [TRUST-SIGNAL]
- Blast radius: additive-only (no ALTER/DROP on existing objects); no public surface change beyond signup checkbox + "exclude me" control; rollback = DROP two tables. [OTHER]
- Follow-ups named: P1c-2 integration-point map, P1c-3 disclosure-consistency audit, post-approval build of the session gate. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- "Mechanism with the wrong threshold hardcoded is worse than none, because it *looks* compliant" — directly parallels the engine's honest-calibration-state labeling doctrine: never publish an uncalibrated number wearing calibrated clothing. [TRUST-SIGNAL]
- Append-only audit trail for irreversible-by-user actions: a design pattern for any engine-side override (e.g., manual rank adjustments logged, never silently changed). [OTHER]

## Engine-actionable? (yes/no + one-line what)
No — compliance-schema design for the site product, not the prediction engine; note the mechanism-over-policy doctrine as a QA habit.
