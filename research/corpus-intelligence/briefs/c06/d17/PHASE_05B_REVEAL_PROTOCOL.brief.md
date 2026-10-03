# ops/PHASE_05B_REVEAL_PROTOCOL.md
## What it is (1-2 sentences)
Spec for the OPEN side of the Phase 0.5 Pedersen slate commitment: after a slate fully settles, disclose (value, blindingSum) so anyone can recompute C = [value]·G + [blindingSum]·H (secp256k1) and confirm it matches the pre-kickoff published hex. Merged to main (#235); live but dark behind founder-only gate `SLATE_OPENING_REVEAL_ENABLED`.
## Key metrics/methods (formulas where given, else "not specified")
- Pedersen commitment: `C = [value]·G + [blindingSum]·H` on secp256k1.
- Value band (mint-contract ceiling): value must be < `coveredPickCount × 100 × 1e6` (refuses `v + k·CURVE_ORDER` aliasing since Pedersen binding is only mod n; band is < 2^60 for any real slate, far below n ~2^256).
- Refusal ladder (evaluation order): 1) malformed_input (negative/fractional/non-finite counts, pending > covered); 2) not_settled (any covered pick still PENDING — 99-of-100 settled still refuses); 3) no_opener (null columns — honest history, never throws); 4) malformed_opener (strict parse `/^-?\d+$/`); 4b) malformed_opener value out of band; 5) self_check_failed (commit(value, blindingSum) ≠ stored hex → opening WITHHELD, Merkle root stays authoritative). REVEAL only when settled ∧ opener present ∧ self-check passes.
- Settlement count keyed off `pickProofReceipt.slateKey` (freeze-transaction stamp); denominator is the commitment's own frozen count, never a live re-count. Receipts minted after freeze carry slateKey NULL and are excluded.
- TOCTOU closed: commitment read + pending count run in one `db.$transaction` at RepeatableRead (Postgres default READ COMMITTED takes a fresh snapshot per statement, so a plain batch transaction was insufficient).
- Public-surface language rule (CI-enforced by `no-zk-overclaim.mjs`): only words "commitment" and "opening"; opening proves only binding (aggregate fixed pre-kickoff, unedited), never that picks were good/edge real/slate profitable.
- Enforcement: `scripts/guardrails/pedersen-opener-boundary.mjs` rules A–E (explicit select required; no opener columns under apps/; no opener selection outside one allowlisted reader; no wholesale `slate` relation traversal; aggregate/groupBy scan — `_max: { pedersenBlindingSum: true }` was an adversarially found extraction channel).
## Data sources named
- `pickProofReceipt.slateKey` (settlement denominator), slate commitment rows (`slateCommitment`).
- Integration test runs against real Postgres 16 (`SLATE_OPENING_PG_URL`-gated): `slate-opening-reader.integration.test.ts`; schema facts enforced: one pick per (game, pickType), slateKey is a real FK.
- Companion: docs/ops/ZK_PROOF_EVOLUTION_ROADMAP.md.
## Findings (numbers and facts, not vibes)
- Test inventory: 31 tests (`slate-opening.test.ts`) + 16 tests (route) + 6 tests (boundary) + 6 properties in the Postgres integration test.
- Both former "known limits" are CLOSED: query path proven on real Postgres 16; TOCTOU closed via RepeatableRead.
- Two adversarial-review finds fixed: (a) out-of-band value check — `v + n` (a 78-digit value) REVEALed before the bound, refused after; (b) rule D — rule A/B/C alone missed `_max: { pedersenBlindingSum: true }` extraction.
- Gate semantics: `SLATE_OPENING_REVEAL_ENABLED === "true"` exact string; `"1"`, `"TRUE"`, `"yes"` stay closed (tested). Refusals are HTTP 200 with opened:false + prose, never carrying opener material (tested). Outages return 503, not a REFUSE ("we looked and the answer is no" vs outage — same distinction as /api/verify/slate).
- Pre-gate-flip checklist reduced to the founder decision alone; technical preconditions proven in CI-runnable form.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the honest-withhold doctrine — an opening that fails self-check is withheld rather than published (publishing a self-check-failing opener "would read exactly like a product that forged its own commitment"); Merkle root stays authoritative in every refusal copy. This is a public-trust engineering pattern applicable to any published pick/projection record.
- TRUST-SIGNAL: the all-or-nothing settlement rule (99-of-100 settled still refuses) — the aggregate is one number over the whole population; partial openings are structurally refused, not approximated.
- TRUST-SIGNAL: outage-is-not-a-verdict (503 vs REFUSE) and the no-coercion rule on malformed input — model the same distinction in any engine verification layer.
- OTHER: freeze-then-settle ordering (FK constraint: receipt cannot be stamped before its commitment row exists) — pre-registration pattern usable for pick-record integrity.
## Engine-actionable? (yes/no + one-line what)
No — cryptographic evidence-layer spec for public pick-record verification, not a prediction component; the withhold-on-failure doctrine is worth adopting in any engine public-record design.
