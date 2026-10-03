# fable/VALIDATION_REPORT.md
## What it is (1-2 sentences)
A short status report of FABLE validation scope: what has Vitest coverage, where command outcomes are recorded (CODEX_FINAL_REPORT.md, aws/AWS_FINAL_REPORT.md), the validation scope list, a known caveat, and a pointer to the repeatable protocol.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — scope is listed but no pass counts, thresholds, or metrics given.
## Data sources named
Repo-internal: `docs/fable/validation/VALIDATION_PROTOCOL.md`, `CODEX_FINAL_REPORT.md`, `aws/AWS_FINAL_REPORT.md`.
## Findings (numbers and facts, not vibes)
- [OTHER] Validation scope covered: source registry adapter/status mapping; uncertainty ranking strategies; labeling manifest schema and local cost simulation; PSI, KL divergence, and chi-square drift checks; safe football segment parity blocking; AWS deploy and paid-resource gate defaults; unsupported claim scanning for FABLE docs; claim/evidence ledger schema validation; GitHub navigation validation; fixture-only forensic demo reproduction. New FABLE primitives have focused Vitest coverage.
- [TRUST-SIGNAL] Known caveat (honesty check worth preserving): passing local tests do not prove live data freshness, provider rights, paid AWS setup, or production operations.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
Tagged per-finding above. No QB-BEHAVIOR, COACHING, OL, or SCHEME content.
## Engine-actionable? (yes/no + one-line what)
No — status summary only; the drill-down targets (metric derivations, drift checks, calibration) live in the files it indexes.
