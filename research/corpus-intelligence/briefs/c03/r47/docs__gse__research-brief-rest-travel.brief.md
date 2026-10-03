# docs/gse/research-brief-rest-travel.md
## What it is (1-2 sentences)
A complete, no-claim example research brief (Level 1 — Interpretation) built from `research-brief-template.md`, examining how short rest (e.g., Thursday after Sunday) and long travel relate to NFL and NBA team scoring and result variance. Draft-only; owner review required before external use.

## Key metrics/methods (formulas where given, else "not specified")
- not specified (no formulas; qualitative brief format).
- Decision-hygiene method: falsifiable retirement rule written before looking at new data — e.g., "over the next 50 qualifying short-rest games, if margin variance is not materially higher than standard-rest games, retire the short-rest caveat."
- Evidence requirements: captured rights snapshot per source, exact window analyzed, per-spot sample sizes stated plainly, counterexamples + at least one failure mode.

## Data sources named
- Public schedule + final-score data (rights-gated via the clearance engine) plus internal notes; manual notes tagged with consent and a review timestamp.

## Findings (numbers and facts, not vibes)
- Short rest: teams on short rest "tend to show higher result variance" than standard-rest teams in samples reviewed — direction suggestive, not settled (COACHING/OTHER: the defensible read is "wider uncertainty," not a known direction — a reason to widen confidence bands, not assume a result).
- Long cross-country travel before an early local kickoff: effect is "small and noisy" once injuries and opponent strength are accounted for (OTHER: confounds — injury status, roster-rest decisions, opponent quality — can each exceed the rest/travel signal).
- Per-spot samples are usually small; multi-season pooling mixes rule eras (OTHER: sampling caveat for any rest/travel feature).

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Short rest → higher result variance, defensible read = widen confidence band — COACHING (rest management / schedule spot as variance driver, not direction driver).
- Travel effect small and noisy after confounds — OTHER (travel as weak signal; confounds dominate).
- Injuries, roster-rest decisions, opponent quality can exceed the rest/travel signal — COACHING (roster management confounds).
- Falsifiable pre-registered retirement rule — TRUST-SIGNAL (decision-hygiene template for retiring stale briefs).

## Engine-actionable? (yes/no + one-line what)
Yes — treat short-rest as a confidence-band widener (variance feature), not a direction feature, with a pre-registered 50-game falsification rule before it earns weight.
