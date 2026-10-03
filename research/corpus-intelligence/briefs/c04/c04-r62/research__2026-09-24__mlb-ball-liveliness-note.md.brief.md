# docs/research/2026-09-24/mlb-ball-liveliness-note.md
## What it is (1-2 sentences)
An UNVERIFIED lead note (2026-09-24) on a suspected mid-season MLB ball-liveliness change ("juiced ball" speculation), sourced from an Instagram save (@dugoutforever 2026-06-24) that itself cites a Sean Zerillo (Action Network) analysis: the baseball may have changed mid-season with no MLB announcement, and early numbers fueled speculation the ball got livelier.
## Key metrics/methods (formulas where given, else "not specified")
not specified. No numbers in the file — the caption is explicitly called a stub, and the file itself is a lead-to-verify, not a data intake.
## Data sources named
- Instagram save @dugoutforever 2026-06-24 — "Is MLB juicing the balls again?"
- Sean Zerillo / Action Network analysis (the underlying claim belongs to Action Network, not the poster)
## Findings (numbers and facts, not vibes)
- Claim status: UNVERIFIED lead. The note explicitly says: "Do not let it touch model priors until step 1 completes."
- The author's argument for filing it: ball liveliness is a totals-model input; if the ball changes mid-season, any totals prior trained on early-season data drifts — this is the "context matrix / regime change" problem the v5.3.0 build spec's Workstream 5 covers.
- Prescribed verification path: (1) pull the Zerillo/Action Network piece and check whether the effect survived the 2026 season (season is over — did HR rates regress?); (2) if real, file as a regime-change covariate in the context matrix (ball-batch era flag on MLB totals).
- Content note (secondary): "the juiced-ball debate" is evergreen Shorts-pipeline material, but only after verification — never as an unverified claim.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Regime-change covariate concept: ball-batch era flag on MLB totals, i.e., treat equipment/conditions as a discrete regime shift that invalidates pre-change priors → OTHER (modeling/calendar structure, MLB totals).
- Explicit doctrine that unverified leads stay out of model priors — an intake-hygiene rule worth citing when gating other speculative signals → OTHER.
## Engine-actionable? (yes/no + one-line what)
Yes — add a "regime-change covariate" hook (ball-batch era flag) to the MLB totals context matrix and wire the verification step as a follow-up task, per the note's own wire-up plan.
