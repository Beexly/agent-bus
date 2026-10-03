# formal/OPEN_GOVERNED_RECEIPT.md
## What it is (1-2 sentences)
A conformance profile (v0.1) pinning the wire shape and verification contract of `packages/governed`'s signed receipts for gated tool calls — required fields, canonical payload rules, SHADOW-vs-ENFORCE semantics, and six conformance tests. Implements #188 on `main` (`61ac843f`); it documents existing code and introduces nothing new.
## Key metrics/methods (formulas where given, else "not specified")
Deterministic JSON encoding rules (sorted `reasons`, `parentInvocationId` normalized to null, budget sub-fields null-normalized, `receiptUrl`/`controlEventId` excluded from signed bytes); ed25519 signature (base64url, no padding); SHADOW downgrades REFUSE→ADMIT with literal `"SHADOW_WOULD_REFUSE"` appended to reasons; ENFORCE is opt-in per call via `ctx.mode: "ENFORCE"` only.
## Data sources named
`packages/governed/src/receipt-types.ts`, `receipt-canonical.ts`, `governed.ts`, `keyring.ts`; conformance tests in `packages/governed/tests/open-governed-receipt.conformance.test.ts` (all six pass).
## Findings (numbers and facts, not vibes)
- SHADOW is the required safe default; no conformant implementation may default to ENFORCE.
- Conformance Test 6 establishes the trust-vs-validity distinction: a signature can verify at the raw ed25519 level while failing keyring verification after revocation.
- Explicit NON-CLAIMS: not a certification or regulatory-compliance claim; not a claim that cryptographic validity implies trust; not a standards-body spec; SHADOW mode blocks nothing by design.
- Receipts are transport-agnostic (this repo uses `GET /api/receipts/[id]` and `GET /.well-known/receipt-keys.json`) and storage-agnostic via `KeyringStore`/`persistReceipt`.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Keyring-aware verification (`verifyReceiptAgainstKeyring`) vs raw signature check — trust must carry revocation state (TRUST-SIGNAL)
## Engine-actionable? (yes/no + one-line what)
No — governance infra already built and documented; no sports content to wire.
