# docs/fable/evidence/COMMAND_LOG.md
## What it is (1-2 sentences)
Timestamped log of every command run during the FABLE first-level, second-level, and third-pass implementations, with pass/fail results, test counts, and notes on failure modes. Serves as the audit receipt for the FABLE evidence integration branch (`codex/fable-nfl-evidence-integration`).
## Key metrics/methods (formulas where given, else "not specified")
not specified — no formulas. Metrics reported are test counts, file counts, and guard-scan counts (listed under Findings).
## Data sources named
- Test workspaces: `apps/web` (lib/fable), `packages/prediction-engine`, `packages/data-ingestion`
- Guard scans over tracked repo files (secret guard, trust guard)
- Demo fixture `fixture-nfl-public-001`
## Findings (numbers and facts, not vibes)
- First-level: 7 web test files / 18 tests passed; prediction-engine 71 files / 738 tests; data-ingestion 16 files / 131 tests.
- `npm run typecheck` initially FAILED in `@sports/web` — prediction-engine BigInt literal files require ES2020-or-newer target; later passed after fix.
- `npm run fable:demo` emitted `fixture-nfl-public-001` with `probability_delta` of `0.11` and explicit `would_not_claim` caveats (confirmed in both second-level and third-pass runs).
- Trust guard scanned 1102 files then 1103 files; no banned phrases. Secret guard scanned 3051 files (second-level), 3051 then 3063 (final) — no secrets detected.
- Third-pass web tests: 9 files / 33 tests passed.
- `actionlint` was NOT run (unavailable on host); workflow YAML manually inspected.
- Branch `codex/fable-nfl-evidence-integration` pushed to `origin`; PR body local/copy-paste-ready (gh CLI unauthenticated).
- aws-decision-engine.ts measured 202 effective lines; other measured TS files below 140.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- 738 prediction-engine tests passing as part of FABLE evidence baseline — TRUST-SIGNAL
- Probability-delta 0.11 fixture output as the canonical demo evidence shape — TRUST-SIGNAL
- Typecheck failure → fix cycle (BigInt/ES2020 target) as build discipline evidence — OTHER
## Engine-actionable? (yes/no + one-line what)
no — process/audit artifact; the evidence-shape contract it records (probability_delta + would_not_claim) is actionable but already captured in the demo brief.
