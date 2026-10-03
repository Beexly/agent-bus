# docs/fable/MODEL_CALIBRATION.md
## What it is (1-2 sentences)
Short governance note defining the FABLE lane's calibration surfaces, evidence rules, and a blocked-claim example; no new model runtime was added — MC Dropout stays a documented contract idea until the owner approves an ML runtime.
## Key metrics/methods (formulas where given, else "not specified")
- Calibration surfaces: packages/prediction-engine/src/probability-calibration.ts; calibration-map.ts; calibration-drift.ts; tests under packages/prediction-engine/src/__tests__/calibration-*.test.ts.
- Rules: Brier score and ECE claims require measured output; calibration changes must record baseline window, recent window, sample size, metric definitions, and command output; fixture-only demonstrations acceptable only when labeled as fixture-only.
- Blocked claim example: do not write ".5+ Brier/ECE gain" unless a repo-data report proves the exact number.
## Data sources named
- The three calibration source files and calibration test files in packages/prediction-engine (no external data sources named).
## Findings (numbers and facts, not vibes)
- No new model runtime was added; MC Dropout remains a documented contract idea unless the owner approves an ML runtime.
- The file is a ruleset, not a results report — it contains no measured Brier/ECE numbers.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Measured-only Brier/ECE evidence rules (baseline window, recent window, sample size, command output required) → TRUST-SIGNAL.
- Everything else → OTHER (governance).
## Engine-actionable? (yes/no + one-line what)
Yes — port the measured-only calibration evidence rules into the GSE engine workflow: every Brier/ECE claim must cite baseline window, recent window, sample size, metric definitions, and command output, and fixture-only demos must be labeled.
