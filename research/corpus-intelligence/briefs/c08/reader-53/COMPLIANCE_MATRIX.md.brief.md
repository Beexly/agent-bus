# docs/governance/COMPLIANCE_MATRIX.md
## What it is (1-2 sentences)
An internal engineering mapping of concrete runtime AI-governance controls in the Sports repo (agent/tool inventory, SRQC admit/refuse gating, signed Ed25519 receipts, append-only event ledger, shadow metrics, key rotation, default-safe posture) to generic NIST AI RMF / ISO 42001 / EU AI Act themes — explicitly NOT a legal opinion, audit finding, or claim of certification.
## Key metrics/methods (formulas where given, else "not specified")
not specified. 8 runtime controls mapped; posture: SHADOW default unless `SRQC_ENFORCE=1` explicitly set. Non-claims: no assertion of NIST AI RMF conformance, ISO/IEC 42001 certification, EU AI Act compliance, independent audit, or risk-tier classification.
## Data sources named
None (internal repo code: `packages/governed/src/governed.ts`, `apps/web/lib/ai-control-plane/formal-incident.ts`, `srqc-projection.ts`, `governed-gate.ts`, `receipt-sign-ed25519.ts`, `event-ledger.ts`, `rotate-keys.ts`, `keyring.ts`).
## Findings (numbers and facts, not vibes)
- Every gated tool call routes through `createGoverned()` with explicit `tool` name and `agentId` (agent/tool inventory).
- Admit/refuse decisions computed pre-execution (`admitUnderSRQC`), inspectable not opaque; shadow mode records `SHADOW_WOULD_REFUSE` even when nothing is blocked.
- Signed, publicly verifiable receipt per gated call (Ed25519; `GET /api/receipts/[id]`; `GET /.well-known/receipt-keys.json`), backed by an append-only control-event ledger.
- Key rotation/retirement/revocation exists for receipt signatures.
- Disclaimer is emphatic: no conformance claims anywhere in code, comments, or docs; the table is a snapshot that goes stale.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Pre-execution admit/refuse gating + shadow metrics (`SHADOW_WOULD_REFUSE`) as a process-over-outcome control plane — TRUST-SIGNAL
- Signed receipts + append-only ledger as verifiable public proof-of-record — TRUST-SIGNAL
- "Default-safe SHADOW unless explicitly enforced" posture discipline — OTHER
## Engine-actionable? (yes/no + one-line what)
yes — port the admit/refuse + shadow-metrics pattern into engine decisioning: log `WOULD_REFUSE`/would-suppress states on every engine action so calibration reviews see what was nearly suppressed, not just what published.
