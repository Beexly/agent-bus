# fable/CLAUDE_SECOND_LEVEL_HANDOFF.md

## What it is (1-2 sentences)
Handoff note for the `codex/fable-nfl-evidence-integration` branch, recording changed areas, tests to run, unsupported claims, evidence-ledger location, and a "do not trust yet" list. Extended by `docs/fable/CODEX_THIRD_PASS_REPORT.md`; master handoff is `docs/fable/master/MASTER_FINAL_REPORT.md`.

## Key metrics/methods (formulas where given, else "not specified")
Not specified — no formulas, metrics, or methodologies in this file.

## Data sources named
- Evidence ledger: `docs/fable/evidence/CLAIM_EVIDENCE_LEDGER.json`
- Unsupported claims: `docs/fable/evidence/UNSUPPORTED_CLAIMS.md`
- AWS decision engine: `apps/web/lib/fable/aws-decision-engine.ts` + tests (`aws-decision-engine.test.ts`, `aws-gates.test.ts`, `evidence-harness.test.ts`, `docs-claims.test.ts`)
- Guardrails: `npm run guard:secrets`, `npm run guard:trust`
- Evidence scanner: `.github/workflows/fable-evidence.yml`

## Findings (numbers and facts, not vibes)
- Branch: `codex/fable-nfl-evidence-integration`; previous workspace typecheck failure is resolved (see `docs/fable/master/TYPECHECK_DECISION.md`).
- AWS model leverage was docs-only — no model calls; Amplify decision was docs-only spike, no migration; SageMaker ADR status is local-first, cloud ML requires owner approval.
- AgentCore firebreak: default deny; Clean Rooms demo is synthetic only; edge lab is backlog-seeded, not validated; red-team status is initial hostile review documented.
- Explicit "Do not trust yet" list: model gain; broad legal approval; live AWS setup; paid labeling; public demo freshness.
- Tests named: `npm run fable:evidence`, `npm run fable:demo`, `npm run fable:aws-gates`, plus per-workspace test and typecheck commands.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- File is repo-infrastructure and governance; no QB, coaching, OL, scheme, or player/coach quote content → tag: OTHER (evidence-ladder and trust-gate infrastructure only, relevant only as the scaffolding that governs which engine claims are treated as supported).

## Engine-actionable? (yes/no + one-line what)
No — governance/infra handoff; the only intake value is the reminder that unsupported-claim tracking (`UNSUPPORTED_CLAIMS.md`, `CLAIM_EVIDENCE_LEDGER.json`) and the "do not trust yet" list are the house standard for engine claims.
