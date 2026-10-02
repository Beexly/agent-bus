# arxiv-program/research/2026-09-21/arxiv-deep/0017-cross-individual-generalizability-ml-pitching.md
## What it is (1-2 sentences)
A full-text-attempted read of arXiv:2605.05487 (Takamido et al., 2026) on cross-individual generalizability of ball-speed prediction models in baseball pitching; verdict BLOCKED — only the abstract is accessible (ar5iv renders 34 lines, PDF link redirects to abstract, arXiv HTML fetch failed twice), so no ADOPT/ADAPT/REJECT verdict can be assigned. Recommend re-attempt in a later wave.
## Key metrics/methods (formulas where given, else "not specified")
- Not stated in paper beyond abstract: model classes, features, equations all unavailable.
- Validation design (from abstract): leave-one-subject-out CV across 50 pitchers from various competitive levels; within-individual baseline; subgroup by expertise (Expert vs Intermediate); spatiotemporal body-segment restriction conditions (trunk, pivot leg named).
## Data sources named
Motion-capture spatiotemporal data from 50 baseball pitchers; equipment/sampling not stated in abstract.
## Findings (numbers and facts, not vibes)
- Cross-individual R² drops from 0.91 (within-individual) to 0.38 — a 0.53 absolute gap.
- Model overestimates Intermediate pitchers relative to Experts: significant group difference in signed prediction error (p < .05).
- Trunk and pivot leg show relatively high cross-individual generalization; pivot leg R² > 0.25 even during weight-shift initiation phase.
- No model names, per-segment tables, error distributions, or per-group sample sizes available from the abstract.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: standing validation-design rule for GSE — require leave-one-player-out (or leave-one-team-out) CV for any player-level prediction model and report the within-vs-cross gap as a standard model-card metric; within-individual CV massively overstates real-world performance (0.91 → 0.38). Directly relevant to prop models evaluated on player-held-out vs game-held-out splits.
## Engine-actionable? (yes/no + one-line what)
Yes — as a methodological rule, not a build: mandate within-vs-cross-player CV gap reporting on all GSE player-level models (runnable now, independent of unblocking the paper).
