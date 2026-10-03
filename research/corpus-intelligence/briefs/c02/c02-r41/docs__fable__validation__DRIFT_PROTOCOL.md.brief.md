# docs/fable/validation/DRIFT_PROTOCOL.md

## What it is (1-2 sentences)
A nine-item checklist defining what a valid drift check must contain: baseline and recent windows, feature/outcome distributions, a divergence statistic (PSI/KL/chi-square), a safe-football segment selection, a sample-size floor, a decision threshold, and a follow-up action.

## Key metrics/methods (formulas where given, else "not specified")
Named divergence methods only, no formulas and no threshold values: PSI (Population Stability Index), KL divergence, chi-square. Required fields: baseline window, recent window, feature or outcome distribution, PSI/KL/chi-square result, safe football segment selection, sample-size floor, decision threshold, follow-up action.

## Data sources named
None named (the file is method-level only).

## Findings (numbers and facts, not vibes)
- [TRUST-SIGNAL] A drift check is not considered complete unless all nine required fields are present — including an explicit decision threshold and a follow-up action, not just a statistic.
- [OTHER] "Safe football segment selection" is called out as a required field, i.e., drift checks must pick comparable, well-behaved football segments rather than any available window.
- [OTHER] Sample-size floor is a required field, implying underpowered drift checks are invalid by definition.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: drift monitoring with explicit thresholds + follow-up action is a trust/control signal, not a prediction feature.
- OTHER: method checklist only; no sports-specific content.

## Engine-actionable? (yes/no + one-line what)
yes — when the engine adds drift monitoring on features/predictions, require all nine fields (statistic + threshold + follow-up action, not statistic alone).
