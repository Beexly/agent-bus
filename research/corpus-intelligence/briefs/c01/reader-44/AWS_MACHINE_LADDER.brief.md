# fable/aws/AWS_MACHINE_LADDER.md

## What it is (1-2 sentences)
A seven-level ladder (updated 2026-07-03) defining where work runs before AWS is justified — local repo (0) up through paid/production AWS (6) — with exit triggers, current position, and machine metrics.

## Key metrics/methods (formulas where given, else "not specified")
- Levels: 0 local repo (docs, tests, fixtures, validators; exit: local bottleneck measured); 1 local scripts (replay, schema validation, mock plans; exit: data volume/runtime exceeds laptop budget); 2 CI runner (no-cost PR checks; exit: CI minutes/secrets limiting); 3 disposable local container (isolated service simulation; exit: container test proves service need); 4 read-only AWS discovery (account inventory only; exit: owner approves profile/region); 5 reversible AWS preview (isolated non-production; exit: owner approves cost and rollback); 6 paid/production-sensitive AWS (blocked by default; exit: second owner confirmation).
- Machine metrics: local runtime; fixture size; replay reproducibility; CI pass rate; estimated AWS monthly cost; rollback steps; data-rights certainty.
- Rule: do not climb because AWS is available — climb only when a measured local constraint and owner approval justify it. No formulas.

## Data sources named
None.

## Findings (numbers and facts, not vibes)
- GSE/FABLE's stated current position on this learning bridge is levels 0–2.
- The ladder's discipline (measure the constraint, then get owner approval) mirrors the doc set's broader default-deny posture; level 6 requires a second owner confirmation.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Pure infra-governance; no QB, coaching, OL, scheme, or trust-signal content → tag: OTHER.

## Engine-actionable? (yes/no + one-line what)
No — process governance only; no engine content to wire.
