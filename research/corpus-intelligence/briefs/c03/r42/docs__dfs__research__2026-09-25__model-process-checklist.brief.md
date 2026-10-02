# docs/dfs/research/2026-09-25/model-process-checklist.md
## What it is (1-2 sentences)
The "V8" pro-bettor model process checklist (from Rob Pizzola / Circles Off, transcribed into a handoff build spec): an ordered, mandatory seven-step process for shipping any sports prediction model — beatable market, data inventory, leakage review, preregistration, walk-forward vs closing line, honest-negative writeup, ship criteria — which the handoff makes the definition of "done" for every model build.
## Key metrics/methods (formulas where given, else "not specified")
- Ship criteria (all must hold): 0 leakage-probe failures; holdout Brier better than market baseline; holdout log-loss better than market baseline; passes W1 calibration gates; positive CLV on sealed holdout; thesis block present; known limitations stated; no `any`/fake data/imputed finals; reproducible (seeded, deterministic under V4 replay).
- Leakage probes: future-Elo contamination, current-week snap-share exclusion, sign-convention; chronological split only — random splits forbidden; post-kickoff fields may NEVER enter features; missing values stay `null`, no silent imputation.
- Evaluation: walk-forward vs no-vig closing line; report Brier, log-loss, CLV on sealed holdout; isotonic calibration applies ONLY if it improves holdout Brier.
- Isotonic discipline (from sjpagano's discipline referenced in the handoff): test isotonic on held-out data and reject it when it worsens the holdout (his numbers: Brier .1613, log loss .4831, AUC .8459, ECE .0331).
## Data sources named
None named explicitly — the checklist references internal repo artifacts: `src/eval/leakage-antipatterns.ts`, V7 `chronologicalSplit`, W2 `walkForwardSeasons` / closing-line-benchmark, V5 `validateSubmission` / `writeSubmissionCsv`, V1 probes, V2 `sealLastSeason`, W1 calibration gates; external ingestion is env-gated, no-store, fail-closed.
## Findings (numbers and facts, not vibes)
- Seven ordered steps; every step mandatory; a model that skips a step does not ship.
- If the model cannot beat the closing line on holdout, the honest answer is a negative result — and the negative result is itself a deliverable (no re-running windows, no dropping holdout, no silent target/metric changes).
- Closing lines are the ground truth for skill measurement: "Do not beat the close with metrics alone."
- Every shipped model has a V5 CSV submission on record with thesis and training window; no secrets in code or commits.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Anti-overfitting discipline: the only credible progress gate before calibration (TRUST-SIGNAL, OTHER).
- Honest-negative writeup as a deliverable — counters research-for-vanity drift (TRUST-SIGNAL).
- Closing-line-as-ground-truth: beats-metrics-alone discipline (TRUST-SIGNAL).
## Engine-actionable? (yes/no + one-line what)
Yes — adopt as the literal ship/no-ship gate for every engine model: leakage probes + sealed holdout + closing-line benchmark, with isotonic calibration gated on holdout Brier improvement.
