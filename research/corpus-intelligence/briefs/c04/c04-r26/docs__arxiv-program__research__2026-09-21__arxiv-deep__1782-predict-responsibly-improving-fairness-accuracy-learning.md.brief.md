# docs/arxiv-program/research/2026-09-21/arxiv-deep/1782-predict-responsibly-improving-fairness-accuracy-learning.md
## What it is (1-2 sentences)
Deep read of "Predict Responsibly: Improving Fairness and Accuracy by Learning to Defer" (arXiv:1711.06664). Verdict: ADAPT — the "defer based on both model and downstream decision-maker competence" framing is load-bearing for GSE (the posted card is a system of model + Garrett + market, not a model alone); needs numeric validation on sports data.

## Key metrics/methods (formulas where given, else "not specified")
- Adaptive learning-to-defer: joint training of predictor + deferral policy π(x) that routes each input to itself or the downstream decision maker, learning the human's competence map (where the human is biased → defer less; where the human is strong → defer more).
- System objective: minimize joint system loss over (predictor, deferral policy, fixed downstream decision maker) — optimize the pipeline's output, not standalone model accuracy.
- Fairness measured on system decisions; Pareto fronts of system accuracy vs fairness trade-off, each plotted point the median of five runs.

## Data sources named
Semi-synthetic COMPAS (recidivism) and Heritage Health (health risk) with simulated downstream decision makers in three regimes: high-accuracy, highly-biased, and inconsistent (noisy). GSE analog: game features → outcome; Garrett's historical leans/decisions as the decision-maker trace.

## Findings (numbers and facts, not vibes)
- Adaptive deferral system dominates fixed-deferral and no-deferral baselines on the accuracy–fairness frontier across regimes (Pareto plots only; no exact numbers tabulated).
- Inconsistent-DM regime: the human flips 30% of the selected subgroup's predictions — yet the joint system still improves over the model alone by learning where the human adds noise vs signal.
- Highly-biased regime: system learns to defer less to the biased human on the affected subgroup — fairness gain comes from routing, not changing the human.
- Limitations from file: simulated (not real) humans; non-stationary human not handled (paper assumes a fixed decision maker, but Garrett is a learning agent); no exact effect sizes; fairness criterion for sports unclear.
- Implementation spec in file: log (model pick, Garrett edit, graded outcome) triples; learn Garrett's competence map per game type; route around biased subgroups; measure Garrett's flip rate and keep noisy-subgroup picks on the model. Effort: ~1 week of analysis on logged triples.
- Gate: ADAPT if any stable subgroup shows Garrett's edits systematically help or hurt (|Δ units| significant over a season); if edits are pure noise everywhere, keep as conceptual lens only.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Model+human as a joint optimization unit, with the router learning the downstream decision maker's competence map: OTHER (human-in-the-loop system design — an engine-architecture principle, not a QB/coaching/OL/scheme/trust-signal finding).
- Auditing where a human's edits systematically help or hurt specific subgroups: OTHER (process discipline; closest analog is calibrating where analyst overrides add edge — but no QB-specific content).

## Engine-actionable? (yes/no + one-line what)
Yes (framing-level) — log (model pick, Garrett edit, outcome) triples to build Garrett's competence map, then audit whether a deferral router (follow model vs Garrett's edit by game type) beats either alone.
