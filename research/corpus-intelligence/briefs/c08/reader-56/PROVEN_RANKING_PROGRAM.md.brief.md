# docs/ops/PROVEN_RANKING_PROGRAM.md
## What it is (1-2 sentences)
The "PROVEN" north-star doctrine for the ranking/publishing pipeline: measure residual skill by sport/market group, drop dead groups, publish selectively through confidence and edge thresholds, and only then enable maps and auto-publish. Very short — a pipeline sketch plus starting threshold values.
## Key metrics/methods (formulas where given, else "not specified")
Pipeline: Measure Res by sport|market → drop/pause dead groups → selective publish (thresholds) → market-relative features when lines exist → re-score holdout Res/AUC/Brier/ECE → only then maps + AUTO_PUBLISH. Selective thresholds (starting points): confidence |p−0.5| ≥ δ (δ in 0.08–0.15, drops coin-flips); edge |p−p_mkt| ≥ e (e in 0.03–0.05, aligns CLV story); group allowlist Res_g ≥ ρ or n_g ≥ n_min (kill dead leagues). `SELECTIVE_PUBLISH_ENABLED` default OFF; offline sweep via `selective-publish-sweep` in the holdout report.
## Data sources named
None.
## Findings (numbers and facts, not vibes)
- Next single engine change: ship a group pause list + confidence δ filter on generate-drafts (flagged), then re-run resolution-by-group after one slate cycle.
- Everything else is doctrine/threshold starting points rather than measured findings; no numbers measured in this file.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: selective publishing gated on measured group residual skill (Res_g ≥ ρ or minimum sample n_g) — only markets that demonstrate skill go public, which is the trust posture for published picks.
- OTHER: engine-loop sequencing — research → wire → measure-by-group → selective publish → auto-publish is the staged rollout discipline.
## Engine-actionable? (yes/no + one-line what)
Yes — implement the group pause list + confidence δ filter (|p−0.5| ≥ 0.08–0.15) on generate-drafts as the next engine change.
