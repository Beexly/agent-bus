# reasoning/bridge-premises-audit-2026-09-27.md
## What it is (1-2 sentences)
A read-only 2026-09-27 audit of `data/gse-dataset/bridge-premises.jsonl` (285 holdout-game predictions from the `pregame_context_logit` logistic-IRLS model) that verdicts PASS on the in-sample question but rules the signal permanently DARK via the scalarizer duplicate check.
## Key metrics/methods (formulas where given, else "not specified")
- Method: logistic-IRLS (`logistic-irls`); one signal_id (`pregame_context_logit`), 285 rows × 285 distinct game_ids, 0 duplicates; probability range 0.18944950–0.88231212.
- `sample_count` = 6955 constant = number of training rows in the single IRLS fit (a model property, not per-game; must never be read as per-game sample size).
- Training: seasons 1999–2024 (26 seasons, ≈6955 rows) from `features.jsonl` (1999–2026); holdout: 2025 only, 285 games. Training filter at scripts/run-bridge.mjs:48 (`if (row.season >= 2025) continue;`). FORBIDDEN #16 not violated.
- Scalarizer block: the model is pregame team-strength context over margin_diff, scored_diff, allowed_diff, rest_diff, dome, neutral — same information class as `historical_strength`, which is already LIVE at weight 0.08 (f2=1 → DARK). Standing instruction: never pipe into live edge.
## Data sources named
`data/gse-dataset/bridge-premises.jsonl`; `scripts/run-bridge.mjs`; `data/reasoning/parts-registry.jsonl`; `docs/reasoning/bridge-premises-audit-2026-09-27.json` (machine-readable copy). Reproduce: `node scripts/overnight/audit-bridge-premises.mjs`.
## Findings (numbers and facts, not vibes)
- 285 rows, 285 distinct game_ids, 0 probability outside (0,1), range 0.18944950–0.88231212.
- sample_count=6955 on every row is the training-fit size, not a leak and not in-sample.
- Training 1999–2024, holdout 2025-only; every premise game_id is in the holdout set (true).
- Permanently DARK: duplicates `historical_strength` (LIVE, weight 0.08) per the scalarizer duplicate check; context priors never become the objective.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the constant-`sample_count` anomaly investigation — verified as benign model-fit metadata, not a leak — is a reusable audit pattern (distinguish model properties from per-row claims).
- OTHER: scalarizer precedent (f2=1 → DARK) for any new context-prior signal: dedupe against parts-registry before it can go live.
## Engine-actionable? (yes/no + one-line what)
No — audited PASS but permanently DARK; standing instruction is only to keep it out of `aggregateSignals`/`selectPart` unless a non-2025-trained fit passes the duplicate check.
