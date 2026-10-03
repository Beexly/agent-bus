# docs/fable/CODEX_FINAL_REPORT.md

## What it is (1-2 sentences)
The final verification report (updated 2026-07-03) of the Codex-built FABLE NFL evidence-integration pass on branch `codex/fable-nfl-evidence-integration`: a source-rights registry adapter, uncertainty ranking, local labeling manifest + cost simulator, drift checks (PSI, KL, chi-square), claim-to-evidence ledger with an unsupported-claim scanner, AWS governance gates, and a public `/fable` route — with a full pass/fail verification log.

## Key metrics/methods (formulas where given, else "not specified")
- Uncertainty candidate ranking by **least confidence, margin, and entropy**. No formulas stated.
- Drift checks: **PSI, KL divergence, chi-square**; safe football segment parity. No formulas stated.
- AWS decision engine: local action tiering, blast-radius scoring, cost/IAM/data-rights risk, default-deny deployment gates. No formulas stated.
- Verification counts: 33 tests (9 files) + 27 tests (4 files) + 10 tests (3 files) for FABLE harnesses; 71 files / 738 tests for `packages/prediction-engine`; 16 files / 131 tests for `packages/data-ingestion`; typecheck passed after raising `apps/web` TypeScript target to ES2020; `guard:secrets` scanned 3,063 tracked files (no secrets); `guard:trust` scanned 1,103 files (no banned phrases); `git diff --check` clean.
- `fable:aws-intel` emitted: `docs_required: 19`, `docs_present: 19`, `live_aws_action: false`, `paid_resource_used: false`, 5 local fixtures, 6 of 6 Well-Architected pillars, 6 shadow guardrails, 6 generated lens checks.
- Forensic demo: fixture-only report `fixture-nfl-public-001` emitted a `probability_delta` of **0.11**.

## Data sources named
- Existing source rights registry (FABLE adapter layered over it).
- Local AWS fixture library: S3 storage policy mocks, fake IAM review cases, SageMaker model-card fixture, Bedrock/AgentCore refusal cases, Clean Rooms synthetic NFL scenarios.
- Public `/fable` route with evidence summary loader, sitemap entry, output-file tracing for local FABLE docs.
- GitHub publication path: `https://github.com/Beexly/Sports/pull/new/codex/fable-nfl-evidence-integration` (branch pushed; PR-ready notes written in docs because `gh auth status` failed — CLI not logged in; actionlint unavailable on host so the workflow YAML was manually inspected).

## Findings (numbers and facts, not vibes)
- All evidence harnesses passed: `fable:evidence` OK; `fable:claims` OK; `fable:sources` OK; `fable:aws-gates` OK; `fable:aws-fixtures` OK; `fable:aws-governance` OK. [OTHER]
- Claim-to-evidence ledger + unsupported-claim scanner passed (`OK - claims`); docs claim scanner test passed. [TRUST-SIGNAL, OTHER]
- Drift suite implemented: PSI, KL divergence, chi-square checks plus safe football segment parity. [OTHER]
- Local labeling manifest schema + cost simulator implemented. [OTHER]
- AWS safety confirmed: no account mutation, no deploy, no DNS/production traffic, no paid AWS resources or ML runtime, no provider rights changed, no secrets read/printed/committed. [OTHER]
- Local `/fable` route probe at `http://127.0.0.1:3057/fable` returned HTTP 200 with FABLE Evidence Lab, AWS gate language, owner/approval/blocking language, and a Proof of Record link (before MAXFORCE fixture expansion; server stopped and port confirmed closed after). [OTHER]
- Typecheck passed after raising the `apps/web` TypeScript target to ES2020 and clearing generated build-info cache. [OTHER]
- 738 tests passed across 71 files in `packages/prediction-engine`; 131 tests across 16 files in `packages/data-ingestion`. [OTHER]
- `guard:secrets`: 3,063 tracked files scanned, no secrets; `guard:trust`: 1,103 files scanned, no banned phrases. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Claim-to-evidence ledger + unsupported-claim scanner (evidence-backed public claims): TRUST-SIGNAL
- Drift checks (PSI, KL, chi-square) and uncertainty ranking (least confidence, margin, entropy): OTHER
- AWS governance gates, decision engine, default-deny deployment: OTHER
- Source-rights registry adapter, labeling manifest, cost simulator: OTHER

## Engine-actionable? (yes/no + one-line what)
yes — Adopt the claim-to-evidence ledger + unsupported-claim scanner as the engine's provenance backbone so every public projection links to its evidence, and wire the PSI/KL/chi-square drift checks into the calibration loop.
