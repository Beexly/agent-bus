# docs/compliance/README.md
## What it is (1-2 sentences)
Internal SOC 2 Trust Services Criteria + ISO 27001 Annex A control library with a Compliance Control Monitor (runCcm) that collects evidence continuously, opens tracked exceptions per failing check, and exports an internal evidence pack — with an explicit non-claims doctrine: it never issues or implies a SOC 2 report or ISO 27001 certificate.
## Key metrics/methods (formulas where given, else "not specified")
not specified — no formulas; CCM checks cover receipt logging/signatures, policy-version presence, production change management, MFA coverage; exits 0 if fully passing, 1 otherwise. Does not fabricate passing results for unwired data (TODO-stubbed sources return empty).
## Data sources named
Postgres (ComplianceEvidence/ComplianceCheckRun/ComplianceException tables); sibling feat/governed-receipts branch's SignedGovernedReceipt/verifyReceiptEd25519 (not yet merged — locally-defined ReceiptRow/VerifyFn mirror until merge); admin status view /admin/compliance.
## Findings (numbers and facts, not vibes)
- Explicit disclaimers on all outputs: "Internal alignment pack only. Not a SOC 2 report or ISO 27001 certificate." Never claims conformity with EU AI Act or any regulatory assessment; not a substitute for legal counsel/auditor.
- packages/compliance has no dependency on SRQC/admitUnderSRQC — monitors evidence after the fact, never gates admission decisions.
- Receipt checks (CTL-LOG-001/002) currently run on stubbed/empty data pending the governed-receipts merge — documented honestly, no faked passes.
- Includes: CONTROL_LIBRARY.md, ISMS_SCOPE.md, RISK_REGISTER.md, STATEMENT_OF_APPLICABILITY.md, SOC2_TYPE_II_PATH.md (Type I vs II readiness checklist).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Anti-tout non-claims doctrine (never imply an audit that didn't happen) → TRUST-SIGNAL
- Post-fact evidence monitoring architecture → OTHER (infra/compliance)
## Engine-actionable? (yes/no + one-line what)
no — Compliance infra; the one engine-relevant note is the receipts TODO (real signed-receipt wiring pending merge) which is a pick-audit-trail concern, not a model input.
