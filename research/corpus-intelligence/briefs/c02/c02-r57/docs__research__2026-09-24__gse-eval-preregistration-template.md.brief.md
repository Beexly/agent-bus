# docs/research/2026-09-24/gse-eval-preregistration-template.md

## What it is (1-2 sentences)
A measurement-first eval preregistration template for GSE experiments, inspired by a 2026-09-11 @datasciencebrain post ("Not the pipeline. The measurement."): write the success criterion into code BEFORE running anything, commit it so the goalposts can't move, and publish failures anyway. One copy per experiment: fill, commit, then run.

## Key metrics/methods (formulas where given, else "not specified")
Template fields (no fixed values; each experiment fills its own):
- Primary metric candidates named: scaled MAE / CLV sign rate / calibration ECE — no formulas specified.
- Threshold pattern: "beats baseline by ≥5% relative" (example only).
- Validity gates: no train/test leakage (cutoff respected); baseline is the real incumbent, not a strawman; no threshold tuning after seeing the answer; exact test used (McNemar / binomial / paired), p reported.
- Kill rule: if the criterion is not met at n, the experiment dies — no "one more tweak."
- Outcome field: MET / NOT MET; published anyway: yes (a failing number is proof the threshold wasn't tuned).
Applies to: TimesFM-3 eval, the prop-prompt pack validation, any new metric from the benchmark lane.

## Data sources named
- @datasciencebrain 2026-09-11 post ("Not the pipeline. The measurement." — Start Here / action board) as the source pattern.
- GSE internal: TimesFM-3 eval, prop-prompt pack, engine-benchmark lane metrics.

## Findings (numbers and facts, not vibes)
- The file defines a 7-section template: Hypothesis (one sentence) → Dataset (frozen) → Success criterion → Validity gates → Kill rule → Results (filled after).
- Dataset section requires: frozen source table/query + row count; train/cutoff and test window dates with no peeking past cutoff; sample size n fixed in advance.
- Validity gates are written as "any one voids the result, including a win."
- Stated purpose: make goalpost-locking a GSE habit; the engine-benchmark standing rule already demands this discipline — the template is the form.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Pre-registered success criteria + published failures = anti-p-hacking discipline for every engine claim (TRUST-SIGNAL).
- "Baseline is the real incumbent, not a strawman" = anti-strawman gate on all benchmark comparisons (TRUST-SIGNAL).
- Kill rule at fixed n prevents endless tweaking of model/calibration work (TRUST-SIGNAL).
- Frozen dataset + cutoff = leakage control for backtests (OTHER — eval methodology).
- Exact-test requirement (McNemar / binomial / paired) standardizes significance reporting across lanes (OTHER).

## Engine-actionable? (yes/no + one-line what)
Yes — copy this template into the engine repo as a required per-experiment artifact (fill → commit → run) so every eval claim ships with locked success criteria and published failures.
