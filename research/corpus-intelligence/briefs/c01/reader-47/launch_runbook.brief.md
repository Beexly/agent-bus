# launch-runbook.md
## What it is (1-2 sentences)
Operator launch runbook taking the platform from "validated and merged" to "publicly available with safe performance claims": pre-flight, local verification, staging validation, performance-gate opening (`PERFORMANCE_STATS_ENABLED=true`), rollback, daily checklist, and standing invariants.
## Key metrics/methods (formulas where given, else "not specified")
- Dev seed: ~38 synthetic picks (8 pending canonical, 18 canonical settled mostly wins, 12 bootstrap-era), `modelVersion='v5.0.0-seed'`, purged by `DELETE FROM picks WHERE model_version = 'v5.0.0-seed'`; only created when `db.pick.count() === 0` and `NODE_ENV !== "production"`.
- Performance gate opens at `Public-eligible >= 25` settled canonical picks (default `minSettledPicksForLearning` = 25); win-rate claim threshold: ≥30 settled picks with defined window + model version (from claim-governance table in media-studio-workflow).
- CI guardrails chain (6 checks): `trust-gate && model-freeze && draft-only && claude-api-usage && secret-scan --all && eval-contracts`.
- Formulas not specified.
## Data sources named
- Internal only: Postgres pick tables, `PickSignalSnapshot` (`eligibleForLearning=true`), ingestion/settlement run tables, Signal Ledger.
## Findings (numbers and facts, not vibes)
- Jarvis cockpit states: `LAUNCH_READY_PENDING_EXTERNAL_CONFIG`, `LAUNCH_READY`; `/api/performance` must return 503 (not 200 empty) while the gate is closed.
- Standing invariants: bootstrap picks never count toward public stats; `result=PENDING`/`VOID` never count; MODEL_VERSION moves only with an IMPLEMENTED CalibrationProposal in the same change; no `PUBLISHED` on a ContentDraft without explicit operator action.
- Operator script index includes `npm run prod:probe`, `jarvis:diff`, `guardrails`, snapshot regen; snapshots live in `reports/launch-night/snapshots/`.
- 2026-06-30 update corrects the guardrails script list (adds claude-api-usage, secret-scan, eval-contracts) and notes the per-job CI list omits them.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- None football-related — pure launch/ops. (OTHER: performance-claim gating numbers — 25/30-pick thresholds — are product-trust policy, useful context for the public claims posture but not engine signal.)
## Engine-actionable? (yes/no + one-line what)
No — ops runbook; the only portable numbers are the 25-pick public-eligibility and 30-pick win-rate claim thresholds, which inform the publication honesty gate, not prediction.
