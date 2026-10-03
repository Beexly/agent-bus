# docs/arxiv-program/research/2026-09-21/arxiv-deep/0422-a-survey-of-data-synthesis-approaches.md
## What it is (1-2 sentences)
Deep read (arXiv:2407.03672v1, Chang et al.) of a survey taxonomizing data synthesis for ML: 4 augmentation objectives × 4 generation eras × 3 filtering objectives, with future priorities (quality over quantity, standardized synthetic-data evaluation, multimodal augmentation).

## Key metrics/methods (formulas where given, else "not specified")
- Taxonomy: objectives = diversity, balancing, domain shift, edge cases; generation eras = (1) expert-knowledge/rule-based, (2) train generative models on real data, (3) pretrain-then-fine-tune, (4) foundation models prompted without fine-tuning; filtering objectives = basic quality, label consistency, data distribution.
- Validation guidance: downstream task performance, human evaluation, distributional similarity. No equations; no original experiments or numbers.

## Data sources named
None — survey. Companion literature/code list: https://github.com/MiuLab/SynData-Survey.

## Findings (numbers and facts, not vibes)
- The survey's own warning: synthetic data can silently distort the training distribution — hence the "data distribution" filtering objective.
- Label consistency is the binding constraint for rare sports states: synthetic "rare game state" plays need trustworthy outcome labels, but rare NFL states (e.g., 4th-and-15 from own 10, down 8, 1:40 left) have almost no real outcomes to anchor them.
- Era-4 (LLM generation without fine-tuning) risks confident fabrication violating football's structural constraints (down/distance logic, clock rules).
- If synthetic rows leak into the final evaluation window, all performance claims are void — the taxonomy does not enforce evaluation hygiene.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — constrained augmentation pilot for the 4th-down/WP model and rare prop angles (defensive-TD props): era-1 rule-based perturbations of real plays within football-legal bounds (down/distance ±1, yard line ±3, score ±3, clock ±30s), deterministic label recomputation, synthetic rows capped at ≤10% of any batch, zero synthetics in test windows.

## Engine-actionable? (yes/no + one-line what)
Yes — use the taxonomy as the design checklist (not a pipeline): 1–2-day rule-based perturbation engine + filters; gate: beat class-weighting by ≥0.003 Brier on an untouched chronological holdout with calibration slope in [0.9, 1.1].
