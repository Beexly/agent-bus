# compliance/STATEMENT_OF_APPLICABILITY.md

## What it is (1-2 sentences)
A DRAFT-TEMPLATE ISO 27001 Statement of Applicability (explicitly NOT a completed SoA and not a certification claim) that maps the 11 Annex A control families the compliance control monitor (CCM) currently automates to applicability columns left TBD for a real ISMS owner.

## Key metrics/methods (formulas where given, else "not specified")
Not specified — no formulas, measurements, or thresholds. The 11 control families and their backing control-library entries:
- A.5.1 Policies for information security — TBD — implemented via policy documentation (not yet formalized).
- A.5.15 Access control — TBD — `CTL-ACC-001` (privileged access to production systems).
- A.5.17 Authentication information — TBD — `CTL-ACC-001` (credentials/MFA factors for privileged accounts).
- A.5.19 Information security in supplier relationships — TBD — `CTL-SUP-001` (third-party/subprocessor risk).
- A.5.21 Managing information security in the ICT supply chain — TBD — `CTL-SUP-001` (vendor/supply-chain risk for ICT dependencies).
- A.8.5 Secure authentication — TBD — `CTL-ACC-001` (MFA for privileged accounts).
- A.8.15 Logging — TBD — `CTL-LOG-001`, `CTL-AI-001` (agent decisions and control-relevant events are logged).
- A.8.16 Monitoring activities — TBD — `CTL-MON-001`, `CTL-AI-001` (continuous control monitoring, the CCM itself).
- A.8.24 Use of cryptography — TBD — `CTL-LOG-002`, `CTL-KEY-001` (receipt signing / key management).
- A.8.25 Secure development life cycle — TBD — `CTL-CHG-001` (change management touches SDLC practices).
- A.8.32 Change management — TBD — `CTL-CHG-001` (production deploys require PR + passing checks).
The file is "deliberately a subset of the full Annex A control set" — it reflects only controls this CCM automates, not full coverage. Every "TBD" must be resolved by a named ISMS owner before it counts as a real SoA. Control library lives at `packages/compliance/src/control-library.ts`; full disclaimer in `README.md` (same dir); scope in `ISMS_SCOPE.md`.

## Data sources named
None external. Internal references: `CONTROL_LIBRARY` in `packages/compliance/src/control-library.ts`, `./README.md` (non-claims disclaimer), `ISMS_SCOPE.md` (ISMS scope).

## Findings (numbers and facts, not vibes)
- Status is "draft template, to be completed by a real ISMS owner" — zero of 11 applicability cells are resolved (all read "TBD").
- 11 Annex A families listed out of the full ISO 27001 Annex A set (full set = 93 controls in ISO 27001:2022; INFERENCE: this is a partial claim-safe subset, not a coverage statement).
- Control IDs follow a typed scheme: `CTL-ACC-001`, `CTL-SUP-001`, `CTL-LOG-001`, `CTL-LOG-002`, `CTL-KEY-001`, `CTL-MON-001`, `CTL-CHG-001`, `CTL-AI-001` (AI-specific controls).
- Cryptographic controls back "receipt signing / key management" (`CTL-LOG-002`, `CTL-KEY-001`).
- Change management control asserts "production deploys require PR + passing checks."

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- A.8.15 Logging / A.8.16 Monitoring: agent decisions and control-relevant events logged, CCM as continuous monitoring — TRUST-SIGNAL (audit-receipt pattern; maps to the engine's need for logged, reproducible decisions).
- Receipt signing via `CTL-LOG-002` — OTHER (signed-receipt mechanism pattern, potentially reusable for signed model/evidence cards).

## Engine-actionable? (yes/no + one-line what)
no — compliance governance scaffolding with no engine-relevant data, methods, or metrics; at most, reuse its receipt-signing and decision-logging pattern when the engine needs auditable prediction receipts.
