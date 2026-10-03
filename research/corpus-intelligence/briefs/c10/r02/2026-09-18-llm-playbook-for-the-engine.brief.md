# architecture/2026-09-18-llm-playbook-for-the-engine.md
## What it is (1-2 sentences)
Founder-directed 2026-09-18 memo mapping eight LLM-training concepts (self-supervised pretraining, dense labels, Chinchilla discipline, contamination control, eval-first, MoE-per-stratum, distillation, closed loop) to measured defects/absences in the GSE prediction engine, with file-level landing targets and honest constraints.
## Key metrics/methods (formulas where given, else "not specified")
- Certification gate floors (already built): n >= 100, Brier 0.22, debiased ECE 0.05, Murphy reliability 0.05, three-run streak, named basis tag; reports raw beside corrected.
- Market logit as a FIXED offset in per-stratum heads (not a fitted coefficient) — head learns only the residual vs market.
- CLV as dense auxiliary training target; sparse settled outcomes as primary (multi-task head). CLV must never be the win-prob label.
- Contamination measured in-repo: backfill-independent-trueprob.ts rewrites independentEdge.trueProb on settled rows (answer-fit); walk-forward.ts cuts folds by row index with fixture triplication (boundary leakage).
- BAEE_NUM_MODELS pinned at 1 with empty endpoint list (Bayesian model averaging never had a second model).
## Data sources named
~2,641 settled picks (entire labelled dataset); nflverse millions of unlabelled plays back to 1999; closing-line / line-movement ticks as dense labels.
## Findings (numbers and facts, not vibes)
- 2,641 settled picks is the whole labelled set; any deep model at that scale is over-parameterised — more parameters is the wrong answer (Chinchilla discipline).
- Two contaminations already MEASURED in repo: settled-row trueProb rewrite and row-index fold cuts with fixture triplication.
- "Ten months of work has not compounded because the loop was never closed": walk-forward, trials-registry, placebo, logit-pool, logistic, calibration-blend, evidence-readiness-matrix (13 factor keys, called by nothing at runtime), feature-store (point-in-time validated, zero registered features) — none wired/run.
- NFL stratum has ~70 settled picks ever — thin strata must borrow via partial pooling.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- 2,641-label ceiling → architecture-wide modelling discipline: OTHER
- CLV as dense auxiliary label (1-2 orders of magnitude more supervision than settlement): TRUST-SIGNAL
- Fixture-triplication contamination in walk-forward folds → audit rule for all engine CV claims: OTHER
- Market-as-offset per-stratum heads: OTHER
## Engine-actionable? (yes/no + one-line what)
yes — this is a build-priority memo itself: rulers first (T1/T2/T5), then capture sequence + line ticks, then close the loop, then representation and dense labels.
