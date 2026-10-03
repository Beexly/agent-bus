# ops/archive/prompts/CODEX_DOCS_PARITY_SYNC_BRIEF.md
## What it is (1-2 sentences)
The execution brief issued to Codex for the docs-only parity sync that closes the 60-file gap between the AI Sports cowork workspace and the primary clone (2026-05-27): exact file list, copy script, hard rules, and completion criteria.

## Key metrics/methods (formulas where given, else "not specified")
- 60 missing files + 4 updates from inventory; `docs/ops/decision-log.md` explicitly NOT overwritten (primary 46062 bytes vs scratch 20799 bytes — primary is newer/larger).
- Post-copy validation: lint, typecheck, test, build all pass; `git diff HEAD -- apps/ packages/ workers/` must show no changes from this task; commit message `docs: parity sync Wave 1-3 docs from AI Sports workspace`.

## Data sources named
- Source `C:\Users\Garrett\Documents\Claude\Projects\AI Sports\`, target `C:\Users\Garrett\Sports\`; inventories `_pre_sync_inventory_2026-05-27.csv`, `_manifest_allowed_copy_plan_2026-05-27.csv`; `WAVE_COMPLETION_REPORT_2026-05-27.md`.

## Findings (numbers and facts, not vibes)
- Full 60-file manifest enumerated by zone: docs/agents 2, docs/audit 6, docs/brain 16, docs/data 2, docs/design 9, docs/media 5, docs/models 6, docs/performance 7, docs/source-providers 3, docs/ops 5, plus root DESIGN.md.
- 3 of the 4 update files copied (improvement-backlog, issue-queue, stuck-queue); decision-log skipped by rule.
- Hard rules: docs-only; no `apps/**`, `packages/**`, `workers/**`, `docs/product/**`, `docs/monetization-v3/**`; no `.ts/.tsx/.js/.json/.lock/.prisma`; no test files; no commit until validation passes.
- Completion criteria are checkboxes (all 60 present, decision-log untouched, no impl diff, all four validations green, commit pushed); open Zone 3 implementation requests await owner approval per the wave report.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Repo-hygiene execution brief (historical) — [OTHER]

## Engine-actionable? (yes/no + one-line what)
no — Historical docs-sync brief; no model, metric, or prediction content.
