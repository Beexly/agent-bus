# docs/reasoning/calibration-holdout-2025.md
## What it is (1-2 sentences)
A measurement-only calibration audit (Slice 10, 2026-09-27) scoring the pregame team-strength context model on a sealed 2025 holdout: Brier 0.223743 vs base-rate baseline 0.249848, with bootstrap-derived skill bounds. It concludes the model has real but unpublished holdout skill.
## Key metrics/methods (formulas where given, else "not specified")
- Brier score (model: 0.223743; always-predict-base-rate: 0.249848; always-predict-0.5: 0.250000).
- Brier skill vs base rate: +0.026190, with 95% bootstrap CI (10,000 paired resamples, seed 20260927) of [+0.010734, +0.041393]; P(skill>0) = 0.9997.
- Log loss 0.636548; ECE (10 bins) 0.051868.
- Out-of-sample by construction: trained only on seasons strictly before 2025 (`scripts/run-bridge.mjs:48`), scored 285 games of 2025.
- Reproducible via `node scripts/overnight/calibration-audit.mjs`; machine-readable at `data/reasoning/calibration-holdout-2025.json`.
## Data sources named
- `docs/reasoning/bridge-fit.json` (prior Brier 0.22374).
- Training set: 6,991 rows, 1999–2024, home-win base rate 0.564297.
- 285 games of 2025 as holdout.
## Findings (numbers and facts, not vibes)
- The model beats the base-rate baseline by +0.026190 Brier points; the bootstrap CI excludes zero, so the skill is not noise.
- ECE 0.0519 clears the documented publish bar (sample ≥ 250 and ECE ≤ 0.06) — "eligible, not published."
- It still may NOT be published or wired: (1) `f2 = 1` — `pregame_context_logit` duplicates the already-LIVE `historical_strength` family, so the family is DARK by the scalarizer; (2) policy — `probabilityClaimsAllowed` stays `false` and the calibration page stays dark.
- Broader caution: `marketFairProb`-into-`confidence` contamination means the confidence surface around such a model partly echoes the book; a clean Brier does not make the confidence number clean.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: demonstrates bootstrap-paired CI methodology for claiming real skill (+0.026 Brier, CI excludes zero); also flags that `marketFairProb`-into-`confidence` contamination corrupts published confidence — trust/reliability of engine outputs.
- OTHER: publish-gating policy (f2 duplicate rule, `probabilityClaimsAllowed=false`).
## Engine-actionable? (yes/no + one-line what)
no — measurement only by design ("fits nothing, changes no product confidence"); the skill finding is explicitly not wired due to duplication and policy gates.
