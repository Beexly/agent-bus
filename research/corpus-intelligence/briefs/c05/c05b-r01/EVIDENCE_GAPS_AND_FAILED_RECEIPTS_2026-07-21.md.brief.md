# docs/ai/phase0/EVIDENCE_GAPS_AND_FAILED_RECEIPTS_2026-07-21.md
## What it is (1-2 sentences)
A Phase-0 evidence audit dated 2026-07-21 that preserves failed/empty receipts as `FAILED_CLOSED` evidence (no live NOVA source-validation receipt exists) and documents three concrete evidence gaps the session itself found, ending with a standing rule that any quantitative claim must cite a verifiable receipt or be labeled `UNVERIFIED`.
## Key metrics/methods (formulas where given, else "not specified")
- Not specified — this is an evidence-discipline document. Its operative method is the **receipt schema** for any live-source validation run, requiring all of: exact command invoked; start/end timestamp; code SHA at run time; source-registry version; per-source outcome ledger (success/failure/skip); raw stdout/stderr artifact; immutable receipt hash tying the above together; explicit classification of any failed source (never silently omitted).
- The **standing rule**: every claim of the form "X credits are available," "X dollars saved," "X provider is confirmed active," or "X source was validated" must cite one of: (a) a GitHub Actions run ID + job conclusion; (b) an actual billing/credit-balance API response with timestamp; (c) a reproducible command + captured stdout/stderr; (d) an explicit owner attestation labeled as such. Anything else is a draft claim and must be labeled `UNVERIFIED`.
## Data sources named
- NOVA live-source registry (validation produced no receipt — `NOVA_LIVE_SOURCE_VALIDATION_REPORT.md` states the validation command produced no receipt; `NOVA_CURRENT_AI_ECOSYSTEM_SNAPSHOT.md` states no live source receipt was available).
- GitHub Actions `check_runs` API (PR CI statuses — the one receipt type this session treats as properly verifiable: job IDs, timestamps, conclusions captured in tool-call history).
- AWS/Google billing statements / credit-balance APIs (reconciliation standard for the `creditPoolForModel()` attribution claim — never performed).
## Findings (numbers and facts, not vibes)
- **NOVA validation status: FAILED_CLOSED** — no live-source receipt exists; deliberately not re-run in Phase 0 (out of scope: Phase 0 is repository-truth/convergence work; plus the session ran in a network-restricted environment that would not reproduce NOVA's live-fetch behavior, evidenced by `<urlopen error [Errno -3] Temporary failure in name resolution>` on every GitHub API lookup in `NOVA_BRANCH_CI_STATUS.md`).
- **Evidence gap #1**: integration guides (`AWS-BEDROCK-CLAUDE.md`, `GOOGLE-VERTEX-AI.md`) originally stated program maximums as available runway — corrected in-session against an external user-provided audit, not caught by any repo-enforced gate; no automated claim-verification exists (see ADR 3.7).
- **Evidence gap #2**: `credit-pool.ts` docstring asserts model-ID shape proves which credit pool "paid for" a call — never reconciled against an actual billing statement or credit-balance API; treat every `creditPoolForModel()` output as an **unverified hint**, not a confirmed financial fact, until Phase 3 credit reconciliation exists.
- **Evidence gap #3 (positive control)**: this session's own CI-status reporting used GitHub Actions `check_runs` results (real, verifiable receipts) — presented as the correct pattern contrasting gaps #1 and #2.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- FAILED_CLOSED receipt discipline for unvalidated sources → TRUST-SIGNAL
- Standing rule: quantitative claims need verifiable receipts or UNVERIFIED label → TRUST-SIGNAL
- Receipt schema (command + SHA + registry version + per-source ledger + raw artifact + receipt hash) → TRUST-SIGNAL
- Contrast of prose claims vs. machine-verifiable receipts → OTHER (evidence methodology)
## Engine-actionable? (yes/no + one-line what)
**Yes** — adopt the standing rule for all engine claims (performance stats, calibration numbers, "source validated" statements must cite a run ID, billing API response, or reproducible command, else labeled UNVERIFIED), and reuse the receipt schema for any future live-source validation of odds/prop/injury feeds before they inform picks.
