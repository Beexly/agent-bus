# docs/fable/red-team/ADVERSARIAL_REVIEW.md

## What it is (1-2 sentences)
A red-team table assigning seven adversarial reviewers (NFL data lawyer, AWS security architect, DraftKings ML engineer, ESPN product lead, skeptical investor, open-source maintainer, harmed user) to specific attack vectors, listing evidence held vs. missing, and fixes required before public demo, partner outreach, and monetization.

## Key metrics/methods (formulas where given, else "not specified")
not specified — a qualitative triage table; no formulas or numeric metrics given.

## Data sources named
Internal artifacts only: source registry adapter, AWS gates and secret guard, calibration tests, forensic fixture, evidence ledger, claim scanner, local tests.

## Findings (numbers and facts, not vibes)
- [TRUST-SIGNAL] NFL data lawyer attack on source rights/tracking-data implication: evidence held = source registry adapter; evidence lacking = legal opinion; pre-demo fix = remove broad claims.
- [OTHER] AWS security architect attack on deploy/cost/secrets: evidence held = AWS gates + secret guard; lacking = account IAM review; pre-demo fix = no live AWS.
- [TRUST-SIGNAL] DraftKings ML engineer attack on "no measured lift": evidence held = calibration tests; lacking = replay gain; pre-demo fix = validation report; pre-outreach = benchmark; pre-monetization = monitored model.
- [TRUST-SIGNAL] Harmed-user attack on overconfident betting language: evidence held = claim scanner; lacking = full product-copy review; fixes escalate from trust guard → content policy → support controls.
- [OTHER] ESPN product lead attack on unclear demo value: evidence held = forensic fixture; lacking = user demo.
- [OTHER] Skeptical investor: evidence held = evidence ledger; lacking = revenue proof.
- [OTHER] Open-source maintainer: evidence held = local tests; lacking = CI history.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the red-team explicitly names the two gaps most relevant to a prediction engine — measured lift (replay gain, benchmark, monitored model) and overconfident betting-language policing.
- OTHER: this is product/process risk triage, not a predictive signal.

## Engine-actionable? (yes/no + one-line what)
yes — adopt the staged-evidence checklist (validation report → benchmark → monitored model) as the promotion gate before any model surface goes live.
