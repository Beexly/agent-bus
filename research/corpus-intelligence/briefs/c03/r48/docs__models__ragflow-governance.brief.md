# docs/models/ragflow-governance.md

## What it is (1-2 sentences)
Governance spec for the RAG flow: 7 rules controlling what evidence the retrieval layer may use (the Vault, tier-scoped and TTL-valid), the mandatory INSUFFICIENT_EVIDENCE fallback when evidence is missing, the audit-logging requirements (SHA-256 query hashes, 90-day retention), and the claim-governance scanner applied to 100% of RAG outputs.

## Key metrics/methods (formulas where given, else "not specified")
- Retrieval latency budget: 5 seconds (hard cap).
- Audit log retention: 90 days; query hashes stored as SHA-256, never plaintext.
- Evidence eligibility: Vault documents in ACTIVE state, tiers T1–T3, TTL-valid; no parametric (model-weight) fallback permitted.
- Claim-governance scanner runs on 100% of RAG outputs.
- User queries are never stored for training.

## Data sources named
- The Vault (internal evidence store; ACTIVE, T1–T3, TTL-valid documents only)

## Findings (numbers and facts, not vibes)
- Evidence comes from the Vault ONLY; when no eligible evidence exists, the mandatory response is INSUFFICIENT_EVIDENCE — the model may not answer from parametric knowledge.
- Tier floor varies by surface: different surfaces get different minimum evidence tiers.
- Audit logging: every RAG call logs a SHA-256 hash of the query (never the plaintext query), with 90-day retention.
- A claim-governance scanner runs on 100% of RAG outputs to catch unverified claims before they reach users.
- No user query may be stored or used for training.
- Retrieval latency budget is 5s; a retrieval that cannot complete in budget returns INSUFFICIENT_EVIDENCE rather than a partial/ungrounded answer.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] Vault-only evidence with mandatory INSUFFICIENT_EVIDENCE fallback — the RAG layer cannot hallucinate answers from parametric knowledge; absence of evidence is reported as absence.
- [TRUST-SIGNAL] 100% claim-governance scanning of RAG outputs — every retrieved answer is claim-checked before reaching the user.
- [OTHER] SHA-256 query hashing + 90-day retention — auditability without storing user plaintext.
- [OTHER] 5s retrieval latency budget — retrieval that misses budget fails closed to INSUFFICIENT_EVIDENCE.
- [OTHER] Per-surface tier floors — higher-trust surfaces demand higher-tier evidence.

## Engine-actionable? (yes/no + one-line what)
Yes — adopt the structural pattern: any engine explainer/QA surface should ground only on measured state and return an explicit insufficient-evidence refusal when ungrounded (this is the same design as ledger row J-1's grounded-reasoning module).
